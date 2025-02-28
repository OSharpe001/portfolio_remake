import { projects } from "../assets/componentLists/projectList";
import ProjectCard from "./ProjectCard";


export default function ProjectsSection({ setDetailPage }) {

  return (
      <section id="projects-section">
        <h1 className="banner">Featured Projects</h1>
        <div className="projects">
          {projects.map((project, i) => (
            <ProjectCard
              key={i}
              title={project.title}
              description={project.description}
              details={project.details}
              timeLine={project.timeLine}
              image={project.image}
              site={project.site}
              github={project.githubLink}
              position={project.position}
              techUsed={project.techUsed}
              setDetailPage={setDetailPage}
            />
          ))}
        </div>
      </section>
  );
};