"use client";

import Loader from "@/components/Loader";

export default function LoadingProvider({ children }: { children: React.ReactNode }) {
    if (!children) {
        return <Loader />;
    }

    return <>{children}</>;
}
