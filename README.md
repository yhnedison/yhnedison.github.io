# Alex Blog

Personal blog hosted by GitHub Pages at <https://alex8080.com>.

The original theme was adapted from
[mzlogin/mzlogin.github.io](https://github.com/mzlogin/mzlogin.github.io).

## Local development

The project pins a GitHub Pages-compatible Ruby version through
[mise](https://mise.jdx.dev/).

```bash
mise install
mise run setup
mise run serve
```

Open <http://127.0.0.1:4000>. Draft posts are included by the development
server only when requested with `mise run serve-drafts`. Run a production
build before publishing:

```bash
mise run build
```

Local serving also uses `_config.dev.yml` so development does not consume the
unauthenticated GitHub API rate limit used by repository metadata.

## Writing and publishing

Create drafts in `_drafts/<slug>.md`. To publish one, move it to
`_posts/YYYY-MM-DD-<slug>.md`. New posts should use a consistent front matter
shape:

```yaml
---
layout: post
title: "Post title"
categories: [Notes]
description: "A short summary."
keywords: [Jekyll, GitHub Pages]
---
```

Changes merged to the GitHub Pages publishing branch are deployed to
`alex8080.com`.
