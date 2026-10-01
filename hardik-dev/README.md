# Hardik-dev — Clever Insight Analytics design simulations

Three finished-look landing-page simulations for partner review. Plain HTML, CSS and JavaScript: **no install, no build step, no dependencies.**

| Sim | Folder | Style |
|---|---|---|
| 01 | `sim-01-command-center/` | Dark, technical, animated data-flow diagram |
| 02 | `sim-02-signal-house/` | Light editorial, serif type, animated chart |
| 03 | `sim-03-aurora-platform/` | Dark glass, gradients, interactive product preview |

`index.html` in this folder is a hub that links to all three.

## Quick start

```bash
git clone https://github.com/RishiRajak/CleverInsightAnalytics.git
cd CleverInsightAnalytics
git checkout Hardik-dev
cd hardik-dev
```

Then run it with **any one** of the options below. Always serve from inside `hardik-dev/`, because the sims load `../shared/` files.

### Option A: just open the file (easiest)
Double-click `hardik-dev/index.html`, or drag it into your browser. This works because there is no build step.
An internet connection is needed for the Google Fonts. Without one, the fonts fall back to system fonts.

### Option B: Windows PowerShell (nothing to install)
From inside `hardik-dev/`:

```powershell
powershell -ExecutionPolicy Bypass -File .\serve.ps1
```

Open <http://127.0.0.1:4173/>. Press `Ctrl+C` to stop.

### Option C: Node.js
```bash
npx serve -p 4173 .
```

### Option D: Python
```bash
python -m http.server 4173
```

### Option E: VS Code
Install the **Live Server** extension, right-click `hardik-dev/index.html`, then choose **Open with Live Server**.

## Open each simulation

With a server running on port 4173:

- Hub: <http://127.0.0.1:4173/>
- Sim 01: <http://127.0.0.1:4173/sim-01-command-center/>
- Sim 02: <http://127.0.0.1:4173/sim-02-signal-house/>
- Sim 03: <http://127.0.0.1:4173/sim-03-aurora-platform/>

Without a server, open `sim-01-command-center/index.html`, `sim-02-signal-house/index.html` or `sim-03-aurora-platform/index.html` directly.

## Review mode (see what is still a placeholder)

Add `?review=1` to any sim URL, for example `http://127.0.0.1:4173/sim-03-aurora-platform/?review=1`. You can also press the **Review mode** button at the bottom-left of the page.

It outlines every placeholder in orange and lists the info still needed from the founders. Sample testimonials appear **only** in this mode.

## Editing content

All three sims read from one file: **`shared/content.js`**.
Change copy, services, team, projects, FAQ or contact details there and all three update. Items marked `todo` are placeholders.

| File | Purpose |
|---|---|
| `shared/content.js` | Single source of truth for all text and data |
| `shared/lib.js` | Shared helpers: animations, form handling, review mode |
| `sim-0X-*/index.html` | Page structure |
| `sim-0X-*/styles.css` | Look and feel of that sim |
| `sim-0X-*/script.js` | Renders that sim's sections from the content |
| `serve.ps1` | Tiny local web server for Windows |

## Notes

- The contact form opens the visitor's email app until a form service URL is added at `contact.formEndpoint` in `shared/content.js`.
- The site respects the reduced-motion setting of the operating system.
- Project context and the checklist of info needed are in `../memory.md`.
