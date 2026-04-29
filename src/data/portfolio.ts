export type ProjectCategory =
  | "All"
  | "E-commerce"
  | "Admin Systems"
  | "Corporate"
  | "Static Websites";

export type MediaType = "image" | "video" | "visual";

export const profile = {
  name: "Tushar Singh",
  role: "Full Stack Web Developer",
  specialty: "MERN Stack",
  experience: "1.5+ years",
  email: "tusharsingh6171@gmail.com",
  phone: "+91 82184 46921",
  location: "Mumbai, India",
  socials: {
    github: "https://github.com/",
    linkedin: "https://www.linkedin.com/",
  },
};

export const navItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export const taglineOptions = [
  "Engineering production-ready web products with scalable architecture and polished UX.",
  "Full stack MERN developer building fast, recruiter-friendly, business-ready applications.",
  "I turn complex product requirements into clean interfaces, reliable APIs, and measurable outcomes.",
];

export const aboutVariations = [
  {
    label: "Recruiter focused",
    text: "I am a full stack web developer with 1.5+ years of hands-on experience building production applications across e-commerce, CMS platforms, admin panels, and corporate websites. My work combines clean React and Next.js interfaces with reliable Node.js APIs, database design, API integrations, and cloud deployment ownership.",
  },
  {
    label: "Client focused",
    text: "I help businesses ship web products that are fast, responsive, and easy to operate. From SEO-friendly websites to inventory workflows, payment integrations, dashboards, and role-based admin systems, I focus on practical outcomes: better visibility, smoother operations, and scalable product foundations.",
  },
  {
    label: "Technical focused",
    text: "My strength is connecting frontend craft with backend architecture. I engineer reusable UI systems, REST APIs, database-backed workflows, authentication, payment integrations, and deployment pipelines while keeping performance, accessibility, and maintainability in view from day one.",
  },
];

export const stats = [
  { value: "12+", label: "Production-ready applications shipped" },
  { value: "1.5+", label: "Years across MERN and Next.js delivery" },
  { value: "4", label: "Core domains: e-commerce, CMS, admin, Static Websites" },
  // { value: "Full SDLC", label: "Planning, development, integration, deployment" },
];

export const skillGroups = [
  {
    title: "Frontend Engineering",
    description: "Modern UI architecture for fast, responsive product experiences.",
    items: ["React.js", "Next.js", "Tailwind CSS", "SSR", "CSR", "Responsive UI"],
  },
  {
    title: "Backend Engineering",
    description: "API-first backend systems with clear contracts and reliable integrations.",
    items: ["Node.js", "Express.js", "REST APIs", "OAuth", "Razorpay", "Stripe"],
  },
  {
    title: "Data Layer",
    description: "Practical database choices for CMS, commerce, analytics, and admin flows.",
    items: ["MongoDB", "MySQL", "PostgreSQL", "Prisma", "Schema Design"],
  },
  {
    title: "Delivery",
    description: "Production thinking across performance, SEO, source control, and cloud release.",
    items: ["Git", "Cloud Deployment", "SEO Optimization", "Performance Audits"],
  },
];

export const experiences = [
  {
    role: "Full Stack Developer",
    company: "PCD Consultancy Services",
    period: "July 2025 – November 2025",
    location: "Mumbai, India",
    summary:
      "Delivered scalable full-stack applications and admin systems with end-to-end ownership from development to deployment.",
    highlights: [
      "Architected and deployed 5 production applications including 2 dynamic websites, 1 complete admin panel with backend infrastructure, and a mobile application backend using React.js, Next.js, Node.js, and MySQL.",
      "Developed custom CMS platforms and admin panels enabling non-technical users to manage content efficiently, reducing content update time through streamlined workflows.",
      "Managed cloud server deployment, configuration, and optimization ensuring 99.9% uptime and improved security practices.",
      // "Collaborated with cross-functional teams to design intuitive UI and deliver feature-rich applications using agile methodologies.",
    ],
  },
  {
    role: "Web Developer Intern",
    company: "Sublime Technocorp",
    period: "June 2024 – May 2025",
    location: "Navi Mumbai, India",
    summary:
      "Built and optimized responsive web applications with a strong focus on performance, API integration, and SEO.",
    highlights: [
      "Architected and deployed 7+ production applications including 3 dynamic websites and 1 complete admin panel using React.js, Next.js, Node.js, and MySQL.",
      "Engineered responsive web interfaces improving user engagement and overall frontend performance.",
      // "Integrated and validated RESTful APIs ensuring seamless data flow with reliable functionality.",
      // "Developed backend services using Node.js with MySQL, PostgreSQL, and MongoDB, implementing efficient database schemas.",
      "Applied SSR and CSR techniques to optimize page load speed and SEO performance.",
      // "Improved application performance using code splitting, lazy loading, and caching strategies.",
    ],
  },
];

export const projectCategories: ProjectCategory[] = [
  "All",
  "E-commerce",
  "Admin Systems",
  "Corporate",
  "Static Websites",
];

export const projects = [
  {
    title: "MK Ghare E-commerce Platform",
    category: "E-commerce" as ProjectCategory,
    year: "2024",
    stack: ["Next.js", "React.js", "Node.js", "MongoDB", "OAuth", "Payments"],
    summary:
      "Developed a full-stack e-commerce platform with customer-facing shopping flows and a business-ready admin panel for daily operations.",
    outcomes: [
      "Engineered product, inventory, order, banner, and CMS management workflows to reduce manual operational effort.",
      "Integrated OAuth and payment flows to support secure customer onboarding and checkout.",
      "Optimized responsive UI and SEO structure for product discovery across website and mobile traffic.",
    ],
    mediaType: "video" as MediaType,
    mediaSrc: "/projects/Demo.mp4",
    liveUrl: "https://mkghare.com",
  },
  {
    title: "Kidzbook Unified Admin Panel System",
    category: "Admin Systems" as ProjectCategory,
    year: "2025",
    stack: ["Next.js", "Node.js", "RBAC", "REST APIs", "Analytics", "CMS"],
    summary:
      "Architected a scalable multi-dashboard admin system that unifies social, e-commerce, education, events, analytics, and permissions into one control surface.",
    outcomes: [
      "Designed a module-based architecture with dynamic switching so teams can move between business domains without context loss.",
      "Implemented role-based access control, permission-based rendering, audit logs, and tracking for safer admin operations.",
      "Built per-module analytics and UI theme customization to support scalable product ownership across teams.",
    ],
    mediaType: "visual" as MediaType,
    mediaSrc:"/projects/Kidzbook-admin.png",
  },
  {
    title: "Shivesh Construction Website",
    category: "Static Websites" as ProjectCategory,
    year: "2025",
    stack: ["Next.js", "Static Rendering", "Lead Forms", "SEO", "Responsive UI"],
    summary:
      "Built an SEO-friendly static website for a construction business with a clear service narrative and lead-generation paths.",
    outcomes: [
      "Structured service pages and metadata for stronger search visibility and recruiter/client confidence.",
      "Added inquiry forms and conversion-focused sections to turn visitors into qualified leads.",
      "Delivered a fast responsive interface that keeps project information easy to scan on every device.",
    ],
    mediaType: "visual" as MediaType,
    liveUrl: "https://shivesh-web.vercel.app",
  },
  {
    title: "Sublime Technocorp Website",
    category: "Corporate" as ProjectCategory,
    year: "2024",
    stack: ["Next.js", "React.js", "Tailwind CSS", "Performance", "SEO"],
    summary:
      "Delivered a modern corporate website focused on credibility, service clarity, performance, and SEO improvements.",
    outcomes: [
      "Optimized page structure, responsiveness, and loading behavior to create a more polished business presence.",
      "Translated service offerings into a clear UI hierarchy for faster visitor understanding.",
      "Improved technical SEO and performance foundations for better discoverability and retention.",
    ],
    mediaType: "visual" as MediaType,
    liveUrl: "https://sublimetechnocorp.com",
  },
];



export const folderStructure = `src/
  app/
    api/contact/route.ts       // contact form endpoint
    resume/route.ts            // downloads public/Tushar_Singh-1.pdf
    layout.tsx                 // metadata, fonts, providers
    loading.tsx                // skeleton loading screen
    page.tsx                   // server-rendered landing page
  components/
    sections/                  // Hero, About, Skills, Experience, Projects, Contact
    ui/                        // Navbar, ThemeProvider, MotionSection, reusable UI
  data/
    portfolio.ts               // content, skills, projects, feature suggestions
public/
  projects/                    // demo videos and project media`;

export const seoChecklist = [
  "Keep the main page server-rendered and pass only interactive islands to Client Components.",
  "Use descriptive metadata, Open Graph content, semantic headings, and project-specific copy.",
  "Lazy-load heavy media and keep video preload to metadata.",
  "Use responsive CSS constraints to prevent layout shift across mobile and desktop.",
  "Keep animation transforms GPU-friendly and respect prefers-reduced-motion.",
];
