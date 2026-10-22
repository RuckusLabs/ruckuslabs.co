"""Check the static site's crawlable pages: python3 scripts/check-seo.py."""
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import unquote, urlparse
import json
import xml.etree.ElementTree as ET

ROOT = Path(__file__).resolve().parent.parent
ORIGIN = 'https://ruckuslabs.co'


class Page(HTMLParser):
    def __init__(self):
        super().__init__()
        self.canonicals, self.references, self.structured_data = [], [], []
        self.meta, self.h1, self.title = {}, 0, ''
        self.in_title, self.in_json, self.json = False, False, ''

    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)
        if tag == 'h1':
            self.h1 += 1
        if tag == 'title':
            self.in_title = True
        if tag == 'meta':
            self.meta[attrs.get('name', attrs.get('property'))] = attrs.get('content')
        if tag == 'link' and attrs.get('rel') == 'canonical':
            self.canonicals.append(attrs.get('href'))
        if tag == 'script' and attrs.get('type') == 'application/ld+json':
            self.in_json, self.json = True, ''
        if tag in ('a', 'img', 'script', 'link'):
            ref = attrs.get('src') or attrs.get('href')
            if ref:
                self.references.append(ref)
        if tag == 'img':
            assert 'alt' in attrs, 'Image without alt attribute'

    def handle_endtag(self, tag):
        if tag == 'title':
            self.in_title = False
        if tag == 'script' and self.in_json:
            self.structured_data.append(json.loads(self.json))
            self.in_json = False

    def handle_data(self, data):
        if self.in_title:
            self.title += data
        if self.in_json:
            self.json += data


def local_path(url, source):
    parsed = urlparse(url)
    if parsed.netloc and parsed.netloc != 'ruckuslabs.co':
        return None
    if parsed.scheme and parsed.scheme not in ('http', 'https'):
        return None
    if not parsed.path:
        return None
    path = ROOT / unquote(parsed.path).lstrip('/') if parsed.path.startswith('/') else source.parent / unquote(parsed.path)
    return path / 'index.html' if path.is_dir() else path


pages = [ROOT / 'index.html']
for directory in ('work', 'somatic', 'trace'):
    pages.extend(sorted((ROOT / directory).rglob('*.html')))
canonicals, titles, indexable = set(), set(), set()
errors = []
for source in pages:
    try:
        page = Page()
        page.feed(source.read_text())
        assert page.h1 == 1, f'Expected one H1, found {page.h1}'
        assert page.title and page.title not in titles, 'Missing or duplicate title'
        titles.add(page.title)
        assert page.meta.get('description'), 'Missing description'
        assert len(page.canonicals) == 1, 'Expected one canonical'
        canonical = page.canonicals[0]
        expected = ORIGIN + '/' + source.relative_to(ROOT).as_posix().removesuffix('index.html')
        assert canonical == expected, f'Canonical mismatch: {canonical} != {expected}'
        assert canonical not in canonicals, 'Duplicate canonical'
        canonicals.add(canonical)
        if 'noindex' not in (page.meta.get('robots') or '').lower().replace(',', ' ').split():
            indexable.add(canonical)
        for ref in page.references + [page.meta.get('og:image', ''), page.meta.get('twitter:image', '')]:
            target = local_path(ref, source)
            assert target is None or target.exists(), f'Broken local reference: {ref}'
        for key in ('og:image', 'twitter:image'):
            if page.meta.get(key):
                assert page.meta[key].startswith('https://'), f'{key} must be absolute HTTPS'
    except (AssertionError, ValueError) as error:
        errors.append(f'{source.relative_to(ROOT)}: {error}')

assert not errors, '\n'.join(errors)

sitemap = ET.parse(ROOT / 'sitemap.xml')
urls = [node.text for node in sitemap.findall('.//{http://www.sitemaps.org/schemas/sitemap/0.9}loc')]
assert len(urls) == len(set(urls)), 'Duplicate sitemap URLs'
assert set(urls) == indexable, 'Sitemap does not match indexable canonical pages'
assert f'Sitemap: {ORIGIN}/sitemap.xml' in (ROOT / 'robots.txt').read_text()
assert (ROOT / 'robots.txt').read_text() == (ROOT / 'static/robots.txt').read_text()
print(f'Passed: {len(pages)} pages, unique titles and canonicals, H1s, descriptions, local assets/links, social URLs, JSON-LD, sitemap, and robots.txt.')
