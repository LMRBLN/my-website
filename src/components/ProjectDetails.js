

function ProjectDetails(props) {
    return (
        
        <div class="projectDetails">
            <div class="projectImage">
                <img src={props.image} alt={props.title}/>

            </div>
            <h3>{props.title}</h3>
            {props.children}
        </div>
    )
}

export default ProjectDetails;