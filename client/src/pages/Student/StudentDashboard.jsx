import React from 'react';
import MainLayout from '../../layouts/MainLayout';

const LandingPage = () => {
    return (
        <MainLayout>
            
            
            <>
              
                {/* Start Course Feature Box  */}
                <div className="rbt-feature-area rbt-single-course-features rbt-section-gapBottom rbt-feature-box">
                    <div className="container">
                    <div className="row">
                        <div className="col-lg-10 offset-lg-1">
                        <div className="row row--30 gy-5 align-items-center">
                            <div className="col-lg-6 col-xl-5">
                            <div className="thumbnail rbt-shadow-box">
                                <img
                                className="w-100 radius-10"
                                src="assets/images/course/course-single-01.jpg"
                                alt="Card"
                                />
                            </div>
                            </div>
                            <div className="col-lg-6 col-xl-7">
                            <div className="section-title">
                                <h2 className="title">What you'll learn</h2>
                                <p className="b1 mt--15">
                                Far far away, behind the word mountains, far from the
                                countries Vokalia and Consonantia.
                                </p>
                            </div>
                            <div className="section-title subtitle">
                                <h5 className="title">Whats Material Includes?</h5>
                            </div>
                            <div className="row g-5">
                                {/* Start Feture Box  */}
                                <div className="col-lg-6">
                                <ul className="rbt-list-style-1">
                                    <li>
                                    <i className="feather-check" />
                                    Become an advanced, confident.
                                    </li>
                                    <li>
                                    <i className="feather-check" />
                                    Have an intermediate skill.
                                    </li>
                                    <li>
                                    <i className="feather-check" />
                                    Have a portfolio of various.
                                    </li>
                                    <li>
                                    <i className="feather-check" />
                                    Have a portfolio of various.
                                    </li>
                                    <li>
                                    <i className="feather-check" />
                                    Use the numpy library to create.
                                    </li>
                                </ul>
                                </div>
                                {/* End Feture Box  */}
                                {/* Start Feture Box  */}
                                <div className="col-lg-6">
                                <ul className="rbt-list-style-1">
                                    <li>
                                    <i className="feather-check" />
                                    Use the Jupyter Notebook.
                                    </li>
                                    <li>
                                    <i className="feather-check" />
                                    Use the pandas module with.
                                    </li>
                                    <li>
                                    <i className="feather-check" />
                                    Have a portfolio of various.
                                    </li>
                                    <li>
                                    <i className="feather-check" />
                                    Have a portfolio of various.
                                    </li>
                                    <li>
                                    <i className="feather-check" />
                                    Create data visualizations.
                                    </li>
                                </ul>
                                </div>
                                {/* End Feture Box  */}
                            </div>
                            <div className="read-more-btn mt--40">
                                <a className="rbt-moderbt-btn" href="/">
                                <span className="moderbt-btn-text">Learn More About Us</span>
                                <i className="feather-arrow-right" />
                                </a>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                {/* End Course Feature Box  */}
                {/* Start Newsletter Area  */}
                <div className="rbt-newsletter-area bg-color-white rbt-section-gap">
                    <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                        <div className="section-title text-center">
                            <h2 className="title">
                            Want to get special offers <br /> and Course updates?
                            </h2>
                            <form action="#" className="newsletter-form-1 mt--50 radius-round">
                            <input
                                className="rbt-border"
                                type="email"
                                placeholder="Enter Your E-Email"
                            />
                            <button
                                type="submit"
                                className="rbt-btn btn-md btn-gradient hover-icon-reverse radius-round"
                            >
                                <span className="icon-reverse-wrapper">
                                <span className="btn-text">Subscribe</span>
                                <span className="btn-icon">
                                    <i className="feather-arrow-right" />
                                </span>
                                <span className="btn-icon">
                                    <i className="feather-arrow-right" />
                                </span>
                                </span>
                            </button>
                            </form>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                {/* End Newsletter Area  */}
                </>




        </MainLayout>
    );
};

export default LandingPage;
