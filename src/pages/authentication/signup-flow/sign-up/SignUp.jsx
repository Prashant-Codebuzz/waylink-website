import React from 'react'
import { Link, useNavigate } from 'react-router-dom';

// Image
import EmailLogo from '../../../../assets/images/authentication/email-logo.svg';
import GoogleLogo from '../../../../assets/images/authentication/google-logo.svg';

const SignUp = ({ authStep, setAuthStep }) => {

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        setAuthStep(2); // Redirect to OTP-Verification
    }


    return (
        <>

            {/* ------ Sign-Up Start ------ */}
            <div className="introducation">
                <div className='logo_img'>
                    <img src={EmailLogo} alt="" className='img-fluid' />
                </div>

                <div className="info">
                    <h1>Sign up With Email</h1>
                    <p className='mb-0'>
                        Please enter your email & password <br />
                        for sign up
                    </p>
                </div>
            </div>

            <form onSubmit={handleSubmit}>
                <div className='mb-4'>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        className="form-control"
                        placeholder="Email"
                    />
                </div>

                <div className='mb-4'>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        className="form-control"
                        placeholder="Password"
                    />
                </div>

                <div className='mb-4'>
                    <input
                        type="password"
                        id="repassword"
                        name="repassword"
                        className="form-control"
                        placeholder="Re-enter password"
                    />
                </div>

                <div>
                    <button type='submit' className='auth_btn'>
                        Sign up
                    </button>
                </div>
            </form>

            <div className='or d-flex align-items-center justify-content-center'>
                <span></span>
                <p className='mb-0'>or continue with</p>
                <span></span>
            </div>

            <button type='button' className='google_btn d-flex align-items-center justify-content-center'>
                <img src={GoogleLogo} alt="Google" className='img-fluid me-3' />
                Continue with Google
            </button>

            <p className='account mb-0'>
                Already have an account? <Link to="/sign-in">Sign in</Link>
            </p>
            {/* ------ Sign-Up End ------ */}

        </>
    )
}

export default SignUp;