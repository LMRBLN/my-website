import { useState } from "react";
import arrow_left from "../imgs/arrow_left.svg"
import arrow_right from "../imgs/arrow_right.svg"

function Booklet(props) {

    const numPages = props.numPages;
    const file = props.file;
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

        
        
        <div class="firstPageElement">

            <p> {`${file}${pageNumber}.png`}</p>



            {pageNumber == 1 | pageNumber == numPages ?
                <div class="booklet one-page">
                    {/* <img src={require(`${file}${pageNumber}.png`)}/> */}
                    {/* <img src={require(`../imgs/booklet_algae_de/booklet_algae_de${pageNumber}.png`)}/> */}
                    {/* <img src={require('../imgs/booklet_algae_de/booklet_algae_de1.png')}/> */}
                </div>
                : null
            }

            {/* {pageNumber > 1 && pageNumber < numPages &&

            <div class="booklet">
                <div class="booklet-page">
                    <img src={require(`${file}${pageNumber}.png`)}/>
                </div>

                <div class="booklet-page">
                    <img src={require(`${file}${pageNumber+1}.png`)}/>
                </div>
            </div>
            } */}

            <div id="booklet-pagination">
                <div class="paginate-element">
                    <img onClick={() => prevPage()} src={arrow_left}/>
                </div>

                {pageNumber === 1 | pageNumber == numPages ?
                <p> {`${pageNumber} / ${numPages}`}</p>
                : <p> {`${pageNumber} - ${pageNumber + 1}`} / {numPages}</p>
                }
                

                <div class="paginate-element">
                    <img onClick={() => nextPage()} src={arrow_right}/>
                </div>

            </div>

        </div>
        )
}

export default Booklet;