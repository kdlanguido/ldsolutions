export default function Footer() {
    return (
        <footer className="relative bg-gradient-to-b from-transparent via-[#003B5F]/60 to-[#001726] text-white pb-8 pt-10 px-6 overflow-hidden">
            {/* Wavy background */}
            <div className="absolute inset-0 opacity-40 pointer-events-none bg-[url('/assets/wave.svg')] bg-repeat-x bg-bottom"></div>

            <div className="relative max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                    <h2 className="text-xl font-bold">LDSolutions &copy;</h2>
                    <p className="mt-2 text-sm text-gray-300">
                        Your trusted partner in finding the perfect property.
                        We connect people with their dream homes and investment opportunities.
                    </p>
                </div>
                <div>
                    <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
                    <ul className="space-y-2 text-sm text-gray-300">
                        <li><a href="#" className="hover:text-white">Home</a></li>
                        <li><a href="#" className="hover:text-white">About Us</a></li>
                        <li><a href="#" className="hover:text-white">Properties</a></li>
                        <li><a href="#" className="hover:text-white">Contact</a></li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-lg font-semibold mb-3">Get in Touch</h3>
                    <ul className="space-y-2 text-sm text-gray-300">
                        <li>Email: <a href="mailto:info@realstate.co" className="hover:text-white">info@realstate.co</a></li>
                        <li>Phone: <a href="tel:+1234567890" className="hover:text-white">+1 234 567 890</a></li>
                        <li>Address: 123 Main Street, City, Country</li>
                    </ul>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="relative border-t border-gray-600 mt-8 pt-4 text-center text-sm text-gray-400">
                &copy;{new Date().getFullYear()} LDSolutions All rights reserved.
            </div>
        </footer>

    );
}
