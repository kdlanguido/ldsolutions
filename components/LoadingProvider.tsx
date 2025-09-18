"use client"

import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import Loader from "@/components/Loader"

export default function LoadingProvider({ children }: { children: React.ReactNode }) {
    const pathname = usePathname()
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        const timeout = setTimeout(() => setLoading(false), 500) // small delay
        return () => clearTimeout(timeout)
    }, [pathname])

    return (
        <>
            {loading && (
                <div className="fixed inset-0 flex items-center justify-center bg-black/70 z-50">
                    <Loader />
                </div>
            )}
            {children}
        </>
    )
}
