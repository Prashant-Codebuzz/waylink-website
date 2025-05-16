import React, { useState } from 'react'

// Image
import CreateProfileLogo from '../../../../assets/images/authentication/create-profile-logo.svg';


const initialState = {
    service_type: "individual",
    work: "",
    experience: "",
    birthdate: "",
    country: "",
    state: "",
    city: "",
    address: "",
}

const ServiceDetail = ({ authStep, setAuthStep, role }) => {

    const IsRoleUser = role === "user";

    const [formData, setFormData] = useState(initialState);

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        setAuthStep(4); // Redirect to Congratulations
    }

    return (
        <>

            {/* ------ Service-Detail Start ------ */}
            <div className="introducation">
                <div className='logo_img'>
                    <img src={CreateProfileLogo} alt="" className='img-fluid' />
                </div>

                <div className="info">
                    <h1>Service Details</h1>
                    <p className='mb-0'>
                        Please enter your details, this details only <br />
                        you can see, no one else will be able to see it.
                    </p>
                </div>
            </div>

            <form onSubmit={handleSubmit}>
                <div className='mb-4 d-flex'>
                    <div className="form-check me-4">
                        <input
                            type="radio"
                            id="individual"
                            name="service_type"
                            className="form-check-input"
                            value={"individual"}
                            checked={formData.service_type === "individual"}
                            onChange={handleChange}
                            required
                        />
                        <label class="form-check-label" for="individual">
                            Individual
                        </label>
                    </div>
                    <div className="form-check">
                        <input
                            type="radio"
                            id="company"
                            name="service_type"
                            className="form-check-input"
                            value={"company"}
                            checked={formData.service_type === "company"}
                            onChange={handleChange}
                            required
                        />
                        <label class="form-check-label" for="company">
                            Company
                        </label>
                    </div>
                </div>

                <div className='mb-4'>
                    <input
                        type="text"
                        id="work"
                        name="work"
                        className="form-control"
                        placeholder="Enter your work"
                    />
                </div>

                <div className='mb-4'>
                    <input
                        type="text"
                        id="experience"
                        name="experience"
                        className="form-control"
                        placeholder="Enter your experience"
                    />
                </div>


                <div className='mb-4'>
                    <input
                        type="date"
                        id="birthdate"
                        name="birthdate"
                        className="form-control"
                        placeholder="Select birthdate"
                    />
                </div>

                <div className='mb-4'>
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

                <div className='mb-4'>
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

                <div className='mb-4'>
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

                <div className='mb-4'>
                    <textarea
                        type="text"
                        id="address"
                        name="address"
                        className="form-control"
                        placeholder="Enter address"
                        rows={4}
                    />
                </div>

                <div>
                    <button type='submit' className='auth_btn'>
                        Submit
                    </button>
                </div>
            </form>
            {/* ------ Service-Detail End ------ */}

        </>
    )
}

export default ServiceDetail;