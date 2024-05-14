import React from 'react';
import StudentTOpBar from "../topbar/StudentTopBar"
import HeaderLogo from "./HeaderLogo"

function Header() {
    return (
        <header className="rbt-header rbt-header-10">
            <div className="rbt-sticky-placeholder" />
            {/* Start Header Top  */}
            <StudentTOpBar/>
            {/* End Header Top  */}
            <div className="rbt-header-wrapper header-space-betwween header-sticky">
                <div className="container-fluid">
                <div className="mainbar-row rbt-navigation-center align-items-center">

                    <HeaderLogo  logohref={"/"}/>

                    <div className="rbt-main-navigation d-none d-xl-block">
                    <nav className="mainmenu-nav">
                        <ul className="mainmenu">
                        <li className="with-megamenu has-menu-child-item position-static">
                            <a href="/">
                                 Home 
                            </a>
                        </li>
                        <li className="with-megamenu has-menu-child-item">
                            <a href="/">
                            Courses 
                            </a>
                        </li>
                        <li className="has-dropdown has-menu-child-item">
                            <a href="/">
                            Team
                            </a>
                        </li>
                        <li className="with-megamenu has-menu-child-item position-static">
                            <a href="/">
                            Contact Us
                            </a>
                        </li>
                        <li className="with-megamenu has-menu-child-item position-static">
                            <a href="/login">
                            Login
                            </a>
                        </li>
                      
                        </ul>
                    </nav>
                    </div>
                    <div className="header-right">
                    {/* Navbar Icons */}
             
                    <div className="rbt-btn-wrapper d-none d-xl-block">
                        <a
                        className="rbt-btn rbt-marquee-btn marquee-auto btn-border-gradient radius-round btn-sm hover-transform-none"
                        href="/login"
                        >
                        <span data-text="Enroll Now">Login/Register</span>
                        </a>
                    </div>
                    {/* Start Mobile-Menu-Bar */}
                    <div className="mobile-menu-bar d-block d-xl-none">
                        <div className="hamberger">
                        <button className="hamberger-button rbt-round-btn">
                            <i className="feather-menu" />
                        </button>
                        </div>
                    </div>
                    {/* Start Mobile-Menu-Bar */}
                    </div>
                </div>
                </div>
           
            </div>
           
           {/* <a className="rbt-close_side_menu" href="javascript:void(0);">q</a>*/}
            </header>

    );
}

export default Header;
