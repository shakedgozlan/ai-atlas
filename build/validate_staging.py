#!/usr/bin/env python3
"""Checks every staged tool file against the structure of a pilot entry and prints a summary."""
import json, glob, os, sys, collections
root = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
d = json.load(open(os.path.join(root, 'data/tools.json')))
ex = d['tools'][1]
cats = {c['slug']: c['id'] for c in d['categories']}
VER = {"אומת ממקור רשמי", "אומת חלקית", "לא אומת"}
def keys(o): return set(o.keys()) if isinstance(o, dict) else set()
problems = collections.defaultdict(list); summary = collections.OrderedDict(); slugs = {t['slug'] for t in d['tools'] if t['category_id'] == 6}; names = {}
for slug, cid in sorted(cats.items(), key=lambda x: x[1]):
    files = sorted(glob.glob(os.path.join(root, 'data/staging', slug, '*.json')))
    if not files: continue
    cnt = collections.Counter()
    for f in files:
        t = json.load(open(f)); rel = os.path.relpath(f, root); P = problems[rel]
        if isinstance(t, list): P.append('file is a list'); continue
        miss = keys(ex) - keys(t); extra = keys(t) - keys(ex)
        if miss: P.append('missing top keys: %s' % sorted(miss))
        if extra: P.append('extra top keys: %s' % sorted(extra))
        for k in ('logo','status','pricing','privacy','commercial_rights','developer_access','integrations','platforms','hebrew','company','student_benefits','filters'):
            if not isinstance(t.get(k), dict): P.append('%s is not an object' % k); continue
            m = keys(ex[k]) - keys(t[k]) - {'note'}
            if m: P.append('%s missing: %s' % (k, sorted(m)))
        if t.get('category_id') != cid: P.append('category_id %r' % t.get('category_id'))
        s = t.get('slug')
        if s in slugs: P.append('duplicate slug %s' % s)
        slugs.add(s)
        n = (t.get('name') or '').lower()
        if n in names: P.append('duplicate name with %s' % names[n])
        names[n] = rel
        pr = t.get('pricing') or {}
        v = pr.get('verification'); cnt[v] += 1
        if v not in VER: P.append('verification %r' % v)
        if v == 'לא אומת' and pr.get('summary_line'): P.append('summary_line set while unverified')
        sids = {x.get('id') for x in t.get('sources') or []}
        def walk(o, path=''):
            if isinstance(o, dict):
                for k, x in o.items():
                    if k == 'source_ids':
                        bad = [i for i in (x or []) if i not in sids]
                        if bad: P.append('unknown source ids %s at %s' % (bad, path))
                    else: walk(x, path + '/' + k)
            elif isinstance(o, list):
                for i, x in enumerate(o): walk(x, '%s[%d]' % (path, i))
        walk(t)
        for p in pr.get('plans') or []:
            m = {'name','price','price_text','currency','per','billing','price_period','includes','notes','source_ids'} - keys(p)
            if m: P.append('plan %s missing %s' % (p.get('name'), sorted(m)))
            if p.get('price') is not None and p.get('price_text'): P.append('plan %s has both price and price_text' % p.get('name'))
            if p.get('price') is not None and not isinstance(p['price'], (int, float)): P.append('plan %s price not a number' % p.get('name'))
        for k in ('strengths','limitations'):
            L = t.get(k) or []
            if not 2 <= len(L) <= 3: P.append('%s count %d' % (k, len(L)))
        for k in ('role','audience','url','name'):
            if not t.get(k): P.append('empty %s' % k)
        fl = t.get('filters') or {}
        for k in ('new_notable','hebrew','starting_price','platforms','tags'):
            if not isinstance(fl.get(k), dict): P.append('filters.%s missing' % k)
        for s_ in t.get('sources') or []:
            if s_.get('checked') not in ('2026-11-18', '2026-11-19'): P.append('source %s checked %r' % (s_.get('id'), s_.get('checked')))
    summary[slug] = (len(files), cnt)
tot = collections.Counter(); n = 0
for slug, (k, cnt) in summary.items():
    n += k; tot.update(cnt); print('%-20s %2d  %s' % (slug, k, dict(cnt)))
print('TOTAL', n, dict(tot))
bad = {f: p for f, p in problems.items() if p}
print('files with problems:', len(bad))
for f, p in bad.items():
    print(' ', f)
    for x in p[:8]: print('     -', x)
