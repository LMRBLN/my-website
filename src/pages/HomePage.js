// import { Animator, ScrollContainer, ScrollPage, batch, Fade, FadeIn, FadeOut, Move, MoveIn, MoveOut, Sticky, StickyIn, StickyOut, Zoom, ZoomIn, ZoomOut } from "react-scroll-motion";
// import ScrollAnimation from 'react-animate-on-scroll';
// import "animate.css/animate.min.css";
import logo_initials from "../imgs/logo_initials.svg";
import logo_fullname from "../imgs/logo_fullname.svg";
import arrow_down from "../imgs/arrow_down.svg";
import icon_science from "../imgs/icon_science.png";
import icon_collab from "../imgs/icon_collab.png";
import icon_playful from "../imgs/icon_playful.png";
import ProjectCard from "../components/ProjectCard";


function HomePage() {

    return (
        <div id="home-page">
            <div id="intro">
                <div>
                    <div id="logo_initials">
                        <img src={logo_initials} alt="initials"/>
                    </div>

                    <div id="logo_fullname">
                        <img src={logo_fullname} alt="fullname"/>
                    </div>

                    <div>
                        <p id="intro-name">
                            I am Lara Rockenstein,
                        </p>
                        <p id="intro-description">
                            a <span> product designer </span> and <span> web developer </span> with a background in engineering sciences.
                        </p>
                    </div>

                    <a href="#principles">
                        <div id="arrow_down">
                            <img src={arrow_down} alt="arrow down"/>
                        </div>
                    </a>

                </div>
            </div>

            <section id="principles">
                <h1> 
                    My principles
                </h1>
                <hr/>
                
                <div id="principles-description">

                    <div id="scienctific-approach">
                        <img src={icon_science} alt="icon scientific approach"/>
                        <div>
                            <h3>
                                Scientific approach
                            </h3>
                            <p>
                                Originating from natural sciences, I aim for a data driven and methodologic approach in the product development process.
                            </p>
                        </div>
                    </div>

                    <div id="interdisciplinary-collaboration">
                        <div>
                            <h3>
                                Interdisciplinary Collaboration
                            </h3>
                            <p>
                                Listening to people matters, from users to team members and stakeholders. Good design is result of collaboration.
                            </p>
                        </div>
                        <img src={icon_collab} alt="icon interdisciplinary collaboration"/>
                    </div>

                    <div id="playful-mindset">
                        <img src={icon_playful} alt="icon playful mindset"/>
                        <div>
                            <h3>
                                Playful mindset
                            </h3>
                            <p>
                                Love to visual details and gamification can help to make complex information systems not only more usable but enjoyable.
                            </p>
                        </div>
                </div>

                </div>

                <a href="/about">
                    <button class="primary-button"> Learn more about me </button>
                </a>

            </section>

            <section id="projects">
                <h1>
                    My Projects
                </h1>
                <hr/>

                <div id="projectCards">

                    <ProjectCard title="Project Title">
                        <p> User Research | Editor Conceptualisation | Information Design </p>
                    </ProjectCard>

                    <ProjectCard title="Project Title">
                        <p> User Research | Editor Conceptualisation | Information Design </p>
                    </ProjectCard>

                    <ProjectCard title="Project Title">
                        <p> User Research | Editor Conceptualisation | Information Design </p>
                    </ProjectCard>

                    <ProjectCard title="Project Title">
                        <p> User Research | Editor Conceptualisation | Information Design </p>
                    </ProjectCard>

                </div>

                <a href="/projects">
                    <button class="primary-button"> See all projects </button>
                </a>

            </section>
        </div>
    )
}

export default HomePage;