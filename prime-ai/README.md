# Prime AI website

Static site (HTML/CSS/JS, no build step). Open `index.html` in a browser, or upload the `prime-ai/` folder to any static host (Netlify, Vercel, GitHub Pages, Cloudflare Pages).

## Before launch: replace the placeholders

| What | Where |
|---|---|
| Brand colors and font | Top of `styles.css` (`--brand`, `--accent`, `--ink`, `--font`, …) |
| Logo | Replace `assets/logo-placeholder.svg` (same filename), or update the `<img>` paths in `index.html` |
| Hero photo | Add e.g. `assets/hero.jpg`, then set `--hero-image: url("assets/hero.jpg");` in `styles.css` |
| Domain | Replace every `https://www.example.com` in `index.html` (canonical, Open Graph, JSON-LD) |
| Email | Replace `hello@example.com` in `index.html` (JSON-LD, form `data-mailto`, footer) |
| Booking link | The "Prefer to book a time?" button in the contact section |
| Results | The Results section is a labeled sample: fill in a real case study, then delete the "Sample layout" note |
| Team | Names, roles and initials (or swap the initials for photos) |

## AEO / GEO built in

- JSON-LD in `<head>`: `ProfessionalService` (services, US service area), `WebSite`, and `FAQPage`. Keep the FAQ text in the JSON-LD identical to the visible FAQ.
- Semantic headings, descriptive meta tags, and plain-language answers that assistants can quote.
- Validate after deploying with Google's Rich Results Test and the Schema.org validator.

## Contact form

By default the form opens the visitor's email app with their details filled in. To receive submissions directly, point the form's `action` at a form service (e.g. Formspree), add `method="POST"`, and remove the `data-mailto` attribute.
