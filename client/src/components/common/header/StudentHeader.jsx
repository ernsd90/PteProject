import React from 'react';
import StudentTOpBar from "../topbar/StudentTopBar";
import HeaderLogo from "./HeaderLogo";
import RightNav from "./RightNav";
import moduledata from "../../../appData/allmodule.json";

function Header() {
    const logohref = '/student-dashboard';
    return (
        <header className="rbt-header rbt-header-10">
            <div className="rbt-sticky-placeholder" />
            {/* Start Header Top  */}
            <StudentTOpBar/>
            {/* End Header Top  */}
            <div className="rbt-header-wrapper header-space-betwween header-sticky">
                <div className="container-fluid">
                <div className="mainbar-row rbt-navigation-center align-items-center">
                    
                    <HeaderLogo logohref={logohref}/>
                    <div className="rbt-main-navigation d-none d-xl-block">
                    <nav className="mainmenu-nav">
                        <ul className="mainmenu">
                        <li className="with-megamenu has-menu-child-item position-static">
                            <a href="/student-dashboard">Home</a>
                        </li>
                        <li className="with-megamenu has-menu-child-item position-static">
                            <a href="#">
                            Practice <i className="feather-chevron-down" />
                            </a>
                            {/* Start Mega Menu  */}
                            <div className="rbt-megamenu grid-item-4">
                            <div className="wrapper">
                                <div className="row row--15">
                            
                                    {Object.keys(moduledata).map((category) => (
                                    <div key={category} className="col-lg-12 col-xl-3 col-xxl-3 single-mega-item">
                                        <h2 className="rbt-short-title">{category}</h2>
                                        <ul className="mega-menu-item">
                                            {moduledata[category].map((item, index) => ( item.activate === 1 && (
                                                <li key={index}>
                                                    <a href={`/student/${item.link}`}>{item.title}</a>
                                                </li>
                                            )
                                            ))}
                                        </ul>
                                    </div>
                                    ))}
                                </div>
                                <div className="row">
                                <div className="col-lg-12">
                                    <ul className="nav-quick-access">
                                    <li>
                                        <a href="#">
                                        <i className="feather-folder-minus" /> Quick Start
                                        Guide
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                        <i className="feather-folder-minus" /> For Open
                                        Source
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                        <i className="feather-folder-minus" /> API Status
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                        <i className="feather-folder-minus" /> Support
                                        </a>
                                    </li>
                                    </ul>
                                </div>
                                </div>
                            </div>
                            </div>
                            {/* End Mega Menu  */}
                        </li>
                        <li className="has-dropdown has-menu-child-item">
                            <a href="/mock-test"> Mock Test  </a>
                        </li>
                     
                     
                        <li className="with-megamenu has-menu-child-item position-static">
                            <a href="/knowledge-zone"> Knowledge Zone
                            </a>
                        </li>
                        </ul>
                    </nav>
                    </div>
                    <div className="header-right">
                    {/* Navbar Icons */}
                    
                    <RightNav />
                 
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
         
            {/* <a className="rbt-close_side_menu" href="javascript:void(0);" /> */}
            </header>

    );
}

export default Header;
