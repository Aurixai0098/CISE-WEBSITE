import { motion } from "framer-motion";
import {
  FaLinkedinIn,
  FaTwitter,
  FaEnvelope,
  FaGraduationCap,
  FaBriefcase,
  FaCertificate,
  FaStar,
  FaArrowRight,
} from "react-icons/fa";

const FacultySection = () => {
  const faculty = [
    {
      name: "Dr. Rahul Sharma",
      role: "Cyber Security Expert",
      qualification: "Ph.D. in Cyber Security",
      experience: "15+ Years",
      certifications: "CEH, CISSP, OSCP",
      image: "https://ui-avatars.com/api/?name=Rahul+Sharma&background=dc2626&color=fff&size=128",
      linkedin: "#",
      twitter: "#",
      email: "rahul@aurixai.com",
      bio: "Former security analyst at Google, specialized in penetration testing and threat intelligence.",
    },
    {
      name: "Dr. Amit Verma",
      role: "AI & Data Science Specialist",
      qualification: "Ph.D. in Machine Learning",
      experience: "12+ Years",
      certifications: "TensorFlow Developer, AWS ML",
      image: "https://ui-avatars.com/api/?name=Amit+Verma&background=2563eb&color=fff&size=128",
      linkedin: "#",
      twitter: "#",
      email: "amit@aurixai.com",
      bio: "Published author in AI research, previously led ML teams at Microsoft Research.",
    },
    {
      name: "Ms. Priya Singh",
      role: "Full Stack Development Trainer",
      qualification: "M.Sc. in Computer Science",
      experience: "10+ Years",
      certifications: "MERN Stack, AWS Certified",
      image: "https://ui-avatars.com/api/?name=Priya+Singh&background=7c3aed&color=fff&size=128",
      linkedin: "#",
      twitter: "#",
      email: "priya@aurixai.com",
      bio: "Full stack developer with experience in building scalable web applications for startups.",
    },
    {
      name: "Mr. Vikram Patel",
      role: "Cloud & DevOps Architect",
      qualification: "B.E. in Computer Engineering",
      experience: "9+ Years",
      certifications: "AWS Solutions Architect, Azure Admin",
      image: "https://ui-avatars.com/api/?name=Vikram+Patel&background=059669&color=fff&size=128",
      linkedin: "#",
      twitter: "#",
      email: "vikram@aurixai.com",
      bio: "Expert in cloud infrastructure, Kubernetes, and CI/CD pipelines.",
    },
    {
      name: "Ms. Neha Reddy",
      role: "Networking & CCNA Trainer",
      qualification: "B.Tech in Electronics",
      experience: "8+ Years",
      certifications: "CCNA, CCNP, Linux Admin",
      image: "https://ui-avatars.com/api/?name=Neha+Reddy&background=d97706&color=fff&size=128",
      linkedin: "#",
      twitter: "#",
      email: "neha@aurixai.com",
      bio: "Cisco certified trainer with hands-on experience in enterprise networking.",
    },
    {
      name: "Dr. Ananya Kumar",
      role: "Digital Forensics Expert",
      qualification: "Ph.D. in Cyber Forensics",
      experience: "14+ Years",
      certifications: "CFCE, EnCE, CISM",
      image: "https://ui-avatars.com/api/?name=Ananya+Kumar&background=7c3aed&color=fff&size=128",
      linkedin: "#",
      twitter: "#",
      email: "ananya@aurixai.com",
      bio: "Expert in digital forensics, incident response, and malware analysis.",
    },
  ];

  return (
    <section className="relative py-16 sm:py-20 md:py-24 lg:py-32 bg-white overflow-hidden">
      <div className="absolute top-0 left-0 w-64 sm:w-96 h-64 sm:h-96 bg-red-50 rounded-full blur-3xl opacity-50"></div>
      <div className="absolute bottom-0 right-0 w-64 sm:w-96 h-64 sm:h-96 bg-blue-50 rounded-full blur-3xl opacity-50"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-10 sm:mb-14"
        >
          <span className="inline-block px-3 sm:px-4 py-1 sm:py-1.5 bg-red-100 text-red-700 rounded-full text-xs sm:text-sm font-semibold tracking-wide">
            MEET OUR TEAM
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mt-3 sm:mt-4">
            Expert <span className="text-red-600">Faculty</span> Members
          </h2>
          <p className="text-gray-600 mt-2 sm:mt-3 max-w-2xl mx-auto text-sm sm:text-base">
            Learn from industry experts with years of experience and deep domain knowledge
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {faculty.map((member, index) => (
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
              className="group relative bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100/50"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-red-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute -inset-full top-0 left-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 group-hover:translate-x-full transition-transform duration-700 pointer-events-none"></div>
              <div className="relative z-10 p-4 sm:p-6 text-center">
                <div className="relative inline-block mb-3 sm:mb-4">
                  <div className="absolute -inset-1 bg-gradient-to-r from-red-500 to-red-600 rounded-full opacity-0 group-hover:opacity-70 blur transition-opacity duration-500"></div>
                  <img
                    src={member.image}
                    alt={member.name}
                    className="relative w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-full mx-auto object-cover border-4 border-white shadow-lg group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute bottom-0 right-0 w-6 h-6 sm:w-8 sm:h-8 bg-green-500 rounded-full border-2 border-white flex items-center justify-center">
                    <FaStar className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-white" />
                  </div>
                </div>
                <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 group-hover:text-red-600 transition-colors duration-300">
                  {member.name}
                </h3>
                <p className="text-red-600 font-medium text-xs sm:text-sm mt-0.5 sm:mt-1">{member.role}</p>
                <div className="mt-3 sm:mt-4 space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-gray-600">
                  <div className="flex items-center justify-center gap-2">
                    <FaGraduationCap className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-red-500" />
                    <span>{member.qualification}</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <FaBriefcase className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-red-500" />
                    <span>{member.experience} Experience</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <FaCertificate className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-red-500" />
                    <span>{member.certifications}</span>
                  </div>
                </div>
                <p className="mt-2 sm:mt-3 text-[10px] sm:text-xs text-gray-500 leading-relaxed">
                  {member.bio}
                </p>
                <div className="mt-3 sm:mt-4 flex justify-center gap-2 sm:gap-3">
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-gray-100 hover:bg-blue-600 text-gray-600 hover:text-white flex items-center justify-center transition-all duration-300 hover:scale-110"
                  >
                    <FaLinkedinIn className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                  </a>
                  <a
                    href={member.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-gray-100 hover:bg-blue-400 text-gray-600 hover:text-white flex items-center justify-center transition-all duration-300 hover:scale-110"
                  >
                    <FaTwitter className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                  </a>
                  <a
                    href={`mailto:${member.email}`}
                    className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-gray-100 hover:bg-red-600 text-gray-600 hover:text-white flex items-center justify-center transition-all duration-300 hover:scale-110"
                  >
                    <FaEnvelope className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                  </a>
                </div>
                <button className="mt-3 sm:mt-4 group/btn inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1 sm:py-1.5 border border-red-600 text-red-600 hover:bg-red-600 hover:text-white rounded-full text-[10px] sm:text-xs font-semibold transition-all duration-300">
                  <span>View Profile</span>
                  <FaArrowRight className="w-2.5 h-2.5 sm:w-3 sm:h-3 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-red-500 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 sm:mt-16 bg-gradient-to-r from-red-50 to-red-100 rounded-2xl sm:rounded-3xl p-6 sm:p-8 text-center border border-red-200"
        >
          <h4 className="text-lg sm:text-xl font-bold text-gray-900">
            Want to Learn from Industry Experts?
          </h4>
          <p className="text-gray-700 mt-1 sm:mt-2 text-sm max-w-2xl mx-auto">
            Join AURIXAI Institute and get trained by the best in the industry
          </p>
          <button className="mt-3 sm:mt-4 px-6 sm:px-8 py-2.5 sm:py-3 bg-red-600 hover:bg-red-700 text-white rounded-xl font-semibold shadow-lg shadow-red-600/20 transition-all duration-300 hover:scale-105 text-sm sm:text-base">
            Book Free Demo Class
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default FacultySection;