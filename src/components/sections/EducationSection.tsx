import { educationItems } from "@/data/portfolio";

const EducationSection = () => {
  return (
    <section id="education" className="border-b border-border">
      <div className="mx-auto max-w-3xl px-6 py-12">
        <h2 className="mb-6 text-2xl font-bold">Education</h2>

        <div className="space-y-6">
          {educationItems.map((edu) => (
            <article key={`${edu.degree}-${edu.school}`} className="space-y-1">
              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                <h3 className="text-lg font-semibold">{edu.degree}</h3>
                <span className="text-sm text-muted-foreground">{edu.period}</span>
              </div>
              <p className="text-foreground">{edu.school}</p>
              <p className="text-sm text-muted-foreground">{edu.location}</p>
              <p className="text-foreground">{edu.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
