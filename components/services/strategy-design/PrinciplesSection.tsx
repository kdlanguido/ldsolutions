export default function PrinciplesSection() {
    return (
        <section id="dare" className="mx-auto max-w-7xl px-6 lg:px-8 py-16">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <article className="lg:col-span-2">
                    <h2 className="text-2xl font-bold">Uncovering, owning and solving business problems</h2>
                    <p className="mt-4 text-slate-700">Our multi-disciplinary team works collaboratively with you to uncover key themes across your organisation and client base. We combine evidence-led research with product and brand thinking to design resilient, future-proof solutions.</p>


                    <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="p-6 border rounded-lg">
                            <h3 className="font-semibold">Discovery</h3>
                            <p className="mt-2 text-sm text-slate-600">We solve your challenges by listening and adapting to your organisation, working with you to draw a picture of your business needs.</p>
                            <a className="mt-4 inline-block text-indigo-600 text-sm font-medium" href="#">Why a discovery?</a>
                        </div>


                        <div className="p-6 border rounded-lg">
                            <h3 className="font-semibold">Designing optimised business processes</h3>
                            <p className="mt-2 text-sm text-slate-600">We accelerate your proposition with a mixture of brand, product design, strategy and market thinking to turn ideas into reality.</p>
                        </div>
                    </div>


                    <blockquote className="mt-8 p-6 border-l-4 border-indigo-600 bg-indigo-50 rounded-md">
                        <p className="text-slate-800 italic">"Having a true expert by your side at the planning stage is critical but a partner’s real worth is tested when it comes to execution. 6point6 has blasted through with flying colours."</p>
                        <footer className="mt-3 text-sm text-slate-600">Mark Heath — Founder, Open Borders Direct</footer>
                    </blockquote>
                </article>


                <aside className="p-6 border rounded-lg bg-slate-50">
                    <h4 className="font-semibold">Our principles</h4>
                    <ol className="mt-3 space-y-2 text-sm text-slate-700">
                        <li><strong>1. Evidence based</strong> — define solutions and align stakeholders based on discovery.</li>
                        <li><strong>2. User-Centric</strong> — design around real user needs.</li>
                        <li><strong>3. Fail fast, learn fast</strong> — test quickly and iterate.</li>
                        <li><strong>4. Brand experience</strong> — keep brand at the forefront.</li>
                        <li><strong>5. Market positioned</strong> — launch with research-led strategy.</li>
                        <li><strong>6. Proven and tested</strong> — benchmark success through testing.</li>
                    </ol>
                </aside>
            </div>
        </section>
    );
}