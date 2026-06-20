import { motion } from "framer-motion";
import { useState } from "react";
import {
  FaPlay,
  FaQuoteLeft,
  FaGraduationCap,
  FaBriefcase,
  FaRupeeSign,
  FaArrowRight,
  FaStar,
  FaChartLine,
} from "react-icons/fa";

const SuccessStories = () => {
  const [activeVideo, setActiveVideo] = useState(null);

  const stories = [
    {
      id: 1,
      name: "Rahul Sharma",
      role: "Security Analyst",
      company: "Google",
      package: "24 LPA",
      before: "Fresh Graduate, No Experience",
      after: "Placed as Security Analyst at Google",
      image: "https://ui-avatars.com/api/?name=Rahul+Sharma&background=dc2626&color=fff&size=128",
      video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      quote: "AURIXAI transformed my career. The practical training and placement support helped me land my dream job at Google.",
      course: "Cyber Security",
      rating: 5,
    },
    {
      id: 2,
      name: "Priya Patel",
      role: "Data Scientist",
      company: "Microsoft",
      package: "22 LPA",
      before: "Non-Tech Background",
      after: "Placed as Data Scientist at Microsoft",
      image: "https://ui-avatars.com/api/?name=Priya+Patel&background=2563eb&color=fff&size=128",
      video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      quote: "I came from a non-tech background and AURIXAI made me a confident data scientist. The faculty is world-class!",
      course: "AI & Data Science",
      rating: 5,
    },
    {
      id: 3,
      name: "Amit Kumar",
      role: "Full Stack Developer",
      company: "Amazon",
      package: "20 LPA",
      before: "B.Com Graduate",
      after: "Placed as Full Stack Developer at Amazon",
      image: "https://ui-avatars.com/api/?name=Amit+Kumar&background=7c3aed&color=fff&size=128",
      video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      quote: "The Full Stack Development program at AURIXAI is exceptional. I went from zero coding to working at Amazon.",
      course: "Web Development",
      rating: 5,
    },
    {
      id: 4,
      name: "Sneha Reddy",
      role: "Cloud Architect",
      company: "AWS",
      package: "25 LPA",
      before: "System Administrator",
      after: "Placed as Cloud Architect at AWS",
      image: "https://ui-avatars.com/api/?name=Sneha+Reddy&background=059669&color=fff&size=128",
      video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      quote: "The cloud computing program gave me the skills to transition into a cloud architect role. Highly recommended!",
      course: "Cloud Computing",
      rating: 5,
    },
    {
      id: 5,
      name: "Vikram Singh",
      role: "Penetration Tester",
      company: "TCS",
      package: "18 LPA",
      before: "Networking Engineer",
      after: "Placed as Penetration Tester at TCS",
      image: "https://ui-avatars.com/api/?name=Vikram+Singh&background=d97706&color=fff&size=128",
      video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      quote: "AURIXAI's ethical hacking course is the best. I got practical exposure that helped me crack interviews.",
      course: "Ethical Hacking",
      rating: 5,
    },
    {
      id: 6,
      name: "Neha Gupta",
      role: "AI Engineer",
      company: "Infosys",
      package: "19 LPA",
      before: "Mathematics Graduate",
      after: "Placed as AI Engineer at Infosys",
      image: "https://ui-avatars.com/api/?name=Neha+Gupta&background=7c3aed&color=fff&size=128",
      video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      quote: "The AI and ML program at AURIXAI is well-structured. I got hands-on experience with real projects.",
      course: "Artificial Intelligence",
      rating: 5,
    },
  ];

  const stats = [
    { value: "95%", label: "Placement Rate" },
    { value: "₹25 LPA", label: "Highest Package" },
    { value: "100+", label: "Hiring Partners" },
    { value: "5000+", label: "Students Trained" },
  ];

  return (
    <section className="relative py-16 sm:py-20 md:py-24 lg:py-32 bg-gradient-to-b from-slate-50 via-white to-slate-50 overflow-hidden">
      <div className="absolute top-0 right-0 w-64 sm:w-96 h-64 sm:h-96 bg-red-50 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute bottom-0 left-0 w-64 sm:w-96 h-64 sm:h-96 bg-blue-50 rounded-full blur-3xl opacity-30"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-10 sm:mb-14"
        >
          <span className="inline-block px-3 sm:px-4 py-1 sm:py-1.5 bg-red-100 text-red-700 rounded-full text-xs sm:text-sm font-semibold tracking-wide">
            SUCCESS STORIES
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mt-3 sm:mt-4">
            Real Stories of <span className="text-red-600">Career Transformation</span>
          </h2>
          <p className="text-gray-600 mt-2 sm:mt-3 max-w-2xl mx-auto text-sm sm:text-base">
            Hear from our students who have successfully transitioned into their dream careers
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6 mb-12 sm:mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-3 sm:p-4 md:p-6 text-center shadow-md border border-gray-100"
            >
              <div className="text-lg sm:text-2xl md:text-3xl font-extrabold text-red-600">{stat.value}</div>
              <div className="text-[10px] sm:text-xs md:text-sm text-gray-500 mt-0.5 sm:mt-1">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {stories.map((story, index) => (
            <motion.div
              key={story.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, boxShadow: "0 20px 60px rgba(0,0,0,0.08)" }}
              className="group relative bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100/50"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-red-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute -inset-full top-0 left-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 group-hover:translate-x-full transition-transform duration-700 pointer-events-none"></div>
              <div className="relative z-10 p-4 sm:p-6">
                <div className="relative rounded-xl overflow-hidden mb-3 sm:mb-4 bg-gray-200 aspect-video">
                  <img
                    src={`https://img.youtube.com/vi/${story.video.split('/embed/')[1]}/maxresdefault.jpg`}
                    alt={`${story.name} Testimonial`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      e.target.src = "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=400&fit=crop";
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <button
                    onClick={() => setActiveVideo(activeVideo === story.id ? null : story.id)}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 sm:w-14 sm:h-14 bg-red-600 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300"
                  >
                    <FaPlay className="w-4 h-4 sm:w-5 sm:h-5 text-white ml-0.5 sm:ml-1" />
                  </button>
                  {activeVideo === story.id && (
                    <div className="absolute inset-0 z-20">
                      <iframe
                        src={story.video + "?autoplay=1&rel=0"}
                        className="w-full h-full"
                        allow="autoplay; encrypted-media; fullscreen"
                        allowFullScreen
                        title={`${story.name} Testimonial`}
                      ></iframe>
                    </div>
                  )}
                </div>

                <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                  <img
                    src={story.image}
                    alt={story.name}
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-red-500/20 object-cover"
                  />
                  <div>
                    <h4 className="font-bold text-gray-900 text-xs sm:text-sm">{story.name}</h4>
                    <p className="text-[10px] sm:text-xs text-gray-500">{story.role}</p>
                  </div>
                </div>

                <div className="relative">
                  <FaQuoteLeft className="w-3 h-3 sm:w-4 sm:h-4 text-red-500 opacity-50 absolute -top-1 -left-1" />
                  <p className="text-gray-600 text-xs sm:text-sm leading-relaxed pl-4 sm:pl-5">
                    {story.quote}
                  </p>
                </div>

                <div className="mt-3 sm:mt-4 grid grid-cols-2 gap-2 text-xs">
                  <div className="bg-gray-50 rounded-lg p-1.5 sm:p-2">
                    <span className="text-gray-400 text-[10px] sm:text-xs">Company</span>
                    <div className="font-semibold text-gray-800 text-xs sm:text-sm">{story.company}</div>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-1.5 sm:p-2">
                    <span className="text-gray-400 text-[10px] sm:text-xs">Package</span>
                    <div className="font-bold text-red-600 flex items-center text-xs sm:text-sm">
                      <FaRupeeSign className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                      {story.package}
                    </div>
                  </div>
                </div>

                <div className="mt-2 sm:mt-3 p-2 sm:p-3 bg-gradient-to-r from-red-50 to-blue-50 rounded-lg border border-red-100/50">
                  <div className="flex items-center justify-between text-[10px] sm:text-xs">
                    <div className="flex-1">
                      <span className="text-gray-400 block">Before</span>
                      <span className="font-medium text-gray-600">{story.before}</span>
                    </div>
                    <FaArrowRight className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-red-500" />
                    <div className="flex-1 text-right">
                      <span className="text-gray-400 block">After</span>
                      <span className="font-medium text-green-600">{story.after}</span>
                    </div>
                  </div>
                </div>

                <div className="mt-2 sm:mt-3 flex items-center justify-between">
                  <span className="text-[10px] sm:text-xs text-gray-500">
                    <FaGraduationCap className="inline w-2.5 h-2.5 sm:w-3 sm:h-3 mr-1 text-red-500" />
                    {story.course}
                  </span>
                  <div className="flex items-center gap-0.5">
                    {[...Array(story.rating)].map((_, i) => (
                      <FaStar key={i} className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-yellow-500 fill-current" />
                    ))}
                  </div>
                </div>

                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-red-500 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 sm:mt-16 bg-gradient-to-r from-red-600 to-red-700 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 text-center shadow-xl shadow-red-600/20"
        >
          <h4 className="text-xl sm:text-2xl font-bold text-white">
            Ready to Write Your Own Success Story?
          </h4>
          <p className="text-red-100 mt-1 sm:mt-2 text-sm max-w-2xl mx-auto">
            Join AURIXAI Institute and take the first step towards your dream career
          </p>
          <button className="mt-3 sm:mt-4 px-6 sm:px-8 py-2.5 sm:py-3 bg-white text-red-600 hover:bg-gray-50 rounded-xl font-semibold shadow-lg transition-all duration-300 hover:scale-105 text-sm sm:text-base">
            Book Free Demo Class
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default SuccessStories;