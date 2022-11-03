import project_eventplanningtool_animated from "../imgs/Sequenz_rumble_short_FR12.gif"
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
                        I realized this coding project as part of a 3-months Coding Bootcamp at Ironhack and within the last out of three total project weeks. Together with my team partner Lisa Hilterhaus, we chose to tackle a problem that we know from our own everyday life and which has to do with an overload of groups and notifications in our messenger apps.                        </p>


                        <h3>Idea</h3>
                        <p class="highlight">
                            Say goodbye to hundreds of different whatsapp chats and exploding messages and discussions. See and plan all your events in one place with your friends and decide on details on a democrativ basis or even plan a private poll for deciding on a gift for the host.                       
                        </p>

                        <h3>Used technologies</h3>
                        <p>
                            The main requirements for this delivery were to have a SPA frontend built with React and a REST API backend built with ExpressJS, MongoDB and Mongoose, so that users are able to perform all CRUD actions on the different data models.
                            As a bonus, we used Google's Material UI to get familiar with using component libraries.
                        </p>

                        {/* <p>
                        The application is built based on the MERN stack (MongoDB, Express, React and Node.JS).
                        </p> */}


                        <h3> Process </h3>
                        <div class="work-repartition">
                            <div class="part-design"/>
                            <div class="part-webdev"/>
                            <br/>
                            10% Design, 90% Web Development
                        </div>
                        
                        <p>
                            After a quick brainstorming, a prioritized list of envisaged app features, and some roughly sketched wireframes, we started building the backend of the application: In the first place, we established all data models including their dependencies in the form of referencing and embedding documents. In the next Step, we wrote the GET and POST routes and tested our API with Postman: At this point, we accomplished full functionality of the main CRUD operations based on user authentification. From here, we were able to start building the features in the frontend.
                        </p>



                        <div class="listbox features">
                        
                        <div>

                        <h3> Realized features</h3>
                        <ul>
                            <li> create account / log in </li>
                            <li> create event and edit details </li>
                            <li> invite other users </li>
                            <li> make other users co-hosts</li>
                            <li> accept/decline </li>
                            <li> create polls and vote </li>
                            <li> get list and calendar overview </li>
                            <li> upload picture (profile/event) </li>
                        </ul>
                        </div>

                        <div>

                        <h3> Features to be added</h3>
                        <ul>
                            <li> add friends </li>
                            <li> create friends groups </li>
                            <li> filter/search events </li>
                            <li> seed friends birthdays in calendar </li>
                            <li> create threads and add comments </li>
                            <li> send private messages </li>
                        </ul>
                        </div>

                        </div>
 
                        <h3> Reflection </h3>

                        <p>
                        One of the biggest challenges during this project was a highly interdependent data model system, that needed to be updated and tested with every added feature. 
                        <br/>
                        Also, I found that using a component library seemed not to be the perfect choice in this case: Having in mind a very exact idea of how the app should look, it felt like changing the predefined component properties produced more work than if we had built and styled the components from scratch. 
                        <br/>
                        Obviously, having worked on this project in a strongly limited timeframe, besides the listed features, there is room left for improvements concerning the user experience. Full responsiveness is a must. Microinteractions can make the experience more dynamic and fun. And last but not least, the concept is dedicated to be developed as a native application with extra functionalities for mobile usage, such as notifications and integration with other social media platforms.
                        </p>

                        <a href="https://eventplanningtool.netlify.app/" target="_blank">
                        <button class="primary-button"> Open live application* </button>
                        </a>
                        <p class="footnote">*The application has been designed for mobile devices, so in case you are naviagting on a desktop, please set your browser to a mobile screen format</p>
                    
                    
                    </div>
                </div>

            </section>
        </div>
    )

}

export default ProjectRumblePage;