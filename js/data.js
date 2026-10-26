/**
 * Centralized Data Store for SSBT Arts, Commerce & Science College Portal
 * (js/data.js)
 * Supports live editing via the Admin Panel (admin.html) with localStorage persistence.
 */

const DEFAULT_COLLEGE_DATA = {
  general: {
    trustName: "Shram Sadhana Bombay Trust's",
    name: "Arts, Commerce & Science College, Bambhori",
    shortName: "SSACSC Bambhori",
    location: "Post Box No. 94, Bambhori, Jalgaon - 425001, Maharashtra, India",
    phone: "0257-2258391 / 93 / 94",
    email: "sscoetjal@gmail.com",
    affiliation: "Affiliated to Kavayitri Bahinabai Chaudhari North Maharashtra University, Jalgaon",
    approvedBy: "Govt. of Maharashtra & Higher Education Dept.",
    dteCode: "DTE Code: 5125 | AISHE: C-8924",
    logoUrl: "https://sscoetjalgaon.ac.in/public/images/home-page/new-logos/ssacsc.png"
  },

  stats: {
    highestPackage: "12.0 LPA",
    averagePackage: "4.20 LPA",
    placementRate: "88%",
    activeStudents: "2,500+",
    campusAcres: "25 Acres",
    facultyCount: "85+",
    legacyYears: "40+ Years (Since 1983)",
    naacAffiliation: "Grade 'A' University Affiliation (KBCNMU)"
  },

  leadership: {
    founder: "Smt. Pratibha Devisingh Patil",
    founderTitle: "Former President of India (12th President & First Woman to Hold Office)",
    founderQuote: "Education is the supreme catalyst to empower rural youth, elevate women, and build a progressive nation.",
    founderBio: "Founder Patron of SSBT (Est. 1983). Champion of rural youth higher education and technological literacy in North Maharashtra.",
    founderPhoto: "./tai photo.jpeg",

    principal: "Dr. G. K. Patnaik",
    principalTitle: "Principal & Professor | Ph.D. in Computer Science & Engineering",
    principalExp: "28+ Years in Higher Education",
    principalPapers: "65+ Research Publications",
    principalPhoto: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=600&q=80",
    principalQuote: "Welcome to SSBT's Arts, Commerce & Science College, Bambhori. We cultivate an ecosystem where academic rigour harmonizes with hands-on technical skills, industry readiness, and high ethical standards."
  },

  placement: {
    head: "Prof. Aarti Rana",
    designation: "Head — Training & Placement Cell (T&P Officer)",
    qualification: "M.Tech (CSE), MBA (HR), Ph.D. Scholar",
    experience: "14+ Years Corporate Relations & Employability Training",
    email: "tpo@ssacscjalgaon.ac.in",
    phone: "0257-2258394 / 9422789123",
    photo: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80",
    message: "Our mission is bridging campus talent with premier corporate enterprises. From the first semester, we provide continuous aptitude grooming, full-stack coding bootcamps, and executive interview preparation to ensure high-bracket job placements for BCA, BBA, and B.Sc. students.",
    highestPackage: "12.0 LPA",
    averagePackage: "4.20 LPA",
    totalOffers: "220+",
    partnerCompanies: "60+",
    recruiters: ["TCS", "Infosys", "Tech Mahindra", "Capgemini", "Cognizant", "Wipro", "HDFC Bank", "Persistent Systems", "L&T Infotech", "Accenture"]
  },

  notices: [
    {
      id: 1,
      title: "Admissions Open for Academic Year 2026-27 (BCA, BBA, B.Sc. CS & Data Science)",
      date: "26",
      month: "OCT",
      category: "admission",
      isNew: true,
      description: "Direct counseling and online enquiry forms active. Visit admission cell or apply online."
    },
    {
      id: 2,
      title: "Preparations Underway for National Level Technical Fest 'MILESTONE 2026'",
      date: "24",
      month: "OCT",
      category: "event",
      isNew: true,
      description: "Inter-collegiate 24-hour hackathons, robotics arena, and cash prizes worth ₹1.5 Lakhs."
    },
    {
      id: 3,
      title: "University Semester End Examination Schedule (Winter 2026 Session)",
      date: "20",
      month: "OCT",
      category: "exam",
      isNew: true,
      description: "Timetable for FY, SY & TY students released by KBCNMU. Check hall tickets at examination counter."
    },
    {
      id: 4,
      title: "Campus Mega Placement Drives by TCS, Infosys & Tech Mahindra",
      date: "15",
      month: "OCT",
      category: "placement",
      isNew: false,
      description: "On-campus pooled drives for BCA, BBA, and B.Sc. batches. T&P cell orientation next week."
    }
  ],

  events: [
    {
      id: "milestone",
      title: "MILESTONE 2026 — National Technical Symposium",
      category: "technical",
      date: "February 18-19, 2026",
      tagline: "Flagship National Tech Extravaganza with 3,000+ Participants",
      cashPrize: "₹1,50,000+ Cash Pool",
      photo: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=900&q=80",
      description: "Two high-octane days featuring 24-Hour Code-a-Thon, Robo-War arena battles, Web Design Sprint, and National Paper Presentations evaluated by tech corporate leaders."
    },
    {
      id: "vasantotsav",
      title: "VASANTOTSAV 2026 — Mega Annual Cultural Gathering",
      category: "cultural",
      date: "March 5-7, 2026",
      tagline: "Celebrity Live Concert, Inter-College Dance Battles & DJ Beats",
      cashPrize: "Trophies & National Fame",
      photo: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=900&q=80",
      description: "A 3-day multi-cultural gala in our open-air amphitheatre with musical night concerts, Maharashtrian folk pageants (Lavani & Powada), fashion show, and high-energy EDM DJ night."
    },
    {
      id: "sports",
      title: "KHEL-MAHOTSAV 2026 — Annual Sports Championship",
      category: "sports",
      date: "January 12-16, 2026",
      tagline: "Inter-Departmental Floodlight Cricket, Football & Athletics",
      cashPrize: "Gold Medals & Rolling Shields",
      photo: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=900&q=80",
      description: "Spanning our 25-acre green grounds with floodlight cricket stadium, 400m athletic tracks, volleyball arenas, badminton courts, and indoor chess tournaments."
    },
    {
      id: "hackathon",
      title: "CYBER-QUEST — 24H Full-Stack Hackathon",
      category: "technical",
      date: "December 22-23, 2026",
      tagline: "Building AI, Web3 & Mobile Applications for Social Good",
      cashPrize: "₹50,000 Cash + Cloud Credits",
      photo: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=900&q=80",
      description: "High-intensity hackathon where student teams develop working prototypes in AI, Fintech, and Healthcare under the mentorship of senior industry engineers."
    }
  ],

  departments: {
    bca: {
      id: "bca",
      name: "Department of Computer Applications (BCA)",
      short: "BCA",
      tagline: "Building Future Software Architects, Web Engineers & Tech Leaders",
      duration: "3 Years (6 Semesters)",
      intake: "60 Seats",
      hod: {
        name: "Dr. A. S. Patil",
        qualification: "Ph.D. (Comp. Sci.), M.C.A., B.Sc.",
        experience: "16+ Years Experience",
        message: "Our BCA program bridges theoretical foundations with cutting-edge full stack engineering, cloud technologies, and agile application design."
      },
      vision: "To produce competent, ethical, and industry-ready computer application professionals addressing global technological challenges.",
      mission: [
        "Deliver robust foundational and advanced computer programming education.",
        "Provide state-of-the-art laboratory infrastructure for experiential software development.",
        "Foster entrepreneurial mindset and social responsibility among IT aspirants."
      ],
      labs: [
        { name: "Advanced Java & Web Tech Lab", pcs: "40 High-End Core i7 Desktops", os: "Dual OS (Ubuntu & Windows 11)" },
        { name: "Database & Cloud Computing Lab", pcs: "35 High-Speed Workstations", os: "Oracle 19c & MySQL" },
        { name: "Mobile App Development Lab", pcs: "30 Core i5 Systems", os: "Android Studio & Flutter SDK" }
      ],
      faculty: [
        { name: "Prof. S. R. Sharma", role: "Assistant Professor", qual: "M.C.A., NET Qualified", exp: "10 Years" },
        { name: "Prof. N. K. Chaudhari", role: "Assistant Professor", qual: "M.Sc. (Comp. Sci.)", exp: "8 Years" },
        { name: "Prof. P. V. Deshmukh", role: "Assistant Professor", qual: "M.Tech (IT)", exp: "7 Years" }
      ],
      syllabusHighlights: ["Object-Oriented Programming (Java/C++)", "Full-Stack Web Dev (React & Node)", "Database Management Systems", "Cloud Computing & DevOps", "Final Year Live Capstone Project"]
    },

    bba: {
      id: "bba",
      name: "Department of Business Administration (BBA)",
      short: "BBA",
      tagline: "Cultivating Dynamic Business Leaders, Managers & Entrepreneurs",
      duration: "3 Years (6 Semesters)",
      intake: "60 Seats",
      hod: {
        name: "Dr. M. R. Kulkarni",
        qualification: "Ph.D. (Management), M.B.A. (Finance)",
        experience: "18+ Years Experience",
        message: "Management is about making visionary decisions under uncertainty. Our BBA program emphasizes case studies, real-market simulations, and corporate internships."
      },
      vision: "To emerge as a premier management education department creating visionary business minds with corporate excellence.",
      mission: [
        "Impart holistic business management and leadership education.",
        "Facilitate regular corporate interactions, industrial visits, and mentorship sessions.",
        "Inculcate ethical managerial values and startup incubation support."
      ],
      labs: [
        { name: "Business Simulation & Analytics Lab", pcs: "30 Systems", os: "SPSS & Advanced MS Excel" },
        { name: "Language & Corporate Communication Lab", pcs: "Digital Audio Setup", os: "Orell Talk Software" }
      ],
      faculty: [
        { name: "Dr. V. K. Mahajan", role: "Associate Professor", qual: "Ph.D., M.B.A. (HR)", exp: "14 Years" },
        { name: "Prof. R. T. Sonawane", role: "Assistant Professor", qual: "M.B.A. (Marketing)", exp: "9 Years" },
        { name: "Prof. G. D. Patil", role: "Assistant Professor", qual: "M.Com, SET", exp: "6 Years" }
      ],
      syllabusHighlights: ["Financial Accounting & Management", "Marketing Management & Digital Marketing", "Human Resource Management", "Entrepreneurship Development", "Summer Internship Project"]
    },

    "bsc-cs": {
      id: "bsc-cs",
      name: "Department of Computer Science (B.Sc. CS)",
      short: "B.Sc. CS",
      tagline: "Mastering Computing Fundamentals, Algorithmic Thinking & Systems",
      duration: "3 Years (6 Semesters)",
      intake: "60 Seats",
      hod: {
        name: "Prof. D. K. Rajput",
        qualification: "M.Tech (CSE), Ph.D. Pursuing",
        experience: "15+ Years Experience",
        message: "Computer Science at SSBT focuses deeply on algorithmic rigour, mathematics, operating systems, and scalable network architectures."
      },
      vision: "To foster excellence in computer science education, innovation, and fundamental research.",
      mission: [
        "Provide in-depth theoretical and mathematical foundations of computing.",
        "Promote hands-on software coding, debugging, and open-source contributions.",
        "Prepare graduates for higher studies (M.Sc., MCA) and IT core industries."
      ],
      labs: [
        { name: "Linux & Network Systems Lab", pcs: "35 Ubuntu Terminals", os: "C, C++, Wireshark" },
        { name: "Software Engineering & Data Structures Lab", pcs: "35 Systems", os: "Python & Java" }
      ],
      faculty: [
        { name: "Prof. S. M. Joshi", role: "Assistant Professor", qual: "M.Sc. (Comp. Sci.)", exp: "11 Years" },
        { name: "Prof. B. E. Wani", role: "Assistant Professor", qual: "M.Sc. (Comp. Sci.)", exp: "7 Years" }
      ],
      syllabusHighlights: ["Data Structures & Algorithms", "Operating Systems & Shell Scripting", "Computer Networks & Security", "Python for Scientific Computing", "Software Engineering Principles"]
    },

    "bsc-ds": {
      id: "bsc-ds",
      name: "Department of Data Science (B.Sc. Data Science)",
      short: "B.Sc. DS",
      tagline: "Harnessing Big Data, Artificial Intelligence & Predictive Analytics",
      duration: "3 Years (6 Semesters)",
      intake: "60 Seats",
      hod: {
        name: "Dr. H. N. Bhavsar",
        qualification: "Ph.D. (Data Analytics), M.E. (Computer)",
        experience: "14+ Years Experience",
        message: "Data is the new oil. Our specialized Data Science course prepares students for lucrative careers in Machine Learning, Business Intelligence, and Big Data Engineering."
      },
      vision: "To be a leading centre of excellence in artificial intelligence and modern data science.",
      mission: [
        "Train students in probability, mathematical modeling, and statistical inference.",
        "Equip learners with modern data stacks: Python, R, PowerBI, Tableau, and TensorFlow.",
        "Collaborate with analytical companies for real-world dataset research."
      ],
      labs: [
        { name: "Data Science & AI Lab", pcs: "30 High-GPU Workstations", os: "Python, Jupyter, TensorFlow" },
        { name: "Business Intelligence & Visualization Lab", pcs: "30 Workstations", os: "PowerBI, Tableau Desktop" }
      ],
      faculty: [
        { name: "Prof. K. A. More", role: "Assistant Professor", qual: "M.Tech (AI & DS)", exp: "8 Years" },
        { name: "Prof. T. S. Pawar", role: "Assistant Professor", qual: "M.Sc. (Statistics)", exp: "6 Years" }
      ],
      syllabusHighlights: ["Applied Statistics & Probability", "Machine Learning & Neural Networks", "Big Data Analytics with Spark", "Data Visualization & Dashboards", "Natural Language Processing (NLP)"]
    }
  }
};

/**
 * Returns live data merged with admin overrides from localStorage.
 */
function getCollegeData() {
  try {
    const local = localStorage.getItem('SSBT_COLLEGE_DATA');
    if (local) {
      const parsed = JSON.parse(local);
      return Object.assign({}, DEFAULT_COLLEGE_DATA, parsed);
    }
  } catch (err) {
    console.error("Error loading local college data override:", err);
  }
  return DEFAULT_COLLEGE_DATA;
}

/**
 * Saves modified data to localStorage for instant website updates.
 */
function saveCollegeData(updatedData) {
  try {
    localStorage.setItem('SSBT_COLLEGE_DATA', JSON.stringify(updatedData));
    return true;
  } catch (err) {
    console.error("Error saving college data:", err);
    return false;
  }
}

/**
 * Reset data back to default
 */
function resetCollegeData() {
  localStorage.removeItem('SSBT_COLLEGE_DATA');
}

// Global active data reference
var COLLEGE_DATA = getCollegeData();
