import picture_me from "../imgs/me_wide.JPG";
import RandomFactGenerator from "../components/RandomFactGenerator";
import { AnimationOnScroll } from "react-animation-on-scroll";

function AboutPage() {
    return (
        <div id="about-page">

            <div id="whereamI">
                About
            </div>

            <section>

                <div id="picture-and-story" class="firstPageElement animate__animated animate__fadeIn">
                    <div id="picture-me">
                        <img src={picture_me} alt="picture of lara rockenstein"/>
                    </div>

                    <div id="story-me">
                        <h1>
                            My story
                        </h1>
                        <hr/>

                        <p>
                        My journey started on the technical side: during my studies of engineering sciences, I learned to acquire new fields in a short time, eg. by abstracting principles instead of memorizing details, and not being afraid of things looking complex in the beginning.                             <br/>
                            <br/>
                            This is where I was involved in product development for the first time. I felt the need though to focus more on the creative and aesthetical aspects of it, so I continued my studies in Industrial Design. The most important thing I understood here was that knowledge is not the most important factor to develop a good product, but empathy is. And, that it is useful to try things out instead of thinking about them for too long.                            <br/>
                            <br/>
                            Having entered a mindset of human-centered design as well as an iterative, test-based approach, the step into UX Design (and the digital world) after I finished my master, felt like a small one. Certainly, there is a little switch of focus, eg. by the fact that the concept of ergonomy refers more to perception psychology and learning as well as the fact that graphic and information design has evidently a bigger emphasis. Two things I had always been particularly interested in anyway!                            <br/>
                            <br/>    
                            Working as a UX Designer in the IT industry - and thus closely together with software engineers and UI developers - for one year, I decided to enroll in a 3-months full-stack web development boot camp. I was motivated by the joy of coding but also by believing that understanding the technologies and processes better has a positive impact on designing digital experiences.                            <br/>
                            <br/>
                            Now I want to use everything I learned in a purposeful context and bring to life ideas and concepts with practical and social benefits. 
                        </p>
                    </div>
                
                </div>

            </section>

            <section>
                <h1>Industry Experience</h1>
                <hr/>

                <AnimationOnScroll animateIn="animate__fadeIn" >

                    <div id="experience">

                        <div>
                            <a href="https://www.nutanix.com/de">
                                <h3>Nutanix</h3>
                            </a>
                            <p> UX/UI Designer </p>
                        </div>

                        <div>
                            <a href="https://www.unyt.berlin/de/">
                                <h3>unyt </h3>
                            </a>
                            <p> Industrial Design Trainee </p>
                        </div>

                        <div>
                            <p> Student and self-employed Project cooperations with </p>
                            <a href="https://www.roquette.com/">
                                <h3>
                                    Roquette
                                </h3>
                            </a>

                            <a href="https://intema-gmbh.de/">
                                <h3>
                                    Intema
                                </h3>
                            </a>

                            <a href="https://www.petromax.de/">
                                <h3>
                                    Petromax
                                </h3>
                            </a>

                            <a href="https://anaqor.de/">
                                <h3>
                                    Anaqor
                                </h3>
                            </a>
                        </div>

                    </div>
                </AnimationOnScroll>
            </section>

            <section>
                <h1>Education</h1>
                <hr/>


                <AnimationOnScroll animateIn="animate__fadeIn" >
                    <div id="education">

                        <div>
                            <h3>Ironhack </h3>
                            <p> Full Stack Web Development Bootcamp  </p>
                        </div>

                        <div>
                            <h3>Otto-von-Guericke-Universität Magdeburg </h3>
                            <p> M. Sc. Integrated Design Engineering </p>
                        </div>

                        <div>
                            <h3>Technische Universität Berlin </h3>
                            <p> B. Sc. Engineering Science </p>
                        </div>
                    </div>
                </AnimationOnScroll>
            </section>

            <section>


                <h1>
                    Software & Languages
                </h1>
                <AnimationOnScroll animateIn="animate__fadeIn" >

                    <div id="skills">

                        <div>
                            <h3>Web Dev</h3>
                            <ul>
                                <li> Javascript (ES6) </li>
                                <li> NodeJS </li>
                                <li> Express </li>
                                <li> MongoDB </li>
                                <li> React </li>
                                <li> HTML, CSS  </li>
                            </ul>
                        </div>


                        <div>
                            <h3>Design</h3>  
                            <ul>
                                <li> Figma  </li>
                                <li> Adobe CS (Ps, Id, Ai, Xd, Pr) </li>
                                <li> SolidWorks (Modelling) </li>
                                <li> Keyshot (Rendering)</li>
                            </ul>
                        </div>

                        <div>
                            <h3>Communication</h3>
                            <ul>
                                <li> German (native)  </li>
                                <li> English (fluent) </li>
                                <li> French (fluent) </li>
                                <li> Spanish (fluent) </li>
                            </ul>
                        </div>
                    </div>
                </AnimationOnScroll>

                <a href="https://drive.google.com/file/d/1xVjkNL3JovVgyabm3Y8QN651wfw8Vi2b/view?usp=sharing" target="_blank"> 
                    <button class="primary-button"> View my CV as pdf </button>
                </a>                

            </section>


            {/* <section>
                <h1>
                    more about me
                </h1>
                <hr/>
            </section> */}


        </div>
    
    )
}

export default AboutPage;