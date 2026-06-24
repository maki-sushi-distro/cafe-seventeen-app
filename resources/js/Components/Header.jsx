import { useState } from "react";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center">
                    {/* Logo */}
                    <div className="flex-shrink-0 flex items-center">
                        <a
                            href="/"
                            className="text-xl font-bold text-indigo-600"
                        >
                            Cafe Seventeen
                        </a>
                    </div>

                    {/* Desktop Navigation Links */}
                    <nav className="hidden md:flex space-x-8">
                        <a
                            href="/dashboard"
                            className="text-gray-600 hover:text-indigo-600 font-medium transition"
                        >
                            Menu
                        </a>
                        <a
                            href="/projects"
                            className="text-gray-600 hover:text-indigo-600 font-medium transition"
                        >
                            Checkout
                        </a>
                        <a
                            href="/analytics"
                            className="text-gray-600 hover:text-indigo-600 font-medium transition"
                        >
                            About Us
                        </a>
                    </nav>

                    {/* Right side CTA/Actions */}
                    <div className="hidden md:flex items-center space-x-4">
                        <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg font-medium transition shadow-sm">
                            Get Started
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="flex md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-gray-600 hover:text-gray-900 focus:outline-none"
                        >
                            <svg
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                {isOpen ? (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                ) : (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Panel */}
            {isOpen && (
                <div className="md:hidden bg-gray-50 border-t border-gray-200 px-4 pt-2 pb-4 space-y-1">
                    <a
                        href="/dashboard"
                        className="block px-3 py-2 rounded-md text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 font-medium"
                    >
                        Dashboard
                    </a>
                    <a
                        href="/projects"
                        className="block px-3 py-2 rounded-md text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 font-medium"
                    >
                        Projects
                    </a>
                    <a
                        href="/analytics"
                        className="block px-3 py-2 rounded-md text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 font-medium"
                    >
                        Analytics
                    </a>
                    <div className="pt-4 border-t border-gray-200">
                        <button className="w-full bg-indigo-600 text-white px-4 py-2 rounded-lg font-medium">
                            Get Started
                        </button>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;
