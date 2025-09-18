import React from 'react';
export default function PrinciplesSection() {
    return (  
        <section className="bg-white mx-auto max-w-7xl px-6 lg:px-8 py-25">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 px-6 lg:px-7 text-black">
                <article className="lg:col-span-2">
                    <h3 className="text-2xl font-bold text-[#1e00ff]">Uncovering, owning and solving business problems</h3>
                    <p className="mt-4">Our multi-disciplinary team works collaboratively with you to uncover key themes across your organisation and client base. We combine evidence-led research with product and brand thinking to design resilient, future-proof solutions.</p>

                    <div className="mt-8 grid grid-cols-1 md:grid-cols-1 gap-6">
                        <div className="relative flex flex-col md:flex-row border rounded-lg overflow-hidden">
                            <div className="p-6 md:w-1/2 relative z-10 border-l-4 border-[#1e00ff] bg-indigo-50 rounded-md">
                                <h3 className="font-semibold">Discovery</h3>
                                <p className="mt-2 text-sm">
                                    We solve your challenges by listening and adapting to your organisation, working with you to draw a
                                    picture of your business needs.
                                </p>
                                <a className="mt-4 inline-block text-[#1e00ff] text-sm font-medium" href="#">
                                    Why a discovery?
                                </a>
                            </div>

                            <div className="md:w-1/2 bg-cover bg-center md:block" style={{
                                backgroundImage: "url('/assets/services/img-2.png')"
                            }}></div>
                        </div>

                        <div className="relative flex flex-col md:flex-row border rounded-lg overflow-hidden">
                            <div className="p-6 md:w-1/2 relative z-10 border-l-4 border-[#1e00ff] bg-indigo-50 rounded-md">
                                <h3 className="font-semibold">Designing optimised business processes</h3>
                                <p className="mt-2 text-sm">
                                    We solve your challenges by listening and adapting to your organisation, working with you to draw a
                                    picture of your business needs.
                                </p>
                                <a className="mt-4 inline-block text-[#1e00ff] text-sm font-medium" href="#">
                                    View more
                                </a>
                            </div>

                            <div className="md:w-1/2 bg-cover bg-center md:block" style={{
                                backgroundImage: "url('/assets/services/img-3.png')"
                            }}></div>
                        </div>
                    </div>
                </article>

                {/* <aside className="border rounded-lg bg-slate-100 overflow-hidden flex flex-col">
                    <div className="w-full h-48 md:h-50 bg-cover bg-center"
                        style={{ backgroundImage: "url('/assets/services/img-3.png')" }}>
                    </div>

                    <div className="p-6">
                        <h4 className="font-semibold">Our principles</h4>
                        <ol className="mt-3 space-y-2 text-sm text-slate-700">
                            <li><strong>1. Evidence based</strong> — define solutions and align stakeholders based on discovery.</li>
                            <li><strong>2. User-Centric</strong> — design around real user needs.</li>
                            <li><strong>3. Fail fast, learn fast</strong> — test quickly and iterate.</li>
                            <li><strong>4. Brand experience</strong> — keep brand at the forefront.</li>
                            <li><strong>5. Market positioned</strong> — launch with research-led strategy.</li>
                            <li><strong>6. Proven and tested</strong> — benchmark success through testing.</li>
                        </ol>
                    </div>
                </aside> */}

                {/* <aside className="border rounded-lg bg-slate-100 overflow-hidden flex flex-col">
                    <div
                        className="w-full h-40 md:h-50 bg-cover bg-center"
                        style={{ backgroundImage: "url('/assets/services/img-3.png')" }}
                    ></div>

                    <div className="p-6">
                        <h4 className="font-semibold">Our principles</h4>
                        <ol className="relative border-l border-slate-300 mt-4 space-y-6">
                            <li className="ml-6">
                                <span className="absolute -left-2 mt-1 w-3 h-3 bg-[#1e00ff] rounded-full border"></span>
                                <p className="text-sm text-slate-700">
                                    <strong>Evidence based</strong> — define solutions and align stakeholders based on discovery.
                                </p>
                            </li>

                            <li className="ml-6">
                                <span className="absolute -left-2 w-3 h-3 bg-[#1e00ff] rounded-full border border-white"></span>
                                <p className="text-sm text-slate-700">
                                    <strong>User-Centric</strong> — design around real user needs.
                                </p>
                            </li>

                            <li className="ml-6">
                                <span className="absolute -left-2 w-3 h-3 bg-[#1e00ff] rounded-full border border-white"></span>
                                <p className="text-sm text-slate-700">
                                    <strong>Fail fast, learn fast</strong> — test quickly and iterate.
                                </p>
                            </li>

                            <li className="ml-6">
                                <span className="absolute -left-2 w-3 h-3 bg-[#1e00ff] rounded-full border border-white"></span>
                                <p className="text-sm text-slate-700">
                                    <strong>Brand experience</strong> — keep brand at the forefront.
                                </p>
                            </li>

                            <li className="ml-6">
                                <span className="absolute -left-2 w-3 h-3 bg-[#1e00ff] rounded-full border border-white"></span>
                                <p className="text-sm text-slate-700">
                                    <strong>Market positioned</strong> — launch with research-led strategy.
                                </p>
                            </li>

                            <li className="ml-6">
                                <span className="absolute -left-2 w-3 h-3 bg-[#1e00ff] rounded-full border border-white"></span>
                                <p className="text-sm text-slate-700">
                                    <strong>Proven and tested</strong> — benchmark success through testing.
                                </p>
                            </li>
                        </ol>
                    </div>
                </aside> */}
            </div>
        </section>
    );
}