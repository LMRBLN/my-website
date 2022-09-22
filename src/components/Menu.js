import menu_icon from "../../src/imgs/menu_icon.svg"
import menu_icon_close from "../../src/imgs/menu_icon_close.svg"
import icon_email from "../imgs/icon_mail.svg";
import icon_linkedin from "../imgs/icon_linkedin.svg";

function Menu(props) {

    return (

        <>
         {
            props.menuOpen === false 
                ?
                    <div id="menu-icon">
                        <img src={menu_icon} alt="open menu"/>
                    </div>
                :
                <>

                    <div id="menu-open">
                        <div>
                            <a href="/"> Home</a>
                            <a href="/about"> About</a>
                            <a href="/projects"> Projects</a>

                            <div id="menu-contactOptions">

                                <a href = "mailto: lara.rockenstein@live.de" target="_blank" rel="noopener noreferrer">
                                    <div class="contactOption">
                                            <img src={icon_email} alt="icon email"/>
                                            <p>Email</p>
                                    </div>
                                </a>

                                <a href="https://www.linkedin.com/in/lararockenstein/" target="_blank" rel="noopener noreferrer">
                                    <div class="contactOption">
                                        <img src={icon_linkedin} alt="icon email"/>
                                        <p>LinkedIn</p>
                                    </div>
                                </a>

                            </div>

                        </div>

                    </div>

                    <div id="menu-icon-close">
                        <img src={menu_icon_close} alt="close menu"/>
                    </div>

                </>

         }

        </>
    )
}

export default Menu;