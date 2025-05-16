import React, { useState } from 'react'

// Image
import CreatePasswordLogo from '../../../../assets/images/authentication/create-password-logo.svg';
import { useDispatch } from 'react-redux';
import { reqTouserChangePass } from '../../../../reduxToolkit/services/userAuthServices';

const initialState = {
    password: "",
    confirmPassword: ""
}
const CreatePassword = ({ authStep, setAuthStep, email }) => {
    const dispatch = useDispatch();
    const [formData, setFormData] = useState(initialState)

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

        const res = await dispatch(reqTouserChangePass(payload))
        if (res?.payload?.data?.status) {
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
                <div className='mb-4'>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        className="form-control"
                        placeholder="Password"
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className='mb-4'>
                    <input
                        type="password"
                        id="confirmPassword"
                        name="confirmPassword"
                        className="form-control"
                        placeholder="Re-enter password"
                        onChange={handleChange}
                        required
                    />
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