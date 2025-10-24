# Coding Task Options - Choose One

The interviewer will select **one** of these options for the 25-minute hands-on coding portion. Each option addresses different categories of issues identified during the audit phase.

## ⏱️ Time Management
- **Total coding time**: 25 minutes
- **Focus on working solution** over perfect polish
- **Explain your approach** as you work
- **Test your changes** before declaring complete

---

## Option A: Componentization & Accessibility

**Focus**: Extract reusable components and fix basic accessibility violations

### Acceptance Criteria ✅

**Button Component** (`app/components/Button.tsx`):
- [ ] Supports variants: `'solid' | 'outline' | 'ghost'`
- [ ] Supports sizes: `'sm' | 'md' | 'lg'` 
- [ ] Handles `disabled` and `loading` states
- [ ] Accepts `iconStart` and `iconEnd` props
- [ ] Proper TypeScript interfaces
- [ ] Focus styles preserved

**ProductCard Component** (`app/components/ProductCard.tsx`):
- [ ] Extracts repeated product tile markup
- [ ] Single source of truth for product display
- [ ] Replace at least one inline usage in `/products`
- [ ] Maintains existing functionality

**Design Tokens** (add to `app/globals.css`):
- [ ] CSS custom properties for spacing (`--space-1` through `--space-8`)
- [ ] CSS custom properties for colors (`--color-primary`, `--color-text`, etc.)
- [ ] CSS custom properties for border radius (`--radius-sm`, `--radius-md`, etc.)
- [ ] Replace at least 3 magic numbers with token usage

**Accessibility Improvements**:
- [ ] Fix keyboard operability where you make changes
- [ ] Add proper labels where you modify form elements
- [ ] Ensure focus indicators work properly

### Success Indicators 🎯
- Components are reusable and properly typed
- Design tokens eliminate magic numbers
- Accessibility violations are reduced
- Code is more maintainable and consistent

---

## Option B: URL State & Server-Side Rendering

**Focus**: Eliminate FOUC and sync application state with URL

### Acceptance Criteria ✅

**Server-Side Data Fetching**:
- [ ] Move initial product fetch to server component
- [ ] Read `searchParams` for initial filter state
- [ ] Pre-render page with filtered data
- [ ] Eliminate "No products" flash on load

**URL State Management**:
- [ ] Filter changes update URL using `useSearchParams`/`useRouter`
- [ ] URL reflects current filter state (query, category, inStock)  
- [ ] Page state persists on refresh/back navigation
- [ ] Bookmarkable URLs work correctly

**Loading States**:
- [ ] Add loading feedback during filter changes
- [ ] Smooth transitions between states
- [ ] Debounce rapid filter changes if possible

**Data Flow**:
- [ ] Client-server boundary clearly defined
- [ ] No unnecessary re-renders or data fetching
- [ ] Proper error boundaries if time permits

### Success Indicators 🎯
- Page loads instantly with correct data
- URL always represents current application state
- Users can bookmark and share filtered views
- Loading states provide clear feedback

---

## Option C: Performance & Accessibility Pass

**Focus**: Optimize image loading and fix accessibility throughout

### Acceptance Criteria ✅

**Image Optimization** (replace `<img>` with `next/image`):
- [ ] Proper `sizes` prop for responsive images
- [ ] Add `priority` for above-the-fold images
- [ ] Explicit width/height to prevent CLS
- [ ] Maintain existing styling and layout

**Loading States**:
- [ ] Simple skeleton component for loading transitions
- [ ] Implement loading states for data fetching
- [ ] Smooth transitions between states

**Form Accessibility**:
- [ ] Add proper `<label>` elements to all inputs
- [ ] Associate labels with form controls correctly
- [ ] Ensure all interactive elements are keyboard accessible

**Semantic Improvements**:
- [ ] Fix rating display to be screen-reader friendly
- [ ] Use proper ARIA attributes where needed
- [ ] Enable and fix "Skip to content" link functionality

### Success Indicators 🎯
- Images load efficiently without layout shift
- All form controls are properly labeled and accessible
- Screen readers can understand content structure
- Keyboard navigation works smoothly

---

## General Guidelines for All Options

### Code Quality
- Use TypeScript properly with interfaces/types
- Follow existing code conventions in the project
- Keep changes focused and avoid over-engineering
- Test your changes work as expected

### Communication
- Explain your approach before starting
- Narrate your thought process as you work
- Ask clarifying questions if requirements are unclear
- Discuss tradeoffs and alternative approaches

### Problem-Solving
- Start with the most impactful changes first
- If you get stuck, explain your thought process
- Consider how your solution would scale in a larger app
- Be prepared to discuss what you would do differently with more time

### Time Management
- Aim for working functionality over perfection
- Leave time to test your implementation
- If running short on time, prioritize core functionality
- Be ready to explain what you would complete next

**Remember**: The goal is to demonstrate your systematic approach to solving real-world frontend problems, not to create a perfect solution in 25 minutes.