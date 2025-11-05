export const metadata = {
  title: 'Google Login Test',
  description: 'Minimal Next.js app to test Google login button behavior',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ fontFamily: 'system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, Helvetica, Arial, sans-serif', margin: 0 }}>
        {children}
      </body>
    </html>
  )
}
