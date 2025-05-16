import React from 'react'
import { Outlet } from 'react-router-dom';
import Header from '../header/Header';
import Footer from '../footer/Footer';

const LayOut = ({ handleRoleSelect }) => {
    return (
        <>

            <Header handleRoleSelect={handleRoleSelect} />
                <Outlet />
            <Footer />

        </>
    )
}

export default LayOut;