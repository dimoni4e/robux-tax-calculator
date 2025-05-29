// Simple test to verify Tailwind CSS is working
// Run this in browser console on http://localhost:3000

console.log("🎨 Checking Tailwind CSS Status...");

// Check if Tailwind utility classes are applied
function checkTailwindStatus() {
  const results = {
    hasClasses: false,
    hasStyles: false,
    computedStyles: {},
    issues: [],
  };

  // Check if we can find elements with Tailwind classes
  const elementsWithClasses = document.querySelectorAll(
    '[class*="bg-"], [class*="text-"], [class*="p-"], [class*="m-"]'
  );
  results.hasClasses = elementsWithClasses.length > 0;

  // Check specific elements for computed styles
  const header = document.querySelector("h1");
  const container = document.querySelector(".min-h-screen");
  const card = document.querySelector(".bg-white");

  if (header) {
    const headerStyles = window.getComputedStyle(header);
    results.computedStyles.header = {
      fontSize: headerStyles.fontSize,
      fontWeight: headerStyles.fontWeight,
      color: headerStyles.color,
      classes: header.className,
    };
  }

  if (container) {
    const containerStyles = window.getComputedStyle(container);
    results.computedStyles.container = {
      minHeight: containerStyles.minHeight,
      backgroundColor: containerStyles.backgroundColor,
      padding: containerStyles.padding,
      classes: container.className,
    };

    // Check if background color is applied (should be gray-50)
    if (
      containerStyles.backgroundColor === "rgba(0, 0, 0, 0)" ||
      containerStyles.backgroundColor === "transparent"
    ) {
      results.issues.push("Container background color not applied");
    }
  }

  if (card) {
    const cardStyles = window.getComputedStyle(card);
    results.computedStyles.card = {
      backgroundColor: cardStyles.backgroundColor,
      borderRadius: cardStyles.borderRadius,
      boxShadow: cardStyles.boxShadow,
      padding: cardStyles.padding,
      classes: card.className,
    };

    // Check if card background is white
    if (
      cardStyles.backgroundColor === "rgba(0, 0, 0, 0)" ||
      cardStyles.backgroundColor === "transparent"
    ) {
      results.issues.push("Card background color not applied");
    }
  }

  // Check if any styles are being applied
  results.hasStyles = Object.keys(results.computedStyles).length > 0;

  return results;
}

const status = checkTailwindStatus();

console.log("📊 Tailwind CSS Status Report:");
console.log("=====================================");

console.log(`✅ Elements with Tailwind classes found: ${status.hasClasses}`);
console.log(`✅ Computed styles available: ${status.hasStyles}`);

if (status.computedStyles.header) {
  console.log("\n🎯 Header Styles:");
  console.log(`   Classes: ${status.computedStyles.header.classes}`);
  console.log(`   Font Size: ${status.computedStyles.header.fontSize}`);
  console.log(`   Font Weight: ${status.computedStyles.header.fontWeight}`);
  console.log(`   Color: ${status.computedStyles.header.color}`);
}

if (status.computedStyles.container) {
  console.log("\n🎯 Container Styles:");
  console.log(`   Classes: ${status.computedStyles.container.classes}`);
  console.log(`   Min Height: ${status.computedStyles.container.minHeight}`);
  console.log(
    `   Background: ${status.computedStyles.container.backgroundColor}`
  );
  console.log(`   Padding: ${status.computedStyles.container.padding}`);
}

if (status.computedStyles.card) {
  console.log("\n🎯 Card Styles:");
  console.log(`   Classes: ${status.computedStyles.card.classes}`);
  console.log(`   Background: ${status.computedStyles.card.backgroundColor}`);
  console.log(`   Border Radius: ${status.computedStyles.card.borderRadius}`);
  console.log(`   Box Shadow: ${status.computedStyles.card.boxShadow}`);
  console.log(`   Padding: ${status.computedStyles.card.padding}`);
}

if (status.issues.length > 0) {
  console.log("\n⚠️  Issues Found:");
  status.issues.forEach((issue) => console.log(`   - ${issue}`));

  console.log("\n🔧 Possible Solutions:");
  console.log(
    "   1. Check if Tailwind CSS is properly imported in globals.css"
  );
  console.log("   2. Verify PostCSS configuration");
  console.log("   3. Check if development server needs restart");
  console.log("   4. Ensure content paths in tailwind.config.ts are correct");
} else {
  console.log("\n🎉 Tailwind CSS appears to be working correctly!");
}

// Check CSS file loading
const linkElements = document.querySelectorAll('link[rel="stylesheet"]');
console.log(`\n📂 CSS Files Loaded: ${linkElements.length}`);
linkElements.forEach((link, index) => {
  console.log(`   ${index + 1}. ${link.href}`);
});

return status;
