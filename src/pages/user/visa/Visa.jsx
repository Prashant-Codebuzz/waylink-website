import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom';

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

// Package
import countries from 'world-countries';

// Component-Pagination
import Pagination from '../../../components/pagination/Pagination';

import { formatCountryName, normalizeCountryName } from '../../../helper';

const initialState = {
    from: "India",
    to: "Anyware"
}

const Visa = () => {

    const { category = 'all', from = 'India', to = 'Anyware' } = useParams();

    const navigate = useNavigate();
    const location = useLocation();

    console.log(from, to);


    const [countryVisa, setCountryVisa] = useState({ from: normalizeCountryName(from), to: normalizeCountryName(to) });
    const [activeVisa, setActiveVisa] = useState(category);

    const [pagination, setPagination] = useState({});
    const [currentPage, setCurrentPage] = useState(1);



    // const handleSelectCountry = (e) => {
    //     const { name, value } = e.target;

    //     // setCountry((prev) => ({
    //     //     ...prev,
    //     //     [name]: value,
    //     // }));

    //     const updatedCountry = {
    //         ...country,
    //         [name]: value,
    //     };
    //     setCountry(updatedCountry);


    //     if (updatedCountry.from && updatedCountry.to) {
    //         // navigate(`/user/visa?from=${updatedCountry.from}&to=${updatedCountry.to}`);
    //         navigate(`/user/visa/${activeVisa}/${updatedCountry.from}/${updatedCountry.to}`);
    //     }
    // }

    const handleSelectCountryVisa = (type, coun) => {
        let countryName = "";

        if (typeof coun === "string") {
            countryName = coun; // For 'Anyware' or other strings
        } else {
            countryName = coun.name.common; // For real countries
        }

        const updatedCountryVisa = {
            ...countryVisa,
            [type]: countryName,
        };
        setCountryVisa(updatedCountryVisa);


        const dropdowns = document.querySelectorAll('.dropdown-country.show');
        dropdowns.forEach(dropdown => {
            const toggle = new bootstrap.Dropdown(dropdown);
            toggle.hide();
        });

        if (updatedCountryVisa.from && updatedCountryVisa.to) {
            const formattedFrom = formatCountryName(updatedCountryVisa.from);
            const formattedTo = formatCountryName(updatedCountryVisa.to);

            navigate(`/user/visa/${activeVisa}/${formattedFrom}/${formattedTo}`);
        }
    }

    const handleCategoryChange = (category) => {
        setActiveVisa(category);
        navigate(`/user/visa/${category}/${countryVisa.from}/${countryVisa.to}`);
    };

    useEffect(() => {
        // const queryParams = new URLSearchParams(location.search);
        // const from = queryParams.get('from') || 'india';
        // const to = queryParams.get('to') || 'anyware';
        // setCountry({ from, to });
        // navigate(`/user/visa?from=${from}&to=${to}`);

        setCountryVisa({ from: normalizeCountryName(from), to: normalizeCountryName(to) });
        setActiveVisa(category);
    }, [from, to, category]);


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
                                        {/* <span className='icon'>
                                            <img src={BannerInput} alt="" className='img-fluid' />
                                        </span> */}

                                        {/* <input
                                            type="text"
                                            id="from"
                                            name="from"
                                            className="form-control"
                                            placeholder="Canada"
                                        /> */}

                                        {/* <select
                                            id="from"
                                            name="from"
                                            className={`form-select ${country.from === "" ? "default" : ""}`}
                                            value={country.from}
                                            onChange={handleSelectCountry}
                                        >
                                            <option value="" disabled>Select Country</option>
                                            <option value="">
                                                <span className='icon'>
                                                    <img src={BannerInput} alt="" className='img-fluid' />
                                                </span>
                                                ABC
                                            </option>
                                            <option value="canada">Canada</option>
                                            <option value="india">India</option>
                                            <option value="australia">Australia</option>
                                            <option value="usa">USA</option>
                                        </select> */}

                                        <button
                                            type='button'
                                            className="dropdown-country"
                                            data-bs-toggle="dropdown"
                                            aria-expanded="false"
                                        >
                                            <div className='country_img'>
                                                <img
                                                    src={
                                                        countryVisa?.from
                                                            ? `${import.meta.env.VITE_APP_COUNTRY_URL}/${countries.find((i) => i.name.common === countryVisa.from)?.cca2?.toLowerCase()}.png`
                                                            : BannerInput
                                                    }
                                                    alt=''
                                                    className='img-fluid'
                                                />
                                            </div>
                                            <span>{countryVisa?.from || 'Select Country'}</span>

                                        </button>

                                        <ul className="dropdown-menu">
                                            {
                                                countries
                                                    ?.sort((a, b) => a.name.common.localeCompare(b.name.common))
                                                    ?.map((country) => {
                                                        return (
                                                            <li key={country.cca3}>
                                                                <button
                                                                    type='button'
                                                                    className={`dropdown-item ${country.name.common === countryVisa.from ? 'focus' : ''}`}
                                                                    onClick={() => handleSelectCountryVisa("from", country)}
                                                                >
                                                                    <div className='country_icon'>
                                                                        <img
                                                                            src={`${import.meta.env.VITE_APP_COUNTRY_URL}/${country?.cca2?.toLowerCase()}.png`}
                                                                            alt=''
                                                                            className='img-fluid'
                                                                        />
                                                                    </div>
                                                                    <span>{country?.name?.common}</span>
                                                                </button>
                                                            </li>
                                                        )
                                                    })
                                            }
                                        </ul>
                                    </div>

                                    <div className="timeline">
                                        <div className="dot" />
                                        <div className="line" />
                                        <div className="dot" />
                                    </div>

                                    <div className="input-group">
                                        {/* <span className='icon'>
                                            <img src={BannerInput} alt="" className='img-fluid' />
                                        </span> */}

                                        {/* <input
                                            type='text'
                                            id="to"
                                            name="to"
                                            className="form-control"
                                            placeholder="I want to travel to"
                                        /> */}

                                        {/* <select
                                            id="to"
                                            name="to"
                                            className={`form-select ${country.to === "" ? "default" : ""}`}
                                            value={country.to}
                                            onChange={handleSelectCountry}
                                        >
                                            <option value="">I want to travel to</option>
                                            <option value="Anyware">Anyware</option>
                                            <option value="anyware">Anyware</option>
                                            <option value="canada">Canada</option>
                                            <option value="india">India</option>
                                            <option value="australia">Australia</option>
                                            <option value="usa">USA</option>
                                        </select> */}

                                        <button
                                            type='button'
                                            className="dropdown-country"
                                            data-bs-toggle="dropdown"
                                            aria-expanded="false"
                                        >
                                            <div className='country_img'>
                                                <img
                                                    src={
                                                        countryVisa.to && countryVisa?.to !== 'Anyware'
                                                            ? `${import.meta.env.VITE_APP_COUNTRY_URL}/${countries.find((i) => i.name.common === countryVisa.to)?.cca2?.toLowerCase()}.png`
                                                            : BannerInput
                                                    }
                                                    alt=''
                                                    className='img-fluid'
                                                />
                                            </div>
                                            <span>{countryVisa?.to || 'Anyware'}</span>

                                        </button>

                                        <ul className="dropdown-menu">
                                            <li key="anyware">
                                                <button
                                                    type='button'
                                                    className={`dropdown-item ${'Anyware' === countryVisa.to ? 'focus' : ''}`}
                                                    onClick={() => handleSelectCountryVisa("to", 'Anyware')}
                                                >
                                                    <div className='country_icon'>
                                                        <img
                                                            src={BannerInput}
                                                            alt='Anyware'
                                                            className='img-fluid'
                                                        />
                                                    </div>
                                                    <span>Anyware</span>
                                                </button>
                                            </li>
                                            {
                                                countries
                                                    ?.sort((a, b) => a.name.common.localeCompare(b.name.common))
                                                    ?.map((country) => {
                                                        return (
                                                            <li key={country.cca3}>
                                                                <button
                                                                    type='button'
                                                                    className={`dropdown-item ${country.name.common === countryVisa.to ? 'focus' : ''}`}
                                                                    onClick={() => handleSelectCountryVisa("to", country)}
                                                                >
                                                                    <div className='country_icon'>
                                                                        <img
                                                                            src={`${import.meta.env.VITE_APP_COUNTRY_URL}/${country?.cca2?.toLowerCase()}.png`}
                                                                            alt=''
                                                                            className='img-fluid'
                                                                        />
                                                                    </div>
                                                                    <span>{country?.name?.common}</span>
                                                                </button>
                                                            </li>
                                                        )
                                                    })
                                            }
                                        </ul>
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
                                onClick={() => handleCategoryChange('all')}
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
                                                onClick={() => handleCategoryChange(i?.key)}
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

                    <Pagination pagination={pagination} onPageChange={setCurrentPage} />


                </div>
            </div>
            {/* ------ Visa End ------ */}

        </>
    )
}

export default Visa;