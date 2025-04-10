import "../styles/global.css"

export const metadata = {
  title: 'My Portfolio',
  description: 'Created with Next.js',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
