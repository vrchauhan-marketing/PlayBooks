PLAYBOOKS.push({
  slug: "gloriafood-migration",
  volume: "01",
  title: "The Complete GloriaFood Migration Playbook",
  spineTitle: "GloriaFood Migration Playbook",
  subtitle: "A practical guide for restaurant owners, resellers and agencies facing the 2027 end of life",
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
  eyebrow: "Migration Playbook · 2027 EOL",
  notice: "<b>Service update:</b> GloriaFood reaches end of life on April 30, 2027. Recommended cutover: March 31, 2027. Data is permanently deleted after May 30, 2027.",

  // Photos: Unsplash (free licence), hot-linked
  coverImage: "https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?w=900&q=70&auto=format&fit=crop",
  heroImage:  "https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?w=2000&q=70&auto=format&fit=crop",
  chapterImages: [
    "https://images.unsplash.com/photo-1556940211-ea1d97e04458?w=900&q=70&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1592229005296-735b0f6c0722?w=900&q=70&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1778795365767-816ded16356c?w=900&q=70&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1588416820614-f8d6ac6cea56?w=900&q=70&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1652862730784-bb2a6e862514?w=900&q=70&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1622021142947-da7dedc7c39a?w=900&q=70&auto=format&fit=crop",
  ],
  credits: "Photography via Unsplash. Illustrations are original.",
  legal: [
    "GloriaFood and Oracle are trademarks or registered trademarks of Oracle and/or its affiliates. FoodAmigos, Menufy, ChowNow, Owner.com, UpMenu, Deonde, Ressto, Stripe, Square, DigitalOcean, Google, Apple Pay, Instagram, TikTok and Facebook are trademarks of their respective owners. This playbook is an independent publication and is not affiliated with, sponsored by or endorsed by Oracle, GloriaFood or any vendor mentioned.",
  ],

  description: [
    "In 2026 Oracle announced the end of life of GloriaFood, the freemium online-ordering platform that thousands of independent restaurants and white-label agencies were built on. Every account goes dark on April 30, 2027, and the data is destroyed 30 days later.",
    "This playbook is the full migration plan: the deadlines that actually matter, a decision matrix for choosing your path, the five-year economics for agencies, a four-phase technical cutover with zero lost orders, ready-to-send templates for clients, staff and customers, and an emergency troubleshooting guide for launch week.",
  ],

  content: `
# The Situation & Timeline

## What happened to GloriaFood?

In 2021, Oracle acquired GloriaFood. In 2026, Oracle officially announced the **End of Life (EOL)** of the GloriaFood product line.

GloriaFood gained global popularity because of its "freemium" core model — free online ordering widgets with low-cost add-ons for card processing, branded apps and websites. Now that Oracle is retiring the platform, thousands of independent restaurants and white-label agencies face a hard deadline to transition to a new system.

## Critical deadlines you must know

<div class="timeline">
  <div class="tl-item"><span class="tl-date">March 2026</span><span class="tl-label">Oracle EOL announced</span></div>
  <div class="tl-item"><span class="tl-date">October 2026</span><span class="tl-label">Add-on sales frozen</span></div>
  <div class="tl-item tl-key"><span class="tl-date">March 31, 2027</span><span class="tl-label">Recommended cutover target</span></div>
  <div class="tl-item tl-end"><span class="tl-date">April 30, 2027</span><span class="tl-label">Official Oracle shutdown</span></div>
  <div class="tl-item tl-end"><span class="tl-date">May 30, 2027</span><span class="tl-label">Final 30-day data window closes</span></div>
</div>

**Immediate restrictions.** Oracle has already disabled new direct restaurant sign-ups and frozen sales of new add-on features (Branded Apps, Sales-Optimized Websites, Payment eStore).

**March 31, 2027 — your target deadline.** Although GloriaFood.com lists April 30, 2027, Oracle's main Food & Beverage site lists March 31, 2027. Plan your migration cutover for March 31 to avoid sudden downtime if accounts are terminated early.

**April 30, 2027 — final EOL.** All GloriaFood services permanently shut down.

**30-day grace period (ends May 30, 2027).** You have 30 calendar days after expiration to pull any remaining data. After this window, Oracle permanently destroys all stored restaurant records.

> **Partner commission deadline.** Reseller partners must request any pending payouts (of $50 or more) within 30 days of closure, or access is terminated.

<a class="read-more" href="https://www.enacton.com/blog/gloriafood-shutting-down/" target="_blank" rel="noopener"><span class="rm-label">EnactOn Blog</span><span class="rm-title">GloriaFood Shutting Down: Impact on Restaurants & White-Label Partners</span><span class="rm-go">Read the article ↗</span></a>

# Choosing Your Path

## The strategic decision matrix

Every GloriaFood user falls into one of three categories. Start with one question: *what is your business model?*

<div class="paths">
  <div class="path"><span class="path-tag">Path A</span><span class="path-who">Single restaurant</span><strong>Turnkey SaaS</strong><p>Plug-and-play direct ordering — Menufy, ChowNow, FoodAmigos.</p></div>
  <div class="path"><span class="path-tag">Path B</span><span class="path-who">Agency / reseller</span><strong>White-label</strong><p>Protect agency margins and brand ownership.</p></div>
  <div class="path"><span class="path-tag">Path C</span><span class="path-who">Full dine-in POS</span><strong>POS module</strong><p>Consolidate dining room, kitchen and online ordering.</p></div>
</div>

## Vendor comparison: Path A vs. budget alternatives

<div class="vendor">
  <div class="vendor-head"><strong>FoodAmigos</strong><span>Best for GloriaFood switchers</span></div>
  <dl><dt>Monthly</dt><dd>Custom / tiered</dd><dt>Per order</dt><dd>Low commission structure</dd><dt>Processing</dt><dd>Standard Stripe / merchant</dd></dl>
  <p class="pro">Official GloriaFood transition partner.</p><p class="con">Newer brand name.</p>
</div>

<div class="vendor">
  <div class="vendor-head"><strong>Menufy</strong><span>Best for standalone independents</span></div>
  <dl><dt>Monthly</dt><dd>$149 annual · $179 monthly</dd><dt>Per order</dt><dd>$0 platform fee (optional ~$1.75 customer convenience fee)</dd><dt>Processing</dt><dd>2.75% + $0.30</dd></dl>
  <p class="pro">Predictable cost, no revenue share.</p><p class="con">Convenience fees can irritate repeat locals.</p>
</div>

<div class="vendor">
  <div class="vendor-head"><strong>ChowNow</strong><span>Best for high-volume takeout & delivery</span></div>
  <dl><dt>Monthly</dt><dd>$229 – $249+ plus setup fees</dd><dt>Per order</dt><dd>$0 commission</dd><dt>Processing</dt><dd>~2.95% + $0.29</dd></dl>
  <p class="pro">Excellent consumer app and marketing tools.</p><p class="con">High upfront setup and annual commitment.</p>
</div>

<div class="vendor">
  <div class="vendor-head"><strong>Owner.com</strong><span>Best for growth-focused restaurants (SEO, loyalty)</span></div>
  <dl><dt>Monthly</dt><dd>$249 + fee, or $499 flat</dd><dt>Per order</dt><dd>None on flat tier</dd><dt>Processing</dt><dd>Integrated</dd></dl>
  <p class="pro">Industry-leading automated marketing and SEO.</p><p class="con">Expensive entry price point.</p>
</div>

<div class="vendor">
  <div class="vendor-head"><strong>UpMenu</strong><span>Best for small bistros & cafés with low volume</span></div>
  <dl><dt>Monthly</dt><dd>$49 (75 orders) · $89 (210) · $169 (unlimited)</dd><dt>Per order</dt><dd>$1.90 per order over tier limit</dd><dt>Processing</dt><dd>Standard payment gateway</dd></dl>
  <p class="pro">Very inexpensive for low order counts.</p><p class="con">Penalties when you exceed order caps.</p>
</div>

<div class="vendor">
  <div class="vendor-head"><strong>Deonde (Ressto)</strong><span>Best for budget-conscious single operators</span></div>
  <dl><dt>Monthly</dt><dd>$0 (up to 100 orders) · $39 Growth · $99 Scale</dd><dt>Per order</dt><dd>Advertised 0% commission</dd><dt>Processing</dt><dd>Bring your own gateway</dd></dl>
  <p class="pro">Closest thing to GloriaFood's old free model.</p><p class="con">Requires more hands-on configuration.</p>
</div>

<a class="read-more" href="https://www.enacton.com/blog/gloriafood-alternatives/" target="_blank" rel="noopener"><span class="rm-label">EnactOn Blog</span><span class="rm-title">Top 8 GloriaFood Alternatives in 2026: Pricing, Pros & Cons</span><span class="rm-go">Read the article ↗</span></a>

# Agency & Reseller Economics

## Why Path B matters

If you manage 10, 25 or 50 restaurants, moving all of them to a standard $200/month SaaS will cost you **$2,000 to $10,000 every month.**

## Total cost of ownership

Let's model an agency with **20 restaurant client accounts**.

<div class="scenario">
  <span class="sc-tag">Scenario 1</span>
  <strong>Retailing a standard SaaS</strong>
  <span class="sc-note">$180/mo per location</span>
  <dl><dt>Monthly</dt><dd>20 × $180 = $3,600</dd><dt>Annual</dt><dd>$43,200</dd></dl>
  <div class="sc-total"><span>3-year total</span><b>$129,600</b></div>
</div>

<div class="scenario">
  <span class="sc-tag">Scenario 2</span>
  <strong>Reselling a white-label platform</strong>
  <span class="sc-note">e.g. $30/mo per location</span>
  <dl><dt>Monthly</dt><dd>20 × $30 = $600</dd><dt>Annual</dt><dd>$7,200</dd></dl>
  <div class="sc-total"><span>3-year total</span><b>$21,600</b></div>
</div>

<div class="scenario sc-best">
  <span class="sc-tag">Scenario 3</span>
  <strong>Owning / hosting your own multi-tenant platform</strong>
  <span class="sc-note">DigitalOcean managed stack, ~$190/mo flat</span>
  <dl><dt>Annual cloud</dt><dd>$2,280</dd><dt>One-time setup</dt><dd>~$5,000 – $8,000 deployment & migration</dd></dl>
  <div class="sc-total"><span>3-year total</span><b>$14,840</b></div>
</div>

<a class="read-more" href="https://www.enacton.com/blog/hidden-costs-of-saas-food-ordering-platforms/" target="_blank" rel="noopener"><span class="rm-label">EnactOn Blog</span><span class="rm-title">Hidden Costs of SaaS Food Ordering Platforms like GloriaFood</span><span class="rm-go">Read the article ↗</span></a>

> **Strategic takeaway.** Fewer than 5 clients: choose a turnkey SaaS (Path A). Between 5 and 20 clients: rent a white-label partner SaaS (Path B1). More than 20 clients: building or hosting your own platform (Path B2) saves tens of thousands of dollars.

<a class="read-more" href="https://www.enacton.com/blog/gloriafood-partner-program-alternative/" target="_blank" rel="noopener"><span class="rm-label">EnactOn Blog</span><span class="rm-title">Best GloriaFood Partner Program Alternatives [2026]</span><span class="rm-go">Read the article ↗</span></a>

<a class="read-more" href="https://www.enacton.com/blog/how-to-build-a-platform-like-gloriafood/" target="_blank" rel="noopener"><span class="rm-label">EnactOn Blog</span><span class="rm-title">How to Build a Platform Like GloriaFood: Step-by-Step Guide</span><span class="rm-go">Read the article ↗</span></a>

# The Technical Migration Playbook

Follow this step-by-step technical plan to ensure zero lost orders and zero broken links.

<a class="read-more" href="https://www.enacton.com/blog/gloriafood-migration-checklist/" target="_blank" rel="noopener"><span class="rm-label">EnactOn Blog</span><span class="rm-title">Ultimate GloriaFood Migration Checklist for Partners [2026]</span><span class="rm-go">Read the article ↗</span></a>

## Phase 1 — Data extraction & audit
<p class="eyebrow">Month 1</p>

- **Export the menu.** Download your categories, items, variant modifiers, pricing and high-resolution product photos.
- **Export the customer database.** Download opted-in customer lists: names, emails, SMS phone numbers, order count.
- **Save geofenced delivery zones.** Screenshot your GloriaFood delivery polygon maps, along with minimum order amounts and per-mile delivery surcharges.
- **Export historical financials.** Pull at least 12–24 months of order history for your accountant and tax compliance.

<a class="read-more" href="https://www.enacton.com/blog/gloriafood-data-export/" target="_blank" rel="noopener"><span class="rm-label">EnactOn Blog</span><span class="rm-title">GloriaFood Data Export Guide: Menu, Customers and Orders</span><span class="rm-go">Read the article ↗</span></a>

<figure class="illo"><img src="assets/gloriafood/delivery-zones.svg" alt="Record every zone before export: polygon edges, minimum order and delivery fee."><figcaption>Record every zone before export: polygon edges, minimum order and delivery fee.</figcaption></figure>

## Phase 2 — Hardware & kitchen workflow
<p class="eyebrow">Month 2</p>

<figure class="illo"><img src="assets/gloriafood/tablet-order.svg" alt="The order screen and kitchen ticket your staff will live with — test modifiers like these before launch."><figcaption>The order screen and kitchen ticket your staff will live with — test modifiers like these before launch.</figcaption></figure>

> The number one reason online ordering migrations fail is **kitchen miscommunication.**

- **Order notification method.** Will your kitchen use an Android tablet, an iPad, a thermal Bluetooth/LAN printer, or direct POS tickets?
- **Hardware compatibility.** GloriaFood allowed standard consumer Android tablets. Make sure your replacement system supports your existing tablets so you don't need to buy new equipment.
- **Test printing.** Test order modifications ("No onions, extra dressing, sauce on the side") to verify the kitchen receipt formats them legibly.

## Phase 3 — The 2-store pilot & dual running
<p class="eyebrow">Month 3</p>

- **Never migrate your entire portfolio on a single Friday night.**
- Pick one or two forgiving locations to run both systems side by side.
- Keep GloriaFood active while routing select customer traffic through the new system.
- **Check payment settlement times.** Verify that Stripe, Square or your merchant processor deposits funds into your bank account within 24–48 hours.

<a class="read-more" href="https://www.enacton.com/blog/gloriafood-reseller-mistakes/" target="_blank" rel="noopener"><span class="rm-label">EnactOn Blog</span><span class="rm-title">8 GloriaFood Reseller Mistakes to Avoid When Switching Platforms</span><span class="rm-go">Read the article ↗</span></a>

## Phase 4 — The public cutover
<p class="eyebrow">Month 4</p>

Update your links in this exact sequence:

<figure class="illo"><img src="assets/gloriafood/qr-cutover.svg" alt="Retire every printed QR code that still points to the old ordering link."><figcaption>Retire every printed QR code that still points to the old ordering link.</figcaption></figure>

1. **Website "Order Online" button.** Point it to the new URL or replace the embedded widget code.
2. **Google Business Profile.** Update the primary "Order" link in your Google Maps card (Google can take 24–48 hours to approve).
3. **Social media profiles.** Update link-in-bio on Instagram, TikTok and Facebook.
4. **Physical QR codes.** Replace printed QR stickers on dining tables, packaging and window signage.

> Keep GloriaFood as a fallback for **14 days**, then shut it down.

# Ready-to-Use Communication Templates

## Template 1 — Email from agency to restaurant owner

<div class="letter">

**Subject:** Important update: upgrading our online ordering system for [Restaurant Name]

Dear [Owner Name],

As part of our ongoing work managing your digital ordering, we want to let you know about an important upcoming technology upgrade.

Oracle, the parent company of GloriaFood, has announced that it will be retiring its ordering platform in 2027. To keep your orders running smoothly with zero downtime, we are proactively transitioning [Restaurant Name] to our new, upgraded ordering system.

**What this means for your restaurant:**

- **Better customer experience** — faster mobile ordering, cleaner checkout and improved order tracking for your guests.
- **Zero disruption** — we are handling all the technical work: migrating your full menu, prices, photos and delivery zones.
- **Same simple order taking** — you will receive orders through an easy-to-use tablet app, just like you do today.

**Next steps:** we will set up your new system over the next few weeks and schedule a quick 15-minute test with your staff before going live.

Please let me know if you have any questions!

Best regards,<br>[Your Name]<br>[Your Agency / Company]

</div>

<a class="read-more" href="https://www.enacton.com/blog/gloriafood-reseller-email-templates/" target="_blank" rel="noopener"><span class="rm-label">EnactOn Blog</span><span class="rm-title">GloriaFood Reseller Email Templates: How to Tell Clients About the Migration</span><span class="rm-go">Read the article ↗</span></a>

## Template 2 — Staff & kitchen training checklist

<div class="letter">

**Subject:** Staff guide: new online ordering system starting [Date]

**Kitchen & counter staff instructions.** On [Date], our online ordering system is switching to a new tablet. Here is what you need to know:

- **Incoming orders.** The new tablet will ring loudly with incoming orders, just like the old one. Touch the screen to accept the order and select the estimated prep time (e.g. 20 mins, 40 mins).
- **Kitchen tickets.** Orders print automatically to the thermal printer. Check that modifier notes (allergies, special requests) print clearly.
- **86'ing / out-of-stock items.** If we run out of an ingredient, tap the "Menu" tab on the tablet, find the item and toggle it to "Unavailable Today."
- **Customer pickup.** When the customer arrives, check the 4-digit order number on their phone against the printed ticket.
- **If the internet drops.** Call the shift manager immediately at [Phone Number] or contact support at [Support Phone].

</div>

## Template 3 — Customer-facing notice

<p class="eyebrow">For website & social media</p>

<figure class="illo"><img src="assets/gloriafood/phone-ordering.svg" alt="What your guests should see after the switch: a faster menu and checkout."><figcaption>What your guests should see after the switch: a faster menu and checkout.</figcaption></figure>

<div class="letter">

**We've upgraded our online ordering! 🍕🎉**

Ordering your favorites just got even easier! We've rolled out a brand-new, faster online ordering experience on our website.

📱 Faster checkout on your phone<br>
💳 Apple Pay & Google Pay supported<br>
🛵 Live tracking for your deliveries

Try it on your next order: [Link to Online Ordering]

*(If you had our old menu bookmarked, please update your link!)*

</div>

# Emergency Troubleshooting Guide

When something breaks during launch week, find the symptom below, confirm the root cause, and apply the immediate fix.

<div class="issue">
  <strong>Kitchen printer stops printing orders</strong>
  <p class="cause"><span>Root cause</span>IP address lease expired, or Bluetooth disconnected.</p>
  <ol><li>Power-cycle the printer and the tablet.</li><li>Check the Wi-Fi network — both must be on the same 2.4 GHz network.</li><li>Keep orders visible on the tablet screen while troubleshooting.</li></ol>
</div>

<div class="issue">
  <strong>Old menu items keep showing up</strong>
  <p class="cause"><span>Root cause</span>Customer browser caching, or third-party links still pointing to the old GloriaFood URL.</p>
  <ol><li>Set up a 301 redirect on your website domain.</li><li>Inspect your Google Business Profile to make sure Google's auto-menu hasn't cached old links.</li></ol>
</div>

<div class="issue">
  <strong>Payouts not reaching the restaurant's bank</strong>
  <p class="cause"><span>Root cause</span>Incomplete KYC / Stripe verification on the new merchant account.</p>
  <ol><li>Log into the merchant dashboard and complete any pending business documentation or identity verification steps.</li></ol>
</div>

<div class="issue">
  <strong>Customers report missing delivery zones</strong>
  <p class="cause"><span>Root cause</span>Polygon geofence coordinates didn't import cleanly.</p>
  <ol><li>Manually re-draw delivery radiuses in the new admin portal.</li><li>Test with a sample address at the boundary edge.</li></ol>
</div>
`,
});
