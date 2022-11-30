import { Link} from "react-router-dom";
// import { Document, Page, pdfjs } from 'react-pdf/dist/esm/entry.webpack';
import { useState } from "react";
// import mypdf from "../documents/testpdf.pdf";
import arrow_left from "../imgs/arrow_left.svg"
import arrow_right from "../imgs/arrow_right.svg"



function ProjectAlgaePage() {

    
    const numPages = 22;
    const [pageNumber, setPageNumber] = useState(1);

    const nextPage = () => {
        if (pageNumber < numPages) {
            if (pageNumber === 1 | pageNumber === (numPages-1)) {
                setPageNumber(pageNumber+1)
            }
            else {
                setPageNumber(pageNumber+2)
            }
        }
    }
    
    const prevPage = () => {
        if (pageNumber > 1) {
            if (pageNumber===2) {
                setPageNumber(pageNumber-1)
            }
            else {
                setPageNumber(pageNumber-2)
            }
        }
    }
    
    return (
        
        <div class="projectDetails">
            <Link to="/projects">
                <div id="whereamI">
                    Projects
                </div>
            </Link>

            <section>

                <div class="firstPageElement">

                {/* <div class="booklet">
                    <div class="booklet-page">

                    </div>

                </div> */}


                {pageNumber == 1 | pageNumber == numPages ?
                    <div class="booklet one-page">
                        <img src={require(`../imgs/booklet_algae_de/booklet_algae_de${pageNumber}.png`)}/>
                    </div>
                    :null
                }

                {(pageNumber > 1 && pageNumber < numPages) &&

                    <div class="booklet">

                        <img src={require(`../imgs/booklet_algae_de/booklet_algae_de${pageNumber}.png`)}/>
                        <img src={require(`../imgs/booklet_algae_de/booklet_algae_de${pageNumber+1}.png`)}/>
                </div>
                }

                 <div id="booklet-pagination">
                    <div class="paginate-element">
                        <img onClick={() => prevPage()} src={arrow_left}/>
                    </div>

                    {pageNumber === 1 | pageNumber == numPages ?
                    <p> {`${pageNumber} / ${numPages}`}</p>
                    : <p> {`${pageNumber} - ${pageNumber + 1}`} / {numPages}</p>
                    }
                    {/* <p> {`${pageNumber} - ${pageNumber + 1}`} / {numPages}</p> */}
                    

                    <div class="paginate-element">
                        <img onClick={() => nextPage()} src={arrow_right}/>
                    </div>

                 </div>


                 <div id="projectRumbleText">
                        <h1>ALGAE EXPERIMENTATION KIT</h1>
                        <hr/>

                        <h3>Context</h3>
                        <p>
                            I developed the algae experimentation kit as my master thesis in cooperation with the algae producer <a href="https://www.roquette.com/"> Roquette Klötze GmbH & Co KG, represented by Jörg Ullmann, who kindly provided most of the raw materials (eg. starter cultures) to me as well as his biology expert feedback. Besides the goal to work out a concept with real market potential, the thesis also aims to respond to the following research question: To what extent can didactic goals be achieved through an educational game and which factors have to be considered in its development? I worked on this project for 5 months. </a>
                        </p>

                        <h3>Idea</h3>
                        <p class="highlight">
                            The alga can be used to illustrate many sustainability topics that are relevant to the future. With the experimentation kit, children can learn about biological principles and their own role with regard to the environment and nature in a playful way at an early age. Embedded in an fantasy game story, they go through various experiments, levels and topics, taking care of the algae from cultivation to harvest.                        
                        </p>

                        {/* <h3>Process Overview</h3>
                        <p>
                            In a 

                        </p> */}

                        {/* <h3>Reflection</h3>
                        <p>

                        </p> */}

                        </div>
                    
                </div>

            </section>
        </div>
    )

}

export default ProjectAlgaePage;