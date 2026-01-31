import Tape from "./tape";
import "./projectCardStyle.css";

const ProjectCard = () => {
  return (
    <div className="project-card">
      <div className="container">
        <Tape color="pink" angle={30} />

        <div className="body">
          <figure className="thumbnail"></figure>
          <div className="text-wrapper">
            <header className="subheading">Lorem ipsum dolor sit</header>
            <div className="text">
              Lorem ipsum dolor sit amet consectetur adipiscing elit quisque
              faucibus ex sapien vitae pellentesque sem placerat in id cursus mi
              pretium tellus duis convallis tempus.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
