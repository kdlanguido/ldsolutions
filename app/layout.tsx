import { Header } from "@/components/Header"
import "./globals.css"
import { ThemeProvider } from "@/components/ThemeProvider"
import type { Metadata } from "next"
import LoadingProvider from "@/components/LoadingProvider"

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
          <LoadingProvider>
            <main className="p-[30px] pt-[120px]"> {/* adjust to your header height */}
              {children}
            </main>
          </LoadingProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
