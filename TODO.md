# TODO

## Markdown-in-Liquid notes

- `markdownify` is not a built-in Liquid filter in this Eleventy setup.
- Markdown rendering in Liquid is enabled via Eleventy's Render plugin in `eleventy.config.js`:
  - `const { RenderPlugin } = await import("@11ty/eleventy");`
  - `eleventyConfig.addPlugin(RenderPlugin);`
- To render a markdown string inside Liquid, use:
  - `{% raw %}{{ some_string | renderContent: "md" }}{% endraw %}`
- Example:
  - `{% raw %}{% assign item = "Read the [paper](https://example.com)." %}{% endraw %}`
  - `{% raw %}{{ item | renderContent: "md" }}{% endraw %}`
- `renderContent: "md"` outputs HTML (typically wrapped in `<p>...</p>` for plain paragraph markdown).

## Accessibility CI checks

- Add CI checks for both HTML validity and accessibility.
- Run Nu Html Checker on the built site output:
  - `vnu --skip-non-html _site/`
- Run axe against the local preview (or deployed preview URL):
  - `npx @axe-core/cli http://localhost:8080/`
- Wire both into GitHub Actions so pull requests fail on regressions.
