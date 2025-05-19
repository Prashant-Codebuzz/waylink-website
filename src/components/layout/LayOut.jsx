import React from 'react'
import { Outlet } from 'react-router-dom';
import Header from '../header/Header';
import Footer from '../footer/Footer';

export const LandingLayOut = ({ handleRoleSelect }) => {
    return (
        <>

            <Header handleRoleSelect={handleRoleSelect} />
            <Outlet />
            <Footer />

        </>
    )
}



export const UserLayOut = () => {
    return (
        <>



        </>
    )
}
