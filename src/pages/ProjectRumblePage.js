import project_eventplanningtool_animated from "../imgs/Sequenz_rumble_short_FR12.gif"
// import project_eventplanningtool_animated from "../imgs/project-eventplanningtool-animated.gif"
import { Link
 } from "react-router-dom";
function ProjectRumblePage() {
    return (
        
        <div class="projectDetails">
            <Link to="/projects">
                <div id="whereamI">
                    Projects
                </div>
            </Link>

            <section>

                <div class="projectBody firstPageElement">
                    <div id="projectRumbleImage">
                        <img src={project_eventplanningtool_animated} />
                    </div>
                    <div id="projectRumbleText">
                        <h1>RUMBLE</h1>
                        <hr/>
                        <h3>Context</h3>
                        <p>
                            I realized this coding project within the ironhack bootcamp (2022/08) in cooperation with Lisa Hilterhaus and during 10 days.
                        </p>

                        <div class="work-repartition">
                            <div class="part-design"/>
                            <div class="part-webdev"/>
                            <br/>
                            10% Design, 90% Web Development
                        </div>

                        <h3>Idea</h3>
                        <p>
                            Say goodbye to hundreds of different whatsapp chats and exploding messages and discussions. See and plan all your events in one place with your friends and decide on details based on votings (red wine or white wine?) or even plan a private poll for deciding on a gift for the amazing host of the event you are attending.                       
                        </p>

                        <h3>Used technologies</h3>
                        <p>
                            The application is built based on the MERN stack (MongoDB, Express, React and Node.JS).
                        </p>

                        <h3> Main features</h3>

                        <ul>
                            <li> create account / log in </li>
                            <li> create event and add details </li>
                            <li> invite friends </li>
                            <li> accept/decline </li>
                            <li> create polls and vote </li>
                            <li> list and calendar overview </li>
                            <li> upload pictures (profile picture / event header) </li>
                        </ul>
                    
                    
                    </div>
                </div>
                <a href="https://eventplanningtool.netlify.app/" target="_blank">
                    <button class="primary-button"> Open live application* </button>
                </a>
                <p class="footnote">*The application has been designed for mobile devices, so in case you are naviagting on a desktop, please set your browser to a mobile screen format</p>
                    
            </section>
        </div>
    )

}

export default ProjectRumblePage;