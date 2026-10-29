
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
    console.log("Component in mount")
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "Menu", href: "/menu" },
        { name: "About", href: "/about" },
        { name: "Contact", href: "/contact" },
    ];

    return (
        <header className="bg-white shadow-md">
            <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

                {/* Logo */}
                <a href="#" className="text-2xl font-bold text-orange-600">
                    Food<span className="text-gray-900">Hut.</span>
                </a>

                {/* Desktop Navigation */}
                <ul className="hidden items-center gap-8 md:flex">
                    {navLinks.map((link) => (
                        <li key={link.name}>
                            <Link
                                to={link.href}
                                className="font-medium text-gray-700 transition hover:text-orange-600"
                            >
                                {link.name}
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* Reservation Button */}
                <Link
                    to="/reservation"
                    className="hidden rounded-full bg-orange-600 px-6 py-3 font-semibold text-white transition hover:bg-orange-700 md:block"
                >
                    Book a Table
                </Link>

                {/* Mobile Menu Button */}
                <button
                    type="button"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
                    aria-expanded={isOpen}
                    className="text-2xl text-gray-800 md:hidden"
                >
                    {isOpen ? "✕" : "☰"}
                </button>
            </nav>

            {/* Mobile Navigation */}
            {isOpen && (
                <div className="border-t border-gray-200 px-6 py-4 md:hidden">
                    <ul className="flex flex-col gap-4">
                        {navLinks.map((link) => (
                            <li key={link.name}>
                                <Link
                                    to={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className="block font-medium text-gray-700 hover:text-orange-600"
                                >
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                        <li>
                            <a
                                href="#reservation"
                                onClick={() => setIsOpen(false)}
                                className="block rounded-lg bg-orange-600 px-5 py-3 text-center font-semibold text-white hover:bg-orange-700"
                            >
                                Book a Table
                            </a>
                        </li>
                    </ul>
                </div>
            )}
        </header>
    );
}


