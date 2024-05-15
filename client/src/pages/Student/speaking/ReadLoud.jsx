import React, { useEffect } from 'react';
import PracticeLayout from '../../../layouts/PracticeLayout';
import { useAuth } from '../../../utils/AuthContext';
import LeftSidebar from '../common/LeftSidebar';
import TopBar from '../common/TopBar';

const ReadLoud = () => {

    //const [,, userName, firstName, lastName,,] = useAuth();
    return (
        <PracticeLayout>
             <>
                <div className="rbt-lesson-area bg-color-white">
                    <div className="rbt-lesson-content-wrapper">
                    <LeftSidebar  title="Read Loud"/>
                    <div className="rbt-lesson-rightsidebar overflow-hidden">
                        <TopBar title="Read Loud" description="Look at the text below. In 40 seconds, you must read this text aloud as naturally and clearly as possible. You have 40 seconds to read aloud." />

                        <div className="inner">
                        <div className="content">
                            <form id="quiz-form" className="quiz-form-wrapper">
                            {/* Start Single Quiz  */}
                            <div id="question-1" className="question">
                                <div className="quize-top-meta">
                                <div className="quize-top-left">
                                    <span>
                                    Questions No: <strong>1/5</strong>
                                    </span>
                                    <span>
                                    Attempts Allowed: <strong>1</strong>
                                    </span>
                                </div>
                                <div className="quize-top-right">
                                    <span>
                                    Time remaining: <strong>No Limit</strong>
                                    </span>
                                </div>
                                </div>
                                <hr />
                                <div className="rbt-single-quiz">
                                <h4>1. What is the capital of France?</h4>
                                <div className="row g-3 mt--10">
                                    <div className="col-lg-6">
                                    <p className="rbt-checkbox-wrapper mb--5">
                                        <input
                                        id="rbt-checkbox-1"
                                        name="rbt-checkbox-1"
                                        type="checkbox"
                                        defaultValue="yes"
                                        />
                                        <label htmlFor="rbt-checkbox-1">Option One</label>
                                    </p>
                                    </div>
                                    <div className="col-lg-6">
                                    <p className="rbt-checkbox-wrapper">
                                        <input
                                        id="rbt-checkbox-2"
                                        name="rbt-checkbox-2"
                                        type="checkbox"
                                        defaultValue="yes"
                                        />
                                        <label htmlFor="rbt-checkbox-2">Option Two</label>
                                    </p>
                                    </div>
                                    <div className="col-lg-6">
                                    <p className="rbt-checkbox-wrapper">
                                        <input
                                        id="rbt-checkbox-3"
                                        name="rbt-checkbox-3"
                                        type="checkbox"
                                        defaultValue="yes"
                                        />
                                        <label htmlFor="rbt-checkbox-3">Option Three</label>
                                    </p>
                                    </div>
                                    <div className="col-lg-6">
                                    <p className="rbt-checkbox-wrapper">
                                        <input
                                        id="rbt-checkbox-4"
                                        name="rbt-checkbox-4"
                                        type="checkbox"
                                        defaultValue="yes"
                                        />
                                        <label htmlFor="rbt-checkbox-4">Option Four</label>
                                    </p>
                                    </div>
                                </div>
                                </div>
                            </div>
                            {/* Start Single Quiz  */}
                            {/* Start Single Quiz  */}
                            <div id="question-2" className="question">
                                <div className="quize-top-meta">
                                <div className="quize-top-left">
                                    <span>
                                    Questions No: <strong>2/5</strong>
                                    </span>
                                    <span>
                                    Attempts Allowed: <strong>2</strong>
                                    </span>
                                </div>
                                <div className="quize-top-right">
                                    <span>
                                    Time remaining: <strong>No Limit</strong>
                                    </span>
                                </div>
                                </div>
                                <hr />
                                <div className="rbt-single-quiz">
                                <h4>2. What is the Javascript?</h4>
                                <div className="row g-3 mt--10">
                                    <div className="col-lg-6">
                                    <div className="rbt-form-check">
                                        <input
                                        className="form-check-input"
                                        type="radio"
                                        name="rbt-radio"
                                        id="rbt-radio-1"
                                        />
                                        <label
                                        className="form-check-label"
                                        htmlFor="rbt-radio-1"
                                        >
                                        {" "}
                                        Option One
                                        </label>
                                    </div>
                                    </div>
                                    <div className="col-lg-6">
                                    <div className="rbt-form-check">
                                        <input
                                        className="form-check-input"
                                        type="radio"
                                        name="rbt-radio"
                                        id="rbt-radio-2"
                                        />
                                        <label
                                        className="form-check-label"
                                        htmlFor="rbt-radio-2"
                                        >
                                        {" "}
                                        Option Two
                                        </label>
                                    </div>
                                    </div>
                                    <div className="col-lg-6">
                                    <div className="rbt-form-check">
                                        <input
                                        className="form-check-input"
                                        type="radio"
                                        name="rbt-radio"
                                        id="rbt-radio-3"
                                        />
                                        <label
                                        className="form-check-label"
                                        htmlFor="rbt-radio-3"
                                        >
                                        {" "}
                                        Option Three
                                        </label>
                                    </div>
                                    </div>
                                    <div className="col-lg-6">
                                    <div className="rbt-form-check">
                                        <input
                                        className="form-check-input"
                                        type="radio"
                                        name="rbt-radio"
                                        id="rbt-radio-4"
                                        />
                                        <label
                                        className="form-check-label"
                                        htmlFor="rbt-radio-4"
                                        >
                                        {" "}
                                        Option Four
                                        </label>
                                    </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                            {/* End Single Quiz  */}
                            <div className="rbt-quiz-btn-wrapper mt--30">
                                <button
                                className="rbt-btn bg-primary-opacity btn-sm"
                                id="prev-btn"
                                type="button"
                                >
                                Previous
                                </button>
                                <button
                                className="rbt-btn bg-primary-opacity btn-sm"
                                id="next-btn"
                                type="button"
                                >
                                Next
                                </button>
                                <a
                                href="lesson-quiz-result.html"
                                className="rbt-btn btn-gradient btn-sm"
                                id="submit-btn"
                                >
                                Submit
                                </a>
                            </div>
                            </form>
                        </div>
                        </div>
                        <div className="bg-color-extra2 ptb--15 overflow-hidden">
                        <div className="rbt-button-group">
                            <a
                            className="rbt-btn icon-hover icon-hover-left btn-md bg-primary-opacity"
                            href="#"
                            >
                            <span className="btn-icon">
                                <i className="feather-arrow-left" />
                            </span>
                            <span className="btn-text">Previous</span>
                            </a>
                            <a className="rbt-btn icon-hover btn-md" href="#">
                            <span className="btn-text">Next</span>
                            <span className="btn-icon">
                                <i className="feather-arrow-right" />
                            </span>
                            </a>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="rbt-progress-parent">
                    <svg
                    className="rbt-back-circle svg-inner"
                    width="100%"
                    height="100%"
                    viewBox="-1 -1 102 102"
                    >
                    <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
                    </svg>
                </div>
                
                </>

        </PracticeLayout>
    );
};

export default ReadLoud;
