import { useState } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaTwitter,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaArrowUp,
  FaChevronRight,
} from "react-icons/fa";

export default function Footer() {
  const [email, setEmail] = useState("");

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (email) {
      alert(`Thank you for subscribing with ${email}!`);
      setEmail("");
    }
  };

  return (
    <footer className="relative bg-[#0F172A] text-white overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-red-500 to-transparent"></div>
      <div className="absolute bottom-0 right-0 w-48 sm:w-64 h-48 sm:h-64 bg-red-500/5 rounded-full blur-3xl"></div>
      <div className="absolute top-20 left-0 w-36 sm:w-48 h-36 sm:h-48 bg-blue-500/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-20 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-8">
          <div className="space-y-3 sm:space-y-4">
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-red-600 flex items-center justify-center font-bold text-white text-xs sm:text-sm">
                AI
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-white leading-tight">
                  AURIXAI
                </h3>
                <p className="text-[10px] sm:text-xs text-gray-400">Institute of Technology</p>
              </div>
            </div>
            <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
              Empowering the next generation of tech professionals with
              industry-oriented training in Cyber Security, AI, Cloud, and more
              since 2013.
            </p>
            <div className="flex items-center gap-2 sm:gap-3 pt-1 sm:pt-2">
              {[
                { icon: FaFacebookF, color: "hover:bg-blue-600" },
                { icon: FaTwitter, color: "hover:bg-blue-400" },
                { icon: FaInstagram, color: "hover:bg-pink-600" },
                { icon: FaLinkedinIn, color: "hover:bg-blue-700" },
                { icon: FaYoutube, color: "hover:bg-red-600" },
              ].map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href="#"
                    className={`w-7 h-7 sm:w-9 sm:h-9 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300 ${social.color} hover:scale-110 hover:shadow-lg`}
                  >
                    <Icon className="w-3 h-3 sm:w-4 sm:h-4" />
                  </a>
                );
              })}
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold text-xs sm:text-sm uppercase tracking-wider mb-3 sm:mb-4 relative inline-block">
              Quick Links
              <span className="absolute -bottom-1 left-0 w-6 sm:w-8 h-0.5 bg-red-500"></span>
            </h4>
            <ul className="space-y-2">
              {[
                "Home",
                "About Us",
                "Courses",
                "Faculty",
                "Placements",
                "Success Stories",
                "Gallery",
                "Events",
                "Blog",
                "Contact Us",
              ].map((link, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white text-xs sm:text-sm flex items-center gap-2 group transition-colors duration-300"
                  >
                    <FaChevronRight className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-red-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-xs sm:text-sm uppercase tracking-wider mb-3 sm:mb-4 relative inline-block">
              Popular Courses
              <span className="absolute -bottom-1 left-0 w-6 sm:w-8 h-0.5 bg-red-500"></span>
            </h4>
            <ul className="space-y-2">
              {[
                "Cyber Security",
                "Ethical Hacking",
                "Artificial Intelligence",
                "Data Science",
                "Web Development",
                "Cloud Computing",
                "Networking (CCNA)",
                "Digital Forensics",
                "Full Stack Development",
                "Machine Learning",
              ].map((course, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white text-xs sm:text-sm flex items-center gap-2 group transition-colors duration-300"
                  >
                    <span className="w-1 h-1 rounded-full bg-red-500 group-hover:scale-150 transition-transform duration-300"></span>
                    {course}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-xs sm:text-sm uppercase tracking-wider mb-3 sm:mb-4 relative inline-block">
              Get in Touch
              <span className="absolute -bottom-1 left-0 w-6 sm:w-8 h-0.5 bg-red-500"></span>
            </h4>
            <div className="space-y-2.5 text-xs sm:text-sm">
              <div className="flex items-start gap-2 sm:gap-3 text-gray-400 hover:text-white transition-colors duration-300">
                <FaMapMarkerAlt className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-red-500 mt-0.5 flex-shrink-0" />
                <span>Cyber City, New Delhi, India</span>
              </div>
              <div className="flex items-center gap-2 sm:gap-3 text-gray-400 hover:text-white transition-colors duration-300">
                <FaPhoneAlt className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-red-500 flex-shrink-0" />
                <a href="tel:+919876543210" className="hover:text-white transition">
                  +91 9876543210
                </a>
              </div>
              <div className="flex items-center gap-2 sm:gap-3 text-gray-400 hover:text-white transition-colors duration-300">
                <FaEnvelope className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-red-500 flex-shrink-0" />
                <a href="mailto:info@aurixai.com" className="hover:text-white transition">
                  info@aurixai.com
                </a>
              </div>
            </div>

            <div className="mt-4 sm:mt-5">
              <p className="text-gray-400 text-[10px] sm:text-xs mb-1.5 sm:mb-2">
                Subscribe to our newsletter for updates
              </p>
              <form onSubmit={handleNewsletterSubmit} className="flex gap-1.5 sm:gap-2">
                <input
                  type="email"
                  placeholder="Your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 px-2.5 sm:px-3 py-1.5 sm:py-2 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 text-xs sm:text-sm focus:outline-none focus:border-red-500 transition-colors duration-300"
                  required
                />
                <button
                  type="submit"
                  className="px-3 sm:px-4 py-1.5 sm:py-2 bg-red-600 hover:bg-red-700 text-white text-xs sm:text-sm font-semibold rounded-lg transition-all duration-300 hover:scale-105"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 sm:mt-12 pt-6 flex flex-col md:flex-row justify-between items-center gap-3 sm:gap-4">
          <p className="text-gray-400 text-xs sm:text-sm text-center md:text-left">
            &copy; {new Date().getFullYear()} AURIXAI Institute of Technology & Cyber Security.
            All Rights Reserved.
          </p>
          <div className="flex items-center gap-3 sm:gap-4 text-[10px] sm:text-xs text-gray-500">
            <a href="#" className="hover:text-white transition-colors duration-300">
              Privacy Policy
            </a>
            <span className="w-px h-3 sm:h-4 bg-gray-600"></span>
            <a href="#" className="hover:text-white transition-colors duration-300">
              Terms of Service
            </a>
            <span className="w-px h-3 sm:h-4 bg-gray-600"></span>
            <a href="#" className="hover:text-white transition-colors duration-300">
              Refund Policy
            </a>
          </div>
        </div>
      </div>

      <button
        onClick={scrollToTop}
        className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 w-10 h-10 sm:w-12 sm:h-12 bg-red-600 hover:bg-red-700 text-white rounded-full shadow-lg shadow-red-600/30 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-xl"
      >
        <FaArrowUp className="w-4 h-4 sm:w-5 sm:h-5" />
      </button>
    </footer>
  );
}