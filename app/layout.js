import './globals.css'

export const metadata = {
  title: 'Evilly Souza | Brownies Artesanais',
  description: 'Brownies artesanais feitos com carinho e chocolate de verdade. Experimente a casquinha crocante e o recheio suculento.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body suppressHydrationWarning>{children}</body>
    </html>
  )
}
