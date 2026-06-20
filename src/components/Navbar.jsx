import { useState, useRef, useEffect } from "react";
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
  FaTimes,
  FaCalendarAlt,
  FaRupeeSign,
  FaCertificate,
  FaBriefcase,
  FaGraduationCap,
} from "react-icons/fa";
import { HiMenuAlt3, HiX } from "react-icons/hi";

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [courseMenu, setCourseMenu] = useState(false);
  const [mobileCourseOpen, setMobileCourseOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const dropdownTimeout = useRef(null);

  // WhatsApp link
  const whatsappLink = `https://api.whatsapp.com/send?phone=919251274680&text=Sir%20could%20you%20please%20provide%20me%20with%20information%20about%20the%20course`;

  // Course data with full details
  const courseData = {
    categories: [
      {
        name: "Cyber Security",
        icon: "🛡️",
        courses: [
          {
            id: "cyber-security",
            title: "Cyber Security",
            duration: "6 Months",
            fee: "₹35,000",
            syllabus: [
              "Introduction to Cyber Security",
              "Network Security Fundamentals",
              "Cryptography & Encryption",
              "Security Operations Center (SOC)",
              "Incident Response & Disaster Recovery",
              "Compliance & Governance",
            ],
            certification: "Certified Cyber Security Professional (CCSP)",
            careers: [
              "Security Analyst",
              "Security Engineer",
              "SOC Analyst",
              "Security Consultant",
            ],
          },
          {
            id: "ethical-hacking",
            title: "Ethical Hacking",
            duration: "4 Months",
            fee: "₹28,000",
            syllabus: [
              "Footprinting & Reconnaissance",
              "Scanning & Enumeration",
              "System Hacking",
              "Malware Threats",
              "Sniffing & Social Engineering",
              "Penetration Testing",
            ],
            certification: "Certified Ethical Hacker (CEH)",
            careers: [
              "Penetration Tester",
              "Vulnerability Assessor",
              "Security Researcher",
            ],
          },
          {
            id: "pen-testing",
            title: "Penetration Testing",
            duration: "5 Months",
            fee: "₹32,000",
            syllabus: [
              "Introduction to Pen Testing",
              "Reconnaissance Techniques",
              "Vulnerability Assessment",
              "Exploitation Frameworks",
              "Post-Exploitation",
              "Reporting & Documentation",
            ],
            certification: "Certified Penetration Tester (CPT)",
            careers: ["Penetration Tester", "Security Auditor"],
          },
          {
            id: "soc-analyst",
            title: "SOC Analyst",
            duration: "4 Months",
            fee: "₹30,000",
            syllabus: [
              "Security Operations Center Overview",
              "SIEM Tools (Splunk, QRadar)",
              "Threat Intelligence",
              "Incident Handling",
              "Log Analysis",
              "Forensics",
            ],
            certification: "Certified SOC Analyst (CSA)",
            careers: ["SOC Analyst", "Security Operations Engineer"],
          },
          {
            id: "bug-bounty",
            title: "Bug Bounty",
            duration: "3 Months",
            fee: "₹22,000",
            syllabus: [
              "Bug Bounty Basics",
              "Recon & OSINT",
              "Web Application Vulnerabilities",
              "Exploitation Techniques",
              "Reporting & Responsible Disclosure",
            ],
            certification: "Bug Bounty Hunter Certification",
            careers: ["Bug Bounty Hunter", "Security Researcher"],
          },
          {
            id: "digital-forensics",
            title: "Digital Forensics",
            duration: "5 Months",
            fee: "₹34,000",
            syllabus: [
              "Computer Forensics Fundamentals",
              "Data Acquisition",
              "File Systems Analysis",
              "Network Forensics",
              "Malware Analysis",
              "Mobile Forensics",
            ],
            certification: "Certified Forensic Computer Examiner (CFCE)",
            careers: [
              "Digital Forensics Analyst",
              "Incident Response Specialist",
            ],
          },
          {
            id: "network-security",
            title: "Network Security",
            duration: "4 Months",
            fee: "₹26,000",
            syllabus: [
              "Network Security Fundamentals",
              "Firewalls & VPNs",
              "Intrusion Detection Systems",
              "Secure Network Design",
              "Wireless Security",
            ],
            certification: "Certified Network Security Specialist (CNSS)",
            careers: ["Network Security Engineer", "Security Administrator"],
          },
          {
            id: "ceh-prep",
            title: "CEH Preparation",
            duration: "3 Months",
            fee: "₹25,000",
            syllabus: [
              "CEH Exam Blueprint",
              "Module 1-20 Coverage",
              "Lab Practice",
              "Mock Tests",
              "Exam Strategies",
            ],
            certification: "CEH Certification (Exam Prep)",
            careers: ["Ethical Hacker", "Security Consultant"],
          },
        ],
      },
      {
        name: "AI & Data Science",
        icon: "🤖",
        courses: [
          {
            id: "ai-fundamentals",
            title: "AI Fundamentals",
            duration: "4 Months",
            fee: "₹30,000",
            syllabus: [
              "Introduction to AI",
              "Machine Learning Basics",
              "Supervised & Unsupervised Learning",
              "Neural Networks",
              "AI Applications",
            ],
            certification: "AI Foundation Certification",
            careers: ["AI Engineer", "Machine Learning Engineer"],
          },
          {
            id: "machine-learning",
            title: "Machine Learning",
            duration: "5 Months",
            fee: "₹38,000",
            syllabus: [
              "Mathematics for ML",
              "Regression & Classification",
              "Clustering & Dimensionality Reduction",
              "Model Evaluation",
              "Ensemble Methods",
            ],
            certification: "Certified Machine Learning Specialist",
            careers: ["ML Engineer", "Data Scientist"],
          },
          {
            id: "deep-learning",
            title: "Deep Learning",
            duration: "6 Months",
            fee: "₹42,000",
            syllabus: [
              "Neural Networks Fundamentals",
              "CNNs & RNNs",
              "Generative Models",
              "Transformers",
              "Deep Learning Frameworks (TensorFlow, PyTorch)",
            ],
            certification: "Deep Learning Professional",
            careers: ["Deep Learning Engineer", "AI Researcher"],
          },
          {
            id: "generative-ai",
            title: "Generative AI",
            duration: "4 Months",
            fee: "₹36,000",
            syllabus: [
              "Generative Models Overview",
              "GANs & VAEs",
              "Diffusion Models",
              "LLMs (GPT, BERT)",
              "Prompt Engineering",
            ],
            certification: "Generative AI Specialist",
            careers: ["Generative AI Engineer", "AI Product Manager"],
          },
          {
            id: "prompt-engineering",
            title: "Prompt Engineering",
            duration: "2 Months",
            fee: "₹18,000",
            syllabus: [
              "Understanding LLMs",
              "Prompt Design",
              "Zero-shot & Few-shot",
              "Chain-of-Thought",
              "Best Practices",
            ],
            certification: "Certified Prompt Engineer",
            careers: ["Prompt Engineer", "AI Application Developer"],
          },
          {
            id: "ai-automation",
            title: "AI Automation",
            duration: "3 Months",
            fee: "₹25,000",
            syllabus: [
              "Automation with AI",
              "RPA Tools",
              "AI-Driven Process Automation",
              "Integration with APIs",
            ],
            certification: "AI Automation Specialist",
            careers: ["Automation Engineer", "RPA Developer"],
          },
        ],
      },
      {
        name: "Web Development",
        icon: "🌐",
        courses: [
          {
            id: "html",
            title: "HTML",
            duration: "1 Month",
            fee: "₹8,000",
            syllabus: [
              "HTML Basics",
              "Tags & Attributes",
              "Forms & Inputs",
              "Semantic HTML",
              "HTML5 Features",
            ],
            certification: "HTML Certified Developer",
            careers: ["Frontend Developer", "Web Designer"],
          },
          {
            id: "css",
            title: "CSS",
            duration: "1.5 Months",
            fee: "₹10,000",
            syllabus: [
              "CSS Syntax & Selectors",
              "Box Model",
              "Flexbox & Grid",
              "Responsive Design",
              "CSS Animations",
            ],
            certification: "CSS Certified Developer",
            careers: ["Frontend Developer", "UI Developer"],
          },
          {
            id: "javascript",
            title: "JavaScript",
            duration: "2.5 Months",
            fee: "₹15,000",
            syllabus: [
              "JavaScript Basics",
              "ES6+ Features",
              "DOM Manipulation",
              "Asynchronous Programming",
              "Error Handling",
            ],
            certification: "JavaScript Certified Developer",
            careers: ["Frontend Developer", "Full Stack Developer"],
          },
          {
            id: "react",
            title: "React",
            duration: "3 Months",
            fee: "₹20,000",
            syllabus: [
              "React Components",
              "Props & State",
              "Hooks",
              "React Router",
              "State Management (Redux)",
            ],
            certification: "React Certified Developer",
            careers: ["React Developer", "Frontend Engineer"],
          },
          {
            id: "nextjs",
            title: "Next.js",
            duration: "2.5 Months",
            fee: "₹22,000",
            syllabus: [
              "Next.js Fundamentals",
              "Routing",
              "SSR & SSG",
              "API Routes",
              "Authentication",
            ],
            certification: "Next.js Certified Developer",
            careers: ["Full Stack Developer", "React/Next Developer"],
          },
          {
            id: "nodejs",
            title: "Node.js",
            duration: "3 Months",
            fee: "₹22,000",
            syllabus: [
              "Node.js Basics",
              "Express.js",
              "REST APIs",
              "Database Integration (MongoDB, SQL)",
              "Authentication & Security",
            ],
            certification: "Node.js Certified Developer",
            careers: ["Backend Developer", "Full Stack Developer"],
          },
          {
            id: "full-stack",
            title: "Full Stack Development",
            duration: "6 Months",
            fee: "₹35,000",
            syllabus: [
              "Frontend (HTML, CSS, JS, React)",
              "Backend (Node.js, Express)",
              "Database (MongoDB, SQL)",
              "REST APIs",
              "Deployment & DevOps Basics",
            ],
            certification: "Full Stack Developer Certification",
            careers: ["Full Stack Developer", "Software Engineer"],
          },
        ],
      },
      {
        name: "Programming",
        icon: "💻",
        courses: [
          {
            id: "python",
            title: "Python",
            duration: "3 Months",
            fee: "₹18,000",
            syllabus: [
              "Python Basics",
              "Data Structures",
              "OOP",
              "File Handling",
              "Libraries (NumPy, Pandas)",
            ],
            certification: "Python Certified Developer",
            careers: ["Python Developer", "Data Analyst"],
          },
          {
            id: "java",
            title: "Java",
            duration: "3 Months",
            fee: "₹20,000",
            syllabus: [
              "Java Syntax",
              "OOP",
              "Collections",
              "Multithreading",
              "JDBC",
            ],
            certification: "Java Certified Developer",
            careers: ["Java Developer", "Android Developer"],
          },
          {
            id: "c",
            title: "C Programming",
            duration: "2 Months",
            fee: "₹12,000",
            syllabus: [
              "C Basics",
              "Functions & Pointers",
              "Arrays & Strings",
              "File I/O",
              "Data Structures",
            ],
            certification: "C Certified Developer",
            careers: ["System Programmer", "Embedded Developer"],
          },
          {
            id: "cpp",
            title: "C++",
            duration: "2.5 Months",
            fee: "₹15,000",
            syllabus: [
              "C++ Basics",
              "OOP",
              "STL",
              "Templates",
              "Memory Management",
            ],
            certification: "C++ Certified Developer",
            careers: ["Game Developer", "System Developer"],
          },
          {
            id: "php",
            title: "PHP",
            duration: "2 Months",
            fee: "₹14,000",
            syllabus: [
              "PHP Basics",
              "Forms & Sessions",
              "Database Integration (MySQL)",
              "OOP in PHP",
              "Laravel Basics",
            ],
            certification: "PHP Certified Developer",
            careers: ["PHP Developer", "Web Developer"],
          },
          {
            id: "sql",
            title: "SQL",
            duration: "1.5 Months",
            fee: "₹10,000",
            syllabus: [
              "SQL Basics",
              "DDL, DML, DCL",
              "Joins & Subqueries",
              "Stored Procedures",
              "Optimization",
            ],
            certification: "SQL Certified Developer",
            careers: ["Database Administrator", "Backend Developer"],
          },
        ],
      },
      {
        name: "Computer Basics",
        icon: "🖥️",
        courses: [
          {
            id: "rscit",
            title: "RSCIT",
            duration: "3 Months",
            fee: "₹8,000",
            syllabus: [
              "Computer Fundamentals",
              "Operating Systems",
              "MS Office Suite",
              "Internet & Email",
              "Digital Literacy",
            ],
            certification: "RSCIT Certification",
            careers: ["Office Administrator", "Data Entry Operator"],
          },
          {
            id: "tally-prime",
            title: "Tally Prime",
            duration: "2.5 Months",
            fee: "₹12,000",
            syllabus: [
              "Accounting Fundamentals",
              "Tally Basics",
              "Inventory Management",
              "GST & Taxation",
              "Payroll",
            ],
            certification: "Tally Prime Certified Professional",
            careers: ["Accountant", "Finance Executive"],
          },
          {
            id: "ms-office",
            title: "MS Office",
            duration: "2 Months",
            fee: "₹7,000",
            syllabus: [
              "Word",
              "Excel",
              "PowerPoint",
              "Outlook",
              "Access",
            ],
            certification: "Microsoft Office Specialist (MOS)",
            careers: ["Office Administrator", "Executive Assistant"],
          },
          {
            id: "dca",
            title: "DCA (Diploma in Computer Application)",
            duration: "6 Months",
            fee: "₹15,000",
            syllabus: [
              "Computer Fundamentals",
              "MS Office",
              "Internet & Web Design",
              "Database Management",
              "Programming Basics (C)",
            ],
            certification: "DCA Certified",
            careers: ["Computer Operator", "Office Manager"],
          },
          {
            id: "adca",
            title: "ADCA (Advanced Diploma in Computer Application)",
            duration: "12 Months",
            fee: "₹25,000",
            syllabus: [
              "Advanced Programming (Java/Python)",
              "Web Development",
              "Database Administration",
              "Networking",
              "Project Management",
            ],
            certification: "ADCA Certified",
            careers: ["System Administrator", "IT Manager"],
          },
          {
            id: "ms-excel",
            title: "MS Excel (Advanced)",
            duration: "1.5 Months",
            fee: "₹6,000",
            syllabus: [
              "Excel Basics",
              "Formulas & Functions",
              "Pivot Tables",
              "Data Analysis",
              "VBA Macros",
            ],
            certification: "Excel Expert",
            careers: ["Data Analyst", "Financial Analyst"],
          },
        ],
      },
      {
        name: "Cloud Computing",
        icon: "☁️",
        courses: [
          {
            id: "aws",
            title: "AWS",
            duration: "4 Months",
            fee: "₹30,000",
            syllabus: [
              "AWS Fundamentals",
              "EC2, S3, VPC",
              "Lambda, RDS",
              "Security & IAM",
              "Cost Management",
            ],
            certification: "AWS Certified Solutions Architect",
            careers: ["Cloud Engineer", "DevOps Engineer"],
          },
          {
            id: "azure",
            title: "Azure",
            duration: "4 Months",
            fee: "₹32,000",
            syllabus: [
              "Azure Fundamentals",
              "Azure Virtual Machines",
              "Azure App Services",
              "Azure SQL",
              "Azure AD",
            ],
            certification: "Microsoft Certified: Azure Administrator",
            careers: ["Azure Administrator", "Cloud Architect"],
          },
          {
            id: "google-cloud",
            title: "Google Cloud",
            duration: "4 Months",
            fee: "₹30,000",
            syllabus: [
              "Google Cloud Platform Overview",
              "Compute Engine",
              "Cloud Storage",
              "Cloud Functions",
              "BigQuery",
            ],
            certification: "Google Cloud Certified Associate",
            careers: ["Cloud Engineer", "Data Engineer"],
          },
        ],
      },
      {
        name: "Networking",
        icon: "📡",
        courses: [
          {
            id: "ccna",
            title: "CCNA",
            duration: "4 Months",
            fee: "₹22,000",
            syllabus: [
              "Network Fundamentals",
              "OSI & TCP/IP",
              "IPv4 & IPv6",
              "Routing & Switching",
              "Network Security",
            ],
            certification: "Cisco CCNA",
            careers: ["Network Administrator", "Network Engineer"],
          },
          {
            id: "ccnp",
            title: "CCNP",
            duration: "6 Months",
            fee: "₹35,000",
            syllabus: [
              "Advanced Routing",
              "Advanced Switching",
              "Troubleshooting",
              "Network Design",
              "Cisco Security",
            ],
            certification: "Cisco CCNP",
            careers: ["Senior Network Engineer", "Network Architect"],
          },
          {
            id: "linux-admin",
            title: "Linux Administration",
            duration: "3 Months",
            fee: "₹20,000",
            syllabus: [
              "Linux Fundamentals",
              "System Administration",
              "Shell Scripting",
              "Security & Permissions",
              "Network Configuration",
            ],
            certification: "Linux Professional Institute Certification (LPIC)",
            careers: ["Linux Administrator", "System Engineer"],
          },
        ],
      },
    ],
  };

  // Flatten all courses for modal
  const allCourses = courseData.categories.flatMap((cat) => cat.courses);

  // Course Modal component
  const CourseModal = ({ course, onClose }) => {
    if (!course) return null;
    return (
      <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[100] flex items-center justify-center p-4">
        <div className="bg-white rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto p-6 md:p-8 shadow-2xl">
          <div className="flex justify-between items-start mb-4">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
              {course.title}
            </h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <FaTimes className="w-6 h-6 text-gray-500" />
            </button>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-gray-700">
                  <FaCalendarAlt className="text-red-500" />
                  <span className="font-medium">Duration:</span>
                  <span>{course.duration}</span>
                </div>
                <div className="flex items-center gap-3 text-gray-700">
                  <FaRupeeSign className="text-red-500" />
                  <span className="font-medium">Fee:</span>
                  <span className="font-bold text-red-600">{course.fee}</span>
                </div>
                <div className="flex items-start gap-3 text-gray-700">
                  <FaCertificate className="text-red-500 mt-1" />
                  <div>
                    <span className="font-medium block">Certification:</span>
                    <span className="text-sm text-gray-600">{course.certification}</span>
                  </div>
                </div>
                <div className="flex items-start gap-3 text-gray-700">
                  <FaBriefcase className="text-red-500 mt-1" />
                  <div>
                    <span className="font-medium block">Career Opportunities:</span>
                    <ul className="text-sm text-gray-600 list-disc list-inside">
                      {course.careers.map((career, idx) => (
                        <li key={idx}>{career}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                <FaGraduationCap className="text-red-500" />
                Syllabus:
              </h4>
              <ul className="space-y-1 text-sm text-gray-700">
                {course.syllabus.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-red-500">▸</span>
                    {item}
                  </li>
                ))}
              </ul>
              <button className="mt-4 w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-xl font-semibold transition-all hover:scale-105 shadow-lg shadow-red-600/20">
                Enroll Now
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  // Handle dropdown with delay to fix hover issue
  const handleMouseEnter = () => {
    if (dropdownTimeout.current) clearTimeout(dropdownTimeout.current);
    setCourseMenu(true);
  };
  const handleMouseLeave = () => {
    dropdownTimeout.current = setTimeout(() => {
      setCourseMenu(false);
    }, 150);
  };
  const handleDropdownMouseEnter = () => {
    if (dropdownTimeout.current) clearTimeout(dropdownTimeout.current);
  };
  const handleDropdownMouseLeave = () => {
    dropdownTimeout.current = setTimeout(() => {
      setCourseMenu(false);
    }, 150);
  };

  // Open modal with course details
  const openCourseModal = (courseId) => {
    const course = allCourses.find((c) => c.id === courseId);
    if (course) {
      setSelectedCourse(course);
      setShowModal(true);
      setCourseMenu(false); // close dropdown
    }
  };

  return (
    <>
      {/* TOP BAR - hidden on mobile, visible on md+ */}
      <div className="hidden md:flex bg-[#0F172A] text-white text-sm border-b border-red-500/20">
        <div className="max-w-[1600px] mx-auto px-4 py-2 w-full flex items-center justify-between flex-wrap gap-2">
          <div className="flex items-center gap-4 flex-wrap">
            <div className="flex items-center gap-2">
              <FaPhoneAlt className="text-red-500" />
              <span>+91 9251274680</span>
            </div>
            <div className="flex items-center gap-2">
              <FaEnvelope className="text-red-500" />
              <span>100nu2k26@gmail.com</span>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <FaFacebookF className="hover:text-red-500 cursor-pointer transition-all" />
            <FaInstagram className="hover:text-red-500 cursor-pointer transition-all" />
            <FaLinkedinIn className="hover:text-red-500 cursor-pointer transition-all" />
            <FaYoutube className="hover:text-red-500 cursor-pointer transition-all" />
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-green-500 px-3 py-1 rounded-full hover:scale-105 transition-all text-xs md:text-sm"
            >
              <FaWhatsapp />
              WhatsApp
            </a>
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

              {/* COURSES DROPDOWN - with hover fix */}
              <li
                className="relative whitespace-nowrap"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <button className="hover:text-red-500 transition-all duration-300 flex items-center gap-1">
                  Courses <FaChevronDown className="text-xs" />
                </button>
                {courseMenu && (
                  <div
                    className="absolute left-1/2 -translate-x-1/2 top-12 w-[900px] bg-[#111827] rounded-2xl shadow-2xl border border-red-500/20 p-8"
                    onMouseEnter={handleDropdownMouseEnter}
                    onMouseLeave={handleDropdownMouseLeave}
                  >
                    <div className="grid grid-cols-4 gap-8">
                      {courseData.categories.map((cat, idx) => (
                        <div key={idx}>
                          <h3 className="text-red-500 font-bold mb-4 flex items-center gap-2">
                            <span>{cat.icon}</span> {cat.name}
                          </h3>
                          <ul className="space-y-2 text-gray-300">
                            {cat.courses.map((course) => (
                              <li
                                key={course.id}
                                className="hover:text-white cursor-pointer transition-colors text-sm"
                                onClick={() => openCourseModal(course.id)}
                              >
                                {course.title}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
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

              {/* Mobile Courses with expanded categories */}
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
                    {courseData.categories.map((cat, idx) => (
                      <div key={idx}>
                        <h4 className="text-red-400 font-semibold text-sm flex items-center gap-2">
                          <span>{cat.icon}</span> {cat.name}
                        </h4>
                        <ul className="ml-4 mt-1 space-y-1 text-gray-300 text-xs sm:text-sm">
                          {cat.courses.map((course) => (
                            <li
                              key={course.id}
                              className="hover:text-white cursor-pointer"
                              onClick={() => {
                                setMobileMenu(false);
                                openCourseModal(course.id);
                              }}
                            >
                              {course.title}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
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
                  <span>+91 9251274680</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaEnvelope className="text-red-500" />
                  <span>100nu2k26@gmail.com</span>
                </div>
                <div className="flex items-center gap-3 pt-2">
                  <FaFacebookF className="hover:text-red-500 cursor-pointer transition-all" />
                  <FaInstagram className="hover:text-red-500 cursor-pointer transition-all" />
                  <FaLinkedinIn className="hover:text-red-500 cursor-pointer transition-all" />
                  <FaYoutube className="hover:text-red-500 cursor-pointer transition-all" />
                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-green-400 cursor-pointer transition-all text-green-500"
                  >
                    <FaWhatsapp />
                  </a>
                </div>
              </li>
            </ul>
          </div>
        )}
      </nav>

      {/* Course Details Modal */}
      {showModal && (
        <CourseModal
          course={selectedCourse}
          onClose={() => setShowModal(false)}
        />
      )}
    </>
  );
};

export default Navbar;