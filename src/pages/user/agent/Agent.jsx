import React, { useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';

// Css
import "./Agent.scss";

// Image
import FilterIcon from '../../../assets/images/filter_icon.svg';
import SearchInput from '../../../assets/images/search-input.svg';
import AgentButton from '../../../assets/images/home/landing/agent_btn.png';

// Static-Data
import { AgentData, CountryData, LatestNewsData, TestimonialsData } from '../../../constants/data/Data';

// Component-Pagination
import Pagination from '../../../components/pagination/Pagination';


const Agent = () => {

    const navigate = useNavigate();

    return (
        <>

            {/* ------ Agents Start ------ */}
            <section className='agent top_agent'>
                <div className="container">
                    <div className="top">
                        <div className="row justify-content-between align-items-center">
                            <div className="col-lg-6">
                                <h1>
                                    Top Agents
                                </h1>
                            </div>
                            <div className="col-lg-6 d-flex align-items-center justify-content-between">
                                {/* <div className=''> */}
                                <button type='button' className="filter_btn">
                                    <img src={FilterIcon} alt="" className='img-fluid me-3' />
                                    Filter
                                </button>

                                <div className="input-group">
                                    <span className='icon'>
                                        <img src={SearchInput} alt="" className='img-fluid' />
                                    </span>

                                    <input
                                        type="text"
                                        id="country"
                                        name="country"
                                        className="form-control"
                                        placeholder="What type of agent you looking for ?"
                                    />
                                </div>
                                {/* </div> */}
                            </div>
                        </div>
                    </div>

                    <div className="second">
                        <div className="row g-5">

                            {
                                [...AgentData, ...AgentData, ...AgentData, ...AgentData, ...AgentData]?.map((i, index) => {
                                    return (
                                        <div className="col-lg-4 col-xl-3" key={index}>
                                            <div className="box text-center">
                                                <div className="dot"></div>
                                                <div className="agent_img">
                                                    <img src={i.image} alt="" className='img-fluid object-fit-cover' />
                                                </div>

                                                <div className="info">
                                                    <div className="name">{i.name}</div>
                                                    <div className='expe'>Exp: {i.experience} Years</div>
                                                </div>

                                                <button
                                                    type='button'
                                                    className='agent_btn'
                                                    onClick={() => navigate("/user/agent-detail/1")}
                                                >
                                                    <img src={AgentButton} alt="" className='img-fluid' />
                                                </button>
                                            </div>
                                        </div>
                                    )
                                })
                            }

                        </div>
                    </div>

                    <Pagination />

                </div>
            </section>
            {/* ------ Agents End ------ */}

        </>
    )
}

export default Agent