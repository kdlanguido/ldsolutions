"use client";

import { ChevronDown } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";

interface ChildLink {
    title: string;
    href: string;
}

interface HeaderMobileDropdownProps {
    closeFunction: () => void;
    btnTitle: string;
    childLinks: ChildLink[] | ChildLink;
}

export default function HeaderMobileDropdown({
    closeFunction,
    btnTitle,
    childLinks,
}: HeaderMobileDropdownProps) {
    const [isOpen, setIsOpen] = useState(false);

    // Normalize childLinks to always be an array
    const linksArray = Array.isArray(childLinks) ? childLinks : [childLinks];

    // If only one link, render directly as Link
    if (linksArray.length === 1) {
        const single = linksArray[0];
        return (
            <Link
                href={single.href}
                className="w-full flex justify-between items-center hover:underline"
                onClick={closeFunction}
            >
                {single.title}
            </Link>
        );
    }

    return (
        <div className="w-full">
            <button
                className="w-full flex justify-between items-center hover:underline"
                onClick={() => setIsOpen(!isOpen)}
            >
                {btnTitle}
                <ChevronDown
                    className={`w-4 h-4 transform transition-transform ${isOpen ? "rotate-180" : ""
                        }`}
                />
            </button>

            {isOpen && (
                <div className="bg-[#171717] rounded mt-2 pl-4 flex flex-col gap-2 p-3">
                    {linksArray.map((childLink, index) => (
                        <Link
                            key={index}
                            href={childLink.href}
                            className="hover:underline text-sm"
                            onClick={closeFunction}
                        >
                            {childLink.title}
                        </Link>
                    ))}
                </div>
            )}
        </div>
    );
}
