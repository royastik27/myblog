import { Link } from 'react-router-dom';

import './MainNav.css';

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
}

function MainNav() {
    
    function dropDownTopNav() {
        const topNavMenuDOM = document.getElementById('topnav-menu');
        topNavMenuDOM.className = (topNavMenuDOM.className === "") ? "expand" : "";
    }
    
    function showDropdown(ID)
    {
        const el = document.getElementById(ID);
        el.style.display = (el.style.display === 'block') ? 'none' : 'block';
    }

    return (
        <nav id="topnav" className="col-12 navbar-expand-lg">

            <Link to="#home" className="topnav-brand prevent-select">@royastik27</Link>
            
            <div className="icon-bars" onClick={dropDownTopNav}><i className="fa-solid fa-bars"></i></div>

            <div id="topnav-menu">
                <div className="left">
                    <div className="topnav-group">
                        <Link to="/" className="topnav-link nav-link">Home</Link>
                    </div>
                    <div className="topnav-group">
                        <Link to="/blogs" className="topnav-link nav-link">Blogs</Link>
                    </div>

                    <div className="topnav-group topnav-dropdown">
                        <div onClick={() => showDropdown('account-dropdown')} className="topnav-dropdown-button topnav-link nav-link">
                        Apps &nbsp;
                        <i className="fa-solid fa-caret-down"></i></div>

                        <div id="account-dropdown" className="topnav-dropdown-menu side-click-display-none">
                            <Link to="/app1" className="topnav-link nav-link">App 1</Link>
                            <Link to="/app2" className="topnav-link nav-link">App 2</Link>
                            <Link to="/app3" className="topnav-link nav-link">App 3</Link>
                        </div>
                    </div>

                    <div className="topnav-group">
                        <Link to="/contact" className="topnav-link nav-link">Contact</Link>
                    </div>
                </div>

                <div className="right">
                    {/* <div className="topnav-group" id="topnav-search">
                        <input type="text" placeholder="Search notes"></input>
                        <button><i className="fa-solid fa-magnifying-glass"></i></button>
                    </div> */}

                    {/* <div className="topnav-group">
                        <Link to="/login" className="topnav-link nav-link">Enter</Link>
                    </div> */}
                </div>

            </div>
        </nav>
    );
  }
  
  export default MainNav;