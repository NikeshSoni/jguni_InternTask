"use client";

import Image from "next/image";
import {  X, ArrowRight } from "lucide-react";
import { useState } from "react";
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
import JGYCF21Image from "../assets/JGYCF21.webp"


const CampusHighilights = () => {
    const [showTourModal, setShowTourModal] = useState(false);

    
  return (
    <div>
        {/* ================= CAMPUS HIGHLIGHTS ================= */}
        <section className="py-24 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Section Header */}
                    <div className="text-center mb-16">
                        <div className="inline-block mb-4">
                            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold bg-blue-100 text-blue-600">
                                <Building2 className="w-4 h-4 mr-2" />
                                Our Campus
                            </span>
                        </div>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                            State-of-the-Art 
                            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"> Campus</span>
                        </h2>
                        <div className="h-1 w-24 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full"></div>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                        {/* Image Gallery Section */}
                        <div className="relative group">
                            {/* Main Image Container */}
                            <div className="relative h-[450px] lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                                <Image
                                    src={JGYCF21Image}
                                    alt="Campus View"
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                    priority
                                />
                                
                                {/* Gradient Overlays */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-transparent"></div>
                                
                                {/* Image Counter Badge */}
                                <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-sm rounded-full px-3 py-1.5 text-white text-sm font-medium z-10">
                                    <Camera className="w-4 h-4 inline mr-1" />
                                    360° Virtual Tour Available
                                </div>
                                
                                {/* Play Button Overlay */}
                                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                                    <button className="bg-white/90 backdrop-blur-sm rounded-full p-5 transform hover:scale-110 transition-transform duration-300 shadow-2xl">
                                        <Play className="w-8 h-8 text-blue-600 fill-blue-600" />
                                    </button>
                                </div>
                            </div>

                            {/* Thumbnail Images (Optional) */}
                            <div className="grid grid-cols-3 gap-3 mt-4">
                                {[1, 2, 3].map((item) => (
                                    <div key={item} className="relative h-24 rounded-xl overflow-hidden cursor-pointer group/thumb">
                                        <Image
                                            src={JGYCF21Image}
                                            alt={`Campus view ${item}`}
                                            fill
                                            className="object-cover transition-transform duration-300 group-hover/thumb:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-black/40 group-hover/thumb:bg-black/20 transition-colors"></div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Content Section */}
                        <div className="space-y-8">
                            {/* Description */}
                            <p className="text-gray-600 text-lg leading-relaxed">
                                Experience world-class education at our sprawling 100+ acre smart campus, 
                                designed to foster innovation, creativity, and holistic development.
                            </p>

                            {/* Highlights Grid */}
                            <div className="grid sm:grid-cols-2 gap-4">
                                {/* Highlight 1 */}
                                <div className="group/highlight bg-white rounded-2xl p-4 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-3 group-hover/highlight:bg-blue-600 transition-colors">
                                        <Wifi className="w-6 h-6 text-blue-600 group-hover/highlight:text-white transition-colors" />
                                    </div>
                                    <h3 className="font-semibold text-gray-900 mb-1">Smart Campus</h3>
                                    <p className="text-sm text-gray-600">100+ acre with modern infrastructure</p>
                                </div>

                                {/* Highlight 2 */}
                                <div className="group/highlight bg-white rounded-2xl p-4 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-3 group-hover/highlight:bg-blue-600 transition-colors">
                                        <Beaker  className="w-6 h-6 text-blue-600 group-hover/highlight:text-white transition-colors" />
                                    </div>
                                    <h3 className="font-semibold text-gray-900 mb-1">Advanced Labs</h3>
                                    <p className="text-sm text-gray-600">State-of-the-art research centers</p>
                                </div>

                                {/* Highlight 3 */}
                                <div className="group/highlight bg-white rounded-2xl p-4 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-3 group-hover/highlight:bg-blue-600 transition-colors">
                                        <Library className="w-6 h-6 text-blue-600 group-hover/highlight:text-white transition-colors" />
                                    </div>
                                    <h3 className="font-semibold text-gray-900 mb-1">Digital Library</h3>
                                    <p className="text-sm text-gray-600">Global access to resources</p>
                                </div>

                                {/* Highlight 4 */}
                                <div className="group/highlight bg-white rounded-2xl p-4 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-3 group-hover/highlight:bg-blue-600 transition-colors">
                                        <Trophy className="w-6 h-6 text-blue-600 group-hover/highlight:text-white transition-colors" />
                                    </div>
                                    <h3 className="font-semibold text-gray-900 mb-1">Sports Complex</h3>
                                    <p className="text-sm text-gray-600">World-class recreational facilities</p>
                                </div>
                            </div>

                            {/* Feature List with Icons */}
                            <div className="space-y-3 bg-white rounded-2xl p-6 shadow-md">
                                {[
                                    "24/7 Wi-Fi enabled campus",
                                    "Modern auditoriums and smart classrooms",
                                    "Incubation center for startups",
                                    "Hostel facilities with modern amenities"
                                ].map((feature, index) => (
                                    <div key={index} className="flex items-center gap-3 group">
                                        <div className="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center group-hover:bg-green-600 transition-colors">
                                            <Check className="w-3.5 h-3.5 text-green-600 group-hover:text-white transition-colors" />
                                        </div>
                                        <span className="text-gray-700 group-hover:text-gray-900 transition-colors">{feature}</span>
                                    </div>
                                ))}
                            </div>

                            {/* CTA Buttons */}
                            <div className="flex flex-wrap gap-4 pt-4">
                                <button className="group relative overflow-hidden bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-3.5 rounded-full font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                                    <span className="relative z-10 flex items-center gap-2">
                                        Take a Virtual Tour
                                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                    </span>
                                    <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                </button>
                                
                                <button className="group border-2 border-gray-300 bg-white text-gray-700 px-8 py-3.5 rounded-full font-semibold hover:border-blue-600 hover:text-blue-600 transition-all duration-300">
                                    <span className="flex items-center gap-2">
                                        Schedule a Visit
                                        <Calendar className="w-4 h-4" />
                                    </span>
                                </button>
                            </div>

                            {/* Stats Section */}
                            <div className="grid grid-cols-3 gap-4 pt-4 border-t border-gray-200">
                                <div className="text-center">
                                    <div className="text-2xl font-bold text-blue-600">5000+</div>
                                    <div className="text-xs text-gray-500">Current Students</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-2xl font-bold text-blue-600">200+</div>
                                    <div className="text-xs text-gray-500">Expert Faculty</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-2xl font-bold text-blue-600">50+</div>
                                    <div className="text-xs text-gray-500">Countries</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {showTourModal && (
                <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
                    <div className="relative w-full max-w-4xl aspect-video bg-black rounded-2xl overflow-hidden">
                        <button 
                            onClick={() => setShowTourModal(false)}
                            className="absolute top-4 right-4 text-white bg-black/50 rounded-full p-2 z-10"
                        >
                            <X className="w-6 h-6" />
                        </button>
                        {/* Add your 360° tour or video embed here */}
                        <iframe 
                            width="100%" 
                            height="100%" 
                            src="https://www.youtube.com/embed/your-video-id" 
                            frameBorder="0" 
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>
            )}
    </div>
  )
}

export default CampusHighilights
