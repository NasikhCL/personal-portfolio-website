export const profile = {
  name: "Nasikh Mahamood CL",
  displayName: "Nasikh CL",
  title: "Software Engineer",
  tagline: "Building SaaS products that scale.",
  summary:
    "Self-taught Software Engineer with nearly 3 years of experience building large-scale SaaS and edTech applications. Product-focused, performance-obsessed, and always shipping.",
  email: "nasikcl@gmail.com",
  linkedin: "https://linkedin.com/in/nasikh-cl",
  github: "https://github.com/nasikhCL",
  buymeacoffee: "https://buymeacoffee.com/nasikhcl",
  location: "India",
  phone: "+91-9539107700",
};

export const experience = [
    {
    role: "Software Development Engineer II (SDE 2)",
    company: "Computer Age Management Services Limited (CAMS)",
    location: "Chennai, Tamil Nadu",
    period: "June 2026 – Present",
    link: "https://camsonline.com",
    highlights: [
      "Leading frontend development for CAMS, India's largest RTA, focusing on performance optimization and scalable architecture.",
      "Building internal tools and dashboards to enhance operational efficiency and user experience.",
      "Implementing advanced React patterns and state management solutions to enhance user experience and maintainability.",
      "Collaborating with cross-functional teams to deliver high-quality software solutions that meet business objectives.",
    ],
  },
  {
    role: "Founding Member",
    company: "Kamyab Intelligence Pvt. Ltd.",
    location: "Delhi, India (Remote)",
    period: "Feb 2026 – June 2026",
    link: "https://www.kamyab.io/",
    highlights: [
      "Served as a founding engineering member, contributing to product strategy, feature ideation, growth initiatives, and technical decision-making for an AI-powered NEET preparation platform.",

      "Rapidly built and shipped product features using AI-assisted development workflows with Cursor and Claude Code, developing both React/TypeScript frontend and Fastify backend services despite limited prior Fastify experience.",

      "Designed and developed a fully responsive web application, focusing on scalability, usability, and an engaging learning experience for students preparing for competitive examinations.",

      "Collaborated on user acquisition, marketing experiments, and feature prioritization, leveraging partnerships with NEET educators, mentors, and student influencers to drive organic growth.",

      "Scaled the platform to 10,000+ user sign-ins across India within two months of launch, with students attempting over 500,000 questions, demonstrating strong early-stage engagement and product value.",

      "Gained firsthand experience in startup execution, balancing engineering, product thinking, growth initiatives, and monetization challenges while iterating quickly based on user feedback."
    ]
  },
  {
    role: "Frontend Developer",
    company: "SurveySparrow",
    location: "Chennai, Tamil Nadu",
    period: "Feb 2024 – Feb 2026",
    link: "https://surveysparrow.com",
    highlights: [
      "Designed and built ThriveSparrow end-to-end — a scalable SaaS product contributing to $1M in ARR by aligning technical execution with business goals.",
      "Integrated RESTful APIs and backend services, delivering modules that generated $100K+ in revenue with seamless UX.",
      "Improved accessibility score to 85% by applying semantic HTML and ARIA roles to meet WCAG standards.",
      "Implemented ReactJS performance optimizations — caching, bundling, virtualization, lazy loading — improving Core Web Vitals across the product.",
      "Leveraged AI-powered developer tools (Cursor, ChatGPT, Gemini) to accelerate development and automate repetitive tasks.",
    ],
  },
  {
    role: "Associate Developer",
    company: "iNeuron + PW Skills (Physics Wallah)",
    location: "Bangalore, Karnataka",
    period: "Feb 2023 – Nov 2023",
    link: "https://pwskills.com",
    highlights: [
      "Revamped the PWSkills admin page, streamlining administrative workflows and improving team productivity.",
      "Troubleshot and debugged production and pre-production issues, conducting root cause analysis on customer-facing environments.",
      "Delivered 10+ projects using HTML, CSS, Tailwind CSS, JavaScript, and React.js.",
    ],
  },
  {
    role: "Teaching Assistant Intern",
    company: "Coding Ninjas",
    location: "Remote",
    period: "Aug 2022 – Dec 2022",
    link: "https://codingninjas.com",
    highlights: [
      "Conducted doubt-solving sessions on frontend and backend technologies including HTML, CSS, JavaScript, Node.js, and React.js.",
      "Resolved 750+ student doubts and 80+ assignment code issues, cutting debugging time by 1–2 hours per session.",
      "Earned a 4.8/5 student satisfaction rating.",
    ],
  },
];

export const skills = {
  Languages: ["JavaScript", "TypeScript", "HTML", "CSS"],
  Frameworks: ["React", "Next.js", "Redux Toolkit", "TanStack Query", "Zustand"],
  Backend: ["Node.js", "Express.js", "MongoDB", "Redis", "REST APIs"],
  Styling: ["Tailwind CSS", "Twigs UI", "Shadcn UI"],
  Tools: ["Git", "GitHub", "Bitbucket", "Webpack", "Cursor", "Figma"],
  "A11Y & Perf": ["WCAG", "Core Web Vitals", "ARIA", "Lighthouse"],
};

export const featured = {
  label: "CURRENTLY BUILDING",
  title: "CAMS - India’s Largest RTA Platform’s workflows",
  company: "Computer Age Management Services Limited (CAMS)",
  description:
    "Computer Age Management Services Limited (CAMS) is India’s largest technology-driven financial infrastructure and Registrar and Transfer Agent (RTA) for mutual funds, holding almost 70% of the industry's average assets under management (AAUM). Headquartered in Chennai, it serves top Asset Management Companies (AMCs), Alternate Investment Funds (AIFs), and insurance firms.",
  link: "https://camsonline.com",
};

export const projects = [
  {
    title: "Kamyab Intelligence",
    description:
      "Founding member of Kamyab Intelligence pvt. ltd. — an AI-powered NEET preparation platform. Built end-to-end product features, scaled to 10,000+ users, and contributed to product strategy and growth.",
    link: "https://www.kamyab.io/",
    tags: ["React", "TypeScript", "Fastify", "AI", "EdTech"],
    status: "live" as const,
  },
  {
    title: "ThriveSparrow",
    description:
      "People success platform built at SurveySparrow — end-to-end frontend ownership. Contributed to $1M in ARR through scalable architecture, API integration, and performance engineering.",
    link: "https://thrivesparrow.com",
    tags: ["React", "TypeScript", "SaaS", "Redux Toolkit"],
    status: "live" as const,
  },
  {
    title: "Logizone Freight",
    description:
      "Freelance project — built the full frontend for a freight & logistics company. Clean, fast, and conversion-focused web presence.",
    link: "https://logizonefreight.com",
    tags: ["React", "Tailwind CSS"],
    status: "live" as const,
  },
  {
    title: "Glox.in",
    description:
      "Contributed to the frontend development of Glox — worked on UI components, layout, and responsive design.",
    link: "https://www.glox.in",
    tags: ["React", "Tailwind CSS"],
    status: "live" as const,
  },
  {
    title: "Pharma Job Portal",
    description:
      "Admin dashboard and public-facing website for a pharma job marketplace. Built end-to-end frontend — admin panel, listings, and user flows.",
    link: null,
    tags: ["React", "TypeScript", "Tailwind CSS"],
    status: "private" as const,
  },
  {
    title: "Let’s Build Something",
    description:
      "Got an idea? I design, build, and ship complete products — not just UI. Fast, scalable, and production-ready. Lets build something great together.",
    link: "mailto:nasikcl@gmail.com",
    tags: ["Any Stack", "Your Idea"],
    status: "open" as const,
  },
];

export const certifications = [
  { name: "Scrimba Advanced React", issuer: "Scrimba" },
  { name: "Google UX Design", issuer: "Google" },
];
