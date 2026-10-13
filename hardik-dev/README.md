# Clever Insight Analytics LLP — Aurora

The chosen site. Plain HTML, CSS and JavaScript: **no install, no build step, no dependencies.**

| Folder | What it is |
|---|---|
| `sim-03-aurora-platform/` | The site |
| `shared/content.js` | All copy, services, team, projects, and contact details |
| `shared/lib.js` | Shared helpers |

`index.html` in this folder redirects to the site.

## Quick start

```bash
git clone https://github.com/RishiRajak/CleverInsightAnalytics.git
cd CleverInsightAnalytics
git checkout Hardik-dev
cd hardik-dev
```

Then run it with **any one** of the options below. Serve from inside `hardik-dev/`, because the page loads `../shared/` files.

### Option A: just open the file
Double-click `hardik-dev/index.html`, or open `sim-03-aurora-platform/index.html` directly.
An internet connection is needed for Google Fonts. Without one, the fonts fall back to system fonts.

### Option B: Windows PowerShell
From inside `hardik-dev/`:

```powershell
powershell -ExecutionPolicy Bypass -File .\serve.ps1
```

Open <http://127.0.0.1:4173/sim-03-aurora-platform/>. Press `Ctrl+C` to stop.

### Option C: Node.js
```bash
npx serve -p 4173 .
```

### Option D: Python
```bash
python -m http.server 4173
```

## Editing content

Change copy in **`shared/content.js`**. Do not add personal emails, current employers, or client names. Project write-ups stay anonymous.

| File | Purpose |
|---|---|
| `shared/content.js` | Text and data |
| `shared/lib.js` | Animations, form handling, review mode |
| `sim-03-aurora-platform/index.html` | Page structure |
| `sim-03-aurora-platform/styles.css` | Look and feel |
| `sim-03-aurora-platform/script.js` | Renders sections from the content |
| `serve.ps1` | Local web server for Windows |

## Notes

- **Start a project** opens `info@cleverinsightanalytics.com`.
- The on-page form does the same until a form service URL is added at `contact.formEndpoint`.
- The wordmark is **CIA** until a logo exists.
- The site respects the reduced-motion setting of the operating system.
- Add `?review=1` to outline anything still marked `todo`.
