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
                            I realized this project within the ironhack bootcamp (2022/07) in cooperation with Lisa Hilterhaus and during 8 days.
                        </p>

                        <div class="work-repartition">
                            <div class="part-design"/>
                            <div class="part-webdev"/>
                            <br/>
                            10% Design, 90% Web Development
                        </div>


                        <h3>Idea</h3>
                        <p class="highlight">
                            This tool helps you to always keep an overview about your shopping plans. With giraffe you can create shopping lists and oversee all your items of interest, wherever you found it. Just paste the link to your item of interest and save the product card that is getting automatically created. This way you can collect and compare items from different vendors easily and thus take better buying decisions.                        
                        </p>
                        
                        <h3>Used technologies</h3>
                        <p>
                            The fullstack application is built with Express, MongoDB and NodeJS. The frontend of the application is built without using any framework.                         </p>
                        <h3> Main features</h3>

                        <ul>
                            <li> create account / log in </li>
                            <li> add items by copy pasting the URL (webscraping functionality)</li>
                            <li> edit information manually </li>
                            <li> save items in lists </li>
                            <li> search by words and filter by price </li>
                        </ul>
                    
                    
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