function ProjectCard(props) {
    return (
        <div class="projectCard">
            <div class="projectImage">
                <img src={props.image} alt={props.title}/>
            </div>
            <h3>{props.title}</h3>
            {props.children}
        </div>
    )
}

export default ProjectCard;