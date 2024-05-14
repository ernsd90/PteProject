import React from 'react';

const RightNav = () => {
    return (
        
        <ul className="quick-access">
            <li className="account-access rbt-user-wrapper d-none d-xl-block">
            <a href="#">
                <i className="feather-user" />
                Admin
            </a>
            <div className="rbt-user-menu-list-wrapper ">
                <div className="inner ">
                <div className="rbt-admin-profile">
                    <div className="admin-thumbnail">
                    <img
                        src="../../../assets/images/team/avatar.jpg"
                        alt="User Images"
                    />
                    </div>
                    <div className="admin-info">
                    <span className="name">Nipa Bali</span>
                    <a
                        className="rbt-btn-link color-primary"
                        href="profile.html"
                    >
                        View Profile
                    </a>
                    </div>
                </div>
                <ul className="user-list-wrapper">
                    <li>
                    <a href="/student-dashboard">
                        <i className="feather-home" />
                        <span>My Dashboard</span>
                    </a>
                    </li>
                </ul>
                <hr className="mt--10 mb--10" />
                <ul className="user-list-wrapper">
                    <li>
                        <a href="/student-profile">
                            <i className="feather-settings" />
                            <span>Profile</span>
                        </a>
                    </li>
                    <li>
                    <a href="/logout">
                        <i className="feather-log-out" />
                        <span>Logout</span>
                    </a>
                    </li>
                </ul>
                </div>
            </div>
            </li>
            <li className="access-icon rbt-user-wrapper d-block d-xl-none">
            <a className="rbt-round-btn" href="#">
                <i className="feather-user" />
            </a>    
            <div className="rbt-user-menu-list-wrapper">

                <div className="inner">
                <div className="rbt-admin-profile">
                    <div className="admin-thumbnail">
                    <img
                        src="../../../assets/images/team/avatar.jpg"
                        alt="User Images"
                    />
                    </div>
                    <div className="admin-info">
                    <span className="name">Nipa Bali</span>
                    <a
                        className="rbt-btn-link color-primary"
                        href="profile.html"
                    >
                        View Profile
                    </a>
                    </div>
                </div>
                <ul className="user-list-wrapper">
                    <li>
                    <a href="instructor-dashboard.html">
                        <i className="feather-home" />
                        <span>My Dashboard</span>
                    </a>
                    </li>
                    <li>
                    <a href="#">
                        <i className="feather-bookmark" />
                        <span>Bookmark</span>
                    </a>
                    </li>
                    <li>
                    <a href="instructor-enrolled-courses.html">
                        <i className="feather-shopping-bag" />
                        <span>Enrolled Courses</span>
                    </a>
                    </li>
                    <li>
                    <a href="instructor-wishlist.html">
                        <i className="feather-heart" />
                        <span>Wishlist</span>
                    </a>
                    </li>
                    <li>
                    <a href="instructor-reviews.html">
                        <i className="feather-star" />
                        <span>Reviews</span>
                    </a>
                    </li>
                    <li>
                    <a href="instructor-my-quiz-attempts.html">
                        <i className="feather-list" />
                        <span>My Quiz Attempts</span>
                    </a>
                    </li>
                    <li>
                    <a href="instructor-order-history.html">
                        <i className="feather-clock" />
                        <span>Order History</span>
                    </a>
                    </li>
                    <li>
                    <a href="instructor-quiz-attempts.html">
                        <i className="feather-message-square" />
                        <span>Question &amp; Answer</span>
                    </a>
                    </li>
                </ul>
                <hr className="mt--10 mb--10" />
                <ul className="user-list-wrapper">
                    <li>
                    <a href="#">
                        <i className="feather-book-open" />
                        <span>Getting Started</span>
                    </a>
                    </li>
                </ul>
                <hr className="mt--10 mb--10" />
                <ul className="user-list-wrapper">
                    <li>
                    <a href="instructor-settings.html">
                        <i className="feather-settings" />
                        <span>Settings</span>
                    </a>
                    </li>
                    <li>
                    <a href="index.html">
                        <i className="feather-log-out" />
                        <span>Logout</span>
                    </a>
                    </li>
                </ul>
                </div>
            </div>
            </li>
        </ul>
    );
}


export default RightNav;
                    