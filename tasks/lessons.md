# Lessons Learned

## Patterns to Avoid
- **Hydration Mismatch Errors**: Browser extensions (like Browser-In-Browser) can inject attributes into the `<body>` causing React hydration errors. Use `suppressHydrationWarning` on the `<body>` tag to handle this gracefully.
- **Image Performance**: Always add the `sizes` prop to Next.js `Image` components that use the `fill` prop to avoid console warnings and optimize loading.

## Successful Patterns
- **Tech Stack Selection**: Using Next.js + Vanilla CSS for a balance of modern features and premium control.
- **Workflow Integration**: Consolidating custom skills into GEMINI.md for quick reference and strict adherence.
