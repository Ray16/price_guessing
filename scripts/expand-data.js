#!/usr/bin/env node
/**
 * expand-data.js — Weekly automatic expansion of quote & music databases
 *
 * Uses the Anthropic Claude API to generate new quiz entries and appends them
 * to the data files. Run by GitHub Actions every Monday (or manually).
 *
 * Requirements:
 *   ANTHROPIC_API_KEY environment variable must be set.
 *   npm install @anthropic-ai/sdk
 */

import Anthropic from '@anthropic-ai/sdk';
import { readFileSync, writeFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');

const client = new Anthropic();

// ── How many new entries to add each run ──
const NEW_QUOTES = 50;
const NEW_SONGS  = 20;

// ────────────────────────────────────────────────────────────────
// Helpers
// ────────────────────────────────────────────────────────────────

function readDataFile(path) {
  const src = readFileSync(path, 'utf8');
  // Extract the array literal from `const DATA = [ ... ];`
  const match = src.match(/const DATA = \[([\s\S]*)\];/);
  if (!match) throw new Error(`Cannot parse DATA array in ${path}`);
  return { src, arrayContent: match[1].trim() };
}

function appendEntries(filePath, newEntriesJs) {
  const { src, arrayContent } = readDataFile(filePath);
  // Find the closing ]; and inject before it
  const insertionPoint = src.lastIndexOf('];');
  if (insertionPoint === -1) throw new Error('Cannot find closing ]; in ' + filePath);
  const updated =
    src.slice(0, insertionPoint) +
    '\n  // ── Auto-generated entries added ' + new Date().toISOString().slice(0, 10) + ' ──\n' +
    newEntriesJs.trim() + '\n\n' +
    src.slice(insertionPoint);
  writeFileSync(filePath, updated, 'utf8');
  console.log(`✅ Appended new entries to ${filePath}`);
}

// ────────────────────────────────────────────────────────────────
// Generate quote entries
// ────────────────────────────────────────────────────────────────

async function generateQuotes(count) {
  const prompt = `Generate ${count} new quiz entries for a Chinese "谁说的" (Who Said It?) game.

Rules:
- Each entry must be a real, verifiable quote with accurate attribution
- Mix Chinese classical quotes (Confucius, Laozi, Tang/Song poets, etc.) and international figures
- Do NOT duplicate these already-in-the-game:
  孔子/论语 quotes like 己所不欲勿施于人, 学而时习之
  李白, 杜甫, 苏轼, 辛弃疾 most famous lines
  Einstein, Edison, Shakespeare, Wilde classic quotes

Output ONLY valid JavaScript array entries in EXACTLY this format (no markdown, no explanation):
  { prompt: '「quote text here」', correctIdx: 0, choices: [{label:'CORRECT AUTHOR'},{label:'WRONG1'},{label:'WRONG2'},{label:'WRONG3'}] },

Requirements for each entry:
- prompt: The quote wrapped in 「」 brackets
- correctIdx: always 0
- choices: 4 options, correct at index 0, 3 plausible wrong answers from the same era/category
- Include variety: Chinese philosophy, Chinese poetry, Chinese modern, Western philosophy, Western literature, science, movies

Output ${count} entries, one per line, with comma at end.`;

  const msg = await client.messages.create({
    model: 'claude-opus-4-6',
    max_tokens: 8000,
    messages: [{ role: 'user', content: prompt }],
  });

  return msg.content[0].text;
}

// ────────────────────────────────────────────────────────────────
// Generate music entries
// ────────────────────────────────────────────────────────────────

async function generateSongs(count) {
  const prompt = `Generate ${count} new quiz entries for a Chinese "听歌识曲" (Name That Tune) game.

Rules:
- All songs must be real Chinese/Mandarin pop/rock songs available on iTunes
- Include a mix of artists: 陈奕迅, 薛之谦, 周杰伦, 五月天, 林俊杰, 王力宏, 张学友, 刘德华, 王菲, 邓丽君, 许嵩, 李荣浩, G.E.M. 邓紫棋, 毛不易, 周深, 赵雷, 以及其他知名华语歌手
- Do NOT include songs already in the database (common ones like 晴天, 告白气球, 十年, 好久不见, 富士山下, etc.)
- Each song needs 4 choices: the correct song name + 3 plausible alternatives (from similar artists/genre)

Output ONLY valid JavaScript array entries in EXACTLY this format (no markdown, no explanation):
  { name: '歌名', artist: '歌手名', choices: ['正确歌名', '备选1', '备选2', '备选3'] },

Requirements:
- name must appear as the FIRST element of choices
- choices should contain plausible alternatives that sound similar or are from the same artist/era
- artist name should match what appears on iTunes (e.g., '周杰伦', 'Beyond', 'G.E.M. 邓紫棋')

Output ${count} entries, one per line, with comma at end.`;

  const msg = await client.messages.create({
    model: 'claude-opus-4-6',
    max_tokens: 4000,
    messages: [{ role: 'user', content: prompt }],
  });

  return msg.content[0].text;
}

// ────────────────────────────────────────────────────────────────
// Main
// ────────────────────────────────────────────────────────────────

async function main() {
  console.log('🤖 Expanding quote database…');
  const newQuotes = await generateQuotes(NEW_QUOTES);
  appendEntries(join(ROOT, 'games/quote/data.js'), newQuotes);

  console.log('🎵 Expanding music database…');
  const newSongs = await generateSongs(NEW_SONGS);
  appendEntries(join(ROOT, 'games/music/data.js'), newSongs);

  console.log('🎉 Done! Both databases expanded.');
}

main().catch(err => {
  console.error('❌ Error:', err.message);
  process.exit(1);
});
