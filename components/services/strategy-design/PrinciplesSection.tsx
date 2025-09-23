import React from "react";

export default function ServicesSection() {
    return (
        <section className="bg-[#ffffff] text-black py-30">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="text-center">
                    <h2 className="text-3xl font-bold">Strategy and design</h2>
                    <p className="mt-3 text-black max-w-2xl mx-auto">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim ve
                    </p>
                </div>

                <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-4 text-[#E9EAEC]">
                    <div className="lg:col-span-2 flex flex-col gap-4">
                        <div className="bg-[#0B0C0C] border rounded-lg overflow-hidden flex flex-col md:flex-row">
                            <div
                                className="h-50 md:w-3/2 bg-cover bg-center"
                                style={{ backgroundImage: "url('/assets/services/img-3.png')" }}
                            ></div>
                            <div className="p-5 flex flex-col justify-center">
                                <h3 className="font-semibold text-lg">Uncovering, owning and solving business problems</h3>
                                <p className="mt-2 text-sm text-gray-400">
                                    We are passionate about solving business problems through carefully considered strategy and design. It’s all about adding value for your clients by making sure everything works now and in the future.
                                </p>
                            </div>
                        </div>

                        <div className="bg-[#111111] border border-gray-800 rounded-lg overflow-hidden flex flex-col md:flex-row">
                           
                            <div className="p-5 flex flex-col justify-center">
                                <h3 className="font-semibold text-lg">System Integration</h3>
                                <p className="mt-2 text-sm text-gray-400">
                                    We connect systems and workflows to help your business run smoothly.
                                </p>
                                <button className="mt-4 px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded hover:bg-indigo-700 transition">
                                    Learn more
                                </button>
                            </div>
                             <div
                                className="h-36 md:w-1/3 bg-cover bg-center"
                                style={{ backgroundImage: "url('/assets/services/system.png')" }}
                            ></div>
                        </div>

                        <div className="bg-[#111111] border border-gray-800 rounded-lg overflow-hidden flex flex-col md:flex-row">
                            <div
                                className="h-36 md:w-1/3 bg-cover bg-center"
                                style={{ backgroundImage: "url('/assets/services/seo.png')" }}
                            ></div>
                            <div className="p-5 flex flex-col justify-center">
                                <h3 className="font-semibold text-lg">SEO Optimization</h3>
                                <p className="mt-2 text-sm text-gray-400">
                                    Boost your website’s visibility on search engines and attract more customers.
                                </p>
                                <button className="mt-4 px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded hover:bg-indigo-700 transition">
                                    Learn more
                                </button>
                            </div>
                        </div>

                        <div className="bg-[#111111] border border-gray-800 rounded-lg overflow-hidden flex flex-col md:flex-row">
                            <div
                                className="h-36 md:w-1/3 bg-cover bg-center"
                                style={{ backgroundImage: "url('/assets/services/maintenance.png')" }}
                            ></div>
                            <div className="p-5 flex flex-col justify-center">
                                <h3 className="font-semibold text-lg">Web Maintenance</h3>
                                <p className="mt-2 text-sm text-gray-400">
                                    Keep your website up-to-date and secure so it keeps driving value for your business.
                                </p>
                                <button className="mt-4 px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded hover:bg-indigo-700 transition">
                                    Learn more
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col gap-6">
                        <div className="bg-[#111111] border border-gray-800 rounded-lg overflow-hidden flex flex-col">
                            <div
                                className="h-56 bg-cover bg-center"
                                style={{ backgroundImage: "url('/assets/services/mobile.png')" }}
                            ></div>
                            <div className="p-5">
                                <h3 className="font-semibold text-lg">Mobile App Development</h3>
                                <p className="mt-2 text-sm text-gray-400">
                                    Our design team crafts beautiful and user-friendly interfaces that delight users.
                                </p>
                                <button className="mt-4 px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded hover:bg-indigo-700 transition">
                                    Learn more
                                </button>
                            </div>
                        </div>

                        <div className="bg-[#111111] border border-gray-800 rounded-lg overflow-hidden flex flex-col">
                            <div
                                className="h-56 bg-cover bg-center"
                                style={{ backgroundImage: "url('/assets/services/uiux.png')" }}
                            ></div>
                            <div className="p-5">
                                <h3 className="font-semibold text-lg">UI/UX</h3>
                                <p className="mt-2 text-sm text-gray-400">
                                    Beautiful, user-centered designs that improve engagement and usability.
                                </p>
                                <button className="mt-4 px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded hover:bg-indigo-700 transition">
                                    Learn more
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
