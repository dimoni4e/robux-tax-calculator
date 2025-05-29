# Robux Tax Calculator — MVP Product Requirements Document

**Document Version:** 1.0  
**Date:** May 28, 2025  
**Author:** Product Management Team

---

## 1. Introduction

This Product Requirements Document (PRD) outlines the specifications for developing the Robux Tax Calculator MVP, a web-based tool designed to help Roblox users calculate tax implications when selling items on the Roblox marketplace. The document serves as a comprehensive guide for development teams, stakeholders, and quality assurance to ensure successful product delivery.

The Robux Tax Calculator addresses a common pain point for Roblox creators and traders who need to quickly determine their net earnings after Roblox's 30% marketplace tax or calculate the selling price needed to achieve a desired net profit.

## 2. Product overview

The Robux Tax Calculator is a lightweight, single-page web application that provides instant tax calculations for Roblox marketplace transactions. The tool offers two primary calculation modes:

- **After-tax calculation**: Determines net Robux earnings from a given selling price
- **Pre-tax calculation**: Determines required selling price to achieve desired net earnings

The application prioritizes simplicity, speed, and accessibility while maintaining a clean, professional interface that works seamlessly across desktop and mobile devices.

## 3. Goals and objectives

### Primary goals

- Provide instant, accurate Robux tax calculations for marketplace transactions
- Deliver a fast, responsive user experience with real-time results
- Ensure accessibility across all devices and user capabilities
- Maintain user privacy through a no-account, no-storage approach

### Success metrics

- Page load time under 2 seconds
- JavaScript bundle size under 50kB
- 95%+ calculation accuracy
- Mobile responsiveness score of 90+ on Google PageSpeed Insights
- Zero data storage or user tracking

### Business objectives

- Establish foundation for future Roblox-related tools
- Demonstrate technical capability in React/Next.js development
- Create a user-friendly tool that addresses real user needs

## 4. Target audience

### Primary users

- **Roblox creators**: Developers and artists selling items, game passes, or developer products
- **Roblox traders**: Users buying and selling limited items for profit
- **Casual sellers**: Occasional marketplace participants wanting to understand earnings

### User characteristics

- Age range: 13-35 years
- Technical proficiency: Beginner to intermediate
- Device usage: Mixed desktop and mobile
- Frequency: Occasional to daily use during active trading periods

### Accessibility considerations

- Users with visual impairments requiring screen reader compatibility
- Users with motor disabilities needing keyboard navigation
- Users on slower internet connections or older devices

## 5. Features and requirements

### Core features

#### 5.1 After-tax calculator

- **Input**: Selling price in Robux (numeric field)
- **Processing**: Apply 30% tax rate (multiply by 0.7)
- **Output**: Display net Robux earnings
- **Validation**: Accept positive numbers and decimal values

#### 5.2 Pre-tax calculator

- **Input**: Desired net Robux (numeric field)
- **Processing**: Reverse calculate selling price (divide by 0.7)
- **Output**: Display required selling price
- **Validation**: Accept positive numbers and decimal values

#### 5.3 Real-time calculations

- Live updates while typing
- No submit button required
- Instant result display
- Clear visual feedback

#### 5.4 Input validation

- Numeric-only input fields
- Decimal point support
- Negative number prevention
- Empty field handling

#### 5.5 Result formatting

- Display up to two decimal places
- Clear labeling of input and output values
- Consistent number formatting

#### 5.6 SEO formatting

- Display text about Robux Tax Calculator on the specific section
- Use it optimized for key Robux Tax Calculator, using best seo practices
- FAQ section with the accordion below the about section
- Schema markdown
- SEO meta tags, like title, decription, etc
- sitemap.xml file
- robots.txt file

#### 5.7 Multi language support

- Display switcher on other language version of the Robux Tax Calculator. Use clean and modern
- Spanish version (which will be accesible on the /es/ url)

### Non-functional requirements

#### 5.6 Performance

- Server-side rendering (SSR) for fast initial load
- JavaScript bundle under 50kB
- Page load time under 2 seconds
- Smooth real-time calculations

#### 5.7 Privacy and security

- No user accounts required
- No data storage or persistence
- No tracking or analytics
- Client-side only calculations

#### 5.8 Accessibility

- WCAG 2.1 AA compliance
- Screen reader compatible labels
- Keyboard navigation support
- High contrast support

## 6. User stories and acceptance criteria

### ST-101: After-tax calculation

**As a** Roblox seller  
**I want to** enter a selling price and see my net earnings after tax  
**So that** I can understand how much Robux I'll actually receive

**Acceptance criteria:**

- Given I enter a selling price of 100 Robux
- When the calculation processes
- Then I should see net earnings of 70 Robux
- And the result should update in real-time as I type

### ST-102: Pre-tax calculation

**As a** Roblox seller  
**I want to** enter my desired net earnings and see the required selling price  
**So that** I can price my items to achieve my target profit

**Acceptance criteria:**

- Given I enter desired net earnings of 70 Robux
- When the calculation processes
- Then I should see a required selling price of 100 Robux
- And the result should update in real-time as I type

### ST-103: Input validation

**As a** user  
**I want to** be prevented from entering invalid data  
**So that** I receive accurate calculations

**Acceptance criteria:**

- Given I attempt to enter letters or symbols
- When I type in the input field
- Then only numbers and decimal points should be accepted
- And negative numbers should be prevented

### ST-104: Real-time updates

**As a** user  
**I want to** see calculations update as I type  
**So that** I can quickly compare different values

**Acceptance criteria:**

- Given I am typing in either input field
- When I add or remove characters
- Then the corresponding result should update immediately
- And both calculation blocks should remain visible

### ST-105: Mobile responsiveness

**As a** mobile user  
**I want to** use the calculator on my phone  
**So that** I can calculate taxes while away from my computer

**Acceptance criteria:**

- Given I access the site on a mobile device
- When the page loads
- Then all elements should be properly sized and accessible
- And the layout should adapt to smaller screens

### ST-106: Decimal precision

**As a** user  
**I want to** see results with appropriate decimal precision  
**So that** I have accurate calculations for my transactions

**Acceptance criteria:**

- Given I enter a value that results in a decimal
- When the calculation completes
- Then the result should display up to 2 decimal places
- And trailing zeros should be handled appropriately

### ST-107: Empty field handling

**As a** user  
**I want to** see appropriate feedback when fields are empty  
**So that** I understand what information is needed

**Acceptance criteria:**

- Given I clear an input field
- When the field becomes empty
- Then the corresponding result should be cleared or show zero
- And no error messages should appear

### ST-108: Accessibility navigation

**As a** user with disabilities  
**I want to** navigate the calculator using only my keyboard  
**So that** I can use the tool regardless of my abilities

**Acceptance criteria:**

- Given I navigate using only the Tab key
- When I move between elements
- Then focus should be clearly visible
- And all interactive elements should be reachable

## 7. Technical requirements / stack

### Frontend framework

- **Next.js**: React framework with SSR capabilities
- **React**: Component-based UI library
- **JavaScript/TypeScript**: Core programming language

### State management

- **React useState**: Built-in state management for calculator values
- **No external state libraries**: Keep bundle size minimal

### Styling

- **CSS-in-JS** or **CSS Modules**: Component-scoped styling
- **Flexbox/Grid**: Layout system for responsiveness
- **Mobile-first approach**: Progressive enhancement for larger screens

### Build and deployment

- **Next.js build system**: Optimized production builds
- **Static site generation**: Pre-rendered pages for performance
- **CDN deployment**: Fast global content delivery

### Browser support

- **Modern browsers**: Chrome, Firefox, Safari, Edge (last 2 versions)
- **Mobile browsers**: iOS Safari, Chrome Mobile
- **Progressive enhancement**: Graceful degradation for older browsers

### Performance targets

- **Bundle size**: Under 50kB JavaScript
- **Load time**: Under 2 seconds initial load
- **Runtime performance**: Smooth real-time calculations

## 8. Design and user interface

### Layout structure

- **Single-page application**: All functionality on one screen
- **Two-column layout**: Side-by-side calculation blocks on desktop
- **Stacked layout**: Vertical arrangement on mobile devices
- **Consistent spacing**: Uniform margins and padding throughout

### Input design

- **Clear labeling**: Descriptive labels for each input field
- **Input validation**: Visual feedback for invalid entries
- **Placeholder text**: Example values to guide users
- **Focus states**: Clear indication of active input

### Visual hierarchy

- **Primary headings**: Clear section titles
- **Secondary text**: Supporting information and labels
- **Result emphasis**: Highlighted output values
- **Consistent typography**: Readable font sizes and weights

### Color scheme

- **Neutral palette**: Professional appearance
- **Accent colors**: Highlight important elements
- **High contrast**: Ensure accessibility compliance
- **Error states**: Clear indication of validation issues

### Responsive behavior

- **Breakpoints**: Mobile (< 768px), Tablet (768px - 1024px), Desktop (> 1024px)
- **Flexible layouts**: Adapt to various screen sizes
- **Touch targets**: Minimum 44px for mobile interaction
- **Readable text**: Appropriate font sizes for all devices

### Interaction states

- **Hover effects**: Subtle feedback on interactive elements
- **Focus indicators**: Clear keyboard navigation
- **Loading states**: Immediate feedback during calculations
- **Empty states**: Guidance when no data is present

---

**Document Status:** Ready for Development  
**Next Review Date:** June 28, 2025
