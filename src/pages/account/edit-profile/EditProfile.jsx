import React, { useEffect, useState } from 'react'

// Css
import "./EditProfile.scss";

// Image
import ProfileDummyUser1 from '../../../assets/images/account/profile_dummy_user1.svg';
import ProfileDummyUser from '../../../assets/images/account/profile_dummy_user.svg';
import Camera from '../../../assets/images/account/camera.svg';
import PhoneInput from 'react-phone-input-2';
import parsePhoneNumberFromString from 'libphonenumber-js';
import { useDispatch, useSelector } from 'react-redux';
import { reqToUserEditProfile, reqToUserGetProfile } from '../../../reduxToolkit/services/user/account/accountServices';
import { reqToAgentEditProfile, reqToAgentGetProfile } from '../../../reduxToolkit/services/agent/account/accountServices';

const initialState = {
    profile: null,
    name: "",
    gender: "",
    dateOfBirth: "",
    country: "",
    state: "",
    city: "",
    address: ""
}

const EditProfile = ({ role }) => {

    const dispatch = useDispatch();

    const IsRoleUser = role === "user";

    const user = useSelector((state) => state.user);
    console.log(user);


    const [formData, setFormData] = useState(initialState);
    const [phone, setPhone] = useState('');
    const [isValid, setIsValid] = useState(false);
    const [isError, setError] = useState(false);

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        let formattedValue = value;

        if (name === "mobileNumber") {
            if (!value.startsWith("+91")) {
                const digits = value.replace(/\D/g, "");
                formattedValue = `+91 ${digits}`;
            }
        }

        setFormData((prev) => ({
            ...prev,
            [name]: files ? files[0] : formattedValue,
        }));
    };

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
        const payload = { ...formData, mobileNumber: phone }

        if (!(formData.profile instanceof File)) {
            delete payload.profile;
        }

        if (IsRoleUser) {
            const res = await dispatch(reqToUserEditProfile(payload))
            console.log(res);

            if (res?.payload?.data?.status) {
                setFormData(initialState)
                setPhone("")
                setIsValid(false);
                setError(false);
                handleGetProfile();
            }
        } else {
            const res = await dispatch(reqToAgentEditProfile(payload))

            if (res?.payload?.data?.status) {
                setFormData(initialState)
                setPhone("")
                setIsValid(false);
                setError(false);
                handleGetProfile();
            }

        }
    }


    const handleGetProfile = async () => {

        if (IsRoleUser) {
            const res = await dispatch(reqToUserGetProfile());
            console.log(res);

            if (res?.payload?.data?.status) {
                setFormData(res?.payload?.data?.data);

                setPhone(res?.payload?.data?.data?.mobileNumber);
            }
        } else {
            const res = await dispatch(reqToAgentGetProfile());
            console.log(res);

            if (res?.payload?.data?.status) {
                setFormData(res?.payload?.data?.data);

                setPhone(res?.payload?.data?.data?.mobileNumber);
            }
        }
    }

    useEffect(() => {
        handleGetProfile();
    }, []);

    return (
        <>

            {/* ------ Edit-Profile Start ------ */}
            <div className="edit_profile">
                <div className="container">
                    <div className="top">
                        <h1>Edit Profile</h1>
                    </div>

                    <div className="second">
                        <form className="row" onSubmit={handleSubmit}>
                            <div className="col-lg-12 mb-4 text-center">
                                <div className="profile_container">
                                    <img
                                        // src={formData.profile ? URL.createObjectURL(formData?.profile) : ProfileDummyUser}
                                        src={
                                            formData.profile instanceof File
                                                ? URL.createObjectURL(formData?.profile)
                                                : typeof formData.profile === 'string' && formData.profile.includes('static/icon-7797704_640.png')
                                                    ? ProfileDummyUser
                                                    : formData.profile || ProfileDummyUser
                                        }
                                        alt="Profile"
                                        className="img-fluid profile_img"
                                    />

                                    <label htmlFor="profile" className="camera_icon">
                                        <img src={Camera} alt="Upload" className='img-fluid' />
                                    </label>
                                </div>
                                <input
                                    type="file"
                                    id="profile"
                                    name="profile"
                                    className="form-control d-none"
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="col-lg-12 mb-4">
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    className="form-control"
                                    onChange={handleChange}
                                    required
                                    placeholder="Enter Full Name"
                                />
                            </div>
                            <div className='col-lg-6 mb-4'>
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
                            <div className="col-lg-6 mb-4">
                                <select
                                    id="gender"
                                    name="gender"
                                    className="form-select"
                                    onChange={handleChange}
                                    value={formData.gender}
                                    required
                                >
                                    <option value="">Select gender</option>
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                </select>
                            </div>
                            <div className="col-lg-6 mb-4">
                                <input
                                    type="date"
                                    id="dateOfBirth"
                                    name="dateOfBirth"
                                    value={formData.dateOfBirth}
                                    onChange={handleChange}
                                    required
                                    className="form-control"
                                    placeholder="Select BirthDate"
                                />
                            </div>
                            <div className="col-lg-6 mb-4">
                                <select
                                    id="country"
                                    name="country"
                                    value={formData.country}
                                    onChange={handleChange}
                                    required
                                    className="form-select"
                                >
                                    <option value="">Select country</option>
                                    <option value="india">India</option>
                                    <option value="usa">Usa</option>
                                </select>
                            </div>
                            <div className="col-lg-6 mb-4">
                                <select
                                    id="state"
                                    onChange={handleChange}
                                    name="state"
                                    value={formData.state}
                                    required
                                    className="form-select"
                                >
                                    <option value="">Select state</option>
                                    <option value="gujarat">Gujarat</option>
                                    <option value="maharashtra">Maharashtra</option>
                                </select>
                            </div>
                            <div className="col-lg-6 mb-4">
                                <select
                                    id="city"
                                    name="city"
                                    value={formData.city}
                                    onChange={handleChange}
                                    required
                                    className="form-select"
                                >
                                    <option value="">Select city</option>
                                    <option value="surat">Surat</option>
                                    <option value="mumbai">Mumbai</option>
                                </select>
                            </div>
                            <div className="col-lg-12 mb-4">
                                <textarea
                                    type="text"
                                    id="address"
                                    value={formData.address}
                                    required
                                    onChange={handleChange}
                                    name="address"
                                    className="form-control"
                                    placeholder="Enter address"
                                    rows={4}
                                />
                            </div>
                            <div className="col-lg-12">
                                <button type='submit' className='profile_btn'>
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            {/* ------ Edit-Profile End ------ */}

        </>
    )
}

export default EditProfile;