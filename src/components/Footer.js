import icon_email from "../imgs/icon_mail.svg";
import icon_linkedin from "../imgs/icon_linkedin.svg";
import icon_github from "../imgs/icon_github.svg";
import icon_pinterest from "../imgs/icon_pinterest.svg";
import arrow_up from "../imgs/arrow_up.svg";

function Footer() {
    return (
        <div id="footer">

            <div id="footer-actions">

                <div id="contactOptions">

                    <a href = "mailto: lara.rockenstein@live.de" target="_blank" rel="noopener noreferrer">
                        <div class="contactOption">
                                <img src={icon_email} alt="icon email"/>
                                <p>lara.rockenstein@live.de</p>
                        </div>
                    </a>

                    <a href="https://www.linkedin.com/in/lararockenstein/" target="_blank" rel="noopener noreferrer">
                        <div class="contactOption">
                            <img src={icon_linkedin} alt="icon linkedin"/>
                            <p>LinkedIn</p>
                        </div>
                    </a>

                    <a href="https://github.com/LMRBLN" target="_blank" rel="noopener noreferrer">
                        <div class="contactOption">
                            <img src={icon_github} alt="icon github"/>
                            <p>Github</p>
                        </div>
                    </a>

                    <a href="https://www.pinterest.de/lmrbln/" target="_blank" rel="noopener noreferrer">
                        <div class="contactOption">
                            <img src={icon_pinterest} alt="icon pinterest"/>
                            <p>Pinterest</p>
                        </div>
                    </a>

                </div>
                
                
                <a href="#top">
                    <div id="arrow_up">
                        <img src={arrow_up} alt="go up"/>
                    </div>
                </a>

            </div>

            <div id="copyrightSignature">
                Copyright &copy; Lara Rockenstein 2022
            </div>

        </div>
    )
}

export default Footer;