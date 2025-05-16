import { useState } from 'react';

// Image
import CreateProfileLogo from '../../../../assets/images/authentication/create-profile-logo.svg';
import { useDispatch } from 'react-redux';
import { reqToCreateUserProfile } from '../../../../reduxToolkit/services/userAuthServices';

const initialState = {
    mobileNumber: "",
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

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (IsRoleUser) {
            try {
                const res = await dispatch(reqToCreateUserProfile(formData))
                if (res?.payload?.data?.status) {
                    if (IsRoleUser) {
                        setAuthStep(4); // Redirect to Congratulations
                    }
                    else {
                        setAuthStep(5); // Redirect to Service-Detail
                    }
                }
            } catch (error) {
                throw error
            }
        }
        else {
            if (IsRoleUser) {
                setAuthStep(4); // Redirect to Congratulations
            }
            else {
                setAuthStep(5); // Redirect to Service-Detail
            }
        }
    }

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
                    <input
                        type="text"
                        pattern='\d*'
                        maxLength="16"
                        id="mobileNumber"
                        name="mobileNumber"
                        className="form-control"
                        placeholder="Enter mobile number"
                        onInput={(e) => e.target.value = e.target.value.replace(/[^0-9]/g, '')}
                        onChange={handleChange}
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