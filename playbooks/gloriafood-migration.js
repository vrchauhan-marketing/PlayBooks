PLAYBOOKS.push({
  slug: "gloriafood-migration",
  volume: "01",
  title: "The 2026 Food Ordering Business Playbook",
  spineTitle: "Food Ordering Business Playbook",
  subtitle: "A practical guide for founders, restaurant owners and resellers — architecture, unit economics, GloriaFood migration & launch",
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
  eyebrow: "Business Playbook · October 2026",
  notice: "<b>Service update:</b> GloriaFood reaches end of life on April 30, 2027 (Oracle lists March 31, 2027). Recommended cutover: before March 31, 2027. Data is permanently deleted after 30 days.",

  // Photos: Unsplash (free licence), hot-linked
  coverImage: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=900&q=70&auto=format&fit=crop",
  heroImage:  "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=2000&q=70&auto=format&fit=crop",
  chapterImages: [
    "https://images.unsplash.com/photo-1552566626-52f8b828add9?w=900&q=70&auto=format&fit=crop", // Ch 1: Dining & hospitality
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=900&q=70&auto=format&fit=crop", // Ch 2: Business models
    "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=900&q=70&auto=format&fit=crop", // Ch 3: Economics / finance
    "https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=900&q=70&auto=format&fit=crop", // Ch 4: Kitchen prep
    "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=900&q=70&auto=format&fit=crop", // Ch 5: Architecture / code
    "https://images.unsplash.com/photo-1556742044-3c52d6e88c62?w=900&q=70&auto=format&fit=crop", // Ch 6: Payment terminal
    "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=900&q=70&auto=format&fit=crop", // Ch 7: Build vs Buy / planning
    "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=900&q=70&auto=format&fit=crop", // Ch 8: Budget & timeline
    "https://images.unsplash.com/photo-1590846406792-0adc7f938f1d?w=900&q=70&auto=format&fit=crop", // Ch 9: Migration / restaurant tech
    "https://images.unsplash.com/photo-1556740758-90de374c12ad?w=900&q=70&auto=format&fit=crop", // Ch 10: Pilot operations
    "https://images.unsplash.com/photo-1450133064473-71024230f91b?w=900&q=70&auto=format&fit=crop", // Ch 11: Compliance / legal
    "https://images.unsplash.com/photo-1584438784894-089d6a62b8fa?w=900&q=70&auto=format&fit=crop", // Ch 12: Mistakes / alert
    "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=900&q=70&auto=format&fit=crop", // Ch 13: Checklists
    "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=900&q=70&auto=format&fit=crop", // Ch 14: EnactOn team
    "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?w=900&q=70&auto=format&fit=crop", // Ch 15: Reference
  ],
  credits: "Written by EnactOn Technologies. Photography via Unsplash. Original operational diagrams and frameworks by EnactOn.",
  legal: [
    "GloriaFood and Oracle are trademarks or registered trademarks of Oracle and/or its affiliates. Uber Eats, Stripe, Razorpay, UPI, FSSAI, CBIC, HMRC, and other cited entities are trademarks or registered trademarks of their respective owners. This playbook is an independent publication for operators.",
  ],

  description: [
    "In 2026 Oracle announced the retirement of GloriaFood, setting a hard deadline for thousands of restaurants and white-label agencies. Building an independent direct ordering channel gives operators control over menus, customer data, and profits — but discovery, payment, and fulfilment remain operational challenges that require a proven system.",
    "This field guide delivers the complete blueprint: SaaS vs marketplace business models, unit economics, click-to-kitchen order lifecycles, connected payment architectures (Stripe Connect & Razorpay Route), a 7-step GloriaFood migration plan, regional compliance frameworks, launch checklists, and lessons from 12+ years of enterprise food tech.",
  ],

  content: `# The Opportunity & Direct Ordering Advantage

## The 2026 Food Ordering Business Landscape

Build a business around a clear customer and a workable operating model before commissioning software. A direct ordering channel lets an independent restaurant or hospitality group accept orders through its own website, branded app, or table QR codes. It grants the operator complete control over the menu, customer data, repeat purchases, and direct diner communication.

However, moving to direct ordering does not magically eliminate operational friction: **discovery, payment processing, customer service, and food fulfilment remain real jobs that someone must perform.**

<div class="stat">
  <span class="stat-num">20% – 30%</span>
  <p><strong>Standard US third-party marketplace commission fees.</strong> Uber Eats published terms charge 20% for Lite, 25% for Plus, and 30% for Premium, with separate fees for customer delivery and pickup.</p>
  <span class="stat-src">Source: Uber Eats US Merchant Pricing Terms [Ref. 3]</span>
</div>

### Commission savings are only one part of the calculation

Marketplaces provide two distinct benefits: **discovery** (new customer acquisition) and **logistics** (courier delivery). Moving an order from DoorDash, Uber Eats, or Zomato to a direct channel removes neither of those jobs.

Before claiming automatic savings, operators must account for:
- Payment processor fees (e.g. 1.5%–2.9% + $0.30 per swipe)
- Software maintenance, server hosting, and order-alert tooling
- Local customer acquisition advertising and first-order discount incentives
- Packaging, frontline customer service, and driver dispatch expenses

<figure class="illo">
  <img src="assets/gloriafood/phone-ordering.svg" alt="Direct Ordering Mobile Flow">
  <figcaption>Figure 1.1 — Direct ordering shifts repeat diners from high-commission marketplaces into owned channels.</figcaption>
</figure>

## The Restaurant Opportunity Matrix

| Restaurant Pain Point | Direct Channel Opportunity | Evidence to Collect in Pilot |
|---|---|---|
| **Repeat diners order via 3rd-party apps** | Direct reordering link, packaging QR code, and express collection | Compare contribution margin on direct vs. marketplace orders |
| **Menus and operating hours hard to update** | Centralized admin with instant POS / web synchronization | Time a real menu change and verify it reflects at checkout within seconds |
| **No ownership of customer relationships** | Permitted customer data capture and automated SMS/email re-engagement | Verify GDPR/privacy consent, export rights, and repeat purchase frequency |
| **Vendor shutdowns threaten daily operations** | Self-hosted or white-label platform with portable data & source code | Restore a full database backup and launch on accounts the operator controls |

> **Founder Directive:** Interview at least 5 restaurant owners and observe a busy weekend dinner service before writing a single line of software specification. "Owning customer data" means lawful access and control — not unlimited permission to spam diners.

<a class="read-more" href="https://www.enacton.com/blog/gloriafood-shutting-down/" target="_blank" rel="noopener">
  <span class="rm-label">EnactOn Insights</span>
  <span class="rm-title">GloriaFood Shutting Down: Strategic Impact on Restaurants & Reseller Partners</span>
  <span class="rm-go">Read the analysis ↗</span>
</a>

# Choosing Your Business Model

## SaaS, Marketplace, or Hybrid?

Before selecting software, founders and agencies must commit to an operating model:

<div class="paths">
  <div class="path">
    <span class="path-tag">Model 1</span>
    <span class="path-who">Agency / Software Provider</span>
    <strong>Ordering SaaS</strong>
    <p>Sell branded ordering websites, QR menus, and POS apps to individual restaurants or restaurant groups.</p>
  </div>
  <div class="path">
    <span class="path-tag">Model 2</span>
    <span class="path-who">Local Aggregator</span>
    <strong>Local Marketplace</strong>
    <p>A single discovery portal where diners browse, compare, and order from multiple neighbourhood restaurants.</p>
  </div>
  <div class="path">
    <span class="path-tag">Model 3</span>
    <span class="path-who">Enterprise Scale</span>
    <strong>Hybrid Platform</strong>
    <p>Combines independent direct-ordering links with an optional aggregated multi-restaurant marketplace.</p>
  </div>
</div>

## Detailed Business Model Comparison

| Evaluation Metric | Ordering SaaS | Local Marketplace | Hybrid Model |
|---|---|---|---|
| **Paying Customer** | Restaurant owner or agency client | Restaurants + Diner convenience fees | Restaurants plus marketplace diners |
| **Revenue Stream** | Monthly SaaS, setup fees, add-on modules | Order commission (10–25%), delivery markups | Software subscription + marketplace commission |
| **Upfront Software Scope** | Lowest for hosted resale; moderate for owned code | High software scope (dispatch, driver apps, discovery) | Highest combined development & maintenance scope |
| **Operational Friction** | B2B sales, hardware onboarding, software uptime | 2-sided liquidity (supply & demand), driver dispatch | Both operational models plus multi-channel attribution |
| **Time to First Revenue** | **2–6 weeks** (hosted); **6–12 weeks** (source-code pilot) | **12–24+ weeks** for a constrained local pilot | **16–32+ weeks** when built simultaneously |
| **Primary Failure Mode** | High support costs and restaurant churn | Orders lose money on delivery; customer acquisition too costly | Channel attribution conflicts; confusing fee structures |

## The One-Sentence Alignment Test

Before paying for software or signing contracts, every founding team must complete this sentence with 100% consensus:

> *"We serve **[Target Buyer]** in **[Geographic Market]**, solve **[Specific Ordering Problem]**, charge via **[Pricing Method]**, and are operationally responsible for **[Support & Delivery Scope]**."*

If your leadership team cannot agree on this sentence, any software build or clone purchase is premature.

# Revenue Models & Unit Economics

## How to Price Direct Ordering Services

Price the work you actually perform. An inexpensive \$49/month subscription quickly loses money if your team provides unlimited on-site menu edits, printer troubleshooting visits, and late-night weekend support.

| Pricing Method | Why It Can Work | Critical Failure Mode |
|---|---|---|
| **Monthly Subscription** | Predictable revenue for agency; fixed, budgetable overhead for restaurant | Low-volume restaurants churn quickly; support costs must fit strictly within fee |
| **Per-Order Commission** | Scales automatically as restaurant volume grows | Ambiguous base: define whether commission applies to food only, or includes tax, tips, and delivery |
| **Per-Order Convenience Fee** | Direct monetization from diner usage without taxing restaurant margin | Small basket sizes feel fee heavily; must be disclosed transparently before checkout |
| **Setup & Onboarding Fee** | Covers menu digitization, hardware provisioning, domain setup, and staff training | Must reflect actual labor; avoid hiding recurring maintenance in sales conversations |
| **Value-Added Add-ons** | Monetize branded native apps, marketing campaigns, loyalty modules, and custom integrations | Too many modular options create configuration fatigue and complex support workflows |
| **Wholesale Reseller Tiers** | Agencies buy wholesale restaurant licenses in bulk and resell at customized markups | Low-tier accounts with needy managers drain margin; define strict tier SLA boundaries |

## Software Unit Economics: The Contribution Margin

**Contribution margin** is revenue remaining after deducting variable costs that increase with every restaurant or order (hosting tiers, payment provider fees, SMS/WhatsApp alerts, customer support minutes). It pays your fixed team costs.

<pre><code>Illustrative SaaS Unit Economics (50-Location Milestone):
• Monthly subscription per restaurant:         $100.00
• Less variable server hosting & alerts:      -$15.00
• Less allocated frontline support (30 min):   -$25.00
-----------------------------------------------------------
= Contribution Margin per restaurant/month:     $60.00 (60%)

Fixed monthly overhead (Core team & tools):    $3,000.00
Break-Even Point: $3,000 ÷ $60 = 50 Active Paying Restaurants</code></pre>

| Active Paying Locations | Monthly Gross Revenue | Total Variable Cost | Total Contribution Margin | Fixed Cost Coverage ($3,000/mo) |
|---|---|---|---|---|
| **40 locations** | $4,000 | $1,600 | $2,400 | -$600 (Operating Loss) |
| **45 locations** | $4,500 | $1,800 | $2,700 | -$300 (Narrowing Deficit) |
| **50 locations** | $5,000 | $2,000 | **$3,000** | **$0 (Break-Even Milestone)** |
| **55 locations** | $5,500 | $2,200 | $3,300 | +$300 (Net Operating Profit) |

## Marketplace Per-Order Unit Economics

In a food marketplace, a \$25 order is not \$25 of revenue. Consider this unit economics breakdown on an average basket:

| Order Component | Financial Model | Cash Impact |
|---|---|---|
| **Food Subtotal** | $25.00 basket × 15% platform commission | +$3.75 Platform Revenue |
| **Diner Delivery & Service Fee** | $2.50 delivery + $0.50 platform service fee | +$3.00 Platform Revenue |
| **Gross Platform Revenue** | Commission + fees | **+$6.75 Inflow** |
| **Courier Payout** | Base delivery fee + distance allowance | -$4.00 Outflow |
| **Card Processing** | Stripe / merchant interchange (2.9% + $0.30) | -$1.03 Outflow |
| **SMS, Maps & Infrastructure** | Customer tracking SMS + Google Maps route APIs | -$0.72 Outflow |
| **Acquisition & Promotion Subsidy** | First-order discount / voucher amortized | -$1.00 Outflow |
| **Net Contribution per Order** | $6.75 Inflow − $6.75 Outflow | **$0.00 Net Contribution** |

> **Warning:** A wider delivery radius or offering free delivery promotions can immediately flip unit economics into negative cash flow. Track your Customer Acquisition Cost (CAC) and Restaurant Churn relentlessly.

# The Complete Order Journey: Click to Kitchen

## Follow One Order from Submission to Settlement

An order is an unbroken chain of verified state events. A card transaction capture does not guarantee the chef has seen the ticket. Every handoff must be monitored and recoverable:

<div class="timeline">
  <div class="tl-item"><span class="tl-date">Event 01</span><span class="tl-label">Menu selection & delivery geofence check</span></div>
  <div class="tl-item"><span class="tl-date">Event 02</span><span class="tl-label">Order creation & payment authorization / capture</span></div>
  <div class="tl-item tl-key"><span class="tl-date">Event 03</span><span class="tl-label">Restaurant POS / tablet alert & human acceptance</span></div>
  <div class="tl-item"><span class="tl-date">Event 04</span><span class="tl-label">Thermal ticket printing or Kitchen Display System (KDS) push</span></div>
  <div class="tl-item tl-end"><span class="tl-date">Event 05</span><span class="tl-label">Customer collection or courier dispatch & financial settlement</span></div>
</div>

## State Machine & Exception Handling

| Lifecycle State | Customer UI Communication | Background System Behaviour |
|---|---|---|
| **Payment Captured, Awaiting Acceptance** | "Order submitted! Waiting for kitchen confirmation." | Tablet sounds loud audible alarm; countdown timer (e.g. 3 min) starts |
| **Restaurant Rejects or Times Out** | "Order declined. Your payment has been voided/refunded." | System triggers automated payment reversal; notifies customer immediately via SMS/push |
| **Restaurant Accepts Order** | "Order accepted! Estimated collection: 25–35 min." | POS sends print payload to kitchen printer; job queue verifies receipt |
| **Printer Failure (Paper Out / Offline)** | Kept transparent to diner; prep time maintained | App detects printer disconnect; shows visual banner and alert tone to staff |

> **Architecture Principle:** Assign every order one permanent UUID. Payment records, tablet acknowledgements, print job IDs, refunds, and driver logs must tie back to this single key. Idempotency keys must prevent duplicate card charges or duplicate kitchen tickets on network retries.

# System Architecture & Building Blocks

## Multi-Tenant Reference Architecture

A robust food ordering infrastructure separates customer engagement, operational controls, and administrative governance:

<pre><code>[ Customer Layer ]
├── Mobile Web (Responsive PWA)
├── Native Mobile Apps (iOS / Android)
└── Table QR Code Ordering & Digital Menus

[ Restaurant Operations Layer ]
├── Order-Taking Tablet App (Sound & visual alerts)
├── ESC/POS Kitchen Printer (Bluetooth, Wi-Fi, Ethernet)
└── Staff Kitchen Display System (KDS) & Till Integration

[ Core Platform Engine ]
├── Tenant-Isolated Database (Orders, Menus, Modifiers, Options)
├── High-Reliability Job Queue (Printing, WhatsApp/SMS, Webhooks)
├── Payment Gateway Orchestration (Cards, Digital Wallets, Split Payouts)
└── Real-Time Webhook Engine (State updates, Courier dispatch)

[ Operator & Governance Layer ]
├── Super-Admin Panel (Platform metrics, billing, tenant lifecycle)
└── Agency / Reseller Dashboard (Wholesale accounts, client support)</code></pre>

## Behind the Counter: Operational Hardware

<figure class="illo">
  <img src="assets/gloriafood/tablet-order.svg" alt="Tablet and thermal kitchen printer workflow">
  <figcaption>Figure 5.1 — Kitchen reliability depends on loud tablet audio alerts and resilient thermal print queues.</figcaption>
</figure>

1. **Order-Taking POS App:** Must stay awake continuously, handle spotty Wi-Fi with automatic reconnects, and emit loud, persistent alert tones until a staff member physically taps the screen.
2. **Thermal Kitchen Printing:** 80mm and 58mm ESC/POS thermal printers connected via LAN Ethernet or Bluetooth.
3. **Non-Latin Character Workaround:** Standard thermal printers lack native fonts for complex scripts (Chinese, Arabic, Hindi, Japanese). EnactOn developed a production-proven architecture that renders print tickets as monochrome bitmaps on the server before dispatching to ESC/POS printers, ensuring 100% accurate character rendering without expensive specialized hardware.
4. **Tenant Isolation:** Multi-tenancy ensures that restaurants sharing the same server instance can never see, query, or download another tenant's menu drafts, customer details, or financial reports.

# Payments, Payouts & Connected Accounts

## How the Money Moves

Payment processing for direct ordering involves three primary legal and technical architectures:

| Money Flow Model | Cash Routing Mechanism | Operational Responsibilities |
|---|---|---|
| **Direct Merchant Account** | Diner pays directly into the restaurant's own Stripe / Square / merchant account. Platform invoices restaurant for SaaS subscription. | Restaurant handles refunds directly; platform never touches funds or assumes chargeback liability. |
| **Platform-Routed Connected Accounts** | Platform takes payment and splits funds using **Stripe Connect** or **Razorpay Route**. Platform takes fee automatically; balance routes to restaurant bank. | Platform manages merchant onboarding, KYC verification, refund workflows, and negative balance policies. |
| **Cash on Collection / Delivery** | Diner pays physical cash directly to restaurant counter or delivery courier. | Platform bills restaurant retroactively or reconciles cash collected against commission balances. |

## Connected Payments: Stripe Connect & Razorpay Route

Connected payments streamline multi-vendor operations, but require deep technical design:

- **Stripe Connect Destination Charges:** The customer charge is created on the platform account, and funds are automatically transferred to the connected restaurant account. Refunding the customer charge does **not** automatically reverse the transfer to the restaurant — your system must explicitly execute a transfer reversal or handle negative account balances.
- **Razorpay Route (India):** Allows splitting customer payments into linked bank accounts with programmatic transfer reversals and nodal settlement compliance.
- **Know Your Customer (KYC):** Every restaurant owner must complete automated identity verification, tax document submission, and bank verification before receiving payouts.

<div class="warn">
  <strong>PCI-DSS Compliance Rule:</strong> Never store raw credit card numbers, expiration dates, or CVVs in your database, logs, or error tickets. Always utilize provider-hosted iframe fields (Stripe Elements, Razorpay Checkout) so card data never touches your servers.
</div>

## Daily Financial Reconciliation Checklist

Run an automated daily balance check comparing:
1. Total gross order payments captured
2. Customer refunds and payment reversals processed
3. Platform fees collected
4. Net transfers deposited into restaurant bank accounts
5. Third-party interchange fees deducted

Never rely on an on-screen dashboard balance as confirmation that cash has cleared into the bank.

# Build Versus Buy: Full Cost of Ownership

## Evaluating Your Technology Route

"White-label" describes branding, not underlying code ownership. Founders must choose between three distinct routes:

| Strategic Route | Control & Speed | 3-Year Total Cost of Ownership (TCO) | Vendor Dependency & Exit |
|---|---|---|---|
| **Buy Hosted Reseller SaaS** | Fastest launch (2–6 weeks); zero server management; limited customization | **Lowest initial outlay, highest recurring cost:** Monthly license fees grow with every added restaurant | **High vendor lock-in:** If vendor raises prices or sunsets service (like GloriaFood), your business faces complete cutover |
| **License Source-Code Foundation (e.g. EnactOn)** | Rapid launch (6–12 weeks); complete branding; deploy on your own cloud; full source code | **Moderate upfront, lowest long-term cost:** Fixed license with predictable server hosting; you own your database and code | **High autonomy:** Host on your own AWS/DigitalOcean; customize workflows; export data anytime; zero per-restaurant royalties |
| **Build Ground-Up Custom System** | Complete bespoke control; slow time to market (24–52+ weeks) | **Extremely high capital expense:** \$60k–\$150k+ initial development plus ongoing engineering payroll | **Complete internal ownership, high technical debt:** Entire burden of bugs, security patches, and updates falls on you |

## The Three Questions for Code Ownership

1. **Can we deploy and maintain this ourselves?** Owning source code gives independence only if you have developers or a technical partner capable of configuring CI/CD, servers, and security patches.
2. **Where does the customer database live?** Ensure you have direct, unhindered root access to PostgreSQL/MySQL databases and image storage.
3. **What is the exit plan?** If the software vendor disappears tomorrow, do you possess the production repository, API documentation, and deployment guides necessary to continue operating uninterrupted?

# Budget, Cost Drivers & 12-Week Pilot Plan

## Software Scope & Planning Budget Ranges

There is no universal "off-the-shelf" price for food ordering software without an explicit written scope. The following planning ranges illustrate realistic market scenarios:

| Software Project Scope | Estimated Implementation Range | Primary Cost Drivers |
|---|---|---|
| **Hosted Reseller Launch** | $1,000 – $10,000 | Domain routing, white-label styling, menu digitization, payment setup |
| **Source-Code Ordering Foundation** | $10,000 – $40,000 | Code deployment on client cloud, payment gateway integration, custom branding, POS printer setup |
| **Custom Restaurant Ordering MVP** | $40,000 – $120,000 | Custom UI/UX, bespoke table management, multi-role permissions, custom driver logic |
| **Full Regional Marketplace Pilot** | $60,000 – $200,000+ | Consumer discovery apps, automated driver dispatch algorithms, customer support portals |

## Monthly Infrastructure Allowance (2–10 Pilot Restaurants)

Budget realistically for cloud infrastructure to support 1,000 to 5,000 orders/month:

| Infrastructure Service | Monthly Allowance | Main Cost Variable |
|---|---|---|
| **Application & Web Hosting** | $100 – $400 | DigitalOcean / AWS container clusters, traffic spikes, SSL |
| **Managed Database & Backups** | $75 – $300 | Automated daily snapshots, read replicas, storage volume |
| **Transactional Email (SendGrid / Postmark)** | $10 – $75 | Order confirmation receipts, password resets |
| **Maps & Routing (Google Maps / Mapbox)** | $20 – $200 | Address geocoding, delivery zone calculation, route lookups |
| **SMS & WhatsApp Alerts (Twilio / Meta)** | $25 – $500 | Destination country per-message rates, WhatsApp templates |
| **Application Monitoring & Error Logs** | $25 – $150 | Log retention, uptime monitoring, Sentry alerts |
| **Total Monthly Baseline Allowance** | **$255 – $1,625 / mo** | *Excludes payment interchange and frontline staff payroll* |

## The 12-Week Source-Code Pilot Timeline

<pre><code>Week  01–02: [Scope & Money Flow]  — Target pilots locked, payment gateway approved, hardware selected
Week  03–06: [Configure & Build]   — Server setup, branding, menu hierarchy, kitchen printer validation
Week  07–08: [Migrate & Integrate] — GloriaFood menu import, modifier pricing audit, delivery polygon testing
Week  09–10: [Test & Train]        — Simulated rush hours, kitchen staff training, hardware reconnect drill
Week  11–12: [Pilot & Fix]         — Live launch in 2–3 stores, daily defect triage, commercial review</code></pre>

## The 5 Formal Acceptance Gates

- **Gate 1: Scope & Hardware Agreed:** Signed scope document, named pilot restaurants, confirmed printer hardware list.
- **Gate 2: Foundation Operational:** Real menu items, option groups, and modifier prices pass automated and manual checkout tests.
- **Gate 3: Money Flow Approved:** Live payment provider merchant verification, destination charge split, and refund test passing.
- **Gate 4: Operational Rehearsal:** Kitchen staff successfully receive, accept, prepare, and print orders during a simulated peak hour.
- **Gate 5: Commercial Acceptance:** Pilot restaurant owners confirm in writing that the software meets operational requirements.

# The GloriaFood Migration Playbook

## The 2027 End-of-Life Crisis

In 2021, Oracle acquired GloriaFood. In 2026, Oracle announced the official **End of Life (EOL)** for the platform.

<div class="timeline">
  <div class="tl-item"><span class="tl-date">March 2026</span><span class="tl-label">Oracle EOL announced; new signups restricted</span></div>
  <div class="tl-item"><span class="tl-date">October 2026</span><span class="tl-label">Sales of add-on features (Branded Apps, Websites) frozen</span></div>
  <div class="tl-item tl-key"><span class="tl-date">March 31, 2027</span><span class="tl-label">Oracle F&B published shutdown target (Recommended Cutover)</span></div>
  <div class="tl-item tl-end"><span class="tl-date">April 30, 2027</span><span class="tl-label">GloriaFood.com published final shutdown</span></div>
  <div class="tl-item tl-end"><span class="tl-date">May 30, 2027</span><span class="tl-label">Final 30-day data grace window closes; all data deleted</span></div>
</div>

<p class="warn">
  <strong>Timeline Conflict Warning:</strong> Oracle Food & Beverage documentation specifies <b>March 31, 2027</b> as the service-end date, while GloriaFood.com lists <b>April 30, 2027</b>. Always plan your cutover for before March 31, 2027 to avoid abrupt service loss.
</p>

## The 7-Step Migration Workflow

<ol class="checklist">
  <li><b>Inventory & Audit:</b> Catalog all active restaurant locations, custom domains, embedded widget buttons, branded apps, kitchen printers, and merchant accounts.</li>
  <li><b>Foundation Provisioning:</b> Deploy your independent ordering software on your own cloud servers and configure branding.</li>
  <li><b>Menu Import & Validation:</b> Export GloriaFood menu structures and utilize an automated importer to transfer categories, items, and modifiers. Verify pricing and tax calculations manually.</li>
  <li><b>Kitchen Hardware Verification:</b> Pair tablet apps with thermal receipt printers; verify paper cut, character set rendering, and audio notifications.</li>
  <li><b>End-to-End Rehearsal:</b> Execute test transactions for delivery, collection, card payment, rejection, and full refunds.</li>
  <li><b>Public Cutover:</b> Re-point domain DNS, update website ordering buttons, and deploy fresh table QR stickers during a quiet Tuesday morning period.</li>
  <li><b>Post-Launch Verification & Archive:</b> Monitor first 50 live orders in real time. Archive GloriaFood transaction reports before the 30-day post-EOL data wipeout.</li>
</ol>

<figure class="illo">
  <img src="assets/gloriafood/delivery-zones.svg" alt="Delivery zone migration">
  <figcaption>Figure 9.1 — Record delivery polygon boundaries, surcharges, and minimum order thresholds prior to cutover.</figcaption>
</figure>

## Building a Bulletproof Rollback Plan

- Maintain access to existing GloriaFood accounts during the first 14 days of cutover.
- Ensure website ordering buttons can be instantly redirected back if critical hardware or payment defects appear during initial service.
- If rolling back, manually re-enter any orders placed on the new system so kitchen tickets are not dropped.
- **Remember:** A rollback plan is only viable before March 31, 2027 — once Oracle shuts down the servers, there is no old system to return to.

# Pilot Operations & Operational Dashboards

## Launch with Restaurants You Can Observe

Select 2 to 3 friendly, high-volume pilot restaurants whose managers will provide candid, daily feedback. Avoid choosing restaurants solely because they are easy to impress.

| Pilot Workstream | Operational Action | Required Evidence |
|---|---|---|
| **Hardware Fit** | Deploy on target tablets, thermal printers, and kitchen Wi-Fi routers | Test ticket print speed, volume, and automatic reconnect after Wi-Fi loss |
| **Staff Training** | Train front-of-house staff on accept, reject, item 86 (sold-out), and re-print | Staff execute all actions independently without engineer intervention |
| **Support Coverage** | Establish designated support channels and escalation rotas for dinner service | Named support contact on call with direct phone access during kitchen hours |
| **Service Simulation** | Simulate peak weekend ordering rush, empty receipt paper, and delayed drivers | Zero dropped tickets; clean error recovery |
| **Commercial Signoff** | Review monthly billings, transaction fees, and contribution margins with owner | Written confirmation to transition to paid billing |

## The Operational Health Dashboard

Do not confuse large numbers of registered restaurant accounts with a thriving business. Measure active, paying locations and reliable order completion:

<pre><code>[ PILOT HEALTH DASHBOARD • LIVE METRICS ]
─────────────────────────────────────────────────────────────
Active Locations:       3 Pilot Restaurants
Orders Submitted:     300 Total Transactions
Missed / Expired:       6 Orders (2.0% Missed Order Rate)
P95 Acceptance Time:  3.2 Minutes (Submission to Kitchen Ack)
Support Tickets:       12 Issues Logged During Service
Contribution Margin:  64.2% Net Contribution
Payout Discrepancies:   $0 Unreconciled Variance
─────────────────────────────────────────────────────────────
STATUS: 4 of 6 Pilot Gates Cleared — DO NOT SCALE UNTIL MISSED RATE < 1%</code></pre>

| Operating Metric | Industry Standard Benchmark | Trigger Action When Metric Worsens |
|---|---|---|
| **Missed Order Rate** | < 1.0% of total submitted orders | Inspect tablet battery saver settings, Wi-Fi sleep, and notification volume |
| **P95 Acceptance Time** | Under 3.0 minutes | Investigate kitchen tablet placement; train staff on instant order acknowledgement |
| **Support Burden** | < 1 ticket per 100 orders | Identify recurring software bugs or UX confusions and resolve root causes |
| **Contribution Margin** | > 50% on software subscriptions | Audit cloud server costs, SMS alert volumes, and third-party API consumption |
| **Payout Discrepancy** | $0.00 unexplained variance | Halt automated disbursements immediately until ledger and bank match |

# Legal, Compliance & Regional Rules

## Build Compliance into the Workflow

Direct ordering systems handle consumer financial transactions, sensitive personal data, and consumable food safety disclosures. Compliance cannot be retrofitted after launch:

| Jurisdiction | Verified Regulatory Baseline | Local Technical Decision |
|---|---|---|
| **India** | **FSSAI** food business licensing regulations; **CBIC Circular 167/2021** e-commerce restaurant GST guidelines [Ref. 9, 10] | Display restaurant FSSAI license numbers on menu pages; determine whether platform or restaurant collects and remits 5% GST; integrate UPI and Razorpay Route. |
| **United Kingdom** | **Food Standards Agency (FSA)** regulations requiring distance-sales allergen declarations before checkout and upon delivery [Ref. 7, 11] | Mandatory allergen warnings on menu modifiers; VAT breakdown on takeaway receipts conforming to HMRC Notice 709/1. |
| **European Union** | **General Data Protection Regulation (GDPR)** defining data controller vs processor boundaries [Ref. 8] | Ensure separate opt-ins for operational order receipts vs marketing newsletters; execute Data Processing Agreements (DPA); honor Right to Erasure. |
| **United States** | **State Marketplace Facilitator Laws** (e.g. California CDTFA Reg 1684.5) [Ref. 12] | Configure dynamic sales tax calculations based on destination zip code; differentiate pickup vs courier delivery taxability. |
| **Payment Security** | **PCI-DSS v4.0** requirements governing cardholder data protection [Ref. 6] | Outsource all payment card input to SAQ A-compliant hosted iframes (Stripe Elements, Razorpay). Never log card details. |

<p class="warn">
  <strong>Food Safety Warning:</strong> Never allow software or AI to infer that a food item is safe for an allergy sufferer. Allergen data must be directly reviewed and certified by the restaurant kitchen manager.
</p>

# Ten Mistakes That Become Expensive

## Lessons from Experienced Operators

<div class="issue">
  <strong>1. Choosing Screens Before the Business Model</strong>
  <p class="cause"><span>Likely Cause</span>Buying a ready-made mobile app clone before establishing who pays, why they pay, and who delivers the food.</p>
  <p class="cause"><span>Proven Fix</span>Draft your one-sentence alignment test and validate customer willingness to pay before writing or buying software.</p>
</div>

<div class="issue">
  <strong>2. Treating Marketplace Commission Savings as Free Profit</strong>
  <p class="cause"><span>Likely Cause</span>Assuming a restaurant saves 30% without budgeting for diner acquisition advertising, payment fees, customer support, and courier pay.</p>
  <p class="cause"><span>Proven Fix</span>Calculate full contribution margins for direct orders including all packaging, processing, and delivery expenses.</p>
</div>

<div class="issue">
  <strong>3. Assuming Customer Payment Proves Kitchen Receipt</strong>
  <p class="cause"><span>Likely Cause</span>Treating card capture as the end of the order lifecycle, leading to missed meals when tablets lose Wi-Fi connection.</p>
  <p class="cause"><span>Proven Fix</span>Build a 2-stage state machine: order stays in pending state until tablet explicitly transmits human acceptance acknowledgement.</p>
</div>

<div class="issue">
  <strong>4. Promising Split Commissions Before Payment Provider Approval</strong>
  <p class="cause"><span>Likely Cause</span>Advertising multi-vendor automated payouts without securing merchant platform onboarding approvals from Stripe or Razorpay.</p>
  <p class="cause"><span>Proven Fix</span>Obtain written provider agreement on your business model, KYC flow, and refund liability terms prior to signing clients.</p>
</div>

<div class="issue">
  <strong>5. Buying Source Code Without Deployment Capability</strong>
  <p class="cause"><span>Likely Cause</span>Acquiring a codebase without possessing developer skills or cloud infrastructure to manage production deployments.</p>
  <p class="cause"><span>Proven Fix</span>Ensure your contract includes containerized Docker deployments, clear environment setups, and technical handover training.</p>
</div>

<div class="issue">
  <strong>6. Launching on Consumer Tablets Without Audible Alarms or Reliable Printers</strong>
  <p class="cause"><span>Likely Cause</span>Deploying cheap hardware that goes to sleep, silences notification chimes, or drops Bluetooth printer links during peak dinner rush.</p>
  <p class="cause"><span>Proven Fix</span>Standardize on dedicated enterprise tablets with persistent screen-on settings, hardwired Ethernet thermal printers, and continuous audible alerts.</p>
</div>

<div class="issue">
  <strong>7. Guessing Allergen Safety in Software</strong>
  <p class="cause"><span>Likely Cause</span>Allowing automatic menu importers or AI to tag dishes as gluten-free or nut-free without kitchen verification.</p>
  <p class="cause"><span>Proven Fix</span>Mandate formal written approval of allergen tags by restaurant management before menu publication.</p>
</div>

<div class="issue">
  <strong>8. Accepting Orders on Old and New Systems Simultaneously</strong>
  <p class="cause"><span>Likely Cause</span>Failing to coordinate cutover, resulting in confusion over which tablet the kitchen staff should watch.</p>
  <p class="cause"><span>Proven Fix</span>Enforce a strict, quiet-hour cutover with one unambiguous live order intake channel at any given time.</p>
</div>

<div class="issue">
  <strong>9. Counting Registered Signups Instead of Paying Locations</strong>
  <p class="cause"><span>Likely Cause</span>Reporting hundreds of free registered trials as evidence of product-market fit.</p>
  <p class="cause"><span>Proven Fix</span>Define active locations strictly as those processing at least 10 paid orders per week with current subscription dues.</p>
</div>

<div class="issue">
  <strong>10. Scaling Restaurant Count Before Pilot Economics Work</strong>
  <p class="cause"><span>Likely Cause</span>Onboarding dozens of restaurants while missed order rates remain high and customer support is overwhelmed.</p>
  <p class="cause"><span>Proven Fix</span>Do not expand past the initial 2–3 pilot stores until missed order rates drop below 1% and daily reconciliation is automated.</p>
</div>

# Founder & Release Checklists

## Founder Decision Checklist: Before You Start

Use this pre-implementation checklist before spending capital on development:

<div class="checklist">
  <li><b>Target Market Defined:</b> Named paying customer segment, launch city/region, and target restaurant category.</li>
  <li><b>Business Model Selected:</b> Chosen SaaS, Marketplace, or Hybrid model with plain-language fee definitions.</li>
  <li><b>Customer Research Completed:</b> Conducted interviews with at least 5 restaurant owners; observed live kitchen service.</li>
  <li><b>Committed Pilot Group:</b> Secured 2–3 restaurants with written agreement on success criteria.</li>
  <li><b>Contribution Unit Economics Modeled:</b> Realistic financial model factoring in support hours, delivery costs, and payment fees.</li>
  <li><b>Payment Flow Mapped:</b> Documented flow of customer funds, split fees, refunds, and provider KYC requirements.</li>
  <li><b>Hardware Standardized:</b> Approved tablet specifications, ESC/POS printer models, and connection protocols.</li>
  <li><b>Source-Code & Cloud Ownership Verified:</b> Production repositories, database credentials, and cloud accounts owned directly by founder.</li>
  <li><b>Downside Stop Condition Established:</b> Explicit financial threshold at which to pivot or halt the project if metrics fail.</li>
</div>

## Release Acceptance Checklist: Before You Go Live

Execute these tests in a staging environment and on production hardware with kitchen staff:

<div class="checklist">
  <li><b>Menu Math & Tax Calculation:</b> Cart totals, modifier price calculations, delivery fees, and tax breakdowns match perfectly.</li>
  <li><b>Store Hours & Sold-Out Rules:</b> Scheduled opening/closing hours, holiday overrides, and 86'd out-of-stock items block orders properly.</li>
  <li><b>Audio & Visual Alerts:</b> Incoming order notifications chime continuously until staff physically acknowledge the screen.</li>
  <li><b>Printer Recovery Drill:</b> Reconnecting a printer or clearing empty receipt paper reprints pending tickets without duplication.</li>
  <li><b>Live Payment & Refund Cycle:</b> Process real credit card authorizations, successful captures, partial refunds, and full cancellations.</li>
  <li><b>Tenant Data Security:</b> Verify that restaurant admin logins cannot query, view, or export data belonging to other tenants.</li>
  <li><b>Backup Restoration Tested:</b> Restore an actual database snapshot onto a recovery instance and verify record integrity.</li>
  <li><b>Emergency Rollback Plan Documented:</b> Named escalation contacts for front-of-house, payment provider, and technical infrastructure.</li>
</div>

## The 6-Card Executive Recap

<div class="paths">
  <div class="path">
    <span class="path-tag">Card 01</span>
    <span class="path-who">Strategy</span>
    <strong>Choose the Model</strong>
    <p>Decide whether you run a software SaaS, local marketplace, or hybrid before selecting features.</p>
  </div>
  <div class="path">
    <span class="path-tag">Card 02</span>
    <span class="path-who">Finance</span>
    <strong>Price the Real Job</strong>
    <p>Include customer acquisition, frontline support, and delivery costs in your pricing model.</p>
  </div>
  <div class="path">
    <span class="path-tag">Card 03</span>
    <span class="path-who">Architecture</span>
    <strong>Follow the Order</strong>
    <p>Every order must maintain an unbroken chain of custody from payment to kitchen ticket to settlement.</p>
  </div>
  <div class="path">
    <span class="path-tag">Card 04</span>
    <span class="path-who">Reliability</span>
    <strong>Test the Failures</strong>
    <p>Test spotty Wi-Fi, empty receipt paper, declined payments, and customer refunds before launch.</p>
  </div>
  <div class="path">
    <span class="path-tag">Card 05</span>
    <span class="path-who">Operations</span>
    <strong>Prove the Pilot</strong>
    <p>Launch with 2–3 engaged restaurants. Perfect operations before attempting aggressive scale.</p>
  </div>
  <div class="path">
    <span class="path-tag">Card 06</span>
    <span class="path-who">Governance</span>
    <strong>Own the Exit</strong>
    <p>Hold direct ownership of your domain names, customer data, cloud servers, and production source code.</p>
  </div>
</div>

# Working with EnactOn & Next Steps

## Enterprise Engineering for Independent Food Platforms

EnactOn builds and licenses food ordering software for founders, restaurant groups, and agencies seeking complete operational sovereignty:

- **12+ Years of Software Delivery:** Over 500 enterprise clients across 65+ countries worldwide.
- **GloriaFood-Scale Experience:** Built and operated a European restaurant ordering network supporting 300+ active restaurants live in production.
- **Deep Protocol & Workflow Knowledge:** Comprehensive command of GloriaFood order structures, kitchen printer protocols, and multi-tenant architectures.
- **GloriaFood Menu Migration Tooling:** Production-tested menu importers that parse existing categories, options, and modifier rules into modern cloud databases.
- **Multilingual Thermal Printing:** Proprietary server-side ticket rasterization delivering crisp thermal receipt printing for Chinese, Arabic, Hindi, and non-Latin scripts on standard ESC/POS hardware.
- **Full Client Cloud Ownership:** Complete source code licensing delivered directly to client AWS, DigitalOcean, or private cloud environments — zero proprietary hosting lock-in or recurring per-restaurant fees.

## Request a Technical Scope Walkthrough

Bring your target menu, hardware specifications, and business model for a live architectural walkthrough:

1. **Send a Project Brief:** Outline your launch territory, business model (SaaS vs Marketplace), expected restaurant volume, and target pilot deadline.
2. **Review a Live Demonstration:** Place sample orders with complex modifier chains, observe real-time tablet acknowledgements, print thermal receipts, and execute payment refund flows.
3. **Analyze the Fit-and-Gap Matrix:** Receive a written breakdown detailing included out-of-the-box modules, required third-party integrations, and custom engineering scope.

<a class="read-more" href="https://www.enacton.com/" target="_blank" rel="noopener">
  <span class="rm-label">EnactOn Technologies</span>
  <span class="rm-title">Schedule a Live Food Ordering Architecture Walkthrough</span>
  <span class="rm-go">Visit enacton.com ↗</span>
</a>

# Reference Register & Verification Notes

Public regulatory, technical, and commercial documentation verified as of October 2026:

1. **Oracle Food & Beverage:** [oracle.com/food-beverage](https://www.oracle.com/food-beverage/) — Oracle's official documentation states March 31, 2027 as the complete end-of-service date for the GloriaFood platform.
2. **GloriaFood Service Update:** [gloriafood.com](https://www.gloriafood.com/) — Service announcement citing April 30, 2027. Operators must plan migrations for before March 31, 2027 to avoid sudden downtime.
3. **Uber Eats Merchant Pricing:** [merchants.ubereats.com/us/en/pricing](https://merchants.ubereats.com/us/en/pricing/) — US published terms: 20% Lite, 25% Plus, 30% Premium tier commission rates.
4. **Stripe Connect Destination Charges:** [docs.stripe.com/connect/destination-charges](https://docs.stripe.com/connect/destination-charges) — Technical reference for platform charges, application fees, split payments, and transfer reversals.
5. **Razorpay Route Integration:** [razorpay.com/docs/payments/route](https://razorpay.com/docs/payments/route) — Technical reference for nodal linked accounts, automatic marketplace settlements, and refund deductions in India.
6. **PCI Security Standards Council:** [pcisecuritystandards.org](https://www.pcisecuritystandards.org/) — FAQ on merchant responsibilities under PCI-DSS when outsourcing card processing to hosted tokenized providers.
7. **UK Food Standards Agency (FSA):** [food.gov.uk/business-guidance/allergen-guidance-for-food-businesses](https://www.food.gov.uk/business-guidance/allergen-guidance-for-food-businesses) — Mandatory allergen disclosure guidelines for distance food sales before checkout and at delivery.
8. **European Commission GDPR:** [commission.europa.eu/law/law-topic/data-protection](https://commission.europa.eu/law/law-topic/data-protection/data-protection-explained_en) — Data protection principles governing controllers, processors, customer consents, and data portability.
9. **FSSAI Food Business Licensing (India):** [fssai.gov.in/business/registration](https://fssai.gov.in/business/registration) — Statutory food business registration and e-commerce compliance guidelines in India.
10. **CBIC GST Circular 167/2021 (India):** [cbic-gst.gov.in](https://cbic-gst.gov.in/pdf/Circular-167-17-12-2021-GST.pdf) — Indian tax regulations governing restaurant supplies through e-commerce operators under Section 9(5) of the CGST Act.
11. **HMRC VAT Notice 709/1 (UK):** [gov.uk/guidance/catering-takeaway-food-and-vat-notice-7091](https://www.gov.uk/guidance/catering-takeaway-food-and-vat-notice-7091) — VAT treatment rules for takeaway and delivered hot and cold food supplies.
12. **California CDTFA Regulation 1684.5 (US):** [cdtfa.ca.gov/lawguides/vol1/sutr/1684-5.html](https://www.cdtfa.ca.gov/lawguides/vol1/sutr/1684-5.html) — California Marketplace Facilitator Act provisions for online delivery networks.
13. **EnactOn Technologies:** [enacton.com](https://www.enacton.com/) — Enterprise food ordering platform architectures, custom software development, and technical migration consulting.

> **Evidence & Planning Limits:** Cost ranges, development timelines, unit economics figures, dashboard metrics, and acceptance recommendations in this playbook are planning models and architectural guidance, not contractual guarantees. Operators must verify local payment capabilities, tax treatments, and hardware compatibility for their specific jurisdiction.`,
});
