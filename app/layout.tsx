import './globals.css'

export const metadata = {
  title: 'Smart Bookmark App',
  description: 'Realtime private bookmark manager',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-gray-50 min-h-screen">
        {children}
      </body>
    </html>
  )
}
