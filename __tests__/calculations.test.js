// Quick test file for our calculation utilities
import {
  calculateNetEarnings,
  calculateRequiredPrice,
  formatRobux,
  validateInput,
} from "../src/lib/calculations.ts";

// Test cases based on PRD requirements
console.log("=== Robux Tax Calculator Tests ===");

// ST-101: After-tax calculation
console.log("\n1. After-tax calculation (100 Robux → 70 Robux):");
const netEarnings = calculateNetEarnings(100);
console.log(`   Input: 100, Output: ${formatRobux(netEarnings)}`);
console.log(
  `   Expected: 70, Actual: ${formatRobux(netEarnings)}, Pass: ${
    formatRobux(netEarnings) === "70"
  }`
);

// ST-102: Pre-tax calculation
console.log("\n2. Pre-tax calculation (70 Robux → 100 Robux):");
const requiredPrice = calculateRequiredPrice(70);
console.log(`   Input: 70, Output: ${formatRobux(requiredPrice)}`);
console.log(
  `   Expected: 100, Actual: ${formatRobux(requiredPrice)}, Pass: ${
    formatRobux(requiredPrice) === "100"
  }`
);

// ST-103: Input validation
console.log("\n3. Input validation tests:");
console.log(`   "100" valid: ${validateInput("100")}`);
console.log(`   "100.5" valid: ${validateInput("100.5")}`);
console.log(`   "abc" valid: ${validateInput("abc")}`);
console.log(`   "-50" valid: ${validateInput("-50")}`);
console.log(`   "" valid: ${validateInput("")}`);

// ST-106: Decimal precision
console.log("\n4. Decimal precision tests:");
const decimalTest = calculateNetEarnings(142.857);
console.log(`   Input: 142.857, Output: ${formatRobux(decimalTest)}`);
console.log(`   Should show max 2 decimals: ${formatRobux(decimalTest)}`);

console.log("\n=== All Tests Complete ===");
