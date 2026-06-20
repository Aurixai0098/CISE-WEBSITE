import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  FaCalendarAlt,
  FaUserGraduate,
  FaUsers,
  FaBookOpen,
  FaHandshake,
} from "react-icons/fa";

const StatsSection = () => {
  const stats = [
    { number: 13, title: "Years Experience", icon: FaCalendarAlt, suffix: "+" },
    { number: 1000, title: "Placements", icon: FaUserGraduate, suffix: "+" },
    { number: 5000, title: "Students Trained", icon: FaUsers, suffix: "+" },
    { number: 50, title: "Professional Courses", icon: FaBookOpen, suffix: "+" },
    { number: 100, title: "Hiring Partners", icon: FaHandshake, suffix: "+" },
  ];

  const [counts, setCounts] = useState(stats.map(() => 0));
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true);
      stats.forEach((stat, index) => {
        let start = 0;
        const end = stat.number;
        const increment = Math.max(1, Math.floor(end / 60));
        const interval = setInterval(() => {
          start += increment;
          if (start >= end) {
            start = end;
            clearInterval(interval);
          }
          setCounts((prev) => {
            const newCounts = [...prev];
            newCounts[index] = start;
            return newCounts;
          });
        }, 30);
      });
    }
  }, [isInView, hasAnimated, stats]);

  return (
    <section
      ref={sectionRef}
      className="relative -mt-12 sm:-mt-16 md:-mt-20 z-20 px-3 sm:px-4 pb-8 sm:pb-10 md:pb-16"
    >
      <div className="max-w-7xl mx-auto relative">
        <div className="absolute -top-20 -left-20 w-40 h-40 sm:w-60 sm:h-60 bg-red-500/5 rounded-full blur-2xl"></div>
        <div className="absolute -bottom-20 -right-20 w-40 h-40 sm:w-60 sm:h-60 bg-blue-500/5 rounded-full blur-2xl"></div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 md:gap-5">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                whileHover={{
                  scale: 1.04,
                  y: -4,
                  boxShadow: "0 12px 40px rgba(239, 68, 68, 0.12)",
                }}
                className="group relative bg-white/5 backdrop-blur-md rounded-xl p-3 sm:p-4 text-center border border-white/10 hover:border-red-500/30 transition-all duration-300 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"></div>
                <div className="relative z-10 inline-flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-red-500/10 text-red-500 group-hover:bg-red-500 group-hover:text-white transition-all duration-300 mb-1 sm:mb-2">
                  <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </div>
                <div className="relative z-10">
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white font-mono">
                    {counts[index].toLocaleString()}
                    <span className="text-red-500">{stat.suffix}</span>
                  </h3>
                  <p className="text-gray-300 mt-0.5 sm:mt-1 text-[10px] sm:text-xs md:text-sm font-medium">
                    {stat.title}
                  </p>
                </div>
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-6 sm:w-8 h-0.5 bg-gradient-to-r from-transparent via-red-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute -inset-full top-0 left-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/5 to-transparent transform -skew-x-12 group-hover:translate-x-full transition-transform duration-700"></div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;