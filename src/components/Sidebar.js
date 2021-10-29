import './css/Sidebar.css'
import close from './svgs/close.svg'
import bot from './svgs/bot.svg'
import right from './svgs/right.svg'

const Sidebar = ({toggleSidebar}) => {


    return (
        <div className="sidebarContainer">
            <div className="sidebarHeading">
                <p>Meow Tap</p>
                <span className="closeButton" onClick={toggleSidebar}>
                    <img src={close} alt="close"/>
                </span>
            </div>
            <div className="sidebarBody">
                <p>Features</p>
                <p>About Us</p>
                <p>Contact Us</p>
            </div>
            <div className="sidebarFooter">
                <span className="footerIcons bot">
                    <img src={bot} alt="bot"/>
                </span>
                

                <p>Login</p>
                
                <span className="footerIcons">
                    <img src={right} alt="right"/>
                </span>
            </div>
        </div>
    );
}

export default Sidebar;
