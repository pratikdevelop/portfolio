import './globals.css'

export const metadata = {
  title: 'Pratik Raut — Full Stack Developer | MERN, Angular, Python',
  description:
    'Full Stack Developer with 3.8 years building scalable, production-ready web applications with Node.js, React.js, Angular, Python, PostgreSQL, AWS and Docker. Available for full-time roles.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&family=Space+Grotesk:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>

      <body className="h-[100vh] flex flex-col relative w-full overflow-hidden overflow-y-auto">
        {children}
      </body>
    </html>
  )
}
