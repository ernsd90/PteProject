import React from 'react';
import PropTypes from 'prop-types';

const HeaderLogo = ({ logohref }) => {
    return (
       
        <div className="header-left rbt-header-content">
            <div className="header-info">
                <div className="logo">
                <a href={logohref}>
                    <img
                    src="https://englishwithroop.com/wp-content/uploads/2024/01/logoewr.png"
                    alt="englishwithroop Logo"
                    />
                </a>
                </div>
            </div>
        </div>

    );
}

// Optional: Prop type validation
HeaderLogo.propTypes = {
    logohref: PropTypes.string.isRequired,
};


export default HeaderLogo;
