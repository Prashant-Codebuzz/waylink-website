import React, { useState } from 'react'

// Image
import CreatePasswordLogo from '../../../../assets/images/authentication/create-password-logo.svg';
import { useDispatch } from 'react-redux';
import { reqTouserChangePass } from '../../../../reduxToolkit/services/user/auth/userAuthServices';
import PasswordInput from '../../../../assets/images/authentication/password-input.svg';
import PasswordHideInput from '../../../../assets/images/authentication/password-hide-input.svg';
import PasswordShowInput from '../../../../assets/images/authentication/password-hide-input.svg';

const initialState = {
    password: "",
    confirmPassword: ""
}

const initialShowPasswordState = {
    password: false,
    confirmPassword: false
}


const CreatePassword = ({ authStep, setAuthStep, email, role }) => {

    const IsRoleUser = role === "user";

    const dispatch = useDispatch();


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

        const payload = {
            ...formData,
            email: email,
        };

        if (IsRoleUser) {
            const res = await dispatch(reqTouserChangePass(payload))
            console.log("sss2", res);

            if (res?.payload?.data?.status) {
                setAuthStep(1); // Redirect to Sign-In
            }
        }
        else {
            setAuthStep(1); // Redirect to Sign-In
        }
    }

    return (
        <>

            {/* ------ Create-Password Start ------ */}
            <div className="introducation">
                <div className='logo_img'>
                    <img src={CreatePasswordLogo} alt="" className='img-fluid' />
                </div>

                <div className="info">
                    <h1>Create Password</h1>
                    <p className='mb-0'>
                        Please enter password  for complete <br />
                        the forgot password process
                    </p>
                </div>
            </div>

            <form onSubmit={handleSubmit}>

                <div className="mb-4">
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
                            <img src={showPassword.password ? PasswordHideInput : PasswordShowInput} alt="" className='img-fluid' />
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
                            <img src={showPassword.confirmPassword ? PasswordHideInput : PasswordShowInput} alt="" className='img-fluid' />
                        </span>
                    </div>
                </div>

                <div>
                    <button type='submit' className='auth_btn'>
                        Submit
                    </button>
                </div>
            </form>
            {/* ------ Create-Password End ------ */}

        </>
    )
}

export default CreatePassword;