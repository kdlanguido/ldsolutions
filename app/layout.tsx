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
          <div className="min-h-screen flex flex-col">
            <Header />
            <div className="flex-1">
              <LoadingProvider>
                <main className="pt-0 lg:p-[0px] lg:pt-[120px]">
                  {children}
                </main>
              </LoadingProvider>
            </div>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
