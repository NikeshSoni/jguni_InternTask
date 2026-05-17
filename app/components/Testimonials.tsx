"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";
import { useState } from "react";

import User1 from "../assets/user1.jpg";
import User2 from "../assets/user2.jpg";
import User3 from "../assets/user3.jpg";

export default function AlumniTestimonials() {
  const testimonials = [
    {
      id: 1,
      name: "Aayushi Gor",
      role: "BBA - HR Trainer, Godrej and Boyce Manufacturing Pvt. Ltd",
      image: User1,
      rating: 5,
      message:
        "It gives me great pleasure to identify myself as a JG alumnus. I acquired a wealth of knowledge and experiences that supported me throughout my academic career, good times and bad. This university provides us with incredible information and discipline, which helps us achieve in all of our activities.",
    },
    {
      id: 2,
      name: "Shrushti Raval",
      role: "BBA - Recruitment Consultant, United HR Solutions Pvt. Ltd",
      image: User2,
      rating: 5,
      message:
        "My time at JG has enriched my life in many ways. It has provided me with the necessary tools to enhance my skills, and taught me extensively about the diverse world. These experiences are truly irreplaceable and I would never trade them for anything. The faculty at the University were supportive and dedicated to helping students achieve their goals.",
    },
    {
      id: 3,
      name: "Parth Prajapati",
      role: "BBA - Sr. Business Development Manager, KGL India Shipping Line",
      image: User3,
      rating: 5,
      message:
        "JG was instrumental in shaping my career and helping me achieve my professional goals. The BBA program provided me with a strong foundation in business principles and practices, and focus on experiential learning through internships and real-world projects. I draw upon the knowledge and skills that I gained at JG each day.",
    },
  ];

  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="w-full bg-gradient-to-br from-gray-50 to-gray-100 py-20 px-4 md:px-8 lg:px-20">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            JG Alumni{" "}
            <span className="text-blue-600">Testimonials</span>
          </h2>
          <div className="h-1 w-20 bg-blue-600 mx-auto rounded-full"></div>
          <p className="text-gray-600 mt-4">What our graduates say about us</p>
        </div>

        {/* Testimonial Card */}
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          {/* Rating */}
          <div className="flex gap-1 mb-6">
            {[...Array(testimonials[current].rating)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
            ))}
          </div>

          {/* Quote */}
          <Quote className="w-8 h-8 text-blue-400 mb-4" />

          {/* Message */}
          <p className="text-gray-700 text-lg md:text-xl leading-relaxed mb-8">
            "{testimonials[current].message}"
          </p>

          {/* User Info */}
          <div className="flex items-center gap-5">
            <div className="w-16 h-16 rounded-full overflow-hidden ring-4 ring-blue-100">
              <Image
                src={testimonials[current].image}
                alt={testimonials[current].name}
                width={64}
                height={64}
                className="object-cover w-full h-full"
              />
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900">
                {testimonials[current].name}
              </h3>
              <p className="text-gray-600 text-sm">
                {testimonials[current].role}
              </p>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between mt-8 pt-6 border-t border-gray-100">
            <div className="flex gap-2">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrent(idx)}
                  className={`h-2 rounded-full transition-all ${
                    current === idx ? "w-8 bg-blue-600" : "w-2 bg-gray-300"
                  }`}
                />
              ))}
            </div>
            <div className="flex gap-3">
              <button
                onClick={prevSlide}
                className="p-2 rounded-full bg-gray-100 hover:bg-blue-600 hover:text-white transition"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={nextSlide}
                className="p-2 rounded-full bg-gray-100 hover:bg-blue-600 hover:text-white transition"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}