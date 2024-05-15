import React, { useEffect } from 'react';

const LeftSidebar = ({title,description}) => {

    //const [,, userName, firstName, lastName,,] = useAuth();
    return (
        <div className="lesson-top-bar">
        <div className="lesson-top-left">
            <div className="rbt-lesson-toggle">
                <button
                    className="lesson-toggle-active btn-round-white-opacity"
                    title="Toggle Sidebar"
                >
                    <i className="feather-arrow-left" />
                </button>
            </div>
            <h5>{title}
                <br/> 
                <span style={{fontSize: '12px'}}>{description}</span>
            </h5>
           
        </div>
        <div className="lesson-top-right">
            <div className="rbt-btn-close">
            <a
                href="/student-dashboard"
                title="Go Back to Course"
                className="rbt-round-btn"
            >
                <i className="feather-x" />
            </a>
            </div>
        </div>
        </div>
    );
};

export default LeftSidebar;
