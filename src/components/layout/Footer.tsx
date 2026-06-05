import ProfileLinks from "@/components/common/ProfileLinks";
import { profile } from "@/data/portfolio";

const Footer = () => {
  return (
    <footer className="bg-background">
      <div className="mx-auto flex max-w-3xl flex-col gap-5 px-6 py-8 md:flex-row md:items-center md:justify-between">
        <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} {profile.displayName}</p>
        <div className="flex flex-col gap-3 md:items-end">
          <ProfileLinks align="start" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
