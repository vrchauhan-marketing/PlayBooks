/*
 * PLAYBOOK REGISTRY
 * -----------------
 * Site-wide settings + the list every playbook file adds itself to.
 *
 * To add a new playbook:
 *   1. Copy playbooks/_template.js to playbooks/your-slug.js and fill it in.
 *   2. Add <script src="playbooks/your-slug.js"></script> in index.html
 *      (below the existing playbook scripts). It appears on the shelf automatically —
 *      newest script = top of the stack.
 */
window.SITE = {
  name: "Playbooks",
  tagline: "Field guides for operators",
  about:
    "Practical, no-fluff playbooks for restaurant owners, resellers and agencies. " +
    "Each volume is a complete field guide to one problem — the timeline, the decision, " +
    "the economics, the step-by-step plan and the templates to ship it.",

  // Publisher — used on covers, title pages, copyright pages and the site footer
  publisher: "EnactOn Technologies",
  publisherShort: "EnactOn",
  publisherUrl: "https://www.enacton.com",
  logoColor: "assets/enacton-logo-color.png",   // for light backgrounds (book pages)
  logoLight: "assets/enacton-logo-light.png",   // for dark backgrounds (site, covers)
  copyrightYear: "2026",
  rights:
    "No part of this publication may be reproduced, distributed or transmitted " +
    "in any form or by any means, including photocopying, recording or other electronic or mechanical " +
    "methods, without the prior written permission of the publisher, except for brief quotations " +
    "with attribution and other non-commercial uses permitted by copyright law.",
  disclaimer:
    "This playbook is provided for general information only and does not constitute legal, financial, " +
    "tax or investment advice. Dates, prices and product details are believed accurate at the time of " +
    "writing but may change; verify with the relevant vendors before making decisions.",
};

window.PLAYBOOKS = [];

/* Placeholder spines shown under the real books. Set to [] to hide. */
window.FORTHCOMING = [
  { title: "Next volume in preparation" },
];
