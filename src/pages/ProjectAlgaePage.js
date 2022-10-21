import { Link} from "react-router-dom";
import { Document, Page } from 'react-pdf';
import { useState } from "react";



function ProjectAlgaePage() {

    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);
  
    function onDocumentLoadSuccess({ numPages }) {
      setNumPages(numPages);
    }
    


    return (
        
        <div class="projectDetails">
            <Link to="/projects">
                <div id="whereamI">
                    Projects
                </div>
            </Link>

            <section>

                <div class="projectBody firstPageElement">

                 <div id="booklet">
                    {/* <Document file="../documents/testpdf.pdf" onLoadSuccess={onDocumentLoadSuccess}>
                        <Page pageNumber={pageNumber} />
                    </Document>
                    <p>
                        Page {pageNumber} of {numPages}
                    </p> */}

                 </div>
                    
                </div>

            </section>
        </div>
    )

}

export default ProjectAlgaePage;