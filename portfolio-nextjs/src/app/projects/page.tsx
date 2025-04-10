export const metadata = {
  title: "Projects | My Portfolio",
  description: "Learn more about my projects.",
};

import ProjectCard from "@/components/ProjectCard";
import projectData from "@/data/projects.json";

export default function ProjectsPage() {
  return (
    <section className="px-4 sm:px-6 lg:px-8 py-12 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold text-gray-900">Projects</h1>
        <p className="mt-2 text-gray-600">
          A curated selection of my creative, technical, and academic projects.
        </p>
      </div>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {projectData.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            image={project.image}
            link={project.link}
            tags={project.tags}
          />
        ))}
      </div>
    </section>
  );
}
