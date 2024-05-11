import React from 'react';
import Head from '../components/common/Head';
import GuestHeader from '../components/common/header/Guestheader';
import GuestFooter from '../components/common/footer/Guestfooter';

const MainLayout = ({ children }) => {
    return (
        <div>
            <Head />
            <GuestHeader />
            <main>{children}</main>
            <GuestFooter />
        </div>
    );
};

export default MainLayout;
