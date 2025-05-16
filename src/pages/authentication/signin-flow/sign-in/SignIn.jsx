import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

// Image
import EmailLogo from '../../../../assets/images/authentication/email-logo.svg';
import GoogleLogo from '../../../../assets/images/authentication/google-logo.svg';
import EmailInput from '../../../../assets/images/authentication/email-input.svg';
import PasswordInput from '../../../../assets/images/authentication/password-input.svg';
import PasswordHideInput from '../../../../assets/images/authentication/password-hide-input.svg';
import PasswordShowInput from '../../../../assets/images/authentication/password-hide-input.svg';

import { useDispatch } from 'react-redux';
import { reqToUserSignIn } from '../../../../reduxToolkit/services/userAuthServices';


const initialState = {
    email: "",
    password: "",
}

const SignIn = ({ authStep, setAuthStep, role }) => {

    const IsRoleUser = role === "user";
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [formData, setFormData] = useState(initialState);

    const [showPassword, setShowPassword] = useState(false);

    const PasswordShowHide = () => {
        setShowPassword((prevShowPassword) => !prevShowPassword);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (IsRoleUser) {
            const res = await dispatch(reqToUserSignIn(formData))

            if (res?.payload?.data?.status) {
                navigate(IsRoleUser ? "/user/home2" : "/agent/home2");
            }
        }
        else {
            navigate(IsRoleUser ? "/user/home2" : "/agent/home2");
        }
    }


    const handleForgotPassword = () => {
        setAuthStep(2); // Redirect to Forgot-Password
    }

    // const redirectToGoogle = () => {
    //     const clientId = "YOUR_GOOGLE_CLIENT_ID";
    //     const redirectUri = "http://localhost:5175/api/auth/google/callback";
    //     const scope = "openid email profile";
    //     const responseType = "code";

    //     const url = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=${responseType}&scope=${scope}`;

    //     window.location.href = url;
    // };


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

                <div className="mb-4">

                    <div className={`input-group ${formData.email ? 'active' : ''}`}>
                        <span className='icon'>
                            <img src={EmailInput} alt="" className='img-fluid' />
                        </span>

                        <input
                            type="email"
                            id="email"
                            name="email"
                            className="form-control"
                            placeholder="Email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                </div>

                <div className='mb-3'>
                    <div className={`input-group ${formData.password ? 'active' : ''}`}>
                        <span className='icon'>
                            <img src={PasswordInput} alt="" className='img-fluid' />
                        </span>

                        <input
                            type={showPassword ? "text" : "password"}
                            id="password"
                            name="password"
                            className="form-control"
                            placeholder="Password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                        />

                        <span className='icon password cursor-pointer' onClick={PasswordShowHide}>
                            <img src={showPassword ? PasswordHideInput : PasswordShowInput} alt="" className='img-fluid' />
                        </span>
                    </div>
                </div>

                <div className='mb-4 text-end forgot-password'>
                    <Link onClick={handleForgotPassword}>Forgot Password?</Link>
                </div>

                <div>
                    <button type='submit' className='auth_btn'>
                        Sign in
                    </button>
                </div>
            </form >

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
                Don’t have an account? <Link to={IsRoleUser ? "/user/sign-up" : "/agent/sign-up"}>Sign up</Link>
            </p>
            {/* ------ Sign-In End ------ */}

        </>
    )
}

export default SignIn;