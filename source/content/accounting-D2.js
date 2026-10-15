LEARN.add({
 "subject": "accounting",
 "lessons": [
  {
   "id": "acc-d2",
   "subject": "accounting",
   "level": 3,
   "order": 14,
   "type": "deep",
   "minutes": 60,
   "title": "Read a 10-K like an accountant",
   "hook": "Earnings up 61%, cash from operations down 25%. Learn to find out why, note by note, in one fictional 10-K.",
   "tags": [
    "10-k",
    "md&a",
    "footnotes",
    "quality of earnings",
    "red flags",
    "sec filings",
    "non-gaap",
    "earnings"
   ],
   "blocks": [
    {
     "t": "chapter",
     "title": "Meet Halvorn and the map of a 10-K",
     "minutes": 7
    },
    {
     "t": "p",
     "text": "It is a Tuesday in late February. On the train to work you open a press release: **Halvorn Instruments, Inc.** reports record results. Revenue up 20%. Net income up 61%. Earnings per share of $2.00, versus $1.24 last year. The CEO calls it “a breakout year.” The stock jumps 9% before the market opens."
    },
    {
     "t": "p",
     "text": "Halvorn is a fictional mid-size US company we will use for this whole masterclass. It makes industrial vibration sensors that bolt onto factory machines, and it sells a cloud subscription, **HalvornCloud**, that reads the sensors and predicts breakdowns. Fiscal year ends December 31. All amounts are in millions of dollars unless stated."
    },
    {
     "t": "p",
     "text": "A press release is the company talking about itself. The **Form 10-K** is the company talking under oath: an annual report filed with the SEC, with financial statements audited by an independent firm and certified by the CEO and CFO. Our job in the next hour is to read Halvorn’s 10-K the way a senior accountant, an auditor or a credit analyst would, and decide whether that “breakout year” is real."
    },
    {
     "t": "key",
     "text": "A 10-K is not read front to back. It is interrogated: you start from a question, go to the place that answers it, and check that the numbers tell the same story everywhere."
    },
    {
     "t": "h",
     "text": "The SEC family of filings"
    },
    {
     "t": "p",
     "text": "The 10-K is one member of a family. Knowing the others tells you where to look when something changes between annual reports."
    },
    {
     "t": "fig",
     "kind": "table",
     "head": [
      "Form",
      "What it is",
      "When"
     ],
     "rows": [
      [
       "10-K",
       "Annual report, audited",
       "60 to 90 days after year end"
      ],
      [
       "10-Q",
       "Quarterly report, reviewed",
       "40 to 45 days after quarter"
      ],
      [
       "8-K",
       "Major event report",
       "Within 4 business days"
      ],
      [
       "DEF 14A",
       "Proxy: pay, board, votes",
       "Before annual meeting"
      ],
      [
       "Earnings release",
       "Press release, unaudited",
       "Often filed with an 8-K"
      ]
     ],
     "caption": "Deadlines depend on filer size: larger filers report faster."
    },
    {
     "t": "p",
     "text": "Two 8-K items deserve special attention. **Item 4.01** reports a change in auditor, and **Item 5.02** reports the departure of a director or key officer such as the CFO. Neither is automatically bad news. Both are reasons to read the next 10-K more carefully."
    },
    {
     "t": "h",
     "text": "The four parts of a 10-K"
    },
    {
     "t": "p",
     "text": "Every 10-K follows the same skeleton set by SEC Regulation S-K. Once the map is in your head, you can open any company’s filing and jump straight to the right item."
    },
    {
     "t": "fig",
     "kind": "table",
     "head": [
      "Item",
      "Name",
      "Why you read it"
     ],
     "rows": [
      [
       "1 and 1A",
       "Business, Risk factors",
       "How it makes money, what can go wrong"
      ],
      [
       "1C",
       "Cybersecurity",
       "Risk oversight, governance"
      ],
      [
       "7",
       "MD&A",
       "Management explains the numbers"
      ],
      [
       "7A",
       "Market risk",
       "Rates, FX, commodities"
      ],
      [
       "8",
       "Statements and notes",
       "The audited core"
      ],
      [
       "9A",
       "Controls and procedures",
       "SOX 404 conclusion on ICFR"
      ],
      [
       "10 to 14",
       "Governance, pay",
       "Often incorporated from the proxy"
      ],
      [
       "15",
       "Exhibits",
       "Debt agreements, certifications"
      ]
     ],
     "caption": "The items that matter most for an accountant’s read."
    },
    {
     "t": "p",
     "text": "Part I describes the business. Part II holds the numbers: MD&A in Item 7, the audited financial statements and notes in Item 8, and the controls conclusion in Item 9A. Part III covers directors and executive pay, usually pulled in by reference from the proxy. Part IV lists the exhibits, where you find the actual credit agreement, the CEO and CFO certifications under SOX sections 302 and 906, and the list of subsidiaries."
    },
    {
     "t": "term",
     "word": "ICFR",
     "def": "Internal control over financial reporting. Under SOX 404, management must assess whether its controls are effective, and for larger filers the auditor must also give an opinion on them."
    },
    {
     "t": "h",
     "text": "A reading order that works"
    },
    {
     "t": "p",
     "text": "Senior reviewers rarely start at page one. A practical order, which we will follow with Halvorn, goes from the most objective information to the most promotional."
    },
    {
     "t": "fig",
     "kind": "flow",
     "steps": [
      {
       "label": "Auditor’s report",
       "icon": "🔎",
       "note": "opinion and CAMs"
      },
      {
       "label": "Statements",
       "icon": "📊",
       "note": "the three, plus equity"
      },
      {
       "label": "Notes",
       "icon": "📑",
       "note": "policies and judgments"
      },
      {
       "label": "MD&A",
       "icon": "🗣️",
       "note": "management’s story"
      },
      {
       "label": "Risk factors",
       "icon": "⚠️",
       "note": "what changed this year"
      }
     ],
     "caption": "Read from the independent voice toward the company’s own voice."
    },
    {
     "t": "p",
     "text": "Why start with the auditor? Because the auditor’s report tells you in one page whether the statements are fairly presented, whether there is any doubt about the company continuing as a going concern, and which areas were hardest to audit. Those last ones are the **critical audit matters (CAMs)**, required for most large SEC filers under PCAOB standard AS 3101. CAMs are a free map of where the judgment lives."
    },
    {
     "t": "check",
     "q": "A risk factor in Halvorn’s 10-K reads exactly like last year’s, except one new paragraph about “customer concentration among distributors.” Why is that paragraph worth your time?",
     "a": "Risk factors are mostly boilerplate that lawyers carry forward each year. A brand new paragraph is a signal that something changed in the business, here possibly more sales going through distributors. A smart habit is to compare this year’s risk factors with last year’s and read only the differences."
    },
    {
     "t": "exercise",
     "title": "Where would you look?",
     "prompt": "You are reviewing Halvorn’s 10-K. For each question, name the item or section where you would go first.",
     "steps": [
      "What interest rate does Halvorn pay on its term loan, and are there covenants?",
      "Did the auditor find any area especially difficult?",
      "How much of revenue comes from subscriptions versus hardware?",
      "Did management conclude its internal controls are effective?",
      "How would a 1% rise in interest rates affect pretax income?",
      "How much did the CEO earn last year?"
     ],
     "answer": "1) The debt note in Item 8, and the full credit agreement in the Item 15 exhibits. MD&A liquidity discussion in Item 7 summarizes covenants too.\n\n2) The auditor’s report at the start of Item 8: look for critical audit matters.\n\n3) The revenue note in Item 8: ASC 606 requires disaggregation of revenue. Segment note (ASC 280) also helps.\n\n4) Item 9A, Controls and Procedures, plus the auditor’s ICFR opinion for larger filers.\n\n5) Item 7A, Quantitative and Qualitative Disclosures About Market Risk.\n\n6) Item 11, which usually points you to the proxy statement (DEF 14A) and its summary compensation table."
    },
    {
     "t": "chapter",
     "title": "First pass: the statements tell the story",
     "minutes": 9
    },
    {
     "t": "p",
     "text": "Now open Item 8. Before reading any note, we look at the three primary statements side by side, two years at a time. The goal of the first pass is not precision. It is to find the two or three questions the rest of the filing must answer."
    },
    {
     "t": "h",
     "text": "The income statement"
    },
    {
     "t": "fig",
     "kind": "table",
     "head": [
      "Income statement",
      "FY2024",
      "FY2025"
     ],
     "rows": [
      [
       "Revenue",
       "800",
       "960"
      ],
      [
       "Cost of revenue",
       "(480)",
       "(566)"
      ],
      [
       "Gross profit",
       "320",
       "394"
      ],
      [
       "R&D",
       "(80)",
       "(84)"
      ],
      [
       "SG&A",
       "(140)",
       "(160)"
      ],
      [
       "Operating income",
       "100",
       "150"
      ],
      [
       "Interest, tax",
       "(38)",
       "(50)"
      ],
      [
       "Net income",
       "62",
       "100"
      ]
     ],
     "caption": "Halvorn’s income statement, $ millions. EPS: $1.24 to $2.00 on 50 million shares."
    },
    {
     "t": "p",
     "text": "The detail behind the last lines: interest expense was 20 then 22; pretax income 80 then 128; income tax 18 then 28. The effective tax rate dipped slightly from 22.5% to 21.9%. Nothing dramatic there."
    },
    {
     "t": "p",
     "text": "Now compute the margins. Gross margin moved from 40.0% to 41.0%. Operating margin jumped from 12.5% to 15.6%. That jump is the whole “breakout.” Where did it come from? Not from gross margin, which added only one point. It came from operating expenses growing much slower than revenue."
    },
    {
     "t": "fig",
     "kind": "bars",
     "data": [
      {
       "label": "Revenue",
       "value": 20
      },
      {
       "label": "Cost of rev.",
       "value": 18
      },
      {
       "label": "SG&A",
       "value": 14
      },
      {
       "label": "R&D",
       "value": 5,
       "highlight": true
      },
      {
       "label": "Op. income",
       "value": 50
      },
      {
       "label": "Net income",
       "value": 61
      }
     ],
     "unit": "%",
     "caption": "Year-over-year growth. R&D barely moved while revenue grew 20%."
    },
    {
     "t": "p",
     "text": "A technology company growing 20% that grows its research spending only 5% is unusual. Either it found remarkable efficiency, or some development cost stopped flowing through the income statement. Write down **question 1: why did R&D expense almost stop growing?**"
    },
    {
     "t": "h",
     "text": "The balance sheet"
    },
    {
     "t": "fig",
     "kind": "table",
     "head": [
      "Balance sheet",
      "FY2024",
      "FY2025"
     ],
     "rows": [
      [
       "Cash",
       "101",
       "120"
      ],
      [
       "Receivables, net",
       "110",
       "180"
      ],
      [
       "Inventory",
       "90",
       "130"
      ],
      [
       "PP&E and other current",
       "320",
       "340"
      ],
      [
       "Capitalized software",
       "25",
       "60"
      ],
      [
       "ROU asset, goodwill",
       "130",
       "140"
      ],
      [
       "Total assets",
       "776",
       "970"
      ]
     ],
     "caption": "Assets, $ millions. Other current assets were 20 in both years."
    },
    {
     "t": "p",
     "text": "On the other side: accounts payable 70 then 80; accrued liabilities 40 then 45; deferred revenue 50 then 58; operating lease liabilities 74 then 84 (10 current in both years); long-term debt 250 then 310; deferred tax liability 30 then 36. Total liabilities 514 then 613. Equity 262 then 357. Both years balance: 514 + 262 = 776 and 613 + 357 = 970."
    },
    {
     "t": "p",
     "text": "Equity rolls forward cleanly: 262 opening, plus net income 100, plus stock-based compensation 15 credited to paid-in capital, minus dividends 20, equals 357. Always do this rollforward. If it does not tie, there is something in other comprehensive income, a buyback or an error, and you want to know which."
    },
    {
     "t": "fig",
     "kind": "bars",
     "data": [
      {
       "label": "Revenue",
       "value": 20
      },
      {
       "label": "Receivables",
       "value": 64,
       "highlight": true
      },
      {
       "label": "Inventory",
       "value": 44,
       "highlight": true
      },
      {
       "label": "Cap. software",
       "value": 140,
       "highlight": true
      },
      {
       "label": "Debt",
       "value": 24
      },
      {
       "label": "Deferred rev.",
       "value": 16
      }
     ],
     "unit": "%",
     "caption": "Balance sheet growth versus revenue growth. Three lines run far ahead."
    },
    {
     "t": "p",
     "text": "Here is the shape of a classic problem. Receivables grew more than three times as fast as revenue. Inventory grew more than twice as fast as cost of revenue. Capitalized software more than doubled. Write down **question 2: are customers paying more slowly, and why?** and **question 3: why is inventory piling up?**"
    },
    {
     "t": "h",
     "text": "The cash flow statement"
    },
    {
     "t": "fig",
     "kind": "table",
     "head": [
      "Cash flow",
      "FY2024",
      "FY2025"
     ],
     "rows": [
      [
       "Net income",
       "62",
       "100"
      ],
      [
       "D&A, SBC, deferred tax",
       "56",
       "71"
      ],
      [
       "Working capital",
       "(6)",
       "(87)"
      ],
      [
       "Operating cash flow",
       "112",
       "84"
      ],
      [
       "Capex and cap. software",
       "(70)",
       "(105)"
      ],
      [
       "Free cash flow",
       "42",
       "(21)"
      ],
      [
       "Borrowing less dividends",
       "(30)",
       "40"
      ]
     ],
     "caption": "Profit rose $38M. Operating cash fell $28M. Free cash flow turned negative."
    },
    {
     "t": "p",
     "text": "FY2025 detail: depreciation and amortization 50, stock-based compensation 15, deferred taxes 6. Working capital: receivables −70, inventory −40, payables +10, accrued liabilities +5, deferred revenue +8, net −87. Investing: property and equipment 60 plus capitalized software development 45. Financing: new borrowing 60 less dividends 20. Change in cash: 84 − 105 + 40 = +19, which ties to cash moving from 101 to 120."
    },
    {
     "t": "fig",
     "kind": "line",
     "series": [
      {
       "name": "Net income",
       "points": [
        48,
        62,
        100
       ]
      },
      {
       "name": "Operating cash",
       "points": [
        95,
        112,
        84
       ]
      }
     ],
     "xLabels": [
      "FY2023",
      "FY2024",
      "FY2025"
     ],
     "unit": "$",
     "caption": "The two lines crossed: profit up, cash down."
    },
    {
     "t": "p",
     "text": "This is the single most important picture in the filing. Over time, operating cash flow and net income should travel together, with cash usually a bit higher because depreciation is a noncash expense. When profit rises while operating cash falls, the profit is being made of accruals: receivables, inventory and capitalized costs rather than cash."
    },
    {
     "t": "term",
     "word": "Cash conversion",
     "def": "Operating cash flow divided by net income. Above 1.0 is typical for healthy companies with depreciation. Halvorn went from 1.81 to 0.84."
    },
    {
     "t": "warn",
     "text": "Do not jump to “fraud.” A growing company legitimately needs more receivables and inventory. The question is whether the growth in those assets is proportionate and explained. Our job is to find the explanation in the notes and MD&A, and to test it."
    },
    {
     "t": "exercise",
     "title": "Run the first pass yourself",
     "prompt": "Using Halvorn’s statements, compute the following for both years and write one sentence of interpretation.",
     "steps": [
      "Gross margin and operating margin.",
      "Revenue per dollar of average total assets in FY2025 (asset turnover).",
      "Cash conversion (operating cash flow ÷ net income).",
      "The equity rollforward from FY2024 to FY2025."
     ],
     "answer": "Gross margin: 320 ÷ 800 = 40.0%; 394 ÷ 960 = 41.0%.\nOperating margin: 100 ÷ 800 = 12.5%; 150 ÷ 960 = 15.6%.\n\nAsset turnover FY2025: average assets = (776 + 970) ÷ 2 = 873; 960 ÷ 873 = 1.10×. (FY2023 assets are not given, so we compute one year only.)\n\nCash conversion: FY2024 112 ÷ 62 = 1.81; FY2025 84 ÷ 100 = 0.84.\n\nEquity rollforward: 262 + 100 NI + 15 SBC − 20 dividends = 357. It ties.\n\nInterpretation: margins expanded on paper, but the company now converts less than one dollar of cash per dollar of profit, and the balance sheet is absorbing the difference in receivables, inventory and capitalized software. The notes must explain all three."
    },
    {
     "t": "chapter",
     "title": "MD&A and non-GAAP: management’s story",
     "minutes": 8
    },
    {
     "t": "p",
     "text": "Item 7, Management’s Discussion and Analysis, is where the company explains the numbers in its own words. The SEC asks MD&A to let readers see the business “through the eyes of management”: results, liquidity and capital resources, and the critical accounting estimates that required the most judgment."
    },
    {
     "t": "p",
     "text": "Good MD&A explains **why**, not just **what**. “Revenue increased 20%” is what. “Revenue increased 20%, of which 14 points came from higher unit volume, 4 from price and 2 from subscription upsells” is why. When MD&A only restates the table in words, that is itself a finding."
    },
    {
     "t": "h",
     "text": "What Halvorn’s MD&A says"
    },
    {
     "t": "list",
     "items": [
      "**Revenue:** “Strong demand for our new S7 sensor drove record fourth-quarter shipments, including to our expanding distributor network.”",
      "**Operating leverage:** “Disciplined spending and the maturing of our platform investments drove a 310 basis point margin expansion.”",
      "**Liquidity:** “Operating cash flow reflected strategic investments in working capital to support growth.”",
      "**Critical estimates:** revenue for bill-and-hold arrangements, capitalization of software development costs, and useful lives of equipment."
     ],
     "ordered": false
    },
    {
     "t": "p",
     "text": "Each sentence is true and each sentence is soft. “Record fourth-quarter shipments” and “distributor network” connect to our question 2. “Maturing of platform investments” connects to question 1. “Strategic investments in working capital” is a polite way of saying cash is tied up in receivables and inventory. And the critical estimates list names exactly the three areas we flagged."
    },
    {
     "t": "fig",
     "kind": "compare",
     "left": {
      "title": "What MD&A says",
      "icon": "🗣️",
      "items": [
       "Record Q4 shipments",
       "Disciplined spending",
       "Investing in working capital",
       "Platform investments maturing"
      ]
     },
     "right": {
      "title": "What to check",
      "icon": "🔎",
      "items": [
       "Q4 share of revenue, DSO",
       "R&D versus capitalized costs",
       "Receivable and inventory days",
       "Capitalization policy note"
      ]
     },
     "caption": "Turn every soft phrase in MD&A into a testable question."
    },
    {
     "t": "h",
     "text": "Non-GAAP measures"
    },
    {
     "t": "p",
     "text": "Halvorn’s earnings release and MD&A lead with **Adjusted EBITDA** of $227 million, a 23.6% margin. This is a non-GAAP measure: a number the company defines itself. The SEC allows it under Regulation G and Item 10(e) of Regulation S-K, with conditions. The most comparable GAAP measure must be shown with equal or greater prominence, and there must be a reconciliation."
    },
    {
     "t": "fig",
     "kind": "table",
     "head": [
      "Reconciliation, FY2025",
      "$M"
     ],
     "rows": [
      [
       "Operating income (GAAP)",
       "150"
      ],
      [
       "+ Depreciation and amortization",
       "50"
      ],
      [
       "+ Stock-based compensation",
       "15"
      ],
      [
       "+ Restructuring and integration",
       "12"
      ],
      [
       "Adjusted EBITDA",
       "227"
      ]
     ],
     "caption": "Halvorn’s bridge from GAAP operating income to its headline number."
    },
    {
     "t": "p",
     "text": "Read each add-back with a skeptical eye. Depreciation and amortization are real costs of using assets, but excluding them is a widely understood convention. Stock-based compensation is a real cost: employees are paid partly in shares, which dilutes owners. Many analysts refuse to add it back."
    },
    {
     "t": "p",
     "text": "The “restructuring and integration” line is where you should slow down. The note shows Halvorn reported $10 million in FY2023, $11 million in FY2024 and $12 million in FY2025. A charge that happens every year is not a one-time item. It is a normal cost of running the business with a nicer name. The SEC staff has said that excluding normal, recurring cash operating expenses can make a non-GAAP measure misleading."
    },
    {
     "t": "warn",
     "text": "Adjusted EBITDA also adds back the amortization of capitalized software. So if a company capitalizes more development cost, that spending disappears from Adjusted EBITDA entirely: it never appears as R&D expense, and its amortization is added back. The more aggressive the capitalization, the prettier the headline."
    },
    {
     "t": "exercise",
     "title": "Rebuild a cleaner EBITDA",
     "prompt": "You want an EBITDA figure you can compare across companies and years. Starting from Halvorn’s Adjusted EBITDA, compute an analyst version and the margin.",
     "steps": [
      "Do not add back stock-based compensation.",
      "Treat recurring restructuring as an operating cost.",
      "Also compute EBITDA less all capitalized software spending, a quick proxy for cash-like operating profit."
     ],
     "answer": "Adjusted EBITDA 227\n− Stock-based compensation 15\n− Recurring restructuring 12\n= Analyst EBITDA 200, margin 200 ÷ 960 = 20.8%.\n\n(Check: this equals GAAP operating income 150 + D&A 50 = 200, plain EBITDA.)\n\nLess capitalized software spending of 45: 200 − 45 = 155, margin 16.1%.\n\nFor comparison, FY2024 plain EBITDA was 100 + 42 = 142 (17.8%), and capitalized software was 15, so 142 − 15 = 127 (15.9%). On this cash-like basis, the margin moved from 15.9% to 16.1%: essentially flat, not a breakout."
    },
    {
     "t": "h",
     "text": "Liquidity and capital resources"
    },
    {
     "t": "p",
     "text": "The MD&A liquidity section should answer three questions: where cash comes from, where it goes, and whether the company can meet its obligations over the next twelve months and beyond. Halvorn’s answer: operating cash of $84 million, investments of $105 million, and a $60 million draw on its term loan. In plain words, **Halvorn borrowed to pay its dividend and its investments** this year."
    },
    {
     "t": "p",
     "text": "That is not a crisis. Leverage is still modest. But it is the opposite of what “breakout year” suggests, and a good MD&A would say so plainly. Look also for the **contractual obligations** discussion, and for any mention of supplier finance programs, factoring of receivables or other ways to move cash timing. ASC 405-50 now requires disclosure of supplier finance program obligations, precisely because they can flatter operating cash flow."
    },
    {
     "t": "check",
     "q": "A company sells $50 million of receivables to a bank at quarter end (true sale under ASC 860). How does that affect operating cash flow and DSO?",
     "a": "Operating cash flow rises, because collections arrive early, and DSO falls, because the receivables leave the balance sheet. The underlying customers are paying no faster. That is why you read the receivables note and MD&A for factoring or securitization before celebrating an improvement in cash flow."
    },
    {
     "t": "chapter",
     "title": "The revenue note: ASC 606 in practice",
     "minutes": 9
    },
    {
     "t": "p",
     "text": "Revenue is the largest number on the income statement and, historically, the most common source of restatements. The revenue note is where you learn how Halvorn applies the five steps of ASC 606: identify the contract, identify the performance obligations, determine the price, allocate it, and recognize revenue when (or as) each obligation is satisfied."
    },
    {
     "t": "h",
     "text": "Disaggregation: what kind of revenue is it?"
    },
    {
     "t": "fig",
     "kind": "donut",
     "data": [
      {
       "label": "Direct hardware",
       "value": 520
      },
      {
       "label": "Distributor hardware",
       "value": 240
      },
      {
       "label": "Subscriptions",
       "value": 200
      }
     ],
     "center": "$960M",
     "caption": "Revenue by channel and type, FY2025."
    },
    {
     "t": "p",
     "text": "ASC 606 requires companies to break revenue into categories that show how economic factors affect its nature, timing and uncertainty. Halvorn discloses three: hardware sold directly, hardware sold through distributors, and subscriptions. Hardware is recognized at a **point in time**, when control transfers. Subscriptions are recognized **over time**, evenly across the service period."
    },
    {
     "t": "p",
     "text": "The prior-year note showed distributor hardware of $150 million. So the distributor channel grew from 150 to 240, a 60% jump, while direct hardware went from 490 to 520, up only 6%. Most of the year’s hardware growth came through distributors. Remember the new risk factor about distributor concentration? It just became concrete."
    },
    {
     "t": "h",
     "text": "Bundles: allocating the price"
    },
    {
     "t": "p",
     "text": "Halvorn’s most popular offer is the S7 starter kit: one sensor plus a one-year HalvornCloud subscription, sold for $1,000. These are two distinct performance obligations, so the price must be split based on **standalone selling prices** (SSP): what Halvorn would charge for each one alone."
    },
    {
     "t": "example",
     "title": "The S7 kit, allocated",
     "text": "Standalone prices: sensor $720, one-year subscription $480. Total $1,200.\nThe customer pays $1,000, a $200 discount spread proportionally.\n\nSensor: 1,000 × 720 ÷ 1,200 = $600\nSubscription: 1,000 × 480 ÷ 1,200 = $400\n\nOn delivery (January 1):\nDr Cash 1,000\n   Cr Product revenue 600\n   Cr Contract liability (deferred revenue) 400\n\nEach month for 12 months:\nDr Contract liability 33.33\n   Cr Subscription revenue 33.33"
    },
    {
     "t": "fig",
     "kind": "stack",
     "columns": [
      {
       "title": "Standalone prices",
       "blocks": [
        {
         "label": "Sensor",
         "value": 720
        },
        {
         "label": "Subscription",
         "value": 480
        }
       ]
      },
      {
       "title": "Allocated price",
       "blocks": [
        {
         "label": "Sensor",
         "value": 600
        },
        {
         "label": "Subscription",
         "value": 400
        }
       ]
      }
     ],
     "unit": "$",
     "caption": "The discount is shared in proportion to standalone prices."
    },
    {
     "t": "p",
     "text": "Why does allocation matter for our review? Because SSP is an estimate. If management set the sensor SSP higher, more of each kit would be recognized on day one and less would be deferred. The note should describe how SSP is determined: observable prices when available, otherwise an adjusted market or cost-plus approach. A change in SSP methodology in a year of “record” results deserves a question."
    },
    {
     "t": "h",
     "text": "Bill-and-hold: revenue without shipment"
    },
    {
     "t": "p",
     "text": "Halvorn’s note discloses that in December it recognized **$18 million** of hardware revenue under bill-and-hold arrangements: customers bought sensors but asked Halvorn to keep them in its warehouse. ASC 606 allows revenue in this case only if all four conditions are met:"
    },
    {
     "t": "list",
     "items": [
      "The arrangement has a substantive reason, such as the customer asking for it.",
      "The product is identified separately as belonging to the customer.",
      "The product is ready for physical transfer now.",
      "Halvorn cannot use the product or redirect it to another customer."
     ],
     "ordered": true
    },
    {
     "t": "p",
     "text": "If any condition fails, revenue waits until shipment. Bill-and-hold is legitimate and common in some industries, but it is also a historic tool for pulling revenue forward. Notice that the auditor named it as a critical audit matter. That is the auditor telling you: this took real judgment."
    },
    {
     "t": "h",
     "text": "Distributors: rights of return and price protection"
    },
    {
     "t": "p",
     "text": "Sales to distributors raise a different question: **variable consideration**. If distributors can return unsold sensors, or get credits when Halvorn cuts prices, the transaction price is not fixed. ASC 606 requires Halvorn to estimate those amounts and include revenue only to the extent it is probable that a significant reversal will not occur: the **constraint**."
    },
    {
     "t": "p",
     "text": "Halvorn’s note mentions that in Q3 it extended distributor payment terms from 60 to 120 days and introduced a stock rotation right. Longer terms and new return rights in the same year as a 60% jump in distributor sales is a pattern accountants have a name for: **channel stuffing**, pushing more product into the channel than end customers are buying. It may be innocent. It must be tested."
    },
    {
     "t": "term",
     "word": "Channel stuffing",
     "def": "Shipping more inventory to distributors than they can sell to end customers, often with sweetened terms, to pull revenue into the current period. It typically shows up as rising receivables and later returns or a weak next quarter."
    },
    {
     "t": "h",
     "text": "Remaining performance obligations"
    },
    {
     "t": "p",
     "text": "The note also discloses **remaining performance obligations** (RPO): contracted revenue not yet recognized. Halvorn reports RPO of $310 million, up from $280 million, an increase of 11%. Subscription revenue grew 25%, and deferred revenue only 16%. Backlog growing more slowly than reported revenue suggests that future growth may slow, or that more of this year’s revenue came from one-time hardware rather than recurring contracts."
    },
    {
     "t": "fig",
     "kind": "bars",
     "data": [
      {
       "label": "Subscription rev.",
       "value": 25
      },
      {
       "label": "Deferred revenue",
       "value": 16
      },
      {
       "label": "RPO",
       "value": 11,
       "highlight": true
      },
      {
       "label": "Distributor HW",
       "value": 60,
       "highlight": true
      }
     ],
     "unit": "%",
     "caption": "Growth rates inside the revenue note point in different directions."
    },
    {
     "t": "exercise",
     "title": "Allocate a new bundle",
     "prompt": "In FY2026, Halvorn launches the S9 kit: one sensor, a two-year subscription and on-site installation, for $2,000. Standalone prices: sensor $900, two-year subscription $1,050, installation $150. Installation is distinct and is completed on delivery day. Allocate the price and write the entries for delivery day and for the first month.",
     "steps": [
      "Add up the standalone prices.",
      "Allocate the $2,000 in proportion.",
      "Decide which obligations are satisfied at a point in time and which over time."
     ],
     "answer": "Total standalone prices: 900 + 1,050 + 150 = $2,100. Discount: $100.\n\nAllocation:\nSensor: 2,000 × 900 ÷ 2,100 = $857.14\nSubscription: 2,000 × 1,050 ÷ 2,100 = $1,000.00\nInstallation: 2,000 × 150 ÷ 2,100 = $142.86\nCheck: 857.14 + 1,000.00 + 142.86 = 2,000.00.\n\nDelivery day (sensor and installation are point in time):\nDr Cash (or Receivable) 2,000.00\n   Cr Product revenue 857.14\n   Cr Service revenue 142.86\n   Cr Contract liability 1,000.00\n\nEach month for 24 months:\nDr Contract liability 41.67\n   Cr Subscription revenue 41.67\n(1,000 ÷ 24 = 41.67; round the last month so the total is exactly $1,000.)\n\nNote: if the customer pays over time rather than upfront, also consider whether a significant financing component exists. For terms of one year or less, ASC 606 offers a practical expedient to ignore it."
    },
    {
     "t": "chapter",
     "title": "Leases, debt and taxes: the notes that move risk",
     "minutes": 10
    },
    {
     "t": "p",
     "text": "Three notes tell you how much the company owes, to whom, and how much the government takes. They are dense, but each one has a few lines that do most of the work."
    },
    {
     "t": "h",
     "text": "Leases (ASC 842)"
    },
    {
     "t": "p",
     "text": "Halvorn leases its factory and two warehouses under operating leases. Since ASC 842, operating leases sit on the balance sheet: a **right-of-use (ROU) asset** of $80 million and a **lease liability** of $84 million. The liability equals the present value of future lease payments, discounted at Halvorn’s incremental borrowing rate of 6%."
    },
    {
     "t": "fig",
     "kind": "table",
     "head": [
      "Lease maturities",
      "$M"
     ],
     "rows": [
      [
       "2026",
       "15"
      ],
      [
       "2027",
       "15"
      ],
      [
       "2028 and 2029",
       "28"
      ],
      [
       "2030",
       "13"
      ],
      [
       "Thereafter",
       "36"
      ],
      [
       "Total undiscounted",
       "107"
      ],
      [
       "Less imputed interest",
       "(23)"
      ],
      [
       "Lease liability (PV)",
       "84"
      ]
     ],
     "caption": "The maturity table connects cash payments to the balance sheet liability."
    },
    {
     "t": "p",
     "text": "The current portion is $10 million even though 2026 payments are $15 million. Why? Because about $5 million of the first year’s payments is interest: $84 million × 6% ≈ $5 million. Only the remaining $10 million reduces principal. For operating leases, the income statement shows a single straight-line lease cost inside operating expenses, not separate interest and amortization."
    },
    {
     "t": "example",
     "title": "New warehouse lease entry",
     "text": "On July 1, Halvorn signs a five-year warehouse lease. The present value of payments at 6% is $22 million.\n\nDr Right-of-use asset 22\n   Cr Operating lease liability 22\n\nNo cash moves on signing. This is why new leases appear in the cash flow note as a noncash disclosure, not in investing activities."
    },
    {
     "t": "p",
     "text": "A note from Europe: under IFRS 16, used by Italian and other EU listed groups, nearly all leases are treated like financed purchases. The lessee records depreciation and interest instead of one operating cost. Same company, same leases, but EBITDA is higher under IFRS, and operating cash flow is higher too because the principal portion of lease payments moves to financing. Keep this in mind when comparing a US filer with a European peer."
    },
    {
     "t": "h",
     "text": "Debt"
    },
    {
     "t": "p",
     "text": "The debt note shows a $310 million term loan at SOFR plus 2.25%, maturing in 2028. The rate is **variable**, so Item 7A estimates that a one percentage point rise in rates would cut annual pretax income by about $3.1 million. The loan has two financial covenants: net leverage of at most 3.0× and interest coverage of at least 4.0×."
    },
    {
     "t": "fig",
     "kind": "stat",
     "items": [
      {
       "value": "0.95×",
       "label": "net debt ÷ EBITDA (limit 3.0×)"
      },
      {
       "value": "6.8×",
       "label": "EBIT ÷ interest (minimum 4.0×)"
      },
      {
       "value": "2028",
       "label": "maturity of the $310M loan"
      }
     ],
     "caption": "Covenant headroom is comfortable today. Watch the definitions."
    },
    {
     "t": "p",
     "text": "Net debt is debt 310 less cash 120, or 190. EBITDA is 150 + 50 = 200. So net leverage is 0.95×. Interest coverage is 150 ÷ 22 = 6.8×. Comfortable. But read the credit agreement exhibit: covenants are usually computed on a contractual “Consolidated EBITDA” that may add back the same items as Adjusted EBITDA. Lenders and analysts can be looking at very different numbers."
    },
    {
     "t": "warn",
     "text": "Check whether debt matures within twelve months of the issuance date. If it does and the company cannot show it will refinance or repay it, management must evaluate going concern under ASC 205-40, and the debt may need to be classified as current."
    },
    {
     "t": "h",
     "text": "Income taxes (ASC 740)"
    },
    {
     "t": "p",
     "text": "The tax note has two pieces worth your time: the rate reconciliation and the deferred tax balances. The reconciliation explains why the effective rate differs from the 21% US federal statutory rate."
    },
    {
     "t": "fig",
     "kind": "table",
     "head": [
      "Rate reconciliation",
      "$M",
      "Rate"
     ],
     "rows": [
      [
       "Pretax income × 21%",
       "26.9",
       "21.0%"
      ],
      [
       "State taxes, net of federal",
       "3.4",
       "2.7%"
      ],
      [
       "R&D tax credit",
       "(3.0)",
       "(2.3%)"
      ],
      [
       "Stock comp excess benefit",
       "(1.0)",
       "(0.8%)"
      ],
      [
       "Other",
       "1.7",
       "1.3%"
      ],
      [
       "Income tax expense",
       "28.0",
       "21.9%"
      ]
     ],
     "caption": "Each line explains part of the gap between 21% and the effective rate."
    },
    {
     "t": "p",
     "text": "Halvorn’s expense of $28 million splits into current tax of $22 million and deferred tax of $6 million. The deferred piece comes from the deferred tax liability growing from 30 to 36, mostly because tax depreciation is faster than book depreciation. Recent FASB rules (ASU 2023-09) expand this reconciliation with more required categories and income taxes paid by jurisdiction, so newer filings will give you more detail."
    },
    {
     "t": "p",
     "text": "Two more lines matter. The **unrecognized tax benefits** rollforward (the old FIN 48 reserve, now in ASC 740-10) shows positions the company took that might not survive an audit; Halvorn’s is $5 million and stable. And the note on **valuation allowances** tells you whether management believes deferred tax assets will be used. A sudden release of a valuation allowance can create a one-time boost to net income that has nothing to do with operations."
    },
    {
     "t": "check",
     "q": "Book depreciation got smaller this year because Halvorn extended useful lives, but tax depreciation did not change. What happens to the deferred tax liability?",
     "a": "It grows faster. The gap between the book carrying amount and the tax basis of the equipment widens, because book depreciation slowed while tax depreciation did not. A larger temporary difference means a larger deferred tax liability, and more deferred tax expense this year."
    },
    {
     "t": "exercise",
     "title": "Covenants and taxes under stress",
     "prompt": "Suppose next year Halvorn’s operating income falls to $95 million, D&A stays at $50 million, cash falls to $60 million, debt stays at $310 million and interest rises to $26 million. Pretax income is $69 million.",
     "steps": [
      "Compute net leverage and interest coverage and compare them with the covenants.",
      "Compute federal tax at 21% and the effective rate if state taxes are $1.8 million, the R&D credit is $3.0 million and there are no other items."
     ],
     "answer": "Net debt = 310 − 60 = 250. EBITDA = 95 + 50 = 145. Net leverage = 250 ÷ 145 = 1.72×, still below 3.0×.\n\nInterest coverage = 95 ÷ 26 = 3.65×, which is below the 4.0× minimum. Covenant breach, unless the credit agreement’s definition adds back items (for example SBC and restructuring). Under ASC 470-10, a breach that makes debt callable can force classification of the whole loan as current unless a waiver is obtained before the statements are issued.\n\nTax: 69 × 21% = 14.49. Plus state 1.8, less R&D credit 3.0 = 13.29. Effective rate = 13.29 ÷ 69 = 19.3%. The fixed credit has a bigger effect on the rate when pretax income is smaller."
    },
    {
     "t": "chapter",
     "title": "Segments, controls and the auditor’s voice",
     "minutes": 7
    },
    {
     "t": "h",
     "text": "Segments (ASC 280)"
    },
    {
     "t": "p",
     "text": "Public companies report segments the way the **chief operating decision maker** (usually the CEO) actually manages the business. ASU 2023-07 now requires disclosure of the significant segment expenses the CODM regularly reviews, which makes segment notes more useful than ever. Halvorn has two segments: Devices and Software."
    },
    {
     "t": "fig",
     "kind": "table",
     "head": [
      "Segment",
      "Revenue",
      "Profit",
      "Margin"
     ],
     "rows": [
      [
       "Devices FY24",
       "640",
       "70",
       "10.9%"
      ],
      [
       "Devices FY25",
       "760",
       "95",
       "12.5%"
      ],
      [
       "Software FY24",
       "160",
       "56",
       "35.0%"
      ],
      [
       "Software FY25",
       "200",
       "85",
       "42.5%"
      ],
      [
       "Corporate FY24 / FY25",
       "",
       "(26) / (30)",
       ""
      ]
     ],
     "caption": "Segment profit sums to operating income: 70 + 56 − 26 = 100 and 95 + 85 − 30 = 150."
    },
    {
     "t": "p",
     "text": "Look where the margin came from. Software segment margin jumped from 35.0% to 42.5%. Software is exactly where development costs are incurred for HalvornCloud. The segment expense table in the note shows software engineering expense flat at $48 million, while the capitalized software note shows $45 million capitalized in FY2025 versus $15 million in FY2024. Question 1 now has a likely answer: development spending did not stop. It moved to the balance sheet."
    },
    {
     "t": "h",
     "text": "Capitalized software: the policy note"
    },
    {
     "t": "p",
     "text": "Software that Halvorn hosts and sells as a subscription is accounted for as internal-use software under **ASC 350-40**. Costs are capitalized once the project reaches the point where capitalization is allowed and are then amortized over the software’s useful life. Under the traditional model, that point was the application development stage. The FASB has recently amended ASC 350-40 to replace the stage model with a threshold based on management commitment and probable completion; check the effective date and transition for the year you review. Software to be **sold or licensed** to customers follows ASC 985-20 instead, where capitalization starts only at technological feasibility and is usually small."
    },
    {
     "t": "p",
     "text": "Halvorn’s policy note says that in FY2025 it “refined its assessment of when projects enter the application development stage,” beginning capitalization earlier. That is a **change in accounting estimate or application**, not necessarily wrong. But it explains $30 million of extra capitalization in a single year, roughly the entire improvement in operating margin."
    },
    {
     "t": "example",
     "title": "The entry that moved the margin",
     "text": "Engineering payroll for a HalvornCloud feature in development:\n\nExpensed (old approach):\nDr R&D expense 30\n   Cr Cash / Accrued payroll 30\n\nCapitalized (new approach):\nDr Capitalized software 30\n   Cr Cash / Accrued payroll 30\n\nSame cash, same engineers, same code. Under the second entry, operating income is $30 million higher this year and amortization will follow over, say, three to five years once the feature goes live. On the cash flow statement, the spending moves from operating to investing activities, so operating cash flow also looks better."
    },
    {
     "t": "h",
     "text": "The useful life change"
    },
    {
     "t": "p",
     "text": "A second sentence in the PP&E note: “Effective January 1, 2025, the Company revised the estimated useful lives of manufacturing equipment from five to seven years, reducing depreciation expense by $8 million.” Under **ASC 250**, a change in estimate is applied prospectively: no restatement of prior years, but disclosure of the effect on income and per-share amounts when material. Here, $8 million pretax, about $6 million after tax, or $0.12 per share."
    },
    {
     "t": "p",
     "text": "Is seven years reasonable? Maybe, if equipment is lasting longer in practice. The test is evidence: asset retirement history, maintenance data, what peers use. A change that happens to arrive in a year when management needed margin expansion deserves a request for that evidence."
    },
    {
     "t": "h",
     "text": "Controls and the auditor"
    },
    {
     "t": "p",
     "text": "Item 9A says management concluded ICFR was effective, and the auditor agreed. No material weakness. But three details in the governance pages complete the picture: the CFO resigned in October and an interim CFO signed the certifications; Halvorn changed audit firms at the start of FY2025 (an 8-K Item 4.01 was filed, with no reported disagreements); and the auditor’s report lists two CAMs: bill-and-hold revenue and capitalization of software development costs."
    },
    {
     "t": "fig",
     "kind": "timeline",
     "events": [
      {
       "when": "Jan 2025",
       "label": "New auditor, new useful lives"
      },
      {
       "when": "Mar 2025",
       "label": "Capitalization policy refined"
      },
      {
       "when": "Q3 2025",
       "label": "Distributor terms to 120 days"
      },
      {
       "when": "Oct 2025",
       "label": "CFO resigns"
      },
      {
       "when": "Dec 2025",
       "label": "$18M bill-and-hold"
      },
      {
       "when": "Feb 2026",
       "label": "Record results announced"
      }
     ],
     "caption": "Individually explainable events. Together, a pattern worth testing."
    },
    {
     "t": "term",
     "word": "Critical audit matter (CAM)",
     "def": "A matter communicated to the audit committee that relates to material accounts or disclosures and involved especially challenging, subjective or complex auditor judgment. Listed in the auditor’s report with how it was addressed."
    },
    {
     "t": "check",
     "q": "The auditor issued a clean opinion. Doesn’t that settle the matter?",
     "a": "A clean opinion means the statements are free of material misstatement under GAAP, with reasonable (not absolute) assurance. Aggressive but permitted choices, like earlier capitalization or longer useful lives within a reasonable range, can be fully GAAP compliant and still make earnings less sustainable. Quality of earnings is a question beyond the audit opinion."
    },
    {
     "t": "chapter",
     "title": "The forensic pass: red flags, measured",
     "minutes": 10
    },
    {
     "t": "p",
     "text": "We now have three questions and some likely answers. The forensic pass turns suspicion into numbers. You do not need complicated models. A handful of ratios, computed consistently, catch most problems."
    },
    {
     "t": "h",
     "text": "Days sales outstanding"
    },
    {
     "t": "p",
     "text": "**DSO** = receivables ÷ revenue × 365. It measures how many days of sales are waiting to be collected. Halvorn’s DSO was 110 ÷ 800 × 365 = **50 days** in FY2024 and 180 ÷ 960 × 365 = **68 days** in FY2025. Customers, on average, now take 18 more days to pay."
    },
    {
     "t": "fig",
     "kind": "line",
     "series": [
      {
       "name": "DSO (days)",
       "points": [
        48,
        49,
        50,
        50,
        52,
        55,
        59,
        68
       ]
      }
     ],
     "xLabels": [
      "Q1 24",
      "Q2 24",
      "Q3 24",
      "Q4 24",
      "Q1 25",
      "Q2 25",
      "Q3 25",
      "Q4 25"
     ],
     "unit": "",
     "caption": "Quarterly DSO: flat for a year, then rising, with a jump in Q4 2025."
    },
    {
     "t": "p",
     "text": "The quarterly pattern matters. A gradual rise could reflect a shift to slower-paying customers. A sharp jump in the last quarter of the year, right after payment terms were extended and alongside $18 million of bill-and-hold, is the signature of revenue being pulled forward. One more detail: Q4 was 34% of FY2025 revenue, versus 27% of FY2024 revenue."
    },
    {
     "t": "p",
     "text": "And the **allowance for credit losses** (ASC 326, CECL) stayed at $3 million while gross receivables grew about 62%, from $113 million to $183 million. The allowance fell from about 2.7% of gross receivables to 1.6%. Longer terms to distributors usually mean more credit risk, not less. A flat reserve on a much larger, older receivable book is a second, quieter boost to earnings."
    },
    {
     "t": "h",
     "text": "Inventory days and the cash conversion cycle"
    },
    {
     "t": "fig",
     "kind": "table",
     "head": [
      "Metric",
      "Formula",
      "FY24",
      "FY25"
     ],
     "rows": [
      [
       "DSO",
       "AR ÷ Rev × 365",
       "50",
       "68"
      ],
      [
       "DIO",
       "Inv ÷ COGS × 365",
       "68",
       "84"
      ],
      [
       "DPO",
       "AP ÷ COGS × 365",
       "53",
       "52"
      ],
      [
       "Cash cycle",
       "DSO + DIO − DPO",
       "65",
       "100"
      ]
     ],
     "caption": "Halvorn now waits about 100 days between paying suppliers and collecting from customers."
    },
    {
     "t": "p",
     "text": "Inventory days rose from 68 to 84. Some build is normal before a product launch, and MD&A mentions the S7. But combined with slower collections, the cash conversion cycle grew by about 35 days. At FY2025 revenue of about $2.6 million per day, every extra day customers take to pay ties up roughly $2.6 million. The next exercise shows that slower collections and the inventory build explain most of the $87 million that working capital absorbed."
    },
    {
     "t": "h",
     "text": "A short catalogue of red flags"
    },
    {
     "t": "fig",
     "kind": "grid",
     "items": [
      {
       "icon": "📦",
       "label": "Channel stuffing",
       "note": "AR and distributor sales spike"
      },
      {
       "icon": "🏗️",
       "label": "Aggressive capitalizing",
       "note": "costs moved to assets"
      },
      {
       "icon": "⏱️",
       "label": "Longer useful lives",
       "note": "less depreciation"
      },
      {
       "icon": "🛟",
       "label": "Thin reserves",
       "note": "allowances not keeping up"
      },
      {
       "icon": "💧",
       "label": "Cash gap",
       "note": "profit up, cash down"
      },
      {
       "icon": "🎭",
       "label": "Recurring one-timers",
       "note": "non-GAAP every year"
      }
     ],
     "caption": "Halvorn shows signs of all six. Each one alone could be benign."
    },
    {
     "t": "p",
     "text": "Other flags you will meet in practice: revenue recognized on gross versus net basis in a way that changes year to year; large “other income” items holding up earnings; related-party transactions (ASC 850) with entities owned by executives; frequent changes in segments that break comparisons; goodwill that is never impaired (ASC 350) despite falling segment profit; and cash taxes far below tax expense for many years."
    },
    {
     "t": "h",
     "text": "Earnings quality, on a spectrum"
    },
    {
     "t": "p",
     "text": "Accounting choices are not good or bad. They sit on a spectrum from conservative to aggressive. The forensic reader places each of the company’s key judgments on that spectrum and asks whether they all lean the same way."
    },
    {
     "t": "fig",
     "kind": "spectrum",
     "left": "Conservative",
     "right": "Aggressive",
     "items": [
      {
       "label": "Tax reserves",
       "pos": 35
      },
      {
       "label": "SSP method",
       "pos": 50
      },
      {
       "label": "Useful lives",
       "pos": 68
      },
      {
       "label": "Credit reserve",
       "pos": 75
      },
      {
       "label": "Bill-and-hold",
       "pos": 80
      },
      {
       "label": "Capitalization",
       "pos": 88
      }
     ],
     "caption": "When every judgment leans right, earnings quality is low."
    },
    {
     "t": "fig",
     "kind": "matrix",
     "xAxis": "Size of effect →",
     "yAxis": "Judgment involved →",
     "cells": [
      {
       "title": "Investigate",
       "note": "Bill-and-hold, credit reserve"
      },
      {
       "title": "Adjust now",
       "note": "Capitalized software"
      },
      {
       "title": "Note it",
       "note": "Tax items, SSP"
      },
      {
       "title": "Quantify",
       "note": "Useful-life change"
      }
     ],
     "caption": "Triage: big effects get adjusted or quantified, smaller judgment calls get investigated."
    },
    {
     "t": "exercise",
     "title": "Measure the working-capital squeeze",
     "prompt": "Using Halvorn’s numbers, quantify how much cash would have been released in FY2025 if DSO and DIO had stayed at FY2024 levels.",
     "steps": [
      "Compute receivables at FY2024 DSO on FY2025 revenue.",
      "Compute inventory at FY2024 DIO on FY2025 cost of revenue.",
      "Compare with actual balances."
     ],
     "answer": "Receivables at 50.2 days: 960 × 50.2 ÷ 365 = 132. Actual 180. Excess: 48.\n\nInventory at 68.4 days: 566 × 68.4 ÷ 365 = 106. Actual 130. Excess: 24.\n\nTotal excess working capital: about 72.\n\nIf Halvorn had kept FY2024 efficiency, operating cash flow would have been roughly 84 + 72 = 156 instead of 84, and free cash flow positive at about 51. So the cash gap is not caused by growth itself. It is caused by growth arriving with much slower collections and a heavier inventory build. That is the precise question to put to management and, if you are the auditor, to test with confirmations, subsequent cash receipts and distributor sell-through data."
    },
    {
     "t": "chapter",
     "title": "Quality of earnings: rebuild the year",
     "minutes": 10
    },
    {
     "t": "p",
     "text": "A **quality of earnings** analysis asks one question: what is the sustainable, repeatable operating profit of this business? It is the core of every M&A due diligence report, and it is the right last step for any careful 10-K read. We start from reported operating income and adjust for items that are non-recurring, timing-driven or caused by changes in accounting judgment."
    },
    {
     "t": "h",
     "text": "Halvorn’s bridge"
    },
    {
     "t": "fig",
     "kind": "table",
     "head": [
      "Quality of earnings, FY2025",
      "$M"
     ],
     "rows": [
      [
       "Reported operating income",
       "150"
      ],
      [
       "Extra software capitalization",
       "(30)"
      ],
      [
       "Less lower amortization effect",
       "3"
      ],
      [
       "Useful-life change",
       "(8)"
      ],
      [
       "Bill-and-hold pulled forward",
       "(7)"
      ],
      [
       "Adjusted operating income",
       "108"
      ]
     ],
     "caption": "Removing this year’s judgment changes leaves $108M of sustainable operating income."
    },
    {
     "t": "p",
     "text": "How each line was built. **Capitalization**: FY2025 capitalized 45 versus 15 at last year’s pace, so 30 more cost would have hit R&D. But if that cost had been expensed, there would be slightly less amortization this year, about 3, so the net adjustment is 27. **Useful lives**: the disclosed $8 million. **Bill-and-hold**: we do not conclude the revenue is wrong, but we treat it as timing. At the 41% gross margin, $18 million of revenue carries about $7 million of gross profit."
    },
    {
     "t": "p",
     "text": "We deliberately did **not** adjust for the credit reserve, because we lack data to estimate it, and we did not adjust for recurring restructuring, because GAAP operating income already includes it. A good quality-of-earnings bridge is conservative in what it claims: every line must be traceable to a disclosure."
    },
    {
     "t": "fig",
     "kind": "bars",
     "data": [
      {
       "label": "FY24 reported",
       "value": 12.5
      },
      {
       "label": "FY25 reported",
       "value": 15.6,
       "highlight": true
      },
      {
       "label": "FY25 adjusted",
       "value": 11.5,
       "highlight": true
      }
     ],
     "unit": "%",
     "caption": "Operating margin: the breakout disappears after adjustments."
    },
    {
     "t": "p",
     "text": "Adjusted operating income of 108 on adjusted revenue of 942 (960 less the 18 of bill-and-hold) gives a margin of **11.5%**, below last year’s 12.5%. In other words, the underlying business grew, but its profitability slightly **declined**. The “breakout” was produced by three accounting judgments that all moved in the same direction in the same year, plus faster recognition at year end."
    },
    {
     "t": "p",
     "text": "To be fair to FY2024, the same lens should be applied to the prior year. If FY2024 also had items that flattered it, the comparison changes. In this case, the filing shows no similar changes in FY2024, so 12.5% stands."
    },
    {
     "t": "key",
     "text": "Quality of earnings is not about catching fraud. It is about separating what the business earned from what the accounting choices added, so that you compare like with like."
    },
    {
     "t": "h",
     "text": "Free cash flow: the final referee"
    },
    {
     "t": "fig",
     "kind": "stack",
     "columns": [
      {
       "title": "FY2024",
       "blocks": [
        {
         "label": "Op. cash flow",
         "value": 112
        }
       ]
      },
      {
       "title": "FY2025",
       "blocks": [
        {
         "label": "Op. cash flow",
         "value": 84
        }
       ]
      },
      {
       "title": "FY25 spending",
       "blocks": [
        {
         "label": "Capex",
         "value": 60
        },
        {
         "label": "Cap. software",
         "value": 45
        }
       ]
      }
     ],
     "unit": "$",
     "caption": "FY2025 investment of $105M exceeded operating cash of $84M."
    },
    {
     "t": "p",
     "text": "Accrual accounting can shift profit between years; it cannot create cash. Over several years, a business whose earnings are high quality shows free cash flow that tracks net income. Halvorn’s free cash flow went from +$42 million to −$21 million while net income rose $38 million. The dividend of $20 million was paid with borrowed money."
    },
    {
     "t": "p",
     "text": "A quick systematic measure is the **accruals ratio**: (net income − operating cash flow − investing cash flow) ÷ average total assets. For Halvorn: (100 − 84 + 105) ÷ 873 = **13.9%**. Research going back to Richard Sloan’s work in the 1990s found that companies with high accruals tended to see earnings fall back later. A double-digit ratio is not proof of anything; it is a strong reason to read the notes."
    },
    {
     "t": "term",
     "word": "Accruals ratio",
     "def": "The share of earnings not backed by cash, scaled by assets. A high positive ratio means profit is coming from growing balance sheet items rather than cash receipts."
    },
    {
     "t": "h",
     "text": "Writing it up"
    },
    {
     "t": "p",
     "text": "Your review ends with a short memo. A senior accountant’s memo is factual, neutral and traceable. It does not say “they are cooking the books.” It says what was observed, where, how large, and what evidence would resolve it."
    },
    {
     "t": "example",
     "title": "A five-line review memo",
     "text": "Subject: Halvorn Instruments FY2025 10-K, quality of earnings\n\n1. Reported operating income $150M (15.6%); adjusted $108M (11.5%) after removing $27M of incremental software capitalization, $8M from useful-life extension and $7M of year-end bill-and-hold gross profit.\n2. Operating cash flow fell to $84M from $112M; DSO rose 50 to 68 days, DIO 68 to 84; free cash flow −$21M.\n3. Distributor revenue +60% with extended terms (60 to 120 days) and new rotation rights; allowance for credit losses flat at $3M.\n4. Context: new auditor, CFO departure in October, two CAMs on the same areas.\n5. Next steps: Q1 2026 10-Q for returns, DSO and distributor sell-through; credit agreement definition of EBITDA; evidence for useful-life change."
    },
    {
     "t": "exercise",
     "title": "Build the bridge for a peer",
     "prompt": "Halvorn’s competitor, the fictional Quellmark Sensors, reports operating income of $80 million on revenue of $600 million. Its notes disclose: a $9 million gain on sale of a building included in operating income; a release of $4 million of warranty reserve due to a change in estimate; and $5 million of software capitalized versus $6 million last year, with amortization of $5 million both years. Compute adjusted operating income and margin, and compare with Halvorn’s adjusted margin.",
     "steps": [
      "Remove gains that will not repeat.",
      "Remove one-off reserve releases.",
      "Decide whether the capitalization pattern needs an adjustment."
     ],
     "answer": "Reported operating income: 80.\n− Gain on sale of building: 9 (non-recurring, not part of selling sensors).\n− Warranty reserve release: 4 (a one-time change in estimate that flattered this year).\nCapitalized software: 5 versus 6 last year, with stable amortization of 5. Capitalization is steady and roughly equal to amortization, so the net effect on income is close to zero. No adjustment.\n\nAdjusted operating income: 80 − 9 − 4 = 67.\nMargin: 67 ÷ 600 = 11.2%.\n\nComparison: reported margins were Halvorn 15.6% versus Quellmark 13.3%, which suggested Halvorn was far ahead. Adjusted margins are Halvorn 11.5% versus Quellmark 11.2%: nearly identical. The reported gap came almost entirely from accounting effects, not from the businesses."
    },
    {
     "t": "chapter",
     "title": "Your 10-K checklist",
     "minutes": 5
    },
    {
     "t": "p",
     "text": "Let us turn the hour into a routine you can run on any filing, whether it is a client’s parent company, a vendor you are assessing or a stock in your own portfolio. It takes about an hour with practice, and the first twenty minutes catch most of what matters."
    },
    {
     "t": "fig",
     "kind": "pyramid",
     "levels": [
      "Judgment: QoE bridge",
      "Notes: revenue, capitalization, leases, debt, tax",
      "Ratios: margins, days, cash conversion",
      "Facts: opinion, CAMs, statements tie"
     ],
     "caption": "Build from verified facts up to judgment, never the other way."
    },
    {
     "t": "list",
     "items": [
      "**Auditor’s report:** opinion type, going concern language, CAMs, auditor tenure or change.",
      "**Tie the statements:** balance sheet balances, equity rolls forward, cash flow change equals cash change.",
      "**Growth comparison:** revenue versus receivables, inventory, deferred revenue, capitalized costs.",
      "**Cash versus profit:** cash conversion, free cash flow, accruals ratio, three years if possible.",
      "**Policy changes:** any change in estimate, useful life, capitalization, SSP or reserves, and its dollar effect.",
      "**Non-GAAP:** read every add-back; recurring “one-time” items are operating costs."
     ],
     "ordered": true
    },
    {
     "t": "p",
     "text": "Then go wider. Read the debt covenants and maturities, the tax rate reconciliation, segment margins and the significant segment expenses, and the new paragraphs in risk factors. Finally, look at the 8-Ks filed during the year and the first 10-Q of the next year: it is often where the story either confirms itself or quietly reverses."
    },
    {
     "t": "fig",
     "kind": "cycle",
     "steps": [
      "Question",
      "Locate",
      "Measure",
      "Compare",
      "Conclude"
     ],
     "center": "Each red flag",
     "caption": "The same loop for every issue: from a question to a traceable conclusion."
    },
    {
     "t": "p",
     "text": "One final thought about tone. In practice you will often review companies where people you know prepared the numbers. The forensic mindset is not suspicion of people. It is respect for the reader of the statements, who deserves numbers that mean the same thing this year as last year. That is what comparability, consistency and faithful representation in the FASB conceptual framework are for."
    },
    {
     "t": "tip",
     "text": "Pick one public company you know, a client’s parent or a brand you buy, and run only the first three checklist lines on its latest 10-K this week. Time yourself; aim for twenty minutes."
    }
   ],
   "takeaways": [
    "Read a 10-K by question: auditor’s report and CAMs first, then statements, notes, and MD&A last.",
    "Compare growth rates: receivables, inventory or capitalized costs racing past revenue need an explanation.",
    "Profit up while operating cash falls means earnings are made of accruals; find which ones.",
    "Non-GAAP add-backs that recur every year are operating costs, whatever the label says.",
    "A quality-of-earnings bridge removes this year’s judgment changes so you compare like with like."
   ],
   "quiz": [
    {
     "q": "Where in a 10-K do you find management’s conclusion on internal control over financial reporting?",
     "options": [
      "Item 1A",
      "Item 7A",
      "Item 9A",
      "Item 15"
     ],
     "answer": 2,
     "why": "Item 9A, Controls and Procedures, contains management’s SOX 404 assessment, and for larger filers the auditor also opines on ICFR."
    },
    {
     "q": "Halvorn’s revenue grew 20% while receivables grew 64%. DSO went from 50 to 68 days. What is the most useful next step?",
     "options": [
      "Conclude the company committed fraud",
      "Ignore it, since revenue growth always raises receivables proportionally",
      "Check payment terms, distributor sales, year-end transactions and subsequent collections",
      "Recompute revenue using the cash basis"
     ],
     "answer": 2,
     "why": "Disproportionate receivable growth is a flag, not a verdict. The notes, MD&A and subsequent cash receipts tell you whether terms changed or revenue was pulled forward."
    },
    {
     "q": "A kit sells for $1,000. Standalone prices: sensor $720, subscription $480. How much revenue is recognized on delivery for the sensor?",
     "options": [
      "$720",
      "$1,000",
      "$400",
      "$600"
     ],
     "answer": 3,
     "why": "Allocate in proportion to standalone prices: 1,000 × 720 ÷ 1,200 = $600. The $400 subscription portion is deferred."
    },
    {
     "q": "Which statement about Adjusted EBITDA under SEC rules is correct?",
     "options": [
      "It must be reconciled to the most comparable GAAP measure",
      "It may be shown with more prominence than net income",
      "It must exclude stock-based compensation",
      "It is audited as part of the financial statements"
     ],
     "answer": 0,
     "why": "Regulation G and Item 10(e) require a reconciliation to the most directly comparable GAAP measure, presented with equal or greater prominence for the GAAP figure."
    },
    {
     "q": "Halvorn’s lease liability is $84M at 6% and next year’s payments are $15M. Why is the current portion only about $10M?",
     "options": [
      "Because operating leases are never current",
      "Because about $5M of next year’s payments is interest, not principal",
      "Because the ROU asset is $80M",
      "Because lease payments are tax deductible"
     ],
     "answer": 1,
     "why": "84 × 6% ≈ 5 of interest; only the remaining 10 reduces the liability, so that is the current portion."
    },
    {
     "q": "Extending equipment useful lives from 5 to 7 years under ASC 250 is:",
     "options": [
      "A change in accounting principle requiring restatement",
      "An error correction",
      "A change in estimate applied prospectively",
      "Prohibited under US GAAP"
     ],
     "answer": 2,
     "why": "Useful lives are estimates. Changes are applied prospectively, with disclosure of the effect on income and EPS when material."
    },
    {
     "q": "A company moves $30M of engineering cost from R&D expense to capitalized software. In the year of the change, operating cash flow:",
     "options": [
      "Rises, because the spending moves to investing activities",
      "Falls by $30M",
      "Is unaffected",
      "Rises by $60M"
     ],
     "answer": 0,
     "why": "Capitalized development costs are investing outflows. Operating cash flow improves even though total cash spent is identical."
    },
    {
     "q": "Halvorn’s ‘restructuring’ add-back was $10M, $11M and $12M in three consecutive years. The best treatment is:",
     "options": [
      "Keep excluding it, since management labels it one-time",
      "Treat it as a recurring operating cost",
      "Reclassify it as interest expense",
      "Move it to other comprehensive income"
     ],
     "answer": 1,
     "why": "A charge that recurs every year is a normal cost of running the business. Excluding it overstates sustainable profit."
    },
    {
     "q": "Net income $100M, operating cash flow $84M, investing cash flow −$105M, average assets $873M. The accruals ratio is about:",
     "options": [
      "1.8%",
      "11.5%",
      "13.9%",
      "24.0%"
     ],
     "answer": 2,
     "why": "(100 − 84 + 105) ÷ 873 = 121 ÷ 873 ≈ 13.9%. A high ratio means earnings rely heavily on growing balance sheet items."
    },
    {
     "q": "Reported operating income is $150M. Adjustments: −$27M net capitalization, −$8M useful lives, −$7M bill-and-hold. Adjusted operating income is:",
     "options": [
      "$135M",
      "$115M",
      "$123M",
      "$108M"
     ],
     "answer": 3,
     "why": "150 − 27 − 8 − 7 = 108. Each adjustment removes a one-year effect of a judgment change or a timing benefit."
    }
   ]
  }
 ]
});
