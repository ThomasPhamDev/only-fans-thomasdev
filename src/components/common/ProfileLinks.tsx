import Link from "next/link";
import { profile } from "@/data/portfolio";

const iconClass = "h-6 w-6";

const links = [
  {
    label: "GitHub",
    href: profile.github,
    icon: (
      <svg className={iconClass} fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.21 11.39.6.11.79-.26.79-.58v-2.23c-3.34.73-4.03-1.42-4.03-1.42-.55-1.39-1.33-1.76-1.33-1.76-1.09-.75.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.07 1.83 2.81 1.3 3.49.99.11-.78.42-1.3.76-1.6-2.67-.31-5.47-1.34-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23A11.5 11.5 0 0112 5.8c1.02.01 2.05.14 3 .4 2.29-1.55 3.3-1.23 3.3-1.23.65 1.66.24 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.62-5.48 5.92.43.37.82 1.1.82 2.22v3.29c0 .32.19.69.8.58A12.01 12.01 0 0024 12c0-6.63-5.37-12-12-12z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: profile.linkedin,
    icon: (
      <svg className={iconClass} fill="currentColor" viewBox="0 0 24 24">
        <path d="M19 0H5C2.24 0 0 2.24 0 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5V5c0-2.76-2.24-5-5-5zM8.25 19h-3V9h3v10zM6.75 7.73c-.97 0-1.75-.8-1.75-1.73 0-.92.78-1.73 1.75-1.73s1.75.81 1.75 1.73c0 .93-.78 1.73-1.75 1.73zM21 19h-3v-5.6c0-1.37-.03-3.13-1.9-3.13-1.91 0-2.2 1.49-2.2 3.03V19h-3V9h2.88v1.37h.04c.4-.76 1.39-1.56 2.85-1.56 3.05 0 3.62 2.01 3.62 4.62V19z" />
      </svg>
    ),
  },
  {
    label: "CV",
    href: "/cv",
    icon: (
      <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 3h6l5 5v13H7V3z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 3v6h5M9 14h6M9 18h6" />
      </svg>
    ),
  },
  {
    label: "Email",
    href: `mailto:${profile.email}`,
    icon: (
      <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16v12H4V6z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7l8 6 8-6" />
      </svg>
    ),
  },
];

const ProfileLinks = ({ align = "start" }: { align?: "start" | "end" | "center" }) => {
  const justifyClass = {
    start: "justify-start",
    end: "justify-end",
    center: "justify-center",
  }[align];

  return (
    <div className={`flex items-center gap-4 ${justifyClass}`}>
      {links.map((link) => (
        <Link
          key={link.label}
          href={link.href}
          target={link.href.startsWith("http") ? "_blank" : undefined}
          rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
          aria-label={link.label}
          title={link.label}
          className="text-muted-foreground hover:text-primary"
        >
          {link.icon}
        </Link>
      ))}
    </div>
  );
};

export default ProfileLinks;
