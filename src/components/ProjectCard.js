// import { AnimationOnScroll } from 'react-animation-on-scroll';
import { Link } from "react-router-dom";
// import {useState} from 'react';

function ProjectCard(props) {

    // const [isHovering, setIsHovering] = useState(false);

    // const handleMouseOver = () => {
    //   setIsHovering(true);
    // };
  
    // const handleMouseOut = () => {
    //   setIsHovering(false);
    // };
    
    return (

        <div class="projectCard">
        {/* <AnimationOnScroll animateIn="animate__fadeIn"> */}
            <div class="projectImage">

                <img src={props.image} alt={props.title}/>

                {/* <Link to={"/" + {props.identifier}}> */}
                <Link to={`/projects/${props.identifier}`}>
                    <div class="overlay"> 
                        <div class="overlayText">
                            <p id="or"> or: </p>
                            <br/>
                            {props.alias} 
                        </div>
                    </div>
                </Link>
            </div>
            <h3>{props.title}</h3>
            {props.children}
        {/* </AnimationOnScroll> */}
        </div>
    )
}

export default ProjectCard;