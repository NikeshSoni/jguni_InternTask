"use client";

import Image from "next/image";
import {  ChevronLeft, ChevronRight} from "lucide-react";
import { useEffect, useState } from "react";

import { motion } from "framer-motion";


import Heroimage from "../assets/JGYCF21.webp";
import Heroimage1 from "../assets/Untitled-1.webp";
import Heroimage3 from "../assets/Untitled-3.webp";

const Hero = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [showTourModal, setShowTourModal] = useState(false);

    const heroSlides = [
        {
            title: "Be Future Ready",
            subtitle: "Shape Your Tomorrow with Excellence",
            image: Heroimage3,
        },
        {
            title: "Innovation Hub",
            subtitle: "Where Ideas Transform into Reality",
            image: Heroimage1,
        },
        {
            title: "Global Education",
            subtitle: "Learn Beyond Boundaries",
            image: Heroimage,
        },
    ];

    // Auto Slide
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
        }, 5000);

        return () => clearInterval(timer);
    }, [heroSlides.length]);

    // Next Slide
    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    };

    // Previous Slide
    const prevSlide = () => {
        setCurrentSlide(
            (prev) => (prev - 1 + heroSlides.length) % heroSlides.length
        );
    };


    return (
        <>
          {/* ================= HERO SECTION ================= */}
          <motion.div
                initial={{ opacity: 0, y: 80 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                >
                <section className="relative w-full h-[70vh] sm:h-[80vh] lg:h-screen mt-16 md:mt-20 overflow-hidden">

                        {/* Background Image */}
                        <div className="absolute inset-0">
                        <Image
                            src={heroSlides[currentSlide].image}
                            alt={heroSlides[currentSlide].title}
                            fill
                            priority
                            className="object-cover transition-all duration-700"
                        />

                        {/* Overlay */}
                        <div className="absolute inset-0 bg-black/30" />
                        </div>


                        {/* Left Arrow */}
                            <button
                                onClick={prevSlide}
                                className="
                                    absolute 
                                    left-2 sm:left-4 md:left-8 
                                    top-1/2 -translate-y-1/2 
                                    z-20 
                                    bg-white/70 hover:bg-white 
                                    shadow-md 
                                    rounded-full 
                                    p-2 md:p-3
                                    transition
                                ">
                            <ChevronLeft className="w-5 h-5 md:w-7 md:h-7" />
                            </button>

                        {/* Right Arrow */}
                        <button
                        onClick={nextSlide}
                        className="
                            absolute 
                            right-2 sm:right-4 md:right-8 
                            top-1/2 -translate-y-1/2 
                            z-20 
                            bg-white/70 hover:bg-white 
                            shadow-md 
                            rounded-full 
                            p-2 md:p-3
                            transition
                        "
                        >
                        <ChevronRight className="w-5 h-5 md:w-7 md:h-7" />
                        </button>

                        {/* Dots */}
                        <div className="absolute bottom-5 md:bottom-8 left-1/2 -translate-x-1/2 flex gap-2 md:gap-3 z-20">
                        {heroSlides.map((_, index) => (
                            <button
                            key={index}
                            onClick={() => setCurrentSlide(index)}
                            className={`
                                rounded-full transition-all duration-300
                                ${currentSlide === index
                                ? "bg-white w-6 md:w-8 h-2.5"
                                : "bg-white/50 w-2.5 h-2.5"}
                            `}
                            />
                        ))}
                        </div>
                </section>
            </motion.div>
        </>
    );
}

export default Hero