import { projects } from "../assets/componentLists/projectList";
import ProjectCard from "./ProjectCard";


export default function ProjectsSection({ setForm }) {

  // console.log("PROJECTSECTION'S PROJECTS INFO: ", projects);
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
              image={project.image}
              site={project.site}
              github={project.githubLink}
              position={project.position}
              techUsed={project.techUsed}
              setForm={setForm}
            />
          ))}
        </div>
      </section>
  );
};