LEARN.add({"subject":"accounting","lessons":[
{
"id":"acc-3-01",
"subject":"accounting",
"level":3,
"order":11,
"type":"short",
"minutes":5,
"title":"Cash flow statement: the indirect method",
"hook":"A company earned $120,000 but its cash grew by $71,000. The indirect method explains every dollar of the gap.",
"tags":["cash flow statement","indirect method","working capital","operating cash flow","asc 230","free cash flow","depreciation"],
"blocks":[
{"t":"p","text":"An analyst on the 7 train is staring at two numbers: net income up 15%, operating cash flow down 10%. Which one is lying? Neither. They measure different things, and the **indirect method** is the bridge between them. More than nine out of ten US companies use it, because it is built straight from the income statement and two balance sheets."},
{"t":"p","text":"ASC 230 allows a direct method (cash received from customers, cash paid to suppliers), but even then a reconciliation from net income must be disclosed. In practice, the indirect method is the language of the cash flow statement."},
{"t":"p","text":"The logic is simple. Net income was built on accrual accounting, so it contains things that never touched the bank, and it ignores cash that moved for timing reasons. The indirect method takes profit and walks it back to cash, one honest adjustment at a time, until it explains exactly how cash changed between two balance sheets."},
{"t":"fig","kind":"flow","steps":[{"label":"Net income","icon":"📈"},{"label":"Non-cash items","icon":"🔄","note":"Depreciation, gains"},{"label":"Working capital","icon":"📦","note":"AR, inventory, AP"},{"label":"Operating cash","icon":"💵"}],"caption":"Start with profit, undo what was not cash, then adjust for timing."},
{"t":"h","text":"The two kinds of adjustment"},
{"t":"list","items":["**Non-cash items:** add back depreciation, amortization, stock-based compensation and impairments; subtract gains (and add back losses) on asset sales, because the full proceeds belong in investing.","**Working capital changes:** an increase in an operating asset uses cash (subtract); an increase in an operating liability provides cash (add). Decreases do the opposite."],"ordered":false},
{"t":"key","text":"When an operating asset like receivables grows, cash lags behind profit; when an operating liability like payables grows, cash runs ahead of profit."},
{"t":"fig","kind":"table","head":["Balance change","Cash effect","Why"],"rows":[["AR up","Subtract","Sales not yet collected"],["Inventory up","Subtract","Cash tied on shelves"],["Prepaids down","Add","Expense with no cash now"],["AP up","Add","Costs not yet paid"],["Accruals down","Subtract","Paid old liabilities"]],"caption":"The sign rule: assets move opposite to cash, liabilities move with cash."},
{"t":"example","title":"Hudson Tools Inc., one year","text":"Net income 120,000\n+ Depreciation 30,000\n− Gain on sale of equipment 5,000\n− Increase in receivables 25,000\n− Increase in inventory 15,000\n+ Decrease in prepaids 3,000\n+ Increase in payables 12,000\n− Decrease in accrued liabilities 4,000\n= **Operating cash flow 116,000**\nInvesting: equipment bought −60,000, sale proceeds +20,000 = −40,000\nFinancing: new loan +25,000, dividends −30,000 = −5,000\nNet change in cash: 116,000 − 40,000 − 5,000 = **+71,000**"},
{"t":"fig","kind":"bars","data":[{"label":"Net income","value":120000,"highlight":false},{"label":"Operating","value":116000,"highlight":true},{"label":"Investing","value":-40000,"highlight":false},{"label":"Financing","value":-5000,"highlight":false},{"label":"Net change","value":71000,"highlight":false}],"unit":"$","caption":"From $120,000 of profit to $71,000 of new cash at Hudson Tools."},
{"t":"check","q":"Why is the $5,000 gain subtracted, when the company actually received $20,000 in cash?","a":"The gain is inside net income, but the full $20,000 of proceeds is reported in investing. Leaving the gain in operating would count $5,000 twice. Subtracting it moves the whole sale to investing."},
{"t":"h","text":"Where things go"},
{"t":"list","items":["**Interest paid and received, dividends received:** operating under US GAAP. Dividends paid: financing.","**Income taxes paid:** operating, with the amount disclosed.","**Non-cash investing and financing** (equipment bought with a note, a lease signed): disclosed separately, not in the totals.","**Free cash flow** is not a GAAP term; analysts usually compute operating cash flow minus capital expenditures: 116,000 − 60,000 = $56,000."],"ordered":false},
{"t":"p","text":"European note: IFRS has long let companies choose where interest and dividends go, and its newer rules (IFRS 18) place interest paid in financing for most companies. Either way, the same group can report a higher operating cash flow under IFRS than its US subsidiary does under GAAP."},
{"t":"warn","text":"Watch companies where operating cash flow stays far below net income for several years. Rising receivables or inventory faster than sales can signal aggressive revenue recognition or slow-moving stock."},
{"t":"tip","text":"Take a client’s two most recent balance sheets and its income statement, build the operating section by hand, and compare it to the reported one. Any gap is a classification you missed."}
],
"takeaways":["Indirect method: net income, plus non-cash items, plus or minus working capital changes.","Operating assets up means less cash; operating liabilities up means more cash.","Gains are subtracted in operating because the full proceeds go to investing."],
"quiz":[
{"q":"Net income is $50,000, depreciation $8,000, receivables rose $6,000 and payables rose $4,000. What is operating cash flow?","options":["$56,000","$60,000","$68,000","$52,000"],"answer":0,"why":"50,000 + 8,000 − 6,000 + 4,000 = $56,000."},
{"q":"Under US GAAP, where are dividends paid to shareholders reported?","options":["Operating","Investing","Not reported","Financing"],"answer":3,"why":"Dividends paid are a return to owners, so they are a financing outflow under ASC 230."},
{"q":"A company sells a machine with a book value of $12,000 for $9,000. How is this shown in the indirect method?","options":["Subtract $3,000 in operating; $9,000 inflow in investing","Add $3,000 loss in operating; $9,000 inflow in investing","Add $9,000 in operating","Add $12,000 in investing"],"answer":1,"why":"The $3,000 loss reduced net income without using cash, so it is added back; the $9,000 proceeds are an investing inflow."}
]
},
{
"id":"acc-3-02",
"subject":"accounting",
"level":3,
"order":12,
"type":"short",
"minutes":5,
"title":"Deferred taxes demystified (ASC 740)",
"hook":"Two sets of rules, one company, two different profits. Deferred taxes are the bridge that keeps both honest.",
"tags":["deferred taxes","asc 740","deferred tax liability","deferred tax asset","temporary differences","valuation allowance","effective tax rate"],
"blocks":[
{"t":"p","text":"In April a CFO signs a tax return showing taxable income of $140,000. A few weeks earlier, the audited statements showed pre-tax income of $200,000. Nobody made a mistake. Book income follows GAAP; taxable income follows the Internal Revenue Code. **ASC 740** makes sure the income statement shows the tax that belongs to this year’s book profit, even when the cash tax is paid in a different year."},
{"t":"fig","kind":"equation","parts":["Tax expense","=","Current tax","+","Deferred tax"],"caption":"Current tax is what the return says now; deferred tax is the change in future tax effects."},
{"t":"h","text":"Temporary vs permanent differences"},
{"t":"fig","kind":"compare","left":{"title":"Temporary","icon":"⏳","items":["Same total, different timing","Reverses in later years","Creates DTA or DTL","Example: depreciation speed"]},"right":{"title":"Permanent","icon":"🔒","items":["Never reverses","No deferred tax","Moves the effective rate","Example: fines, muni interest"]},"caption":"Only temporary differences create deferred taxes."},
{"t":"p","text":"ASC 740 works from the balance sheet. For every asset and liability, compare the **book basis** with the **tax basis**. If the difference will create more taxable income in the future, record a **deferred tax liability (DTL)**. If it will create future deductions, record a **deferred tax asset (DTA)**. Multiply by the enacted rate for the years it will reverse."},
{"t":"key","text":"A deferred tax liability is tax you have postponed, not avoided; a deferred tax asset is tax you have prepaid or deductions you have saved for later."},
{"t":"example","title":"One machine, three years","text":"Equipment cost $90,000, book life 3 years straight-line: $30,000 a year. Suppose tax rules allow the full $90,000 as a deduction in year 1. Pre-tax book income $200,000 each year. Illustrative rate 21%.\nYear 1: taxable income = 200,000 + 30,000 − 90,000 = 140,000. Current tax 29,400.\nBook basis 60,000, tax basis 0, difference 60,000 × 21% = DTL 12,600.\nDr Income tax expense 42,000 / Cr Income taxes payable 29,400 / Cr Deferred tax liability 12,600\nYear 2: taxable 230,000, current tax 48,300. DTL falls to 6,300.\nDr Income tax expense 42,000 / Dr Deferred tax liability 6,300 / Cr Income taxes payable 48,300\nYear 3: same as year 2; DTL reaches 0. Tax expense is $42,000 every year: 21% of book income."},
{"t":"fig","kind":"line","series":[{"name":"Current tax","points":[29400,48300,48300]},{"name":"Tax expense","points":[42000,42000,42000]},{"name":"DTL balance","points":[12600,6300,0]}],"xLabels":["Year 1","Year 2","Year 3"],"unit":"$","caption":"Cash tax jumps around; book tax expense stays matched to book profit."},
{"t":"check","q":"In year 1 the company also pays a $10,000 regulatory fine, which is not deductible. How does this change the deferred tax?","a":"It does not. A fine is a permanent difference: it never reverses, so no DTA or DTL. It simply raises current tax relative to book income and pushes the effective tax rate above 21%."},
{"t":"h","text":"Deferred tax assets and the valuation allowance"},
{"t":"p","text":"Common DTAs come from warranty or bad debt reserves (expensed in books now, deducted for tax when paid or written off), accrued bonuses paid late, and net operating loss carryforwards. A DTA is only worth something if there will be future taxable income to use it. If it is **more likely than not** (over 50%) that part of it will not be realized, a **valuation allowance** reduces it, with the charge to tax expense."},
{"t":"list","items":["**Measure** at enacted rates only; when a new rate is enacted, remeasure everything and book the effect in that period.","**Present** all deferred taxes as noncurrent on the balance sheet, netted by tax jurisdiction.","**Uncertain tax positions** follow a separate two-step test in ASC 740-10: more likely than not to be sustained, then measure the largest benefit above 50% likely.","**Disclose** a rate reconciliation from the statutory to the effective rate."],"ordered":false},
{"t":"term","word":"Effective tax rate","def":"Total income tax expense divided by pre-tax book income. Permanent differences, state taxes, credits and valuation allowances move it away from the statutory rate."},
{"t":"warn","text":"Do not compute deferred taxes on the income statement difference alone. Always start from book basis versus tax basis on the balance sheet; that catches items like acquisition step-ups that never pass through income."},
{"t":"tip","text":"Pick one client and list its three largest book-tax differences from the provision. For each, label it temporary or permanent and say which way it will reverse."}
],
"takeaways":["Tax expense = current tax + change in deferred taxes; it tracks book income, not the return.","Temporary differences create DTAs and DTLs; permanent differences only move the effective rate.","Reduce a DTA with a valuation allowance if realization is not more likely than not."],
"quiz":[
{"q":"Book depreciation is slower than tax depreciation. What does this create?","options":["A deferred tax asset","A permanent difference","A deferred tax liability","A valuation allowance"],"answer":2,"why":"The asset’s book basis exceeds its tax basis, so future taxable income will be higher: a DTL."},
{"q":"Which is a permanent difference in the US?","options":["Interest on municipal bonds","Accrued warranty costs","Prepaid rent","Bad debt allowance"],"answer":0,"why":"Municipal bond interest is in book income but never taxable federally, so it never reverses. The others are temporary."},
{"q":"A company has a $500,000 DTA from losses but expects only $200,000 of future taxable income to absorb it. What should it consider?","options":["Increasing the DTA","Reclassifying it as current","A valuation allowance for the part unlikely to be realized","Converting it to a DTL"],"answer":2,"why":"If realization of part of the DTA is not more likely than not, ASC 740 requires a valuation allowance."}
]
},
{
"id":"acc-3-03",
"subject":"accounting",
"level":3,
"order":13,
"type":"short",
"minutes":5,
"title":"Consolidation and intercompany basics",
"hook":"When a parent sells to its own subsidiary, the group has not sold anything. Consolidation is how you prove it.",
"tags":["consolidation","asc 810","intercompany eliminations","noncontrolling interest","transfer pricing","subsidiary","asc 830","unrealized profit"],
"blocks":[
{"t":"p","text":"An Italian machinery group owns 100% of its US subsidiary in New Jersey. Every month, Italy ships machines to the US company, which resells them to American customers. Inside the group there are two sets of books, two invoices and two profits. Outside, investors want one answer: **how much did the whole group sell to real customers, and what did it earn?**"},
{"t":"p","text":"Under US GAAP, **ASC 810** requires a parent to consolidate every entity it controls, usually through more than 50% of the voting shares, or as primary beneficiary of a variable interest entity. Consolidated statements present the group as if it were one company."},
{"t":"fig","kind":"flow","steps":[{"label":"Parent books","icon":"🏢"},{"label":"Sub books","icon":"🏬","note":"Same GAAP, same date"},{"label":"Add together","icon":"➕","note":"Line by line"},{"label":"Eliminate","icon":"✂️","note":"Intercompany"},{"label":"Consolidated","icon":"📊"}],"caption":"Consolidation is addition first, then removal of everything the group did with itself."},
{"t":"key","text":"A group cannot sell to itself, owe itself or profit from itself, so every intercompany balance and transaction is eliminated and only dealings with outsiders remain."},
{"t":"h","text":"The three classic eliminations"},
{"t":"list","items":["**Investment vs equity:** the parent’s Investment in subsidiary is replaced by the sub’s actual assets and liabilities (plus goodwill). Dr Sub common stock, Dr Sub retained earnings, Dr Goodwill / Cr Investment in subsidiary.","**Intercompany balances:** Dr Intercompany payable / Cr Intercompany receivable. They must match to the cent, in the same currency, before you can eliminate them.","**Intercompany sales and unrealized profit:** remove the internal sale, and remove the markup still sitting in the buyer’s inventory."],"ordered":true},
{"t":"example","title":"Machines from Italy, in dollars","text":"Parent’s cost of machines: $60,000. It sells them to the US sub for $100,000.\nBy year end the sub resells 75% to customers for $120,000; 25% ($25,000 at transfer price) is still in inventory.\nCombined: sales 220,000, COGS 135,000 (60,000 + 75,000), gross profit 85,000.\nElimination 1: Dr Sales 100,000 / Cr Cost of goods sold 100,000\nElimination 2 (unrealized profit: 25% × $40,000 markup): Dr Cost of goods sold 10,000 / Cr Inventory 10,000\nConsolidated: sales 120,000, COGS 45,000 (75% × 60,000), gross profit 75,000. Inventory shown at group cost: 25,000 − 10,000 = $15,000."},
{"t":"fig","kind":"bars","data":[{"label":"Combined sales","value":220000,"highlight":false},{"label":"Eliminated","value":-100000,"highlight":false},{"label":"Consolidated","value":120000,"highlight":true}],"unit":"$","caption":"Only the $120,000 sold to American customers survives consolidation."},
{"t":"check","q":"Why is $10,000 of profit removed when the parent really did earn $40,000 on its sale to the sub?","a":"From the group’s view, only 75% of the machines left the group. The $10,000 markup on the 25% still in US inventory is unrealized; it is recognized in the period the sub sells those machines to an outside customer."},
{"t":"h","text":"When ownership is not 100%"},
{"t":"p","text":"If the parent owns 80%, it still consolidates 100% of the sub’s assets, liabilities, revenue and expenses, because it controls them. The 20% belonging to outside shareholders is shown as **noncontrolling interest**: inside equity on the balance sheet and as a separate share of net income."},
{"t":"fig","kind":"stack","columns":[{"title":"Sub net assets","blocks":[{"label":"Net assets","value":500000}]},{"title":"Who owns them","blocks":[{"label":"Parent 80%","value":400000},{"label":"NCI 20%","value":100000}]}],"unit":"$","caption":"Consolidate everything, then show the outsiders’ slice as noncontrolling interest."},
{"t":"h","text":"US subsidiaries of foreign groups"},
{"t":"p","text":"The US sub usually keeps local US GAAP books in dollars for statutory needs and US taxes, then sends a monthly **reporting package** to the parent under the group’s framework, often IFRS. The parent translates dollar results into euros under its own currency rules (ASC 830 is the US GAAP equivalent), with translation differences going to other comprehensive income, not profit."},
{"t":"p","text":"**Transfer pricing** in one paragraph: the price Italy charges the US sub decides which country taxes the profit. The IRS (under Section 482) and the OECD guidelines require an arm’s length price, the price unrelated parties would agree on, supported by documentation. Set it too high and US taxable income looks thin, inviting adjustments and penalties."},
{"t":"warn","text":"Never eliminate intercompany balances that do not agree. Reconcile the mismatch first: timing (goods in transit), currency rates or a missing invoice. Plugging the difference hides real errors."},
{"t":"tip","text":"Before your next month-end, send your intercompany counterpart a one-line balance confirmation in both currencies, two days before the group deadline."}
],
"takeaways":["ASC 810: consolidate what you control, then eliminate all intercompany activity.","Remove internal sales and the unrealized markup still in group inventory.","Partial ownership: consolidate 100%, show outsiders’ share as noncontrolling interest."],
"quiz":[
{"q":"Under ASC 810, what usually triggers consolidation under the voting interest model?","options":["Owning more than 20% of voting shares","Owning more than 50% of voting shares","Any intercompany sales","Sharing the same auditor"],"answer":1,"why":"Control, normally a majority of voting shares, triggers consolidation. 20% to 50% usually means significant influence and the equity method."},
{"q":"A parent sells goods costing $30,000 to its sub for $50,000. The sub still holds 40% at year end. What unrealized profit is eliminated?","options":["$20,000","$12,000","$8,000","$0"],"answer":2,"why":"Total markup is $20,000; 40% remains in inventory, so 0.40 × 20,000 = $8,000 is eliminated."},
{"q":"A parent owns 70% of a subsidiary. How much of the sub’s revenue appears in consolidated revenue?","options":["100%","70%","30%","None, only dividends"],"answer":0,"why":"Control means full consolidation: 100% of revenue and expenses, with the 30% outside share of profit shown as noncontrolling interest."}
]
}
]});
