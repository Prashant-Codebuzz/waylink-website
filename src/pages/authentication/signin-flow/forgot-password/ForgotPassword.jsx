import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// Image
import ForgotPasswordLogo from '../../../../assets/images/authentication/forgot-password-logo.svg';
import EmailInput from '../../../../assets/images/authentication/email-input.svg';

import { useDispatch } from 'react-redux';
import { reqToUseForgetPass } from '../../../../reduxToolkit/services/user/auth/userAuthServices';
import { reqToAgentForgetPass } from '../../../../reduxToolkit/services/agent/auth/agentAuthServices';

const initialState = {
    email: ""
}


const ForgotPassword = ({ authStep, setAuthStep, setEmail, role }) => {

    const dispatch = useDispatch();
    const IsRoleUser = role === "user";

    const [formData, setFormData] = useState(initialState);

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
            const res = await dispatch(reqToUseForgetPass(formData))

            if (res?.payload?.data?.status) {
                setAuthStep(3); // Redirect to OTP-Verification
                setEmail(formData?.email)
            }
        }
        else {
            const res = await dispatch(reqToAgentForgetPass(formData))

            if (res?.payload?.data?.status) {
                setAuthStep(3); // Redirect to OTP-Verification
                setEmail(formData?.email)
            }
        }
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

                <div>
                    <button type='submit' className='auth_btn'>
                        Submit
                    </button>
                </div>
            </form >
            {/* ------ Forgot-Password End ------ */}

        </>
    )
}

export default ForgotPassword;