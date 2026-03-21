# PLUtah website

## Adding your name and profile picture

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

Where `photo-file.jpg` is your profile picture in the `assets/` folder (it can be any image format, not just JPEG).
If you don't specify a profile picture, it will show up as a black square on the website.

## Build instructions

Needs `npm`.

```
npm ci
npx @11ty/eleventy --serve
```
