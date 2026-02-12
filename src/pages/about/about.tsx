import styles from './aboutStyle.module.css';
import details from '../../assets/user';
import ProjectCard from '../../components/ProjectCard/projectCard';

const AboutMe = () => {
  return (
    <div>
      <h1 className="header blue">About Me ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~</h1>
      <div className={styles.bodyWrapper}>
        <div className="">
          {/* blurb */}
          {details.about.blurb}
        </div>
        <ProjectCard image={details.about.image}/>
      </div>
    </div>
  );
};

export default AboutMe;
