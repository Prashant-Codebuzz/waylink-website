import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

// Image
import EmailLogo from '../../../../assets/images/authentication/email-logo.svg';
import GoogleLogo from '../../../../assets/images/authentication/google-logo.svg';
import { useDispatch } from 'react-redux';
import { reqToUserSignIn } from '../../../../reduxToolkit/services/userAuthServices';

const initialState = {
    email: "",
    password: "",
}


const SignIn = ({ setAuthStep }) => {

    const navigate = useNavigate();
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

        const res = await dispatch(reqToUserSignIn(formData))

        if (res?.payload?.data?.status) {
            navigate("/home2");
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
                <div className='mb-4'>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        className="form-control"
                        placeholder="Email"
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className='mb-3'>
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