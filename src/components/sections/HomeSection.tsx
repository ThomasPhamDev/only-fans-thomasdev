import Image from "next/image";
import ProfileLinks from "@/components/common/ProfileLinks";
import { heroTechStack, profile } from "@/data/portfolio";

const HomeSection = () => {
  return (
    <section id="home" className="border-b border-border">
      <div className="mx-auto max-w-3xl px-6 py-10 md:py-16">
        <div className="grid items-center gap-8 md:grid-cols-[160px_1fr]">
          <div className="mx-auto h-36 w-36 overflow-hidden rounded-full md:mx-0 md:h-40 md:w-40">
            <Image
              src={profile.avatar}
              alt={profile.name}
              width={160}
              height={160}
              className="h-full w-full object-cover"
              priority
            />
          </div>

          <div className="space-y-4 text-center md:text-left">
            <h1 className="text-3xl font-bold leading-tight md:text-4xl">
              Hi, I&apos;m {profile.displayName}.
            </h1>
            <p className="max-w-2xl text-foreground">
              {profile.summary}
            </p>
            <p className="font-mono text-sm text-muted-foreground">
              Tech stack: {heroTechStack.join(" · ")}
            </p>
            <ProfileLinks align="start" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeSection;
