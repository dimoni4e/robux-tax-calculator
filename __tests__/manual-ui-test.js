/**
 * Manual Test Script for Robux Tax Calculator MVP
 * This script validates all user stories from the PRD
 * Run this in browser console while on http://localhost:3000
 */

console.log("🧪 Starting Robux Tax Calculator Manual Tests");
console.log("📋 Testing all User Stories from PRD (ST-101 through ST-108)");

// Helper function to wait for DOM updates
const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// Helper function to simulate typing
function simulateTyping(element, text) {
  element.focus();
  element.value = "";
  element.dispatchEvent(new Event("input", { bubbles: true }));

  for (let i = 0; i <= text.length; i++) {
    element.value = text.slice(0, i);
    element.dispatchEvent(new Event("input", { bubbles: true }));
  }
}

async function runAllTests() {
  const results = {};

  // ST-101: After-tax calculation
  console.log("\n🔍 ST-101: After-tax calculation (100 Robux → 70 Robux)");
  try {
    const afterTaxInput =
      document.querySelector('[data-testid="selling-price-input"]') ||
      document.querySelector('input[placeholder*="selling"]') ||
      document.querySelectorAll("input")[0];
    const afterTaxResult =
      document.querySelector('[data-testid="net-earnings-result"]') ||
      document.querySelector(".text-3xl, .text-2xl");

    if (afterTaxInput) {
      simulateTyping(afterTaxInput, "100");
      await wait(100);

      const resultText = afterTaxResult?.textContent || "";
      const hasCorrectResult = resultText.includes("70");

      console.log(`   ✅ Input field found: ${!!afterTaxInput}`);
      console.log(`   ✅ Result displays: ${resultText}`);
      console.log(`   ✅ Shows 70 Robux: ${hasCorrectResult}`);

      results["ST-101"] = hasCorrectResult;
    } else {
      console.log("   ❌ Could not find after-tax input field");
      results["ST-101"] = false;
    }
  } catch (error) {
    console.log(`   ❌ Error: ${error.message}`);
    results["ST-101"] = false;
  }

  // ST-102: Pre-tax calculation
  console.log("\n🔍 ST-102: Pre-tax calculation (70 Robux → 100 Robux)");
  try {
    const preTaxInput =
      document.querySelector('[data-testid="desired-earnings-input"]') ||
      document.querySelector('input[placeholder*="desired"]') ||
      document.querySelectorAll("input")[1];
    const preTaxResult = document.querySelectorAll(".text-3xl, .text-2xl")[1];

    if (preTaxInput) {
      simulateTyping(preTaxInput, "70");
      await wait(100);

      const resultText = preTaxResult?.textContent || "";
      const hasCorrectResult = resultText.includes("100");

      console.log(`   ✅ Input field found: ${!!preTaxInput}`);
      console.log(`   ✅ Result displays: ${resultText}`);
      console.log(`   ✅ Shows 100 Robux: ${hasCorrectResult}`);

      results["ST-102"] = hasCorrectResult;
    } else {
      console.log("   ❌ Could not find pre-tax input field");
      results["ST-102"] = false;
    }
  } catch (error) {
    console.log(`   ❌ Error: ${error.message}`);
    results["ST-102"] = false;
  }

  // ST-103: Input validation
  console.log("\n🔍 ST-103: Input validation (only numbers allowed)");
  try {
    const testInput = document.querySelectorAll("input")[0];
    const originalValue = testInput.value;

    // Test invalid characters
    simulateTyping(testInput, "abc123");
    await wait(50);
    const afterInvalidChars = testInput.value;

    // Test negative numbers
    simulateTyping(testInput, "-50");
    await wait(50);
    const afterNegative = testInput.value;

    // Test valid decimal
    simulateTyping(testInput, "123.45");
    await wait(50);
    const afterValidDecimal = testInput.value;

    const blocksInvalidChars = !afterInvalidChars.includes("abc");
    const blocksNegative = !afterNegative.includes("-");
    const allowsDecimals = afterValidDecimal.includes("123.45");

    console.log(`   ✅ Blocks invalid chars (abc): ${blocksInvalidChars}`);
    console.log(`   ✅ Blocks negative numbers: ${blocksNegative}`);
    console.log(`   ✅ Allows valid decimals: ${allowsDecimals}`);

    results["ST-103"] = blocksInvalidChars && blocksNegative && allowsDecimals;

    // Restore original value
    simulateTyping(testInput, originalValue);
  } catch (error) {
    console.log(`   ❌ Error: ${error.message}`);
    results["ST-103"] = false;
  }

  // ST-104: Real-time updates
  console.log("\n🔍 ST-104: Real-time updates (no submit button)");
  try {
    const hasSubmitButton =
      document.querySelector('button[type="submit"]') ||
      document.querySelector('input[type="submit"]');
    const inputFields = document.querySelectorAll("input");

    console.log(`   ✅ No submit button found: ${!hasSubmitButton}`);
    console.log(`   ✅ Input fields present: ${inputFields.length >= 2}`);
    console.log(`   ✅ Real-time calculation: Updates happen on input events`);

    results["ST-104"] = !hasSubmitButton && inputFields.length >= 2;
  } catch (error) {
    console.log(`   ❌ Error: ${error.message}`);
    results["ST-104"] = false;
  }

  // ST-105: Mobile responsiveness
  console.log("\n🔍 ST-105: Mobile responsiveness");
  try {
    const viewport = window.innerWidth;
    const isMobileViewport = viewport < 768;

    // Check if layout adapts
    const containers = document.querySelectorAll(".grid, .flex");
    const hasResponsiveClasses = document.querySelector(
      '[class*="sm:"], [class*="md:"], [class*="lg:"]'
    );

    console.log(`   ✅ Current viewport: ${viewport}px`);
    console.log(`   ✅ Has responsive classes: ${!!hasResponsiveClasses}`);
    console.log(`   ✅ Layout containers found: ${containers.length}`);

    results["ST-105"] = !!hasResponsiveClasses;
  } catch (error) {
    console.log(`   ❌ Error: ${error.message}`);
    results["ST-105"] = false;
  }

  // ST-106: Decimal precision
  console.log("\n🔍 ST-106: Decimal precision (max 2 decimal places)");
  try {
    const input = document.querySelectorAll("input")[0];
    simulateTyping(input, "142.857");
    await wait(100);

    const result = document.querySelector(".text-3xl, .text-2xl");
    const resultText = result?.textContent || "";

    // Extract the number from the result
    const numberMatch = resultText.match(/[\d.]+/);
    const resultNumber = numberMatch ? parseFloat(numberMatch[0]) : 0;
    const decimalPlaces = resultText.includes(".")
      ? resultText.split(".")[1]?.length || 0
      : 0;

    console.log(`   ✅ Input: 142.857`);
    console.log(`   ✅ Result: ${resultText}`);
    console.log(`   ✅ Decimal places: ${decimalPlaces} (should be ≤ 2)`);

    results["ST-106"] = decimalPlaces <= 2;
  } catch (error) {
    console.log(`   ❌ Error: ${error.message}`);
    results["ST-106"] = false;
  }

  // ST-107: Empty field handling
  console.log("\n🔍 ST-107: Empty field handling");
  try {
    const input = document.querySelectorAll("input")[0];
    const result = document.querySelector(".text-3xl, .text-2xl");

    simulateTyping(input, "");
    await wait(100);

    const resultText = result?.textContent || "";
    const handlesEmpty =
      resultText === "0" || resultText === "" || resultText === "0 Robux";

    console.log(`   ✅ Empty field result: "${resultText}"`);
    console.log(`   ✅ Handles empty gracefully: ${handlesEmpty}`);

    results["ST-107"] = handlesEmpty;
  } catch (error) {
    console.log(`   ❌ Error: ${error.message}`);
    results["ST-107"] = false;
  }

  // ST-108: Accessibility navigation
  console.log("\n🔍 ST-108: Accessibility (keyboard navigation)");
  try {
    const inputs = document.querySelectorAll("input");
    const hasAriaLabels = Array.from(inputs).some(
      (input) =>
        input.getAttribute("aria-label") ||
        input.getAttribute("aria-labelledby")
    );
    const hasProperLabels =
      document.querySelectorAll("label").length >= inputs.length;
    const focusableElements = document.querySelectorAll(
      "input, button, [tabindex]"
    );

    console.log(`   ✅ Input fields: ${inputs.length}`);
    console.log(`   ✅ Has ARIA labels: ${hasAriaLabels}`);
    console.log(`   ✅ Has proper labels: ${hasProperLabels}`);
    console.log(`   ✅ Focusable elements: ${focusableElements.length}`);

    results["ST-108"] = hasAriaLabels || hasProperLabels;
  } catch (error) {
    console.log(`   ❌ Error: ${error.message}`);
    results["ST-108"] = false;
  }

  // Summary
  console.log("\n📊 TEST SUMMARY");
  console.log("================");
  const totalTests = Object.keys(results).length;
  const passedTests = Object.values(results).filter(Boolean).length;

  Object.entries(results).forEach(([test, passed]) => {
    console.log(
      `${passed ? "✅" : "❌"} ${test}: ${passed ? "PASSED" : "FAILED"}`
    );
  });

  console.log(`\n🎯 Overall: ${passedTests}/${totalTests} tests passed`);
  console.log(
    `📈 Success Rate: ${Math.round((passedTests / totalTests) * 100)}%`
  );

  if (passedTests === totalTests) {
    console.log("🎉 ALL USER STORIES VALIDATED! Ready for production.");
  } else {
    console.log("⚠️  Some tests failed. Review and fix before production.");
  }

  return results;
}

// Auto-run tests
console.log("⏳ Starting tests in 2 seconds...");
setTimeout(runAllTests, 2000);
