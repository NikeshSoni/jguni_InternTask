"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Logo from "../assets/Logo.png";

import {
  MapPin,
  Phone,
  Mail,
  Send,
  ChevronRight,
  Heart,
  Award,
  Globe,
} from "lucide-react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const quickLinks = [
    { name: "Programmes", href: "#" },
    { name: "Campus", href: "#" },
    { name: "Industry Linkage", href: "#" },
    { name: "Collaborations", href: "#" },
    { name: "Media", href: "#" },
    { name: "Career", href: "#" },
  ];

  const importantLinks = [
    { name: "About Us", href: "#" },
    { name: "Admissions", href: "#" },
    { name: "Placements", href: "#" },
    { name: "Scholarships", href: "#" },
    { name: "Testimonials", href: "#" },
    { name: "Contact Us", href: "#" },
  ];

  const handleSubscribe = (e:any) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail("");
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };


  return (
    <footer className="relative w-full bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-orange-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
      </div>

      {/* Main Footer Content */}
      <div className="relative max-w-7xl mx-auto px-4 md:px-8 lg:px-16 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Logo & About Section */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-orange-600 rounded-lg blur-md opacity-50"></div>
                <Image
                  src={Logo}
                  alt="JG University"
                  width={70}
                  height={70}
                  className="relative object-contain bg-white rounded-lg p-1.5 shadow-lg"
                />
              </div>
              <div>
                <h2 className="text-2xl font-bold bg-gradient-to-r from-white to-orange-200 bg-clip-text text-transparent">
                  JG University
                </h2>
                <p className="text-sm text-orange-400 font-medium">
                  Excellence By Choice
                </p>
              </div>
            </div>

            <p className="text-gray-300 leading-relaxed text-sm">
              Empowering students with quality education, innovation, industry exposure, 
              and global opportunities to shape a successful future.
            </p>

            {/* Accreditation Badges */}
            <div className="flex flex-wrap gap-3 pt-2">
              <div className="flex items-center gap-2 px-3 py-1.5 bg-white/5 rounded-full border border-white/10">
                <Award className="w-4 h-4 text-orange-400" />
                <span className="text-xs">UGC Approved</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 bg-white/5 rounded-full border border-white/10">
                <Globe className="w-4 h-4 text-orange-400" />
                <span className="text-xs">Global Recognition</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6 relative inline-block">
              Quick Links
              <div className="absolute bottom-0 left-0 w-12 h-0.5 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full"></div>
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="group flex items-center gap-2 text-gray-300 hover:text-orange-400 transition-all duration-300 hover:translate-x-1"
                  >
                    <ChevronRight size={16} className="opacity-0 group-hover:opacity-100 transition-all duration-300" />
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Important Links */}
          <div>
            <h3 className="text-xl font-bold mb-6 relative inline-block">
              Important Links
              <div className="absolute bottom-0 left-0 w-12 h-0.5 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full"></div>
            </h3>
            <ul className="space-y-3">
              {importantLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="group flex items-center gap-2 text-gray-300 hover:text-orange-400 transition-all duration-300 hover:translate-x-1"
                  >
                    <ChevronRight size={16} className="opacity-0 group-hover:opacity-100 transition-all duration-300" />
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold mb-6 relative inline-block">
                Contact Info
                <div className="absolute bottom-0 left-0 w-12 h-0.5 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full"></div>
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3 group">
                  <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center group-hover:bg-orange-500 transition-colors">
                    <MapPin size={18} className="text-orange-400 group-hover:text-white transition-colors" />
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed flex-1">
                    JG University Campus, Ahmedabad, Gujarat, India
                  </p>
                </div>

                <div className="flex items-center gap-3 group">
                  <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center group-hover:bg-orange-500 transition-colors">
                    <Phone size={18} className="text-orange-400 group-hover:text-white transition-colors" />
                  </div>
                  <a
                    href="tel:+919999999999"
                    className="text-gray-300 hover:text-orange-400 transition"
                  >
                    +91 99999 99999
                  </a>
                </div>

                <div className="flex items-center gap-3 group">
                  <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center group-hover:bg-orange-500 transition-colors">
                    <Mail size={18} className="text-orange-400 group-hover:text-white transition-colors" />
                  </div>
                  <a
                    href="mailto:info@jguniversity.edu.in"
                    className="text-gray-300 hover:text-orange-400 transition text-sm break-all"
                  >
                    info@jguniversity.edu.in
                  </a>
                </div>
              </div>
            </div>

            {/* Newsletter Subscription */}
            <div>
                <h4 className="text-lg font-semibold mb-4 flex items-center gap-2">
                    <Send size={16} className="text-orange-400" />
                    Subscribe Newsletter
                </h4>
              
                <form onSubmit={handleSubscribe} className="space-y-3">
                    <div className="relative">
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email"
                        className="w-full px-4 py-3 pr-12 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-orange-400 transition-colors"
                        required
                    />
                    <button
                        type="submit"
                        className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center hover:bg-orange-600 transition"
                    >
                        <Send size={14} />
                    </button>
                    </div>
                    
                    {/* Success Message */}
                    {isSubscribed && (
                    <p className="text-green-400 text-xs animate-pulse">
                        ✓ Subscribed successfully!
                    </p>
                    )}
                    
                    <p className="text-gray-400 text-xs">
                    Get the latest updates about admissions, events, and more.
                    </p>
                </form>
            </div>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/10">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                <p className="text-gray-400 text-sm text-center md:text-left">
                © {new Date().getFullYear()} JG University. All Rights Reserved.
                </p>
                
                <div className="flex items-center gap-6 text-sm">
                <Link href="#" className="text-gray-400 hover:text-orange-400 transition">
                    Privacy Policy
                </Link>
                <span className="text-gray-600">|</span>
                <Link href="#" className="text-gray-400 hover:text-orange-400 transition">
                    Terms & Conditions
                </Link>
                <span className="text-gray-600">|</span>
                <Link href="#" className="text-gray-400 hover:text-orange-400 transition">
                    Refund Policy
                </Link>
                </div>

                {/* Made with love */}
                <p className="text-gray-500 text-xs flex items-center gap-1">
                Made with <Heart size={12} className="text-red-500 fill-red-500" /> by JG Team By - Nikesh Rajbhar
                </p>
            </div>
        </div>
      </div>
    </footer>
  );
}