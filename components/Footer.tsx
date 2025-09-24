import Link from "next/link";

export default function Footer() {
    return (
        <footer className="relative bg-gradient-to-b from-black via-[#003B5F]/60 to-[#001726] text-white pb-8 pt-10 p-8 overflow-hidden w-full">
            <div className="absolute inset-0 opacity-40 pointer-events-none bg-[url('/assets/wave.svg')] bg-repeat-x bg-bottom"></div>
            <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                    <h2 className="text-xl font-bold">LDSolutions &copy;</h2>
                    <p className="mt-2 text-sm text-gray-300">
                        Your trusted partner in technology and innovation. We empower businesses with scalable and efficient solutions — helping you build, grow, and succeed in the digital era.
                    </p>
                </div>

                <div>
                    <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
                    <ul className="space-y-2 text-sm text-gray-300">
                        <li><Link href="/" className="hover:text-white">Home</Link></li>
                        <li><Link href="/contact-us" className="hover:text-white">Contact Us</Link></li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-lg font-semibold mb-3">Get in Touch</h3>
                    <ul className="space-y-2 text-sm text-gray-300">
                        <li>Email: <Link href="mailto:sales@ldsolutionsph.com" className="hover:text-white">sales@ldsolutionsph.com</Link></li>
                        <li>Phone: <Link href="tel:+639605675579" className="hover:text-white">+639 605 675 579</Link></li>
                        <li>Address: Pasig City, Philippines</li>
                    </ul>
                </div>
            </div>
            <div className="relative border-t border-gray-600 mt-8 pt-4 text-center text-sm text-gray-400">
                &copy;{new Date().getFullYear()} LDSolutions All rights reserved.
            </div>
        </footer>

    );
}
