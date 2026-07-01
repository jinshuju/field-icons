# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [4.0.9] - 2026-07-01

- Remove the redundant full-viewBox clipPath from 24/outline icons. Fixes icons disappearing on iOS/WebKit when many icons share the minified `id="a"` and the referenced host node is unmounted (e.g. virtualized table headers). Also shrinks output (~-15% raw, ~-8% gzip).

## [4.0.2] - 2024-08-05

- Initial react version.