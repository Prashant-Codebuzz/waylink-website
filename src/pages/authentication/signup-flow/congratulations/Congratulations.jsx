import React, { useEffect } from 'react'

// Image
import CongratulationsLogo from '../../../../assets/images/authentication/congratulations-logo.svg';
import CongratulationsLoader from '../../../../assets/images/authentication/loader.svg';

// Animation-Json
import CongratulationsAnimation from "../../../../components/loader/json/Animation.json"

// Animation-Package
import Lottie from 'lottie-react';
import { useNavigate } from 'react-router-dom';

const Congratulations = ({ authStep, setAuthStep, role }) => {

    const IsRoleUser = role === "user";
    const navigate = useNavigate();

    useEffect(() => {
        setTimeout(() => {
            navigate(IsRoleUser ? "/user/sign-in" : "/agent/sign-in")
        }, 5000);
    }, [IsRoleUser])

    return (
        <>

            {/* ------ Congratulations Start ------ */}
            <div className="introducation mb-0">
                <div className='logo_img'>
                    <img src={CongratulationsLogo} alt="" className='img-fluid' />
                </div>

                <div className="info">
                    <h1>Congratulations!</h1>
                    <p className='mb-0'>
                        Your account is ready to use. You will be <br />
                        redirected to the home in a few seconds..
                    </p>
                </div>

                <div className="congratulation_loader d-flex justify-content-center">
                    {/* <img src={CongratulationsLoader} alt="" className='img-fluid' /> */}
                    <Lottie
                        animationData={CongratulationsAnimation}
                        loop={true}
                        className='lottie_loader'
                    />
                </div>
            </div>
            {/* ------ Congratulations End ------ */}

        </>
    )
}

export default Congratulations;