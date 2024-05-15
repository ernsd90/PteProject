import React, { useEffect } from 'react';
import StudentLayout from '../../layouts/StudentLayout';
import { loadScript, waitForElement } from '../../utils/loadScript';
import { useAuth } from '../../utils/AuthContext';

const LandingPage = () => {

    useEffect(() => {
        // Load script1.js only after #myElement is available
        waitForElement('.header-caption', () => {
            loadScript('assets/js/vendor/text-type.js', () => {
                console.log('text-type loaded and initialized');
            });
        });
        waitForElement('.odometer', () => {
            loadScript('assets/js/vendor/odometer.js', () => {
                console.log('odometer loaded and initialized');
            });
        });
        waitForElement('.rbt-footer', () => {
            loadScript('assets/js/vendor/countdown.js', () => {
                console.log('odometer loaded and initialized');
            });
        });
    }, []);

    const [,, userName, firstName, lastName,,] = useAuth();
    return (
        <StudentLayout>

            <>
                <div className="rbt-conatct-area bg-gradient-11 rbt-section-gap mb--20">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="section-title text-center mb--20">
                                <h3 className="title">
                                    Welcome&nbsp;
                                    <span className="header-caption">
                                        <span className="cd-headline zoom">
                                        <span className="cd-words-wrapper">
                                            <b className="is-visible theme-gradient">{firstName} {lastName}.</b>
                                            <b className="is-hidden theme-gradient">{userName}.</b>
                                        </span>
                                        </span>
                                    </span>
                                    </h3>
                                </div>
                            </div>
                        </div>
                        
                        {/* Start Counter  */}
                        <div className="row g-5 hanger-line">

                             {/* Start Single Counter  */}
                        <div className="col-lg-3 col-md-6 col-sm-6 col-12 mt--60 mt_md--30 mt_sm--30 mt_mobile--60">
                            <div className="rbt-counterup rbt-hover-03 border-bottom-gradient">
                            <div className="top-circle-shape" />
                            <div className="inner">
                                <div className="rbt-round-icon">
                                <img
                                    src="assets/images/icons/counter-02.png"
                                    alt="Icons Images"
                                />
                                </div>
                                <div className="content">
                                <h3 className="counter">
                                    <span className="odometer" data-count={800}>
                                    00
                                    </span>
                                </h3>
                                <span className="subtitle">Reading</span>
                                </div>
                            </div>
                            </div>
                        </div>
                        {/* End Single Counter  */}
                        {/* Start Single Counter  */}
                        <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                            <div className="rbt-counterup rbt-hover-03 border-bottom-gradient">
                            <div className="top-circle-shape" />
                            <div className="inner">
                                <div className="rbt-round-icon">
                                <img
                                    src="assets/images/icons/counter-01.png"
                                    alt="Icons Images"
                                />
                                </div>
                                <div className="content">
                                <h3 className="counter">
                                    <span className="odometer" data-count={500}>
                                    00
                                    </span>
                                </h3>
                                <span className="subtitle">Speaking</span>
                                </div>
                            </div>
                            </div>
                        </div>
                        {/* End Single Counter  */}

                        {/* Start Single Counter  */}
                        <div className="col-lg-3 col-md-6 col-sm-6 col-12 mt_md--60 mt_sm--60">
                            <div className="rbt-counterup rbt-hover-03 border-bottom-gradient">
                            <div className="top-circle-shape" />
                            <div className="inner">
                                <div className="rbt-round-icon">
                                <img
                                    src="assets/images/icons/counter-03.png"
                                    alt="Icons Images"
                                />
                                </div>
                                <div className="content">
                                <h3 className="counter">
                                    <span className="odometer" data-count={1000}>
                                    00
                                    </span>
                                </h3>
                                <span className="subtitle">Listening</span>
                                </div>
                            </div>
                            </div>
                        </div>
                        {/* End Single Counter  */}
                        {/* Start Single Counter  */}
                        <div className="col-lg-3 col-md-6 col-sm-6 col-12 mt--60 mt_md--30 mt_sm--30 mt_mobile--60">
                            <div className="rbt-counterup rbt-hover-03 border-bottom-gradient">
                            <div className="top-circle-shape" />
                            <div className="inner">
                                <div className="rbt-round-icon">
                                <img
                                    src="assets/images/icons/counter-04.png"
                                    alt="Icons Images"
                                />
                                </div>
                                <div className="content">
                                <h3 className="counter">
                                    <span className="odometer" data-count={100}>
                                    00
                                    </span>
                                </h3>
                                <span className="subtitle">Writing</span>
                                </div>
                            </div>
                            </div>
                        </div>
                        {/* End Single Counter  */}

                       
                        
                        </div>
                        {/* End Counter  */}
                    </div>
                </div>
                </>




        </StudentLayout>
    );
};

export default LandingPage;
