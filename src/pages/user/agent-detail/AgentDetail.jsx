import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

// Css
import "./AgentDetail.scss";

// Image
import Agent from '../../../assets/images/agent-detail/agent.svg';
import Location from '../../../assets/images/agent-detail/location.svg';
import ReviewStar from '../../../assets/images/agent-detail/review_star.svg';
import Chat from '../../../assets/images/agent-detail/chat.svg';
import AgentButton from '../../../assets/images/home/landing/agent_btn.png';
import AgentStar from '../../../assets/images/agent-detail/agent_star.svg';

// Static-Data
import { AgentData, AgentReviewsData } from '../../../constants/data/Data';

// Ui-Package
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

import { useDispatch, useSelector } from 'react-redux';
import { reqToAgentReview, reqToGetAgentDetail } from '../../../reduxToolkit/services/user/default/agentListServices';

const AgentDetail = () => {
    const { id } = useParams()
    const dispatch = useDispatch()

    const [agentDetail, setAgentDetail] = useState([])
    const [agentReview, setAgentReview] = useState([])

    const handleGetAgentDetail = async () => {
        const res = await dispatch(reqToGetAgentDetail(id));
        setAgentDetail(res?.payload?.data?.data || []);
    };

    const handleGetAgentReview = async () => {
        const res = await dispatch(reqToAgentReview(id))
        setAgentReview(res?.payload?.data?.data || []);
    }

    useEffect(() => {
        handleGetAgentDetail()
        handleGetAgentReview()
    }, [])

    // Reviews
    const options = {
        loop: false,
        margin: 30,
        nav: false,
        dots: false,
        mouseDrag: true,
        touchDrag: true,
        pullDrag: false,
        autoplay: true,
        autoplayTimeout: 5000,
        responsive: {
            0: {
                items: 1
            },
            426: {
                items: 1.7
            },
            576: {
                items: 2
            },
            992: {
                items: 3
            },
        }
    };

    return (
        <>

            {/* ------ Agent-Detail Start ------ */}
            <div className="agent_detail">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7">
                            <div className="left">
                                <h1>{agentDetail?.name} Overview</h1>

                                <p>
                                    {agentDetail?.description}
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <div className="right">
                                <div className="info d-flex align-items-center">
                                    <div className="agent_img">
                                        <img src={agentDetail?.profile} alt="Agent" className='img-fluid object-fit-cover' />
                                    </div>

                                    <div className='detail'>
                                        <h4>{agentDetail?.name}</h4>
                                        <div className='expe'>Exp: {agentDetail?.experience} Years</div>
                                        <div className="location d-flex align-items-center">
                                            <img src={Location} alt="" className='img-fluid me-2' />
                                            {agentDetail?.city}, {agentDetail?.state}, {agentDetail?.country}
                                        </div>
                                    </div>
                                </div>

                                <div className="review d-flex align-items-center">
                                    <div className="d-flex gap-1 me-2">
                                        {[...Array(Math.round(agentDetail?.averageRating || 0))].map((_, imgIndex) => (
                                            <img key={imgIndex} src={ReviewStar} alt="" className="img-fluid" />
                                        ))}
                                    </div>

                                    (145 Reviews)
                                </div>

                                <button
                                    type='button'
                                    className='main_btn chat_btn'
                                >
                                    <img src={Chat} alt="" className="img-fluid me-2" />
                                    Chat Now
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* ------ Agent-Detail End ------ */}



            {/* ------ Reviews Start ------ */}
            <div className="reviews">
                <div className="container">
                    <div className="top">
                        <h1>
                            Reviews
                        </h1>
                    </div>

                    <div className="second">
                        <OwlCarousel key={agentReview?.length} className="owl-theme" {...options} >
                            {
                                agentReview?.map((i, index) => {
                                    return (
                                        <div className="box" key={index}>
                                            <div className="review d-flex gap-2">
                                                {[...Array(i?.rating)]?.map((_, imgIndex) => (
                                                    <img key={imgIndex} src={AgentStar} alt="" className="img-fluid" />
                                                ))}
                                            </div>

                                            <p>
                                                {i?.description}
                                            </p>

                                            <div className="info d-flex align-items-center">
                                                <div className="agent_img">
                                                    <img src={i?.profile} alt="" className='img-fluid' />
                                                </div>

                                                <div className="content">
                                                    <div className="name">{i?.name}</div>
                                                    <div className="role">{i?.workTitle}</div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </OwlCarousel>
                    </div>
                </div>
            </div>
            {/* ------ Reviews End ------ */}



            {/* ------ Related-Agent Start ------ */}
            <section className='agent top_agent related_agent'>
                <div className="container">
                    <div className="top">
                        <h1>
                            Related Agent
                        </h1>
                    </div>

                    <div className="second">
                        <div className="row g-5">

                            {
                                [...AgentData]?.map((i, index) => {
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

                                                <button type='button' className='agent_btn' onClick={() => navigate("/user/agent-detail/1")}>
                                                    <img src={AgentButton} alt="" className='img-fluid' />
                                                </button>
                                            </div>
                                        </div>
                                    )
                                })
                            }

                        </div>
                    </div>
                </div>
            </section>
            {/* ------ Related-Agent End ------ */}

        </>
    )
}

export default AgentDetail;