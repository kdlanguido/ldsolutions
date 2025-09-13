import React from "react";
import StrategySection from "@/components/services/strategy-design/StrategySection";
import PrinciplesSection from "@/components/services/strategy-design/PrinciplesSection";
export default function StrategyDesignPage() {
    return (
        <div className="min-h-screen bg-dark text-slate-900 antialiased">
            <StrategySection />
            <PrinciplesSection />
        </div>
    );
}