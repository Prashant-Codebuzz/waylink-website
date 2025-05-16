import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

// Image
import OtpVerificationLogo from '../../../assets/images/authentication/otp-verification-logo.svg';


const initialOtpState = ["", "", "", ""];

const initialResendState = {
    timeLeft: 120,
    disabled: true
};

const OtpVerification = ({ authStep, setAuthStep, authType }) => {

    const [otp, setOtp] = useState(initialOtpState);

    const [resend, setResend] = useState(initialResendState);


    const handleChange = (e, index) => {
        // const { value } = e.target;

        // if (/^[0-9]?$/.test(value)) {
        //     const newOtp = [...otp];
        //     newOtp[index] = value;
        //     setOtp(newOtp);

        //     // Automatically focus on the next input
        //     if (value !== "" && index < 3) {
        //         document.getElementById(`otp-input-${index + 1}`).focus();
        //     }
        // }

        const value = e.target.value.replace(/\D/g, ''); // Only digits
        if (value.length === 1) {
            const newOtp = [...otp];
            newOtp[index] = value;
            setOtp(newOtp);

            // Focus next input
            const nextInput = document.getElementById(`otp-input-${index + 1}`);
            if (nextInput) nextInput.focus();
        } else {
            // Clear the current box if not a valid single digit
            const newOtp = [...otp];
            newOtp[index] = "";
            setOtp(newOtp);
        }
    }

    const handleBackspace = (e, index) => {
        // if (e.key === "Backspace" && otp[index] === "" && index > 0) {
        //     document.getElementById(`otp-input-${index - 1}`).focus();
        // }

        if (e.key === "Backspace") {
            const newOtp = [...otp];

            if (otp[index] === "") {
                // Go to previous input
                if (index > 0) {
                    const prevInput = document.getElementById(`otp-input-${index - 1}`);
                    if (prevInput) prevInput.focus();
                }
            } else {
                // Clear current input
                newOtp[index] = "";
                setOtp(newOtp);
            }
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const enteredOtp = otp?.join('');

        if (enteredOtp.length === 4) {
            if (authType === "forgot-password") {
                setAuthStep(4); // Redirect to OTP-Verification
            }

            if (authType === "sign-up") {
                setAuthStep(3); // Redirect to Create-Profile
            }
        } else {
            alert("Please enter all 4 digits");
        }
    }


    const handleResend = () => {
        console.log("OTP Resent Clicked");

        setOtp(initialOtpState);

        setResend(initialResendState);
    }

    useEffect(() => {
        let timer;

        if (resend.disabled && resend.timeLeft > 0) {
            timer = setInterval(() => {
                setResend(prev => ({
                    ...prev,
                    timeLeft: prev.timeLeft - 1
                }));
            }, 1000);
        }

        if (resend.timeLeft === 0 && resend.disabled) {
            setResend(prev => ({
                ...prev,
                disabled: false
            }));
        }

        return () => clearInterval(timer);
    }, [resend.disabled, resend.timeLeft]);


    return (
        <>

            {/* ------ OTP-Verification Start ------ */}
            <div className="introducation">
                <div className='logo_img'>
                    <img src={OtpVerificationLogo} alt="" className='img-fluid' />
                </div>

                <div className="info">
                    <h1>OTP Verification</h1>
                    <p className='mb-0'>
                        Please enter OTP that we have send <br />
                        on testuser@gmail.com
                    </p>
                </div>
            </div>

            <form onSubmit={handleSubmit}>
                <div className='mb-3 otp-container'>
                    {otp?.map((digit, index) => (
                        <input
                            key={index}
                            type="text"
                            // pattern='\d*'
                            maxLength="1"
                            // id={`otp-${index}`}
                            id={`otp-input-${index}`}
                            name="otp"
                            className="form-control"
                            value={digit}
                            onChange={(e) => handleChange(e, index)}
                            onKeyDown={(e) => handleBackspace(e, index)}
                            // onInput={(e) => e.target.value = e.target.value.replace(/[^0-9]/g, '')}
                            autoFocus={index === 0}
                        />
                    ))}
                </div>

                <div className='mb-4 resend'>
                    <button
                        type='button'
                        className='resend_btn'
                        onClick={handleResend}
                        disabled={resend.disabled}
                    >
                        Resend
                    </button>
                    {/* in 120 sec */}
                    {resend.disabled ?
                         <span> in {resend.timeLeft} sec</span>
                        :
                         <span> in {resend.timeLeft} sec</span>
                    }
                </div>

                <div>
                    <button type='submit' className='auth_btn'>
                        Submit
                    </button>
                </div>
            </form>
            {/* ------ OTP-Verification End ------ */}

        </>
    )
}

export default OtpVerification;