import React from 'react';

// Css
import "./AgentDetail.scss";

// Image
import Agent from '../../../assets/images/agent-detail/agent.svg';
import Location from '../../../assets/images/agent-detail/location.svg';
import ReviewStar from '../../../assets/images/agent-detail/review_star.svg';
import Chat from '../../../assets/images/agent-detail/chat.svg';
import AgentButton from '../../../assets/images/home/landing/agent_btn.png';

// Static-Data
import { AgentData, AgentReviewsData } from '../../../constants/data/Data';

// Ui-Package
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { Link } from 'react-router-dom';

const AgentDetail = () => {


    // Reviews
    const options = {
        loop: true,
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
                                <h1>Sendra Lily Overview</h1>

                                <p>
                                    Reduce high taxes with Paraguay's Tax Residency with 0% tax on foreign income legally using the territorial tax system. Our flat fee service covers all core services, with no hidden costs. Visadb’s specialist, Natalia, has 8 years of experience obtaining over 1400 successful residencies. Read some of the happy customer reviews below. You are in reliable, and seasoned hands every step of the way.
                                </p>

                                <p>
                                    Reduce high taxes with Paraguay's Tax Residency with 0% tax on foreign income legally using the territorial tax system. Our flat fee service covers all core services, with no hidden costs. Visadb’s specialist, Natalia, has 8 years of experience obtaining over 1400 successful residencies. Read some of the happy customer reviews below. You are in reliable, and seasoned hands every step of the way.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <div className="right">
                                <div className="info d-flex align-items-center">
                                    <div className="agent_img">
                                        <img src={Agent} alt="Agent" className='img-fluid object-fit-cover' />
                                    </div>

                                    <div className='detail'>
                                        <h4>Sendra Lily</h4>
                                        <div className='expe'>Exp: 5 Years</div>
                                        <div className="location d-flex align-items-center">
                                            <img src={Location} alt="" className='img-fluid me-2' />
                                            Surat, Gujarat, India
                                        </div>
                                    </div>
                                </div>

                                <div className="review d-flex align-items-center">
                                    <div className="d-flex gap-1 me-2">
                                        {[...Array(5)]?.map((_, imgIndex) => (
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
                        <OwlCarousel className="owl-theme" {...options} >
                            {
                                AgentReviewsData?.map((i, index) => {
                                    return (
                                        <div className="box" key={index}>
                                            <div className="review d-flex gap-2">
                                                {[...Array(5)]?.map((_, imgIndex) => (
                                                    <img key={imgIndex} src={i?.review} alt="" className="img-fluid" />
                                                ))}
                                            </div>

                                            <p>
                                                {i?.description}
                                            </p>

                                            <div className="info d-flex align-items-center">
                                                <div className="agent_img">
                                                    <img src={i?.image} alt="" className='img-fluid' />
                                                </div>

                                                <div className="content">
                                                    <div className="name">{i?.name}</div>
                                                    <div className="role">{i?.role}</div>
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