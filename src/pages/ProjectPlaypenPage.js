import { Link} from "react-router-dom";
import { useState } from "react";
import arrow_left from "../imgs/arrow_left.svg"
import arrow_right from "../imgs/arrow_right.svg"
 
function ProjectPlaypenPage() {

    const numPages = 12;
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
                    <img src={require(`../imgs/booklet_playpen_de/booklet_playpen_de${pageNumber}.png`)}/>
                </div>
                : null
            }


            {(pageNumber > 1 && pageNumber < numPages) &&

            <div class="booklet">
                <img src={require(`../imgs/booklet_playpen_de/booklet_playpen_de${pageNumber}.png`)}/>
                <img src={require(`../imgs/booklet_playpen_de/booklet_playpen_de${pageNumber+1}.png`)}/>
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
                    <h1> INFLATABLE PLAYPEN </h1>
                    <hr/>

                    <h3>Context</h3>
                    <p>
                        This semester project (2019/02) has been realized together with a team of 8 other students in cooperation with an industry partner, the tarp manufacturer <a href="https://www.planen-intema.de/"> Intema GmbH & Co KG </a>. My role was the team lead.
                    </p>

                    <h3>Idea</h3>
                    <p>
                        The inflatable playpen is not only responding to the toddler's needs. In a world where mobility and flexibility are more and more important, it allows the parents to organize and participate in (outdoor) activities without worrying about their child's security. 
                    </p>

                    {/* <h3>Process</h3> */}

                    </div>
                
            </div>

            </section>
        </div>
    )

}

export default ProjectPlaypenPage;