import { useState } from "react";
import {
  FaPhoneAlt,
  FaWhatsapp,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaChevronDown,
  FaChevronUp,
} from "react-icons/fa";
import { HiMenuAlt3, HiX } from "react-icons/hi";

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [courseMenu, setCourseMenu] = useState(false);
  const [mobileCourseOpen, setMobileCourseOpen] = useState(false);

  return (
    <>
      {/* TOP BAR - hidden on mobile, visible on md+ */}
      <div className="hidden md:flex bg-[#0F172A] text-white text-sm border-b border-red-500/20">
        <div className="max-w-[1600px] mx-auto px-4 py-2 w-full flex items-center justify-between flex-wrap gap-2">
          <div className="flex items-center gap-4 flex-wrap">
            <div className="flex items-center gap-2">
              <FaPhoneAlt className="text-red-500" />
              <span>+91 9876543210</span>
            </div>
            <div className="flex items-center gap-2">
              <FaEnvelope className="text-red-500" />
              <span>info@aurixai.com</span>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <FaFacebookF className="hover:text-red-500 cursor-pointer transition-all" />
            <FaInstagram className="hover:text-red-500 cursor-pointer transition-all" />
            <FaLinkedinIn className="hover:text-red-500 cursor-pointer transition-all" />
            <FaYoutube className="hover:text-red-500 cursor-pointer transition-all" />
            <button className="flex items-center gap-2 bg-green-500 px-3 py-1 rounded-full hover:scale-105 transition-all text-xs md:text-sm">
              <FaWhatsapp />
              WhatsApp
            </button>
          </div>
        </div>
      </div>

      {/* ADMISSION BAR - hidden on mobile, visible on md+ */}
      <div className="hidden md:block bg-red-600 text-white overflow-hidden">
        <div className="py-2 text-center font-semibold animate-pulse text-sm md:text-base">
          🎓 Admissions Open 2026 | Free Demo Classes Available | Enroll Today
        </div>
      </div>

      {/* MAIN NAVBAR */}
      <nav className="sticky top-0 z-50 bg-white shadow-lg border-b border-gray-200">
        <div className="max-w-[1600px] mx-auto px-3 sm:px-4">
          <div className="h-14 md:h-20 flex items-center justify-between">
            {/* LOGO */}
            <div className="flex items-center gap-2 flex-shrink-0">
              <img
                src="https://res.cloudinary.com/djtvxmttf/image/upload/v1781892891/ChatGPT_Image_Jun_19__2026__10_08_21_PM-removebg-preview_1_hok6gg.png"
                alt="Cyber Institute of Computer Education, Kotputli"
                className="h-8 sm:h-10 md:h-14 w-auto object-contain"
              />
              <div>
                <h2 className="text-xs sm:text-base md:text-xl font-bold text-black leading-tight">
                  Cyber Institute
                </h2>
                <p className="hidden sm:block text-[8px] sm:text-xs text-gray-600 leading-tight">
                  Computer Education, Kotputli
                </p>
              </div>
            </div>

            {/* DESKTOP MENU - hidden on mobile, visible on xl+ */}
            <ul className="hidden xl:flex flex-1 justify-center items-center gap-3 xl:gap-6 text-black font-semibold text-sm">
              <li className="relative group whitespace-nowrap cursor-pointer hover:text-red-500 transition-all duration-300">
                Home
                <span className="absolute left-0 -bottom-2 w-0 h-[2px] bg-red-500 transition-all duration-300 group-hover:w-full"></span>
              </li>
              <li className="relative group whitespace-nowrap cursor-pointer hover:text-red-500 transition-all duration-300">
                About Us
                <span className="absolute left-0 -bottom-2 w-0 h-[2px] bg-red-500 transition-all duration-300 group-hover:w-full"></span>
              </li>

              <li
                className="relative group whitespace-nowrap"
                onMouseEnter={() => setCourseMenu(true)}
                onMouseLeave={() => setCourseMenu(false)}
              >
                <button className="hover:text-red-500 transition-all duration-300 flex items-center gap-1">
                  Courses <FaChevronDown className="text-xs" />
                </button>
                {courseMenu && (
                  <div className="absolute left-1/2 -translate-x-1/2 top-12 w-[900px] bg-[#111827] rounded-2xl shadow-2xl border border-red-500/20 p-8">
                    <div className="grid grid-cols-4 gap-8">
                      <div>
                        <h3 className="text-red-500 font-bold mb-4">Cyber Security</h3>
                        <ul className="space-y-2 text-gray-300">
                          <li>Ethical Hacking</li>
                          <li>Pen Testing</li>
                          <li>SOC Analyst</li>
                          <li>Bug Bounty</li>
                          <li>Digital Forensics</li>
                        </ul>
                      </div>
                      <div>
                        <h3 className="text-red-500 font-bold mb-4">AI & Data Science</h3>
                        <ul className="space-y-2 text-gray-300">
                          <li>Artificial Intelligence</li>
                          <li>Machine Learning</li>
                          <li>Deep Learning</li>
                          <li>Generative AI</li>
                          <li>Prompt Engineering</li>
                        </ul>
                      </div>
                      <div>
                        <h3 className="text-red-500 font-bold mb-4">Development</h3>
                        <ul className="space-y-2 text-gray-300">
                          <li>HTML</li>
                          <li>CSS</li>
                          <li>JavaScript</li>
                          <li>React JS</li>
                          <li>Node JS</li>
                        </ul>
                      </div>
                      <div>
                        <h3 className="text-red-500 font-bold mb-4">Networking</h3>
                        <ul className="space-y-2 text-gray-300">
                          <li>CCNA</li>
                          <li>CCNP</li>
                          <li>AWS</li>
                          <li>Azure</li>
                          <li>Linux</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                )}
              </li>

              <li className="relative group whitespace-nowrap cursor-pointer hover:text-red-500 transition-all duration-300">
                Faculty
                <span className="absolute left-0 -bottom-2 w-0 h-[2px] bg-red-500 transition-all duration-300 group-hover:w-full"></span>
              </li>
              <li className="relative group whitespace-nowrap cursor-pointer hover:text-red-500 transition-all duration-300">
                Placements
                <span className="absolute left-0 -bottom-2 w-0 h-[2px] bg-red-500 transition-all duration-300 group-hover:w-full"></span>
              </li>
              <li className="relative group whitespace-nowrap cursor-pointer hover:text-red-500 transition-all duration-300">
                Success Stories
                <span className="absolute left-0 -bottom-2 w-0 h-[2px] bg-red-500 transition-all duration-300 group-hover:w-full"></span>
              </li>
              <li className="relative group whitespace-nowrap cursor-pointer hover:text-red-500 transition-all duration-300">
                Gallery
                <span className="absolute left-0 -bottom-2 w-0 h-[2px] bg-red-500 transition-all duration-300 group-hover:w-full"></span>
              </li>
              <li className="relative group whitespace-nowrap cursor-pointer hover:text-red-500 transition-all duration-300">
                Events
                <span className="absolute left-0 -bottom-2 w-0 h-[2px] bg-red-500 transition-all duration-300 group-hover:w-full"></span>
              </li>
              <li className="relative group whitespace-nowrap cursor-pointer hover:text-red-500 transition-all duration-300">
                Blog
                <span className="absolute left-0 -bottom-2 w-0 h-[2px] bg-red-500 transition-all duration-300 group-hover:w-full"></span>
              </li>
              <li className="relative group whitespace-nowrap cursor-pointer hover:text-red-500 transition-all duration-300">
                Contact Us
                <span className="absolute left-0 -bottom-2 w-0 h-[2px] bg-red-500 transition-all duration-300 group-hover:w-full"></span>
              </li>
            </ul>

            {/* DESKTOP BUTTON - hidden on mobile */}
            <div className="hidden xl:block flex-shrink-0">
              <button className="bg-red-600 hover:bg-red-700 text-white px-5 py-2.5 rounded-xl font-semibold transition-all hover:scale-105 text-sm">
                Free Demo Class
              </button>
            </div>

            {/* MOBILE HAMBURGER */}
            <button
              onClick={() => setMobileMenu(!mobileMenu)}
              className="xl:hidden text-black text-2xl sm:text-3xl p-1"
            >
              {mobileMenu ? <HiX /> : <HiMenuAlt3 />}
            </button>
          </div>
        </div>

        {/* MOBILE MENU */}
        {mobileMenu && (
          <div className="xl:hidden bg-[#111827] border-t border-red-500/20 max-h-[80vh] overflow-y-auto">
            <ul className="text-white divide-y divide-gray-700">
              <li className="px-4 sm:px-6 py-3 sm:py-4 hover:bg-red-600 transition-all cursor-pointer text-sm sm:text-base">Home</li>
              <li className="px-4 sm:px-6 py-3 sm:py-4 hover:bg-red-600 transition-all cursor-pointer text-sm sm:text-base">About Us</li>

              <li>
                <div
                  className="px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between hover:bg-red-600 transition-all cursor-pointer text-sm sm:text-base"
                  onClick={() => setMobileCourseOpen(!mobileCourseOpen)}
                >
                  <span>Courses</span>
                  {mobileCourseOpen ? <FaChevronUp /> : <FaChevronDown />}
                </div>
                {mobileCourseOpen && (
                  <div className="bg-[#1E293B] px-4 sm:px-6 py-4 space-y-4">
                    <div>
                      <h4 className="text-red-400 font-semibold text-sm">Cyber Security</h4>
                      <ul className="ml-4 mt-1 space-y-1 text-gray-300 text-xs sm:text-sm">
                        <li>Ethical Hacking</li>
                        <li>Pen Testing</li>
                        <li>SOC Analyst</li>
                        <li>Bug Bounty</li>
                        <li>Digital Forensics</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-red-400 font-semibold text-sm">AI & Data Science</h4>
                      <ul className="ml-4 mt-1 space-y-1 text-gray-300 text-xs sm:text-sm">
                        <li>Artificial Intelligence</li>
                        <li>Machine Learning</li>
                        <li>Deep Learning</li>
                        <li>Generative AI</li>
                        <li>Prompt Engineering</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-red-400 font-semibold text-sm">Development</h4>
                      <ul className="ml-4 mt-1 space-y-1 text-gray-300 text-xs sm:text-sm">
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                        <li>React JS</li>
                        <li>Node JS</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-red-400 font-semibold text-sm">Networking</h4>
                      <ul className="ml-4 mt-1 space-y-1 text-gray-300 text-xs sm:text-sm">
                        <li>CCNA</li>
                        <li>CCNP</li>
                        <li>AWS</li>
                        <li>Azure</li>
                        <li>Linux</li>
                      </ul>
                    </div>
                  </div>
                )}
              </li>

              <li className="px-4 sm:px-6 py-3 sm:py-4 hover:bg-red-600 transition-all cursor-pointer text-sm sm:text-base">Faculty</li>
              <li className="px-4 sm:px-6 py-3 sm:py-4 hover:bg-red-600 transition-all cursor-pointer text-sm sm:text-base">Placements</li>
              <li className="px-4 sm:px-6 py-3 sm:py-4 hover:bg-red-600 transition-all cursor-pointer text-sm sm:text-base">Success Stories</li>
              <li className="px-4 sm:px-6 py-3 sm:py-4 hover:bg-red-600 transition-all cursor-pointer text-sm sm:text-base">Gallery</li>
              <li className="px-4 sm:px-6 py-3 sm:py-4 hover:bg-red-600 transition-all cursor-pointer text-sm sm:text-base">Events</li>
              <li className="px-4 sm:px-6 py-3 sm:py-4 hover:bg-red-600 transition-all cursor-pointer text-sm sm:text-base">Blog</li>
              <li className="px-4 sm:px-6 py-3 sm:py-4 hover:bg-red-600 transition-all cursor-pointer text-sm sm:text-base">Contact Us</li>

              <li className="px-4 sm:px-6 py-4">
                <button className="w-full bg-red-600 py-3 rounded-xl font-semibold hover:bg-red-700 transition-all text-sm sm:text-base">
                  Free Demo Class
                </button>
              </li>

              <li className="px-4 sm:px-6 py-4 text-gray-400 text-xs sm:text-sm space-y-2 border-t border-gray-700">
                <div className="flex items-center gap-2">
                  <FaPhoneAlt className="text-red-500" />
                  <span>+91 9876543210</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaEnvelope className="text-red-500" />
                  <span>info@aurixai.com</span>
                </div>
                <div className="flex items-center gap-3 pt-2">
                  <FaFacebookF className="hover:text-red-500 cursor-pointer transition-all" />
                  <FaInstagram className="hover:text-red-500 cursor-pointer transition-all" />
                  <FaLinkedinIn className="hover:text-red-500 cursor-pointer transition-all" />
                  <FaYoutube className="hover:text-red-500 cursor-pointer transition-all" />
                  <FaWhatsapp className="hover:text-green-400 cursor-pointer transition-all text-green-500" />
                </div>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;