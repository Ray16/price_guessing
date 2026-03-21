/**
 * Vercel Serverless Function: /api/daily-questions
 * Generates fresh quiz questions daily using Claude API.
 *
 * Query params:
 *   game  — "quote" or "music"
 *   date  — YYYYMMDD (used as cache key on client; server always generates fresh)
 *
 * Requires ANTHROPIC_API_KEY environment variable in Vercel project settings.
 */

import Anthropic from '@anthropic-ai/sdk';

const client = new Anthropic();

const QUOTE_PROMPT = `Generate 10 interesting "谁说的" (Who Said It?) quiz questions for a Chinese trivia game.
Mix Chinese classical quotes (Confucius, Laozi, Tang poets, Song lyricists) with international figures.
Output ONLY a valid JSON array, no markdown, no explanation:
[
  { "prompt": "「quote text」", "correctIdx": 0, "choices": [{"label":"CORRECT"},{"label":"WRONG1"},{"label":"WRONG2"},{"label":"WRONG3"}] }
]
Requirements:
- prompt: the quote wrapped in 「」
- correctIdx: always 0
- choices: correct answer at index 0, 3 plausible wrong answers from the same era/category
- Be creative, vary the categories each day`;

const MUSIC_PROMPT = `Generate 10 "听歌识曲" (Name That Song) quiz entries for a Chinese music game.
Include popular Mandarin songs available on iTunes. Mix different artists and eras.
Output ONLY a valid JSON array, no markdown, no explanation:
[
  { "name": "歌名", "artist": "歌手", "choices": ["正确歌名", "备选1", "备选2", "备选3"] }
]
Requirements:
- name must be first in choices array
- choices: 3 plausible alternative song names from the same artist/era
- Use real songs that are likely on iTunes`;

export default async function handler(req, res) {
  // CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  if (req.method === 'OPTIONS') return res.status(200).end();

  const { game } = req.query;
  if (!game || !['quote', 'music'].includes(game)) {
    return res.status(400).json({ error: 'game must be "quote" or "music"' });
  }

  try {
    const prompt = game === 'quote' ? QUOTE_PROMPT : MUSIC_PROMPT;

    const msg = await client.messages.create({
      model: 'claude-haiku-4-5-20251001', // Fast & cheap for daily generation
      max_tokens: 3000,
      messages: [{ role: 'user', content: prompt }],
    });

    const text = msg.content[0].text.trim();
    // Extract JSON array from response
    const jsonMatch = text.match(/\[[\s\S]*\]/);
    if (!jsonMatch) throw new Error('No JSON array in response');

    const questions = JSON.parse(jsonMatch[0]);

    // Cache for 1 hour (CDN will cache this)
    res.setHeader('Cache-Control', 's-maxage=3600, stale-while-revalidate=86400');
    return res.status(200).json({ questions, generated: new Date().toISOString() });
  } catch (err) {
    console.error('[daily-questions]', err.message);
    return res.status(500).json({ error: 'Generation failed', detail: err.message });
  }
}
