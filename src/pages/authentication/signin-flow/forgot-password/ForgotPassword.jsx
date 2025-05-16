import React from 'react';
import { Link } from 'react-router-dom';

// Image
import ForgotPasswordLogo from '../../../../assets/images/authentication/forgot-password-logo.svg';

const ForgotPassword = ({ authStep, setAuthStep }) => {


    const handleSubmit = (e) => {
        e.preventDefault();

        setAuthStep(3); // Redirect to OTP-Verification
    }

    return (
        <>

            {/* ------ Forgot-Password Start ------ */}
            <div className="introducation">
                <div className='logo_img'>
                    <img src={ForgotPasswordLogo} alt="" className='img-fluid' />
                </div>

                <div className="info">
                    <h1>Forgot Password</h1>
                    <p className='mb-0'>
                        Please enter your email for <br />
                        forgot password
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

                <div>
                    <button type='submit' className='auth_btn'>
                        Submit
                    </button>
                </div>
            </form>
            {/* ------ Forgot-Password End ------ */}

        </>
    )
}

export default ForgotPassword;