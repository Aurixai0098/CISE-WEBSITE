import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import {
  FaBriefcase,
  FaUserGraduate,
  FaBuilding,
  FaAward,
  FaArrowRight,
  FaStar,
} from "react-icons/fa";

const PlacementSection = () => {
  const companies = [
    { name: "AURIXAI SOFTWARE COMPANY", logo: "https://res.cloudinary.com/djtvxmttf/image/upload/v1781934874/lojj_rz6wgh-removebg-preview_xedpua.png" },
    { name: "Microsoft", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoft/microsoft-original.svg" },
    { name: "Amazon", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg" },
    { name: "Infosys", logo: "https://upload.wikimedia.org/wikipedia/commons/9/95/Infosys_logo.svg" },
    { name: "TCS", logo: "https://upload.wikimedia.org/wikipedia/commons/b/b1/Tata_Consultancy_Services_Logo.svg" },
    { name: "Wipro", logo: "https://upload.wikimedia.org/wikipedia/commons/2/2e/Wipro_logo.svg" },
    { name: "HCL", logo: "https://upload.wikimedia.org/wikipedia/commons/0/0b/HCL_Logo.svg" },
    { name: "Accenture", logo: "https://upload.wikimedia.org/wikipedia/commons/c/cd/Accenture.svg" },
  ];

  const stats = [
    { number: 1000, label: "Students Placed", icon: FaUserGraduate, suffix: "+" },
    { number: 95, label: "Placement Rate", icon: FaBriefcase, suffix: "%" },
    { number: 100, label: "Hiring Partners", icon: FaBuilding, suffix: "+" },
    { number: 25, label: "Highest Package (LPA)", icon: FaAward, suffix: " LPA" },
  ];

  const [counts, setCounts] = useState(stats.map(() => 0));
  const sectionRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
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
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [hasAnimated]);

  return (
    <section
      ref={sectionRef}
      className="relative py-16 sm:py-20 md:py-24 lg:py-32 bg-gradient-to-b from-[#0F172A] via-[#1a1a2e] to-[#0F172A] overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-64 sm:w-96 h-64 sm:h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-64 sm:w-96 h-64 sm:h-96 bg-red-500/10 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] sm:w-[800px] h-[400px] sm:h-[800px] bg-purple-500/5 rounded-full blur-3xl"></div>
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px] pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-10 sm:mb-14"
        >
          <span className="inline-block px-3 sm:px-4 py-1 sm:py-1.5 bg-red-500/20 text-red-400 rounded-full text-xs sm:text-sm font-semibold tracking-wide border border-red-500/30">
            PLACEMENTS
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mt-3 sm:mt-4">
            1000+ Successful <span className="text-red-500">Placements</span>
          </h2>
          <p className="text-gray-400 mt-2 sm:mt-3 max-w-2xl mx-auto text-sm sm:text-base">
            Our students are placed in top companies with impressive packages across the globe
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6 mb-12 sm:mb-16">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.03, y: -4 }}
                className="group relative bg-white/5 backdrop-blur-md rounded-2xl p-4 sm:p-6 text-center border border-white/10 hover:border-red-500/30 transition-all duration-300 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-red-500 mx-auto mb-2 sm:mb-3 group-hover:scale-110 transition-transform duration-300" />
                  <div className="text-xl sm:text-3xl md:text-4xl font-extrabold text-white font-mono">
                    {counts[index].toLocaleString()}
                    <span className="text-red-500">{stat.suffix}</span>
                  </div>
                  <p className="text-gray-400 text-xs sm:text-sm mt-0.5 sm:mt-1">{stat.label}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mb-8 sm:mb-12"
        >
          <div className="flex items-center justify-center gap-3 mb-6 sm:mb-8">
            <span className="h-px w-8 sm:w-12 bg-gradient-to-r from-transparent to-red-500/50"></span>
            <span className="text-gray-400 text-xs sm:text-sm font-medium tracking-wider uppercase">
              Our Hiring Partners
            </span>
            <span className="h-px w-8 sm:w-12 bg-gradient-to-l from-transparent to-red-500/50"></span>
          </div>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6">
          {companies.map((company, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 + 0.3 }}
              viewport={{ once: true }}
              whileHover={{
                y: -8,
                scale: 1.03,
                boxShadow: "0 20px 60px rgba(239, 68, 68, 0.12)",
              }}
              className="group relative bg-white/5 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-white/10 hover:border-red-500/30 transition-all duration-300 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
              <div className="relative z-10 flex items-center justify-center h-16 sm:h-20">
                <img
                  src={company.logo}
                  alt={company.name}
                  className="h-8 sm:h-12 w-auto object-contain filter brightness-90 group-hover:brightness-110 transition-all duration-300"
                  onError={(e) => {
                    e.target.style.display = "none";
                    e.target.parentElement.innerHTML = `
                      <div class="text-xl sm:text-2xl font-bold text-gray-300 group-hover:text-white transition-colors">
                        ${company.name.charAt(0)}
                      </div>
                    `;
                  }}
                />
              </div>
              <div className="relative z-10 text-center mt-2 sm:mt-3">
                <p className="text-gray-400 group-hover:text-white text-xs sm:text-sm font-medium transition-colors duration-300">
                  {company.name}
                </p>
              </div>
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-transparent via-red-500 to-transparent group-hover:w-3/4 transition-all duration-500"></div>
              <div className="absolute -inset-full top-0 left-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/5 to-transparent transform -skew-x-12 group-hover:translate-x-full transition-transform duration-700 pointer-events-none"></div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-12 sm:mt-16 bg-white/5 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 border border-white/10"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-6">
            <div className="flex items-center gap-3 sm:gap-4">
              <div className="flex -space-x-2 sm:-space-x-3">
                {[1, 2, 3, 4].map((_, i) => (
                  <img
                    key={i}
                    src={`https://ui-avatars.com/api/?name=Student+${i+1}&background=red&color=fff&size=32`}
                    alt={`Student ${i+1}`}
                    className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-[#0F172A]"
                  />
                ))}
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-red-500/20 border-2 border-[#0F172A] flex items-center justify-center text-[10px] sm:text-xs text-red-400 font-bold">
                  +50
                </div>
              </div>
              <div>
                <h4 className="text-white font-semibold text-xs sm:text-sm">
                  Our Students are Everywhere
                </h4>
                <p className="text-gray-400 text-[10px] sm:text-xs">
                  Placed in 100+ leading companies worldwide
                </p>
              </div>
            </div>
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="group inline-flex items-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 bg-red-600 hover:bg-red-700 text-white rounded-xl font-semibold text-xs sm:text-sm transition-all duration-300 shadow-lg shadow-red-600/20"
            >
              <span>View All Placements</span>
              <FaArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-10 sm:mt-12 bg-gradient-to-r from-red-600/20 via-red-500/10 to-red-600/20 rounded-2xl sm:rounded-3xl p-6 sm:p-8 text-center border border-red-500/20 backdrop-blur-sm"
        >
          <p className="text-gray-300 text-xs sm:text-sm mb-1 sm:mb-2">🎯 Want to Get Placed in Top Companies?</p>
          <h4 className="text-base sm:text-xl md:text-2xl font-bold text-white">
            Join AURIXAI Institute Today & Start Your Journey
          </h4>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-3 sm:mt-4 px-6 sm:px-8 py-2.5 sm:py-3 bg-red-600 hover:bg-red-700 text-white rounded-xl font-semibold transition-all duration-300 shadow-lg shadow-red-600/20 text-sm sm:text-base"
          >
            Book Free Demo Class
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default PlacementSection;