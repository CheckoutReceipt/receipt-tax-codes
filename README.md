# receipt-tax-codes

Tax code lookup data for 15+ US retailers. Find what **N**, **X**, **O**, **T**, and other tax codes mean on receipts from Walmart, Target, Costco, CVS, and more.

Built by [CheckoutReceipt.com](https://checkoutreceipt.com) — free receipt generator with 100+ store-specific templates.

## Install

```bash
npm install receipt-tax-codes
```

## Quick Start

```javascript
const { lookupCode, getRetailer, searchCode } = require("receipt-tax-codes");

// What does "N" mean on a Walmart receipt?
lookupCode("walmart", "N");
// => "Non-taxable item (grocery staples, unprepared food)"

// Get all tax codes for Target
getRetailer("target");
// => { name: "Target", codes: { N: "...", X: "...", O: "...", ... } }

// What does "X" mean across all retailers?
searchCode("X");
// => [{ retailer: "walmart", name: "Walmart", meaning: "..." }, ...]
```

## Supported Retailers

| Retailer | Key | Codes |
|----------|-----|-------|
| Walmart | `walmart` | N, X, O, T, F, H, P |
| Target | `target` | N, X, O, F, H, A, C |
| Costco | `costco` | A, E, N, F, A+ |
| CVS Pharmacy | `cvs` | N, T, F, FS, H |
| Kroger | `kroger` | N, T, X, F, MR |
| Walgreens | `walgreens` | N, T, F, FS, H |
| Home Depot | `homeDepot` | N, T, X |
| Lowe's | `lowes` | N, T, X |
| Amazon | `amazon` | N, T, X, E |
| Best Buy | `bestBuy` | T, N, E |
| Trader Joe's | `traderJoes` | N, T, F |
| Whole Foods | `wholeFoods` | N, T, F, A |
| ALDI | `aldi` | N, T, F |
| Safeway / Albertsons | `safeway` | N, T, F, CRV |
| Publix | `publix` | N, T, F |

## API

### `lookupCode(retailer, code)`

Returns the meaning of a specific tax code at a specific retailer, or `null` if not found.

```javascript
lookupCode("costco", "A");
// => "Taxable at standard rate (general merchandise)"
```

### `getRetailer(retailer)`

Returns the full retailer object with name and all codes, or `null` if not found. Handles common aliases (`"home depot"` resolves to `"homeDepot"`, `"albertsons"` resolves to `"safeway"`).

```javascript
getRetailer("home depot");
// => { name: "Home Depot", codes: { N: "...", T: "...", X: "..." } }
```

### `getRetailers()`

Returns an array of all available retailer keys.

```javascript
getRetailers();
// => ["walmart", "target", "costco", "cvs", ...]
```

### `searchCode(code)`

Searches across all retailers for a specific tax code and returns an array of matches.

```javascript
searchCode("F");
// => [
//   { retailer: "walmart", name: "Walmart", meaning: "Food item (may be taxed at reduced rate...)" },
//   { retailer: "target", name: "Target", meaning: "Food item (reduced tax rate...)" },
//   ...
// ]
```

## Common Tax Code Reference

| Code | General Meaning |
|------|----------------|
| **N** | Non-taxable (grocery staples, exempt items) |
| **X** | Taxable at standard state/local rate |
| **T** | Taxable (alias for X at some retailers) |
| **O** | Zero-rated / tax-exempt |
| **F** | Food (may have reduced rate) |
| **H** | Health / pharmacy |
| **A** | Alcohol |

> Tax codes vary by state and retailer. This package provides general guidance — always check your local tax regulations for specifics.

## Use Cases

- **Receipt parsing** — Automatically categorize line items as taxable or exempt
- **Expense tracking** — Identify tax-deductible items on receipts
- **Receipt generation** — Apply correct tax codes when creating receipt templates
- **Financial tools** — Build tax calculators with retailer-specific logic
- **Education** — Help consumers understand their receipts

## Related

- [CheckoutReceipt.com](https://checkoutreceipt.com) — Free receipt generator with store-specific templates
- [Receipt Tax Code Lookup](https://chromewebstore.google.com/detail/receipt-tax-code-lookup) — Chrome extension for quick tax code lookups

## License

MIT
