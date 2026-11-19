# Logo collection brief (official symbols through the desktop browser)

Goal: for each tool in your list, save the tool's OFFICIAL SYMBOL (the mark only, never the full logo with the brand name) taken from the tool's own website, into `/home/user/ai-atlas/logos/`, and record it.

The tool sites are blocked from this cloud machine. They are reachable only through the built-in browser on the owner's computer: tools named `mcp__remote-devices__Claude_Browser__*` (load them with ToolSearch, query `mcp__remote-devices__Claude_Browser__`, max_results 64). The browser is shared with another worker: create your OWN tab once with `tabs_create` and pass that `tabId` on every call. Never touch other tabs. Do not sign in anywhere, do not accept anything beyond what a page forces, do not submit forms. If a site asks for approval through `request_access`, do not request it: skip the tool and report it.

## Per tool

1. `navigate` your tab to the tool's URL.
2. Run JavaScript to list icon candidates:
   `JSON.stringify([...document.querySelectorAll('link[rel*="icon"]')].map(l=>[l.rel,l.sizes&&l.sizes.value,l.type,l.href]))`
3. Choose, in this order: an SVG icon; else the `apple-touch-icon`; else the largest PNG icon; else `/favicon.ico`. A site's favicon is normally the symbol alone, which is what we want.
4. Get the bytes into this machine:
   - SVG: `await fetch(URL).then(r=>r.text())`. If that fails because of cross-origin rules, `navigate` the tab to the icon URL itself and read `document.documentElement.outerHTML`. Save the text with the Write tool as `logos/<slug>.svg`.
   - PNG/ICO: draw it on a canvas at 128 px and return a data URL. Same-origin example:
     `await (async()=>{const b=await fetch(URL).then(r=>r.blob());const i=await createImageBitmap(b);const c=document.createElement('canvas');c.width=c.height=128;c.getContext('2d').drawImage(i,0,0,128,128);return c.toDataURL('image/png')})()`
     If cross-origin blocks the fetch, `navigate` the tab to the image URL first and run the same code there with `location.href`. Decode with Bash (`base64 -d`) into `logos/<slug>.png`. Copy the base64 text exactly; if the decoded file is not a valid PNG (`file logos/<slug>.png`), fetch again rather than repairing by hand.
5. Look at the saved file with the Read tool (for SVG, first check it is well-formed with `python3 -c "import xml.dom.minidom,sys;xml.dom.minidom.parse(sys.argv[1])" file`). Confirm it is this tool's symbol, with no brand name text. If the favicon is a generic placeholder, the parent company's logo, or contains the brand name, look for a better mark in the page header (an inline `<svg>` inside the home link, which you can read with `outerHTML`, keeping only the symbol part) and say what you did. If nothing suitable exists, do not improvise: record it as missing.
6. If the symbol is a single dark colour that would vanish on a dark background (or white that vanishes on light), also save a second variant: for an SVG, a copy with the fill switched (`logos/<slug>.svg` dark `#101818` for light backgrounds, `logos/<slug>-dark.svg` white `#ffffff`). For a PNG with its own solid background tile no second variant is needed.

## Recording

Write one JSON file, path given in your prompt, an object keyed by tool slug:

```
"<slug>": {"file": "logos/<slug>.svg", "file_dark": "logos/<slug>-dark.svg" or null, "source_url": "<exact icon URL>", "missing_reason": null,
           "note": "<Hebrew, one or two sentences: סמל בלבד, בלי שם המותג. נלקח מסמל האתר הרשמי (favicon) ב־19 בנובמבר 2026. + what is special: צבעוני / בצבע אחד עם גרסה כהה ולבנה / תמונה בגודל 128 פיקסלים עם רקע מלא>"}
```

For a missing one: `"file": null, "file_dark": null, "source_url": null, "missing_reason": "<Hebrew reason>", "note": null`.

Rules: never invent or redraw a logo, never use another product's or the parent company's mark, never take the full logo with the wordmark. Do not edit any file outside `logos/` and your JSON file. No git commands. Save the JSON after every few tools so progress survives an interruption.

Return a short summary: how many saved as SVG, how many as PNG, which are missing and why, and any you are unsure about.
