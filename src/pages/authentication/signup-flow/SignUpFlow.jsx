import { useState } from 'react'

// Css
import "./SignUp.scss";

// Image
import Logo from '../../../assets/images/authentication/logo.svg';

// Components
import SignUp from './sign-up/SignUp';
import OtpVerification from '../otp-verification/OtpVerification';
import CreateProfile from './create-profile/CreateProfile';
import Congratulations from './congratulations/Congratulations';
import ServiceDetail from './service-detail/ServiceDetail';


const SignUpFlow = ({ role }) => {

    console.log(role);
    // const IsRoleUser = role === "user";

    const [authStep, setAuthStep] = useState(1);
    const [email, setEmail] = useState("");

    return (        
        <>

            {/* ------ SignUp-Flow Start ------ */}
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

                            <div className="progress">
                                <div className={`data ${authStep === 1 ? 'active' : ''}`}>
                                    <div className="d-flex align-items-center">
                                        <div className={`number ${authStep === 1 ? 'active' : ''}`}><p>1</p></div>
                                        <span>Sign up your account</span>
                                    </div>
                                </div>

                                <div className="line"></div>

                                <div className={`data ${authStep === 2 ? 'active' : ''}`}>
                                    <div className="d-flex align-items-center">
                                        <div className={`number ${authStep === 2 ? 'active' : ''}`}><p>2</p></div>
                                        <span>Verify your account</span>
                                    </div>
                                </div>

                                <div className="line"></div>

                                <div className={`data ${authStep === 3 || authStep === 4 || authStep === 5 ? 'active' : ''}`}>
                                    <div className="d-flex align-items-center">
                                        <div className={`number ${authStep === 3 || authStep === 4 || authStep === 5 ? 'active' : ''}`}><p>3</p></div>
                                        <span>Complete your profile</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 px-0">
                        <div className="right">

                            {/* --- Sign-Up --- */}
                            {authStep === 1 && (
                                <SignUp authStep={authStep} setAuthStep={setAuthStep} setEmail={setEmail} role={role} />
                            )}

                            {/* --- OTP-Verification --- */}
                            {authStep === 2 && (
                                <OtpVerification authStep={authStep} setAuthStep={setAuthStep} authType="sign-up" email={email} role={role} />
                            )}

                            {/* --- Create-Profile --- */}
                            {authStep === 3 && (
                                <CreateProfile authStep={authStep} setAuthStep={setAuthStep} role={role} />
                            )}

                            {/* --- Congratulations --- */}
                            {authStep === 4 && (
                                <Congratulations authStep={authStep} setAuthStep={setAuthStep} role={role} />
                            )}

                            {/* --- Service-Detail --- */}
                            {authStep === 5 && (
                                <ServiceDetail authStep={authStep} setAuthStep={setAuthStep} role={role} />
                            )}

                        </div>
                    </div>
                </div>
            </section>
            {/* ------ SignUp-Flow End ------ */}

        </>
    )
}

export default SignUpFlow;