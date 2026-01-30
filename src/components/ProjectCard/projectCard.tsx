import Tape from "./tape";
import './projectCardStyle.css';

const ProjectCard = () => {
    return (
        <div>
            <div className="container">

                <Tape color='pink' angle={30}/>

                <div className="body">
                    <div className="thumbnail">
                        <div className="container">

                        </div>
                    </div>
                    <div className="subheading">
                        Lorem ipsum dolor sit
                    </div>
                    <div className="text">
                        Lorem ipsum dolor sit amet consectetur adipiscing elit 
                        quisque faucibus ex sapien vitae pellentesque sem 
                        placerat in id cursus mi pretium tellus duis convallis 
                        tempus.
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard;