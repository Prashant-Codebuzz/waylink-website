import React from 'react'
import { Outlet } from 'react-router-dom';

// Landing
import LandingHeader from '../header/landing/Header';
import LandingFooter from '../footer/landing/Footer';

// User
import UserHeader from '../header/user/Header';
import UserFooter from '../footer/user/Footer';

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

            <UserHeader />
                <Outlet />
            <UserFooter />

        </>
    )
}
