import React, { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom';

// Landing
import LandingHeader from '../../header/landing/Header';
import LandingFooter from '../../footer/landing/Footer';

// User
import UserHeader from '../../header/user/Header';
import UserFooter from '../../footer/user/Footer';

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

    return (
        <>

            <UserHeader />
                <Outlet />
            <UserFooter />

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

            {/* <UserHeader /> */}
            <Outlet />
            {/* <UserFooter /> */}

        </>
    )
}
