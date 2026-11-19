#!/usr/bin/env python3
"""Merges the staged research files into data/tools.json. Safe to run again: staged tools replace earlier merged copies."""
import json, glob, os
root = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
p = os.path.join(root, 'data/tools.json')
d = json.load(open(p))
pilot = [t for t in d['tools'] if t['category_id'] == 6]
logos = {}
for f in sorted(glob.glob(os.path.join(root, 'data/staging/_logos*.json'))): logos.update(json.load(open(f)))
new = []
for c in d['categories']:
    if c['id'] == 6: continue
    items = [json.load(open(f)) for f in sorted(glob.glob(os.path.join(root, 'data/staging', c['slug'], '*.json')))]
    def rank(t):
        g = (t.get('filters') or {}).get('tags') or {}
        return (0 if (g.get('popular') or {}).get('value') else 1, -((g.get('review_roundups') or {}).get('count') or 0), t['name'].lower())
    items.sort(key=rank)
    for t in items:
        t['category_id'] = c['id']
        if t['slug'] in logos: t['logo'] = logos[t['slug']]
        elif not (t.get('logo') or {}).get('file'):
            t['logo'] = {'file': None, 'file_dark': None, 'source_url': None, 'missing_reason': 'הסמל עדיין לא נאסף מהאתר הרשמי', 'note': None}
        co = t.get('company') or {}
        t['company'] = {'name': co.get('name'), 'parent': co.get('parent'), 'country': co.get('country'), 'note': co.get('note')}
        new.append(t)
# keep pilot ids 1..10, number the rest after them in category order
out = pilot + new
for i, t in enumerate(new, start=len(pilot) + 1): t['id'] = i
order = list(pilot[0].keys())
out = [{**{k: t[k] for k in order if k in t}, **{k: v for k, v in t.items() if k not in order}} for t in out]
fp_path = os.path.join(root, 'data/staging/_free_plan.json')
if os.path.exists(fp_path):
    fp = json.load(open(fp_path))
    for t in out:
        if t['slug'] in fp: t['filters']['tags']['free_plan'] = fp[t['slug']]
ct_path = os.path.join(root, 'data/staging/_community_tags.json')
if os.path.exists(ct_path):
    ct = json.load(open(ct_path))
    for t in out:
        if t['slug'] in ct:
            t['filters']['tags']['recommended'] = ct[t['slug']]['recommended']
            t['filters']['watch_out'] = ct[t['slug']]['watch_out']
d['tools'] = out
d['snapshot_date'] = '2026-11-18'
open(p, 'w').write(json.dumps(d, ensure_ascii=False, indent=2) + '\n')
print(len(out), 'tools;', sum(1 for t in out if t['logo'].get('file')), 'with logo')
