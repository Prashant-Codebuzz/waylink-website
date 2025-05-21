import React from 'react'

// Css
import "./MyReviews.scss";

// Static-Data
import { AgentData, AgentReviewsData } from '../../../constants/data/Data';

// Component-Pagination
import Pagination from '../../../components/pagination/Pagination';

const MyReviews = () => {
    return (
        <>

            {/* ------ My-Reviews Start ------ */}
            <div className="my_reviews">
                <div className="container">
                    <div className="top">
                        <h1>
                            My Reviews
                        </h1>
                    </div>

                    <div className="second">
                        <div className="row g-4">

                            {
                                [...AgentReviewsData, ...AgentReviewsData, ...AgentReviewsData]?.map((i, index) => {
                                    return (
                                        <div className="col-lg-4">
                                            <div className="box" key={index}>
                                                <div className="reviews-star d-flex gap-2">
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
                                        </div>
                                    )
                                })
                            }

                        </div>
                    </div>

                    <Pagination />

                </div>
            </div>
            {/* ------ My-Reviews End ------ */}

        </>
    )
}

export default MyReviews;