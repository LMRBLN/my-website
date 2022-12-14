// import { Animator, ScrollContainer, ScrollPage, batch, Fade, FadeIn, FadeOut, Move, MoveIn, MoveOut, Sticky, StickyIn, StickyOut, Zoom, ZoomIn, ZoomOut } from "react-scroll-motion";
import { AnimationOnScroll } from 'react-animation-on-scroll';
import "animate.css/animate.min.css";
import logo_initials from "../imgs/logo_initials.svg";
import logo_fullname from "../imgs/logo_fullname.svg";
import arrow_down from "../imgs/arrow_down.svg";
import arrow_right from "../imgs/arrow_right.svg";
import icon_science from "../imgs/icon_science.svg";
import icon_collab from "../imgs/icon_collab.svg";
import icon_playful from "../imgs/icon_playful.svg";
import ProjectCard from "../components/ProjectCard";
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import project_reporting from "../imgs/project_reporting.png";
import project_playpen from "../imgs/project_playpen.jpg";
import project_experimentationkit from "../imgs/project_experimentationkit.png";
import project_shoppingtool from "../imgs/project_shoppingtool.png";
import project_eventplanningtool from "../imgs/project_eventplanningtool.png";
import Tetris from '../components/Tetris';
import menu_icon_close from "../../src/imgs/menu_icon_close.svg"



function HomePage() {
    
    const [game, setGame] = useState(false);


        return (
            
            <div id="home-page">

            {game &&
                <div id="tetris">
                    <Tetris/>
                    <div id="menu-icon-close-tetris" onClick={()=> setGame(false)}>
                            <img src={menu_icon_close} alt="close menu"/>
                    </div>
                </div>
            }


            <div id="intro" class="animate__animated animate__fadeIn">
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
                            a <Link to="/projects"> product designer  </Link> and <Link to="/projects"> web developer </Link> with a background in engineering sciences.
                        </p>
                    </div>

                    <a href="#principles">
                        <div id="arrow_down">
                            <img src={arrow_down} alt="arrow down"/>
                        </div>
                    </a>

                    <button onClick={()=> setGame(true)}class="goplay highlight"> Go play! </button>

                </div>
            </div>

            <section id="principles">
                <h1> 
                    My principles
                </h1>
                <hr/>
                
                <AnimationOnScroll animateIn="animate__fadeIn" >
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
                                    Interdisciplinary collaboration
                                </h3>
                                <p>
                                    Listening to people matters, from users to team members and stakeholders. Good design results from engagement.
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

                <Link to="/about">
                    <button class="primary-button"> Learn more about me <img src={arrow_right}/> </button>
                </Link>
                </AnimationOnScroll>

            </section>

            <section id="projects">
                <h1>
                    My Projects
                </h1>
                <hr/>

                <div id="projectCards">

                    <ProjectCard 
                        title="Rumble" 
                        image={project_eventplanningtool} 
                        alias="How to stay zen when organizing events with your friends?"
                        identifier="rumble"
                        type="webdev">
                            <p> Idea | Design | Web Development </p>
                    </ProjectCard>

                    <ProjectCard 
                        title="Giraffe" 
                        image={project_shoppingtool} 
                        alias="How to not get lost in the tabs jungle while shopping online?"
                        identifier="giraffe">
                        <p> Idea | Design | Web Development </p>
                    </ProjectCard>


                    {/* <ProjectCard title="Stackypack" image={project_eventplanningtool}>
                        <p> Idea | Design | Web Development </p>
                        <p> or: a game to waste your time and l </p>
                    </ProjectCard> */}

                    <ProjectCard 
                        title="Security Reporting" 
                        image={project_reporting} 
                        alias="How to collaborate easier on security related issues within the IT team?"
                        identifier="security-reporting">
                        <p> User Interviews | Concept | Visual Design </p>
                    </ProjectCard>

                    <ProjectCard 
                        title="Algae Experimentation Kit" 
                        image={project_experimentationkit} 
                        alias="How to get children enthustiastic about science and sustainability?"
                        identifier="algae-experimentation-kit">
                        <p> Technical Research | Learning & Game Concept | Design | Construction for manufacturing | Prototyping | Testing  </p>
                    </ProjectCard>
                
                    {/* <ProjectCard 
                        title="Inflatable playpen" 
                        image={project_playpen} 
                        alias="How to be parent of a toddler without missing out?"
                        identifier="inflatable-playpen">
                        <p> Technical Research | Concept | Design | Construction for manufacturing | Prototyping | Testing  </p>
                    </ProjectCard> */}

                </div>

                <a href="/projects">
                    <button class="primary-button"> See all projects <img src={arrow_right}/> </button>
                </a>

            </section>


        </div>

        )
    }



export default HomePage;