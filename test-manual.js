// Manual verification test for the calculator
console.log("=== Manual Calculator Test ===\n");

// Simple calculation functions matching the page.tsx implementation
const calculateNet = (price) => {
  const num = parseFloat(price);
  if (isNaN(num) || num <= 0) return "";
  return (num * 0.7).toFixed(2);
};

const calculateRequired = (desired) => {
  const num = parseFloat(desired);
  if (isNaN(num) || num <= 0) return "";
  return (num / 0.7).toFixed(2);
};

// Test cases from PRD
console.log("1. After-tax calculation (100 Robux → 70 Robux):");
const result1 = calculateNet("100");
console.log(
  `   Input: 100, Output: ${result1}, Expected: 70.00, Pass: ${
    result1 === "70.00"
  }`
);

console.log("\n2. Pre-tax calculation (70 Robux → 100 Robux):");
const result2 = calculateRequired("70");
console.log(
  `   Input: 70, Output: ${result2}, Expected: 100.00, Pass: ${
    result2 === "100.00"
  }`
);

console.log("\n3. Edge cases:");
console.log(`   Empty string: "${calculateNet("")}" (should be empty)`);
console.log(`   Zero: "${calculateNet("0")}" (should be empty)`);
console.log(`   Negative: "${calculateNet("-10")}" (should be empty)`);

console.log("\n4. Decimal precision:");
const result3 = calculateNet("142.857");
console.log(`   Input: 142.857, Output: ${result3} (should have 2 decimals)`);

console.log("\n=== Test Complete ===");
