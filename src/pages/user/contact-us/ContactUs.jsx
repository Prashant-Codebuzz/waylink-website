import React, { useState } from 'react'

// Css
import "./ContactUs.scss";

// Image
import ContactRight from '../../../assets/images/contact-us/contact_right.svg';

import PhoneInput from 'react-phone-input-2';
import parsePhoneNumberFromString from 'libphonenumber-js';

import { useDispatch } from 'react-redux';
import { reqToContactUs } from '../../../reduxToolkit/services/user/default/contactUsServices';

const initialState = {
    name: "",
    country: "",
    state: "",
    city: "",
    description: ""
}

const ContactUs = () => {
    const dispatch = useDispatch();

    const [formData, setFormData] = useState(initialState)
    const [phone, setPhone] = useState('');
    const [isValid, setIsValid] = useState(false);
    const [isError, setError] = useState(false);

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

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!isValid) {
            setError(true)
            return;
        }

        const payload = { ...formData, mobileNumber: phone };

        try {
            const res = await dispatch(reqToContactUs(payload))
            if (res?.payload?.data?.status) {
                setFormData(initialState);
                setPhone('');
                setIsValid(false);
                setError(false);
                setPhone('')
            }
        } catch (error) {
            console.error("Error submitting form", error);
        }
    };

    return (
        <>

            {/* ------ Contact-Us Start ------ */}
            <div className="contact_us">
                <div className="container">
                    <div className="top">
                        <h1>
                            Contact Us
                        </h1>

                        <p>
                            If have any query, please fill the below details, our team connect with you and solved it..
                        </p>
                    </div>

                    <div className="second">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="left">
                                    <form onSubmit={handleSubmit}>
                                        <div className='mb-4'>
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                className="form-control"
                                                placeholder="Enter name"
                                                onChange={handleChange}
                                                value={formData.name}
                                                required
                                            />
                                        </div>

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
                                            <select
                                                id="country"
                                                name="country"
                                                className="form-select"
                                                onChange={handleChange}
                                                value={formData.country}
                                                required
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
                                                value={formData.state}
                                                required
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
                                                value={formData.city}
                                                required
                                            >
                                                <option value="">Select city</option>
                                                <option value="surat">Surat</option>
                                                <option value="mumbai">Mumbai</option>
                                            </select>
                                        </div>

                                        <div className='mb-4'>
                                            <textarea
                                                type="text"
                                                id="description"
                                                name="description"
                                                className="form-control"
                                                placeholder="Enter message"
                                                onChange={handleChange}
                                                value={formData.description}
                                                required
                                                rows={4}
                                            />
                                        </div>

                                        <div>
                                            <button type='submit' className='contact_btn'>
                                                Submit
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="right">
                                    <img src={ContactRight} alt="" className='img-fluid' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* ------ Contact-Us End ------ */}


        </>
    )
}

export default ContactUs;