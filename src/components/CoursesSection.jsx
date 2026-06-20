import { motion } from "framer-motion";
import {
  FaShieldAlt,
  FaUserSecret,
  FaRobot,
  FaChartLine,
  FaCode,
  FaMobileAlt,
  FaCloud,
  FaNetworkWired,
  FaLock,
  FaBrain,
  FaDatabase,
  FaLaptopCode,
  FaServer,
  FaMicrochip,
} from "react-icons/fa";

const CoursesSection = () => {
  const courses = [
    {
      title: "Cyber Security",
      icon: FaShieldAlt,
      color: "from-red-500 to-red-600",
      bgColor: "bg-red-50",
      textColor: "text-red-600",
      duration: "6 Months",
      fee: "₹35,000",
      description: "Master ethical hacking, penetration testing, and security operations.",
      popular: true,
    },
    {
      title: "Ethical Hacking",
      icon: FaUserSecret,
      color: "from-orange-500 to-amber-600",
      bgColor: "bg-orange-50",
      textColor: "text-orange-600",
      duration: "4 Months",
      fee: "₹28,000",
      description: "Learn advanced penetration testing and vulnerability assessment.",
      popular: false,
    },
    {
      title: "Artificial Intelligence",
      icon: FaRobot,
      color: "from-blue-500 to-indigo-600",
      bgColor: "bg-blue-50",
      textColor: "text-blue-600",
      duration: "6 Months",
      fee: "₹40,000",
      description: "Build intelligent systems with machine learning and deep learning.",
      popular: true,
    },
    {
      title: "Data Science",
      icon: FaDatabase,
      color: "from-green-500 to-emerald-600",
      bgColor: "bg-green-50",
      textColor: "text-green-600",
      duration: "5 Months",
      fee: "₹38,000",
      description: "Analyze data and derive insights with Python, SQL, and visualization tools.",
      popular: false,
    },
    {
      title: "Web Development",
      icon: FaCode,
      color: "from-purple-500 to-pink-600",
      bgColor: "bg-purple-50",
      textColor: "text-purple-600",
      duration: "4 Months",
      fee: "₹25,000",
      description: "Build modern web applications with HTML, CSS, React, and Node.js.",
      popular: false,
    },
    {
      title: "App Development",
      icon: FaMobileAlt,
      color: "from-teal-500 to-cyan-600",
      bgColor: "bg-teal-50",
      textColor: "text-teal-600",
      duration: "4 Months",
      fee: "₹27,000",
      description: "Create cross-platform mobile apps with React Native and Flutter.",
      popular: false,
    },
    {
      title: "Cloud Computing",
      icon: FaCloud,
      color: "from-sky-500 to-blue-600",
      bgColor: "bg-sky-50",
      textColor: "text-sky-600",
      duration: "5 Months",
      fee: "₹32,000",
      description: "Master AWS, Azure, and Google Cloud with hands-on projects.",
      popular: true,
    },
    {
      title: "CCNA Networking",
      icon: FaNetworkWired,
      color: "from-yellow-500 to-amber-600",
      bgColor: "bg-yellow-50",
      textColor: "text-yellow-600",
      duration: "3 Months",
      fee: "₹22,000",
      description: "Cisco certified networking associate training with lab practice.",
      popular: false,
    },
  ];

  const moreCourses = [
    { title: "Digital Forensics", icon: FaMicrochip },
    { title: "Machine Learning", icon: FaBrain },
    { title: "Full Stack Development", icon: FaLaptopCode },
    { title: "DevOps & Cloud", icon: FaServer },
  ];

  return (
    <section className="relative py-16 sm:py-20 md:py-24 lg:py-32 bg-gradient-to-b from-slate-50 via-white to-slate-50 overflow-hidden">
      <div className="absolute top-0 left-0 w-64 sm:w-96 h-64 sm:h-96 bg-red-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-64 sm:w-96 h-64 sm:h-96 bg-blue-500/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-10 sm:mb-14"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="inline-block px-3 sm:px-4 py-1 sm:py-1.5 bg-red-100 text-red-700 rounded-full text-xs sm:text-sm font-semibold tracking-wide"
          >
            OUR COURSES
          </motion.span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mt-3 sm:mt-4">
            Professional Training Programs
          </h2>
          <p className="text-gray-600 mt-2 sm:mt-4 max-w-2xl mx-auto text-sm sm:text-base">
            Industry-oriented courses designed by experts to help you build a successful career in technology
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {courses.map((course, index) => {
            const Icon = course.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{
                  y: -8,
                  boxShadow: "0 20px 60px rgba(0,0,0,0.08)",
                }}
                className="group relative bg-white rounded-2xl p-4 sm:p-6 shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100/50 overflow-hidden"
              >
                {course.popular && (
                  <div className="absolute top-2 right-2 sm:top-3 sm:right-3 z-20">
                    <span className="px-2 py-0.5 sm:px-2.5 sm:py-1 bg-red-500 text-white text-[8px] sm:text-[10px] font-bold rounded-full uppercase tracking-wider">
                      Popular
                    </span>
                  </div>
                )}
                <div className={`absolute inset-0 bg-gradient-to-br ${course.color} opacity-0 group-hover:opacity-[0.04] transition-opacity duration-500 rounded-2xl`}></div>
                <div className="absolute -inset-full top-0 left-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 group-hover:translate-x-full transition-transform duration-700 pointer-events-none"></div>
                <div className="relative z-10">
                  <div className={`inline-flex items-center justify-center w-10 h-10 sm:w-14 sm:h-14 rounded-xl ${course.bgColor} ${course.textColor} group-hover:scale-110 transition-transform duration-300 mb-2 sm:mb-4`}>
                    <Icon className="w-5 h-5 sm:w-7 sm:h-7" />
                  </div>
                  <h3 className="text-base sm:text-xl font-bold text-gray-900 mb-1 sm:mb-2 group-hover:text-red-600 transition-colors duration-300">
                    {course.title}
                  </h3>
                  <p className="text-gray-500 text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4">
                    {course.description}
                  </p>
                  <div className="flex items-center gap-3 sm:gap-4 text-xs text-gray-500 mb-3 sm:mb-4">
                    <span className="flex items-center gap-1">
                      <svg className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {course.duration}
                    </span>
                    <span className="flex items-center gap-1 font-semibold text-gray-700">
                      {course.fee}
                    </span>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className={`w-full py-2 sm:py-2.5 rounded-xl font-semibold text-xs sm:text-sm transition-all duration-300 ${course.textColor} bg-transparent border-2 hover:text-white hover:border-transparent relative overflow-hidden group/btn`}
                    style={{ borderColor: course.textColor.replace("text-", "") }}
                  >
                    <span className={`absolute inset-0 bg-gradient-to-r ${course.color} opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300`}></span>
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      Enroll Now
                      <svg className="w-3 h-3 sm:w-3.5 sm:h-3.5 group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </span>
                  </motion.button>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-8 sm:mt-12 text-center"
        >
          <p className="text-gray-500 text-xs sm:text-sm mb-3 sm:mb-4">➕ And many more courses available</p>
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
            {moreCourses.map((course, index) => {
              const Icon = course.icon;
              return (
                <motion.span
                  key={index}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-white/80 backdrop-blur-sm rounded-full shadow-sm border border-gray-200 text-xs sm:text-sm text-gray-700 hover:shadow-md transition-all duration-300"
                >
                  <Icon className="w-3 h-3 sm:w-4 sm:h-4 text-red-500" />
                  {course.title}
                </motion.span>
              );
            })}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-12 sm:mt-16 bg-gradient-to-r from-red-600 to-red-700 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 text-center shadow-xl shadow-red-600/20"
        >
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white">
            Ready to Start Your Career?
          </h3>
          <p className="text-red-100 mt-1 sm:mt-2 max-w-2xl mx-auto text-sm sm:text-base">
            Get trained by industry experts and get placed in top companies
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-4 sm:mt-6 px-6 sm:px-8 py-2.5 sm:py-3.5 bg-white text-red-600 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 text-sm sm:text-base"
          >
            Book a Free Demo Class
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default CoursesSection;