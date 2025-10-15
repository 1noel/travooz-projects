import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';

const Navigation = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            setIsScrolled(scrollTop > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    
    const navLinks = [
        { name: "Home", href: "/", isRoute: true },
        { name: "Travooz", href: "/travooz", isRoute: true },
        { name: "Channel", href: "/channel", isRoute: true },
        { name: "Souvenirs", href: "/souvenirs", isRoute: true },
        { name: "Card", href: "/card", isRoute: true },
        { name: "HMS", href: "/hms", isRoute: false },
        { name: "Events", href: "/events", isRoute: true },
        { name: "Guide", href: "/guide", isRoute: true }
    ];

    return (
        <nav className={`fixed w-full top-0 z-50 transition-all duration-300 ${
            isScrolled 
                ? 'bg-black/80 backdrop-blur-md shadow-xl border-b border-lime-500/20' 
                : 'bg-black backdrop-blur-sm'
        }`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16 lg:h-16">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <Link to="/" className="block">
                            <h1 className={`text-2xl lg:text-3xl font-bold transition-colors duration-300 hover:scale-105 cursor-pointer ${
                                isScrolled ? 'text-lime-400' : 'text-white'
                            }`}>TRAVOOZ</h1>
                        </Link>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-6 lg:space-x-8">
                            {navLinks.map((link) => 
                                link.isRoute ? (
                                    <Link
                                        key={link.name}
                                        to={link.href}
                                        className={`px-4 py-2 rounded-lg text-sm lg:text-base font-medium transition-all duration-300 hover:scale-105 ${
                                            window.location.pathname === link.href
                                                ? 'text-lime-400'
                                                : isScrolled
                                                    ? 'text-white hover:bg-lime-500/20 hover:text-lime-300'
                                                    : 'text-white/90 hover:bg-white/10 hover:text-white hover:backdrop-blur-md'
                                        }`}
                                    >
                                        {link.name}
                                    </Link>
                                ) : (
                                    <a
                                        key={link.name}
                                        href={link.href}
                                        className={`px-4 py-2 rounded-lg text-sm lg:text-base font-medium transition-all duration-300 hover:scale-105 ${
                                            isScrolled
                                                ? 'text-white hover:bg-lime-500/20 hover:text-lime-300'
                                                : 'text-white/90 hover:bg-white/10 hover:text-white hover:backdrop-blur-md'
                                        }`}
                                    >
                                        {link.name}
                                    </a>
                                )
                            )}
                        </div>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <button
                            onClick={toggleMenu}
                            className={`inline-flex items-center justify-center p-2 rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-lime-400 ${
                                isScrolled
                                    ? 'bg-lime-500/20 text-lime-300 hover:bg-lime-500/30 hover:text-white'
                                    : 'bg-white/10 text-white hover:bg-white/20 backdrop-blur-md'
                            }`}
                            aria-expanded="false"
                        >
                            <span className="sr-only">Open main menu</span>
                            {!isMenuOpen ? (
                                <svg
                                    className="block h-6 w-6"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                </svg>
                            ) : (
                                <svg
                                    className="block h-6 w-6"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden">
                    <div className={`px-4 pt-4 pb-6 space-y-2 backdrop-blur-lg transition-all duration-300 ${
                        isScrolled
                            ? 'bg-black/90 border-t border-lime-500/30'
                            : 'bg-black/50 border-t border-white/20'
                    }`}>
                        {navLinks.map((link, index) => 
                            link.isRoute ? (
                                <Link
                                    key={link.name}
                                    to={link.href}
                                    className={`block px-4 py-3 rounded-lg text-base font-medium transition-all duration-300 hover:scale-105 animate-fadeIn ${
                                        window.location.pathname === link.href
                                            ? 'text-lime-400'
                                            : isScrolled
                                                ? 'text-white hover:bg-lime-500/20 hover:text-lime-300'
                                                : 'text-white/90 hover:bg-white/10 hover:text-white hover:backdrop-blur-md'
                                    }`}
                                    style={{ animationDelay: `${index * 0.1}s` }}
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {link.name}
                                </Link>
                            ) : (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className={`block px-4 py-3 rounded-lg text-base font-medium transition-all duration-300 hover:scale-105 animate-fadeIn ${
                                        isScrolled
                                            ? 'text-white hover:bg-lime-500/20 hover:text-lime-300'
                                            : 'text-white/90 hover:bg-white/10 hover:text-white hover:backdrop-blur-md'
                                    }`}
                                    style={{ animationDelay: `${index * 0.1}s` }}
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {link.name}
                                </a>
                            )
                        )}
                    </div>
                </div>
            )}
        </nav>
    )
}

export default Navigation;