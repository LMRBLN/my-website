import { useState } from "react";
import ProjectCard from "../components/ProjectCard";

function ProjectsPage() {

    const [showDesignProjects, setShowDesignProjects] = useState(true)
    const [showWebdevProjects, setShowWebdevProjects] = useState(true)

    return (
        <div id="projects-page">

            <div id="whereamI">
                projects
            </div>
            <section>

                <button class="filter-button design"> Design Projects </button>
                <button class="filter-button webdev"> Web Dev Projects </button>

                <div id="projectCards">

                </div>

                <div style={{height:"50vh"}}> 
                    coming soon 
                </div>
            </section>


        </div>
    )
}

export default ProjectsPage;