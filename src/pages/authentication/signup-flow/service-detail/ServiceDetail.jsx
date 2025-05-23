import React, { useState } from 'react'

// Image
import CreateProfileLogo from '../../../../assets/images/authentication/create-profile-logo.svg';
import close_img from '../../../../assets/images/authentication/close_img.svg';
import UploadIcon from '../../../../assets/images/upload-icon.svg'
import { reqToAgentWorkProfile } from '../../../../reduxToolkit/services/agent/auth/agentAuthServices';
import { useDispatch, useSelector } from 'react-redux';
import { loaders } from '../../../../components/loader/loaders/Loader';

const initialState = {
    type: "individual",
    workTitle: "",
    experience: "",
    service: "",
    companyName: "",
    totalAgent: ""
}

const ServiceDetail = ({ authStep, setAuthStep, role }) => {

    const IsRoleUser = role === "user";
    const dispatch = useDispatch();
    const loader = useSelector((state) => state.userAuth.loader);
    const [formData, setFormData] = useState(initialState);
    const [files, setFiles] = useState([]);

    const handleFileChange = (e) => {
        const selectedFiles = Array.from(e.target.files);
        setFiles(prevFiles => {
            const combined = [...prevFiles, ...selectedFiles];
            return combined.slice(0, 10);
        });
    };

    const handleRemove = (indexToRemove) => {
        setFiles(prevFiles => prevFiles.filter((_, index) => index !== indexToRemove));
    };

    const handleChange = (e) => {
        const { name, value } = e.target;

        if (name === "experience") {
            if (!/^\d*$/.test(value)) return;
        }

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formPayload = new FormData();
        formPayload.append("type", formData.type);
        formPayload.append("workTitle", formData.workTitle);
        formPayload.append("experience", formData.experience);
        formPayload.append("service", formData.service);
        formPayload.append("companyName", formData.companyName);
        formPayload.append("totalAgent", formData.totalAgent);
        if (files && files.length > 0) {
            files.forEach(file => {
                formPayload.append("document", file);
            });
        }

        const res = await dispatch(reqToAgentWorkProfile(formPayload))
        if (res?.payload?.data?.status) {
            localStorage.removeItem("otp-verify-token");
            setAuthStep(4); // Redirect to Congratulations
        }
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
                            name="type"
                            className="form-check-input"
                            value={"individual"}
                            checked={formData.type === "individual"}
                            onChange={handleChange}
                            required
                        />
                        <label className="form-check-label" htmlFor="individual">
                            Individual
                        </label>
                    </div>
                    <div className="form-check">
                        <input
                            type="radio"
                            id="company"
                            name="type"
                            className="form-check-input"
                            value={"company"}
                            checked={formData.type === "company"}
                            onChange={handleChange}
                            required
                        />
                        <label className="form-check-label" htmlFor="company">
                            Company
                        </label>
                    </div>
                </div>

                {formData.type === "company" && (
                    <div className='mb-4'>
                        <input
                            type="text"
                            id="companyName"
                            name="companyName"
                            className="form-control"
                            placeholder="Enter your company name"
                            onChange={handleChange}
                            required
                        />
                    </div>
                )}

                <div className='mb-4'>
                    <input
                        type="text"
                        id="workTitle"
                        name="workTitle"
                        className="form-control"
                        placeholder="Enter your work"
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className='mb-4'>
                    <input
                        type="text"
                        inputMode="numeric"
                        pattern="[0-9]*"
                        id="experience"
                        name="experience"
                        className="form-control"
                        placeholder="Enter your experience"
                        onChange={handleChange}
                        value={formData.experience || ""}
                        required
                    />
                </div>

                {formData.type === "company" && (
                    <div className='mb-4'>
                        <input
                            type="text"
                            id="totalAgent"
                            name="totalAgent"
                            className="form-control"
                            placeholder="How many agents you have"
                            onChange={handleChange}
                            required
                        />
                    </div>
                )}

                <div className="mb-4">
                    <div className="form-control">
                        <label htmlFor="upload-input" className="m-0 w-100 d-flex justify-content-between" style={{ color: '#9E9E9E', fontWeight: '500', cursor: 'pointer' }}>
                            Upload document <img src={UploadIcon} alt="UploadIcon" />
                        </label>
                        <input
                            id="upload-input"
                            type="file"
                            onChange={handleFileChange}
                            className="d-none"
                            multiple
                            max={'10'}
                        />
                    </div>
                    {files.length > 0 && (
                        <div className="mt-2 text-start d-flex flex-wrap gap-3">
                            {files.map((file, index) => (
                                <span key={index} className="position-relative d-inline-flex align-items-center">
                                    <img
                                        src={URL.createObjectURL(file)}
                                        alt={file.name}
                                        style={{
                                            width: '140px',
                                            height: '140px',
                                            objectFit: 'contain',
                                            objectPosition: 'center'
                                        }}
                                    />
                                    <button
                                        type="button"
                                        className="border-0 position-absolute"
                                        style={{
                                            background: "transparent",
                                            right: "8px",
                                            top: '5px'
                                        }}
                                        onClick={() => handleRemove(index)}
                                    >
                                        <img src={close_img} alt="close_img" />
                                    </button>
                                </span>
                            ))}
                        </div>
                    )}

                </div>

                <div className='mb-4'>
                    <select
                        id="service"
                        name="service"
                        className="form-select"
                        onChange={handleChange}
                    >
                        <option value="">Select Your Service</option>
                        <option value="frontend">Frontend developer</option>
                        <option value="backend">Backend development</option>
                        <option value="flutter">Flutter development</option>
                    </select>
                </div>

                <div>
                    <button type='submit' className='auth_btn' disabled={loader}>
                        {
                            loader ?
                                loaders.button
                                :
                                "Submit"
                        }
                    </button>
                </div>
            </form>
            {/* ------ Service-Detail End ------ */}

        </>
    )
}

export default ServiceDetail;