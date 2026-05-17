"use client";
import { useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle,
  AlertCircle,
  User,
  MessageCircle,
  Calendar,
  Building2,
  Star,
  Shield,
  Award,
  Headphones,
} from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [formStatus, setFormStatus] = useState<
  "success" | "error" | null
>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e:any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e:any) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setFormStatus("success");
      setIsSubmitting(false);
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
      setTimeout(() => setFormStatus(null), 5000);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Address",
      details: ["JG University Campus", "Ahmedabad, Gujarat, India"],
      color: "red",
      bgColor: "bg-red-100",
      textColor: "text-red-600",
    },
    {
      icon: Phone,
      title: "Phone",
      details: ["+91 99999 99999", "+91 88888 88888"],
      color: "blue",
      bgColor: "bg-blue-100",
      textColor: "text-blue-600",
    },
    {
      icon: Mail,
      title: "Email",
      details: ["info@jguniversity.edu.in", "admissions@jguniversity.edu.in"],
      color: "green",
      bgColor: "bg-green-100",
      textColor: "text-green-600",
    },
    {
      icon: Clock,
      title: "Working Hours",
      details: ["Mon - Sat : 9:00 AM - 6:00 PM", "Sunday : Closed"],
      color: "yellow",
      bgColor: "bg-yellow-100",
      textColor: "text-yellow-600",
    },
  ];

  return (
    <main className="w-full overflow-hidden bg-gradient-to-b from-gray-50 to-white">
      {/* ================= HERO SECTION ================= */}
      <section className="relative w-full min-h-[50vh] flex items-center justify-center overflow-hidden">
        
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-red-600 via-red-500 to-orange-500">
          <div className="absolute inset-0 bg-black/30"></div>
          {/* Animated particles */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="absolute bg-white/20 rounded-full animate-float"
                style={{
                  width: Math.random() * 100 + 50 + "px",
                  height: Math.random() * 100 + 50 + "px",
                  left: Math.random() * 100 + "%",
                  top: Math.random() * 100 + "%",
                  animationDelay: Math.random() * 5 + "s",
                  animationDuration: Math.random() * 10 + 10 + "s",
                }}
              ></div>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="relative z-10 text-center px-4 animate-fade-in-up">
          <div className="inline-block mb-4">
            <span className="inline-flex items-center px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm text-white text-sm font-semibold border border-white/30">
              <Headphones className="w-4 h-4 mr-2" />
              24/7 Support Available
            </span>
          </div>
          <h1 className="text-white text-5xl md:text-7xl font-bold mb-4">
            Contact Us
          </h1>
          <div className="w-24 h-1 bg-yellow-400 mx-auto rounded-full"></div>
          <p className="text-white/90 mt-6 text-base md:text-lg max-w-2xl mx-auto">
            We would love to hear from you. Reach out to us for admissions, 
            collaborations, campus visits, or any queries.
          </p>
        </div>
      </section>

      {/* ================= CONTACT SECTION ================= */}
      <section className="py-20 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            
            {/* ================= LEFT INFO ================= */}
            <div className="space-y-8">
              {/* Header */}
              <div className="animate-fade-in-up">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Get In <span className="text-red-600">Touch</span>
                </h2>
                <p className="text-gray-600 leading-relaxed text-lg">
                  Have questions about admissions, programs, placements,
                  or campus facilities? Our team is here to help you.
                </p>
              </div>

              {/* Contact Cards */}
              <div className="grid gap-6 animate-fade-in-up animation-delay-200">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <div
                      key={index}
                      className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden"
                    >
                      <div className="flex items-start gap-5 p-6">
                        <div className={`w-14 h-14 rounded-xl ${info.bgColor} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                          <Icon className={info.textColor} size={28} />
                        </div>

                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-gray-900 mb-2">
                            {info.title}
                          </h3>
                          {info.details.map((detail, idx) => (
                            <p key={idx} className="text-gray-600 mt-1">
                              {detail}
                            </p>
                          ))}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Social/Trust Badges */}
              <div className="grid grid-cols-3 gap-3 pt-4 animate-fade-in-up animation-delay-400">
                <div className="text-center p-3 bg-white rounded-xl shadow-sm">
                  <Star className="w-5 h-5 text-yellow-500 mx-auto mb-1" />
                  <p className="text-xs text-gray-600">4.8 Rating</p>
                </div>
                <div className="text-center p-3 bg-white rounded-xl shadow-sm">
                  <Shield className="w-5 h-5 text-green-500 mx-auto mb-1" />
                  <p className="text-xs text-gray-600">Secure</p>
                </div>
                <div className="text-center p-3 bg-white rounded-xl shadow-sm">
                  <Award className="w-5 h-5 text-blue-500 mx-auto mb-1" />
                  <p className="text-xs text-gray-600">NAAC A+</p>
                </div>
              </div>
            </div>

            {/* ================= CONTACT FORM ================= */}
            <div className="bg-white rounded-3xl shadow-xl p-8 md:p-10 animate-fade-in-up animation-delay-300">
              
              <div className="text-center mb-8">
                <div className="inline-flex items-center gap-2 bg-red-100 text-red-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                  <MessageCircle size={16} />
                  Get in Touch
                </div>
                <h2 className="text-3xl font-bold text-gray-900">
                  Send a <span className="text-red-600">Message</span>
                </h2>
                <p className="text-gray-600 mt-2">
                  Fill out the form and our team will get back to you shortly.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Name */}
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Full Name *
                  </label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your full name"
                      className="w-full border border-gray-300 rounded-xl px-12 py-3 outline-none focus:border-red-500 focus:ring-2 focus:ring-red-100 transition-all"
                      required
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Email Address *
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter your email"
                      className="w-full border border-gray-300 rounded-xl px-12 py-3 outline-none focus:border-red-500 focus:ring-2 focus:ring-red-100 transition-all"
                      required
                    />
                  </div>
                </div>

                {/* Phone & Subject Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                      Phone Number
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Phone number"
                        className="w-full border border-gray-300 rounded-xl px-12 py-3 outline-none focus:border-red-500 focus:ring-2 focus:ring-red-100 transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                      Subject
                    </label>
                    <div className="relative">
                      <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <select
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded-xl px-12 py-3 outline-none focus:border-red-500 focus:ring-2 focus:ring-red-100 transition-all appearance-none bg-white"
                      >
                        <option value="">Select subject</option>
                        <option value="admission">Admission Inquiry</option>
                        <option value="placement">Placement</option>
                        <option value="collaboration">Collaboration</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    placeholder="Write your message..."
                    className="w-full border border-gray-300 rounded-xl px-5 py-3 outline-none focus:border-red-500 focus:ring-2 focus:ring-red-100 transition-all resize-none"
                    required
                  />
                </div>

                {/* Form Status */}
                {formStatus === "success" && (
                  <div className="flex items-center gap-2 p-3 bg-green-50 text-green-600 rounded-xl animate-fade-in">
                    <CheckCircle size={18} />
                    <span className="text-sm">Message sent successfully! We'll contact you soon.</span>
                  </div>
                )}

                {formStatus === "error" && (
                  <div className="flex items-center gap-2 p-3 bg-red-50 text-red-600 rounded-xl animate-fade-in">
                    <AlertCircle size={18} />
                    <span className="text-sm">Something went wrong. Please try again.</span>
                  </div>
                )}

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 transition-all duration-300 text-white font-semibold py-4 rounded-xl flex items-center justify-center gap-3 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send size={20} className="group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </button>

                {/* Guarantee */}
                <p className="text-center text-xs text-gray-500 mt-4">
                  We'll get back to you within 24 hours
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* ================= MAP SECTION ================= */}
      <section className="w-full relative">
        <div className="relative h-[450px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d235013.7485625751!2d72.43965525!3d23.02017765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e848aba5bd45f%3A0x4fcedd8a0f85dbe0!2sAhmedabad%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
            width="100%"
            height="100%"
            loading="lazy"
            className="border-0"
            allowFullScreen
          ></iframe>
        </div>
        
        {/* Map Overlay Card */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-white rounded-2xl shadow-2xl p-4 max-w-md w-[90%] animate-fade-in-up">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
              <Building2 className="w-5 h-5 text-red-600" />
            </div>
            <div>
              <p className="font-semibold text-gray-900">JG University Campus</p>
              <p className="text-xs text-gray-500">Ahmedabad, Gujarat - 380001</p>
            </div>
            <button className="ml-auto text-red-600 text-sm font-semibold hover:underline">
              Get Directions
            </button>
          </div>
        </div>
      </section>

      {/* ================= FAQ SECTION ================= */}
      <section className="py-16 px-4 md:px-8 lg:px-16 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Frequently Asked <span className="text-red-600">Questions</span>
          </h2>
          <div className="w-20 h-1 bg-red-600 mx-auto rounded-full"></div>
          <p className="text-gray-600 mt-4">Find quick answers to common queries</p>
        </div>

        <div className="max-w-3xl mx-auto mt-10 space-y-4">
          {[
            {
              q: "How can I apply for admission?",
              a: "You can apply online through our admission portal. The application process is simple and takes about 10-15 minutes."
            },
            {
              q: "What are the scholarship opportunities?",
              a: "We offer merit-based and need-based scholarships. Contact our admission office for detailed information."
            },
            {
              q: "Is hostel facility available?",
              a: "Yes, we have separate hostel facilities for boys and girls with modern amenities."
            },
            {
              q: "What is the placement record?",
              a: "We have a 95% placement record with top companies visiting our campus every year."
            }
          ].map((faq, idx) => (
            <div key={idx} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all">
              <h3 className="font-semibold text-gray-900 mb-2">{faq.q}</h3>
              <p className="text-gray-600 text-sm">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Custom CSS */}
      <style jsx>{`
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
        @keyframes float {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          50% { transform: translateY(-20px) translateX(10px); }
        }
        .animate-float {
          animation: float 8s ease-in-out infinite;
        }
        .animation-delay-200 {
          animation-delay: 0.2s;
        }
        .animation-delay-300 {
          animation-delay: 0.3s;
        }
        .animation-delay-400 {
          animation-delay: 0.4s;
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fade-in {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </main>
  );
}