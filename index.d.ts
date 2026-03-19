export interface RetailerData {
  name: string;
  codes: Record<string, string>;
}

export interface SearchResult {
  retailer: string;
  name: string;
  meaning: string;
}

export declare const taxCodes: Record<string, RetailerData>;
export declare function getRetailer(retailer: string): RetailerData | null;
export declare function lookupCode(retailer: string, code: string): string | null;
export declare function getRetailers(): string[];
export declare function searchCode(code: string): SearchResult[];
