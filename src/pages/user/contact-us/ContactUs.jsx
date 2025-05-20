import React from 'react'

// Css
import "./ContactUs.scss";

// Image
import ContactRight from '../../../assets/images/contact-us/contact_right.svg';

const ContactUs = () => {
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
                                    <form>
                                        <div className='mb-4'>
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                className="form-control"
                                                placeholder="Enter name"
                                            />
                                        </div>

                                        <div className='mb-4'>
                                            <input
                                                type="text"
                                                pattern='\d*'
                                                maxLength="16"
                                                id="mobile"
                                                name="mobile"
                                                className="form-control"
                                                placeholder="Enter mobile number"
                                                onInput={(e) => e.target.value = e.target.value.replace(/[^0-9]/g, '')}
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
                                                placeholder="Enter message"
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