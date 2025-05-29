#!/bin/bash

# Robux Tax Calculator - Production Deployment Script
# This script prepares and validates the application for production deployment

echo "🚀 ROBUX TAX CALCULATOR - PRODUCTION DEPLOYMENT"
echo "================================================"
echo "📅 $(date)"
echo ""

# Colors for output
GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Function to print colored output
print_status() {
    echo -e "${GREEN}✅ $1${NC}"
}

print_warning() {
    echo -e "${YELLOW}⚠️  $1${NC}"
}

print_error() {
    echo -e "${RED}❌ $1${NC}"
}

# Step 1: Clean and prepare
echo "🧹 Step 1: Cleaning build artifacts..."
rm -rf .next
rm -rf node_modules/.cache
print_status "Build artifacts cleaned"

# Step 2: Install dependencies
echo ""
echo "📦 Step 2: Installing dependencies..."
npm ci
if [ $? -eq 0 ]; then
    print_status "Dependencies installed successfully"
else
    print_error "Failed to install dependencies"
    exit 1
fi

# Step 3: Run tests
echo ""
echo "🧪 Step 3: Running core tests..."
node test-comprehensive.js
if [ $? -eq 0 ]; then
    print_status "All core tests passed"
else
    print_error "Tests failed"
    exit 1
fi

# Step 4: Type checking
echo ""
echo "🔍 Step 4: Type checking..."
npx tsc --noEmit
if [ $? -eq 0 ]; then
    print_status "TypeScript compilation successful"
else
    print_error "TypeScript errors found"
    exit 1
fi

# Step 5: Linting
echo ""
echo "📋 Step 5: Code linting..."
npx eslint src --ext .ts,.tsx
if [ $? -eq 0 ]; then
    print_status "Code linting passed"
else
    print_warning "Linting warnings found (not blocking deployment)"
fi

# Step 6: Build for production
echo ""
echo "🏗️  Step 6: Building for production..."
npm run build
if [ $? -eq 0 ]; then
    print_status "Production build successful"
else
    print_error "Production build failed"
    exit 1
fi

# Step 7: Analyze bundle size
echo ""
echo "📊 Step 7: Bundle size analysis..."
echo "Main page bundle: $(find .next/static -name "*.js" | head -1 | xargs ls -lh | awk '{print $5}')"
echo "Total build size: $(du -sh .next | awk '{print $1}')"
print_status "Bundle size analysis complete"

# Step 8: Start production server for testing
echo ""
echo "🌐 Step 8: Starting production server for final validation..."
echo "Server will start on http://localhost:3000"
echo ""
echo "🎯 FINAL VALIDATION CHECKLIST:"
echo "1. Open http://localhost:3000 in browser"
echo "2. Test calculator functionality (100 → 70 Robux)"
echo "3. Test language switching"
echo "4. Test mobile responsiveness"
echo "5. Verify all pages load correctly"
echo ""
echo "✅ If all tests pass, the application is ready for deployment!"
echo ""
echo "🚀 DEPLOYMENT OPTIONS:"
echo "• Vercel: vercel --prod"
echo "• Netlify: netlify deploy --prod"
echo "• Manual: Upload .next build to your hosting provider"
echo ""
print_status "Production validation complete!"
print_status "Ready for deployment! 🎉"

# Start the production server
npm start
