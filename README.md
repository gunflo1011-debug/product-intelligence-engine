# Product Intelligence Engine

Universal, explainable product-compatibility engine for humans and AI assistants.

## Current MVP
Vertical #1: boundary-wire-free robotic lawnmowers.

The platform is designed to answer: **Which product actually fits this exact use case, and why?**

## Core principles
- Category-neutral core architecture
- Hard constraints exclude incompatible products
- Soft preferences may rank only after compatibility is established
- Affiliate commission never influences compatibility ranking
- Source provenance and verification dates are first-class data
- Unknown data remains unknown; no invented values
- Public, crawlable, machine-readable output

## Current repository structure
- `index.html` — interactive static compatibility finder
- `data/products.json` — normalized seed product records
- `product.schema.json` — initial universal product schema
- `robots.txt` — allows standard search crawlers and OAI-SearchBot

## Next implementation milestones
1. Expand verified mower dataset to 15–25 models.
2. Move provenance from product-level to per-attribute evidence.
3. Add narrow-passage, multi-zone, terrain, tree/building and navigation-risk constraints.
4. Add reusable category schemas and deterministic compatibility rules.
5. Add product/use-case pages, sitemap and structured data.
6. Add privacy-light finder/outbound-click analytics.
7. Connect approved affiliate links after program approval.

## Revenue path
AI/Search/direct user → compatibility result → merchant click → affiliate conversion.

Later extensions: high-value lead generation and B2B/API access to normalized product intelligence.
