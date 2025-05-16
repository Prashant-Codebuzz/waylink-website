import React from 'react';

// Image
import CreateProfileLogo from '../../../../assets/images/authentication/create-profile-logo.svg';

const CreateProfile = ({ authStep, setAuthStep }) => {

    const handleSubmit = (e) => {
        e.preventDefault();

        setAuthStep(4); // Redirect to Congratulations
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
                        id="phone"
                        name="phone"
                        className="form-control"
                        placeholder="Enter mobile number"
                        onInput={(e) => e.target.value = e.target.value.replace(/[^0-9]/g, '')}
                    />
                </div>

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
                    <select
                        id="gender"
                        name="gender"
                        className="form-select"
                    >
                        <option value="">Select gender</option>
                        <option value="male">Male</option>
                        <option value="feMale">FeMale</option>
                    </select>
                </div>

                <div className='mb-4'>
                    <input
                        type="date"
                        id="name"
                        name="name"
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
            {/* ------ Create-Profile End ------ */}

        </>
    )
}

export default CreateProfile;