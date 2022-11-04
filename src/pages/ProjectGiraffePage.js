import project_shoppingtool_animated from "../imgs/Sequenz_giraffe_FR12.gif"
import arrow_left from "../imgs/arrow_left.svg"
import { Link } from "react-router-dom";

function ProjectGiraffePage() {
    return (
        
        <div class="projectDetails">
            <Link to="/projects">
                <div id="whereamI">
                    Projects
                </div>
            </Link>

            <section>


                <div class="firstPageElement">
                
                {/* <span>
                    <img id="arrow_left" src={arrow_left}/>
                </span>
                <span> Go back</span> */}


                    <div id="projectGiraffeImage">
                        <img src={project_shoppingtool_animated} />
                    </div>
                    <div id="projectGiraffeText">
                        <h1>Giraffe</h1>
                        <hr/>

                        <h3>Context</h3>
                        <p >
                            This project was the second out of three main deliverables during my 3-months Coding Bootcamp at Ironhack. I collaborated with one fellow student (Lisa Hilterhaus) and we finalized this project within one week.
                        </p>

                        <div class="work-repartition">
                            <div class="part-design"/>
                            <div class="part-webdev"/>
                            <br/>
                            10% Design, 90% Web Development
                        </div>


                        <h3>Idea</h3>
                        <p class="highlight">
                        Who always stays on top of things? Giraffe is a tool that helps you to keep an overview of your shopping plans. You can see all your items of interest in one place. Just paste the link to the item and a product card that is being automatically created. Save and organize them in lists. This way you can compare items from different vendors easily and thus take more reasonable buying decisions.       
                                                </p>
                        
                        <h3>Used technologies</h3>
                        <p>
                            As required, we used Express as a foundation and Mongoose for models and database communication. A user authentification mechanism with password encryption is provided to protect the routes. 
                            The frontend is built without using any framework, but with dynamic views and handlebars.
                            
                            <br/>
                            As an extra step, we integrated a webscraping tool in our application to bring the core product feature (automatic card creation based on the link) to life.
                        </p>

                        <div class="listbox features">
                        
                        <div>
                        <h3> Realized features</h3>
                        <ul>
                        <li> create account / log in </li>
                            <li> add items by copy pasting the URL</li>
                            <li> (webscraping functionality)</li>
                            <li> edit information manually </li>
                            <li> save items in lists </li>
                            <li> search by words and filter by price </li>
                        </ul>
                        </div>

                        <div>

                        <h3> Features to be added</h3>
                        <ul>
                            <li> filter by more properties (eg. by shop) </li>
                            <li> reset filters</li>
                            <li> archive lists </li>
                            <li> change order of products </li>
                            <li> invite other users to lists </li>
                            <li> add products seen in local shop </li>
                            <li> (picture upload) </li>
                        </ul>
                        </div>

                    </div>

                    <h3> Reflection </h3>

                    <p>
                        Besides making the webscraping work, the frontend (at this point done with views and handlebars) was a big challenge, because we wanted to use many stateful elements and pages (eg. overlay modals, list tags,...). At this point we needed to perform rerender the page with every change of a variable, which resulted in a very complex handlebars management — thankfully frontend libraries such as React were invented!
                    </p>
                    
                    
                    </div>
                </div>
                <a href="https://shoppingtool.herokuapp.com/" target="_blank" >
                    <button class="primary-button"> Open live application* </button>
                </a>
                <p class="footnote">*The application is fully reponsive, but in terms of interaction patters (e.g. copy-paste), primarily designed for a desktop usage.</p>
                                
            </section>
        </div>
    )

}

export default ProjectGiraffePage;