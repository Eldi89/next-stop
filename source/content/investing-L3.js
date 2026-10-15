LEARN.add({"subject":"investing","lessons":[
{
"id":"inv-3-01","subject":"investing","level":3,"order":11,"type":"short","minutes":5,
"title":"Modern Portfolio Theory",
"hook":"Adding a calmer asset can make a portfolio better, not just safer. A Nobel Prize was won explaining why.",
"tags":["modern portfolio theory","efficient frontier","correlation","sharpe ratio","markowitz","risk adjusted return"],
"blocks":[
{"t":"p","text":"In 1952 a young economist named Harry Markowitz asked a simple question: instead of judging each investment alone, what if we judged how it behaves _with the others_? That shift became **Modern Portfolio Theory** (MPT), and it later earned him a Nobel Prize. Every target-date fund on your 401(k) menu is built on his idea."},
{"t":"h","text":"The surprising math of mixing"},
{"t":"p","text":"Take two illustrative assets. Stocks: 8% expected return, 16% volatility. Bonds: 4% expected return, 6% volatility. Assume they have a low correlation of 0.1, so they rarely move together."},
{"t":"p","text":"The portfolio's return is simply the weighted average. Its risk is **not**. Because the two assets often zig and zag at different times, part of their swings cancel out. Risk falls faster than return when you blend."},
{"t":"fig","kind":"table","head":["Stocks / bonds","Return","Volatility"],"rows":[["0 / 100","4.0%","6.0%"],["10 / 90","4.4%","5.8%"],["30 / 70","5.2%","6.7%"],["50 / 50","6.0%","8.8%"],["70 / 30","6.8%","11.5%"],["100 / 0","8.0%","16.0%"]],"caption":"Illustrative: correlation 0.1. Note 10/90 has more return AND less risk than all bonds."},
{"t":"check","q":"Look at the first two rows. Why would no rational investor hold 100% bonds in this example?","a":"Because 10/90 earns more (4.4% vs 4.0%) with less volatility (5.8% vs 6.0%). Adding a little of a risky but uncorrelated asset made the whole portfolio better on both counts."},
{"t":"h","text":"The efficient frontier"},
{"t":"p","text":"If you plot every possible mix by risk and return, the best ones form a curved edge called the **efficient frontier**. A portfolio on the frontier gives the highest return for its level of risk. Anything below the curve is inefficient: some other mix offers more return for the same risk."},
{"t":"fig","kind":"line","series":[{"name":"Expected return %","points":[4.0,4.4,4.8,5.2,5.6,6.0,6.4,6.8,7.2,7.6,8.0]},{"name":"Volatility %","points":[6.0,5.8,6.0,6.7,7.7,8.8,10.1,11.5,13.0,14.5,16.0]}],"xLabels":["0","10","20","30","40","50","60","70","80","90","100"],"unit":"%","caption":"Stock share on the x-axis: return rises in a straight line, risk curves."},
{"t":"key","text":"What matters is not how risky each investment is alone, but how it changes the risk and return of the whole portfolio."},
{"t":"h","text":"Correlation is the secret ingredient"},
{"t":"p","text":"The lower the correlation, the bigger the risk reduction. With a correlation of +1, blending gives no benefit at all: risk is just the average. As correlation drops toward 0 or below, the curve bends further, and the free lunch grows."},
{"t":"term","word":"Sharpe ratio","def":"(Return − risk-free rate) ÷ volatility. It measures how much extra return you get for each unit of risk."},
{"t":"example","title":"Which fund is better?","text":"Risk-free rate: 3%.\nFund A: 10% return, 20% volatility.\nSharpe = (10 − 3) ÷ 20 = 0.35\n\nFund B: 7% return, 8% volatility.\nSharpe = (7 − 3) ÷ 8 = 0.50\n\nFund A earns more, but Fund B pays you more per unit of risk. You could even blend Fund B with cash or a bit of borrowing to match any risk level you want."},
{"t":"fig","kind":"bars","data":[{"label":"Fund A","value":0.35},{"label":"Fund B","value":0.5,"highlight":true}],"unit":"","caption":"Higher Sharpe ratio means a better reward for each unit of risk."},
{"t":"h","text":"The limits"},
{"t":"list","items":["**Inputs are guesses:** expected returns and correlations are estimated from the past and can change.","**Crisis correlations rise:** in a panic, many assets fall together just when you need diversification most.","**Volatility is not all risk:** it ignores rare crashes and your personal goals.","**Small input changes, big output changes:** optimizers can produce extreme, unstable mixes."],"ordered":false},
{"t":"p","text":"So professionals use MPT as a way of thinking, not as an exact recipe. The lasting lesson is simple: judge each asset by what it does for the team."},
{"t":"warn","text":"Do not compare funds on return alone. A fund that earned 2% more but with twice the volatility may be the worse deal. Always ask: return per unit of what risk?"},
{"t":"tip","text":"Pick two funds you own or are considering. Find their returns and volatility (often listed as standard deviation) on the fund pages and compute a rough Sharpe ratio for each."}
],
"takeaways":["Portfolio risk is not the average of asset risks; low correlation makes it smaller.","The efficient frontier holds the mixes with the most return for each level of risk.","The Sharpe ratio measures excess return per unit of volatility."],
"quiz":[
{"q":"Why can blending two assets give a portfolio less volatility than the weighted average of their volatilities?","options":["Fees cancel out","Their price swings partly offset when correlation is below +1","Bonds have no risk","The government guarantees it"],"answer":1,"why":"When assets do not move perfectly together, some ups and downs cancel, lowering total volatility."},
{"q":"A fund returns 9% with 12% volatility. The risk-free rate is 3%. What is its Sharpe ratio?","options":["0.25","0.75","0.50","1.33"],"answer":2,"why":"(9 − 3) ÷ 12 = 0.50."},
{"q":"A portfolio sits below the efficient frontier. What does that mean?","options":["Another mix offers more return for the same risk","It has no risk","It has the best possible return","It holds only bonds"],"answer":0,"why":"Below the frontier is inefficient: you could move up to a better mix without taking more risk."}
]
},
{
"id":"inv-3-02","subject":"investing","level":3,"order":12,"type":"short","minutes":5,
"title":"Behavioral finance: your brain vs your money",
"hook":"Markets don't ruin most investors. Their reactions to markets do. Meet the biases and learn to outsmart them.",
"tags":["behavioral finance","loss aversion","overconfidence","herding","recency bias","investor psychology","market panic"],
"blocks":[
{"t":"p","text":"Your index fund is down 25%. Every headline says it will get worse. Your stomach says sell. Your plan says hold. Which one wins? Behavioral finance studies exactly this moment, where human wiring meets money, and why smart people so often make costly choices."},
{"t":"p","text":"Psychologists Daniel Kahneman and Amos Tversky showed that we are not the calm calculators economics assumed. We use mental shortcuts that served us well in the wild and badly in markets."},
{"t":"h","text":"Loss aversion: losses hurt twice as much"},
{"t":"p","text":"Studies suggest losing $100 feels roughly twice as painful as gaining $100 feels good. That is why a 20% drop feels like an emergency, while a 20% gain feels merely nice. It pushes people to sell in downturns and to cling to losing positions hoping to \"get back to even\"."},
{"t":"fig","kind":"bars","data":[{"label":"Joy of +$100","value":100},{"label":"Pain of −$100","value":200,"highlight":true}],"unit":"","caption":"Illustrative: a loss feels about twice as strong as an equal gain."},
{"t":"h","text":"Four more traps"},
{"t":"fig","kind":"grid","items":[{"icon":"🦚","label":"Overconfidence","note":"\"I can beat the market\""},{"icon":"🐑","label":"Herding","note":"Buying what everyone buys"},{"icon":"🔙","label":"Recency bias","note":"Last year = next year"},{"icon":"⚓","label":"Anchoring","note":"Stuck on the price you paid"}],"caption":"Common biases that quietly cost investors money."},
{"t":"list","items":["**Overconfidence:** most drivers think they are above average; so do most stock pickers. It leads to trading too much and holding too few positions.","**Herding:** when friends and headlines all praise one asset, it feels safe to join. Often the price already reflects the excitement.","**Recency bias:** we assume the recent past will continue. After a great year people pile in; after a crash they flee.","**Anchoring:** fixing on a number, like your purchase price, that the market does not care about."],"ordered":false},
{"t":"fig","kind":"cycle","steps":["Optimism","Euphoria","Anxiety","Panic","Despair","Hope"],"center":"Investor emotions","caption":"The emotional cycle: feelings peak at the top and bottom, the worst moments to act."},
{"t":"key","text":"Your biggest investing risk is usually your own behavior, so build rules in calm times that protect you in emotional ones."},
{"t":"example","title":"The cost of selling at the bottom","text":"Marco and Giulia each have $100,000 in a stock fund. A crash takes it to $70,000.\n\nMarco sells and waits in cash \"until things calm down\". He buys back after the market has recovered 30% from the bottom. His $70,000 cash buys what is now worth $70,000; he simply missed the rebound.\nGiulia holds. Her fund recovers 30% from $70,000 to $91,000.\n\nSame fund, same crash. Marco is about $21,000 behind, purely from one emotional decision."},
{"t":"check","q":"Why do studies often find that fund investors earn less than the funds they own?","a":"Because they tend to buy after strong gains and sell after drops. Their timing, driven by recency bias and loss aversion, takes them out of the market during the best stretches."},
{"t":"h","text":"How to protect yourself"},
{"t":"list","items":["**Write an investment policy:** your target mix and rebalancing rule on one page.","**Automate:** fixed monthly contributions remove the daily decision.","**Add friction:** wait 72 hours before any big trade made on emotion.","**Look less:** checking your balance daily makes losses feel more frequent.","**Pre-commit:** decide now what you will do if markets fall 30%."],"ordered":false},
{"t":"p","text":"None of this means you are weak. These biases affect professionals too, which is why many fund managers follow strict written processes. The goal is not to stop feeling fear or greed, but to stop letting them place the trades."},
{"t":"warn","text":"Watch out for \"this time is different\". It is the most expensive sentence in investing, heard both at bubble peaks and at crash bottoms."},
{"t":"tip","text":"Write one sentence today and save it in your phone notes: \"If my portfolio drops 30%, I will…\". Read it the next time the market makes headlines."}
],
"takeaways":["Losses feel about twice as strong as gains, which pushes people to sell at bad times.","Overconfidence, herding, recency and anchoring all lead to buying high and selling low.","Rules, automation and fewer balance checks protect you from your own reactions."],
"quiz":[
{"q":"What does loss aversion describe?","options":["Avoiding all risky investments","Losing money through fees","A tax rule on losses","Feeling losses more strongly than equal gains"],"answer":3,"why":"Research suggests a loss feels about twice as intense as a gain of the same size."},
{"q":"After a fund rose 40% last year, Paolo assumes it will do the same next year. Which bias is this?","options":["Anchoring","Recency bias","Loss aversion","Home bias"],"answer":1,"why":"Recency bias is assuming the recent past will continue into the future."},
{"q":"Which habit best protects against emotional trading?","options":["Automatic contributions and a written rebalancing rule","Checking prices every hour","Following social media tips","Moving to cash whenever the news is bad"],"answer":0,"why":"Automation and pre-written rules take the emotional decision out of the moment."}
]
},
{
"id":"inv-3-03","subject":"investing","level":3,"order":13,"type":"short","minutes":5,
"title":"Factor investing",
"hook":"Why have cheap, small, or steady stocks sometimes beaten the market? Factors explain it, and their limits matter as much.",
"tags":["factor investing","value","momentum","small cap","quality","low volatility","smart beta"],
"blocks":[
{"t":"p","text":"A fund on your 401(k) menu is called \"US Value\". Another says \"Momentum\" or \"Quality\". These are **factor funds**. They are built on decades of research asking a simple question: besides the market itself, which traits of a stock have tended to explain its returns?"},
{"t":"term","word":"Factor","def":"A shared trait of a group of stocks, like being cheap or small, that has historically been linked to different returns."},
{"t":"h","text":"From one factor to many"},
{"t":"p","text":"The first model said one thing explains most stock returns: the market. If the market rises 10%, most stocks rise with it. In the early 1990s, economists Eugene Fama and Kenneth French added two more: **size** and **value**. Later research added momentum, quality and low volatility."},
{"t":"fig","kind":"table","head":["Factor","Tilts toward","Main idea"],"rows":[["Value","Cheap stocks","Low price vs earnings or book"],["Size","Small companies","More risk, more expected return"],["Momentum","Recent winners","Trends persist for months"],["Quality","Strong profits","Stable, low-debt businesses"],["Low volatility","Calm stocks","Similar return, smaller swings"]],"caption":"The five best-known factors beyond the market itself."},
{"t":"h","text":"Why might factors work?"},
{"t":"p","text":"There are two main explanations, and both may be partly true. **Risk story:** cheap and small companies are more fragile, so investors demand extra return for holding them. **Behavior story:** investors overreact, overpay for exciting growth and underreact to good news, leaving patterns that patient investors can collect."},
{"t":"example","title":"A value tilt in practice","text":"Company A trades at a P/E of 35: you pay $35 for each $1 of yearly profit.\nCompany B trades at a P/E of 10: you pay $10 for each $1.\n\nA value fund leans toward B-type stocks. If B's business is merely okay rather than terrible, buyers today get more earnings per dollar. If excitement around A fades, its price can fall even while it keeps growing."},
{"t":"fig","kind":"compare","left":{"title":"Evidence","icon":"📚","items":["Found in many countries","Decades of data","Clear risk or behavior logic"]},"right":{"title":"Limits","icon":"⚠️","items":["Long losing streaks","Premiums may shrink once known","Higher fees than plain index","Data mining risk"]},"caption":"Factors are real but far from guaranteed."},
{"t":"key","text":"Factors have historically earned extra return over long periods, but they can lag for a decade or more, so only use them if you can hold through the drought."},
{"t":"h","text":"The patience problem"},
{"t":"p","text":"Value is the famous example. US value stocks trailed growth stocks for much of the period from about 2007 to 2020, more than a decade. Many investors gave up right before value had a strong rebound in 2022. A factor premium exists partly _because_ it is painful to collect."},
{"t":"fig","kind":"timeline","events":[{"when":"1992","label":"Fama-French publish size and value"},{"when":"1993","label":"Momentum documented"},{"when":"2007 to 2020","label":"Long value drought"},{"when":"2022","label":"Value rebounds strongly"}],"caption":"Factor history: long stretches of pain between the rewards."},
{"t":"check","q":"Researchers test thousands of possible patterns on past data. Why is that a problem?","a":"Some patterns will look great by pure chance. This is data mining. Trust factors that work across many countries and time periods and that have a sensible reason behind them."},
{"t":"p","text":"For most investors, a total market index fund already captures the market factor at the lowest cost. Factor funds are an optional tilt, not a replacement for a diversified core."},
{"t":"warn","text":"Do not chase whichever factor did best last year. Switching factors after strong runs is just recency bias with a scientific label."},
{"t":"tip","text":"If you own a factor fund, find which factor it targets and its expense ratio. Compare that fee to a plain total market index fund and ask whether the tilt is worth the difference."}
],
"takeaways":["Factors like value, size, momentum, quality and low volatility explain many return differences.","They rest on risk and behavior stories, with evidence across many markets.","They can lag for a decade, cost more, and may shrink, so use them only as a patient tilt."],
"quiz":[
{"q":"What does a value factor fund tilt toward?","options":["Stocks with the fastest growth","Only large technology companies","Stocks that are cheap relative to earnings or book value","Government bonds"],"answer":2,"why":"Value means buying stocks with low prices relative to fundamentals such as earnings or book value."},
{"q":"Which factor is based on the idea that recent winners tend to keep winning for a while?","options":["Size","Quality","Low volatility","Momentum"],"answer":3,"why":"Momentum captures the tendency of recent price trends to persist over months."},
{"q":"What is a major practical risk of factor investing?","options":["Factors are illegal","Factors can underperform the market for many years","Factors guarantee lower returns","Factor funds hold no stocks"],"answer":1,"why":"Factor premiums come with long droughts, and investors who give up miss the rewards."}
]
}
]});
