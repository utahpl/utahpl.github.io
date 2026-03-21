# PLUtah website

## Adding data

To add yourself to the site, add yourself to the matching file in `_data/`:

- `_data/faculty.yaml`
- `_data/postdocs.yaml`
- `_data/phd_students.yaml`
- `_data/masters_students.yaml`
- `_data/undergrads.yaml`

Each file is a simple YAML list. Start with your name. `pic` and `site` are optional:

```yaml
- name: First Last
  pic: photo-file.jpg
  site: https://example.com/
```

Notes:
- Put your photo in `assets/` and set `pic` to that filename (for example `jane-doe.jpg`).
- If you skip `pic`, you still show up with a name-only tile.
- If you add `site`, your tile links to that URL.

## Build instructions

Needs `npm`.

```
npm ci
npx @11ty/eleventy --serve
```
