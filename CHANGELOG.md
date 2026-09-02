# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Breaking

- Redraw all 24/outline icons as real strokes. They used to ship as stroke-expanded fill paths with a hardcoded `fill="#333333"`; they now ship as `stroke` geometry, so the svg element carries `fill="none" stroke="currentColor"` instead of `fill="currentColor"`.

  Consumers that colored these icons through the `fill` attribute must switch to driving `currentColor` (e.g. `style={{ color }}` or a `text-*` class). Passing `fill` now overrides `fill="none"` and floods each closed path into a solid block.

### Added

- `boolean` — for the checkbox field (`BooleanField`), which previously shared `checkbox` with the multi-select field.
- `text-fill` — for the fill-in-the-blank field (`FillInBlank`), which previously shared `horizontal-fill` with the multiple-blanks field.

## [4.0.9] - 2026-07-01

- Remove the redundant full-viewBox clipPath from 24/outline icons. Fixes icons disappearing on iOS/WebKit when many icons share the minified `id="a"` and the referenced host node is unmounted (e.g. virtualized table headers). Also shrinks output (~-15% raw, ~-8% gzip).

## [4.0.2] - 2024-08-05

- Initial react version.