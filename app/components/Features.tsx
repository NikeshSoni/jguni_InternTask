"use client";

import { useState } from "react";
import { 
  CheckCircle, 
  Globe, 
  Briefcase, 
  Users, 
  Cpu, 
  TrendingUp, 
  Clock,
  Sparkles,
  GraduationCap,
  Building2,
  Zap,
  ChevronRight
} from "lucide-react";

export default function FeaturesSection() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const features = [
    {
      text: "National Education Policy (NEP) 2020 & UGC Compliant Programmes",
      icon: GraduationCap,
      color: "from-blue-500 to-blue-600"
    },
    {
      text: "Collaboration with Foreign Universities for Curriculum, Delivery, and Student Exchange",
      icon: Globe,
      color: "from-purple-500 to-indigo-600"
    },
    {
      text: "Full Pay On-The-Job Training Opportunities",
      icon: Briefcase,
      color: "from-green-500 to-emerald-600"
    },
    {
      text: "Course-Embedded Capstone Projects",
      icon: TrendingUp,
      color: "from-orange-500 to-red-600"
    },
    {
      text: "Faculty Members with Industry Experience and Academic Expertise",
      icon: Users,
      color: "from-pink-500 to-rose-600"
    },
    {
      text: "Hands-on Experience using Industry Use-Cases and Emerging Tech",
      icon: Cpu,
      color: "from-cyan-500 to-blue-600"
    },
    {
      text: "Cross-Cultural and Cross-Sectoral Internships",
      icon: Building2,
      color: "from-teal-500 to-green-600"
    },
    {
      text: "24*7 Accessibility of Facilities to Students and Faculty Members",
      icon: Clock,
      color: "from-yellow-500 to-orange-600"
    }
  ];

  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-100 py-20 px-4 md:px-8 lg:px-16">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute top-40 left-1/2 w-80 h-80 bg-yellow-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-block mb-4 animate-fade-in-up">
            <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg">
              <Sparkles className="w-4 h-4 mr-2" />
              Why Choose JG University?
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 animate-fade-in-up animation-delay-100">
            JG University Salient{" "}
            <span className="relative inline-block">
              <span className="relative z-10 bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
                Features
              </span>
              <svg className="absolute bottom-2 left-0 w-full h-3 -z-0" viewBox="0 0 200 10" preserveAspectRatio="none">
                <path d="M0,5 Q25,0 50,5 T100,5 T150,5 T200,5" stroke="#F97316" strokeWidth="3" fill="none" strokeLinecap="round"/>
              </svg>
            </span>
          </h2>
          
          <p className="text-gray-600 max-w-2xl mx-auto text-lg animate-fade-in-up animation-delay-200">
            Discover what makes JG University a premier institution for higher education
          </p>
        </div>

        {/* Stats/Quick Facts */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 animate-fade-in-up animation-delay-300">
          <div className="bg-white rounded-xl p-4 text-center shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="text-2xl font-bold text-blue-600">5000+</div>
            <div className="text-sm text-gray-600">Students</div>
          </div>
          <div className="bg-white rounded-xl p-4 text-center shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="text-2xl font-bold text-purple-600">200+</div>
            <div className="text-sm text-gray-600">Expert Faculty</div>
          </div>
          <div className="bg-white rounded-xl p-4 text-center shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="text-2xl font-bold text-orange-600">100%</div>
            <div className="text-sm text-gray-600">Placement Assistance</div>
          </div>
          <div className="bg-white rounded-xl p-4 text-center shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="text-2xl font-bold text-green-600">50+</div>
            <div className="text-sm text-gray-600">Global Partners</div>
          </div>
        </div>

        {/* Features Grid - Modern Card Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 animate-fade-in-up"
                style={{ animationDelay: `${400 + index * 100}ms` }}
                onMouseEnter={(index:any) => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Animated Border Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-r ${feature.color} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} style={{ padding: '2px' }}>
                  <div className="absolute inset-0 bg-white rounded-2xl"></div>
                </div>

                <div className="relative p-6 bg-white rounded-2xl">
                  <div className="flex items-start gap-4">
                    {/* Icon Container */}
                    <div className={`relative shrink-0`}>
                      <div className={`w-12 h-12 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center shadow-md group-hover:shadow-xl transition-all duration-300 group-hover:scale-110`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      {/* Pulse Effect */}
                      <div className={`absolute inset-0 bg-gradient-to-r ${feature.color} rounded-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500 -z-10 blur-md`}></div>
                    </div>

                    {/* Text Content */}
                    <div className="flex-1">
                      <p className="text-gray-800 text-base md:text-lg leading-relaxed font-medium">
                        {feature.text}
                      </p>
                      
                      {/* Learn More Link */}
                      <button className="mt-3 text-sm font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center gap-1 group-hover:gap-2">
                        Learn More
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  {/* Decorative Checkmark */}
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12 animate-fade-in-up animation-delay-700">
          <button className="group relative inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105">
            <span>Explore All Programs</span>
            <Zap className="w-4 h-4 group-hover:rotate-12 transition-transform" />
          </button>
          <p className="text-sm text-gray-500 mt-4">
            🎓 Admissions Open for 2024-2025 Academic Year
          </p>
        </div>
      </div>

      {/* Custom CSS Animations (Add to your global CSS) */}
      <style jsx>{`
        @keyframes blob {
          0%, 100% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.6s ease-out forwards;
          opacity: 0;
        }
        .animation-delay-100 {
          animation-delay: 0.1s;
        }
        .animation-delay-200 {
          animation-delay: 0.2s;
        }
        .animation-delay-300 {
          animation-delay: 0.3s;
        }
        .animation-delay-700 {
          animation-delay: 0.7s;
        }
      `}</style>
    </section>
  );
}