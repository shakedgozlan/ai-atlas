#!/usr/bin/env python3
"""Copies symbol-only logos from two icon libraries into logos/ and writes data/staging/_logos.json."""
import json, os, re, sys
root = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
lobe, si = sys.argv[1], sys.argv[2]   # paths to the unpacked package/icons folders
L, S = 'lobe', 'si'
MAP = {  # tool slug: (library, icon name, coloured?)
 'chatgpt': (L,'openai',0), 'claude': (L,'claude-color',1), 'gemini': (L,'gemini-color',1), 'microsoft-copilot': (L,'copilot-color',1),
 'perplexity': (L,'perplexity-color',1), 'grok': (L,'grok',0), 'deepseek': (L,'deepseek-color',1), 'meta-ai': (L,'metaai-color',1),
 'deepl': (L,'deepl',0), 'grammarly': (S,'grammarly',0),
 'adobe-firefly': (L,'adobefirefly-color',1), 'flux': (L,'flux',0), 'ideogram': (L,'ideogram',0), 'krea': (L,'krea',0), 'midjourney': (L,'midjourney',0),
 'stability-ai': (L,'stability-color',1), 'topaz-labs': (L,'topazlabs',0), 'recraft': (L,'recraft',0),
 'figma': (L,'figma-color',1), 'framer': (S,'framer',0), 'webflow': (S,'webflow',0), 'wix': (S,'wix',0), 'v0': (L,'v0',0),
 'capcut': (L,'capcut',0), 'veed': (S,'veed',0), 'elevenlabs': (L,'elevenlabs',0), 'suno': (L,'suno',0),
 'hunyuan-3d': (L,'hunyuan-color',1), 'meshy': (L,'meshy-color',1), 'tripo': (L,'tripo',0),
 'claude-code': (L,'claudecode-color',1), 'cline': (L,'cline',0), 'codex': (L,'codex-color',1), 'cursor': (L,'cursor',0), 'devin': (L,'devin-color',1),
 'github-copilot': (L,'githubcopilot',0), 'google-antigravity': (L,'antigravity-color',1), 'kiro': (L,'kiro-color',1), 'zed': (S,'zedindustries',0),
 'google-ai-studio': (L,'aistudio',0), 'lovable': (L,'lovable-color',1), 'replit': (L,'replit-color',1),
 'make': (L,'make-color',1), 'manus': (L,'manus',0), 'n8n': (L,'n8n-color',1), 'zapier': (L,'zapier-color',1),
 'notion': (L,'notion',0), 'notebooklm': (L,'notebooklm',0),
}
SRC = {L: ('https://lobehub.com/icons', 'ספריית הסמלים של LobeHub (חבילת ‎@lobehub/icons-static-svg‏, גרסה 1.104.0, רישיון MIT)'),
       S: ('https://simpleicons.org', 'ספריית הסמלים Simple Icons (חבילת simple-icons, גרסה 16.38.0, רישיון CC0)')}
out = {}
for slug, (lib, name, colour) in MAP.items():
    p = os.path.join(lobe if lib == L else si, name + '.svg')
    if not os.path.exists(p): print('MISSING', slug, name); continue
    svg = open(p).read()
    svg = re.sub(r' style="[^"]*"', '', svg).replace('height="1em"', 'height="24"').replace('width="1em"', 'width="24"').replace(' role="img"', '')
    if colour:
        open(os.path.join(root, 'logos', slug + '.svg'), 'w').write(svg)
        out[slug] = {'file': 'logos/%s.svg' % slug, 'file_dark': None, 'source_url': SRC[lib][0], 'missing_reason': None,
                     'note': 'סמל בלבד, בלי שם המותג. נלקח מ%s ב־19 בנובמבר 2026, ולא מהאתר הרשמי. סמל צבעוני שמתאים גם לרקע בהיר וגם לרקע כהה.' % SRC[lib][1]}
    else:
        for suffix, fill in (('', '#101818'), ('-dark', '#ffffff')):
            s = svg.replace('fill="currentColor"', 'fill="%s"' % fill) if 'fill="currentColor"' in svg else svg.replace('<svg ', '<svg fill="%s" ' % fill, 1)
            open(os.path.join(root, 'logos', slug + suffix + '.svg'), 'w').write(s)
        out[slug] = {'file': 'logos/%s.svg' % slug, 'file_dark': 'logos/%s-dark.svg' % slug, 'source_url': SRC[lib][0], 'missing_reason': None,
                     'note': 'סמל בלבד, בלי שם המותג. נלקח מ%s ב־19 בנובמבר 2026, ולא מהאתר הרשמי. לוגו בצבע אחד: גרסה כהה לרקע בהיר וגרסה לבנה לרקע כהה.' % SRC[lib][1]}
json.dump(out, open(os.path.join(root, 'data/staging/_logos.json'), 'w'), ensure_ascii=False, indent=2)
print(len(out), 'logos')
