import React from 'react'

// Image
import CreatePasswordLogo from '../../../../assets/images/authentication/create-password-logo.svg';

const CreatePassword = ({ authStep, setAuthStep }) => {

    const handleSubmit = (e) => {
        e.preventDefault();

        setAuthStep(1); // Redirect to Sign-In
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
                        Submit
                    </button>
                </div>
            </form>
            {/* ------ Create-Password End ------ */}

        </>
    )
}

export default CreatePassword;