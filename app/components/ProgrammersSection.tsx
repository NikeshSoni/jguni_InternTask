"use client";
import {   Sparkles,  Clock, Award, ArrowRight, GraduationCap, Globe, BookOpen, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

const ProgrammersSection = () => {
    

    const programmes = [
        { name: "Computer Science", duration: "4 Years", level: "Bachelor", icon: BookOpen },
        { name: "Business Administration", duration: "3 Years", level: "Bachelor", icon: GraduationCap },
        { name: "Data Science", duration: "2 Years", level: "Master", icon: Award },
        { name: "International Relations", duration: "4 Years", level: "Bachelor", icon: Globe }
    ];

  return (
    <div>
       {/* ================= PROGRAMMES SECTION ================= */}
       <section className="py-12 bg-gradient-to-b from-white to-gray-50">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        {/* Section Header with Animation */}
                        <div className="text-center mb-16">
                            <div className="inline-block">
                                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold bg-red-100 text-red-600 mb-4">
                                    <Sparkles className="w-4 h-4 mr-2" />
                                    Academic Excellence
                                </span>
                            </div>
                            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
                                Our Academic Programmes
                            </h2>
                            <div className="h-1 w-20 bg-red-600 mx-auto mb-6 rounded-full"></div>
                            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                                Discover world-class education tailored for your future success
                            </p>
                        </div>

                        {/* Programmes Grid */}
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {programmes.map((programme, index) => {
                                const Icon = programme.icon;
                                return (
                                    <div 
                                        key={index} 
                                        className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3"
                                    >
                                        {/* Gradient Border Effect */}
                                        <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" style={{ padding: '2px' }}>
                                            <div className="absolute inset-0 bg-white rounded-2xl"></div>
                                        </div>
                                        
                                        {/* Card Content */}
                                        <div className="relative p-6 bg-white rounded-2xl">
                                            {/* Icon Container with Pulse Effect */}
                                            <div className="relative mb-6">
                                                <div className="absolute inset-0 bg-red-100 rounded-2xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>
                                                <div className="relative w-16 h-16 bg-gradient-to-br from-red-50 to-red-100 rounded-2xl flex items-center justify-center group-hover:bg-gradient-to-br group-hover:from-red-600 group-hover:to-red-500 transition-all duration-500 shadow-md group-hover:shadow-lg">
                                                    <Icon className="w-8 h-8 text-red-600 group-hover:text-white transition-all duration-500 transform group-hover:scale-110" />
                                                </div>
                                            </div>

                                            {/* Programme Details */}
                                            <div className="space-y-3">
                                                <h3 className="text-xl font-bold text-gray-900 group-hover:text-red-600 transition-colors duration-300">
                                                    {programme.name}
                                                </h3>
                                                
                                                {/* Level Badge */}
                                                <div className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-700">
                                                    <GraduationCap className="w-3 h-3 mr-1" />
                                                    {programme.level}
                                                </div>
                                                
                                                {/* Duration with Icon */}
                                                <div className="flex items-center text-gray-600 text-sm">
                                                    <Clock className="w-4 h-4 mr-2 text-red-500" />
                                                    <span>{programme.duration}</span>
                                                </div>

                                                {/* Description (if available) */}
                                                {programme.description && (
                                                    <p className="text-gray-600 text-sm mt-2 line-clamp-2">
                                                        {programme.description}
                                                    </p>
                                                )}
                                            </div>

                                            {/* Learn More Button */}
                                            <button className="mt-6 w-full group/btn relative overflow-hidden bg-gray-50 hover:bg-red-600 text-gray-700 hover:text-white font-semibold py-3 px-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-2">
                                                <span className="relative z-10">Learn More</span>
                                                <ExternalLink size={16} className="relative z-10 transition-transform duration-300 group-hover/btn:translate-x-1" />
                                                <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-500 transform -translate-x-full group-hover/btn:translate-x-0 transition-transform duration-300"></div>
                                            </button>

                                            {/* Decorative Elements */}
                                            <div className="absolute -top-10 -right-10 w-20 h-20 bg-gradient-to-br from-red-100 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>

                        {/* View All Programmes CTA */}
                        <div className="text-center mt-16">
                            <button className="inline-flex items-center gap-2 px-8 py-3 bg-red-600 text-white rounded-xl font-semibold hover:bg-red-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                                View All Programmes
                                <ArrowRight className="w-4 h-4" />
                            </button>
                            <p className="text-sm text-gray-500 mt-4">
                                🎓 Limited seats available for 2024-2025 academic year
                            </p>
                        </div>
                    </div>
                </section>
    </div>
  )
}

export default ProgrammersSection
