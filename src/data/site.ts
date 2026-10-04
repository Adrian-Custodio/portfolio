export const profile = {
  name: "Adrian Custodio",
  initials: "AC",
  title: "SOC Analyst (Entry-Level)",
  // one-liner used in the hero and page metadata
  tagline:
    "CS undergrad turning a home SOC lab into real detection and investigation skills: Wazuh, Sysmon, Atomic Red Team, MITRE ATT&CK.",
  location: "San Felipe, Naga City",
  email: "senpaileviii@gmail.com",
  phone: "+63 962 155 8395",
  github: "https://github.com/Adrian-Custodio",
  linkedin: "https://www.linkedin.com/in/adrian-custodio-0155723b0/",
  summary:
    "Computer Science undergraduate targeting an entry-level SOC Analyst role, with hands-on experience in detection engineering and digital forensics alongside a technical foundation in Python and Django. Built a self-hosted SOC lab (Wazuh, Sysmon, Atomic Red Team) to practice detection and investigation workflows, plus a steganalysis tool for image-based forensic analysis. Currently pursuing the Google Cybersecurity and EC-Council certifications. Brings a customer service background and solid communication and problem-solving skills to security operations teams.",
};

export const navLinks = [
  { href: "/#about", label: "about" },
  { href: "/#skills", label: "skills" },
  { href: "/#projects", label: "projects" },
  { href: "/#experience", label: "experience" },
  { href: "/#certifications", label: "certs" },
  { href: "/#contact", label: "contact" },
];

export const securitySkills = [
  "SIEM administration (Wazuh)",
  "Windows telemetry (Sysmon)",
  "Attack simulation (Atomic Red Team)",
  "MITRE ATT&CK framework",
  "Lab network segmentation (VirtualBox)",
  "Image-based digital forensics (steganalysis)",
];

export const developmentSkills = ["Python", "Django", "DeepFace (Facenet)", "Windows deployment/packaging"];

export const professionalSkills = [
  "Strong verbal and written communication",
  "Computer literacy and technical adaptability",
  "Problem-solving and critical thinking",
  "Time management and multitasking",
  "Team collaboration and interpersonal skills",
  "Ability to work under pressure",
  "Attention to detail",
  "Fast learner with new systems and tools",
];

export type Certification = {
  name: string;
  status: string;
};

export const certifications: Certification[] = [
  { name: "Google Cybersecurity Professional Certificate", status: "In progress" },
  { name: "EC-Council Certification", status: "In progress" },
];

export type ExperienceEntry = {
  role: string;
  org: string;
  period: string;
  points: string[];
};

export const experience: ExperienceEntry[] = [
  {
    role: "Customer Service Representative",
    org: "Concentrix, Naga (Seasonal)",
    period: "Dec 2025 - Jan 2026",
    points: [
      "Handled high-volume inbound/outbound customer calls, resolving inquiries while meeting AHT, CSAT, and QA targets",
      "Followed escalation procedures and company protocols, documenting all interactions accurately in CRM tools",
    ],
  },
  {
    role: "IT/Network Intern",
    org: "Ateneo de Naga University, Network Operations and Computer Services",
    period: "Jul 2025 - Aug 2025 (200 hours)",
    points: [
      "Troubleshot network connectivity issues and responded to help-desk calls from university staff and employees, resolving reports end-to-end",
      "Performed hands-on infrastructure work, including terminating Cat6 Ethernet cables and setting up network switches",
    ],
  },
];

export type EducationEntry = {
  school: string;
  program: string;
  period: string;
};

export const education: EducationEntry[] = [
  {
    school: "Ateneo de Naga University",
    program: "BS Computer Science (Undergraduate)",
    period: "2020 - 2024",
  },
  {
    school: "STI College Naga (Senior High School)",
    program: "Accountancy, Business, and Management",
    period: "2018 - 2020",
  },
];

export type Project = {
  slug: string;
  name: string;
  summary: string;
  kind: string; // short label shown on the card, e.g. "lab", "tool"
  deployment?: string;
  stack: string[];
  href?: string;
  liveHref?: string;
};

// Projects are added once each one is migrated into this repo (or, for
// projects that just live on GitHub, once the repo itself is public).
export const projects: Project[] = [
  {
    slug: "wazuh-soc-lab",
    name: "Home SOC Detection Lab",
    kind: "lab",
    summary:
      "Self-built SOC lab simulating a detect-and-investigate workflow: Wazuh SIEM monitoring a Windows endpoint via Sysmon, attacked with Atomic Red Team techniques mapped to MITRE ATT&CK.",
    stack: ["Wazuh", "Sysmon", "Atomic Red Team", "MITRE ATT&CK", "VirtualBox"],
    href: "https://github.com/Adrian-Custodio/Wazuh-SOC-Detection-Lab",
  },
  {
    slug: "steganalysis",
    name: "Steganalysis Detection Tool",
    kind: "tool",
    summary:
      "Upload a PNG/BMP image and it flags likely LSB (least-significant-bit) steganography using two statistical methods, chi-square attack and RS analysis, returning a clean/suspicious/likely-stego verdict for each.",
    deployment:
      "Deployed as two separate services from one repo: the Next.js frontend on Vercel and the FastAPI backend on Render, talking to each other over a REST API with CORS locked to the live frontend origin.",
    stack: ["Next.js", "FastAPI", "Python", "Vercel", "Render"],
    href: "https://github.com/Adrian-Custodio/Steganalysis",
    liveHref: "https://steganalysis-eight.vercel.app",
  },
];
