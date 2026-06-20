import { motion } from "framer-motion";
import {
  FaShieldAlt,
  FaRobot,
  FaCode,
  FaCloud,
  FaNetworkWired,
  FaGraduationCap,
  FaChalkboardTeacher,
  FaBriefcase,
  FaCertificate,
} from "react-icons/fa";

const AboutSection = () => {
  const features = [
    {
      icon: FaChalkboardTeacher,
      title: "Industry Trainers",
      desc: "Learn from certified experts with 10+ years of experience",
      color: "from-red-500 to-red-600",
    },
    {
      icon: FaCode,
      title: "Live Projects",
      desc: "Work on real-world projects and build your portfolio",
      color: "from-blue-500 to-indigo-600",
    },
    {
      icon: FaBriefcase,
      title: "Placement Support",
      desc: "100% placement assistance with top companies",
      color: "from-green-500 to-emerald-600",
    },
    {
      icon: FaCertificate,
      title: "Certifications",
      desc: "Industry-recognized certificates for every course",
      color: "from-purple-500 to-pink-600",
    },
  ];

  const highlights = [
    { number: "2013", label: "Established" },
    { number: "5000+", label: "Students Trained" },
    { number: "1000+", label: "Placements" },
    { number: "50+", label: "Courses" },
  ];

  return (
    <section className="relative py-16 sm:py-20 md:py-24 lg:py-32 bg-white overflow-hidden">
      <div className="absolute top-0 right-0 w-64 sm:w-96 h-64 sm:h-96 bg-red-50 rounded-full blur-3xl opacity-50"></div>
      <div className="absolute bottom-0 left-0 w-64 sm:w-96 h-64 sm:h-96 bg-blue-50 rounded-full blur-3xl opacity-50"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          {/* LEFT - Image with stats overlay */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl shadow-red-500/10">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80"
                alt="Cyber Institute
Computer Education, Kotputli

"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
            </div>

            <div className="absolute -bottom-4 -right-2 sm:bottom-0 sm:right-0 grid grid-cols-2 gap-2 sm:gap-3 bg-white/90 backdrop-blur-sm rounded-xl sm:rounded-2xl p-3 sm:p-4 shadow-xl border border-gray-100">
              {highlights.map((item, index) => (
                <div key={index} className="text-center px-2 sm:px-3 py-1 sm:py-2">
                  <div className="text-base sm:text-xl font-bold text-red-600">{item.number}</div>
                  <div className="text-[10px] sm:text-xs text-gray-500">{item.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT - Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-4 sm:space-y-6"
          >
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
              className="inline-block px-3 py-1 sm:px-4 sm:py-1.5 bg-red-100 text-red-700 rounded-full text-xs sm:text-sm font-semibold tracking-wide"
            >
              ABOUT INSTITUTE
            </motion.span>

            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              Cyber Institute



              <span className="block text-red-600">Computer Education</span>
            </h2>

            <p className="text-gray-600 leading-relaxed text-sm sm:text-base lg:text-lg">
              Established in <span className="font-semibold text-gray-800">2013</span>, 
               Cyber Institute
 has successfully trained thousands of students in cutting-edge 
              technologies including <span className="text-red-600 font-medium">Cyber Security</span>, 
              <span className="text-blue-600 font-medium"> Artificial Intelligence</span>, 
              <span className="text-green-600 font-medium"> Software Development</span>, 
              Cloud Computing, Networking, and various job-oriented programs.
            </p>

            <div className="grid grid-cols-2 gap-3 sm:gap-4 mt-4 sm:mt-6">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 + index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.03, y: -4 }}
                    className="group relative bg-white rounded-xl p-3 sm:p-4 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100"
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 rounded-xl transition-opacity duration-300`}></div>
                    <div className="relative z-10">
                      <div className={`inline-flex p-1.5 sm:p-2 rounded-lg bg-gradient-to-br ${feature.color} text-white mb-1 sm:mb-2`}>
                        <Icon className="w-3 h-3 sm:w-4 sm:h-4" />
                      </div>
                      <h4 className="font-semibold text-gray-800 text-xs sm:text-sm">{feature.title}</h4>
                      <p className="text-[10px] sm:text-xs text-gray-500 mt-0.5 sm:mt-1">{feature.desc}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              viewport={{ once: true }}
              className="pt-2 sm:pt-4"
            >
              <button className="group relative px-6 sm:px-8 py-2.5 sm:py-3.5 bg-red-600 text-white rounded-xl font-semibold text-sm sm:text-base shadow-lg shadow-red-600/25 hover:shadow-red-600/40 transition-all duration-300 hover:scale-105 overflow-hidden">
                <span className="relative z-10 flex items-center gap-2">
                  Know More About Us
                  <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
                <span className="absolute inset-0 bg-red-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;