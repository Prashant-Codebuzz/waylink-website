import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { Outlet, useNavigate } from 'react-router-dom';

export const UserAuthLayout = () => {

    const navigate = useNavigate();
    // const user = useSelector((state) => state.userAuth);
    // console.log(user);

    const userToken = localStorage.getItem("user-token");

    useEffect(() => {
        if (userToken) {
            // navigate("/user/home");
        }
    }, [userToken]);


    return (
        <>

            <Outlet />

        </>
    )
}

export const AgentAuthLayout = () => {

    const navigate = useNavigate();

    // const agent = useSelector((state) => state.agentAuth);
    // console.log(agent);

    const agentToken = localStorage.getItem("agent-token");

    useEffect(() => {
        if (agentToken) {
            // navigate("/agent/home");
        }
    }, [agentToken]);

    return (
        <>

            <Outlet />

        </>
    )
}
