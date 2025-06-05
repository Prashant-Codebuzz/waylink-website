import React, { useEffect, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

// Css
import "./Agent.scss";

// Image
import BannerInput from '../../../assets/images/home/user/banner-input.svg';
import FilterIcon from '../../../assets/images/filter_icon.svg';
import SearchInput from '../../../assets/images/search-input.svg';
import AgentReviewStar from '../../../assets/images/home/agent/agent_review_star.svg';
import AgentButton from '../../../assets/images/home/landing/agent_btn.png';

// Static-Data
import { AgentData, AgentFilterData, CountryData, LatestNewsData, TestimonialsData } from '../../../constants/data/Data';

// Component-Pagination
import Pagination from '../../../components/pagination/Pagination';

import { useDispatch, useSelector } from 'react-redux';
import { reqToGetAllAgent } from '../../../reduxToolkit/services/user/default/agentListServices';

import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

import countries from 'world-countries';

import Rating from 'react-rating';
import { AgentRate } from '../../../components/star-rating/StarRating';


const Agent = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const user = useSelector((state) => state.allAgent);
    console.log(user);

    const [agentList, setAgentList] = useState([]);

    const [country, setCountry] = useState("India");
    const [filter, setFilter] = useState("");
    const [search, setSearch] = useState("");

    const [pagination, setPagination] = useState({});
    const [currentPage, setCurrentPage] = useState(1);

    const loader = useSelector((state) => state.allAgent.loader);

    const handleFilterChange = (e) => {
        const { value } = e.target;

        if (filter === value) {
            setFilter("");
        } else {
            setFilter(value);
        }
    }

    const handleGetAllAgentList = async (page) => {
        const payload = {
            country,
            search: search,
            filter,
            page,
            limit: 20
        };

        console.log(payload);

        const res = await dispatch(reqToGetAllAgent(payload));
        setAgentList(res?.payload?.data?.data || []);
        setPagination(res?.payload?.data?.pagination || {})
        setCurrentPage(page)
    };

    useEffect(() => {
        handleGetAllAgentList(currentPage);
    }, [search, filter, country, currentPage]);

    return (
        <>

            {/* ------ Agents Start ------ */}
            <section className='agent top_agent'>
                <div className="container">
                    <div className="top">
                        <div className="row justify-content-between align-items-center">
                            <div className="col-lg-3">
                                <h1>
                                    Top Agents
                                </h1>
                            </div>
                            <div className="col-lg-8 col-xl-8 d-flex align-items-center justify-content-between">
                                <div className='dropdown-country'>
                                    <button
                                        type='button'
                                        className="dropdown-btn"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                    >
                                        <div className='country_img me-2'>
                                            <img
                                                src={
                                                    country
                                                        ? `${import.meta.env.VITE_APP_COUNTRY_URL}/${countries.find((i) => i.name.common === country)?.cca2?.toLowerCase()}.png`
                                                        :
                                                        BannerInput
                                                }
                                                alt=''
                                                className='img-fluid'
                                            />
                                        </div>
                                        <span>{country || 'Select Country'}</span>

                                    </button>

                                    <ul className="dropdown-menu">
                                        {/* <li>
                                                <button
                                                    type='button'
                                                    className={`dropdown-item`}
                                                >
                                                    <div className='country_icon me-3'>
                                                        <img
                                                            src={BannerInput}
                                                            alt=''
                                                            className='img-fluid'
                                                        />
                                                    </div>
                                                    <span>India</span>
                                                </button>
                                            </li> */}

                                        {
                                            countries
                                                ?.sort((a, b) => a.name.common.localeCompare(b.name.common))
                                                ?.map((i) => {
                                                    return (
                                                        <li key={i.cca3}>
                                                            <button
                                                                type='button'
                                                                className={`dropdown-item ${i.name.common === country ? 'focus' : ''}`}
                                                                onClick={() => setCountry(i.name.common)}
                                                            >
                                                                <div className='country_icon me-3'>
                                                                    <img
                                                                        src={`${import.meta.env.VITE_APP_COUNTRY_URL}/${i?.cca2?.toLowerCase()}.png`}
                                                                        alt=''
                                                                        className='img-fluid'
                                                                    />
                                                                </div>
                                                                <span>{i?.name?.common}</span>
                                                            </button>
                                                        </li>
                                                    )
                                                })
                                        }
                                    </ul>
                                </div>

                                <div className='filter'>
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

                                        {/* <li>
                                            <div className="form-check dropdown-item">
                                                <input
                                                    type="checkbox"
                                                    id="expr-AtoZ"
                                                    name="filter"
                                                    className="form-check-input"
                                                    value={"expr-LowToHigh"}
                                                    checked={filter === "expr-LowToHigh"}
                                                    onChange={handleFilterChange}
                                                />
                                                <label className="htmlForm-check-label" htmlFor="expr-AtoZ">
                                                    Experience AtoZ
                                                </label>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="form-check dropdown-item">
                                                <input
                                                    type="checkbox"
                                                    id="expr-ZtoA"
                                                    name="filter"
                                                    className="form-check-input"
                                                    value={"expr-HighToLow"}
                                                    checked={filter === "expr-HighToLow"}
                                                    onChange={handleFilterChange}
                                                />
                                                <label className="htmlForm-check-label" htmlFor="expr-ZtoA">
                                                    Experience ZtoA
                                                </label>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="form-check dropdown-item">
                                                <input
                                                    type="checkbox"
                                                    id="rate-AtoZ"
                                                    name="filter"
                                                    className="form-check-input"
                                                    value={"rate-LowToHigh"}
                                                    checked={filter === "rate-LowToHigh"}
                                                    onChange={handleFilterChange}
                                                />
                                                <label className="htmlForm-check-label" htmlFor="rate-AtoZ">
                                                    Rate AtoZ
                                                </label>
                                            </div>

                                        </li>
                                        <li>
                                            <div className="form-check dropdown-item">
                                                <input
                                                    type="checkbox"
                                                    id="rate-ZtoA"
                                                    name="filter"
                                                    className="form-check-input"
                                                    value={"rate-HighToLow"}
                                                    checked={filter === "rate-HighToLow"}
                                                    onChange={handleFilterChange}
                                                />
                                                <label className="htmlForm-check-label" htmlFor="rate-ZtoA">
                                                    Rate ZtoA
                                                </label>
                                            </div>
                                        </li> */}

                                        {
                                            AgentFilterData?.map((i, index) => {
                                                return (
                                                    <li key={index}>
                                                        <div className="form-check dropdown-item">
                                                            <input
                                                                type="checkbox"
                                                                id={i.id}
                                                                name="filter"
                                                                className="form-check-input"
                                                                value={i.value}
                                                                checked={filter === i.value}
                                                                onChange={handleFilterChange}
                                                            />
                                                            <label className="htmlForm-check-label" htmlFor={i.id}>
                                                                {i.label}
                                                            </label>
                                                        </div>
                                                    </li>
                                                )
                                            })
                                        }
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
                                        placeholder="What type of agent you looking for ?"
                                        value={search}
                                        onChange={(e) => setSearch(e.target.value)}
                                    />
                                </div>
                            </div>
                        </div>
                    </div >

                    <div className="second">
                        <div className="row g-5">

                            {/* {
                                AgentData.map((i, index) => (
                                    <div className="col-lg-4 col-xl-3" key={index}>
                                        <div className="box text-center">
                                            <div className="dot"></div>
                                            <div className="agent_img">
                                                <img src={i.image} alt="" className='img-fluid object-fit-cover' />
                                            </div>
                                            <div className="info">
                                                <div className="name">{i.name}</div>
                                                <div className='expe d-flex align-items-center justify-content-center'>
                                                    <img src={AgentReviewStar} alt="" className='img-fluid me-1' />
                                                    4.5
                                                    <span className='mx-2'> | </span>
                                                    Exp: {i.experience} Years
                                                </div>
                                            </div>
                                            <button
                                                type='button'
                                                className='agent_btn'
                                                onClick={() => navigate(`/user/agent-detail/${i.id}`)}
                                            >
                                                <img src={AgentButton} alt="" className='img-fluid' />
                                            </button>
                                        </div>
                                    </div>
                                ))
                            } */}

                            {loader ? (
                                Array.from({ length: 8 }).map((_, index) => (
                                    <div className="col-lg-4 col-xl-3" key={index}>
                                        <div className="box text-center">
                                            <Skeleton circle height={100} width={100} className="mb-3" />
                                            <Skeleton height={20} width={`60%`} className="mb-2" />
                                            <Skeleton height={15} width={`40%`} className="mb-3" />
                                            <Skeleton height={40} width={100} />
                                        </div>
                                    </div>
                                ))
                            ) : agentList?.length > 0 ? (
                                agentList.map((i, index) => (
                                    <div className="col-lg-4 col-xl-3" key={index}>
                                        <div className="box text-center">
                                            <div className="dot"></div>
                                            <div className="agent_img">
                                                <img src={i.profile} alt="" className='img-fluid object-fit-cover' />
                                            </div>
                                            <div className="info">
                                                <div className="name">{i.name}</div>
                                                <div className='expe d-flex align-items-center justify-content-center'>
                                                    <img src={AgentReviewStar} alt="" className='img-fluid me-1' />
                                                    {/* <div className="expe_img">
                                                        <Rating
                                                            initialRating={parseFloat(i?.averageRating || 0).toFixed(1)}
                                                            emptySymbol={<AgentRate />}
                                                            fullSymbol={<AgentRate color="#FFB444" />}
                                                            fractions={2}
                                                            readonly
                                                        />
                                                    </div> */}
                                                    {parseFloat(i.averageRating || 0).toFixed(1)}
                                                    <span className='mx-2'> | </span>
                                                    Exp: {i.experience || 0} Years
                                                </div>
                                            </div>
                                            <button
                                                type='button'
                                                className='agent_btn'
                                                onClick={() => navigate(`/user/agent-detail/${i.id}`)}
                                            >
                                                <img src={AgentButton} alt="" className='img-fluid' />
                                            </button>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <div className="no_data">
                                    Agents Not Found
                                </div>
                            )}

                        </div>
                    </div>


                    {
                        agentList?.length > 0 && (
                            <Pagination pagination={pagination} onPageChange={handleGetAllAgentList} />
                        )
                    }


                </div >
            </section >
            {/* ------ Agents End ------ */}

        </>
    )
}

export default Agent