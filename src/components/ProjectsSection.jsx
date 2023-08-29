import { projects } from "../assets/componentLists/projectList";
import ProjectCard from "./ProjectCard";


export default function ProjectsSection() {
  // console.log("FIRST PROJECT IN THE LIST'S INFO: ", projects[0]);

  return (
      <section id="projects-section">
        <h1 className="banner">Featured Projects</h1>
        <div className="projects">
          {projects.map((project, i) => (
            <ProjectCard
              key={i}
              title={project.title}
              description={project.description}
              image={project.image}
              site={project.site}
              github={project.githubLink}
              position={project.position}
            />
          ))}
        </div>
      </section>
  );
};