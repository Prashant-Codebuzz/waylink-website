import { useState } from 'react';

// Image
import CreateProfileLogo from '../../../../assets/images/authentication/create-profile-logo.svg';
import { useDispatch } from 'react-redux';
import { reqToCreateUserProfile } from '../../../../reduxToolkit/services/user/auth/userAuthServices';
import { reqToCreateAgentProfile } from '../../../../reduxToolkit/services/agent/auth/agentAuthServices';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/bootstrap.css';
import parsePhoneNumberFromString from 'libphonenumber-js';

const initialState = {
    name: "",
    gender: "",
    dateOfBirth: "",
    country: "",
    state: "",
    city: "",
    address: ""
}

const CreateProfile = ({ authStep, setAuthStep, role }) => {

    const IsRoleUser = role === "user";
    const dispatch = useDispatch();

    const [formData, setFormData] = useState(initialState)
    const [phone, setPhone] = useState('');
    const [isValid, setIsValid] = useState(false);
    const [isError, setError] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        let formattedValue = value;

        if (name === "dateOfBirth" && value) {
            const [year, month, day] = value.split("-");
            formattedValue = `${day}-${month}-${year}`;
        }

        if (name === "mobileNumber") {
            if (!value.startsWith("+91")) {
                const digits = value.replace(/\D/g, "");
                formattedValue = `+91 ${digits}`;
            }
        }

        setFormData((prev) => ({
            ...prev,
            [name]: formattedValue,
        }));
    }

    const handlePhoneChange = (value) => {
        const parsed = parsePhoneNumberFromString("+" + value);
        if (parsed && parsed.isValid()) {
            const formatted = parsed.formatInternational();
            setPhone(formatted);
            setIsValid(true);
            setError(false)
        } else {
            setIsValid(false);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!isValid) {
            setError(true)
            return;
        }

        const payload = { ...formData, mobileNumber: phone };

        try {
            let res;
            if (IsRoleUser) {
                res = await dispatch(reqToCreateUserProfile(payload));
            } else {
                res = await dispatch(reqToCreateAgentProfile(payload));
            }

            if (res?.payload?.data?.status) {
                localStorage.removeItem("otp-verify-token");

                setAuthStep(IsRoleUser ? 4 : 5);
                setPhone("")
            }
        } catch (error) {
            console.error("Error submitting form", error);
        }
    };

    return (
        <>

            {/* ------ Create-Profile Start ------ */}
            <div className="introducation">
                <div className='logo_img'>
                    <img src={CreateProfileLogo} alt="" className='img-fluid' />
                </div>

                <div className="info">
                    <h1>Basic Details</h1>
                    <p className='mb-0'>
                        Please enter your details, this details only <br />
                        you can see, no one else will be able to see it.
                    </p>
                </div>
            </div>

            <form onSubmit={handleSubmit}>
                <div className='mb-4'>
                    <PhoneInput
                        country={'in'}
                        value={phone}
                        onChange={handlePhoneChange}
                        inputClass={`${isError ? 'error' : ''} form-control`}
                        placeholder='Enter mobile number'
                        containerClass="mb-2"
                        dropdownClass='country-list'
                        inputStyle={{
                            borderRadius: '10px',
                            width: '100%',
                            paddingLeft: '58px'
                        }}
                    />
                </div>

                <div className='mb-4'>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        className="form-control"
                        placeholder="Enter name"
                        onChange={handleChange}
                    />
                </div>

                <div className='mb-4'>
                    <select
                        id="gender"
                        name="gender"
                        className="form-select"
                        onChange={handleChange}
                    >
                        <option value="">Select gender</option>
                        <option value="male">Male</option>
                        <option value="feMale">FeMale</option>
                    </select>
                </div>

                <div className='mb-4'>
                    <input
                        type="date"
                        id="dateOfBirth"
                        name="dateOfBirth"
                        className="form-control"
                        placeholder="Select birthdate"
                        onChange={handleChange}
                    />
                </div>

                <div className='mb-4'>
                    <select
                        id="country"
                        name="country"
                        className="form-select"
                        onChange={handleChange}
                    >
                        <option value="">Select country</option>
                        <option value="india">India</option>
                        <option value="usa">Usa</option>
                    </select>
                </div>

                <div className='mb-4'>
                    <select
                        id="state"
                        name="state"
                        className="form-select"
                        onChange={handleChange}
                    >
                        <option value="">Select state</option>
                        <option value="gujarat">Gujarat</option>
                        <option value="maharashtra">Maharashtra</option>
                    </select>
                </div>

                <div className='mb-4'>
                    <select
                        id="city"
                        name="city"
                        className="form-select"
                        onChange={handleChange}
                    >
                        <option value="">Select city</option>
                        <option value="surat">Surat</option>
                        <option value="mumbai">Mumbai</option>
                    </select>
                </div>

                <div className='mb-4'>
                    <textarea
                        type="text"
                        id="address"
                        name="address"
                        className="form-control"
                        placeholder="Enter address"
                        rows={4}
                        onChange={handleChange}
                    />
                </div>

                <div>
                    <button type='submit' className='auth_btn'>
                        Submit
                    </button>
                </div>
            </form>
            {/* ------ Create-Profile End ------ */}

        </>
    )
}

export default CreateProfile;