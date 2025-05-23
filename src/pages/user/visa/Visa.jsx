import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';

// Css
import "./Visa.scss";

// Image
import PlanIcon from '../../../assets/images/home/landing/plan_icon.png';
import BannerInput from '../../../assets/images/home/user/banner-input.svg';
import BannerRight from '../../../assets/images/home/user/banner_right.svg';
import FilterIcon from '../../../assets/images/filter_icon.svg';
import SearchInput from '../../../assets/images/search-input.svg';

// Static-Data
import { VisaData } from '../../../constants/data/Data';

// Component-Pagination
import Pagination from '../../../components/pagination/Pagination';

const initialState = {
    from: "india",
    to: "anyware"
}

const Visa = () => {

    const navigate = useNavigate();
    const location = useLocation();

    const [country, setCountry] = useState(initialState);
    const [activeVisa, setActiveVisa] = useState('all');


    const handleSelectCountry = (e) => {
        const { name, value } = e.target;

        // setCountry((prev) => ({
        //     ...prev,
        //     [name]: value,
        // }));

        const updatedCountry = {
            ...country,
            [name]: value,
        };

        setCountry(updatedCountry);

        if (updatedCountry.from && updatedCountry.to) {
            navigate(`/user/visa?from=${updatedCountry.from}&to=${updatedCountry.to}`);
        }
    }

    useEffect(() => {
        const queryParams = new URLSearchParams(location.search);
        const from = queryParams.get('from') || 'india';
        const to = queryParams.get('to') || 'anyware';
        setCountry({ from, to });
        navigate(`/user/visa?from=${from}&to=${to}`);
    }, [location.search]);


    return (
        <>

            {/* ------ Visa-Banner Start ------ */}
            <section className='user_home_banner visa_banner'>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="left">
                                <div className='title d-flex align-items-center'>
                                    <img
                                        src={PlanIcon}
                                        className="img-fluid me-2"
                                        alt=""
                                    />
                                    TRUSTED IMMIGRATION PARTNER
                                </div>

                                <h1>
                                    Search Global <br />
                                    immigration Visa
                                </h1>

                                <form>
                                    <div className="input-group">
                                        <span className='icon'>
                                            <img src={BannerInput} alt="" className='img-fluid' />
                                        </span>

                                        {/* <input
                                            type="text"
                                            id="from"
                                            name="from"
                                            className="form-control"
                                            placeholder="Canada"
                                        /> */}

                                        <select
                                            id="from"
                                            name="from"
                                            className={`form-select ${country.from === "" ? "default" : ""}`}
                                            value={country.from}
                                            onChange={handleSelectCountry}
                                        >
                                            <option value="" disabled>Select Country</option>
                                            <option value="canada">Canada</option>
                                            <option value="india">India</option>
                                            <option value="australia">Australia</option>
                                            <option value="usa">USA</option>
                                        </select>
                                    </div>

                                    <div className="timeline">
                                        <div className="dot" />
                                        <div className="line" />
                                        <div className="dot" />
                                    </div>

                                    <div className="input-group">
                                        <span className='icon'>
                                            <img src={BannerInput} alt="" className='img-fluid' />
                                        </span>

                                        {/* <input
                                            type='text'
                                            id="to"
                                            name="to"
                                            className="form-control"
                                            placeholder="I want to travel to"
                                        /> */}

                                        <select
                                            id="to"
                                            name="to"
                                            className={`form-select ${country.to === "" ? "default" : ""}`}
                                            value={country.to}
                                            onChange={handleSelectCountry}
                                        >
                                            <option value="">I want to travel to</option>
                                            <option value="anyware">Anyware</option>
                                            <option value="canada">Canada</option>
                                            <option value="india">India</option>
                                            <option value="australia">Australia</option>
                                            <option value="usa">USA</option>
                                        </select>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="col-lg-6 d-flex justify-content-lg-end">
                            <div className="right">
                                <img src={BannerRight} alt="" className='img-fluid' />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* ------ Visa-Banner End ------ */}



            {/* ------ Visa Start ------ */}
            <div className="visa">
                <div className="container">
                    <div className="top">
                        <div className="row justify-content-between align-items-center">
                            <div className="col-lg-5 col-xl-6">
                                <h1>
                                    Visas
                                </h1>
                            </div>
                            <div className="col-lg-7 col-xl-6 d-flex align-items-center justify-content-between">
                                <div>
                                    <button
                                        type='button'
                                        className="filter_btn"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                    >
                                        <img src={FilterIcon} alt="" className='img-fluid me-3' />
                                        Filter
                                    </button>

                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item">Experience ZtoA</a></li>
                                        <li><a className="dropdown-item">Experience AtoZ</a></li>
                                        <li><a className="dropdown-item">Rate AtoZ</a></li>
                                        <li><a className="dropdown-item">Rate AtoZ</a></li>
                                    </ul>
                                </div>

                                <div className="input-group">
                                    <span className='icon'>
                                        <img src={SearchInput} alt="" className='img-fluid' />
                                    </span>

                                    <input
                                        type="text"
                                        id="search"
                                        name="search"
                                        className="form-control"
                                        placeholder="What type of visa you looking for ?"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="second">
                        <div className='total'>559 visas available globally from India</div>

                        <div className="group_btn d-flex flex-wrap">
                            <button
                                type='button'
                                className={`visa_btn ${activeVisa === 'all' ? 'active' : ''}`}
                                onClick={() => setActiveVisa('all')}
                            >
                                All
                            </button>

                            {
                                VisaData?.map((i, index) => {
                                    return (
                                        <React.Fragment key={index}>
                                            <button
                                                type='button'
                                                className={`visa_btn ${activeVisa === i?.key ? 'active' : ''}`}
                                                onClick={() => setActiveVisa(i?.key)}
                                            >
                                                {i?.title}
                                            </button>
                                        </React.Fragment>
                                    )
                                })
                            }
                        </div>

                        <div className="visas">
                            <div className="row g-4 g-xl-5">

                                {/* {
                                    [...VisaData, ...VisaData, ...VisaData, ...VisaData, ...VisaData, ...VisaData]?.map((i, index) => {
                                        return (
                                            <div className="col-lg-4" key={index}>
                                                <div className="box">
                                                    <div className="countrys d-flex align-items-center">
                                                        <div className="country_img">
                                                            <img src={i?.country} alt="" className='img-fluid object-fit-cover' />
                                                        </div>

                                                        <div className="info">
                                                            <div className="name">{i?.name}</div>
                                                            <div className="date">on {i?.date}</div>
                                                        </div>
                                                    </div>

                                                    <div className="type">{i?.type}</div>

                                                    <div className="city">
                                                        <div className="from">{i?.from}</div>

                                                        <div className="timeline">
                                                            <div className="dot" />
                                                            <div className="line" />
                                                            <div className="dot" />
                                                        </div>

                                                        <div className="to">{i?.to}</div>
                                                    </div>

                                                    <div className="info d-flex">
                                                        <div>
                                                            <div className="title">DURATION</div>
                                                            <div className="value">{i?.duration}</div>
                                                        </div>
                                                        <div>
                                                            <div className="title">COST</div>
                                                            <div className="value">${i?.cost}</div>
                                                        </div>
                                                        <div>
                                                            <div className="title">COMPLEXITY</div>
                                                            <div className="value">{i?.complexity}</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })
                                } */}


                                {
                                    (activeVisa === 'all'
                                        ? VisaData?.flatMap((i) => i.visa)
                                        : VisaData?.find((i) => i?.key === activeVisa)?.visa
                                    )
                                        ?.map((i, index) => {
                                            return (
                                                <div className="col-lg-4" key={index}>
                                                    <div className="box">
                                                        <div className="countrys d-flex align-items-center">
                                                            <div className="country_img">
                                                                <img src={i?.country} alt="" className='img-fluid object-fit-cover' />
                                                            </div>

                                                            <div className="info">
                                                                <div className="name">{i?.name}</div>
                                                                <div className="date">on {i?.date}</div>
                                                            </div>
                                                        </div>

                                                        <div className="type">{i?.type}</div>

                                                        <div className="city">
                                                            <div className="from">{i?.from}</div>

                                                            <div className="timeline">
                                                                <div className="dot" />
                                                                <div className="line" />
                                                                <div className="dot" />
                                                            </div>

                                                            <div className="to">{i?.to}</div>
                                                        </div>

                                                        <div className="info d-flex">
                                                            <div>
                                                                <div className="title">DURATION</div>
                                                                <div className="value">{i?.duration}</div>
                                                            </div>
                                                            <div>
                                                                <div className="title">COST</div>
                                                                <div className="value">${i?.cost}</div>
                                                            </div>
                                                            <div>
                                                                <div className="title">COMPLEXITY</div>
                                                                <div className="value">{i?.complexity}</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        })
                                }

                            </div>
                        </div>
                    </div>

                    <Pagination />

                </div>
            </div>
            {/* ------ Visa End ------ */}

        </>
    )
}

export default Visa;