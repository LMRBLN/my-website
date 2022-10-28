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


                {pageNumber == 1 | pageNumber == numPages ?
                    <div class="booklet one-page">
                        <img src={require(`../imgs/booklet_algae_de/booklet_algae_de${pageNumber}.png`)}/>
                    </div>
                    : null
                }

                {pageNumber > 1 && pageNumber < numPages &&

                 <div class="booklet">
                    <div class="booklet-page">
                        <img src={require(`../imgs/booklet_algae_de/booklet_algae_de${pageNumber}.png`)}/>
                    </div>

                    <div class="booklet-page">
                        <img src={require(`../imgs/booklet_algae_de/booklet_algae_de${pageNumber+1}.png`)}/>
                    </div>
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
                            This project is my masters thesis (2020/11) that I realized within 5 months in cooperation with an industry partner, the algae producer <a href="https://www.roquette.com/"> Roquette Klötze GmbH & Co KG </a>.
                        </p>

                        <h3>Idea</h3>
                        <p>
                            The alga can be used to illustrate many sustainability topics that are relevant to the future. With the experiment set, children can learn about biological principles and their own role with regard to the environment and nature in a playful way at an early age. Embedded in an imaginative play story, they go through various experiments, levels and topics, taking care of the algae from cultivation to harvest.                        
                        </p>

                        {/* <h3>Process</h3> */}

                        </div>
                    
                </div>

            </section>
        </div>
    )

}

export default ProjectAlgaePage;