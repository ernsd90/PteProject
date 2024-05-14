import React from 'react';
import Head from '../components/common/Head';
import StudentHeader from '../components/common/header/StudentHeader';
import GuestFooter from '../components/common/footer/Guestfooter';

const StudentLayout = ({ children }) => {
    return (
        <div>
            <Head />
            <StudentHeader />
            <main>{children}</main>
            <GuestFooter />
        </div>
    );
};

export default StudentLayout;
