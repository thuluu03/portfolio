import Tape from './tape';
import './projectCardStyle.css';

const ProjectCard = ({
  header,
  blurb,
  link,
  image,
}: {
  header: string; // title of the project
  blurb: string; // brief description of project
  link: string; // link to github repo
  image: string; //pathway to the image
}) => {
  return (
    <div className="project-card">
      <div className="container">
        <Tape color="pink" angle={30} />

        <div className="body">
          <figure className="thumbnail"></figure>
          <div className="text-wrapper">
            <header className="subheading">{header}</header>
            <div className="text">{blurb}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
