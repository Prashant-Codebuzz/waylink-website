import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

// Image
import EmailLogo from '../../../../assets/images/authentication/email-logo.svg';
import GoogleLogo from '../../../../assets/images/authentication/google-logo.svg';

import EmailInput from '../../../../assets/images/authentication/email-input.svg';
import PasswordInput from '../../../../assets/images/authentication/password-input.svg';
import PasswordHideInput from '../../../../assets/images/authentication/password-hide-input.svg';
import PasswordShowInput from '../../../../assets/images/authentication/password-hide-input.svg';

// Loader
import { loaders } from '../../../../components/loader/loaders/Loader';

import { useDispatch, useSelector } from 'react-redux';
import { reqToRegisterUser } from '../../../../reduxToolkit/services/user/auth/userAuthServices';
import { reqToRegisterAgent } from '../../../../reduxToolkit/services/agent/auth/agentAuthServices';

const initialState = {
    email: "",
    password: "",
    confirmPassword: ""
}

const initialShowPasswordState = {
    password: false,
    confirmPassword: false
}

const SignUp = ({ authStep, setAuthStep, setEmail, role }) => {

    const IsRoleUser = role === "user";

    const dispatch = useDispatch();

    const loader = useSelector((state) => state.userAuth.loader);


    const [formData, setFormData] = useState(initialState);

    const [showPassword, setShowPassword] = useState(initialShowPasswordState);

    const PasswordShowHide = (field) => {
        setShowPassword((prev) => ({
            ...prev,
            [field]: !prev[field],
        }));
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
            const res = await dispatch(reqToRegisterUser(formData))

            if (res?.payload?.data?.status) {
                setAuthStep(2); // Redirect to OTP-Verification
                setEmail(formData.email)
            }
        }
        else {
            const res = await dispatch(reqToRegisterAgent(formData))

            if (res?.payload?.data?.status) {
                setAuthStep(2); // Redirect to OTP-Verification
                setEmail(formData.email)
            }
        }

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

                <div className='mb-4'>
                    <div className={`input-group ${formData.password ? 'active' : ''}`}>
                        <span className='icon'>
                            <img src={PasswordInput} alt="" className='img-fluid' />
                        </span>

                        <input
                            type={showPassword.password ? "text" : "password"}
                            id="password"
                            name="password"
                            className="form-control"
                            placeholder="Password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                        />

                        <span className='icon password cursor-pointer' onClick={() => PasswordShowHide('password')}>
                            <img src={showPassword ? PasswordHideInput : PasswordShowInput} alt="" className='img-fluid' />
                        </span>
                    </div>
                </div>

                <div className='mb-4'>
                    <div className={`input-group ${formData.confirmPassword ? 'active' : ''}`}>
                        <span className='icon'>
                            <img src={PasswordInput} alt="" className='img-fluid' />
                        </span>

                        <input
                            type={showPassword.confirmPassword ? "text" : "password"}
                            id="confirmPassword"
                            name="confirmPassword"
                            className="form-control"
                            placeholder="Re-enter password"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            required
                        />

                        <span className='icon password cursor-pointer' onClick={() => PasswordShowHide('confirmPassword')}>
                            <img src={showPassword ? PasswordHideInput : PasswordShowInput} alt="" className='img-fluid' />
                        </span>
                    </div>
                </div>

                <div>
                    <button
                        type='submit'
                        className={`auth_btn`}
                        disabled={loader}
                    >
                        {
                            loader ?
                                loaders.button
                                :
                                "Sign up"
                        }
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
                Already have an account? <Link to="/user/sign-in">Sign in</Link>
            </p>
            {/* ------ Sign-Up End ------ */}

        </>
    )
}

export default SignUp;