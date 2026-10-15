# FERMATA: content spec for writers

Fermata is an iPhone learning app used on the subway: 5-minute lessons a day, plus longer "Deep Dives" (30 to 60 min). Every subject is drawn as a subway line; each lesson is a station. The reader is a busy professional (a senior accountant in New York and Miami, multilingual, not a native English speaker). Write in **simple, clear, intuitive English**: short sentences, everyday analogies, concrete numbers, zero jargon without an immediate plain explanation. Warm, confident, never condescending. Original writing only: never reproduce text from books or articles (you may name a book or author and summarize an idea in your own words).

## Levels
- Level 1 = **101 Foundations** (assume zero knowledge)
- Level 2 = **201 Builder** (assumes 101)
- Level 3 = **301 Advanced** (assumes 101 + 201)

## Files (one subject = 6 files, in /home/claude/metro/content/)
| file | contains |
|---|---|
| `<subject>-L1.js` | the 5 short lessons of level 1 |
| `<subject>-L2.js` | the 4 short lessons of level 2 |
| `<subject>-L3.js` | the 3 short lessons of level 3 |
| `<subject>-D1.js` | Deep Dive 1 (level 1 capstone, ~30 min) |
| `<subject>-D2.js` | Deep Dive 2 / Masterclass (level 3 capstone, ~55 to 60 min) |
| `<subject>-exams.js` | the 3 level exams |

Each lesson file is exactly:
```
LEARN.add({"subject":"finance","lessons":[ {lesson}, {lesson} ]});
```
The exams file is exactly:
```
LEARN.addExams({"subject":"finance","exams":{"1":[ {question} x10 ],"2":[ x10 ],"3":[ x10 ]}});
```
**The object between `LEARN.add(` and `);` must be strict JSON** (double quotes, no trailing commas, no comments, no backticks, escape inner double quotes as \"). Use real Unicode characters (’ — × ÷ → €) freely, but **never use the dash characters "—" or "–" as punctuation in sentences**; use commas, colons, or periods instead (the owner dislikes dashes). Hyphenated words (long-term) are fine.

Subject ids and id prefixes: finance=`fin`, accounting=`acc`, investing=`inv`, stocks=`stk`, ai=`ai`, self=`self`, inner=`inner`.

## Lesson object
```json
{
  "id": "fin-1-01",              // prefix-level-NN ; deep dives: "fin-d1", "fin-d2"
  "subject": "finance",
  "level": 1,
  "order": 1,                    // position on the subject's line (see syllabus numbers)
  "type": "short",               // "short" or "deep"
  "minutes": 5,
  "title": "What money really is",
  "hook": "One sentence teaser that makes you want to read (max 120 chars).",
  "tags": ["inflation","money supply"],   // 3 to 8 lowercase keywords used to match live news headlines to this lesson
  "blocks": [ ...blocks... ],
  "takeaways": ["3 short bullets, each under 110 chars", "...", "..."],
  "quiz": [ ...questions... ]    // short: exactly 3 ; deep: 8 (D1) or 10 (D2)
}
```

## Question object (quizzes and exams)
```json
{"q":"Question text?","options":["A","B","C","D"],"answer":2,"why":"One or two sentences explaining the right answer."}
```
Always 4 options, `answer` is the 0-based index. Vary the position of the right answer. Distractors must be plausible. Exam questions must be NEW (not copies of lesson quiz questions) and mix concept checks with small applied scenarios ("Maria earns..."). Exams for a level cover all lessons of that level including the deep dive.

## Blocks
| block | shape | notes |
|---|---|---|
| paragraph | `{"t":"p","text":"..."}` | inline `**bold**` and `_italic_` allowed. Keep paragraphs to 1 to 4 sentences. |
| subheading | `{"t":"h","text":"..."}` | |
| key idea | `{"t":"key","text":"..."}` | the single most important sentence. Every short lesson has exactly 1. |
| list | `{"t":"list","items":["..."],"ordered":false}` | 2 to 6 items |
| example | `{"t":"example","title":"...","text":"..."}` | a worked, concrete, real-life example with numbers where relevant. `text` may contain `\n` for line breaks. |
| figure | `{"t":"fig", ...see figures...}` | |
| term | `{"t":"term","word":"APR","def":"..."}` | glossary card |
| check | `{"t":"check","q":"...","a":"..."}` | tap-to-reveal thinking question inside the text |
| tip | `{"t":"tip","text":"..."}` | "Try it today": one practical action |
| warn | `{"t":"warn","text":"..."}` | a common mistake to avoid |
| quote | `{"t":"quote","text":"...","by":"Seneca"}` | ONLY classic/public-domain or very famous one-liners under 20 words. Use rarely. |
| chapter | `{"t":"chapter","title":"...","minutes":8}` | deep dives only: starts a chapter |
| exercise | `{"t":"exercise","title":"...","prompt":"...","steps":["..."],"answer":"..."}` | deep dives only: hands-on task; `answer` is the worked solution (can use `\n`). `steps` optional. |

## Figures (the app draws them; you only provide data). Pick the kind that makes the idea instantly obvious.
Every figure has `"caption"` (one short sentence). Labels must be short (ideally under 18 chars). `icon` = one emoji.

| kind | shape |
|---|---|
| flow | `{"t":"fig","kind":"flow","steps":[{"label":"Income","icon":"💵","note":"optional short"}],"caption":"..."}` 2 to 5 steps, drawn with arrows |
| equation | `{"t":"fig","kind":"equation","parts":["Assets","=","Liabilities","+","Equity"],"caption":"..."}` operators: = + − × ÷ → ≈ |
| bars | `{"t":"fig","kind":"bars","data":[{"label":"Year 1","value":100,"highlight":false}],"unit":"$","caption":"..."}` 2 to 8 bars; unit one of "$","%","€","" |
| line | `{"t":"fig","kind":"line","series":[{"name":"Saved","points":[0,10,20]}],"xLabels":["0","10","20"],"unit":"$","caption":"..."}` 1 to 3 series, 3 to 30 points each, all series same length = xLabels length |
| donut | `{"t":"fig","kind":"donut","data":[{"label":"Needs","value":50}],"center":"Budget","caption":"..."}` 2 to 6 slices |
| compare | `{"t":"fig","kind":"compare","left":{"title":"Cash basis","icon":"💵","items":["..."]},"right":{"title":"Accrual","icon":"📒","items":["..."]},"caption":"..."}` 2 to 4 items per side |
| stack | `{"t":"fig","kind":"stack","columns":[{"title":"Assets","blocks":[{"label":"Cash","value":30}]},{"title":"Liab. + Equity","blocks":[{"label":"Loan","value":20},{"label":"Equity","value":10}]}],"unit":"$","caption":"..."}` 1 to 3 columns, 1 to 4 blocks each; heights proportional |
| cycle | `{"t":"fig","kind":"cycle","steps":["Cue","Craving","Response","Reward"],"center":"Habit loop","caption":"..."}` 3 to 6 steps |
| pyramid | `{"t":"fig","kind":"pyramid","levels":["Top (smallest)","Middle","Base (largest)"],"caption":"..."}` 3 to 5 levels, top first |
| matrix | `{"t":"fig","kind":"matrix","xAxis":"Urgency →","yAxis":"Importance →","cells":[{"title":"Plan","note":"Important, not urgent"},{"title":"Do","note":"..."},{"title":"Drop","note":"..."},{"title":"Delegate","note":"..."}],"caption":"..."}` cells order: top-left, top-right, bottom-left, bottom-right |
| timeline | `{"t":"fig","kind":"timeline","events":[{"when":"Day 1","label":"Sale made"}],"caption":"..."}` 2 to 6 events |
| stat | `{"t":"fig","kind":"stat","items":[{"value":"8×","label":"growth in 30 yrs at 7%"}],"caption":"..."}` 1 to 3 big numbers |
| scale | `{"t":"fig","kind":"scale","left":{"label":"Debits","items":["Cash +$100"]},"right":{"label":"Credits","items":["Revenue +$100"]},"tilt":"even","caption":"..."}` tilt: "left" (left heavier), "right", "even" |
| spectrum | `{"t":"fig","kind":"spectrum","left":"Lower risk","right":"Higher risk","items":[{"label":"Cash","pos":5}],"caption":"..."}` 2 to 7 items, pos 0 to 100 |
| table | `{"t":"fig","kind":"table","head":["Ratio","Formula"],"rows":[["Current","CA ÷ CL"]],"caption":"..."}` 2 to 4 columns, 2 to 8 rows, short cells |
| taccount | `{"t":"fig","kind":"taccount","title":"Cash","debits":[{"label":"Sale","value":500}],"credits":[{"label":"Rent","value":200}],"unit":"$","caption":"..."}` |
| grid | `{"t":"fig","kind":"grid","items":[{"icon":"🏠","label":"Real estate","note":"optional"}],"caption":"..."}` 2 to 6 items |
| breath | `{"t":"fig","kind":"breath","pattern":[{"label":"Inhale","secs":4},{"label":"Hold","secs":4},{"label":"Exhale","secs":6}],"caption":"..."}` animated breathing guide (inner growth / self) |
| chat | `{"t":"fig","kind":"chat","messages":[{"role":"you","text":"..."},{"role":"ai","text":"..."}],"caption":"..."}` 2 to 6 messages, for showing prompts and AI replies |

## Length and shape targets (the validator enforces these)
- **Short lesson** (5 min): 550 to 850 words of reading (all text in blocks counts), at least 2 figures, exactly 1 `key`, at least 1 `example`, at least 1 `check`, exactly 1 `tip`, 3 quiz questions, 3 takeaways. Open with a hook paragraph that connects to real life (a scene on the train, a paycheck, a news headline). End with the tip.
- **Deep Dive 1** (~30 min, `"minutes":30`): 4,200 to 6,000 words, 5 to 6 `chapter` blocks (first block must be a chapter), at least 8 figures, at least 3 exercises, 8 quiz questions, 4 takeaways.
- **Deep Dive 2 / Masterclass** (~55 to 60 min, `"minutes":55` or `60`): 7,000 to 9,500 words, 7 to 9 chapters, at least 12 figures, at least 5 exercises, 10 quiz questions, 5 takeaways.
- Deep dives build on everything in the levels before them and should feel like a premium workshop: a running case study across chapters is ideal.

## Accuracy rules
- Context is the **United States** (USD, IRS, 401(k), US GAAP / ASC), with one short note when Europe/Italy differs in an interesting way.
- Do **not** state year-specific figures that change (tax brackets, contribution limits, current interest rates, current prices). Use clearly illustrative round numbers ("say a 7% average return") and say "check this year’s limit".
- No personalized investment advice, no "buy X". Teach how to think.
- AI subject: vendor-neutral (you may name Claude, ChatGPT, Gemini as examples), no claims about pricing or features of specific products.
- Inner growth: secular and evidence-informed, respectful of traditions (Stoicism, Buddhist meditation, yoga breathing), no medical claims. Where relevant, a gentle line that a professional can help when things feel heavy.

## Validate before you finish
Run `node /home/claude/metro/tools/validate.js <subject>` and fix every error it reports. Warnings about word counts must be fixed too.
