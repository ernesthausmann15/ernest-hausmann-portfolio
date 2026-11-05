import BlurFade from "@/components/magicui/blur-fade";
import { ProjectCard } from "@/components/project-card";
import { SectionHeading } from "@/components/section/section-heading";
import { DATA } from "@/data/resume";

const BLUR_FADE_DELAY = 0.04;

export default function ProjectsSection() {
  return (
    <div className="flex min-h-0 flex-col gap-y-8">
      <SectionHeading
        label="Projects"
        title="Things I've built and shipped"
        description="Every project below is live. Vrymdor products come first, followed by full-stack work from my internships and bootcamp."
      />
      <div className="mx-auto grid max-w-[800px] grid-cols-1 gap-4 sm:grid-cols-2">
        {DATA.projects.map((project, id) => (
          <BlurFade key={project.title} delay={BLUR_FADE_DELAY * 12 + id * 0.05} className="h-full">
            <ProjectCard project={project} />
          </BlurFade>
        ))}
      </div>
    </div>
  );
}
