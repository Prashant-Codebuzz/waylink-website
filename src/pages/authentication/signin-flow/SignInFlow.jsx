import React, { useState } from 'react';

// Css
import "./SignIn.scss";

// Image
import Logo from '../../../assets/images/authentication/logo.svg';

// Components
import SignIn from './sign-in/SignIn';
import ForgotPassword from './forgot-password/ForgotPassword';
import OtpVerification from '../otp-verification/OtpVerification';
import CreatePassword from './create-password/CreatePassword';


const SignInFlow = () => {

    const [authStep, setAuthStep] = useState(1);

    return (
        <>

            {/* Authentication */}

            {/* ------ SignIn-Flow Start ------ */}
            <section className='authentication'>
                <div className="row h-100">
                    <div className="col-lg-6 px-0">
                        <div className="left">
                            <div className="introducation">
                                <div className='main_logo'>
                                    <img src={Logo} alt="" className='img-fluid' />
                                </div>

                                <div className="info">
                                    <h1>Welcome to Waylink</h1>
                                    <p className='mb-0'>Sign in and take the next step with us.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 px-0">
                        <div className="right">

                            {/* --- Sign-In --- */}
                            {authStep === 1 && (
                                <SignIn authStep={authStep} setAuthStep={setAuthStep} />
                            )}

                            {/* --- Forgot-Password --- */}
                            {authStep === 2 && (
                                <ForgotPassword authStep={authStep} setAuthStep={setAuthStep} />
                            )}

                            {/* --- OTP-Verification --- */}
                            {authStep === 3 && (
                                <OtpVerification authStep={authStep} setAuthStep={setAuthStep} authType="forgot-password" />
                            )}

                            {/* --- Create-Password --- */}
                            {authStep === 4 && (
                                <CreatePassword authStep={authStep} setAuthStep={setAuthStep} />
                            )}

                        </div>
                    </div>
                </div>
            </section>
            {/* ------ SignIn-Flow End ------ */}

        </>
    )
}

export default SignInFlow;