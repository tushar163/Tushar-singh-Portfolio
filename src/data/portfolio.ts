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
  location: "Noida, India",
  socials: {
    github: "https://github.com/",
    linkedin: "https://www.linkedin.com/in/tushar-singh-746985335/",
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
  "Full Stack Web Developer building production-ready MERN applications.",
  "I build scalable web products, admin systems, e-commerce workflows, CMS platforms, and SEO-friendly business websites.",
  "A production-minded MERN developer who can build real business systems, not just frontend screens.",
];

export const stats = [
  { value: "12+", label: "Production-ready applications shipped" },
  { value: "1.5+", label: "Years across MERN and Next.js delivery" },
  { value: "Full SDLC", label: "Planning, UI, APIs, deployment, optimization" },
];

export const credibilitySignals = [
  "Full SDLC exposure",
  "Admin panel architecture",
  "Payments and OAuth",
  "Cloud deployment",
  "SEO and performance",
  "Client-facing production work",
];

export const skillGroups = [
  {
    title: "Frontend Product UI",
    description:
      "Production interfaces for dashboards, commerce flows, forms, and responsive business websites.",
    items: ["React.js", "Next.js", "Tailwind CSS", "SSR", "CSR", "Responsive UI", "Used in production"],
  },
  {
    title: "Backend APIs",
    description:
      "API-first backend systems with maintainable contracts, auth flows, and business logic.",
    items: ["Node.js", "Express.js", "REST APIs", "Authentication", "Business Logic"],
  },
  {
    title: "Databases",
    description:
      "Database-backed workflows for CMS, commerce, analytics, admin panels, and user operations.",
    items: ["MongoDB", "MySQL", "PostgreSQL", "Prisma", "Schema Design"],
  },
  {
    title: "Integrations & Delivery",
    description:
      "Production delivery across payments, OAuth, SEO, source control, and cloud release.",
    items: ["OAuth", "Razorpay", "Stripe", "Git", "Cloud Deployment", "SEO Optimization"],
  },
];

export const experiences = [
  {
    role: "Full Stack Developer",
    company: "PCD Consultancy Services",
    period: "July 2025 - November 2025",
    location: "Mumbai, India",
    summary:
      "Architected and deployed production web applications including dynamic websites, admin systems, and backend services.",
    highlights: [
      "Built CMS and admin workflows that helped non-technical teams manage content, products, and operational data.",
      "Handled frontend UI, backend APIs, database-backed workflows, and deployment-ready delivery.",
      "Improved reliability and performance through server configuration, optimization, and production-minded implementation.",
    ],
  },
  {
    role: "Web Developer Intern",
    company: "Sublime Technocorp",
    period: "June 2024 - May 2025",
    location: "Navi Mumbai, India",
    summary:
      "Delivered responsive React and Next.js applications with API integrations, SEO improvements, and performance-focused implementation.",
    highlights: [
      "Built production websites and admin interfaces using React.js, Next.js, Node.js, and MySQL.",
      "Worked across UI implementation, backend services, database-backed workflows, and production handoff.",
      "Applied SSR and CSR patterns to improve load speed, SEO visibility, and frontend performance.",
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
      "A production e-commerce platform with customer shopping flows and an admin system for managing daily commerce operations.",
    role:
      "Full-stack development, admin panel architecture, API integration, payment-ready flows, and responsive UI.",
    problem:
      "The business needed an online store that could handle product discovery, checkout readiness, and internal management without relying on manual updates.",
    built: [
      "Customer-facing product and shopping flows with responsive UI for desktop and mobile.",
      "Admin workflows for products, inventory, orders, banners, and CMS content.",
      "OAuth login and payment-ready checkout foundations for secure customer onboarding.",
    ],
    impact:
      "Created a more manageable commerce system where business teams can update inventory, process orders, and support online product discovery.",
    mediaType: "video" as MediaType,
    mediaSrc: "/projects/Demo.mp4",
    liveUrl:
      "https://mkgharejewellers.com/?srsltid=AfmBOorVlBltufTrl8gM6x8jeJqwnEBEyZlF0y5mmAYnhDfXBWrU8bZb",
  },
  {
    title: "Kidzbook Unified Admin Panel System",
    category: "Admin Systems" as ProjectCategory,
    year: "2025",
    stack: ["Next.js", "Node.js", "RBAC", "REST APIs", "Analytics", "CMS"],
    summary:
      "A scalable multi-module admin system for social, e-commerce, education, events, analytics, permissions, and operations.",
    role:
      "Admin system architecture, frontend dashboards, backend API integration, RBAC planning, and scalable UI workflows.",
    problem:
      "The product needed one control surface for multiple business modules without creating disconnected dashboards for each team.",
    built: [
      "Module-based dashboard architecture with dynamic module switching.",
      "RBAC, permission-based rendering, audit logs, and tracking for safer admin operations.",
      "Per-module analytics and theme customization to support product ownership across teams.",
    ],
    impact:
      "Improved admin scalability by giving teams a unified interface for managing complex product modules and permissions.",
    mediaType: "visual" as MediaType,
    mediaSrc: "/projects/Kidzbook-admin.png",
  },
  {
    title: "Shivesh Construction Website",
    category: "Static Websites" as ProjectCategory,
    year: "2025",
    stack: ["Next.js", "Static Rendering", "Lead Forms", "SEO", "Responsive UI"],
    summary:
      "A fast, SEO-friendly business website focused on service discovery, trust, and lead generation.",
    role:
      "Frontend implementation, static site structure, SEO page planning, responsive UI, and lead form integration.",
    problem:
      "The business needed a professional web presence that explained services clearly and converted visitors into inquiries.",
    built: [
      "SEO-conscious page structure with clear service sections and business credibility signals.",
      "Responsive UI for mobile and desktop visitors.",
      "Lead inquiry flow to support client acquisition.",
    ],
    impact:
      "Improved service visibility and created a clearer path for potential customers to understand offerings and submit inquiries.",
    mediaType: "visual" as MediaType,
    liveUrl: "https://shivesh-web.vercel.app",
  },
  {
    title: "Sublime Technocorp Website",
    category: "Corporate" as ProjectCategory,
    year: "2024",
    stack: ["Next.js", "React.js", "Tailwind CSS", "Performance", "SEO"],
    summary:
      "A modern corporate website designed to improve service clarity, brand trust, performance, and discoverability.",
    role:
      "Frontend development, responsive layouts, performance optimization, SEO improvements, and content presentation.",
    problem:
      "The company needed a sharper digital presence that communicated services quickly and felt credible to business visitors.",
    built: [
      "Modern responsive pages with structured service and portfolio content.",
      "Performance-conscious frontend implementation using Next.js and Tailwind CSS.",
      "SEO-friendly page hierarchy for better discoverability.",
    ],
    impact:
      "Created a more polished business presence with clearer service communication and stronger technical foundations.",
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
