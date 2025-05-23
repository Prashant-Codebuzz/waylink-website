import React, { useState } from 'react'

// Css
import "./EditService.scss";

// Image
import ProfileDummyUser1 from '../../../assets/images/account/profile_dummy_user.svg';
import ProfileDummyUser from '../../../assets/images/account/profile_dummy_user.jpg';
import Camera from '../../../assets/images/account/camera.svg';

const initialState = {
    profile: "",
}

const EditService = () => {

    const [formData, setFormData] = useState(initialState);

    const handleChange = (e) => {
        const { name, value, files } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: files ? files[0] : value,
        }));
    }

    const handleSubmit = (e) => {
        e.preventDefault();

    }

    return (
        <>

            {/* ------ Edit-Service Start ------ */}
            <div className="edit_service">
                <div className="container">
                    <div className="top">
                        <h1>Edit Service</h1>
                    </div>

                    <div className="second">
                        <form className="row" onSubmit={handleSubmit}>
                            <div className="col-lg-12 mb-4 text-center  ">
                                <div className="profile_container">
                                    <img
                                        src={formData.profile ? URL.createObjectURL(formData?.profile) : ProfileDummyUser}
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
                                    className="form-control"
                                    placeholder="Enter Full Name"
                                />
                            </div>
                            <div className="col-lg-6 mb-4">
                                <input
                                    type="text"
                                    pattern='\d*'
                                    maxLength={16}
                                    id="name"
                                    name="name"
                                    className="form-control"
                                    placeholder="Enter Mobile Number"
                                    onInput={(e) => e.target.value = e.target.value.replace(/[^0-9]/g, '')}
                                />
                            </div>
                            <div className="col-lg-6 mb-4">
                                <select
                                    id="gender"
                                    name="gender"
                                    className="form-select"
                                >
                                    <option value="">Select gender</option>
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                </select>
                            </div>
                            <div className="col-lg-6 mb-4">
                                <input
                                    type="date"
                                    id="birthdate"
                                    name="birthdate"
                                    className="form-control"
                                    placeholder="Select BirthDate"
                                    min={new Date().toISOString().split("T")[0]}
                                />
                            </div>
                            <div className="col-lg-6 mb-4">
                                <select
                                    id="country"
                                    name="country"
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
                                    name="state"
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
                                    name="address"
                                    className="form-control"
                                    placeholder="Enter address"
                                    rows={4}
                                />
                            </div>
                            <div className="col-lg-12">
                                <button type='submit' className='service_btn'>
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            {/* ------ Edit-Service End ------ */}

        </>
    )
}

export default EditService