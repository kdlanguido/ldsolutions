import "./globals.css"
import { ThemeProvider } from "@/components/ThemeProvider"
import type { Metadata } from "next"
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AdminSideBar } from "@/components/AdminSideBar"

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
                        <div className="flex-1">
                            <SidebarProvider>
                                <AdminSideBar />
                                <SidebarTrigger className="cursor-pointer my-2" />
                                <main className="w-full">
                                    {children}
                                </main>
                            </SidebarProvider>
                        </div>
                    </div>
                </ThemeProvider>
            </body>
        </html>
    )
}