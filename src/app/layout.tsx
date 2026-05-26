import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'IA aplicada al agro — Puna Tech 2026',
  description: 'Charla de Agustín Juárez en Puna Tech 2026. Datos, agentes y casos reales en el agro.',
  openGraph: {
    title: 'Transformando el agro con agentes de IA',
    description: 'Charla en Puna Tech 2026 · Salta',
    siteName: 'Puna Tech',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  )
}
