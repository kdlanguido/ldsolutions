import { Header } from "@/components/Header"
import "./globals.css"
import { ThemeProvider } from "@/components/ThemeProvider"
import type { Metadata } from "next"
import LoadingProvider from "@/components/LoadingProvider"
import Footer from "@/components/Footer"

export const metadata: Metadata = {
  title: "LD Solutions",
  description: "LD Solutions Philippines",
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/apple-touch-icon.png",
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <Header />
          <LoadingProvider>
            <main className="p-[30px] pt-[120px]">
              {children}
            </main>
          </LoadingProvider>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
