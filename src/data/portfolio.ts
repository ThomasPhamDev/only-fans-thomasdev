import type { Education, Experience, Profile } from "@/types/portfolio";

export const profile: Profile = {
  name: "Pham Thanh Truong",
  displayName: "Thomas Pham",
  role: "React Developer",
  summary:
    "React Developer with 2 years of experience building responsive and high-performance web applications. Proficient in React.js and Next.js, with additional experience in React Native and backend development using NestJS and Laravel. Focused on writing clean, maintainable code and delivering scalable products.",
  email: "truongthanhdn24@gmail.com",
  phone: "(+84) 382 848 272",
  location: "Da Nang City, Viet Nam",
  website: "https://thomasworks.netlify.app",
  github: "https://github.com/ThomasPhamDev",
  linkedin: "https://www.linkedin.com/in/thanh-truong-pham-617855312/",
  facebook: "https://www.facebook.com/thisistruong/",
  avatar: "/assets/profile_3.jpg",
  cvFile: "/assets/reactjs-phamthanhtruong-cv1.pdf",
};

export const heroTechStack = [
  "ReactJS",
  "Next.js",
  "TypeScript",
  "React Native",
  "NestJS",
  "Laravel",
];

export const experiences: Experience[] = [
  {
    title: "Operation Team Member",
    company: "FPT-Software",
    period: "Present",
    location: "Da Nang, Viet Nam",
    tech: ["Datadog", "Git", "AWS"],
    responsibilities: ["N/A"],
  },
  {
    title: "ReactJs Developer",
    company: "IFA",
    period: "Dec 2025 - Present",
    location: "HCM, Viet Nam",
    project: { name: "LMS" },
    tech: ["ReactJS", "TypeScript", "Firebase", "SocketIO", "Redux", "React Query"],
    cicd: "AWS",
    responsibilities: [
      "Developed responsive UI based on Figma designs.",
      "Implemented LMS features such as course listing, lesson viewing, SCORM, and chat.",
      "Integrated RESTful APIs to fetch course data and handle user interactions.",
    ],
  },
  {
    title: "NestJs Developer",
    company: "ICT Global Solutions",
    period: "Mar 2025 - Dec 2025",
    location: "Da Nang, Viet Nam",
    project: { name: "Let Share" },
    tech: ["TypeScript", "MongoDB", "Docker", "Redis", "Firebase", "SocketIO", "VoIP"],
    cicd: "AWS",
    responsibilities: [
      "Built endpoints according to project design.",
      "Built chat features with Socket.IO.",
      "Researched and developed VoIP features.",
    ],
  },
  {
    title: "Full-stack Developer",
    company: "ICT Global Solutions",
    period: "Jul 2024 - Mar 2025",
    location: "Da Nang, Viet Nam",
    project: { name: "Enrol", url: "https://profile.enrol.ch/" },
    tech: ["Yii", "AngularJS", "MySQL", "PHP", "JavaScript", "Payrexx", "Cloudflare"],
    cicd: "Google Cloud",
    responsibilities: [
      "Built dashboard summaries aggregating key information across academic terms and seasons.",
      "Developed drag-and-drop features for scheduling and organizing class timetables.",
      "Implemented payment functionality and automated subdomain provisioning.",
    ],
  },
  {
    title: "NextJs Developer",
    company: "Mudbath",
    period: "May 2024 - Jul 2024",
    location: "New South Wales, Australia",
    project: { name: "MYO", url: "https://myomunchee.com/" },
    tech: ["TypeScript", "MUI", "Contentful", "Cloudflare", "LearnWorlds", "BigCommerce"],
    cicd: "AWS",
    responsibilities: [
      "Implemented pixel-perfect frontend components.",
      "Integrated dynamic content with Contentful CMS.",
      "Collaborated with design and marketing teams.",
    ],
  },
  {
    title: "ReactJs Developer",
    company: "Mudbath",
    period: "Feb 2024 - May 2024",
    location: "New South Wales, Australia",
    project: { name: "Milieulabs", url: "https://dev-installer.milieulabs.com.au/" },
    tech: [
      "TypeScript",
      "ReactJS",
      "Serverless",
      "AWS IoT Core",
      "AWS Lambda",
      "API Gateway",
      "DynamoDB",
      "Cognito",
    ],
    cicd: "AWS",
    responsibilities: [
      "Migrated UI from Aurelia to ReactJS.",
      "Updated API endpoints and Lambda functions.",
    ],
  },
  {
    title: "Laravel Developer",
    company: "Mudbath",
    period: "Sep 2023 - Feb 2024",
    location: "New South Wales, Australia",
    project: { name: "Landers & Rogers", url: "https://landers.com.au/" },
    tech: ["PHP", "JavaScript", "VueJS", "Contentful", "Algolia"],
    cicd: "Docker, Azure",
    responsibilities: [
      "Migrated from Laravel 7 to Laravel 9 and upgraded Contentful integration.",
      "Resolved Docker pipeline issues, addressed cybersecurity issues, and fixed sitemap issues.",
      "Adjusted UI after migration.",
    ],
  },
  {
    title: "ETL Developer",
    company: "Mudbath",
    period: "Oct 2023 - Nov 2023",
    location: "New South Wales, Australia",
    project: { name: "DSI mobile app (Ground Support)" },
    tech: ["TypeScript", "React Native", "Redux", "Redux Thunk", "Azure Functions", "Contentful"],
    cicd: "AppVeyor",
    responsibilities: [
      "Configured and managed Contentful webhooks for triggering Azure Functions that generate JSON files containing view models customized for different languages.",
      "Optimized ETL function performance to deliver localized content efficiently and on time.",
    ],
  },
];

export const educationItems: Education[] = [
  {
    degree: "Information Technology Engineer",
    school: "Vietnam-Korea University of Information and Communications Technology",
    period: "Jul 2020 - May 2025",
    location: "Da Nang, Viet Nam",
    description:
      "Information Technology program focused on software engineering, web development, and information systems.",
  },
];
