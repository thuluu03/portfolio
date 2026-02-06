import ProjectCard from '../../components/ProjectCard/projectCard.tsx';
import details from '../../assets/user.ts';
import './projectsStyle.css';

const projects = details.projects;

const Projects = () => {
  return (
    <div>
      <h2>Projects</h2>
      <div className="project-wrapper">
        {projects.map((x) => {
          return (
            <ProjectCard
              key={x.name}
              header={x.name}
              blurb={x.blurb}
              link={x.link}
              image=""
            />
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
