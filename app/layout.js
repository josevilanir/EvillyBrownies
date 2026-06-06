import './globals.css'
import { Lora, Libre_Baskerville } from 'next/font/google'

const lora = Lora({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-lora',
  display: 'swap',
})

const libreBaskerville = Libre_Baskerville({
  subsets: ['latin'],
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  variable: '--font-libre',
  display: 'swap',
})

export const metadata = {
  title: 'Evilly Souza | Brownies Artesanais',
  description: 'Brownies artesanais feitos com carinho e chocolate de verdade. Experimente a casquinha crocante e o recheio suculento.',
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" className={`${lora.variable} ${libreBaskerville.variable}`}>
      <body suppressHydrationWarning>{children}</body>
    </html>
  )
}
