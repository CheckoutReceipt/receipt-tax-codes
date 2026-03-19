/**
 * receipt-tax-codes
 * Tax code lookup data for 15+ US retailers.
 * https://checkoutreceipt.com
 */

const taxCodes = {
  walmart: {
    name: "Walmart",
    codes: {
      N: "Non-taxable item (grocery staples, unprepared food)",
      X: "Taxable at standard rate (general merchandise, electronics, clothing in most states)",
      O: "Zero-rated / tax-exempt (WIC-approved items, EBT-eligible food)",
      T: "Taxable (alias used in some states, same as X)",
      F: "Food item (may be taxed at reduced rate depending on state)",
      H: "Health / pharmacy item (tax varies by state — OTC taxable, Rx exempt)",
      P: "Prepared food (taxable in most states, includes deli and bakery items)"
    }
  },
  target: {
    name: "Target",
    codes: {
      N: "Non-taxable item (grocery staples, baby formula, feminine hygiene in some states)",
      X: "Taxable at standard rate (general merchandise, home goods, electronics)",
      O: "Zero-rated / tax-exempt item",
      F: "Food item (reduced tax rate in applicable states)",
      H: "Health and beauty (taxable in most states, exempt for FSA/HSA-eligible items)",
      A: "Alcohol (taxed at standard or elevated rate depending on state/county)",
      C: "Clothing (exempt in PA, NJ, MN; taxable in most other states)"
    }
  },
  costco: {
    name: "Costco",
    codes: {
      A: "Taxable at standard rate (general merchandise)",
      E: "Exempt from sales tax (most grocery and unprepared food items)",
      N: "Non-taxable item",
      F: "Food service / prepared food (taxable — food court, deli, rotisserie)",
      "A+": "Taxable with additional fees (CRV deposits on beverages in CA)"
    }
  },
  cvs: {
    name: "CVS Pharmacy",
    codes: {
      N: "Non-taxable (Rx prescriptions, tax-exempt food, medical devices)",
      T: "Taxable at standard rate (cosmetics, general merchandise, OTC meds in some states)",
      F: "Food and grocery (reduced rate or exempt depending on state)",
      FS: "Snap / EBT-eligible food item",
      H: "HSA / FSA-eligible health item"
    }
  },
  kroger: {
    name: "Kroger",
    codes: {
      N: "Non-taxable (unprepared food, grocery staples)",
      T: "Taxable at standard rate",
      X: "Taxable (alias for T in some regions)",
      F: "Food — reduced tax rate where applicable",
      MR: "Manufacturer return / deposit (bottle deposit states)"
    }
  },
  walgreens: {
    name: "Walgreens",
    codes: {
      N: "Non-taxable (Rx, exempt food items)",
      T: "Taxable at standard rate (general merchandise, OTC drugs in most states)",
      F: "Food item (may have reduced rate)",
      FS: "SNAP-eligible food item",
      H: "Health and wellness (HSA/FSA eligible)"
    }
  },
  homeDepot: {
    name: "Home Depot",
    codes: {
      N: "Non-taxable (rare — specific exempt items by state, e.g., Energy Star appliances during tax holidays)",
      T: "Taxable at standard rate (virtually all items — lumber, tools, hardware, appliances)",
      X: "Taxable (alias for T)"
    }
  },
  lowes: {
    name: "Lowe's",
    codes: {
      N: "Non-taxable (state-specific exemptions, e.g., hurricane prep tax holidays)",
      T: "Taxable at standard rate (building materials, tools, appliances, paint)",
      X: "Taxable (alias for T)"
    }
  },
  amazon: {
    name: "Amazon",
    codes: {
      N: "Non-taxable (digital goods in some states, grocery staples where exempt)",
      T: "Taxable at destination state rate",
      X: "Taxable (general merchandise)",
      E: "Exempt (clothing under threshold in NY/PA, school supplies during tax holidays)"
    }
  },
  bestBuy: {
    name: "Best Buy",
    codes: {
      T: "Taxable at standard rate (nearly all items — electronics, appliances, media)",
      N: "Non-taxable (gift cards, warranties in some states)",
      E: "Exempt (Energy Star items during state tax holidays)"
    }
  },
  traderJoes: {
    name: "Trader Joe's",
    codes: {
      N: "Non-taxable (unprepared groceries, produce, dairy, bread)",
      T: "Taxable (prepared foods, alcohol, supplements, non-food items like candles and bags)",
      F: "Food — reduced rate in applicable states"
    }
  },
  wholeFoods: {
    name: "Whole Foods",
    codes: {
      N: "Non-taxable (unprepared groceries, organic produce, bulk items)",
      T: "Taxable (prepared foods from hot bar / salad bar, supplements, body care)",
      F: "Food — reduced tax rate where applicable",
      A: "Alcohol (wine, beer — taxed at standard or elevated rate)"
    }
  },
  aldi: {
    name: "ALDI",
    codes: {
      N: "Non-taxable (grocery staples, produce, dairy, frozen food)",
      T: "Taxable (non-food items — cleaning supplies, ALDI Finds general merchandise)",
      F: "Food — reduced rate in applicable states"
    }
  },
  safeway: {
    name: "Safeway / Albertsons",
    codes: {
      N: "Non-taxable (unprepared food, grocery staples)",
      T: "Taxable at standard rate (non-food, household goods, prepared deli items)",
      F: "Food — reduced rate where applicable",
      CRV: "California Redemption Value (bottle/can deposit — CA only)"
    }
  },
  publix: {
    name: "Publix",
    codes: {
      N: "Non-taxable (unprepared food and grocery staples)",
      T: "Taxable at standard rate (household supplies, prepared subs and deli, non-food items)",
      F: "Food — reduced rate in applicable states"
    }
  }
};

/**
 * Get all tax codes for a specific retailer
 * @param {string} retailer - Retailer key (e.g., 'walmart', 'target', 'costco')
 * @returns {object|null} Retailer tax code data or null if not found
 */
function getRetailer(retailer) {
  const key = retailer.toLowerCase().replace(/[^a-z]/g, "");
  // Handle common aliases
  const aliases = {
    homedepot: "homeDepot",
    bestbuy: "bestBuy",
    traderjoes: "traderJoes",
    wholefoods: "wholeFoods",
    albertsons: "safeway"
  };
  const resolvedKey = aliases[key] || key;
  return taxCodes[resolvedKey] || null;
}

/**
 * Look up what a specific tax code means at a specific retailer
 * @param {string} retailer - Retailer key
 * @param {string} code - Tax code letter(s)
 * @returns {string|null} Description of the tax code or null
 */
function lookupCode(retailer, code) {
  const data = getRetailer(retailer);
  if (!data) return null;
  return data.codes[code.toUpperCase()] || data.codes[code] || null;
}

/**
 * Get all available retailer keys
 * @returns {string[]} Array of retailer keys
 */
function getRetailers() {
  return Object.keys(taxCodes);
}

/**
 * Search across all retailers for a specific tax code
 * @param {string} code - Tax code letter(s) to search for
 * @returns {Array<{retailer: string, name: string, meaning: string}>}
 */
function searchCode(code) {
  const results = [];
  const upperCode = code.toUpperCase();
  for (const [key, data] of Object.entries(taxCodes)) {
    if (data.codes[upperCode] || data.codes[code]) {
      results.push({
        retailer: key,
        name: data.name,
        meaning: data.codes[upperCode] || data.codes[code]
      });
    }
  }
  return results;
}

module.exports = { taxCodes, getRetailer, lookupCode, getRetailers, searchCode };
