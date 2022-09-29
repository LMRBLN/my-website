import { AnimationOnScroll } from 'react-animation-on-scroll';

function ProjectCard(props) {
    return (
        
        <div class="projectCard">
        <AnimationOnScroll animateIn="animate__fadeIn">
            <div class="projectImage">
                <img src={props.image} alt={props.title}/>
            </div>
            <h3>{props.title}</h3>
            {props.children}
        </AnimationOnScroll>
        </div>
    )
}

export default ProjectCard;