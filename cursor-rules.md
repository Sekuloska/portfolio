Hristina Sekuloska Portfolio Website - Cursor Rules
Project Overview
Personal portfolio website for Hristina Sekuloska showcasing services as a Jira Developer, Angular Developer, and C# Developer.
Tech Stack

Framework: Angular 17+ (standalone components)
Styling: Bootstrap 5.x + Custom SCSS
Language: TypeScript (strict mode)
Icons: Bootstrap Icons or Font Awesome
Animations: CSS transitions and Angular animations

Design System
Color Palette

Primary Teal: #00CED1 (used for accents, lines, graphics)
Secondary Gray: #808080 (used for background circles, subtle elements)
Neutral Black: #000000 (text, navigation)
Neutral White: #FFFFFF (background, text on dark)
Light Background: #F8F9FA (subtle background)
Soft Pink/Purple Gradient: Used subtly in background corners

Typography

Headings: Bold, modern sans-serif (Poppins, Montserrat, or Inter)
Body Text: Clean, readable sans-serif
Name Display: Extra bold, large scale (80-120px on desktop)
Tagline: Medium weight, uppercase with letter spacing

Design Principles

Minimalist & Clean: Lots of white space, no clutter
Professional: Black and white photography with teal accents
Modern: Smooth animations, subtle gradients, geometric shapes
Visual Hierarchy: Large hero image, bold typography
Graphic Elements: Curved teal lines, circles, abstract shapes as decorative elements

Component Structure
Navigation Bar
typescript// Component: navbar.component.ts
- Fixed position at top
- Transparent/white background with subtle shadow on scroll
- Logo (left): Circle with initials "HS" 
- Menu items (center): Services | Portfolio | About | Contact Me
- CTA Button (right): "Download CV" with teal background
- Smooth scroll to sections
- Mobile: Hamburger menu
Hero Section (About)
typescript// Component: hero.component.ts
- Full viewport height
- Large portrait image (black & white) with transparent background
- Gray circular background behind portrait
- Teal curved line wrapping around the portrait
- "COME ON LET'S TALK" circular text element (teal)
- Large name text below image
- Subtitle/tagline below name
- Social media icons (left side): Instagram, Behance, Dribbble
- Decorative circles in corners (subtle, outline only)
- Gradient overlay in background corners (pink/purple)
Services Section
typescript// Component: services.component.ts
- Three service cards in a row (responsive grid)
- Each card:
  * Icon or graphic element (teal)
  * Service title (bold)
  * Description text
  * Hover effect: subtle lift and teal border
- Services:
  1. Jira Developer
  2. Angular Developer
  3. C# Developer
- Clean white background
- Ample padding and spacing
Contact Section
typescript// Component: contact.component.ts
- Creative form design with teal accents
- Fields: Name, Email, Message
- Animated input fields (teal underline on focus)
- Submit button with teal background
- Success/error messages
- Form validation with helpful error messages
- Optional: Contact information sidebar with icons
Coding Standards
Angular Best Practices

Use standalone components (no NgModule)
Use Angular Signals for reactive state
Implement lazy loading for sections if needed
Use dependency injection properly
Follow Angular style guide naming conventions
Use OnPush change detection where appropriate

Component Guidelines
typescript// Always use this structure:
@Component({
  selector: 'app-component-name',
  standalone: true,
  imports: [CommonModule, /* other imports */],
  templateUrl: './component-name.component.html',
  styleUrls: ['./component-name.component.scss']
})
TypeScript Standards

Use strict type checking
Avoid any type - use proper interfaces/types
Use readonly where applicable
Descriptive variable and function names
Use interfaces for data models
Implement proper error handling

Styling Guidelines

Mobile-first approach: Design for mobile, enhance for desktop
Bootstrap first: Use Bootstrap utilities before custom CSS
SCSS Variables: Define colors, spacing, and fonts as variables
BEM Naming: Use BEM methodology for custom classes
Responsive breakpoints: Follow Bootstrap breakpoints
Animations: Subtle, smooth transitions (0.3s ease)

File Structure
src/
├── app/
│   ├── sections/
│   │   ├── contact/
│   │   ├── hero/
│   │   ├── services/
│   ├── shared/
|   |   |-- navbar/
│   └── app.component.ts
├── assets/
│   ├── images/
│   ├── icons/
│   └── fonts/

Specific Implementation Rules
Images

Hero portrait: PNG with transparent background
Black and white filter applied
Optimized for web (WebP format preferred)
Lazy loading for images below the fold
Alt text for accessibility

Animations

Smooth scroll behavior between sections
Fade-in animations on scroll (Intersection Observer)
Hover effects on buttons and cards
Page load animation for hero section
Subtle parallax effect on decorative elements (optional)

Accessibility

Semantic HTML elements
ARIA labels where needed
Keyboard navigation support
Focus indicators on interactive elements
Sufficient color contrast
Screen reader friendly

Performance

Optimize images and assets
Lazy load components below the fold
Minimize bundle size
Use Angular's built-in performance features
Avoid unnecessary re-renders

Bootstrap Usage

Use Bootstrap grid system (container, row, col)
Use Bootstrap utilities for spacing (m-, p-, mt-*, etc.)
Use Bootstrap components: navbar, buttons, forms
Customize Bootstrap variables in SCSS
Override Bootstrap styles minimally and cleanly

Special Effects to Implement
Decorative Elements
scss// Large outline circles in corners (gray)
.decorative-circle {
  position: absolute;
  width: 300px;
  height: 300px;
  border: 1px solid rgba(128, 128, 128, 0.2);
  border-radius: 50%;
  pointer-events: none;
}

// Teal curved line wrapping portrait
.curved-line {
  stroke: #00CED1;
  stroke-width: 3px;
  fill: none;
}

// Gradient background overlay
.gradient-overlay {
  background: linear-gradient(135deg, 
    rgba(255, 192, 203, 0.1) 0%, 
    rgba(147, 112, 219, 0.1) 100%);
}
Smooth Scroll
typescript// Implement smooth scrolling to sections
smoothScrollTo(sectionId: string) {
  document.getElementById(sectionId)?.scrollIntoView({ 
    behavior: 'smooth',
    block: 'start'
  });
}
Form Validation

Required field validation
Email format validation
Minimum/maximum length validation
Real-time validation feedback
Accessible error messages
Prevent double submission

Responsive Design Breakpoints

Mobile: < 576px (single column layout)
Tablet: 576px - 768px (adjust spacing)
Desktop: 768px - 992px (multi-column begins)
Large Desktop: > 992px (full layout)

Code Quality Requirements

Write clean, self-documenting code
Add comments for complex logic only
Use meaningful variable and function names
Keep functions small and focused (single responsibility)
DRY principle: Don't Repeat Yourself
Consistent code formatting (use Prettier)
No console.logs in production code
Handle errors gracefully

Git Commit Standards

Use conventional commits format
Example: "feat: add hero section component"
Types: feat, fix, docs, style, refactor, test, chore

Testing Considerations

Write unit tests for business logic
Test form validation
Test responsive behavior
Accessibility testing
Cross-browser testing

When Generating Code:

Always follow this design aesthetic
Use the exact color palette specified
Implement Bootstrap-first approach
Include proper TypeScript types
Add hover/focus states to interactive elements
Ensure mobile responsiveness
Include accessibility features
Add smooth animations
Keep code clean and well-structured
Follow Angular best practices

Additional Notes

The hero portrait will feature Hristina Sekuloska (replace example image)
Logo uses initials "HS" in a creative design
Maintain professional, modern aesthetic throughout
Prioritize user experience and performance
Keep design consistent across all sections