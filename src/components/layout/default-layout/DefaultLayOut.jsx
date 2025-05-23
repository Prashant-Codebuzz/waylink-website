import React, { useEffect, useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom';

// Landing
import LandingHeader from '../../header/landing/Header';
import LandingFooter from '../../footer/landing/Footer';

// User
import UserHeader from '../../header/user/Header';
import UserFooter from '../../footer/user/Footer';

// Agent
import AgentHeader from '../../header/agent/Header';
import AgentFooter from '../../footer/agent/Footer';

// Modal -- Logout
import Logout from '../../modal/logout/Logout';


export const LandingLayOut = ({ handleRoleSelect }) => {

    const navigate = useNavigate();

    const role = localStorage.getItem("role");
    const token = localStorage.getItem("user-token") || localStorage.getItem("agent-token");
    console.log("user-agent", token, role);

    useEffect(() => {
        if (token) {
            navigate(role === "user" ? "/user/home" : "/agent/home");
        }
    }, [role, token]);

    return (
        <>

            <LandingHeader handleRoleSelect={handleRoleSelect} />
            <Outlet />
            <LandingFooter />

        </>
    )
}



export const UserDefaultLayOut = () => {

    const navigate = useNavigate();

    const userToken = localStorage.getItem("user-token");

    useEffect(() => {
        if (!userToken) {
            // navigate("/user/sign-in");
            navigate("/");
        }
    }, [userToken]);


    // Modal -- Logout
    const [userLogout, setUserLogout] = useState({
        modal: false,
        loader: false,
    });

    const handleLogout = () => {
        setUserLogout((prev) => ({ ...prev, modal: true }));
    }

    const handleClose = () => {
        setUserLogout((prev) => ({ ...prev, modal: false }));
    }

    const confirmLogout = () => {
        setUserLogout((prev) => ({ ...prev, loader: true }));

        setTimeout(() => {
            localStorage.removeItem("user-token");
            localStorage.removeItem("role");

            navigate("/");

            setUserLogout((prev) => ({ ...prev, loader: false }));
        }, 500);
    }

    return (
        <>

            <UserHeader handleLogout={handleLogout} />
                <Outlet />
            <UserFooter />

            {/* Modal -- Logout */}
            <Logout show={userLogout.modal} handleClose={handleClose} isLoading={userLogout.loader} handleLogout={confirmLogout} />

        </>
    )
}



export const AgentDefaultLayOut = () => {

    const navigate = useNavigate();

    const agentToken = localStorage.getItem("agent-token");

    useEffect(() => {
        if (!agentToken) {
            // navigate("/agent/sign-in");
            navigate("/");
        }
    }, [agentToken]);

    return (
        <>

            <AgentHeader />
                <Outlet />
            <AgentFooter />

        </>
    )
}
