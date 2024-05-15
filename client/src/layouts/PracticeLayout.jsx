import React from 'react';
import Head from '../components/common/Head';

const PracticeLayout = ({ children }) => {
    return (
        <div>
            <Head />
            <main>{children}</main>
        </div>
    );
};

export default PracticeLayout;
