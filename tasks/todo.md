# TODO

## Project Initialization
- [x] Initial directory check
- [x] Setup basic project structure concept
- [x] Integrate GEMINI.md and Skills
- [x] Initialize Next.js project <!-- id: 1 -->

## Planning & Discussion
- [x] Discuss tech stack (Next.js)
- [x] Propose implementation plan
- [x] Receive detailed requirements from user <!-- id: 2 -->

## Implementation
- [x] Build core design system (globals.css, theme variables) <!-- id: 3 -->
- [x] Implement Hero section with staggered animations <!-- id: 4 -->
- [x] Build Product Grid with dynamic hover effects <!-- id: 5 -->
- [x] Create professional About and Instagram sections <!-- id: 15 -->
- [x] Create professional Contact Form and Footer <!-- id: 6 -->

## Verification
- [x] Run `npm run build` and check for errors <!-- id: 7 -->
- [x] Manual UI/UX audit against GEMINI principles <!-- id: 8 -->
- [x] Mobile responsiveness check <!-- id: 9 -->
## Premium Redesign (Minimalist/High-End)
- [x] Update `globals.css` with minimalist variables <!-- id: 20 -->
- [x] Redesign Hero to "Furniture/Apple" style (Ref 1/2/3) <!-- id: 21 -->
- [x] Redesign Menu to minimalist table/list style <!-- id: 22 -->
- [x] Update About and Stats for cleaner editorial look <!-- id: 23 -->
- [x] Final visual polish and responsive audit <!-- id: 24 -->

## Image Comparison Section
- [x] Adapt and implement Image Comparison slider component <!-- id: 40 -->
- [x] Integrate images provided by the user (`brownie-ours.png` and `brownie-others.png`) <!-- id: 41 -->
- [x] Create the `Comparison` section component and add it before Instagram <!-- id: 42 -->
- [x] Verify UI and functionality <!-- id: 43 -->

## Animation Improvements
- [x] Sync Floating Brownies flight with Menu thumbnails (landing instead of fading) <!-- id: 60 -->
- [x] Verify seamless transition and docking <!-- id: 61 -->

## Brand Asset Update
- [x] Replace default Vercel favicon with brownie icon <!-- id: 50 -->
- [x] Verify icon in development server <!-- id: 51 -->

## Performance Optimization (auditoria 2026-06-06) — uma por commit
- [x] P1: Comprimir/redimensionar imagens (11MB -> 1.4MB, -87%) com sharp <!-- id: 70 -->
- [ ] P2: Migrar <img>/CSS-bg crus para next/image + priority no LCP <!-- id: 71 -->
- [ ] P3: Migrar fontes Google (@import) para next/font <!-- id: 72 -->
- [ ] P4: Reduzir framer-motion em componentes estaticos <!-- id: 73 -->
- [ ] P5: Limpeza de repo (diff.patch, next.config, .gitignore) <!-- id: 74 -->
