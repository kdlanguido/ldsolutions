import { Header } from "@/components/Header"
import "./globals.css"
import { ThemeProvider } from "@/components/Theme-Provider"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "LD Solutions",
  description: "LD Solutions Philippines",
  icons: {
    icon: "/favicon.png", // default
    shortcut: "/favicon.png", // optional
    apple: "/apple-touch-icon.png", // for iOS
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <Header />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
