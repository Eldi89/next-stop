LEARN.add({"subject":"finance","lessons":[
{
"id":"fin-2-01","subject":"finance","level":2,"order":7,"type":"short","minutes":5,
"title":"Time value of money",
"hook":"$900,000 today or $1.2 million in four years? The answer is a formula you can do on the train.",
"tags":["time value of money","present value","future value","discounting","interest rates","lottery"],
"blocks":[
{"t":"p","text":"A headline on your phone: a lottery winner can take $900,000 today or $1.2 million in four years. Most people grab the bigger number. Others grab the cash “because a bird in the hand”. Both are guessing. Finance has a tool that turns this into a calm, two-line calculation."},
{"t":"h","text":"A dollar today beats a dollar tomorrow"},
{"t":"p","text":"Money you hold today can be invested, so it can grow. Money promised later can’t start working yet, and the promise might not be kept. That is the _time value of money_: the same amount is worth more the sooner you receive it."},
{"t":"list","items":["**Opportunity:** today’s dollar can earn interest or returns starting now.","**Inflation:** prices tend to rise, so a future dollar usually buys less.","**Risk:** a future payment might be late, smaller, or never arrive."],"ordered":false},
{"t":"h","text":"Future value: pushing money forward"},
{"t":"p","text":"You already met this idea with compound interest. Future value asks: if I invest an amount today at a given rate, how much will I have later?"},
{"t":"fig","kind":"equation","parts":["FV","=","PV","×","(1 + r)ⁿ"],"caption":"Future value: today’s amount grown at rate r for n years."},
{"t":"example","title":"Grow $1,000 for 5 years at 5%","text":"FV = $1,000 × 1.05⁵\n1.05⁵ ≈ 1.2763\nFV ≈ $1,276.28\nYour $1,000 today is equivalent to about $1,276 five years from now, if 5% is what you could reliably earn."},
{"t":"h","text":"Present value: pulling money back"},
{"t":"p","text":"Present value runs the film backwards. It asks: what is a future amount worth in today’s dollars? You divide instead of multiply. This is called _discounting_, and the rate you use is the _discount rate_: the return you could earn elsewhere with similar risk."},
{"t":"fig","kind":"equation","parts":["PV","=","FV","÷","(1 + r)ⁿ"],"caption":"Present value: a future amount shrunk back to today."},
{"t":"term","word":"Discount rate","def":"The yearly return you give up by waiting. Higher risk or better alternatives mean a higher discount rate and a lower present value."},
{"t":"key","text":"To compare money at different dates, bring every amount to the same date, usually today, using a discount rate."},
{"t":"example","title":"The lottery choice at 6%","text":"Option A: $900,000 today. Its PV is simply $900,000.\nOption B: $1,200,000 in 4 years.\nPV = $1,200,000 ÷ 1.06⁴ = $1,200,000 ÷ 1.2625 ≈ $950,512.\nAt 6%, waiting is worth about $50,500 more in today’s money.\nIf the winner could safely earn 9% instead, PV ≈ $850,110 and the cash today wins.\n(Taxes ignored to keep it simple.)"},
{"t":"p","text":"Notice how the answer flips with the rate. There is no universal “right” choice, only the right choice **for your discount rate**. That is the whole point: the formula forces you to state your alternative."},
{"t":"fig","kind":"line","series":[{"name":"PV of $10,000","points":[10000,7473,5584,4173,3118,2330,1741]}],"xLabels":["Now","5y","10y","15y","20y","25y","30y"],"unit":"$","caption":"At a 6% discount rate, $10,000 received in 30 years is worth only about $1,741 today."},
{"t":"p","text":"The curve explains a lot of real life. Pension promises, lawsuit settlements paid over time, and the value of a company are all streams of future cash pulled back to today. Far-away dollars count for little, which is why distant promises look big but are worth less than they seem."},
{"t":"check","q":"You need $40,000 for a master’s degree in 6 years. If your savings earn 5% a year, how much do you need to set aside today?","a":"PV = $40,000 ÷ 1.05⁶ = $40,000 ÷ 1.3401 ≈ $29,849. Investing that today grows to $40,000 by the deadline."},
{"t":"warn","text":"Never add or compare dollars from different years as if they were equal. “$1,000 a year for 10 years = $10,000” is true in cash, but the present value is much lower."},
{"t":"tip","text":"Next time a store offers “pay $1,200 now or $105 a month for 12 months”, find the extra cost: 12 × $105 = $1,260, so financing costs $60. Then ask what return you could earn on $1,200 for a year."}
],
"takeaways":["A dollar today is worth more than a dollar later: opportunity, inflation and risk.","Future value multiplies by (1 + r)ⁿ; present value divides by it.","The discount rate is your best alternative return; changing it can flip a decision."],
"quiz":[
{"q":"What is the present value of $5,000 received in 2 years at a 10% discount rate?","options":["$4,000","$4,545","$4,132","$6,050"],"answer":2,"why":"$5,000 ÷ 1.10² = $5,000 ÷ 1.21 ≈ $4,132."},
{"q":"If the discount rate rises, what happens to the present value of a future payment?","options":["It falls","It rises","It stays the same","It becomes negative"],"answer":0,"why":"A higher rate means you divide by a bigger number, so the future payment is worth less today."},
{"q":"Which reason does NOT explain the time value of money?","options":["Money today can be invested","Inflation reduces future buying power","Future payments carry risk","Banks print more money each Monday"],"answer":3,"why":"Opportunity, inflation and risk are the three reasons. The last option is invented."}
]
},
{
"id":"fin-2-02","subject":"finance","level":2,"order":8,"type":"short","minutes":5,
"title":"Inflation and real returns",
"hook":"Your savings account paid 1%. Prices rose 3%. Congratulations, you lost money politely.",
"tags":["inflation","real return","nominal return","cpi","purchasing power","interest rates","borrowers"],
"blocks":[
{"t":"p","text":"The news says “CPI up 3.2% from a year ago”. On the same day your bank emails that your savings earned 1%. Your balance went up, so it feels like a win. Measured in what money can actually buy, it was a loss. Today you learn to see through the number to what it buys."},
{"t":"h","text":"Nominal vs real"},
{"t":"p","text":"A _nominal_ return is the number on your statement. A _real_ return is that number after inflation, so it measures growth in buying power. Only the real return tells you if you are getting richer."},
{"t":"fig","kind":"equation","parts":["Real return","≈","Nominal return","−","Inflation"],"caption":"A quick shortcut that works well when rates are low."},
{"t":"example","title":"Three accounts, 3% inflation","text":"Savings at 1%: real ≈ 1% − 3% = −2%.\nA bond at 4.5%: real ≈ 1.5%.\nStocks averaging 7%: real ≈ 4%.\nThe exact formula is (1 + nominal) ÷ (1 + inflation) − 1. For stocks: 1.07 ÷ 1.03 − 1 ≈ 3.88%, very close to the shortcut."},
{"t":"p","text":"Over decades, that gap is huge. $10,000 growing at 7% becomes about $76,000 in 30 years. But in today’s buying power, at 3% inflation, it is worth about $31,000. Still a great result, just a more honest one."},
{"t":"fig","kind":"line","series":[{"name":"Nominal (7%)","points":[10000,14026,19672,27590,38697,54274,76123]},{"name":"Real (after 3% inflation)","points":[10000,12099,14637,17709,21426,25922,31361]}],"xLabels":["0","5","10","15","20","25","30"],"unit":"$","caption":"$10,000 over 30 years: what the statement shows vs what it can buy."},
{"t":"key","text":"Always judge a return after inflation: real growth in buying power is the only growth that matters."},
{"t":"h","text":"How inflation is measured: CPI"},
{"t":"p","text":"The US Bureau of Labor Statistics tracks the _Consumer Price Index_, the price of a typical basket of goods and services bought by urban households. Each month it reprices the basket and reports the change. Housing is the biggest piece, which is why rent hikes push CPI so strongly."},
{"t":"fig","kind":"donut","data":[{"label":"Housing","value":36},{"label":"Transport","value":15},{"label":"Food","value":14},{"label":"Medical","value":8},{"label":"Everything else","value":27}],"center":"CPI basket","caption":"Rough, illustrative weights of the CPI basket; the BLS updates them regularly."},
{"t":"p","text":"Your personal inflation can differ. If you rent in Manhattan and rarely drive, a rent jump hits you harder than a spike in gas prices. _Core CPI_ removes food and energy, which swing wildly, to show the underlying trend. In the eurozone the equivalent measure is the HICP, which the ECB also targets at 2%."},
{"t":"h","text":"Who wins and who loses"},
{"t":"p","text":"Unexpected inflation moves wealth from lenders to borrowers. A borrower repays with dollars that are worth less than the ones borrowed. A saver holding cash watches value leak away."},
{"t":"fig","kind":"compare","left":{"title":"Savers lose","icon":"🐷","items":["Cash buys less each year","Low-rate deposits go negative real","Fixed pensions shrink in value"]},"right":{"title":"Borrowers gain","icon":"🏠","items":["Fixed payments feel lighter","Salaries rise, debt stays","Debt shrinks in real terms"]},"caption":"Surprise inflation quietly shifts value from lenders to borrowers."},
{"t":"example","title":"The fixed mortgage effect","text":"Carla pays $2,000 a month on a 30-year fixed mortgage, about 33% of her $6,000 monthly take-home pay.\nIf prices and wages rise 3% a year, her pay is about $8,064 ten years later (6,000 × 1.03¹⁰).\nHer payment is still $2,000, now only about 25% of her pay. The bank lent her dollars worth more than the dollars it gets back."},
{"t":"check","q":"A CD pays 5% while inflation runs 6%. What is the approximate real return?","a":"About −1%. You earn 5% in dollars, but buying power falls by roughly 1% a year."},
{"t":"warn","text":"Variable-rate borrowers don’t get the same gift: when inflation rises, central banks raise rates, and variable loan payments rise with them."},
{"t":"tip","text":"Find your savings rate and this year’s CPI change in the news. Subtract. If the result is negative, your “safe” money is losing buying power and may deserve a better home."}
],
"takeaways":["Real return ≈ nominal return minus inflation; it measures change in buying power.","CPI tracks a basket of goods; housing is its biggest piece, and personal inflation varies.","Surprise inflation hurts savers and lenders and helps fixed-rate borrowers."],
"quiz":[
{"q":"An investment returns 8% in a year with 3% inflation. What is the approximate real return?","options":["11%","5%","8%","2.7%"],"answer":1,"why":"Real ≈ nominal − inflation = 8% − 3% = 5%. The exact figure is 1.08 ÷ 1.03 − 1 ≈ 4.85%."},
{"q":"Who generally benefits from unexpected inflation?","options":["A retiree on a fixed pension","A saver holding cash","A homeowner with a fixed-rate mortgage","A bank that lent at a fixed rate"],"answer":2,"why":"The fixed-rate borrower repays with cheaper future dollars while wages tend to rise."},
{"q":"What is core CPI?","options":["CPI excluding food and energy","CPI for New York only","CPI including stock prices","CPI before taxes"],"answer":0,"why":"Core CPI strips out volatile food and energy prices to reveal the underlying trend."}
]
},
{
"id":"fin-2-03","subject":"finance","level":2,"order":9,"type":"short","minutes":5,
"title":"How lending and credit scores work",
"hook":"Two people buy the same $400,000 condo. One pays $77,000 more over the loan. The difference is three digits.",
"tags":["credit score","fico","credit utilization","mortgage","fixed rate","variable rate","lending"],
"blocks":[
{"t":"p","text":"You apply for an apartment and the landlord runs a credit check. You apply for a mortgage and the bank does the same. A three-digit number, built quietly from years of small habits, decides not just yes or no, but how much your money costs."},
{"t":"h","text":"How a bank prices risk"},
{"t":"p","text":"A lender is buying a promise: “I will pay you back, with interest”. To price it, the bank starts from its own cost of money and adds a premium for the chance you won’t pay. The riskier you look, the bigger the premium."},
{"t":"fig","kind":"flow","steps":[{"label":"Base rate","icon":"🏦","note":"Bank’s cost of funds"},{"label":"+ Risk premium","icon":"⚖️","note":"Your score, debts, down payment"},{"label":"+ Margin","icon":"📈","note":"Bank’s profit"},{"label":"Your rate","icon":"🧾","note":"What you pay"}],"caption":"Your loan rate is built in layers; your credit profile controls the middle one."},
{"t":"h","text":"What goes into a FICO score"},
{"t":"p","text":"In the US, most lenders use a FICO score from 300 to 850, built from your credit reports at Equifax, Experian and TransUnion. FICO publishes the general weights of what matters."},
{"t":"fig","kind":"donut","data":[{"label":"Payment history","value":35},{"label":"Amounts owed","value":30},{"label":"History length","value":15},{"label":"New credit","value":10},{"label":"Credit mix","value":10}],"center":"FICO","caption":"Paying on time and keeping balances low drive two thirds of the score."},
{"t":"list","items":["**Payment history (35%):** one payment 30+ days late can hurt for years. On-time is everything.","**Amounts owed (30%):** mainly _utilization_, the share of your card limits you are using.","**Length of history (15%):** older accounts help, so think twice before closing your first card.","**New credit (10%):** many applications in a short time look risky.","**Credit mix (10%):** a blend of cards and installment loans helps a little."],"ordered":false},
{"t":"term","word":"Credit utilization","def":"Card balances divided by total card limits. $1,500 owed on $10,000 of limits = 15%. Below 30% is good; under 10% is excellent."},
{"t":"check","q":"Marta has two cards: $2,000 limit with $1,200 owed, and $8,000 limit with $0 owed. What is her overall utilization, and what happens if she closes the empty card?","a":"Now: $1,200 ÷ $10,000 = 12%. If she closes the $8,000 card: $1,200 ÷ $2,000 = 60%, and her score would likely drop."},
{"t":"h","text":"Fixed vs variable rates"},
{"t":"fig","kind":"compare","left":{"title":"Fixed rate","icon":"🔒","items":["Same rate for the whole loan","Predictable payment","Usually starts a bit higher"]},"right":{"title":"Variable rate","icon":"🎢","items":["Moves with a market index","Often starts lower","Payment can jump later"]},"caption":"Fixed buys certainty; variable bets that rates won’t rise much."},
{"t":"p","text":"In the US, the 30-year fixed mortgage is the classic choice. An _adjustable-rate mortgage_ (ARM) is fixed for a few years, then resets with the market. On a $320,000 loan, going from 5% to 7% lifts the payment from about $1,718 to about $2,129 a month. In Italy and much of Europe, variable-rate mortgages have been far more common, so rate changes reach households faster."},
{"t":"h","text":"Mortgage basics"},
{"t":"p","text":"A mortgage is a loan secured by the home: if you stop paying, the bank can take the house. Lenders look at your score, your _debt-to-income ratio_ (monthly debt payments ÷ gross monthly income, often kept under about 36% to 43%) and your down payment. Below 20% down, you usually pay private mortgage insurance (PMI)."},
{"t":"example","title":"What 1% costs on a $400,000 condo","text":"Price $400,000, 20% down ($80,000), loan $320,000, 30-year fixed.\nStrong score, rate 6.5%: payment ≈ $2,023 a month.\nWeaker score, rate 7.5%: payment ≈ $2,237 a month.\nDifference: ≈ $215 a month × 360 months ≈ $77,350 over the life of the loan.\n(Rates are illustrative; check today’s market.)"},
{"t":"key","text":"Your credit score sets the price of borrowing: on-time payments and low utilization can save you tens of thousands."},
{"t":"warn","text":"Checking your own score is a “soft” inquiry and never hurts it. Shopping several mortgage lenders within a short window is usually treated as a single inquiry, so compare offers freely."},
{"t":"tip","text":"Set every card to autopay at least the minimum today, so a forgotten bill can never become a late payment. Then pull your free credit reports and check for errors."}
],
"takeaways":["Lenders price your loan as base rate plus a risk premium driven by your credit profile.","Payment history (35%) and utilization (30%) are the biggest FICO factors.","Fixed rates buy certainty; a 1% better mortgage rate can save tens of thousands."],
"quiz":[
{"q":"Which factor carries the most weight in a FICO score?","options":["Credit mix","Payment history","New credit","Income"],"answer":1,"why":"Payment history is about 35% of the score. Income is not part of the FICO score at all."},
{"q":"Leo owes $3,000 across cards with $12,000 of total limits. What is his utilization?","options":["25%","40%","4%","30%"],"answer":0,"why":"$3,000 ÷ $12,000 = 25%."},
{"q":"What is the main risk of a variable-rate loan?","options":["The payment never changes","It cannot be refinanced","The payment can rise if market rates rise","It always costs more than fixed"],"answer":2,"why":"Variable rates follow a market index, so payments go up when rates go up."}
]
},
{
"id":"fin-2-04","subject":"finance","level":2,"order":10,"type":"short","minutes":5,
"title":"Taxes for individuals",
"hook":"“Don’t take the raise, it pushes you into a higher bracket.” It’s a myth, and the math shows why in 60 seconds.",
"tags":["taxes","tax brackets","marginal rate","effective rate","deductions","tax credits","401k","irs"],
"blocks":[
{"t":"p","text":"A colleague whispers that a raise could “push you into a higher bracket” and leave you with less. It sounds plausible and it is wrong. Once you see how the US income tax is built, you will never fear a raise again, and you will understand where your deductions really help."},
{"t":"h","text":"Brackets are buckets, not a cliff"},
{"t":"p","text":"US federal income tax is _progressive_: income is poured into buckets, and each bucket has its own rate. Only the dollars inside a bucket pay that bucket’s rate. The numbers below are invented to keep the math clean; real brackets change every year, so check the IRS tables."},
{"t":"example","title":"Alex’s $60,000 taxable income (illustrative brackets)","text":"First $10,000 at 10% = $1,000\nNext $30,000 (10,001 to 40,000) at 20% = $6,000\nLast $20,000 (above 40,000) at 30% = $6,000\nTotal tax: $13,000\nMarginal rate (on the last dollar): 30%\nEffective rate: $13,000 ÷ $60,000 ≈ 21.7%"},
{"t":"fig","kind":"stack","columns":[{"title":"Alex’s $60,000","blocks":[{"label":"10% bucket: $10k","value":10000},{"label":"20% bucket: $30k","value":30000},{"label":"30% bucket: $20k","value":20000}]}],"unit":"$","caption":"Each slice of income is taxed at its own bucket’s rate."},
{"t":"term","word":"Marginal vs effective rate","def":"Marginal: the rate on your next dollar of income. Effective: total tax divided by income, your real average rate."},
{"t":"check","q":"Alex gets a $1,000 raise in this system. How much extra tax does he pay?","a":"$300. Only the new $1,000 lands in the 30% bucket. He keeps $700, so a raise always leaves you better off under these brackets."},
{"t":"key","text":"Your marginal rate applies only to the next dollar; your effective rate is what you really pay on average."},
{"t":"h","text":"Deductions vs credits"},
{"t":"p","text":"Both lower your tax, but in very different ways. A _deduction_ reduces the income that gets taxed. A _credit_ reduces the tax itself, dollar for dollar. Most people take the standard deduction, a fixed amount set each year; others itemize (mortgage interest, state and local taxes, charity) if that total is bigger."},
{"t":"fig","kind":"compare","left":{"title":"$1,000 deduction","icon":"✂️","items":["Cuts taxable income","Saves $1,000 × marginal rate","At 30%: saves $300"]},"right":{"title":"$1,000 credit","icon":"🎟️","items":["Cuts the tax bill directly","Saves the full $1,000","Same value in any bracket"]},"caption":"Dollar for dollar, a credit is worth more than a deduction."},
{"t":"h","text":"Pre-tax vs post-tax money"},
{"t":"p","text":"Where you save changes when you pay tax. A traditional 401(k) or IRA uses _pre-tax_ money: you skip tax today and pay it on withdrawal. A Roth account uses _post-tax_ money: you pay tax now, and qualified withdrawals later are tax-free."},
{"t":"example","title":"Saving $500 a month in a 30% bracket","text":"Traditional 401(k): $500 goes in, but your take-home falls only about $350, because $150 of tax is not withheld today. You pay tax on withdrawals in retirement.\nRoth 401(k): $500 goes in from after-tax pay, so take-home falls the full $500. Growth and qualified withdrawals are tax-free later.\nRule of thumb: traditional tends to win if you expect a lower rate in retirement; Roth if you expect a higher one."},
{"t":"p","text":"Contribution limits change every year, so check this year’s numbers. In Italy, IRPEF is also progressive with brackets, and contributions to a _fondo pensione_ are deductible up to a cap, a similar pre-tax idea."},
{"t":"warn","text":"Don’t confuse a big refund with a good tax result. A refund is your own money returned without interest; it often just means too much was withheld."},
{"t":"tip","text":"Open your last tax return and divide total tax by total income. That is your effective rate. Compare it with your marginal bracket and notice how much lower it is."}
],
"takeaways":["Brackets are buckets: a raise is taxed only at the rate of the bucket it lands in.","A deduction saves its amount times your marginal rate; a credit saves its full amount.","Traditional accounts defer tax to later; Roth accounts pay it now for tax-free withdrawals."],
"quiz":[
{"q":"With the lesson’s illustrative brackets, what is the tax on $40,000 of taxable income?","options":["$8,000","$12,000","$7,000","$4,000"],"answer":2,"why":"$10,000 at 10% = $1,000, plus $30,000 at 20% = $6,000. Total $7,000."},
{"q":"In a 24% bracket, how much does a $2,000 deduction save?","options":["$480","$2,000","$240","$1,520"],"answer":0,"why":"A deduction saves its amount times the marginal rate: $2,000 × 24% = $480."},
{"q":"What is true of a Roth account?","options":["Contributions reduce this year’s taxable income","You pay tax now; qualified withdrawals are tax-free","Withdrawals are taxed at the marginal rate","It has no contribution limit"],"answer":1,"why":"Roth money goes in after tax, and qualified withdrawals, including growth, come out tax-free."}
]
}
]});
