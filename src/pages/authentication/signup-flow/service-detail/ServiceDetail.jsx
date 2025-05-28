import React, { useState } from 'react'

// Image
import CreateProfileLogo from '../../../../assets/images/authentication/create-profile-logo.svg';
import CloseButtonImg from '../../../../assets/images/authentication/close_btn.svg';
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
    totalAgent: "",
    document: [],
}

const ServiceDetail = ({ authStep, setAuthStep, role }) => {

    const IsRoleUser = role === "user";

    const dispatch = useDispatch();

    const loader = useSelector((state) => state.userAuth.loader);

    const [formData, setFormData] = useState(initialState);
    console.log(formData);

    const handleChange = (e) => {
        const { name, value, files } = e.target;

        if (name === "type") {
            setFormData((prev) => ({
                ...prev,
                type: value,
                workTitle: "",
                experience: "",
                service: "",
                companyName: "",
                totalAgent: "",
                document: [],
            }));
        }
        else if (name === "document" && files) {
            const selectedFiles = Array.from(files);
            console.log(selectedFiles);

            setFormData((prev) => ({
                ...prev,
                document: [...prev.document, ...selectedFiles].slice(0, 10),
            }));
        }
        else {
            setFormData((prev) => ({
                ...prev,
                [name]: value,
            }));
        }
    }

    const handleRemove = (index) => {
        setFormData((prev) => ({
            ...prev,
            document: prev.document.filter((_, i) => i !== index)
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
        formData?.document?.forEach((doc) => {
            formPayload.append("document", doc);
        })

        const res = await dispatch(reqToAgentWorkProfile(formPayload))
    console.log(res);

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
                            value={formData.companyName}
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
                        value={formData.workTitle}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className='mb-4'>
                    <input
                        type="text"
                        pattern='\d*'
                        id="experience"
                        name="experience"
                        className="form-control"
                        placeholder="Enter your experience"
                        value={formData.experience}
                        onChange={handleChange}
                        onInput={(e) => e.target.value = e.target.value.replace(/[^0-9]/g, '')}
                        required
                    />
                </div>

                {formData.type === "company" && (
                    <div className='mb-4'>
                        <input
                            type="text"
                            pattern='\d*'
                            id="totalAgent"
                            name="totalAgent"
                            className="form-control"
                            placeholder="How many agents you have"
                            value={formData.totalAgent}
                            onChange={handleChange}
                            onInput={(e) => e.target.value = e.target.value.replace(/[^0-9]/g, '')}
                            required
                        />
                    </div>
                )}

                <div className="mb-4">
                    <div className="form-control mb-3">
                        <label htmlFor="document" className="m-0 w-100 d-flex justify-content-between" style={{ color: '#9E9E9E', fontWeight: '500', cursor: 'pointer' }}>
                            Upload document
                            <img src={UploadIcon} alt="UploadIcon" className='img-fluid' />
                        </label>
                        <input
                            type="file"
                            id="document"
                            name='document'
                            className="d-none"
                            onChange={handleChange}
                            accept='image/*'
                            multiple
                            max={'10'}
                            required
                        />
                    </div>

                    {
                        formData?.document?.length > 0 && (
                            <div className="document_view">
                                {formData?.document?.map((img, index) => (
                                    <div key={index} className="document">
                                        <img src={URL.createObjectURL(img)} alt={img.name} className='image' />
                                        <button
                                            type="button"
                                            className="close_btn"
                                            onClick={() => handleRemove(index)}
                                        >
                                            <img src={CloseButtonImg} alt="close_img" className='img-fluid' />
                                        </button>
                                    </div>
                                ))}
                            </div>
                        )}
                </div>


                <div className='mb-4'>
                    <select
                        id="service"
                        name="service"
                        className="form-select"
                        value={formData.service}
                        onChange={handleChange}
                        required
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
            </form >
            {/* ------ Service-Detail End ------ */}

        </>
    )
}

export default ServiceDetail;