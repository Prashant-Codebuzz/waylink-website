import React from 'react'
import { Link, useNavigate } from 'react-router-dom';

// Image
import EmailLogo from '../../../../assets/images/authentication/email-logo.svg';
import GoogleLogo from '../../../../assets/images/authentication/google-logo.svg';

const SignIn = ({ authStep, setAuthStep }) => {

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        navigate("/home2");
    }


    const handleForgotPassword = () => {
        setAuthStep(2); // Redirect to Forgot-Password
    }


    return (
        <>

            {/* ------ Sign-In Start ------ */}
            <div className="introducation">
                <div className='logo_img'>
                    <img src={EmailLogo} alt="" className='img-fluid' />
                </div>

                <div className="info">
                    <h1>Sign in With Email</h1>
                    <p className='mb-0'>
                        Please enter your email & password <br />
                        for sign in
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

                <div className='mb-3'>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        className="form-control"
                        placeholder="Password"
                    />
                </div>

                <div className='mb-4 text-end forgot-password'>
                    <Link onClick={handleForgotPassword}>Forgot Password?</Link>
                </div>

                <div>
                    <button type='submit' className='auth_btn'>
                        Sign in
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
                Don’t have an account? <Link to="/sign-up">Sign up</Link>
            </p>
            {/* ------ Sign-In End ------ */}

        </>
    )
}

export default SignIn;