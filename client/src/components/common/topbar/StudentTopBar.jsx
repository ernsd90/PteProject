import React from 'react';

function Topbar() {
    return (
       
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

    );
}

export default Topbar;
