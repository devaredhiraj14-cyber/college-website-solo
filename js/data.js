/**
 * Centralized Data Store for SSBT Arts, Commerce & Science College Portal
 * (demo-college-website/js/data.js)
 */

const COLLEGE_DATA = {
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
    logoUrl: "https://ssacscjalgaon.ac.in/public/images/logo.png"
  },

  notices: [
    {
      id: 1,
      title: "Admissions Open for Academic Year 2026-27 (BCA, BBA, B.Sc. CS & Data Science)",
      date: "24",
      month: "OCT",
      category: "admission",
      isNew: true,
      description: "Direct counseling and online enquiry forms active. Visit admission cell or apply online."
    },
    {
      id: 2,
      title: "Preparations Underway for National Level Technical Fest 'MILESTONE 2026'",
      date: "20",
      month: "OCT",
      category: "event",
      isNew: true,
      description: "Inter-collegiate 24-hour hackathons, robotics arena, and cash prizes worth ₹1.5 Lakhs."
    },
    {
      id: 3,
      title: "University Semester End Examination Schedule (Winter 2026 Session)",
      date: "18",
      month: "OCT",
      category: "exam",
      isNew: true,
      description: "Timetable for FY, SY & TY students released by KBCNMU. Check hall tickets at examination counter."
    },
    {
      id: 4,
      title: "Campus Mega Placement Drives by TCS, Infosys & Tech Mahindra",
      date: "12",
      month: "OCT",
      category: "placement",
      isNew: false,
      description: "On-campus pooled drives for BCA, BBA, and B.Sc. batches. T&P cell orientation next week."
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
