export const profile = {
  name: "Nasikh Mahamood CL",
  displayName: "Nasikh CL",
  title: "Frontend Developer",
  tagline: "Building SaaS products that scale.",
  summary:
    "Frontend Developer with nearly 3 years of experience building large-scale SaaS and edTech applications. Product-focused, performance-obsessed, and always shipping.",
  email: "nasikcl@gmail.com",
  linkedin: "https://linkedin.com/in/nasikh-cl",
  github: "https://github.com/nasikhCL",
  buymeacoffee: "https://buymeacoffee.com/nasikhcl",
  location: "India",
  phone: "+91-9539107700",
};

export const experience = [
  {
    role: "Frontend Developer",
    company: "SurveySparrow",
    location: "Chennai, Tamil Nadu",
    period: "Feb 2024 – Present",
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
  title: "ThriveSparrow — People Success Platform",
  company: "SurveySparrow",
  description:
    "A full-featured HR SaaS platform built end-to-end, from architecture to shipping. Contributed to $1M in ARR through scalable front-end design, API integration, and performance engineering.",
  link: "https://thrivesparrow.com",
};

export const projects = [
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
