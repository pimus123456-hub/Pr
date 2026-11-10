# Prime AI website

Static site (HTML/CSS/JS, no build step). Open `index.html` in a browser, or upload the `prime-ai/` folder to any static host (Netlify, Vercel, GitHub Pages, Cloudflare Pages).

## Before launch: replace the placeholders

| What | Where |
|---|---|
| Brand colors and font | Set from the logo (navy `#0B1B3F`, orange `#FF6B1A`) at the top of `styles.css`; adjust there if needed |
| Logo | Done: `assets/logo-primeai.png` (full lockup), `assets/logo-mark.png` (P mark), `assets/favicon.png`. An SVG version would be sharper if you have one |
| Hero athlete | Replace the placeholder ball `assets/hero-athlete.svg` with a cut-out athlete photo (transparent PNG/WebP, about 900×1000 px), then update the `hero-athlete` `<img src>` in `index.html` |
| Domain | Replace every `https://www.example.com` in `index.html` (canonical, Open Graph, JSON-LD) |
| Email | Replace `hello@example.com` in `index.html` (JSON-LD, footer) |
| Results | The Results section is a labeled sample: fill in a real case study, then delete the "Sample layout" note |
| Team | Names, roles and initials (or swap the initials for photos) |

## AEO / GEO built in

- JSON-LD in `<head>`: `ProfessionalService` (services, US service area), `WebSite`, and `FAQPage`. Keep the FAQ text in the JSON-LD identical to the visible FAQ.
- Semantic headings, descriptive meta tags, and plain-language answers that assistants can quote.
- Validate after deploying with Google's Rich Results Test and the Schema.org validator.

## Contact form

The contact section embeds the Typeform at https://form.typeform.com/to/W63GgAyb, so responses arrive in your Typeform account. To use a different form, change the URL in both places in the contact section of `index.html` (the iframe and the "Open the form in a new tab" button).
