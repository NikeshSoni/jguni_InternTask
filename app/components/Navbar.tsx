"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, Search, X, ChevronDown, Sparkles, User, BookOpen, Building2, Briefcase, Mail } from "lucide-react";
import { useState, useEffect } from "react";
import Logo from "../assets/Logo.png";

export default function Navbar() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const navLinks = [
    { name: "Programmes", href: "#", icon: BookOpen, hasDropdown: true },
    { name: "Campus", href: "#", icon: Building2, hasDropdown: true },
    { name: "Collaborations", href: "#", icon: Briefcase, hasDropdown: false },
    { name: "Career", href: "#", icon: User, hasDropdown: true },
    { name: "Contact Us", href: "#", icon: Mail, hasDropdown: false },
  ];

  const dropdownContent: Record<string, string[]> = {
    Programmes: [
      "Undergraduate",
      "Postgraduate",
      "Doctoral",
      "Diploma",
      "Online Programs",
    ],
  
    Campus: [
      "Infrastructure",
      "Library",
      "Hostels",
      "Sports Complex",
      "Cafeteria",
    ],
  
    Career: [
      "Placements",
      "Internships",
      "Career Guidance",
      "Alumni Network",
      "Recruiters",
    ],
  };
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileMenu(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="w-full overflow-x-hidden">
      {/* ================= NAVBAR ================= */}
      <header 
        className={`w-full fixed top-0 left-0 z-50 transition-all duration-500 ${
          scrolled 
            ? "bg-white/95 backdrop-blur-md shadow-lg py-2" 
            : "bg-white shadow-md py-3"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo with Animation */}
            <Link href="/" className="group relative flex items-center gap-2 cursor-pointer">
              <div className="relative">
                {/* Animated gradient ring */}
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full blur-md opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>
                <Image
                  src={Logo}
                  alt="JG University"
                  width={65}
                  height={65}
                  className="object-contain transition-all duration-500 group-hover:scale-110 group-hover:rotate-3"
                />
              </div>
              <div className="hidden sm:block">
                <h1 className="text-xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                  JG University
                </h1>
                <p className="text-xs text-orange-500 font-medium">Excellence By Choice</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-6">
              {navLinks.map((link) => {
                const Icon = link.icon;
                const hasDropdown = link.hasDropdown;
                
                return (
                  <div
                    key={link.name}
                    className="relative group"
                    onMouseEnter={() => hasDropdown && setActiveDropdown(link.name)}
                    onMouseLeave={() => hasDropdown && setActiveDropdown(null)}
                  >
                    <Link
                      href={link.href}
                      className="flex items-center gap-1.5 text-gray-700 hover:text-orange-600 font-medium transition-colors duration-300 py-2"
                    >
                      <Icon size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                      {link.name}
                      {hasDropdown && (
                        <ChevronDown 
                          size={14} 
                          className={`transition-transform duration-300 ${
                            activeDropdown === link.name ? "rotate-180" : ""
                          }`}
                        />
                      )}
                    </Link>
                    
                    {/* Dropdown Menu */}
                    {hasDropdown && dropdownContent[link.name] && (
                      <div className={`absolute top-full left-0 mt-2 w-56 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden transition-all duration-300 origin-top ${
                        activeDropdown === link.name 
                          ? "opacity-100 scale-y-100 visible" 
                          : "opacity-0 scale-y-0 invisible"
                      }`}>
                        <div className="py-2">
                          {dropdownContent[link.name].map((item) => (
                            <Link
                              key={item}
                              href="#"
                              className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-colors"
                            >
                              {item}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </nav>

            {/* Right Side Actions */}
            <div className="hidden lg:flex items-center gap-4">
              {/* Search Button with Modal */}
              <button
                onClick={() => setSearchOpen(true)}
                className="p-2 rounded-full hover:bg-gray-100 transition-colors group"
              >
                <Search size={20} className="text-gray-600 group-hover:text-orange-500 transition-colors" />
              </button>

              {/* Admission Button with Animation */}
              <Link
                href="#"
                className="group relative overflow-hidden bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 transition-all duration-300 px-6 py-2.5 rounded-full text-white font-semibold shadow-md hover:shadow-xl transform hover:-translate-y-0.5"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <Sparkles size={16} className="animate-pulse" />
                  Admission Open 2024
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenu(!mobileMenu)}
              className="lg:hidden relative w-10 h-10 rounded-full hover:bg-gray-100 transition-all duration-300 flex items-center justify-center group"
            >
              <div className={`absolute inset-0 rounded-full transition-all duration-300 ${mobileMenu ? "bg-orange-50" : ""}`}></div>
              {mobileMenu ? (
                <X size={24} className="relative z-10 text-gray-800" />
              ) : (
                <Menu size={24} className="relative z-10 text-gray-800" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu with Animation */}
        <div 
          className={`lg:hidden absolute top-full left-0 w-full bg-white shadow-xl transition-all duration-400 overflow-hidden ${
            mobileMenu ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="flex flex-col px-6 py-6 gap-4">
            {navLinks.map((link, index) => {
              const Icon = link.icon;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenu(false)}
                  className="flex items-center gap-3 text-gray-700 hover:text-orange-600 transition-colors duration-300 py-2 border-b border-gray-100 group animate-slide-in"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <Icon size={18} className="text-gray-400 group-hover:text-orange-500 transition-colors" />
                  <span className="font-medium">{link.name}</span>
                  <ChevronDown size={14} className="ml-auto text-gray-400" />
                </Link>
              );
            })}

            {/* Mobile Admission Button */}
            <Link
              href="#"
              onClick={() => setMobileMenu(false)}
              className="bg-gradient-to-r from-orange-500 to-red-500 text-white py-3 rounded-full font-semibold text-center mt-2 shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2"
            >
              <Sparkles size={16} />
              Admission Open 2024
            </Link>

            {/* Mobile Search */}
            <div className="flex items-center border border-gray-200 rounded-full px-4 py-2.5 mt-2 bg-gray-50 focus-within:border-orange-400 focus-within:bg-white transition-all">
              <Search size={18} className="text-gray-400 mr-2" />
              <input
                type="text"
                placeholder="Search..."
                className="outline-none text-sm w-full bg-transparent text-gray-800 placeholder-gray-400"
              />
            </div>
          </div>
        </div>
      </header>

      {/* Search Modal */}
      {searchOpen && (
        <div className="fixed inset-0 z-[60] bg-black/50 backdrop-blur-md animate-fade-in">
          <div className="absolute top-20 left-1/2 -translate-x-1/2 w-full max-w-2xl px-4">
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden animate-slide-down">
              <div className="flex items-center justify-between p-4 border-b">
                <h3 className="text-lg font-semibold text-gray-800">Search</h3>
                <button
                  onClick={() => setSearchOpen(false)}
                  className="p-1 rounded-full text-gray-500 hover:bg-gray-100 transition"
                >
                  <X size={20} />
                </button>
              </div>
              <div className="p-4">
                <div className="flex items-center border border-gray-200 rounded-xl px-4 py-3 focus-within:border-orange-400 focus-within:ring-2 focus-within:ring-orange-100 transition-all">
                  <Search size={20} className="text-gray-400 mr-3" />
                  <input
                    type="text"
                    placeholder="Search for programmes, events, news..."
                    className="outline-none text-base w-full text-gray-800"
                    autoFocus
                  />
                </div>
                <div className="mt-4 flex gap-2 flex-wrap">
                  <span className="text-xs text-gray-500">Popular:</span>
                  <button className="text-xs px-2 py-1 text-gray-500 bg-gray-100 rounded-full hover:bg-orange-100 hover:text-orange-600 transition">BBA</button>
                  <button className="text-xs px-2 py-1 text-gray-500 bg-gray-100 rounded-full hover:bg-orange-100 hover:text-orange-600 transition">MBA</button>
                  <button className="text-xs px-2 py-1 text-gray-500 bg-gray-100 rounded-full hover:bg-orange-100 hover:text-orange-600 transition">Admissions</button>
                  <button className="text-xs px-2 py-1 text-gray-500 bg-gray-100 rounded-full hover:bg-orange-100 hover:text-orange-600 transition">Scholarships</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Custom CSS */}
      <style jsx>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        .animate-slide-in {
          animation: slideIn 0.3s ease-out forwards;
          opacity: 0;
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fade-in {
          animation: fadeIn 0.2s ease-out;
        }
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-slide-down {
          animation: slideDown 0.3s ease-out;
        }
      `}</style>
    </div>
  );
}