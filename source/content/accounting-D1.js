LEARN.add({
 "subject": "accounting",
 "lessons": [
  {
   "id": "acc-d1",
   "subject": "accounting",
   "level": 1,
   "order": 6,
   "type": "deep",
   "minutes": 30,
   "title": "From transaction to financial statements",
   "hook": "Run a coffee cart for one month and turn every sale, bill and paycheck into a full set of financial statements.",
   "tags": [
    "journal entries",
    "general ledger",
    "trial balance",
    "adjusting entries",
    "financial statements",
    "accounting cycle",
    "closing entries"
   ],
   "blocks": [
    {
     "t": "chapter",
     "title": "Meet the cart and its first month",
     "minutes": 4
    },
    {
     "t": "p",
     "text": "Picture the exit of a busy subway station at 7:40 in the morning. A steel cart with a striped awning sells espresso, cold brew and croissants to people rushing to work. The owner is Rosa. She opened the cart on March 1 as a small corporation called **Platform Coffee Inc.**"
    },
    {
     "t": "p",
     "text": "Rosa is great at coffee. She is less sure about the books. At the end of March her bank asks for financial statements before it will extend her credit line. Today you are her accountant. We will take every March event and carry it all the way to an income statement, a balance sheet and a cash flow statement."
    },
    {
     "t": "p",
     "text": "This is the **accounting cycle**. Every business on earth runs it, from a cart to a multinational. The only differences are volume and software. The logic is identical, so once you can do it by hand for Rosa, you can read what any ERP is doing behind the screen."
    },
    {
     "t": "fig",
     "kind": "flow",
     "steps": [
      {
       "label": "Transaction",
       "icon": "🧾",
       "note": "something happens"
      },
      {
       "label": "Journal",
       "icon": "✍️",
       "note": "debits and credits"
      },
      {
       "label": "Ledger",
       "icon": "📒",
       "note": "totals by account"
      },
      {
       "label": "Trial balance",
       "icon": "⚖️",
       "note": "prove it balances"
      },
      {
       "label": "Statements",
       "icon": "📊",
       "note": "after adjustments"
      }
     ],
     "caption": "The accounting cycle: each step feeds the next one."
    },
    {
     "t": "h",
     "text": "The one rule that never breaks"
    },
    {
     "t": "p",
     "text": "Every step rests on the accounting equation. Everything the business owns was paid for by someone: either a lender or the owners. So the two sides must always be equal."
    },
    {
     "t": "fig",
     "kind": "equation",
     "parts": [
      "Assets",
      "=",
      "Liabilities",
      "+",
      "Equity"
     ],
     "caption": "After every single entry, this must still hold."
    },
    {
     "t": "p",
     "text": "Equity itself has moving parts. It starts with what owners put in (common stock). It grows with revenue, shrinks with expenses, and shrinks again when owners take money out as dividends. That is why the DEALER memory trick works: **D**ividends, **E**xpenses and **A**ssets increase with debits; **L**iabilities, **E**quity and **R**evenue increase with credits."
    },
    {
     "t": "h",
     "text": "Rosa’s chart of accounts"
    },
    {
     "t": "p",
     "text": "Before recording anything, an accountant sets up the **chart of accounts**: the list of buckets the business will use. A cart needs only a few. A large company may have thousands, but each one still belongs to one of five families."
    },
    {
     "t": "fig",
     "kind": "table",
     "head": [
      "Family",
      "Rosa’s accounts",
      "Normal side"
     ],
     "rows": [
      [
       "Assets",
       "Cash, Receivable, Supplies, Prepaid, Cart",
       "Debit"
      ],
      [
       "Liabilities",
       "Payables, Unearned, Bank note",
       "Credit"
      ],
      [
       "Equity",
       "Common stock, Retained earnings",
       "Credit"
      ],
      [
       "Dividends",
       "Dividends",
       "Debit"
      ],
      [
       "Revenue",
       "Sales revenue",
       "Credit"
      ],
      [
       "Expenses",
       "Supplies used, Wages, Rent and more",
       "Debit"
      ]
     ],
     "caption": "Five families (dividends sit inside equity), one normal balance each."
    },
    {
     "t": "term",
     "word": "Normal balance",
     "def": "The side (debit or credit) on which an account increases and where its balance usually sits. Cash normally has a debit balance; a loan normally has a credit balance."
    },
    {
     "t": "p",
     "text": "One simplification: we will ignore payroll taxes and income taxes this month. In real life Rosa would also withhold taxes from her barista’s pay and record employer payroll taxes. We will flag where they would go, but keep the numbers clean so the logic shines."
    },
    {
     "t": "check",
     "q": "Rosa buys a $50 bag of beans with cash. Which side of the equation changes, and does the total change?",
     "a": "Only the assets side changes: Supplies go up $50 and Cash goes down $50. Total assets stay the same, so the equation is untouched. One asset was simply swapped for another."
    },
    {
     "t": "chapter",
     "title": "Journalize the month",
     "minutes": 6
    },
    {
     "t": "p",
     "text": "The **journal** is a diary in date order. Each entry names at least one account to debit and one to credit, with equal totals. Think of it as the business writing down, in a strict grammar, what happened and why."
    },
    {
     "t": "p",
     "text": "Every entry starts with a **source document**: a bank transfer confirmation, a supplier invoice, a point-of-sale report, a payroll register, a signed loan agreement. No document, no entry. When an auditor or the IRS asks “why is this number here?”, the answer is always a piece of paper or a file, never a memory."
    },
    {
     "t": "term",
     "word": "Source document",
     "def": "The evidence behind an entry: invoice, receipt, contract, bank statement, timesheet. It proves the transaction happened, when, and for how much."
    },
    {
     "t": "p",
     "text": "Here is everything that happened at Platform Coffee in March. Read each one, then look at the entry. Try to guess the entry before you read it: that habit is how the logic becomes automatic."
    },
    {
     "t": "h",
     "text": "Getting started"
    },
    {
     "t": "example",
     "title": "1. March 1: Rosa invests $20,000",
     "text": "Rosa transfers $20,000 from her savings into the business account in exchange for all the shares.\n\nDr Cash 20,000\n   Cr Common stock 20,000\n\nThe business gets an asset (cash) and the owner gets a claim (equity). This is not revenue: the cart did not sell anything to earn it."
    },
    {
     "t": "example",
     "title": "2. March 1: The cart is bought",
     "text": "The cart costs $12,000. Rosa pays $4,000 down and signs an $8,000 three-year bank note at 6% interest.\n\nDr Equipment (cart) 12,000\n   Cr Cash 4,000\n   Cr Notes payable 8,000\n\nThis is a **compound entry**: three lines, but debits (12,000) still equal credits (4,000 + 8,000)."
    },
    {
     "t": "fig",
     "kind": "scale",
     "left": {
      "label": "Debits",
      "items": [
       "Equipment +$12,000"
      ]
     },
     "right": {
      "label": "Credits",
      "items": [
       "Cash −$4,000",
       "Note payable +$8,000"
      ]
     },
     "tilt": "even",
     "caption": "One debit can be matched by several credits, as long as totals agree."
    },
    {
     "t": "example",
     "title": "3. March 2: Three months of insurance, paid upfront",
     "text": "Rosa pays $1,800 for liability insurance covering March, April and May.\n\nDr Prepaid insurance 1,800\n   Cr Cash 1,800\n\nShe has bought protection she has not used yet. Unused protection is an asset. We will move one month to expense at month end."
    },
    {
     "t": "example",
     "title": "4. March 3: Beans, milk and cups on credit",
     "text": "Her supplier delivers $2,400 of coffee, milk, pastries and cups, payable in 30 days.\n\nDr Supplies 2,400\n   Cr Accounts payable 2,400\n\nShe has the goods now and pays later. Nothing is an expense yet, because nothing has been used."
    },
    {
     "t": "h",
     "text": "Earning money"
    },
    {
     "t": "example",
     "title": "5. March 1 to 31: Walk-up sales",
     "text": "Card and cash sales for the month total $9,800. (In practice she would record them daily from the point-of-sale report; we use one summary entry.)\n\nDr Cash 9,800\n   Cr Sales revenue 9,800"
    },
    {
     "t": "example",
     "title": "6. March 10: A catering job on account",
     "text": "A law firm orders coffee service for a morning meeting. Rosa delivers and sends a $1,200 invoice, payable in April.\n\nDr Accounts receivable 1,200\n   Cr Sales revenue 1,200\n\nUnder accrual accounting the revenue belongs to March, because March is when she did the work. The cash timing does not matter."
    },
    {
     "t": "example",
     "title": "7. March 15: Gift cards sold",
     "text": "Customers buy $600 of prepaid coffee cards.\n\nDr Cash 600\n   Cr Unearned revenue 600\n\nRosa has the cash, but she owes coffee. Until the cards are used, that $600 is a **liability**, not revenue."
    },
    {
     "t": "h",
     "text": "Paying the bills"
    },
    {
     "t": "example",
     "title": "8. March 15: Barista wages",
     "text": "Rosa pays her part-time barista $1,500 for March 1 to 15.\n\nDr Wage expense 1,500\n   Cr Cash 1,500\n\n(With payroll taxes, the employee’s withholdings would go to a payable to the IRS and state, and employer taxes would be an extra expense.)"
    },
    {
     "t": "example",
     "title": "9. March 20: Partial payment to the supplier",
     "text": "Rosa pays $1,500 of the $2,400 she owes.\n\nDr Accounts payable 1,500\n   Cr Cash 1,500\n\nPaying a bill is not an expense. The expense comes from **using** the supplies, which we measure at month end."
    },
    {
     "t": "example",
     "title": "10. March 25: Commissary rent",
     "text": "She pays $800 rent for the shared kitchen where she preps and stores the cart.\n\nDr Rent expense 800\n   Cr Cash 800"
    },
    {
     "t": "example",
     "title": "11. March 31: A dividend to Rosa",
     "text": "Rosa takes $500 out of the business for herself.\n\nDr Dividends 500\n   Cr Cash 500\n\nA dividend is not an expense. It does not reduce net income. It reduces retained earnings directly, because it is a payment to the owner, not a cost of running the cart."
    },
    {
     "t": "warn",
     "text": "Three classic beginner traps sit in this list: treating the owner’s investment as revenue (entry 1), expensing a bill when it is paid instead of when the cost is used (entry 9), and recording dividends as an expense (entry 11). Each one distorts net income."
    },
    {
     "t": "fig",
     "kind": "table",
     "head": [
      "#",
      "Debit",
      "Credit",
      "Amount"
     ],
     "rows": [
      [
       "1",
       "Cash",
       "Common stock",
       "20,000"
      ],
      [
       "2",
       "Equipment",
       "Cash / Note",
       "12,000"
      ],
      [
       "3",
       "Prepaid ins.",
       "Cash",
       "1,800"
      ],
      [
       "4",
       "Supplies",
       "Accounts payable",
       "2,400"
      ],
      [
       "5 to 7",
       "Cash / A/R",
       "Revenue / Unearned",
       "11,600"
      ],
      [
       "8 to 11",
       "Wages, A/P, Rent, Div.",
       "Cash",
       "4,300"
      ]
     ],
     "caption": "The March journal at a glance."
    },
    {
     "t": "exercise",
     "title": "Journalize three April events",
     "prompt": "It is now April. Write the journal entry for each event. Use only accounts from Rosa’s chart.",
     "steps": [
      "April 8: the law firm pays the $1,200 catering invoice.",
      "April 10: Rosa pays the remaining $900 owed to the supplier.",
      "April 12: she buys a $300 milk frother with cash; it will last two years."
     ],
     "answer": "April 8:\nDr Cash 1,200\n   Cr Accounts receivable 1,200\nNo revenue here. The revenue was already recorded in March; this only converts one asset (receivable) into another (cash).\n\nApril 10:\nDr Accounts payable 900\n   Cr Cash 900\nA liability is settled. No expense.\n\nApril 12:\nDr Equipment 300\n   Cr Cash 300\nThe frother gives benefits over two years, so it is an asset that will be depreciated. Many small businesses set a capitalization threshold (say $500 or $2,500) and expense anything cheaper. If Rosa adopted a $500 policy, she would debit Repairs and small equipment expense instead. Both answers are acceptable if the policy is written and applied consistently."
    },
    {
     "t": "chapter",
     "title": "Post, then prove: ledger and trial balance",
     "minutes": 5
    },
    {
     "t": "p",
     "text": "The journal is great for telling the story in order. It is terrible for answering simple questions like “how much cash do we have?” For that, we **post** each line of each entry to its account in the **general ledger**. The ledger regroups the same data by account instead of by date."
    },
    {
     "t": "p",
     "text": "A T-account is the hand-drawn version of a ledger page. Debits on the left, credits on the right, balance at the bottom on the bigger side."
    },
    {
     "t": "fig",
     "kind": "taccount",
     "title": "Cash",
     "debits": [
      {
       "label": "Owner investment",
       "value": 20000
      },
      {
       "label": "Walk-up sales",
       "value": 9800
      },
      {
       "label": "Gift cards sold",
       "value": 600
      }
     ],
     "credits": [
      {
       "label": "Cart down payment",
       "value": 4000
      },
      {
       "label": "Insurance",
       "value": 1800
      },
      {
       "label": "Wages",
       "value": 1500
      },
      {
       "label": "Supplier payment",
       "value": 1500
      },
      {
       "label": "Rent",
       "value": 800
      },
      {
       "label": "Dividend",
       "value": 500
      }
     ],
     "unit": "$",
     "caption": "Debits $30,400 minus credits $10,100 leaves a $20,300 debit balance."
    },
    {
     "t": "p",
     "text": "The cash account tells a story by itself. Of $30,400 that came in, two thirds came from Rosa, not from customers. That is normal in month one, and it is exactly why investors and banks never look at cash alone."
    },
    {
     "t": "fig",
     "kind": "taccount",
     "title": "Accounts payable",
     "debits": [
      {
       "label": "Paid supplier",
       "value": 1500
      }
     ],
     "credits": [
      {
       "label": "Supplies on credit",
       "value": 2400
      }
     ],
     "unit": "$",
     "caption": "A liability: credits exceed debits, leaving $900 still owed."
    },
    {
     "t": "h",
     "text": "The unadjusted trial balance"
    },
    {
     "t": "p",
     "text": "Once every account has a balance, we list them all in one table: debit balances in one column, credit balances in the other. This is the **trial balance**. If the columns are equal, every entry was balanced and posted to the correct side, at least arithmetically."
    },
    {
     "t": "fig",
     "kind": "table",
     "head": [
      "Account",
      "Debit",
      "Credit"
     ],
     "rows": [
      [
       "Cash, A/R, Supplies",
       "23,900",
       ""
      ],
      [
       "Prepaid ins., Cart",
       "13,800",
       ""
      ],
      [
       "A/P, Unearned",
       "",
       "1,500"
      ],
      [
       "Notes payable",
       "",
       "8,000"
      ],
      [
       "Common stock",
       "",
       "20,000"
      ],
      [
       "Dividends",
       "500",
       ""
      ],
      [
       "Sales revenue",
       "",
       "11,000"
      ],
      [
       "Wages, Rent",
       "2,300",
       ""
      ]
     ],
     "caption": "Unadjusted trial balance, March 31: both columns total $40,500."
    },
    {
     "t": "p",
     "text": "Here is the detail behind the grouped lines. Cash 20,300; accounts receivable 1,200; supplies 2,400; prepaid insurance 1,800; equipment 12,000; dividends 500; wage expense 1,500; rent expense 800. Total debits: **$40,500**. On the credit side: accounts payable 900; unearned revenue 600; notes payable 8,000; common stock 20,000; sales revenue 11,000. Total credits: **$40,500**."
    },
    {
     "t": "key",
     "text": "A balanced trial balance proves the arithmetic, not the accounting. It cannot see a missing entry, a duplicated entry, or a debit sent to the wrong account."
    },
    {
     "t": "p",
     "text": "If Rosa had recorded the $800 rent as a debit to Equipment instead of Rent expense, the trial balance would still balance perfectly. Assets would be overstated and expenses understated by $800. That is why the next step, adjustments and review, is where real accounting judgment lives."
    },
    {
     "t": "exercise",
     "title": "Find the error",
     "prompt": "A junior on your team prepares Rosa’s unadjusted trial balance. Debits total $40,050 and credits total $40,500. Everything else matches the journal. Find the most likely error.",
     "steps": [
      "Compute the difference between the columns.",
      "Check whether the difference is divisible by 9.",
      "Look for an amount whose digits could have been swapped."
     ],
     "answer": "The difference is $40,500 − $40,050 = $450.\n\n$450 ÷ 9 = 50. A difference that divides evenly by 9 is the classic sign of a **transposition**: two digits swapped when copying a number.\n\nThe debit side is short by $450. Scan the debit balances for a number that, with digits swapped, falls by $450. Wage expense of $1,500 typed as $1,050 does exactly that: 1,500 − 1,050 = 450.\n\nFix: correct wage expense to $1,500 and both columns return to $40,500. (Other checks for unbalanced trial balances: a difference equal to one amount suggests a missing line; half of the difference matching an amount suggests a debit posted as a credit.)"
    },
    {
     "t": "p",
     "text": "A note from Europe: in Italy the journal is not just good practice. The _libro giornale_ is a book the Civil Code requires businesses to keep, and it is part of the legal record. In the US there is no single mandated book, but the IRS still expects records that support every number on the return."
    },
    {
     "t": "chapter",
     "title": "Adjusting entries: making March true",
     "minutes": 6
    },
    {
     "t": "p",
     "text": "The trial balance shows what was **recorded**. It does not yet show what was **true** on March 31. Time has passed. Insurance has been used up, the cart has aged, the barista has worked days she has not been paid for, and the bank is quietly charging interest. Adjusting entries capture these silent events."
    },
    {
     "t": "p",
     "text": "Every adjusting entry has two features. It always touches one balance sheet account and one income statement account. And it almost never touches cash: the cash already moved, or will move later."
    },
    {
     "t": "fig",
     "kind": "grid",
     "items": [
      {
       "icon": "⏳",
       "label": "Prepaid expense",
       "note": "paid first, used later"
      },
      {
       "icon": "🎟️",
       "label": "Unearned revenue",
       "note": "cash first, earned later"
      },
      {
       "icon": "🛠️",
       "label": "Depreciation",
       "note": "spread an asset’s cost"
      },
      {
       "icon": "📦",
       "label": "Supplies used",
       "note": "count what is left"
      },
      {
       "icon": "🧑‍🍳",
       "label": "Accrued expense",
       "note": "used now, paid later"
      },
      {
       "icon": "🏦",
       "label": "Accrued interest",
       "note": "the loan clock ticks"
      }
     ],
     "caption": "Six kinds of month-end adjustments, all present at the cart."
    },
    {
     "t": "h",
     "text": "A1. Insurance used"
    },
    {
     "t": "example",
     "title": "One month of a three-month policy",
     "text": "Rosa paid $1,800 for three months. One month has passed: $1,800 ÷ 3 = $600 is used.\n\nDr Insurance expense 600\n   Cr Prepaid insurance 600\n\nPrepaid insurance drops to $1,200, the value of April and May coverage."
    },
    {
     "t": "fig",
     "kind": "timeline",
     "events": [
      {
       "when": "Mar 2",
       "label": "Pay $1,800 upfront"
      },
      {
       "when": "Mar 31",
       "label": "Expense $600"
      },
      {
       "when": "Apr 30",
       "label": "Expense $600"
      },
      {
       "when": "May 31",
       "label": "Expense $600, asset gone"
      }
     ],
     "caption": "A prepaid asset becomes expense month by month."
    },
    {
     "t": "h",
     "text": "A2. Depreciation of the cart"
    },
    {
     "t": "example",
     "title": "Straight-line, five years, no salvage",
     "text": "The cart cost $12,000. Rosa expects to use it for 5 years (60 months) and to scrap it at the end.\n\n$12,000 ÷ 60 months = $200 per month.\n\nDr Depreciation expense 200\n   Cr Accumulated depreciation 200\n\nWe do not reduce the Equipment account directly. Accumulated depreciation is a **contra-asset**: it sits under Equipment with a credit balance, so readers can see both the original cost and how much has been used."
    },
    {
     "t": "term",
     "word": "Contra-asset",
     "def": "An account that is paired with an asset and carries the opposite (credit) balance, reducing the asset’s net value. Examples: accumulated depreciation, allowance for credit losses."
    },
    {
     "t": "h",
     "text": "A3. Supplies used"
    },
    {
     "t": "example",
     "title": "Count what is left",
     "text": "On March 31, Rosa counts the shelves at the commissary: beans, milk, pastries and cups worth $700 remain.\n\nSupplies used = what she had − what is left = $2,400 − $700 = $1,700.\n\nDr Cost of supplies used 1,700\n   Cr Supplies 1,700\n\nThis is her cost of goods sold: the direct cost of the coffee she poured. A physical count is the only way to know it; the system cannot see the spilled milk."
    },
    {
     "t": "h",
     "text": "A4. Wages earned but not yet paid"
    },
    {
     "t": "example",
     "title": "The second half of March",
     "text": "The barista worked March 16 to 31 and earned $1,600. Payday is April 1.\n\nDr Wage expense 1,600\n   Cr Wages payable 1,600\n\nThe work happened in March, so the cost belongs to March. Without this entry, March would look $1,600 more profitable than it was, and April would look worse."
    },
    {
     "t": "h",
     "text": "A5. Interest on the bank note"
    },
    {
     "t": "example",
     "title": "Interest accrues daily",
     "text": "The $8,000 note carries 6% annual interest, paid quarterly.\n\n$8,000 × 6% × 1/12 = $40 for March.\n\nDr Interest expense 40\n   Cr Interest payable 40"
    },
    {
     "t": "h",
     "text": "A6. Gift cards redeemed"
    },
    {
     "t": "example",
     "title": "Earning the unearned",
     "text": "Point-of-sale data shows customers used $250 of the $600 in gift cards during March.\n\nDr Unearned revenue 250\n   Cr Sales revenue 250\n\nThe remaining $350 stays a liability until it is redeemed. (Under ASC 606, if history showed some cards are never used, Rosa could estimate that “breakage” and recognize it in proportion to redemptions. We keep it simple here.)"
    },
    {
     "t": "fig",
     "kind": "bars",
     "data": [
      {
       "label": "Supplies used",
       "value": 1700,
       "highlight": true
      },
      {
       "label": "Accrued wages",
       "value": 1600,
       "highlight": true
      },
      {
       "label": "Insurance",
       "value": 600
      },
      {
       "label": "Gift cards",
       "value": 250
      },
      {
       "label": "Depreciation",
       "value": 200
      },
      {
       "label": "Interest",
       "value": 40
      }
     ],
     "unit": "$",
     "caption": "March adjustments by size: the two biggest are the easiest to forget."
    },
    {
     "t": "p",
     "text": "Add it up. The adjustments raise expenses by $1,700 + $1,600 + $600 + $200 + $40 = **$4,140** and raise revenue by **$250**. Without them, Rosa’s March profit would be overstated by $3,890. For a business with $11,250 of revenue, that is not a rounding difference. It is the difference between a good month and a great-looking lie."
    },
    {
     "t": "h",
     "text": "The adjusted trial balance"
    },
    {
     "t": "p",
     "text": "After posting the six adjustments, the debit column holds: cash 20,300; receivable 1,200; supplies 700; prepaid insurance 1,200; equipment 12,000; dividends 500; supplies used 1,700; wages 3,100; rent 800; insurance 600; depreciation 200; interest 40. Total **$42,340**."
    },
    {
     "t": "p",
     "text": "The credit column holds: accumulated depreciation 200; accounts payable 900; wages payable 1,600; interest payable 40; unearned revenue 350; notes payable 8,000; common stock 20,000; sales revenue 11,250. Total **$42,340**. Balanced again, and now it is also true."
    },
    {
     "t": "check",
     "q": "Why did the trial balance total grow from $40,500 to $42,340?",
     "a": "Because three adjustments created new balances on both sides at once: accrued wages ($1,600 of expense and $1,600 of payable), depreciation ($200 of expense and $200 of accumulated depreciation) and interest ($40 each side). The supplies, insurance and gift card adjustments only moved amounts between accounts on the same side, so they did not change the totals. Growth: 1,600 + 200 + 40 = $1,840, and 40,500 + 1,840 = 42,340."
    },
    {
     "t": "exercise",
     "title": "April’s adjustments",
     "prompt": "Fast forward to April 30. Write Rosa’s adjusting entries using these facts.",
     "steps": [
      "Insurance: the same policy continues.",
      "The cart is depreciated as in March (ignore the frother).",
      "Supplies: $700 at the start of April, $2,000 bought during April, $500 counted on April 30.",
      "The barista earned $900 for April 26 to 30, to be paid May 1.",
      "Customers redeemed $200 of gift cards in April."
     ],
     "answer": "1) Insurance: Dr Insurance expense 600 / Cr Prepaid insurance 600. Prepaid falls to $600 (May only).\n\n2) Depreciation: Dr Depreciation expense 200 / Cr Accumulated depreciation 200. Accumulated depreciation is now $400.\n\n3) Supplies used = beginning 700 + purchases 2,000 − ending 500 = $2,200.\nDr Cost of supplies used 2,200 / Cr Supplies 2,200.\n\n4) Accrued wages: Dr Wage expense 900 / Cr Wages payable 900.\n(The March accrual of $1,600 was settled on April 1 with Dr Wages payable 1,600 / Cr Cash 1,600, so it does not hit April expense again.)\n\n5) Gift cards: Dr Unearned revenue 200 / Cr Sales revenue 200. Unearned revenue falls from $350 to $150, plus any new cards sold in April.\n\nAlso remember interest: Dr Interest expense 40 / Cr Interest payable 40, since the note is still outstanding."
    },
    {
     "t": "chapter",
     "title": "Building the statements",
     "minutes": 6
    },
    {
     "t": "p",
     "text": "The adjusted trial balance is the raw material. Now we sort it into four statements, always in the same order, because each one feeds the next."
    },
    {
     "t": "fig",
     "kind": "flow",
     "steps": [
      {
       "label": "Income statement",
       "icon": "📈",
       "note": "net income $4,810"
      },
      {
       "label": "Retained earnings",
       "icon": "🧺",
       "note": "+ NI − dividends"
      },
      {
       "label": "Balance sheet",
       "icon": "⚖️",
       "note": "equity $24,310"
      },
      {
       "label": "Cash flow",
       "icon": "💧",
       "note": "explains cash $20,300"
      }
     ],
     "caption": "The order matters: each statement hands a number to the next."
    },
    {
     "t": "h",
     "text": "1. Income statement: did the cart make money?"
    },
    {
     "t": "fig",
     "kind": "table",
     "head": [
      "Income statement, March",
      "$"
     ],
     "rows": [
      [
       "Sales revenue",
       "11,250"
      ],
      [
       "Cost of supplies used",
       "(1,700)"
      ],
      [
       "Gross profit",
       "9,550"
      ],
      [
       "Wages",
       "(3,100)"
      ],
      [
       "Rent, insurance, depreciation",
       "(1,600)"
      ],
      [
       "Operating income",
       "4,850"
      ],
      [
       "Interest expense",
       "(40)"
      ],
      [
       "Net income",
       "4,810"
      ]
     ],
     "caption": "Platform Coffee earned $4,810 in its first month (before taxes)."
    },
    {
     "t": "p",
     "text": "Read it like a story. Each $100 of sales left $85 after paying for the coffee itself: an 85% gross margin, typical for coffee. Then labor and overhead took another $42. Rosa kept about $43 of every $100 as operating profit. That is a strong first month, helped by the fact that Rosa herself takes no salary yet."
    },
    {
     "t": "warn",
     "text": "Rosa’s own labor is not in these numbers. A bank will mentally deduct a fair owner salary before judging the cart. When you review a small business, always ask who is working for free."
    },
    {
     "t": "h",
     "text": "2. Statement of retained earnings: where did the profit go?"
    },
    {
     "t": "fig",
     "kind": "equation",
     "parts": [
      "RE $0",
      "+",
      "NI $4,810",
      "−",
      "Div. $500",
      "=",
      "RE $4,310"
     ],
     "caption": "Retained earnings is the running total of profits kept in the business."
    },
    {
     "t": "p",
     "text": "Notice that dividends appear here, not on the income statement. This is the statement that links performance (income) to position (balance sheet)."
    },
    {
     "t": "h",
     "text": "3. Balance sheet: what does the cart own and owe?"
    },
    {
     "t": "p",
     "text": "Assets. Current assets: cash 20,300, accounts receivable 1,200, supplies 700, prepaid insurance 1,200, for a total of $23,400. Then the cart: equipment 12,000 less accumulated depreciation 200 equals 11,800. **Total assets: $35,200.**"
    },
    {
     "t": "p",
     "text": "Liabilities. Current: accounts payable 900, wages payable 1,600, interest payable 40, unearned revenue 350, for a total of $2,890. Long-term: notes payable 8,000. Total liabilities $10,890. Equity: common stock 20,000 plus retained earnings 4,310 equals $24,310. **Total liabilities and equity: $35,200.**"
    },
    {
     "t": "fig",
     "kind": "stack",
     "columns": [
      {
       "title": "Assets",
       "blocks": [
        {
         "label": "Cash",
         "value": 20300
        },
        {
         "label": "Other current",
         "value": 3100
        },
        {
         "label": "Cart, net",
         "value": 11800
        }
       ]
      },
      {
       "title": "Liab. + Equity",
       "blocks": [
        {
         "label": "Current liab.",
         "value": 2890
        },
        {
         "label": "Bank note",
         "value": 8000
        },
        {
         "label": "Equity",
         "value": 24310
        }
       ]
      }
     ],
     "unit": "$",
     "caption": "Both towers reach $35,200. The equation holds."
    },
    {
     "t": "p",
     "text": "A precise point: the bank note requires principal payments over three years, so strictly the portion due in the next twelve months should be shown as a current liability. We keep it as one line because we do not have the payment schedule yet. In a real file, you would split it."
    },
    {
     "t": "h",
     "text": "4. Cash flow statement: why is cash $20,300?"
    },
    {
     "t": "p",
     "text": "Profit was $4,810, yet cash from running the cart was a different number. The cash flow statement explains the gap, in three sections: operating, investing and financing. We use the **indirect method**: start from net income and undo everything that was not cash."
    },
    {
     "t": "fig",
     "kind": "table",
     "head": [
      "Cash flow, March",
      "$"
     ],
     "rows": [
      [
       "Net income",
       "4,810"
      ],
      [
       "+ Depreciation",
       "200"
      ],
      [
       "− Increase in A/R, supplies, prepaid",
       "(3,100)"
      ],
      [
       "+ Increase in payables and unearned",
       "2,890"
      ],
      [
       "Operating cash flow",
       "4,800"
      ],
      [
       "Investing: cart down payment",
       "(4,000)"
      ],
      [
       "Financing: stock issued less dividend",
       "19,500"
      ],
      [
       "Change in cash",
       "20,300"
      ]
     ],
     "caption": "Every dollar of the $20,300 is explained."
    },
    {
     "t": "p",
     "text": "Check it with the **direct method**, which simply lists the cash itself. Customers paid $9,800 for coffee plus $600 for gift cards: $10,400 in. Cash out for operations: supplier 1,500, wages 1,500, rent 800, insurance 1,800, for $5,600. Net: **$4,800**. Same answer, as it must be."
    },
    {
     "t": "p",
     "text": "One more disclosure. The cart cost $12,000, but only $4,000 was cash. The $8,000 financed by the bank note is a **noncash investing and financing activity**. It does not appear in the three sections, but it must be disclosed (ASC 230), so the reader knows the business took on debt to buy an asset."
    },
    {
     "t": "fig",
     "kind": "compare",
     "left": {
      "title": "Net income $4,810",
      "icon": "📈",
      "items": [
       "Counts the $1,200 catering invoice",
       "Deducts $1,600 unpaid wages",
       "Deducts $200 depreciation",
       "Ignores the $500 dividend"
      ]
     },
     "right": {
      "title": "Operating cash $4,800",
      "icon": "💵",
      "items": [
       "Counts only cash received",
       "Counts only wages actually paid",
       "Counts gift card cash when sold",
       "Pays insurance for 3 months now"
      ]
     },
     "caption": "Two honest numbers that answer two different questions."
    },
    {
     "t": "exercise",
     "title": "Reconcile profit to cash yourself",
     "prompt": "Without looking back at the table, rebuild Rosa’s operating cash flow with the indirect method using only these balances. All opening balances were zero.",
     "steps": [
      "Net income 4,810; depreciation 200.",
      "End of March: receivable 1,200; supplies 700; prepaid insurance 1,200.",
      "End of March: payable 900; wages payable 1,600; interest payable 40; unearned revenue 350."
     ],
     "answer": "Start: net income 4,810.\nAdd back noncash expense: depreciation +200 → 5,010.\n\nIncreases in operating assets use cash (subtract):\nreceivable −1,200, supplies −700, prepaid −1,200, total −3,100 → 1,910.\n\nIncreases in operating liabilities provide cash (add):\npayable +900, wages payable +1,600, interest payable +40, unearned +350, total +2,890 → 4,800.\n\nOperating cash flow = $4,800.\n\nIntuition: Rosa earned revenue she has not collected (the receivable), bought supplies and insurance she has not used (supplies and prepaid), but also used services she has not paid for (wages, interest, part of the supplier bill) and collected cash for coffee not yet poured (gift cards). The two effects almost cancel this month. That is a coincidence, not a rule."
    },
    {
     "t": "chapter",
     "title": "Close the books and read the month",
     "minutes": 3
    },
    {
     "t": "p",
     "text": "The last step of the cycle resets the scoreboard. Revenue, expenses and dividends are **temporary accounts**: they measure one period only. At month end (or, for many small businesses, only at year end) their balances are moved into retained earnings, so April starts at zero."
    },
    {
     "t": "example",
     "title": "The closing entries",
     "text": "1) Close revenue and expenses to retained earnings:\nDr Sales revenue 11,250\n   Cr Cost of supplies used 1,700\n   Cr Wage expense 3,100\n   Cr Rent expense 800\n   Cr Insurance expense 600\n   Cr Depreciation expense 200\n   Cr Interest expense 40\n   Cr Retained earnings 4,810\n\n2) Close dividends:\nDr Retained earnings 500\n   Cr Dividends 500\n\nRetained earnings now shows $4,310, exactly the number on the balance sheet. Many systems use an Income Summary account in between; the result is the same."
    },
    {
     "t": "p",
     "text": "After closing, only **permanent accounts** remain: assets, liabilities and equity. A post-closing trial balance lists them, with debits and credits of $35,400 each (total assets of $35,200 plus the $200 accumulated depreciation that sits on the credit side). It is the opening position for April."
    },
    {
     "t": "fig",
     "kind": "cycle",
     "steps": [
      "Record",
      "Post",
      "Trial balance",
      "Adjust",
      "Report",
      "Close"
     ],
     "center": "Every month",
     "caption": "The cycle restarts on April 1 with a clean scoreboard."
    },
    {
     "t": "h",
     "text": "What would you tell Rosa?"
    },
    {
     "t": "fig",
     "kind": "donut",
     "data": [
      {
       "label": "Supplies used",
       "value": 1700
      },
      {
       "label": "Wages",
       "value": 3100
      },
      {
       "label": "Rent, ins., dep.",
       "value": 1600
      },
      {
       "label": "Interest",
       "value": 40
      },
      {
       "label": "Profit",
       "value": 4810
      }
     ],
     "center": "$11,250",
     "caption": "Where each sales dollar went in March."
    },
    {
     "t": "list",
     "items": [
      "**Profitable from month one:** 43% operating margin, before paying herself.",
      "**Labor is the biggest cost:** wages ate 28% of revenue; scheduling is her main lever.",
      "**Liquidity is fine:** current assets of $23,400 cover current liabilities of $2,890 about 8 times.",
      "**Watch the gift cards:** $350 is coffee she still owes; it is a liability, not a cushion.",
      "**Collect the law firm:** $1,200 of profit is still only a promise."
     ],
     "ordered": false
    },
    {
     "t": "exercise",
     "title": "Close and check",
     "prompt": "Using Rosa’s adjusted balances, answer three quick checks a reviewer would make before signing off on March.",
     "steps": [
      "What is retained earnings after closing?",
      "What is the total of the post-closing trial balance?",
      "Which accounts have a zero balance after closing?"
     ],
     "answer": "1) Retained earnings = 0 + net income 4,810 − dividends 500 = $4,310.\n\n2) Post-closing trial balance. Debits: cash 20,300 + receivable 1,200 + supplies 700 + prepaid 1,200 + equipment 12,000 = $35,400. Credits: accumulated depreciation 200 + payable 900 + wages payable 1,600 + interest payable 40 + unearned 350 + note 8,000 + common stock 20,000 + retained earnings 4,310 = $35,400. Balanced.\n\n3) Zero after closing: sales revenue, all six expense accounts, and dividends. They are temporary accounts and start April fresh."
    },
    {
     "t": "h",
     "text": "The reviewer’s last look"
    },
    {
     "t": "p",
     "text": "Before a senior signs off, three quick tests catch most problems. First, **reasonableness**: does each expense look like a normal month? Rent of $800 is the contract amount; wages of $3,100 match two pay periods. Second, **tie-outs**: cash in the ledger must equal the bank statement after reconciling items, and the receivable must equal the open invoice list. Third, **cutoff**: anything delivered or earned on March 31 belongs to March; anything on April 1 belongs to April."
    },
    {
     "t": "check",
     "q": "The supplier delivers $300 of milk on March 31, but the invoice arrives on April 3. Which month gets the cost, and what entry is needed on March 31?",
     "a": "March gets the asset, because the goods arrived in March. Record Dr Supplies 300, Cr Accounts payable 300 (often as an accrual for goods received not invoiced). The supplies count on March 31 should include that milk; if it was all used, the cost flows into March’s cost of supplies used."
    },
    {
     "t": "p",
     "text": "You have now run the full cycle: eleven transactions, six adjustments, four statements and two closing entries. Every month-end close you will ever review, however large, is this same movie with more actors."
    },
    {
     "t": "tip",
     "text": "Next time you review a junior’s close, ask for the adjusting entries first. The routine entries are usually right; the truth of the month lives in the adjustments."
    }
   ],
   "takeaways": [
    "Journal records by date, ledger groups by account, trial balance proves debits equal credits.",
    "A balanced trial balance can still be wrong: wrong accounts and missing entries pass the test.",
    "Adjusting entries make the period true and almost never touch cash.",
    "Statements flow in order: net income feeds retained earnings, which feeds the balance sheet."
   ],
   "quiz": [
    {
     "q": "Rosa invests $20,000 of her own money in Platform Coffee. What is the entry?",
     "options": [
      "Dr Cash, Cr Sales revenue",
      "Dr Cash, Cr Common stock",
      "Dr Common stock, Cr Cash",
      "Dr Cash, Cr Notes payable"
     ],
     "answer": 1,
     "why": "Owner contributions create equity, not revenue. The business gains cash and the owner gains a claim recorded in common stock."
    },
    {
     "q": "Customers buy $600 of gift cards. On the day of sale, the $600 is:",
     "options": [
      "Sales revenue",
      "A reduction of expenses",
      "A liability called unearned revenue",
      "Part of retained earnings"
     ],
     "answer": 2,
     "why": "The cart owes coffee in the future. Until the cards are redeemed, the cash received is a liability."
    },
    {
     "q": "A trial balance has equal debit and credit totals. Which error could still be hiding?",
     "options": [
      "A debit posted twice with no credit",
      "A debit of $1,500 typed as $1,050",
      "Rent recorded as Equipment instead of Rent expense",
      "A credit left out of one entry"
     ],
     "answer": 2,
     "why": "Posting to the wrong account on the correct side keeps the totals equal. The other errors make the columns differ."
    },
    {
     "q": "Rosa paid $1,800 on March 2 for three months of insurance. What is the March 31 adjustment?",
     "options": [
      "Dr Insurance expense 1,800, Cr Cash 1,800",
      "Dr Prepaid insurance 600, Cr Insurance expense 600",
      "No entry until the policy ends",
      "Dr Insurance expense 600, Cr Prepaid insurance 600"
     ],
     "answer": 3,
     "why": "One month of coverage was used, so $600 moves from the prepaid asset to expense."
    },
    {
     "q": "Supplies started at $2,400 and $700 remain at month end. Cost of supplies used is:",
     "options": [
      "$1,700",
      "$700",
      "$2,400",
      "$3,100"
     ],
     "answer": 0,
     "why": "Used = available − left over = $2,400 − $700 = $1,700."
    },
    {
     "q": "Why is the $500 paid to Rosa not on the income statement?",
     "options": [
      "Because it was paid in cash",
      "Because dividends are distributions to owners, not costs of operating",
      "Because it is too small to matter",
      "Because dividends are only recorded at year end"
     ],
     "answer": 1,
     "why": "Dividends reduce retained earnings directly. They are a return to owners, not an expense of earning revenue."
    },
    {
     "q": "Net income was $4,810. Receivables rose $1,200 and nothing else changed. Operating cash flow is:",
     "options": [
      "$6,010",
      "$4,810",
      "$3,610",
      "$1,200"
     ],
     "answer": 2,
     "why": "An increase in receivables means revenue was recorded but not collected, so subtract it: 4,810 − 1,200 = 3,610."
    },
    {
     "q": "Which accounts are closed to retained earnings at period end?",
     "options": [
      "Revenue, expenses and dividends",
      "All assets and liabilities",
      "Cash and common stock",
      "Only expenses"
     ],
     "answer": 0,
     "why": "Temporary accounts measure a single period. Closing them moves the period’s result into retained earnings and resets them to zero."
    }
   ]
  }
 ]
});
