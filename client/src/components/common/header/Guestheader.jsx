import React from 'react';
//import '../styles/Header.css'; // Assuming you have CSS specifically for the header

function Header() {
    return (
        <header className="rbt-header rbt-header-10">
            <div className="rbt-sticky-placeholder" />
            {/* Start Header Top  */}
            <div className="rbt-header-top rbt-header-top-1 header-space-betwween bg-not-transparent bg-color-darker top-expended-activation">
                <div className="container-fluid">
                <div className="top-expended-wrapper">
                    <div className="top-expended-inner rbt-header-sec align-items-center ">
                    <div className="rbt-header-sec-col rbt-header-left d-none d-xl-block">
                        <div className="rbt-header-content">
                        {/* Start Header Information List  */}
                        <div className="header-info">
                            <ul className="rbt-information-list">
                            <li>
                                <a href="/">
                                <i className="fab fa-instagram" />
                                100k <span className="d-none d-xxl-block">Followers</span>
                                </a>
                            </li>
                            <li>
                                <a href="/">
                                <i className="fab fa-facebook-square" />
                                500k <span className="d-none d-xxl-block">Followers</span>
                                </a>
                            </li>
                            <li>
                                <a href="/">
                                <i className="feather-phone" />
                                +1-202-555-0174
                                </a>
                            </li>
                            </ul>
                        </div>
                        {/* End Header Information List  */}
                        </div>
                    </div>
                  
                    <div className="rbt-header-sec-col rbt-header-right mt_md--10 mt_sm--10">
                        <div className="rbt-header-content justify-content-start justify-content-lg-end">
                        <div className="header-info d-none d-xl-block">
                            <ul className="social-share-transparent">
                            <li>
                                <a href="/">
                                <i className="fab fa-facebook-f" />
                                </a>
                            </li>
                            <li>
                                <a href="/">
                                <i className="fab fa-twitter" />
                                </a>
                            </li>
                            <li>
                                <a href="/">
                                <i className="fab fa-linkedin-in" />
                                </a>
                            </li>
                            <li>
                                <a href="/">
                                <i className="fab fa-instagram" />
                                </a>
                            </li>
                            </ul>
                        </div>
                    
                        </div>
                    </div>
                    </div>
                    <div className="header-info">
                    <div className="top-bar-expended d-block d-lg-none">
                        <button className="topbar-expend-button rbt-round-btn">
                        <i className="feather-plus" />
                        </button>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            {/* End Header Top  */}
            <div className="rbt-header-wrapper header-space-betwween header-sticky">
                <div className="container-fluid">
                <div className="mainbar-row rbt-navigation-center align-items-center">
                    <div className="header-left rbt-header-content">
                    <div className="header-info">
                        <div className="logo">
                        <a href="/">
                            <img
                            src="https://englishwithroop.com/wp-content/uploads/2024/01/logoewr.png"
                            alt="Education Logo Images"
                            />
                        </a>
                        </div>
                    </div>
             
                    </div>
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
