import React from "react";
import { Facebook, Instagram, Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
    return (
        <footer className="w-full border-t bg-gray-50 text-gray-700">
            <div className="max-w-6xl mx-auto py-10 px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
                {/* Newsletter Section */}
                <div>
                    <h2 className="text-lg font-semibold mb-4">Newsletter</h2>
                    <p className="text-sm mb-3">
                        Subscribe to get updates on news and events.
                    </p>

                    <form className="flex gap-2">
                        <input
                            type="email"
                            name="email"
                            aria-label="Email address"
                            placeholder="Your email"
                            className="flex-1 p-2 border rounded-lg focus:outline-none"
                        />
                        <button
                            type="submit"
                            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                        >
                            Subscribe
                        </button>
                    </form>

                    <div className="flex gap-3 mt-4">
                        <a href="#" className="hover:text-blue-600" aria-label="Facebook">
                            <Facebook size={20} />
                        </a>
                        <a href="#" className="hover:text-pink-500" aria-label="Instagram">
                            <Instagram size={20} />
                        </a>
                      
                    </div>
                </div>

                {/* Contact Info */}
                <div>
                    <h2 className="text-lg font-semibold mb-4">Contact Information</h2>
                    <ul className="space-y-3 text-sm">
                        <li className="flex items-center gap-2">
                            <MapPin size={18} />
                            <span>4005 Silver Business Point, India</span>
                        </li>
                        <li className="flex items-center gap-2">
                            <Phone size={18} />
                            <a href="tel:+91123456789" className="hover:text-blue-600">
                                +91 123456789
                            </a>
                        </li>
                        <li className="flex items-center gap-2">
                            <Mail size={18} />
                            <a href="mailto:info@gmail.com" className="hover:text-blue-600">
                                info@gmail.com
                            </a>
                        </li>
                    </ul>
                </div>

                {/* Quick Links */}
                <div>
                    <h2 className="text-lg font-semibold mb-4">Quick Links</h2>
                    <ul className="space-y-2 text-sm">
                        <li>
                            <a href="#" className="hover:text-blue-600">
                                My Account
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-blue-600">
                                Orders
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-blue-600">
                                Contact Us
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-blue-600">
                                FAQs
                            </a>
                        </li>
                    </ul>
                </div>

                {/* About / Product Section */}
                <div>
                    <h2 className="text-lg font-semibold mb-4">Our Company</h2>
                    <ul className="space-y-2 text-sm">
                        <li>
                            <a href="#" className="hover:text-blue-600">
                                About Us
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-blue-600">
                                Privacy Policy
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-blue-600">
                                Terms & Conditions
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="border-t py-4 text-center text-sm text-gray-500">
                © {new Date().getFullYear()} YourCompany. All rights reserved.
            </div>
        </footer>
    );
}
