# CI/CD Pipeline Design — Newborn Initiative

**Date:** 2026-05-26  
**Project:** `jojo6550/newborn-baby-initiat` (GitHub Pages static site)  
**Status:** Approved

---

## Overview

Single GitHub Actions workflow that validates, builds (with image optimization), quality-gates via Lighthouse CI, then deploys to `gh-pages`. All four jobs run sequentially and share a build artifact. Deploy only fires on push to `main`; validate/build/lighthouse also run on PRs.

---

## Pipeline Structure

```
validate → build → lighthouse → deploy
```

Trigger: `push` to `main`, `pull_request` targeting `main`.

---

## Jobs

### 1. validate

**Runner:** `ubuntu-latest`, Node 20

**Steps:**
- Checkout source
- Run `html-validate` (npx) against all `.html` files — catches syntax errors, missing alt tags, unclosed elements
- Run `lychee-action` for link checking:
  - Internal links: hard failure on any broken link
  - External URLs: warnings only (external sites can be flaky); results cached to avoid rate-limits; 10s timeout per URL

**Failure:** Stops pipeline. Build and deploy never run.

---

### 2. build

**Runner:** `ubuntu-latest`, Node 20

**Steps:**
- Checkout source
- Copy entire repo to `_site/` (excluding `.git`, `node_modules`, `.github`, `.remember`)
- Run `node scripts/optimize-images.js` — reads `_site/images/**/*.{jpg,jpeg,png}`, writes optimized JPEG in-place (progressive, quality 85) using `sharp`
- Upload `_site/` as artifact named `site`

**Note:** Source images in `main` are never modified. Optimized copies live only in the artifact and `gh-pages`.

**Failure:** Stops pipeline.

---

### 3. lighthouse

**Runner:** `ubuntu-latest`, Node 20

**Steps:**
- Download `site` artifact
- Install `http-server`, serve `_site/` on port 8080
- Run `@lhci/cli autorun` against `index.html` and `404.html` (the two HTML entry points; `pages/*.js` are JS modules, not standalone pages)
- Assert thresholds on all pages:

| Category       | Minimum Score |
|----------------|---------------|
| Performance    | 90            |
| Accessibility  | 90            |
| Best Practices | 90            |
| SEO            | 90            |

**Config file:** `lighthouserc.json` at repo root.

**Failure:** Stops pipeline. Site with failing quality scores does not deploy.

---

### 4. deploy

**Runner:** `ubuntu-latest`

**Condition:** Only on push to `main` (skipped on PRs)

**Steps:**
- Download `site` artifact
- Push `_site/` contents to `gh-pages` branch via `peaceiris/actions-gh-pages@v4`
- Uses auto-provided `GITHUB_TOKEN` — no extra secrets needed

---

## Files Created

| File | Purpose |
|------|---------|
| `.github/workflows/deploy.yml` | Main workflow |
| `lighthouserc.json` | Lighthouse CI config + page list + thresholds |
| `scripts/optimize-images.js` | Sharp image optimization script |

---

## Error Handling

- Each job fails fast and posts a clear reason in the Actions UI
- GitHub's default behavior emails the committer on failure
- No Slack/webhook notifications (can be added later)

## Secrets Required

None. `GITHUB_TOKEN` is auto-provided by GitHub Actions.

---

## PR Behavior

| Job       | On PR | On push to `main` |
|-----------|-------|-------------------|
| validate  | ✓     | ✓                 |
| build     | ✓     | ✓                 |
| lighthouse| ✓     | ✓                 |
| deploy    | ✗     | ✓                 |

---

## Out of Scope

- Staging environment / preview deployments
- Slack/webhook failure notifications
- Test suite (no tests in project)
- Branch protection rules (manual GitHub settings step — noted in implementation plan)
