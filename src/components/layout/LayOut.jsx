import React from 'react'
import { Outlet } from 'react-router-dom';
import LandingHeader from '../header/landing/Header';
import LandingFooter from '../footer/landing/Footer';

export const LandingLayOut = ({ handleRoleSelect }) => {
    return (
        <>

            <LandingHeader handleRoleSelect={handleRoleSelect} />
                <Outlet />
            <LandingFooter />

        </>
    )
}



export const UserLayOut = () => {
    return (
        <>



        </>
    )
}
