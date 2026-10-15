LEARN.add({"subject":"investing","lessons":[
{
"id":"inv-2-01","subject":"investing","level":2,"order":7,"type":"short","minutes":5,
"title":"Bonds: the price and yield seesaw",
"hook":"Rates go up and bond funds go down. Once you see the seesaw, that headline makes perfect sense.",
"tags":["bonds","yield","interest rates","duration","treasuries","credit risk","corporate bonds"],
"blocks":[
{"t":"p","text":"The headline on your phone says: \"Rates jump, bond funds fall.\" It sounds strange. Higher rates should be good for lenders, right? They are, for new lenders. For anyone already holding an old bond, higher rates make that bond less attractive. Let us see why."},
{"t":"h","text":"How a bond works"},
{"t":"p","text":"A bond is a loan with fixed rules. You pay, say, $1,000. The borrower pays you a fixed **coupon** every year, say $40 (that is 4%). At the end, the **maturity** date, you get your $1,000 back."},
{"t":"fig","kind":"timeline","events":[{"when":"Day 1","label":"You lend $1,000"},{"when":"Years 1 to 9","label":"Receive $40 a year"},{"when":"Year 10","label":"Get $40 + $1,000 back"}],"caption":"A 10-year bond paying a 4% coupon."},
{"t":"term","word":"Yield","def":"The yearly return you earn if you buy a bond at today's price and hold it to maturity. When the price falls, the yield rises."},
{"t":"h","text":"The seesaw"},
{"t":"p","text":"Bonds trade every day. Suppose you own that 4% bond, and next month new 10-year bonds pay 5%. Nobody will pay you full price for a bond paying only $40 when a new one pays $50. To sell, you must cut your price until the buyer earns about 5% too."},
{"t":"example","title":"Rates rise from 4% to 5%","text":"Your bond: $1,000 face value, $40 a year, 10 years left.\nNew bonds pay 5%.\nA buyer will pay about $923 for yours. At that price, the $40 coupons plus the $77 gain at maturity give the buyer roughly 5% a year.\n\nIf rates instead fall to 3%, your bond becomes the attractive one, and it sells for about $1,085."},
{"t":"fig","kind":"bars","data":[{"label":"Rates fall to 3%","value":1085},{"label":"Rates stay 4%","value":1000,"highlight":true},{"label":"Rates rise to 5%","value":923}],"unit":"$","caption":"Same bond, three rate scenarios: price moves opposite to rates."},
{"t":"key","text":"Bond prices and interest rates move in opposite directions, like two ends of a seesaw."},
{"t":"check","q":"You plan to hold your bond to maturity. Does the price drop really cost you money?","a":"Not if the borrower pays. You still collect every $40 coupon and your $1,000 at the end. The drop only becomes real if you sell early. The cost is opportunity: new bonds pay more than yours."},
{"t":"h","text":"Duration: how hard the seesaw swings"},
{"t":"p","text":"**Duration** measures how sensitive a bond is to rate changes, expressed in years. A simple rule: for every 1% change in rates, the price moves about duration × 1% the other way. Longer bonds have longer duration, so they swing more."},
{"t":"fig","kind":"table","head":["Bond","Duration","If rates +1%"],"rows":[["2-year","~1.9","about −2%"],["10-year","~8.1","about −8%"],["30-year","~17","about −17%"]],"caption":"Illustrative 4% bonds: longer maturity means bigger price swings."},
{"t":"h","text":"Credit risk: will they pay you back?"},
{"t":"p","text":"The second big risk is that the borrower cannot pay. **US Treasuries** are backed by the federal government and treated as the safest benchmark. **Corporate bonds** pay more because companies can fail. Agencies like S&P and Moody's give ratings: BBB and above is investment grade; below that is high yield, often called junk."},
{"t":"fig","kind":"spectrum","left":"Safest, lower yield","right":"Riskier, higher yield","items":[{"label":"Treasuries","pos":8},{"label":"AAA corporate","pos":25},{"label":"BBB corporate","pos":50},{"label":"High yield","pos":80},{"label":"Distressed","pos":96}],"caption":"Extra yield is the reward for lending to shakier borrowers."},
{"t":"p","text":"In a crisis, high-yield bonds often fall alongside stocks, while Treasuries tend to hold up or rise. If you want bonds as the defense of your portfolio, quality matters more than a slightly higher yield."},
{"t":"warn","text":"Do not reach for yield blindly. A bond fund paying far more than Treasuries is telling you it carries more credit risk, more duration, or both."},
{"t":"tip","text":"Look up the average duration of any bond fund you own; it is listed on the fund's page. Multiply it by 1% to see roughly how much it could fall if rates rose by one point."}
],
"takeaways":["When interest rates rise, existing bond prices fall, and vice versa.","Duration tells you the size of the swing: about duration × rate change.","Treasuries are the safest; corporates and high yield pay more for more credit risk."],
"quiz":[
{"q":"You own a bond paying 3%. New bonds now pay 6%. What happens to your bond's market price?","options":["It rises","It falls","It stays exactly the same","It doubles"],"answer":1,"why":"Buyers prefer the new 6% bonds, so your 3% bond must sell at a lower price to compete."},
{"q":"A bond fund has a duration of 6. Rates rise by 1%. Roughly how does the fund's price change?","options":["Up about 6%","Down about 1%","No change","Down about 6%"],"answer":3,"why":"Price change is about duration × rate change, in the opposite direction: 6 × 1% = about −6%."},
{"q":"Why do corporate bonds usually pay a higher yield than Treasuries of the same maturity?","options":["Investors demand extra pay for the risk the company cannot repay","Companies are more generous","Treasuries are taxed more","Corporate bonds have no maturity"],"answer":0,"why":"The extra yield, called a credit spread, compensates lenders for default risk."}
]
},
{
"id":"inv-2-02","subject":"investing","level":2,"order":8,"type":"short","minutes":5,
"title":"Asset allocation and rebalancing",
"hook":"The stock and bond mix you choose drives most of your ride. Rebalancing keeps that mix honest.",
"tags":["asset allocation","rebalancing","stock bond mix","target date fund","glide path","portfolio"],
"blocks":[
{"t":"p","text":"Two neighbors on the same train both own index funds. In a crash, one loses 35% and panics. The other loses 18% and shrugs. They did not pick different stocks. They picked a different **mix** of stocks and bonds. That mix, your asset allocation, shapes your experience more than any single fund choice."},
{"t":"term","word":"Asset allocation","def":"How your money is divided among asset classes, such as 60% stocks and 40% bonds."},
{"t":"h","text":"The dial between growth and calm"},
{"t":"p","text":"Think of allocation as a dial. Turn it toward stocks and you get more long-run growth with deeper drops. Turn it toward bonds and the ride gets calmer, but slower. There is no perfect setting, only the right one for your horizon and your nerves."},
{"t":"fig","kind":"table","head":["Mix stocks/bonds","Avg return*","Worst year*"],"rows":[["100 / 0","~10%","about −43%"],["80 / 20","~9.5%","about −35%"],["60 / 40","~9%","about −27%"],["40 / 60","~8%","about −18%"],["20 / 80","~7%","about −10%"]],"caption":"*Rounded US history, roughly 1926 onward; for intuition only, not a forecast."},
{"t":"check","q":"Looking at the table, what do you give up by moving from 100% stocks to 60/40?","a":"About 1 to 1.5 points of average yearly return. What you gain is a worst year roughly 16 points less painful. For many people that trade makes it far easier to stay invested."},
{"t":"h","text":"Glide paths: changing the mix with age"},
{"t":"p","text":"When you are 30, retirement is decades away, so you can afford more stocks. As the date gets close, a big crash would hurt more, so many people shift toward bonds. This gradual shift is called a **glide path**. **Target-date funds** do it automatically: you pick the fund with your retirement year and it slowly turns the dial for you."},
{"t":"fig","kind":"line","series":[{"name":"Stocks %","points":[90,90,88,82,72,60,50,45]},{"name":"Bonds and cash %","points":[10,10,12,18,28,40,50,55]}],"xLabels":["25","30","35","40","45","50","55","65"],"unit":"%","caption":"An illustrative glide path: stocks shrink slowly as retirement nears."},
{"t":"h","text":"Why rebalance"},
{"t":"p","text":"Markets move your mix without asking. After a strong year for stocks, a 60/40 portfolio might drift to 70/30, quietly making you riskier. After a crash it might fall to 50/50. **Rebalancing** means selling some of what grew and buying what shrank, to get back to your target."},
{"t":"example","title":"Rebalancing after a crash","text":"Start: $100,000 at 60/40. Stocks $60,000, bonds $40,000.\nStocks fall 30%: $60,000 → $42,000.\nBonds rise 5%: $40,000 → $42,000.\nTotal $84,000, now 50/50.\n\nTarget 60% of $84,000 = $50,400 in stocks.\nSo you move $8,400 from bonds into stocks.\nYou are buying stocks while they are cheap, by rule, not by feeling."},
{"t":"fig","kind":"donut","data":[{"label":"Stocks","value":50},{"label":"Bonds","value":50}],"center":"After crash","caption":"Drifted to 50/50; rebalancing brings it back to 60/40."},
{"t":"key","text":"Pick a stock and bond mix you can hold through a crash, then rebalance by rule so the market cannot quietly change it for you."},
{"t":"h","text":"How often? Use bands"},
{"t":"list","items":["**Calendar:** check once or twice a year and fix any drift.","**Bands:** act only when a class drifts more than, say, 5 points from target (60% becomes 55% or 65%).","**With new money:** direct fresh contributions to whatever is underweight, so you sell less.","**Mind taxes:** rebalance inside retirement accounts first, where selling is not taxed."],"ordered":false},
{"t":"p","text":"Rebalancing feels uncomfortable, because it always asks you to buy the thing that just did badly. That discomfort is the point. It is a simple, emotion-free way to buy low and sell high."},
{"t":"warn","text":"Do not rebalance every week. Too much trading adds costs and taxes for very little benefit. Once or twice a year, or when a band is hit, is plenty."},
{"t":"tip","text":"Write your target mix on one line, for example \"70% stocks, 30% bonds, rebalance at ±5\". Then compare it to your actual accounts today."}
],
"takeaways":["Your stock and bond mix drives most of your returns and your worst drops.","Glide paths and target-date funds reduce stock exposure as the goal gets closer.","Rebalance with bands or a calendar, so you buy low and sell high by rule."],
"quiz":[
{"q":"A 60/40 portfolio drifts to 72/28 after a strong stock rally. What does rebalancing do?","options":["Buys more stocks","Moves everything to cash","Sells some stocks and buys bonds to return to 60/40","Nothing, drift is fine"],"answer":2,"why":"Rebalancing trims what grew and adds to what shrank, restoring the target risk level."},
{"q":"What is a glide path?","options":["A type of bond","A schedule that gradually lowers stock exposure as a goal approaches","A tax rule for retirement accounts","A trading strategy for day traders"],"answer":1,"why":"A glide path slowly shifts the mix from stocks toward bonds and cash as the target date nears."},
{"q":"Your target is 70% stocks with ±5 point bands. Stocks are now 67%. What do you do?","options":["Nothing, you are inside the band","Sell stocks","Buy stocks","Switch to 100% bonds"],"answer":0,"why":"67% is within 65% to 75%, so no action is needed. Bands avoid needless trading."}
]
},
{
"id":"inv-2-03","subject":"investing","level":2,"order":9,"type":"short","minutes":5,
"title":"Costs and fees: the silent drain",
"hook":"A 1% fee sounds tiny. Over 30 years it can quietly take about a quarter of your money.",
"tags":["fees","expense ratio","advisory fee","investment costs","index funds","financial advisor"],
"blocks":[
{"t":"p","text":"Imagine a bucket of water with a tiny hole. You barely notice the drip on any given day. Leave it for 30 years and the bucket is a lot emptier. Investment fees work exactly like that hole. They are small, constant, and charged whether the market is up or down."},
{"t":"h","text":"Where fees hide"},
{"t":"list","items":["**Expense ratio:** the yearly fund fee, from under 0.05% for big index funds to 1% or more for active funds.","**Advisory fee:** what an advisor charges to manage your money, often around 1% of assets a year.","**Sales loads:** a one-time commission on some mutual funds, sometimes several percent.","**Trading costs:** commissions and the bid-ask spread when you buy and sell.","**Hidden costs:** cash drag, 401(k) plan fees, and taxes from frequent trading."],"ordered":false},
{"t":"term","word":"Basis point","def":"One hundredth of one percent. 100 basis points = 1%. A 0.05% fee is 5 basis points."},
{"t":"h","text":"The math of 1%"},
{"t":"p","text":"Fees compound just like returns do, but in reverse. Every dollar paid in fees is a dollar that will never grow again. Let us look at the same investment with and without a 1% yearly cost."},
{"t":"example","title":"$100,000 for 30 years","text":"Say the market earns 7% a year.\n\nNearly free index fund (cost close to 0%):\n$100,000 × 1.07^30 ≈ $761,000\n\nSame investments with 1% in total fees, so 6% net:\n$100,000 × 1.06^30 ≈ $574,000\n\nDifference: about $187,000, roughly a quarter of the final value, all for a fee that looked like \"just 1%\"."},
{"t":"fig","kind":"line","series":[{"name":"7% (near zero fees)","points":[100000,140255,196715,275903,386968,542743,761226]},{"name":"6% (1% fees)","points":[100000,133823,179085,239656,320714,429187,574349]}],"xLabels":["0","5","10","15","20","25","30"],"unit":"$","caption":"Illustrative: the gap is small at first, then grows every year."},
{"t":"fig","kind":"stat","items":[{"value":"~$187,000","label":"lost to 1% over 30 years"},{"value":"~25%","label":"of the final balance"}],"caption":"On a $100,000 start at an illustrative 7% return."},
{"t":"check","q":"Why does the gap between the two lines get wider each year, even though the fee stays 1%?","a":"Because the fee is charged on a growing balance, and every dollar taken also loses all the future growth it would have earned. Fees compound against you."},
{"t":"key","text":"Fees are one of the few things in investing you fully control, and a 1% difference can cost a quarter of your wealth over a career."},
{"t":"h","text":"Is an advisor worth it?"},
{"t":"p","text":"Sometimes, yes. A good advisor can help with taxes, estate planning, insurance, and above all with keeping you calm in a crash. That behavior help alone can be worth a lot. The question is what you pay for it."},
{"t":"fig","kind":"compare","left":{"title":"% of assets","icon":"📊","items":["Often ~1% a year","Grows as you grow","$5,000 a year on $500,000"]},"right":{"title":"Flat or hourly fee","icon":"🧾","items":["Fixed price per plan","Doesn't grow with assets","Often fee-only, fewer conflicts"]},"caption":"Two ways to pay for advice. Know which one you are choosing."},
{"t":"p","text":"Also notice the gap in the fee math above. Paying 1% a year for 30 years cost about $187,000. So the advice should be worth at least that much to you. For complex situations it may be; for a simple index portfolio it often is not."},
{"t":"p","text":"Look for a **fiduciary**, someone legally required to act in your best interest. Ask plainly: \"What is my total cost per year, in dollars?\" A good advisor will answer clearly."},
{"t":"warn","text":"Do not judge a fund only by its past return. Returns vary every year and rarely repeat; fees are charged every year and always repeat. Low cost is one of the most reliable predictors of better long-run results."},
{"t":"tip","text":"Add up every fee you pay: each fund's expense ratio, any advisory fee, any 401(k) plan fee. Turn the total into dollars per year. Seeing the dollar number changes decisions."}
],
"takeaways":["Fees are charged every year, in good markets and bad, and they compound against you.","A 1% yearly cost can take about a quarter of a 30-year result.","Ask any advisor for total yearly cost in dollars, and prefer fiduciaries."],
"quiz":[
{"q":"How many basis points is a 0.25% expense ratio?","options":["2.5","250","0.25","25"],"answer":3,"why":"One basis point is 0.01%, so 0.25% equals 25 basis points."},
{"q":"You have $400,000 with an advisor charging 1% a year. What do you pay this year?","options":["$400","$4,000","$1,000","$40,000"],"answer":1,"why":"$400,000 × 0.01 = $4,000, and the amount grows as your balance grows."},
{"q":"Why do fees matter more over long periods?","options":["They rise by law every year","Funds stop charging after 10 years","Each fee dollar also loses its future compounding","They only matter in bad markets"],"answer":2,"why":"Money taken as fees can never grow again, so the cost compounds over time."}
]
},
{
"id":"inv-2-04","subject":"investing","level":2,"order":10,"type":"short","minutes":5,
"title":"Tax-advantaged accounts",
"hook":"The same fund can grow much bigger in the right account. The container matters almost as much as the contents.",
"tags":["401k","ira","roth ira","hsa","employer match","retirement accounts","taxes"],
"blocks":[
{"t":"p","text":"Your new job's onboarding packet mentions a 401(k), a match, a Roth option and an HSA. It feels like alphabet soup. Here is the key idea: these are not investments. They are **containers** that hold investments and give them special tax treatment. Choosing the right container can be worth tens of thousands of dollars."},
{"t":"h","text":"Pay tax now or pay tax later"},
{"t":"p","text":"Most US accounts come in two flavors. **Traditional** (pre-tax): you skip the tax today, the money grows, and you pay income tax when you withdraw in retirement. **Roth** (after-tax): you pay tax today, and qualified withdrawals in retirement are completely tax free."},
{"t":"fig","kind":"compare","left":{"title":"Traditional","icon":"⏳","items":["Tax break today","Grows tax deferred","Taxed when withdrawn","Good if your rate drops later"]},"right":{"title":"Roth","icon":"🌱","items":["No break today","Grows tax free","Qualified withdrawals tax free","Good if your rate rises later"]},"caption":"Same growth, different moment you pay the tax."},
{"t":"example","title":"Same money, same tax rate","text":"You have $10,000 of salary to invest. Say your tax rate is 22% now and in retirement, and the fund grows 7% a year for 30 years.\n\nTraditional: invest all $10,000 → grows to about $76,100 → pay 22% tax → about $59,400.\nRoth: pay 22% first, invest $7,800 → grows to about $59,400 → no tax.\n\nIdentical. The choice only matters if your tax rate later differs from today."},
{"t":"check","q":"You are early in your career and expect to earn much more later. Which flavor might suit you better?","a":"Often Roth, because you pay tax now at a lower rate and avoid it later when your rate may be higher. If you are at peak earnings, traditional often looks better."},
{"t":"h","text":"The accounts at a glance"},
{"t":"fig","kind":"table","head":["Account","Who offers it","Key feature"],"rows":[["401(k) / 403(b)","Your employer","Payroll deduction, often a match"],["Traditional IRA","You open it","Tax deduction may apply"],["Roth IRA","You open it","Tax-free growth; income limits"],["HSA","With a high-deductible plan","Triple tax advantage for health"]],"caption":"Annual contribution limits change; check this year's limits with the IRS."},
{"t":"h","text":"The employer match: free money"},
{"t":"p","text":"Many employers add money when you contribute to your 401(k). A common formula is 50 cents for every dollar you put in, up to 6% of salary. Not taking it is like refusing part of your pay."},
{"t":"fig","kind":"bars","data":[{"label":"You put in","value":4800},{"label":"Employer adds","value":2400,"highlight":true},{"label":"Total saved","value":7200}],"unit":"$","caption":"Illustrative: $80,000 salary, 6% contribution, 50% match."},
{"t":"key","text":"Always capture the full employer match first, then choose traditional or Roth based on whether your tax rate is likely higher now or later."},
{"t":"h","text":"The HSA: a hidden gem"},
{"t":"p","text":"If you have a qualifying high-deductible health plan, a Health Savings Account offers three tax breaks: money goes in pre-tax, grows tax free, and comes out tax free for qualified medical costs. Some people invest it and let it grow for decades."},
{"t":"term","word":"Vesting","def":"The schedule for when employer contributions truly become yours. Leave before you are vested and you may lose some of the match."},
{"t":"p","text":"**A note on Italy and Europe:** Italy offers supplementary pension funds (_fondi pensione_) with deductible contributions and favorable taxes on payouts, and employees can direct their TFR severance into them. The UK has the ISA, a tax-free wrapper similar in spirit to a Roth. The idea is universal; the rules differ."},
{"t":"warn","text":"Early withdrawals from retirement accounts usually trigger taxes plus a penalty. Keep the emergency fund outside these accounts."},
{"t":"tip","text":"Log in to your 401(k) today and confirm two things: your contribution rate gets the full match, and the money is actually invested, not sitting in a default cash option."}
],
"takeaways":["401(k), IRA, Roth and HSA are tax containers, not investments themselves.","Traditional saves tax now; Roth saves tax later. Your future tax rate decides.","Always take the full employer match; it is an instant return on your money."],
"quiz":[
{"q":"What is the main tax benefit of a Roth IRA?","options":["Qualified withdrawals in retirement are tax free","A deduction today","No taxes ever on any account","Higher contribution limits than a 401(k)"],"answer":0,"why":"Roth contributions are made with after-tax money, so qualified growth and withdrawals come out tax free."},
{"q":"Your employer matches 100% of contributions up to 4% of a $70,000 salary. You contribute 4%. How much does the employer add?","options":["$700","$1,400","$4,000","$2,800"],"answer":3,"why":"4% of $70,000 is $2,800, and a 100% match adds the same $2,800."},
{"q":"Which account can offer a triple tax advantage?","options":["Taxable brokerage account","Regular savings account","HSA","Traditional IRA only"],"answer":2,"why":"An HSA can provide pre-tax contributions, tax-free growth, and tax-free withdrawals for qualified medical expenses."}
]
}
]});
