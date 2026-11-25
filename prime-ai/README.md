# Prime AI website

Static site (HTML/CSS/JS, no build step). Open `index.html` in a browser, or upload the `prime-ai/` folder to any static host (Netlify, Vercel, GitHub Pages, Cloudflare Pages).

## Before launch: replace the placeholders

| What | Where |
|---|---|
| Brand colors and font | Set from the logo (navy `#0B1B3F`, orange `#FF6B1A`) at the top of `styles.css`; adjust there if needed |
| Logo | Done: `assets/logo-primeai.png` (full lockup), `assets/logo-mark.png` (P mark), `assets/favicon.png`. An SVG version would be sharper if you have one |
| Hero athlete | Replace the placeholder ball `assets/hero-athlete.svg` with a cut-out athlete photo (transparent PNG/WebP, about 900×1000 px), then update the `hero-athlete` `<img src>` in `index.html` and delete the yellow "Placeholder: athlete photo goes here" tag right below it |
| Domain | Replace every `https://www.example.com` in `index.html` (canonical, Open Graph, JSON-LD) |
| Email | Replace `hello@example.com` in `index.html` (JSON-LD, footer) |
| Results | The Results section is a labeled sample: fill in a real case study, then delete the "Sample layout" note |
| Team | Names, roles and initials (or swap the initials for photos) |

## AEO / GEO built in

- JSON-LD in `<head>`: `ProfessionalService` (services, US service area), `WebSite`, and `FAQPage`. Keep the FAQ text in the JSON-LD identical to the visible FAQ.
- Semantic headings, descriptive meta tags, and plain-language answers that assistants can quote.
- Validate after deploying with Google's Rich Results Test and the Schema.org validator.

## Application form

The "Apply for a spot" section has a built-in 3-step form (no Typeform needed):

1. Name, email, phone number, then the "Apply for a spot" button
2. Where are you right now? (Preparing to launch / Live and growing / Established and scaling)
3. How many members do you have currently? and What do you need help with? (Lead generation / Lead management and follow-up / Landing page / AI automation, pick any), then "Apply for the spot"

**Where the answers go.** Pick one before launch:

- **Netlify:** host the site on Netlify and do nothing else. Answers show up under Forms in your Netlify dashboard, and you can turn on email notifications there.
- **Any other host:** make a free form at formspree.io, copy its URL (like `https://formspree.io/f/abcd1234`) and paste it into `data-endpoint=""` on the `<form id="apply-form">` tag in `index.html`. Answers arrive in your email.

To change a question or option, edit its text in the `apply-step` blocks in `index.html`.
