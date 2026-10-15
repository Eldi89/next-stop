# Fermata

Five-minute lessons for the subway, plus Deep Dives, exams and a live morning market report.

## What is in this folder

| file | what it does |
|---|---|
| `index.html` | the whole app: design, all 98 lessons, quizzes and exams, works offline |
| `sw.js` | keeps the app and lessons available in the tunnel with no signal |
| `api/news.js` | the morning report service: live headlines and market prices, refreshed every morning |
| `vercel.json` | schedules the morning refresh at 6:30 AM New York time |
| `manifest.json`, `icon-*.png`, `fonts/` | Home Screen icon, name and typefaces |

## Put it online (same way as Nota Spese)

1. Create a new GitHub repository, for example `Eldi89/fermata`.
2. Upload **everything in this folder** to the root of the repo, keeping the `api` and `fonts` folders.
3. In Vercel: Add New → Project → import the repo → Deploy. No build settings needed.
4. On the iPhone open the Vercel link in Safari → Share → Add to Home Screen.

## Optional: the AI-written morning brief

Without a key, the report still shows live markets and headlines with an automatic summary.
For a short brief written by Claude each morning, add an environment variable in Vercel
(Project → Settings → Environment Variables):

- `ANTHROPIC_API_KEY` = your Claude API key (from console.anthropic.com)
- optional `ANTHROPIC_MODEL` to choose the model (default `claude-haiku-5-5`)

Then redeploy. Cost is a few cents a month for personal use.

## Changing the news sources

Open `api/news.js`: the `FEEDS` list at the top holds every source by section (stocks, analysis, learning).
Add or remove any RSS feed URL there. Market tiles are in the `MARKETS` list.

## Your progress

Progress lives on the phone. Use You → Back up progress to save a file, and Restore to move it to a new phone.
