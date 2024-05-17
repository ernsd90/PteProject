import React, { useEffect } from 'react';
import Pagination from './Pagination';

const LeftSidebar = ({ title,baseUrl,data, currentPage, totalPages, onPageChange }) => {

    console.log("LeftSidebar",data);
    // Get the current URL
    return (
        <div className="rbt-lesson-leftsidebar">
            <div className="rbt-course-feature-inner rbt-search-activation">
            <div className="section-title">
                <h4 className="rbt-title-style-3">{title}</h4>
            </div>

            {/* <div className="lesson-search-wrapper">
                <form action="#" className="rbt-search-style-1">
                    <input
                        className="rbt-search-active"
                        type="text"
                        placeholder="Search Lesson"
                    />
                    <button className="search-btn disabled">
                        <i className="feather-search" />
                    </button>
                </form>
            </div>
            <hr className="mt--10" /> */}
            

            <div className="rbt-accordion-style rbt-accordion-02 for-right-content accordion">
                <div className="accordion" id="accordionExampleb2">
                    <div className="accordion-item card">
                        
                        <div className="accordion-body card-body">
                            <ul className="rbt-course-main-content liststyle">
                            
                            {data.map((entry) => (
                            <li key={entry.id}> 
                                <a href={`${baseUrl}/${entry.id}`}>
                                <div className="course-content-left">
                                    <i className="feather-file-text" />
                                    <span className="text">{entry.title}</span>
                                    [{entry.id}]
                                </div>
                                <div className="course-content-right">
                                    <span className="min-lable">30 min</span>
                                    <span className="rbt-check">
                                    <i className="feather-check" />
                                    </span>
                                </div>
                                </a>
                            </li>
                            ))}
                            </ul>
                        </div>
                        
                    </div>
                </div>

               <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={onPageChange}
                />
            </div>
            </div>
        </div>
    );
};

export default LeftSidebar;
