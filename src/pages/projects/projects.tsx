import ProjectCard from '../../components/ProjectCard/projectCard.tsx';
import details from '../../assets/user.ts';
import styles from './projectsStyle.module.css';

const projects = details.projects;

const Projects = () => {
  return (
    <div>
      <h1 className="header blue">
        Projects ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
      </h1>
      <div className={styles.projectWrapper}>
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
