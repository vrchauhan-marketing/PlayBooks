PLAYBOOKS.push({
  slug: "gloriafood-migration",
  volume: "01",
  title: "The 2026 Food Ordering Business Playbook",
  spineTitle: "Food Ordering Business Playbook",
  subtitle: "Practical Guide for Founders and Resellers — Architecture, Unit Economics, GloriaFood Migration & Launch",
  author: "Field Guide No. 01",
  year: "2026",

  // Look & feel: GloriaFood-inspired slate + orange, Open Sans
  skin: "gloriafood",
  color: "#333c44",        // slate (GloriaFood navbar / notice bar)
  ink: "#ffffff",
  accent: "#f08b18",       // GloriaFood orange
  accentDark: "#c76a05",   // orange dark enough for small text on white paper
  paper: "#ffffff",
  paperInk: "#4c4c4c",
  headingInk: "#333c44",
  font: "'Open Sans', 'Helvetica Neue', Arial, sans-serif",
  pattern: "dots",
  eyebrow: "Field Guide No. 01 · October 2026",
  notice: "<b>Migration warning:</b> Oracle publishes 31 March 2027 while GloriaFood publishes 30 April 2027. Plan to be independent before the earlier date and confirm your account notice. [1–2]",

  // Photos: Unsplash (free licence), hot-linked
  coverImage: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=900&q=70&auto=format&fit=crop",
  heroImage:  "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=2000&q=70&auto=format&fit=crop",
  chapterImages: [
    "https://images.unsplash.com/photo-1552566626-52f8b828add9?w=900&q=70&auto=format&fit=crop", // Ch 1: One Page Summary
    "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=900&q=70&auto=format&fit=crop", // Ch 2: 1 The Opportunity
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=900&q=70&auto=format&fit=crop", // Ch 3: 2 The Most Important Decision
    "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=900&q=70&auto=format&fit=crop", // Ch 4: 3 How You Make Money
    "https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=900&q=70&auto=format&fit=crop", // Ch 5: 4 The Order Journey
    "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=900&q=70&auto=format&fit=crop", // Ch 6: 5 Building Blocks
    "https://images.unsplash.com/photo-1556742044-3c52d6e88c62?w=900&q=70&auto=format&fit=crop", // Ch 7: 6 Payments Made Simple
    "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=900&q=70&auto=format&fit=crop", // Ch 8: 7 Build Versus Buy
    "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=900&q=70&auto=format&fit=crop", // Ch 9: 8 Costs and Scope
    "https://images.unsplash.com/photo-1590846406792-0adc7f938f1d?w=900&q=70&auto=format&fit=crop", // Ch 10: 9 Migration Playbook
    "https://images.unsplash.com/photo-1450133064473-71024230f91b?w=900&q=70&auto=format&fit=crop", // Ch 11: 10 Trust and Regional Rules
    "https://images.unsplash.com/photo-1584438784894-089d6a62b8fa?w=900&q=70&auto=format&fit=crop", // Ch 12: 11 What Can Go Wrong
    "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=900&q=70&auto=format&fit=crop", // Ch 13: 12 Checklists
    "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=900&q=70&auto=format&fit=crop", // Ch 14: 13 Experience Relevant
    "https://images.unsplash.com/photo-1556740758-90de374c12ad?w=900&q=70&auto=format&fit=crop", // Ch 15: 14 Book a Scope Call
    "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?w=900&q=70&auto=format&fit=crop", // Ch 16: Reference Register
  ],
  credits: "Written by EnactOn Technologies. Photography via Unsplash. Original diagrams and models by EnactOn.",
  legal: [
    "GloriaFood and Oracle are trademarks or registered trademarks of Oracle and/or its affiliates. Uber Eats, Stripe, Razorpay, UPI, FSSAI, CBIC, HMRC, and other cited entities are trademarks or registered trademarks of their respective owners. This playbook is an independent publication for operators.",
  ],

  description: [
    "Build a business around a clear customer and a reliable order journey. A direct ordering channel lets a restaurant accept orders through its own website or app, providing control over the menu, repeat purchases and customer communication.",
    "This 2026 master playbook delivers the exact operational blueprint: business models, unit economics, the click-to-kitchen order journey, connected payments, build vs buy total cost of ownership, GloriaFood migration workflow, regional regulatory rules (India, UK, EU, US), and launch acceptance checklists.",
  ],

  content: `# One Page Summary: The 2026 Food Ordering Business Playbook

*ENACTON • ONE PAGE SUMMARY • 8 OCTOBER 2026*

**The 2026 Food Ordering Business Playbook**  
*Practical Guide for Founders and Resellers*

Build a business around a clear customer and a reliable order journey. A restaurant software business and a delivery marketplace may share screens, but they need different budgets, teams and routes to profit.

| Your decision | Practical starting point |
|---|---|
| **Who pays you** | Sell software to restaurants, or earn from orders across a marketplace. Pick one primary model before choosing features. |
| **Where to start** | One market, one restaurant segment and 2–3 pilot restaurants. A mobile-friendly ordering website is usually enough to test demand. |
| **What to prove** | Restaurants will pay; staff can fulfil orders; money reconciles; support does not consume your margin. |
| **What to budget** | Implementation plus 36 months of software costs, sales, support, payment fees and any delivery operation. |
| **What to own** | Contracts, domains, customer permissions, exportable data and a workable exit. Source code adds control only when it can be deployed. |
| **When to expand** | After the pilot passes payment, kitchen, support and commercial checks. More restaurants magnify weak processes. |

> **Budget orientation:** For planning only, allow roughly $10,000–$40,000 for a focused source-code ordering foundation and $40,000–$120,000 for a limited custom ordering build. A marketplace pilot can require $60,000–$200,000+ in software alone. These are scope scenarios, not surveyed market prices or EnactOn quotes.

> **Migration warning:** Oracle publishes 31 March 2027 while GloriaFood publishes 30 April 2027. Plan to be independent before the earlier date and confirm your account notice. [1–2]

*Read the business model and economics first (pages 2–5), then operations and money flows (6–11), budgets and launch (12–17), checks and partner proof (18–23). Sources and evidence limits are on pages 24–25. All amounts are USD unless stated. Planning estimates are explicitly labelled; [VERIFY] marks unresolved local applicability.*

# 1 The Opportunity: Why Restaurants Want Their Own Channel

A direct ordering channel lets a restaurant accept orders through its own website or app. It can give the restaurant more control over the menu, repeat purchases and customer communication. It still needs a way to attract diners and fulfil each order.

## Commission is only one part of the calculation

**Verified regional example:** Uber Eats lists US marketplace fees of 20%–30%, with different pricing for self-delivery and pickup. The Plus plan also has an additional fee for Uber One orders. These are US published terms, not global rates or a quote for any restaurant. [3]

Marketplaces provide discovery and can provide delivery. Moving an order to a direct channel removes neither of those jobs. Compare the cost of payment processing, software, advertising, discounts, customer service and delivery before claiming a saving.

<figure class="illo">
  <img src="assets/gloriafood/phone-ordering.svg" alt="Direct ordering mobile flow">
  <figcaption>Direct ordering lets a restaurant take orders through its own website or app, retaining repeat diners.</figcaption>
</figure>

| Restaurant problem | Opportunity for your business | Proof to collect |
|---|---|---|
| **Repeat diners still order through a marketplace** | A direct reordering link and a clear collection journey | Compare contribution on comparable direct and marketplace orders. |
| **Menus and hours are hard to maintain** | A managed setup and menu maintenance service | Time a real menu change and confirm it reaches checkout. |
| **No clear view of repeat customers** | Reports and permitted customer communication | Check consent, export rights and repeat-order measurement. |
| **Vendor changes threaten service** | Migration and an operational exit plan | Restore a backup and launch on accounts the operator controls. |

## Is this a good business for you

- A software model fits an agency with restaurant relationships and the ability to provide dependable support.
- A marketplace fits an operator with a credible source of diners and a workable local delivery plan.
- Start with a narrow problem: for example, collection orders for a restaurant group or migration support for an existing reseller portfolio.

> **Recommendation, not a market forecast:** interview owners and observe a busy service before commissioning software. "Owning customer data" means lawful access and control, not unlimited permission to market to people.

# 2 The Most Important Decision: Pick the Business Model First

White-label means selling a product under your own brand. SaaS, or software as a service, means customers pay to use hosted software. Marketplace means diners use one service to discover and order from many restaurants. A hybrid combines restaurant-branded ordering with a shared marketplace.

| Decision | Ordering SaaS | Marketplace | Hybrid |
|---|---|---|---|
| **Paying customer** | Restaurant or restaurant group | Restaurants and sometimes diners | Restaurants plus marketplace users |
| **How you earn** | Subscription, setup, add-ons or order fees | Commission, customer fees and optional promotion | Separate software and marketplace charges |
| **Upfront cost** | Lowest for hosted resale; higher for owned code | Higher software scope and operating capital | Usually highest combined scope |
| **Difficulty** | Sales, onboarding, reliability and support | Supply, demand, dispatch and service recovery | Both operating models plus attribution |
| **First revenue\*** | 2–6 weeks hosted; 6–12 weeks source-code pilot | 12–24+ weeks for a constrained pilot | 16–32+ weeks if built together |
| **Main risk** | Support cost and restaurant churn | Orders lose money or demand is too costly | Customers and fees become confusing |

*\*Planning estimates from readiness to first paid pilot, assuming engaged restaurants and available payment accounts. A custom SaaS build can take 12–24+ weeks. These are not measured industry averages; selling can start earlier and revenue is not guaranteed.*

## Use your existing advantage

- If restaurants already trust you, start by solving their ordering problem and charge for the service.
- If you can reach diners in a specific area, test a small marketplace with restricted hours and delivery zones.
- Add a hybrid model only when the first model works. Decide which channel owns each order and which fee applies.

> **Write this before building:** *"We serve [buyer] in [market], solve [problem], charge [method], and are responsible for [support and delivery scope]."* If the team cannot agree on this sentence, the feature list is premature.

# 3 Revenue Models & Unit Economics

## How you make money: Choose a revenue model you can support

Price the work you actually perform. A low subscription can become expensive to deliver if it includes unlimited menu edits, installation visits and evening support.

| Revenue method | Why it can work | What can go wrong |
|---|---|---|
| **Monthly subscription** | Predictable restaurant bill and recurring revenue | Low-volume restaurants may cancel; support must fit inside the price. |
| **Per-order commission** | Revenue grows with restaurant sales | Define the base: food, tax, tips, delivery and discounts must not be ambiguous. |
| **Per-order service fee** | Simple relationship between usage and price | Small baskets feel the fee more. Disclose the full payable amount before purchase. |
| **Setup fee** | Pays for migration, training and hardware setup | It must cover real work; avoid hiding recurring charges in the sales conversation. |
| **Add-ons** | Charge for optional apps, campaigns, integrations or managed services | Too many extras make pricing hard to understand and support. |
| **Reseller tiers** | Wholesale bands let agencies earn a margin | A cheap tier with high support needs can lose money. Define who supports whom. |

### Package the service before quoting

- List what onboarding includes: menu size, revisions, languages, hardware setup and training sessions.
- Separate recurring software access from payment processing and message usage.
- State whether the restaurant or platform pays for customer promotions.
- Define cancellation, partial refunds and fee reversals in the contract.
- Set an escalation route from restaurant to reseller to platform support.

> **Planning exercise:** test a subscription band of $50–$150 per location per month against actual service costs and local willingness to pay. This is an illustrative test band, not a recommended market price. Hardware, payment fees and unusually complex support need separate treatment.  
> A reseller tier should reward reduced delivery cost or committed volume. It should not assume that every signed restaurant will become an active paying restaurant.

## Revenue is not profit: Check the economics before the build

Contribution is revenue left after costs that rise with each restaurant or order. It pays fixed costs such as your core team. Break-even is the point at which contribution covers those fixed costs.

**Software example, illustrative only:** $100 monthly revenue per restaurant minus $40 in variable support and usage costs leaves $60 contribution. With $3,000 monthly fixed costs, 50 paying restaurants cover those costs. Setup income, taxes, finance and owner profit are excluded.

| Active Locations | Total Contribution | Fixed Costs ($3,000/month) Status |
|---|---|---|
| **40 restaurants** | $2,400 | -$600 (Under break-even) |
| **45 restaurants** | $2,700 | -$300 (Under break-even) |
| **50 restaurants** | **$3,000** | **Break-even point** |
| **55 restaurants** | $3,300 | +$300 (Profitable) |

### Marketplace example per order

| Marketplace Item | Illustrative amount |
|---|---|
| **Food subtotal and platform commission** | $25 subtotal × 15% = $3.75 revenue |
| **Customer delivery and service fees** | $3.00 revenue |
| **Courier, processing, support and promotion** | $4.00 + $1.00 + $0.75 + $1.00 = $6.75 cost |
| **Contribution before fixed costs** | **$6.75 revenue − $6.75 cost = $0** |

The $25 food sale is not all platform revenue. In this simplified example, removing a $1 promotion creates $1 contribution only if orders still arrive. A larger delivery radius can erase that gain. Tax, tips, refunds and the precise fee base require separate modelling.

- Track customer acquisition cost: the sales and marketing spend needed to gain a paying customer.
- Track restaurant churn: the share of paying restaurants that leave during a period.
- Test a downside case with fewer orders, higher support demand and higher courier cost.

> *All values on this page are invented teaching assumptions, not EnactOn results, provider fees or forecasts. Replace every input with evidence from your pilot.*

# 4 The Order Journey: Follow One Order from Click to Kitchen

An order is a sequence of confirmed events. A successful payment does not prove that the kitchen has seen the ticket. Design and test each handoff separately.

<div class="timeline">
  <div class="tl-item"><span class="tl-date">Step 1</span><span class="tl-label"><b>Choose meal and fulfilment:</b> Prices and service area checked</span></div>
  <div class="tl-item"><span class="tl-date">Step 2</span><span class="tl-label"><b>Create order and verify payment:</b> Cash stays marked unpaid</span></div>
  <div class="tl-item tl-key"><span class="tl-date">Step 3</span><span class="tl-label"><b>Restaurant accepts:</b> Acceptance is separate from payment</span></div>
  <div class="tl-item"><span class="tl-date">Step 4</span><span class="tl-label"><b>Kitchen prepares:</b> Print or display acknowledged</span></div>
  <div class="tl-item tl-end"><span class="tl-date">Step 5</span><span class="tl-label"><b>Collect or deliver:</b> Complete and reconcile</span></div>
</div>

### Failure and Recovery Events

- **Reject or time out:** Cancel or refund; notify customer.
- **Printer failure:** Alert staff; recover ticket once.

| Event | What the customer should know |
|---|---|
| **Payment succeeded; restaurant has not accepted** | Order received and awaiting restaurant confirmation. Do not promise preparation yet. |
| **Restaurant rejects or does not respond** | Explain the cancellation and whether a refund has been initiated. |
| **Restaurant accepts and food is prepared** | Show the promised collection or delivery window, then update it if delayed. |

Give every order one permanent identifier. Keep the payment, restaurant response, print attempt, refund and support record linked to it. If a system retries a message, the same order must not become a second meal or a second charge.

> **Recommended design:** agree the payment capture point and acceptance timeout with your provider and restaurants. Automatic cancellation and refund timing are implementation choices, not assumed EnactOn features.

# 5 Building Blocks & System Architecture

## Building blocks for customers and restaurants

Start with the channel customers can use immediately. A mobile-friendly website adapts to a phone screen. A native app is installed from an app store and adds release, maintenance and adoption work.

| What | Why it matters | What to get right |
|---|---|---|
| **Ordering website and optional app** | Lets diners browse, choose and buy | Quick loading, mobile checkout, clear delivery or collection choice and order tracking. |
| **Menu structure, options and modifiers** | Matches the food the kitchen can prepare | Single-choice groups, multi-choice add-ons, price modifiers, dietary tags and item descriptions. |
| **Timed opening and order scheduling** | Prevents orders when the kitchen is closed | Store hours, break times, holiday closures, lead times and pre-orders. |
| **Dine-in QR and table ordering** | Supports ordering from the table | Table identifiers, location verification, service fee or tip rules and clear staff notification. |
| **Customer accounts and guest checkout** | Reduces checkout friction | Fast guest checkout; customer accounts only when they speed reordering. |
| **Discounts and vouchers** | Encourages adoption or off-peak ordering | Minimum spend, expiry, usage caps and fraud rules. |

## Building blocks behind the counter: Operational controls

POS means point of sale: the software used to take or manage orders and payments at a business. An order-taking POS app does not automatically replace the restaurant's existing till, accounting or fiscal receipt system.

<figure class="illo">
  <img src="assets/gloriafood/tablet-order.svg" alt="Tablet order and kitchen printing">
  <figcaption>Behind-the-counter operational controls: order-taking app and kitchen printing.</figcaption>
</figure>

| What | Why it matters | What to get right |
|---|---|---|
| **Order-taking app and kitchen printing** | Staff need an unmistakable new-order alert | Accepted devices, sound, paper width, reconnects, duplicate protection and visible failures. |
| **Payments and payouts** | Customers pay; restaurants receive money | Approved account setup, fee calculations, bank settlement records and refunds. |
| **Delivery zones and drivers** | Restricts promises to what can be delivered | Zones, minimum spend, delivery fee, driver availability and failed-delivery handling. |
| **Email, SMS, WhatsApp and push** | Keeps staff and customers informed | Delivery status, fallback channel, costs and permission rules. Push is an app or browser alert. |
| **Reports** | Makes sales and exceptions visible | Separate gross sales, platform revenue, refunds, tips, tax and settled funds. |
| **Super-admin and reseller panels** | Lets your team and partners manage accounts | Roles, pricing plans, permitted support access and a record of important changes. |
| **Multi-tenancy** | Many restaurants use one platform safely | Keep each restaurant's records separate; test access through screens, reports and downloads. |

Multi-tenancy means one software system serves multiple businesses while keeping their data and permissions separate. A reseller should see only the restaurants assigned to it. Support access should be limited and recorded.

> **EnactOn thermal printer experience:** EnactOn reports printing Chinese and other non-Latin characters on thermal kitchen printers by turning tickets into images. The practical lesson: test your actual languages, printer model and connection. An image workaround still needs legibility, speed and paper-width checks. [E]  
> *Notification provider approval, WhatsApp templates and local messaging rules: [VERIFY] for the launch market and account. Do not assume every channel is automatically available.*

## How the pieces connect: A system architecture founders can read

System architecture is the map of how software parts connect. This is a recommended reference design, not a diagram of an existing EnactOn deployment.

- **Customer channels:** Web, optional apps, table QR
- **Restaurant tools:** Admin and order-taking POS
- **Operator tools:** Super-admin and reseller
- **Application and access rules:** Orders • menus • fees • tenant permissions
- **Database and files:** Orders, menus, images; tenant isolation
- **Reliable job queue:** Print jobs, alerts and safe retries
- **Payment provider:** Cards, verification, settlement  
*Monitoring, backups and audit records cover every layer. Provider updates return to the application through verified webhooks.*

| Term | Plain meaning and business purpose |
|---|---|
| **Database** | The organised store of orders, menus and account records. It must support recovery and prevent cross-restaurant access. |
| **Job queue** | A waiting list for background tasks. It lets printing and notifications retry without slowing checkout. |
| **API and webhook** | An API lets systems exchange instructions. A webhook is an automatic message about an event, such as a payment update. |
| **Monitoring and audit records** | Monitoring detects failure. Audit records show who changed a price, refunded an order or accessed an account. |

For a first release, a well-structured single application may be easier to operate than many separate services. Ask the builder how it prevents duplicate actions, restores lost data and handles the busiest service period. Those answers matter more than a long list of technologies.

# 6 Payments Made Simple & When Something Fails

## Payments made simple: Understand how the money moves

A payment gateway securely passes payment details into the payment system. A payment processor handles the transaction. A payout is money sent from the provider balance to a bank account. These are different events, so the order screen must not treat them as one.

| Money flow | How the platform earns | What you must decide |
|---|---|---|
| **Restaurant takes payment in its own account** | Invoice the restaurant for subscription or permitted usage fees | Who handles refunds and which payment records the platform can access. |
| **Provider routes funds to restaurant accounts** | An approved platform fee can be separated from the transaction | Account onboarding, fee liability, transfer timing and who covers a negative balance. |
| **Cash on collection or delivery** | Bill the restaurant separately or reconcile amounts collected | Who collected cash, how it is recorded and when platform fees become payable. |

### Connected payments are a product and a contract

Stripe Connect supports platform payment arrangements; one option is a destination charge, where a platform charge routes funds to a connected account. Razorpay Route supports splitting payments into linked accounts. Each restaurant still needs the required provider onboarding. [4–5]

KYC, or know your customer, is the provider's identity and business verification process. Supported countries, business models, currencies and account capabilities differ. Get provider approval for your exact arrangement before promising automated commissions. [VERIFY]

- Draw who sells the food, who appears on the customer statement and who is responsible for refunds.
- Decide whether payment is collected immediately or after restaurant acceptance.
- Use provider-hosted payment fields so raw card details do not pass through your own system.
- Record the provider transaction ID alongside your order ID for every successful or failed payment.

> *Stripe and Razorpay are examples, not claims that these integrations are included in EnactOn's supplied platform. Provider eligibility and integration scope must be confirmed.*

## Trust is built when something fails: Handle refunds and payment exceptions

A refund returns money to the customer. A chargeback is a card payment disputed through the card issuer. Reconciliation means checking that order records, provider balances and bank payouts agree.

| Failure or request | Operational response |
|---|---|
| **Customer paid but no order appeared** | Check the provider event and recover the original order. Do not tell the customer to pay again until the first attempt is understood. |
| **Restaurant rejects a paid order** | Start the agreed refund flow, show its status and retain evidence. A requested refund is not yet a completed refund. |
| **One item is missing** | Support a partial refund with a reason and the correct tax and fee adjustment. |
| **Funds already moved to the restaurant** | Determine whether a transfer reversal is needed. A customer refund and recovery from the restaurant are separate actions. |
| **Customer disputes the card payment** | Assign an owner for the provider deadline and retain the order, acceptance, fulfilment and communication records. |
| **Cash order is never collected** | Mark it unpaid and cancelled. Do not report cash expected as money received. |

For Stripe destination charges, refunding the charge does not automatically reverse the restaurant transfer; application fees have separate refund handling. Razorpay Route also provides transfer reversal and refund controls. Design the full flow, including insufficient balances. [4–5]

### PCI basics without the jargon

PCI DSS is the payment card industry's security standard for protecting card data. Outsourcing payment processing can reduce your scope, but it does not remove all responsibilities. Confirm the required assessment with your payment provider or acquiring bank. Never put card numbers or security codes in logs, tickets or spreadsheets. [6]

> **Daily finance check:** compare paid orders, refunded amounts, platform fees, restaurant balances and bank payouts. Investigate differences before the next settlement run. A dashboard balance is not proof that cash reached the bank.

# 7 Build Versus Buy: Compare the Full Cost of Your Route

White-label describes branding, not ownership. You can resell a hosted service or license a source-code foundation. Source code is the editable set of instructions that makes the software work. Total cost of ownership includes implementation and ongoing operation.

| Route | Control and speed | Dependency and exit |
|---|---|---|
| **Buy a hosted tool** | Fastest route for a restaurant; limited configuration | Vendor controls roadmap and availability. Confirm exports and renewal terms. |
| **Resell hosted white-label SaaS** | Faster agency launch; brand and support control vary | Resale rights do not necessarily include code or a right to keep hosting. |
| **License a source-code foundation** | Reuse working software; modify within licence rights | Check third-party licences, documentation and whether another team can deploy it. |
| **Commission a custom build** | Greatest scope flexibility; longest implementation | Depends on team quality. Contract for code, accounts, handover and acceptance tests. |

### Illustrative 3-year software cost (USD thousands)

- **Hosted resale:** $21k–$63k  *(Setup $3k–$9k + $0.5k–$1.5k/month for 36 months)*
- **Source-code base:** $55k–$208k  *($15k–$40k + $1.1k–$4.65k/month for 36 months)*
- **Custom software:** $105k–$330k  *($40k–$100k + $1.8k–$6.4k/month for 36 months)*

*Same illustrative scope: 10 restaurants for 36 months, direct ordering, no native apps or fleet. Monthly figures include the software vendor/hosting and technical upkeep appropriate to each route. Illustrative envelopes, not vendor quotes. Excludes sales, frontline support, hardware, processing, tax and delivery; add these to every route.*

> **Shutdown risk is real:** Oracle's page gives 31 March 2027 for GloriaFood's service end; GloriaFood's notice gives 30 April 2027. This unresolved difference is a reason to build a migration buffer, not select the later date. [1–2]  
> Owning code reduces a key vendor dependency; it does not remove dependencies on cloud hosting, payment providers, app stores or people who maintain the system.

# 8 Costs, Scope, Timeline & Acceptance Gates

## Budget for the build and the business

There is no defensible universal "typical" build price without a written scope. The following planning ranges describe different first releases. They are not surveyed averages, current supplier quotes or EnactOn pricing.

| Software scope | Planning build range | Main cost drivers |
|---|---|---|
| **Hosted reseller launch** | $1,000–$10,000 | Brand setup, menus, domains and training; recurring licence costs are extra. |
| **Source-code ordering foundation** | $10,000–$40,000 | Branding, existing modules, one payment flow and limited integrations. |
| **Custom restaurant ordering MVP** | $40,000–$120,000 | New workflows, permissions, testing and operational tooling. |
| **Limited marketplace pilot** | $60,000–$200,000+ | Discovery, restaurant operations, dispatch, driver tools and support. |

*MVP means minimum viable product: the smallest usable release that tests the business. Ranges assume one initial market and controlled scope; they are not global-platform replicas. Native apps, multiple currencies, tax integrations and complex POS connections can materially raise the total.*

### Monthly pilot technology cost

| Technology service | Planning allowance | What changes it |
|---|---|---|
| **Application hosting** | $100–$400 | Peak traffic, redundancy and location |
| **Database, backups and files** | $75–$300 | Order history, images and recovery needs |
| **Email** | $10–$75 | Volume and provider plan |
| **Maps and address services** | $0–$200 | Lookups, route requests and free allowances |
| **SMS and WhatsApp** | $25–$500 | Country, message type and volume |
| **Monitoring and logs** | $25–$150 | Retention and support tooling |
| **Combined pilot allowance** | **$235–$1,625 / month** | *Pilot assumption: 2–10 restaurants and roughly 1,000–5,000 orders/month* |

*Excludes vendor licence, payment fees, technical maintenance and staff. Costs may exceed this at high messaging or routing usage. Obtain region-specific provider quotes.*

> **Business cash is separate:** budget onboarding labour, sales, evening support, devices, legal review, refunds, customer acquisition and delivery. Allow a planning contingency of 15%–25% on implementation; it is a reserve, not permission to leave scope undefined.

## Timeline and acceptance gates: Plan the route to the first pilot

A working foundation can shorten development. It does not remove menu approval, account verification, hardware testing or staff training. These dependencies should be visible in the schedule.

- **Weeks 0–2:** Scope and money flow
- **Weeks 2–6:** Configure and build
- **Weeks 6–8:** Migrate and integrate
- **Weeks 8–10:** Test and train
- **Weeks 10–12:** Pilot and fix

*Illustrative 12-week source-code pilot plan. Some work overlaps. Ready-to-use hosted resale may take 2–6 weeks; a source-code pilot 6–12 weeks; custom ordering 12–24+ weeks; a constrained marketplace 12–24+ weeks. Hybrid or complex integrations can take longer. These are planning assumptions, not delivery commitments.*

| Gate | Evidence needed to continue | Decision owner |
|---|---|---|
| **Scope agreed** | Named pilots, signed scope, payment flow, hardware list and exclusions | Founder + delivery lead |
| **Foundation ready** | A real menu works end to end in a test environment | Product lead + restaurant manager |
| **Money flow approved** | Provider approval, onboarding and tested fees, payout and refund flow | Finance + payment provider |
| **Operational rehearsal** | Real devices, busy-service simulation, failure recovery and staff training | Restaurant manager + support lead |
| **Paid pilot accepted** | Written approval against the checklist and a support rota | Founder + pilot restaurant |

### Keep the first release small

- Use one country, one currency and one approved payment arrangement.
- Agree exactly which printer models and connections are supported.
- Defer loyalty points, multiple consumer apps and broad POS integrations unless the pilot needs them.
- Keep a change log showing the cost and schedule effect of every new request.

# 9 Migration Playbook, Pilot Operations & Scaling

## Migration playbook: Migrate menus without losing service

Migration moves the operating business, not just the item names. A wrong modifier price or missing opening-hour rule can make an otherwise attractive replacement unusable.

<figure class="illo">
  <img src="assets/gloriafood/delivery-zones.svg" alt="Delivery zones and cutover">
  <figcaption>Save geofenced delivery zones, polygons, minimum amounts and surcharges before migration.</figcaption>
</figure>

| Step | Action | Acceptance evidence |
|---|---|---|
| **1 Inventory** | List restaurants, menus, domains, buttons, apps, printers and integrations | A named owner for each account and hardware asset. |
| **2 Set up foundation** | Configure software, branding, tax, hours and payments | Test order succeeds on a non-public menu. |
| **3 Import menus** | Import categories, items, modifiers and option rules | Side-by-side comparison with the live menu. |
| **4 Review operations** | Verify prices, receipt layout and character rendering | Restaurant manager approves sample baskets and tickets. |
| **5 Rehearse** | Test payment, refusal, refund, printing and notifications | Evidence for normal and failure scenarios. |
| **6 Cut over** | Switch links during a quiet period; control old and new order intake | One clearly designated live channel and monitored first orders. |
| **7 Verify and retain** | Check finance, redirects and customer communication | No unexplained orders; approved archive and rollback decision. |

EnactOn reports an existing GloriaFood menu importer. That can reduce manual migration work, but it does not prove that historical orders, customer permissions, saved payment methods or every custom menu rule can transfer. Confirm the importer's supported fields on your own sample. [E]

### Build a realistic rollback plan

- A rollback means returning to a known working setup if launch fails.
- Keep old access available where permitted and confirm how long it will remain usable.
- Record any orders accepted after the switch so none are lost or duplicated when rolling back.
- Before the old service ends, test the new system independently; rollback cannot rely on a shut-down vendor.

> **GloriaFood migration planning:** should use the earlier published service-end date, 31 March 2027, while the conflicting 30 April notice remains unresolved. [1–2]

## Pilot operations: Launch with restaurants you can observe

Choose 2–3 restaurants whose managers will give honest feedback and allow operational observation. Include different menus or languages if those are central to your offer. Avoid selecting pilots solely because they are easy to impress.

| Workstream | Pilot action | Evidence to keep |
|---|---|---|
| **Hardware** | Use the actual tablet, printer, router and connection type | Supported-device list, sample ticket and reconnect test. |
| **Staff training** | Run accept, reject, sold-out, refund and reprint exercises | Staff demonstrate the steps without the builder taking over. |
| **Support** | Publish coverage hours and escalation contacts | Named person for each shift and a tested urgent contact route. |
| **Service rehearsal** | Simulate a busy period, empty paper and lost internet | Order IDs, response times and recovery results. |
| **Commercial review** | Ask the owner to approve the price and support scope | Paid pilot or written purchase condition, not just positive feedback. |

### Give support a workable structure

- Restaurant staff handle menu availability and meal preparation questions.
- Your frontline support handles order status, basic device issues and account access.
- Technical support handles defects, provider integration failures and recovery.
- Finance owns refund exceptions and unexplained payout differences.

> **Suggested escalation policy:** treat inability to receive orders or suspected data exposure as urgent. Treat a cosmetic problem as lower priority. Put actual response targets, coverage hours and responsibilities in the contract; do not advertise round-the-clock support without a staffed rota.  
> During the pilot, review failures daily with restaurant managers. Record what happened, who fixed it and what prevents recurrence. After a stable period agreed with the pilots, expand in small groups rather than switching the entire portfolio at once. Hardware costs depend on country, device condition, connection and installation work. Price a complete tested kit; a cheap unsupported printer can cost more in support than it saves.

## Scale after the operating model works: Use a dashboard that changes decisions

A dashboard should show where action is required. Do not confuse many registered restaurants with a healthy business. Count active, paying locations and profitable orders.

<div class="stat">
  <span class="stat-num">3 / 6 Passed</span>
  <p><strong>Sample Pilot Dashboard Status (Illustrative Data Only):</strong><br>
  • 3 Pilot restaurants<br>
  • 300 Submitted orders<br>
  • 6 Missed orders (2% Missed order rate)<br>
  • 3 min 95th percentile acceptance<br>
  • 12 Support tickets<br>
  <em>3 of 6 launch checks passed in this example: do not scale yet.</em></p>
  <span class="stat-src">A teaching dashboard, not EnactOn client results.</span>
</div>

| Metric | Definition | Action when it worsens |
|---|---|---|
| **Missed order rate** | Unaccepted timed-out orders ÷ submitted orders | Check alerts, staffing and device connection. |
| **Acceptance time** | Time from submission to restaurant acceptance | Inspect the slowest orders; averages can hide failures. |
| **Support burden** | Tickets and staff minutes per active restaurant | Fix recurring causes before adding locations. |
| **Contribution** | Revenue less variable operating cost | Review packaging, pricing and high-cost accounts. |
| **Payout exceptions** | Unexplained differences or delayed settlements | Assign finance ownership and stop silent accumulation. |

*95th percentile means 95% of measured orders were accepted within that time. The sample dashboard uses 6 missed orders out of 300 submitted = 2%; all values are illustrative, not EnactOn client results.*

Before hundreds of restaurants, automate repeatable onboarding, introduce least-necessary staff access, test backup restoration and simulate expected peak orders. Agree recovery time and tolerable data loss in plain business terms. Segment issues by restaurant, device and channel so a single large account does not hide smaller failures.

# 10 Trust and Regional Rules: Build Compliance into the Workflow

Decide who is responsible for the food sale, customer data, payment, delivery and tax. Put those responsibilities in contracts and reflect them in the software. A payment provider or software partner does not automatically take over every obligation.

| Region or topic | Verified baseline | Local decision to confirm |
|---|---|---|
| **India** | FSSAI provides food-business licensing and registration guidance. CBIC has specific guidance on restaurant services through e-commerce operators. [9–10] | [VERIFY] Your operator category, FSSAI requirements, current GST treatment, invoicing and who remits each tax. |
| **India payments** | Razorpay Route supports linked-account payment splitting. [5] UPI is India's Unified Payments Interface for bank payments. | [VERIFY] UPI support for the exact checkout, account approval, Route eligibility, refund flow and current charges. |
| **UK** | FSA guidance requires allergen information before purchase completion and at delivery for distance sales. VAT treatment depends on the supply. [7, 11] | [VERIFY] Nation-specific food rules, each menu item's VAT treatment, deposits and platform service fees. |
| **EU** | GDPR regulates processing of personal data. A controller decides why and how data is used; a processor acts on its behalf. [8] | [VERIFY] Your roles, legal basis, processor terms, transfers, retention and local food/tax obligations. |
| **US** | California has marketplace facilitator tax rules, including specific delivery-network provisions. This is not a US-wide rule. [12] | [VERIFY] State and local sales tax, food and delivery treatment, marketplace status and registration. |
| **Payment security** | Outsourced processing still leaves merchant responsibilities under PCI DSS. [6] | [VERIFY] Your assessment scope with the provider or acquiring bank. |

## Privacy controls

Collect only needed data, limit staff access, record permitted marketing preferences and set a retention policy. Keep order receipts separate from marketing permission. Test requests to access, correct or delete data, subject to applicable record-keeping duties.

> **Allergen data warning:** Allergen data needs restaurant approval and a change process. Do not let software infer that a dish is safe. [VERIFY]  
> Additional local duties may apply to couriers, insurance, accessibility, consumer terms and platform fees. This is an implementation checklist, not jurisdiction-specific legal advice.

# 11 What Can Go Wrong: Ten Mistakes That Become Expensive

| Mistake | How to avoid it |
|---|---|
| **1 Choosing screens before the model** | Write who pays, why they pay and which operational jobs you own. Validate that before buying a clone. |
| **2 Treating commission savings as profit** | Compare the complete cost of direct acquisition, payments, support and delivery with the marketplace fee. |
| **3 Assuming customer payment proves kitchen receipt** | Treat payment, acceptance and print verification as separate events. Alert staff when a print fails. |
| **4 Promising automated commissions before provider approval** | Confirm supported countries, linked accounts, fee liability, KYC and transfer reversal rules with the provider. |
| **5 Buying source code without deployment skills** | Check whether your team or an identified contractor can deploy, test and maintain the code. |
| **6 Launching on consumer tablets without loud alerts** | Test notification sound, screen wake, charger stability, auto-reconnect and printer reliability during a busy service. |
| **7 Guessing allergen safety in software** | Make restaurants approve their food information. Do not infer safety from an item name or description. |
| **8 Leaving old and new systems active without control** | Cut over during quiet hours and have one clearly designated live intake channel. |
| **9 Counting registered signups as paying customers** | Count active locations with regular orders and paid subscriptions. |
| **10 Scaling restaurant count before the operating model works** | Fix missed orders, support load and reconciliation discrepancies on the pilot before adding locations. |

# 12 Founder & Release Checklists

## Founder decision checklist: Before you start

Use this checklist before paying for implementation. Each answer needs an owner and evidence. "We will work it out later" means the risk remains in the budget.

### Business and customer
- [ ] Name the paying customer, launch geography and restaurant segment.
- [ ] Choose the primary model and write the fee calculation in plain language.
- [ ] Interview prospective restaurant buyers and observe a service period.
- [ ] Secure 2–3 pilot restaurants and agree what would make them pay.
- [ ] Model contribution with realistic support and delivery assumptions.

### Scope and responsibilities
- [ ] List required order channels and first-release exclusions.
- [ ] Decide who acquires diners and who handles delivery complaints.
- [ ] Map the payment flow and confirm provider suitability.
- [ ] List required devices, printers, languages and existing POS connections.
- [ ] Assign menu ownership, food information approval and support coverage.

### Commercial and ownership
- [ ] Compare the full three-year cost, including technical upkeep and frontline support.
- [ ] Confirm resale rights, source-code rights and third-party licence limits.
- [ ] Put cloud, domain and relevant provider accounts under the agreed owner.
- [ ] Agree acceptance evidence, change pricing, warranty and maintenance terms.
- [ ] Fund a downside case and define when to stop or change the plan.

<pre><code>Decision record:
Model: _____________________   Market: _____________________   Pilot owners: _____________________
Build budget range: ________   Monthly operating range: ____   Target pilot date: ________________
Commercial go or no-go review: __________________________________________________________________</code></pre>

> *A sensible stop condition might be failure to secure paying pilots at a price that covers support. Set your own threshold before investing; do not rewrite it merely to justify money already spent.*

## Release acceptance checklist: Before you go live

Run these checks on production-like devices with the people who will operate them. A production environment is the live system used by customers. A test environment should be separate so trial activity cannot affect real orders.

### Order and kitchen
- [ ] Checkout totals match approved prices, options, fees and tax settings.
- [ ] Sold-out items, closing times and future orders behave correctly.
- [ ] Restaurant acceptance, rejection and timeout messages are accurate.
- [ ] Printer failure, empty paper and reconnects are visible to staff.
- [ ] Repeated requests create neither duplicate meals nor duplicate charges.
- [ ] Collection, delivery, QR ordering and deposits pass where included.

### Money and trust
- [ ] Live account onboarding is complete and permitted payment methods work.
- [ ] Full and partial refunds reach their expected provider state.
- [ ] Restaurant transfers, platform fees and bank payouts reconcile.
- [ ] Cash orders remain unpaid until receipt is recorded.
- [ ] Permissions prevent cross-restaurant data access.
- [ ] Restaurant-approved allergens and customer terms are visible at the right point.

### Recovery and people
- [ ] A backup has actually been restored, not merely reported as created.
- [ ] Alerts reach a person who can act during service hours.
- [ ] Staff have rehearsed an outage and know the fallback process.
- [ ] The old ordering links, menus and redirects have been reviewed.
- [ ] Support, finance and technical escalation owners are named.

<pre><code>Release decision:
Restaurant manager: ________   Finance owner: ______________   Technical owner: __________________
Open blockers: _____________   Go-live date: _______________   Rollback trigger: _________________
First live-service review: ______________________________________________________________________</code></pre>

> *Do not launch with unresolved payment loss, cross-restaurant access or silent order-loss defects. Record non-critical issues with an owner and date rather than hiding them in a general "known issues" list.*

# 13 Experience Relevant to This Decision: How EnactOn Helps

EnactOn builds software for operators who want their own ordering platform or agency offering. The facts below describe relevant experience; they are not a universal guarantee that every project will succeed. Commercial terms, source-code rights and third-party dependencies are agreed in writing before contracts are signed.

| Reported experience | Why it matters | What to ask to see |
|---|---|---|
| **12+ years building software; 500+ clients in 65+ countries** | A broad software delivery history | Relevant project scope and delivery process rather than treating company scale as a performance guarantee. |
| **Built and run a GloriaFood-style European platform with 300+ restaurants, live for over a year; features still being added** | Experience supporting an evolving restaurant platform | A permitted live walkthrough and explanation of operational responsibilities. Restaurant count does not prove peak capacity. |
| **Deep GloriaFood knowledge across order flows, admin model and POS behaviour** | Can inform migration and workflow decisions | Your own order scenarios compared with the replacement workflow. |
| **GloriaFood menu importer already built** | Can reduce manual menu recreation | A sample import with options, prices, hours and unsupported fields checked. |
| **Thermal tickets rendered as images for Chinese and other non-Latin characters** | Addresses a practical kitchen printing problem | A ticket printed on your target hardware in your required languages. |
| **Client cloud accounts and full source code; no proprietary hosting lock-in** | Gives the client control of hosting and code | Contract rights, deployment instructions, credentials and a workable handover. |
| **Delivery and collection ordering, reservation deposits, QR table ordering and a POS app with printing** | Provides a relevant starting foundation | Each required flow demonstrated, with included scope separated from custom work. |

The best next step is to test that foundation against your business model. Ask for a written fit-and-gap list: what is already available, what needs configuration, what needs development and what depends on another provider.

> *These facts do not establish included Stripe/Razorpay integrations, a courier fleet, every POS connector, regulatory certification or a promised delivery date. Confirm those separately where required.*

# 14 Book a Scope Call or Request a Live Demo

## Turn the guide into a buying decision

Bring a real menu and a real operating problem. Ask EnactOn to demonstrate the order journey you intend to sell, including the point where something fails.

### Send a short brief

- Your launch country, business model and intended pilot date.
- Your initial restaurants, expected order volume and who will handle delivery.
- A sample menu, required languages and printer or POS details.
- Your payment arrangement and the workflows you cannot change.
- Your budget range and the accounts and code you expect to own.

**Ask for a live demonstration:** place an order with modifiers, accept it, print it, reject a second order and inspect its payment status. If migrating, compare one imported menu with the original.

**Contact EnactOn:** [www.enacton.com](https://www.enacton.com/) — use the project enquiry form to request a call or live demo. Include the day you want to meet and your target pilot date. [13]

## A six-card recap for your team

<div class="paths">
  <div class="path">
    <span class="path-tag">01</span>
    <span class="path-who">Decision</span>
    <strong>Choose the business</strong>
    <p>Software or marketplace</p>
  </div>
  <div class="path">
    <span class="path-tag">02</span>
    <span class="path-who">Finance</span>
    <strong>Price the real job</strong>
    <p>Support and delivery count</p>
  </div>
  <div class="path">
    <span class="path-tag">03</span>
    <span class="path-who">Journey</span>
    <strong>Follow one order</strong>
    <p>Payment to kitchen to payout</p>
  </div>
  <div class="path">
    <span class="path-tag">04</span>
    <span class="path-who">Reliability</span>
    <strong>Test the failures</strong>
    <p>No internet, no paper, refunds</p>
  </div>
  <div class="path">
    <span class="path-tag">05</span>
    <span class="path-who">Pilot</span>
    <strong>Prove the pilot</strong>
    <p>2–3 restaurants first</p>
  </div>
  <div class="path">
    <span class="path-tag">06</span>
    <span class="path-who">Exit</span>
    <strong>Own the exit</strong>
    <p>Code, data and accounts</p>
  </div>
</div>

> *The companion carousel expands these six decisions into shareable pages. It contains no additional product promises. Before publication, resolve any [VERIFY] items that become specific claims about your target market.*

# Reference Register: Sources and Verification Notes

Public sources were checked on 8 October 2026. The links below support specific claims, not the guide's illustrative prices or forecasts. Provider pages and rules can change; reopen them before making a contractual commitment.

1. **Oracle food and beverage:** [https://www.oracle.com/food-beverage/](https://www.oracle.com/food-beverage/)  
   *Verified: Oracle's GloriaFood section states 31 March 2027 as full end of service. Contradicts source 2.*
2. **GloriaFood service update:** [https://www.gloriafood.com/](https://www.gloriafood.com/)  
   *Verified: the service update states 30 April 2027. The two public notices were not reconciled. Planning recommendation: use the earlier date.*
3. **Uber Eats US pricing:** [https://merchants.ubereats.com/us/en/pricing/](https://merchants.ubereats.com/us/en/pricing/)  
   *Verified regional example: 20% Lite, 25% Plus, 30% Premium, with qualifications including Uber One. No global fee claim is made.*
4. **Stripe destination charges:** [https://docs.stripe.com/connect/destination-charges](https://docs.stripe.com/connect/destination-charges)  
   *Primary technical reference for destination charges, platform fees and refund/transfer handling. Exact country and account eligibility must be confirmed.*
5. **Razorpay Route:** [https://razorpay.com/docs/payments/route](https://razorpay.com/docs/payments/route)  
   *Verified: linked accounts, payment splitting, settlements and reversals. See also the linked-account and refund API references below.*
   - **5a. Razorpay linked accounts:** [https://razorpay.com/docs/payments/route/linked-account](https://razorpay.com/docs/payments/route/linked-account) — Explains linked accounts and access to refunds, reversals and settlements.
   - **5b. Razorpay refunds and transfer reversals:** [https://razorpay.com/docs/api/payments/route/refund-payments-and-reverse-transfer](https://razorpay.com/docs/api/payments/route/refund-payments-and-reverse-transfer) — Explains refund deduction and reverse_all behaviour; verify implementation for partial transfers and balances.
6. **PCI Security Standards Council:** [https://www.pcisecuritystandards.org/](https://www.pcisecuritystandards.org/faqs/does-pci-dss-apply-to-merchants-who-outsource-all-payment-processing-operations-and-never-store-process-or-transmit-cardholder-data/)  
   *Outsourcing payment processing does not remove every merchant responsibility.*
7. **UK Food Standards Agency:** [https://www.food.gov.uk/business-guidance/allergen-guidance-for-food-businesses](https://www.food.gov.uk/business-guidance/allergen-guidance-for-food-businesses)  
   *Allergen information for distance sales before purchase and at delivery.*
8. **European Commission GDPR guidance:** [https://commission.europa.eu/law/law-topic/data-protection/data-protection-explained_en](https://commission.europa.eu/law/law-topic/data-protection/data-protection-explained_en)  
   *Personal-data protection and scope; individual roles and duties need local assessment.*
9. **FSSAI registration guidance:** [https://fssai.gov.in/business/registration](https://fssai.gov.in/business/registration)  
   *Food-business registration and licensing baseline. Platform-specific requirements remain [VERIFY].*
10. **CBIC Circular 167 of 2021:** [https://cbic-gst.gov.in/pdf/Circular-167-17-12-2021-GST.pdf](https://cbic-gst.gov.in/pdf/Circular-167-17-12-2021-GST.pdf)  
    *Restaurant services through e-commerce operators. Current application and amendments: [VERIFY].*
11. **HMRC VAT Notice 709 1:** [https://www.gov.uk/guidance/catering-takeaway-food-and-vat-notice-7091](https://www.gov.uk/guidance/catering-takeaway-food-and-vat-notice-7091)  
    *VAT treatment varies with the food supply and context; no universal rate assumed.*
12. **California CDTFA Regulation 1684 5:** [https://www.cdtfa.ca.gov/lawguides/vol1/sutr/1684-5.html](https://www.cdtfa.ca.gov/lawguides/vol1/sutr/1684-5.html)  
    *Marketplace and delivery-network tax provisions; do not generalise nationally.*
13. **EnactOn project enquiry:** [https://www.enacton.com/](https://www.enacton.com/)  
    *Public enquiry form verified. A specific booking-calendar or public demo URL was not supplied.*

## What is reported and what is illustrative

> **[E] EnactOn experience and capabilities** are company-reported, supplied in the publication brief. No extra customers, outcomes or certifications have been added. Cost ranges, timelines, economic examples, dashboard values and acceptance recommendations are planning material, not measured benchmarks or promises. No public price survey was performed. Exact local legal, tax and payment eligibility marked [VERIFY] remains unresolved.  
> Architecture is a suggested design. A source-code contract should describe permitted use and third-party dependencies. A live demonstration should use authorised sample data and protect the unnamed client's information.`,
});
