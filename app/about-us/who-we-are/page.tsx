"use client"
import React, { useEffect, useState } from 'react'
import { OrgChartComponent } from '@/components/OrgChart';
import * as d3 from 'd3';
import LogoLoop from '@/components/LogoLoop';
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss } from 'react-icons/si';

const techLogos = [
    { node: <SiReact />, title: "React", href: "https://react.dev" },
    { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
    { node: <SiTypescript />, title: "TypeScript", href: "https://www.typescriptlang.org" },
    { node: <SiTailwindcss />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
];

// Alternative with image sources
const imageLogos = [
    { src: "/logos/company1.png", alt: "Company 1", href: "https://company1.com" },
    { src: "/logos/company2.png", alt: "Company 2", href: "https://company2.com" },
    { src: "/logos/company3.png", alt: "Company 3", href: "https://company3.com" },
];


export default function page() {

    const [data, setData] = useState(null);

    useEffect(() => {
        d3.json(
            '/org.json'
        ).then((data) => {
            setData(data);
        });
    }, []);

    return (
        <div>
            {/* <div style={{ height: '200px', position: 'relative', overflow: 'hidden' }}>
                <LogoLoop
                    logos={techLogos}
                    speed={120}
                    direction="left"
                    logoHeight={68}
                    gap={40}
                    pauseOnHover
                    scaleOnHover
                    fadeOut
                    fadeOutColor="#ffffff"
                    ariaLabel="Technology partners"
                />
            </div> */}

            <div className='flex items-center mt-20'>
                <h1 className='text-5xl mx-auto'>Who we are?</h1>
            </div>
            <OrgChartComponent data={data} />
        </div>
    );
}
