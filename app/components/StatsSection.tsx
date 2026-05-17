"use client";
import { Users, Award, GraduationCap, Globe} from "lucide-react";


const StatsSection = () => {

    const stats = [
        { icon: Users, value: "10,000+", label: "Students Enrolled" },
        { icon: Award, value: "200+", label: "Expert Faculty" },
        { icon: Globe, value: "50+", label: "Global Partners" },
        { icon: GraduationCap, value: "95%", label: "Placement Rate" }
    ];
  return (
    <div>
        
            {/* ================= STATS SECTION ================= */}
            <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
                    <div className="max-w-7xl mx-auto px-4 lg:px-8">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                            {stats.map((stat, index) => {
                                const Icon = stat.icon;
                                return (
                                    <div key={index} className="text-center group">
                                        <div className="inline-flex p-4 bg-red-50 rounded-full mb-4 group-hover:bg-red-100 transition-colors">
                                            <Icon className="w-8 h-8 text-red-600" />
                                        </div>
                                        <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">{stat.value}</h3>
                                        <p className="text-gray-600">{stat.label}</p>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </section>

    </div>
  )
}

export default StatsSection
