import hamburger from './Hamburger.svg';
import Sidebar from './Sidebar.js';
import "./Topbar.css"

const Topbar = () => {

    // write a function toggleSidebar that adds class 'active' to the div with class 'sidebar'
    const toggleSidebar = () => {
        const sidebar = document.querySelector('.sidebar');
        sidebar.classList.toggle('active');
    }

    return (
        <>
            <div className="sidebar">
                <Sidebar toggleSidebar={toggleSidebar}/>
            </div>
            <div className="header">
                <p className="heading">
                    DEMAND TAP
                </p>
                <div className="menuHolder" onClick={toggleSidebar}>
                    <img src={hamburger} alt="hamburger" className="hamburger" />
                </div>
            </div>
        </>
    );
}

export default Topbar;