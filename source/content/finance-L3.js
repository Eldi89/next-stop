LEARN.add({"subject":"finance","lessons":[
{
"id":"fin-3-01","subject":"finance","level":3,"order":11,"type":"short","minutes":5,
"title":"NPV and IRR",
"hook":"A $100,000 machine promises $150,000 back. Is that a good deal? Not necessarily. Here’s how CFOs decide.",
"tags":["npv","irr","capital budgeting","hurdle rate","discounted cash flow","investment decisions"],
"blocks":[
{"t":"p","text":"Harbor Roasters, a coffee company in New Jersey, is choosing between a new roasting machine and an expansion into cold brew. The board has one budget and two eager managers. Gut feeling won’t settle it. Two tools, NPV and IRR, turn the debate into numbers everyone can check."},
{"t":"h","text":"NPV: what a project is worth today"},
{"t":"p","text":"You already know present value. _Net present value_ just applies it to a whole project: discount every future cash flow back to today, add them up, and subtract what you pay upfront. The discount rate is the company’s _hurdle rate_, the minimum return investors expect."},
{"t":"fig","kind":"equation","parts":["NPV","=","PV of future cash","−","Cost today"],"caption":"Positive NPV means the project earns more than the hurdle rate."},
{"t":"example","title":"The roaster: $100,000 now, $30,000 a year for 5 years, 10% hurdle","text":"Year 1: $30,000 ÷ 1.10 = $27,273\nYear 2: $30,000 ÷ 1.10² = $24,793\nYear 3: $30,000 ÷ 1.10³ = $22,539\nYear 4: $30,000 ÷ 1.10⁴ = $20,490\nYear 5: $30,000 ÷ 1.10⁵ = $18,628\nSum of PVs ≈ $123,724\nNPV ≈ $123,724 − $100,000 = +$13,724"},
{"t":"p","text":"The cash simply added up is $150,000, but that ignores time. In today’s dollars the project returns about $123,700, and after paying for the machine it creates about $13,700 of value for the owners. That number is the profit **above** what investors already demand."},
{"t":"fig","kind":"bars","data":[{"label":"Year 1","value":27273},{"label":"Year 2","value":24793},{"label":"Year 3","value":22539},{"label":"Year 4","value":20490},{"label":"Year 5","value":18628}],"unit":"$","caption":"The same $30,000 is worth less today the later it arrives."},
{"t":"list","items":["**NPV > 0:** the project beats the hurdle rate; it creates value. Accept.","**NPV = 0:** it earns exactly the hurdle rate; neutral.","**NPV < 0:** investors could do better elsewhere; it destroys value. Reject."],"ordered":false},
{"t":"key","text":"NPV answers the real question: how many dollars of value, in today’s money, does this project add for the owners?"},
{"t":"h","text":"IRR: the project’s own return"},
{"t":"p","text":"The _internal rate of return_ is the discount rate that makes NPV exactly zero. Think of it as the project’s built-in yearly return. If IRR is above the hurdle rate, NPV is positive, and the project passes."},
{"t":"fig","kind":"line","series":[{"name":"NPV of the roaster","points":[50000,29884,13724,565,-10282]}],"xLabels":["0%","5%","10%","15%","20%"],"unit":"$","caption":"NPV falls as the rate rises and crosses zero near 15.2%: that crossing is the IRR."},
{"t":"p","text":"For the roaster, IRR ≈ 15.2%. Managers love IRR because a percentage is easy to compare with a loan rate or a stock return. Spreadsheets find it in seconds with the IRR function, by trial and error."},
{"t":"h","text":"When the two disagree"},
{"t":"example","title":"Roaster vs cold brew line (only one can be funded)","text":"Roaster: costs $100,000, $30,000 a year for 5 years. NPV ≈ $13,724, IRR ≈ 15.2%.\nCold brew: costs $250,000, $70,000 a year for 5 years. NPV ≈ $15,355, IRR ≈ 12.4%.\nIRR prefers the roaster. NPV prefers cold brew, which adds about $1,600 more value.\nWhen projects are mutually exclusive, follow NPV: owners spend dollars, not percentages."},
{"t":"check","q":"A project costs $50,000 and pays $60,000 in one year. The hurdle rate is 12%. What are the NPV and IRR?","a":"PV = $60,000 ÷ 1.12 ≈ $53,571, so NPV ≈ +$3,571. IRR is 20%, since $50,000 × 1.20 = $60,000. Both say accept."},
{"t":"p","text":"Both tools are only as good as the cash flow forecast behind them. A sales estimate 20% too high can turn a positive NPV negative, so good analysts always test a pessimistic case before they say yes. That is called sensitivity analysis, and the Masterclass covers it in depth."},
{"t":"warn","text":"IRR can mislead when cash flows switch sign more than once (for example, a big cleanup cost at the end) or when comparing projects of very different size. NPV stays reliable."},
{"t":"tip","text":"Open a spreadsheet and type −100000 followed by five cells of 30000. Use =NPV(10%, the five cells) − 100000 and =IRR(all six cells). Change one cash flow and watch both move."}
],
"takeaways":["NPV discounts all future cash to today and subtracts the cost; positive means value created.","IRR is the rate that makes NPV zero; accept when it beats the hurdle rate.","When choosing between projects, trust NPV: it measures dollars of value, not percentages."],
"quiz":[
{"q":"A project’s NPV at a 9% hurdle rate is −$4,000. What should the company do?","options":["Accept, because cash flows are positive","Reject, because it earns less than 9%","Accept, because IRR must be above 9%","Wait for the IRR to rise"],"answer":1,"why":"A negative NPV means the project’s return is below the hurdle rate, so investors could do better elsewhere."},
{"q":"What is the IRR?","options":["The hurdle rate set by the board","The interest rate on company debt","The discount rate at which NPV equals zero","The yearly cash flow divided by cost"],"answer":2,"why":"IRR is the rate that makes the present value of inflows equal the upfront cost."},
{"q":"Two mutually exclusive projects: A has higher IRR, B has higher NPV. Which usually wins?","options":["A, because percentages are comparable","Neither, both must be rejected","Whichever is cheaper","B, because it adds more value in dollars"],"answer":3,"why":"Owners care about total value created. NPV measures that directly; IRR can favor small projects."}
]
},
{
"id":"fin-3-02","subject":"finance","level":3,"order":12,"type":"short","minutes":5,
"title":"Cost of capital and WACC",
"hook":"Every dollar a company uses belongs to someone who expects a return. WACC is the bill for all of them.",
"tags":["wacc","cost of capital","cost of equity","cost of debt","capm","capital structure","hurdle rate"],
"blocks":[
{"t":"p","text":"In the last lesson Harbor Roasters used a 10% hurdle rate. Where did that number come from? It is not a guess. It is the price the company pays for its money, set by the lenders and shareholders who funded it. Finance calls it the _cost of capital_."},
{"t":"h","text":"Two kinds of investors, two prices"},
{"t":"p","text":"Companies raise money from **lenders** (debt: bank loans, bonds) and **owners** (equity: shares). Each group gives money only if the expected return pays them for the risk they carry."},
{"t":"fig","kind":"compare","left":{"title":"Debt","icon":"🏦","items":["Fixed interest, paid first","Has a legal claim if unpaid","Interest is tax-deductible"]},"right":{"title":"Equity","icon":"📈","items":["Gets what is left, if anything","Last in line in bankruptcy","Dividends are not deductible"]},"caption":"Lenders stand at the front of the line; shareholders stand at the back."},
{"t":"p","text":"Because shareholders are paid last and nothing is promised, they demand a higher return. Lenders get fixed payments and priority, so they accept less. On top of that, the IRS lets companies deduct interest, which makes debt even cheaper after tax."},
{"t":"term","word":"After-tax cost of debt","def":"Interest rate × (1 − tax rate). A 6% loan at a 25% tax rate really costs 6% × 0.75 = 4.5%."},
{"t":"h","text":"The cost of equity"},
{"t":"p","text":"Shareholders don’t send an invoice, so the cost of equity is estimated. The classic tool is the _CAPM_: start with a risk-free rate (like a Treasury yield), then add a premium for stock market risk, scaled by the company’s _beta_, how much its stock swings versus the market."},
{"t":"fig","kind":"equation","parts":["Cost of equity","=","Risk-free","+","Beta × Market premium"],"caption":"CAPM: safe return plus a reward for the company’s level of market risk."},
{"t":"p","text":"With an illustrative 4% risk-free rate, a 5% market premium and a beta of 1.4, the cost of equity is 4% + 1.4 × 5% = 11%. A steady utility with beta 0.6 would need only 7%."},
{"t":"h","text":"Blending them: WACC"},
{"t":"p","text":"The _weighted average cost of capital_ mixes both prices according to how much of each the company uses, measured at market values."},
{"t":"example","title":"Harbor Roasters’ WACC","text":"Funding: 60% equity, 40% debt.\nCost of equity: 11%.\nCost of debt: 6% before tax, 25% tax rate → 6% × 0.75 = 4.5% after tax.\nWACC = 0.60 × 11% + 0.40 × 4.5% = 6.6% + 1.8% = 8.4%.\nThe company rounds up to a 10% hurdle to leave a cushion for project risk."},
{"t":"fig","kind":"bars","data":[{"label":"Debt (pre-tax)","value":6},{"label":"Debt (after tax)","value":4.5},{"label":"WACC","value":8.4,"highlight":true},{"label":"Equity","value":11}],"unit":"%","caption":"WACC sits between cheap debt and expensive equity."},
{"t":"key","text":"WACC is the minimum return a company must earn on new projects to satisfy everyone who funded it."},
{"t":"check","q":"A project is expected to return 7.5% a year. Harbor’s WACC is 8.4%. Does it create value?","a":"No. It earns less than its money costs, so NPV at 8.4% is negative. Owners would be better off if the company skipped it or returned the cash."},
{"t":"h","text":"So why not borrow everything?"},
{"t":"p","text":"If debt is cheaper, more debt should lower WACC. Up to a point it does. But every extra dollar of debt makes the fixed payments heavier and the shares riskier, so shareholders raise their required return, and lenders start charging more too. Beyond a sweet spot, WACC rises again and bankruptcy risk becomes real."},
{"t":"fig","kind":"line","series":[{"name":"WACC","points":[10.5,9.6,8.9,8.4,8.6,9.4,10.8]}],"xLabels":["0%","10%","25%","40%","55%","70%","85%"],"unit":"%","caption":"Illustrative: WACC falls with some debt, then rises as risk piles up."},
{"t":"warn","text":"Using one company-wide WACC for every project is a shortcut. A risky new venture deserves a higher rate than replacing an old machine."},
{"t":"tip","text":"Find a public company you know and look up its beta on a finance website. Plug it into CAPM with a 4% risk-free rate and 5% premium to estimate its cost of equity."}
],
"takeaways":["Debt is cheaper than equity: lenders are paid first and interest is tax-deductible.","Cost of equity is estimated with CAPM: risk-free rate plus beta times the market premium.","WACC blends both and is the hurdle every new project must beat to create value."],
"quiz":[
{"q":"A company borrows at 8% and pays a 25% tax rate. What is its after-tax cost of debt?","options":["8%","2%","6%","10%"],"answer":2,"why":"8% × (1 − 0.25) = 6%, because interest is tax-deductible."},
{"q":"A firm is 50% debt at 4% after tax and 50% equity at 12%. What is its WACC?","options":["8%","16%","6%","10%"],"answer":0,"why":"0.5 × 4% + 0.5 × 12% = 2% + 6% = 8%."},
{"q":"Why does equity cost more than debt?","options":["Shareholders pay more taxes","Shareholders are paid last and have no promised return","Equity is always more expensive to issue","Banks set the price of equity"],"answer":1,"why":"Shareholders carry more risk because they are last in line, so they require a higher expected return."}
]
},
{
"id":"fin-3-03","subject":"finance","level":3,"order":13,"type":"short","minutes":5,
"title":"Financial ratios that tell a story",
"hook":"A jeweler and a supermarket both earn a 20% ROE. They get there in completely opposite ways.",
"tags":["financial ratios","roe","dupont","liquidity","leverage","profit margin","asset turnover"],
"blocks":[
{"t":"p","text":"A client sends you financial statements full of numbers: revenue, inventory, debt, equity. Raw numbers don’t talk; $100,000 of profit is huge for a bakery and tiny for an airline. Ratios turn those numbers into a story you can compare across years and companies."},
{"t":"h","text":"Four questions, four families"},
{"t":"fig","kind":"table","head":["Question","Ratio","Formula"],"rows":[["Can it pay bills?","Current ratio","Current assets ÷ current liab."],["Can it pay bills?","Quick ratio","(CA − inventory) ÷ CL"],["Too much debt?","Debt-to-equity","Total debt ÷ equity"],["Too much debt?","Interest coverage","EBIT ÷ interest"],["Is it profitable?","Net margin","Net income ÷ revenue"],["Is it profitable?","ROE","Net income ÷ equity"],["Is it efficient?","Asset turnover","Revenue ÷ total assets"],["Is it efficient?","Days sales outst.","Receivables ÷ revenue × 365"]],"caption":"Liquidity, leverage, profitability, efficiency: the four chapters of the story."},
{"t":"example","title":"Bella Pasta Co., one year (in $ thousands)","text":"Current assets 600 (inventory 200), current liabilities 400.\nCurrent ratio: 600 ÷ 400 = 1.5. Quick ratio: (600 − 200) ÷ 400 = 1.0.\nTotal debt 500, equity 500: debt-to-equity 1.0.\nEBIT 163, interest 30: coverage ≈ 5.4×.\nRevenue 2,000, net income 100: net margin 5%.\nTotal assets 1,250: asset turnover 1.6. ROE: 100 ÷ 500 = 20%."},
{"t":"p","text":"Where do these numbers live? Current assets, debt and equity sit on the balance sheet, a snapshot on one date. Revenue, EBIT, interest and net income come from the income statement, which covers a whole year. Ratios that mix the two, like ROE or asset turnover, often use the average balance of the year for more accuracy, but year-end figures are fine for a first look."},
{"t":"p","text":"Read it as a story: Bella can cover its short-term bills, its debt is moderate and well covered by profits, margins are thin like most food businesses, and it uses its assets busily. A 20% ROE looks excellent. But where does it come from?"},
{"t":"h","text":"DuPont: opening up ROE"},
{"t":"p","text":"In the 1920s the DuPont company split return on equity into three drivers. Multiply them and the middle terms cancel, leaving net income ÷ equity."},
{"t":"fig","kind":"equation","parts":["ROE","=","Net margin","×","Asset turnover","×","Leverage"],"caption":"Leverage here means total assets ÷ equity, also called the equity multiplier."},
{"t":"term","word":"Equity multiplier","def":"Total assets ÷ equity. A value of 2.5 means every $1 of owners’ money supports $2.50 of assets; the rest is funded by liabilities."},
{"t":"p","text":"Bella: 5% margin × 1.6 turnover × 2.5 leverage (1,250 ÷ 500) = 20%. Now compare three companies with the same ROE."},
{"t":"fig","kind":"table","head":["Company","Margin","Turnover","Leverage"],"rows":[["Jeweler","20%","0.5×","2.0×"],["Supermarket","2.5%","4.0×","2.0×"],["Leveraged retailer","5%","1.0×","4.0×"]],"caption":"Each multiplies to a 20% ROE through a completely different engine."},
{"t":"list","items":["**The jeweler** earns fat margins on slow-moving, expensive stock.","**The supermarket** earns pennies per sale but turns its shelves over and over.","**The leveraged retailer** reaches 20% mostly by borrowing, which is the riskiest path: a bad year hits owners hard."],"ordered":false},
{"t":"key","text":"Never stop at ROE: DuPont shows whether returns come from margins, efficiency, or borrowed money."},
{"t":"check","q":"A company’s ROE rose from 12% to 18%, but margin and turnover are unchanged. What happened?","a":"Leverage rose by half, from 1.5× to 2.25× for example. The company is using more debt, so the higher return also carries more risk."},
{"t":"warn","text":"A ratio alone means little. Compare it with the same company’s past years and with direct competitors; a current ratio of 1.0 is weak for a manufacturer but normal for a restaurant that collects cash daily."},
{"t":"tip","text":"Take one client or company report you know and compute its DuPont trio for two years. Write one sentence on which driver changed the most and why."}
],
"takeaways":["Ratios answer four questions: liquidity, leverage, profitability and efficiency.","DuPont: ROE = net margin × asset turnover × equity multiplier.","The same ROE can hide very different risks; always check which driver is doing the work."],
"quiz":[
{"q":"A company has current assets of $900k, inventory of $300k and current liabilities of $600k. What is its quick ratio?","options":["1.5","0.5","2.0","1.0"],"answer":3,"why":"Quick ratio = (900 − 300) ÷ 600 = 1.0. The current ratio would be 1.5."},
{"q":"Net margin 8%, asset turnover 1.25, equity multiplier 2.0. What is ROE?","options":["20%","11.25%","10%","16%"],"answer":0,"why":"8% × 1.25 × 2.0 = 20%."},
{"q":"Which ROE driver signals the most financial risk when it rises sharply?","options":["Net margin","Equity multiplier","Asset turnover","Gross margin"],"answer":1,"why":"A higher equity multiplier means more assets funded by liabilities, so owners face bigger swings and default risk."}
]
}
]});
