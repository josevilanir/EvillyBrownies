# Lessons Learned

## Patterns to Avoid
- **Hydration Mismatch Errors**: Browser extensions (like Browser-In-Browser) can inject attributes into the `<body>` causing React hydration errors. Use `suppressHydrationWarning` on the `<body>` tag to handle this gracefully.
- **Image Performance**: Always add the `sizes` prop to Next.js `Image` components that use the `fill` prop to avoid console warnings and optimize loading.
- **Servidor-fantasma na verificação**: `pkill -f "next start"` NÃO mata o processo, que roda como `next-server (v...)`. Um `npm run start` seguinte falha silenciosamente com `EADDRINUSE` e o build ANTIGO continua respondendo na porta — levando a screenshots/inspeções enganosas (ex.: parecia que botões e fontes tinham quebrado). Sempre conferir `head` do log do servidor e `ss -ltnp | grep <porta>` antes de confiar na verificação; usar `pkill -9 -f next-server` e, na dúvida, uma porta nova.

## Successful Patterns
- **Tech Stack Selection**: Using Next.js + Vanilla CSS for a balance of modern features and premium control.
- **Workflow Integration**: Consolidating custom skills into GEMINI.md for quick reference and strict adherence.
