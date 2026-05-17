"use client"
import React from 'react'
import Image from "next/image";
import {  ChevronLeft, Sparkles,  Clock, ChevronRight, X, Download ,  Users, Award, ArrowRight, GraduationCap, Globe, BookOpen, ExternalLink } from "lucide-react";
import { useEffect, useState } from "react";
import { 
    Building2, 
    Camera, 
    Play, 
    Wifi, 
    Library, 
    Trophy, 
    Check, 
    Calendar,
    Beaker 
} from 'lucide-react';

const CtaSection = () => {
  return (
        <>
               {/* ================= CTA SECTION ================= */}
<section className="relative py-24 overflow-hidden">
    {/* Animated Background Gradient */}
    <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-purple-500 to-purple-700 animate-gradient"></div>
    
    {/* Animated Pattern Overlay */}
    <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 animate-slow-spin" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1.5px, transparent 1.5px)`,
            backgroundSize: '40px 40px'
        }}></div>
    </div>

    {/* Floating Elements */}
    <div className="absolute top-20 left-10 w-24 h-24 bg-white/10 rounded-full blur-2xl animate-float"></div>
    <div className="absolute bottom-20 right-10 w-32 h-32 bg-white/10 rounded-full blur-2xl animate-float-delayed"></div>
    <div className="absolute top-40 right-20 w-16 h-16 bg-white/5 rounded-full blur-xl animate-pulse"></div>
    <div className="absolute bottom-32 left-20 w-20 h-20 bg-white/5 rounded-full blur-xl animate-float-slow"></div>
    <div className="absolute top-1/2 left-1/4 w-12 h-12 bg-white/8 rounded-full blur-lg animate-ping-slow"></div>

    <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <div className="inline-block mb-6 animate-fade-in-up">
            <span className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-semibold bg-white/20 backdrop-blur-sm text-white border border-white/30 animate-glow-pulse">
                <Sparkles className="w-4 h-4 mr-2 animate-sparkle" />
                Limited Seats Available for 2024-2025
            </span>
        </div>

        {/* Main Heading */}
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 animate-fade-in-up animate-delay-100">
            Ready to Begin Your
            <span className="block mt-2 bg-gradient-to-r from-yellow-300 to-yellow-100 bg-clip-text text-transparent animate-gradient-shift">
                Journey?
            </span>
        </h2>

        {/* Description */}
        <p className="text-white/90 text-lg md:text-xl mb-10 max-w-2xl mx-auto animate-fade-in-up animate-delay-200 animate-typing">
            Join JG University and become part of a community that shapes futures. 
            Your success story starts here.
        </p>

        {/* Statistics/Trust Indicators */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {[
                { value: "5000+", label: "Students", delay: 300 },
                { value: "50+", label: "Programmes", delay: 400 },
                { value: "200+", label: "Faculty", delay: 500 },
                { value: "95%", label: "Placement Rate", delay: 600 }
            ].map((stat, index) => (
                <div 
                    key={index}
                    className="text-center animate-scale-in-up hover-scale"
                    style={{ animationDelay: `${stat.delay}ms` }}
                >
                    <div className="text-2xl md:text-3xl font-bold text-white animate-count-up">
                        {stat.value}
                    </div>
                    <div className="text-sm text-white/80 animate-fade-in">
                        {stat.label}
                    </div>
                </div>
            ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-5 justify-center items-center animate-fade-in-up animate-delay-700">
            {/* Primary Button */}
            <button className="group relative overflow-hidden bg-white text-purple-600 px-10 py-4 rounded-full font-semibold hover:shadow-2xl transition-all duration-300 transform hover:scale-105 active:scale-95">
                <span className="relative z-10 flex items-center gap-2">
                    Apply Now
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-gray-100 to-white transform -translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                {/* Ripple effect */}
                <span className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 group-active:opacity-100">
                    <span className="absolute inset-0 rounded-full bg-white/30 animate-ripple"></span>
                </span>
            </button>

            {/* Secondary Button */}
            <button className="group relative overflow-hidden border-2 border-white text-white px-10 py-4 rounded-full font-semibold hover:bg-white/10 hover:scale-105 transition-all duration-300 backdrop-blur-sm active:scale-95">
                <span className="relative z-10 flex items-center gap-2">
                    Download Brochure
                    <Download className="w-5 h-5 group-hover:translate-y-1 transition-transform duration-300" />
                </span>
                {/* Shine effect */}
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12"></div>
            </button>
        </div>

        {/* Additional Info */}
        <div className="mt-12 flex flex-wrap justify-center gap-6 text-sm text-white/80 animate-fade-in-up animate-delay-800">
            {[
                "Scholarships Available",
                "International Accreditation",
                "World-Class Facilities"
            ].map((text, index) => (
                <div 
                    key={index}
                    className="flex items-center gap-2 group cursor-default animate-float-hover"
                    style={{ animationDelay: `${900 + index * 100}ms` }}
                >
                    <div className="w-1.5 h-1.5 bg-white rounded-full group-hover:scale-150 transition-transform duration-300"></div>
                    <span className="group-hover:text-white transition-colors duration-300">{text}</span>
                </div>
            ))}
        </div>
    </div>
</section>
        </>
  )
}

export default CtaSection
