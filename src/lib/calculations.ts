// Core calculation logic for Robux tax calculations

export const TAX_RATE = 0.3;
export const NET_MULTIPLIER = 1 - TAX_RATE; // 0.7

/**
 * Calculate net earnings after 30% Roblox marketplace tax
 * @param sellingPrice - The selling price in Robux
 * @returns Net earnings after tax
 */
export function calculateNetEarnings(sellingPrice: number): number {
  if (!isValidNumber(sellingPrice)) return 0;
  return sellingPrice * NET_MULTIPLIER;
}

/**
 * Calculate required selling price to achieve desired net earnings
 * @param desiredEarnings - The desired net earnings in Robux
 * @returns Required selling price before tax
 */
export function calculateRequiredPrice(desiredEarnings: number): number {
  if (!isValidNumber(desiredEarnings)) return 0;
  return desiredEarnings / NET_MULTIPLIER;
}

/**
 * Format a number as Robux with up to 2 decimal places
 * @param value - The number to format
 * @returns Formatted string with up to 2 decimal places
 */
export function formatRobux(value: number): string {
  if (!isValidNumber(value)) return "";

  // Round to 2 decimal places and remove trailing zeros
  const rounded = Math.round(value * 100) / 100;
  return rounded.toString();
}

/**
 * Validate if input string is a valid positive number
 * @param input - The input string to validate
 * @returns True if valid, false otherwise
 */
export function validateInput(input: string): boolean {
  if (input === "") return true; // Allow empty input

  // Check if it's a valid number format (digits and at most one decimal point)
  const numberRegex = /^\d*\.?\d*$/;
  if (!numberRegex.test(input)) return false;

  const num = parseFloat(input);
  return !isNaN(num) && num >= 0 && isFinite(num);
}

/**
 * Check if a number is valid for calculations
 * @param value - The number to check
 * @returns True if valid, false otherwise
 */
function isValidNumber(value: number): boolean {
  return !isNaN(value) && isFinite(value) && value >= 0;
}

/**
 * Sanitize input to only allow numeric characters and decimal point
 * @param input - The input string to sanitize
 * @returns Sanitized input string
 */
export function sanitizeNumericInput(input: string): string {
  // Remove any non-numeric characters except decimal point
  let sanitized = input.replace(/[^0-9.]/g, "");

  // Ensure only one decimal point
  const parts = sanitized.split(".");
  if (parts.length > 2) {
    sanitized = parts[0] + "." + parts.slice(1).join("");
  }

  return sanitized;
}
