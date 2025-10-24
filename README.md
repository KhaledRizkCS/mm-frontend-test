# Frontend Interview - Product Catalog

This is a 90-minute frontend interview project featuring a flawed product catalog application. The candidate will audit issues, propose refactoring approaches, and implement focused fixes.

## Purpose

This Next.js application contains intentional architectural, accessibility, styling, and performance issues that mirror common real-world problems. Candidates will demonstrate their ability to identify problems and implement solutions systematically.

## Interview Flow (90 minutes)

- **5m** - Introduction and project walkthrough
- **30m** - Issue audit and refactor discussion  
- **35m** - Hands-on coding task
- **15m** - Deep dive technical Q&A
- **5m** - Wrap-up and next steps

## How to Run

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

Navigate to `/products` to see the flawed product catalog page.

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server  
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier

## Coding Task Options

The interviewer will select **1-2** of these options during the session, based on the discussion:

### Option A - Componentization & Accessibility

**Goal**: Extract reusable components and fix accessibility issues

**Expected Deliverables**:
- Create `app/components/Button.tsx` with variants (`solid`|`outline`|`ghost`), sizes (`sm`|`md`|`lg`), and proper props (`disabled`, `loading`, `iconStart`, `iconEnd`)
- Extract a `ProductCard` component from duplicated product tile markup
- Replace at least one inline tile usage with `<ProductCard />`
- Add minimal design tokens as CSS variables in `app/globals.css` (spacing, colors, border radius)
- Fix keyboard operability and labels where you modify code

**Acceptance Criteria**:
- Button component handles all visual states properly
- ProductCard eliminates code duplication
- CSS variables replace magic numbers  
- Fixed accessibility violations are keyboard testable
- Folder structure

### Option B - URL State & Server-Side Rendering

**Goal**: Move data fetching to server-side and sync filters with URL

**Expected Deliverables**:
- Move initial product fetch to server-side using App Router server components
- Read initial filter state from `searchParams`
- Make filter controls update URL using `useSearchParams`/`useRouter` 
- Add loading feedback during filter changes
- Eliminate FOUC (flash of unstyled content)

**Acceptance Criteria**:
- Page loads with data pre-rendered from server
- URL reflects current filter state and can be bookmarked
- Filter changes update URL and maintain state on refresh
- Smooth transitions with loading indicators

### Option C - Performance & Accessibility Pass

**Goal**: Optimize images and fix accessibility throughout

**Expected Deliverables**:
- Replace `<img>` tags with `next/image` including proper `sizes` prop
- Add `priority` to above-the-fold images  
- Create simple skeleton loading components for transitions
- Add proper `<label>` elements to form inputs
- Improve rating display semantics for screen readers
- Add "Skip to content" link functionality

**Acceptance Criteria**:
- Images load efficiently without layout shift
- All form inputs are properly labeled
- Rating information is announced correctly
- Skip navigation works with keyboard

### 🧪 Option D - State Management & Testing Enhancement

**Goal**: Improve data-flow robustness and testability

**Expected Deliverables**:
- Extract filter/product state into custom hook (e.g., `useProducts`)
- Add unit tests for the hook or utils (Jest/Vitest)
- Add React Testing Library test for ProductCard or filters

**Acceptance Criteria**:
- Business logic isolated from UI
- Hook handles loading/error predictably
- At least one test passes
- Candidate explains test scope choices

## Rules & Constraints

- **TypeScript required** - All new code must be properly typed
- **No new UI libraries** - Work within existing stack (no MUI, Tailwind, etc.)
- **Keep scope focused** - Choose depth over breadth within time limit  
- **Explain tradeoffs** - Be prepared to discuss your architectural decisions

## Evaluation Criteria

**Passing bar**: Working implementation that meets the acceptance criteria for your chosen option, with clear explanation of technical decisions and tradeoffs.

**Excellence indicators**:
- Identifies root causes, not just symptoms
- Proposes scalable solutions that would work in larger applications
- Demonstrates understanding of web standards and best practices
- Shows systematic thinking about code organization and maintainability

## Current Known Issues

The application intentionally contains these categories of problems:

1. **Architecture**: Client-side data fetching causing FOUC, no URL state management
2. **Code Quality**: Repeated markup, inconsistent styling, missing component abstractions  
3. **Accessibility**: Missing labels, non-semantic buttons, poor focus management
4. **Performance**: Inefficient image loading, heavy imports, no loading states
5. **User Experience**: No empty states, error handling, or feedback during state changes