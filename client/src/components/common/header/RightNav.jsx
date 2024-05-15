import React from 'react';
import LogoutButton from '../../LogoutButton';
import { useAuth } from '../../../utils/AuthContext';

const RightNav = () => {
    const [,, userName, firstName, lastName,] = useAuth();

    return (
        <ul className="quick-access">
            <li className="account-access rbt-user-wrapper d-none d-xl-block">
            <a href="/">
                <i className="feather-user" />
                {userName}
            </a>
            <div className="rbt-user-menu-list-wrapper ">
                <div className="inner ">
                <div className="rbt-admin-profile">
                    <div className="admin-thumbnail">
                    <img
                        src="/assets/images/team/avatar.jpg"
                        alt="User Images"
                    />
                    </div>
                    <div className="admin-info">
                    <span className="name">{firstName} {lastName}</span>
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
                        <LogoutButton/>
                    </li>
                </ul>
                </div>
            </div>
            </li>
          
        </ul>
    );
}


export default RightNav;
                    