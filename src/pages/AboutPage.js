import picture_me from "../imgs/me_wide.JPG";
import RandomFactGenerator from "../components/RandomFactGenerator";

function AboutPage() {
    return (
        <div id="about-page">

            <div id="whereamI">
                About
            </div>

            <section>

                <div id="picture-and-story">
                    <div id="picture-me">
                        <img src={picture_me} alt="picture of lara rockenstein"/>
                    </div>

                    <div id="story-me">
                        <h1>
                            My story
                        </h1>
                        <hr/>

                        <p>
                            It was fun to solve problems in an analytic way but but I felt like something was missing here and it got confirmed when I started my studies in design. The most important thing I learned here is that for developing a good product, technical know how will never be enough. Within different industrial design projects I lead, interdiciplinary team constellations turned out to be a very important factor. Putting yourself into the shoes of a person who is not at all part of the development process was crucial. And even if can hurt a bit, mostly the simpler works better than the one you’re most proud of.
                        </p>
                    </div>
                
                </div>

            </section>

            <section>
                <h1>Industry Experience</h1>
                <hr/>
                <div id="experience">

                    <div>
                        <h3>Nutanix</h3>
                        <p> UX/UI Designer </p>
                    </div>

                    <div>
                        <h3>unyt </h3>
                        <p> Industrial Design Trainee </p>
                    </div>
                </div>
            </section>

            <section>
                <h1>Education</h1>
                <hr/>
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
            </section>

            <section>


                <h1>
                    Software & Languages
                </h1>
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
                {/* <a href="../documents/220824_CV_LaraRockenstein.pdf"> click me</a> */}
                {/* <a href="https://acrobat.adobe.com/link/track?uri=urn:aaid:scds:US:becc99aa-0651-386c-a81e-82ec3a3309e8"> click me</a> */}
            </section>
                
            <button class="primary-button"> Download my CV </button>

            <section>
                <h1>
                    more about me
                </h1>
                <hr/>

                <RandomFactGenerator/>
            </section>


        </div>
    
    )
}

export default AboutPage;