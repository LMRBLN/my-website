import { useState } from "react";
import ProjectCard from "../components/ProjectCard";
import project_reporting from "../imgs/project_reporting.png";
import project_playpen from "../imgs/project_playpen.jpg";
import project_experimentationkit from "../imgs/project_experimentationkit.png";
import project_shoppingtool from "../imgs/project_shoppingtool.png";
import project_eventplanningtool from "../imgs/project_eventplanningtool.png";


function ProjectsPage() {

    const [showUXDesignProjects, setShowUXDesignProjects] = useState(true)
    const [showIndustrialDesignProjects, setShowIndustrialDesignProjects] = useState(true)
    const [showWebdevProjects, setShowWebdevProjects] = useState(true)

    const handleClickUX = () => {
        if (showUXDesignProjects===true) {
            setShowUXDesignProjects(false);
        }
        else {
            setShowUXDesignProjects(true)
        }
    }

    const handleClickIndustrial = () => {
        if (showIndustrialDesignProjects===true) {
            setShowIndustrialDesignProjects(false);
        }
        else {
            setShowIndustrialDesignProjects(true)
        }
    }

    const handleClickWebdev = () => {
        if (showWebdevProjects===true) {
            setShowWebdevProjects(false);
        }
        else {
            setShowWebdevProjects(true)
        }
    }

    const handleClickShowAll = () => {
        setShowIndustrialDesignProjects(true);
        setShowUXDesignProjects(true);
        setShowWebdevProjects(true);
    }


    return (
        <div id="projects-page">

            <div id="whereamI">
                projects
            </div>

            <section>

                <div class="allProjects firstPageElement">

                <div class="filter-button-group">
                    <button onClick={handleClickUX} class={showUXDesignProjects? "filter-button uxdesign":"filter-button uxdesign disabled"}> UX Design </button>
                    <button onClick={handleClickIndustrial} class={showIndustrialDesignProjects? "filter-button industrialdesign" : "filter-button industrialdesign disabled"}> Industrial Design </button>
                    <button onClick={handleClickWebdev} class={showWebdevProjects? "filter-button webdev" : "filter-button webdev disabled"}> Web Dev </button>
                    <button onClick={handleClickShowAll} class="filter-button showAll"> Show all </button>
                </div>

                <div id="projectCards">

                    {showUXDesignProjects===true | showWebdevProjects===true ?
                        <ProjectCard 
                            title="Rumble" 
                            image={project_eventplanningtool} 
                            alias="Or: How to stay zen when organizing events with your friends?"
                            identifier="rumble"
                            type="webdev">
                                <p> Idea | Design | Web Development </p>
                        </ProjectCard>
                        : null
                    }

                    {showUXDesignProjects===true | showWebdevProjects===true ?
                        <ProjectCard 
                            title="Giraffe" 
                            image={project_shoppingtool} 
                            alias="Or: How to not get lost in tabs jungle while shopping online?"
                            identifier="giraffe">
                            <p> Idea | Design | Web Development </p>
                        </ProjectCard>
                        : null
                    }

                        {/* <ProjectCard title="Stackypack" image={project_eventplanningtool}>
                            <p> Idea | Design | Web Development </p>
                            <p> or: a game to waste your time and l </p>
                        </ProjectCard> */}

                    {showUXDesignProjects===true  ?
                        <ProjectCard 
                            title="Security Reporting" 
                            image={project_reporting} 
                            alias="Or: How to collaborate easier on security related issues within the IT team?"
                            identifier="security-reporting">
                            <p> User Interviews | Concept | Visual Design </p>
                        </ProjectCard>
                        : null
                    }

                    {showIndustrialDesignProjects===true ?
                        <ProjectCard 
                            title="Algae Experimentation Kit" 
                            image={project_experimentationkit} 
                            alias="Or: How to get children enthustiastic about science and sustainability?"
                            identifier="algae-experimentation-kit">
                            <p> Technical Research | Learning & Game Concept | Design | Construction for manufacturing | Prototyping | Testing  </p>
                        </ProjectCard>
                        : null
                    }

                    {showIndustrialDesignProjects===true ?
                        <ProjectCard 
                            title="Inflatable playpen" 
                            image={project_playpen} 
                            alias="Or: How to be parent of a toddler without missing out?"
                            identifier="inflatable-playpen">
                            <p> Technical Research | Concept | Design | Construction for manufacturing | Prototyping | Testing  </p>
                        </ProjectCard>
                        : null
                    }

                {/* {showIndustrialDesignProjects===false && showUXDesignProjects===false && showWebdevProjects===false &&
                <p>please select section</p>} */}

                </div>

                </div>

            </section>


        </div>
    )
}

export default ProjectsPage;