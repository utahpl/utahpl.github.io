# PLUtah website

## Adding your name and profile picture

To add yourself to the site, add yourself to the matching file in `_data/`:

- `_data/faculty.yaml`
- `_data/postdocs.yaml`
- `_data/phd_students.yaml`
- `_data/masters_students.yaml`
- `_data/undergrads.yaml`

Each file is a simple YAML list. Start with your name. `pic` and `site` are
optional:

```yaml
- name: First Last
  pic: photo-file.jpg
  site: https://example.com/
```

where `photo-file.jpg` is your profile picture in the `assets/` folder (it can
be any image format, not just JPEG).
If you don't specify a profile picture, it will show up as a black square on the
website.
Please compress your profile pictures, so that the website loads fast. We
recommend to use `.webp` for your images.
The site shows profile pictures in a small square grid, so please do not commit
huge originals from your phone or camera. As a rule of thumb, keep profile
pictures at around `512x512` pixels or smaller. This is much larger than the
site displays them, but still leaves enough room for them to look sharp.
For most headshots, staying under about `100` to `150` KB is a good target.

If you are resizing an existing picture, preserve the aspect ratio and only
shrink it; do not stretch it. If the picture is already smaller than
`512x512`, it is usually best to leave it alone.

For the current set of profile pictures, we resized oversized images down to a
maximum of `512x512` using high-quality resampling. In ImageMagick, the command
we used was:

```sh
magick input.jpg -filter Lanczos -resize '512x512>' -strip -interlace Plane -quality 90 output.jpg
```

The `>` matters: it means "resize only if the image is larger than this", so we
do not enlarge small images. For `.webp` files, the same idea applies.

Please put the full url address of your website under the site key!

For alumni entries, `where` is optional and graduation dates are only rendered
when the YAML includes an explicit `year` field:

```yaml
- name: First Last
  year: 2024
  where: Example Corp
  url: https://example.com/
```

## Build instructions

Needs `npm`.

```
npm ci
npx @11ty/eleventy --serve
```

## Contrib

PLUtah lab
