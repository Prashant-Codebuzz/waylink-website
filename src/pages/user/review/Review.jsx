import React from 'react'

// Css
import "./Review.scss";

// Image
import ReviewUser from '../../../assets/images/review/review_user.svg';
import ReviewStar from '../../../assets/images/agent-detail/agent_star.svg';
import ReviewRight from '../../../assets/images/review/review_right.svg';


const Review = () => {
    return (
        <>

            {/* ------ Review Start ------ */}
            <div className="review">
                <div className="container">
                    <div className="top">
                        <h1>
                            Review
                        </h1>

                        <p>
                            Please give the overall rating and review to agent and service
                        </p>
                    </div>

                    <div className="second">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="left">
                                    <div className="info">
                                        <div className='reviewuser_img'>
                                            <img src={ReviewUser} alt="" className='img-fluid object-fit-cover' />
                                        </div>

                                        <div className="name">Sendra Lily</div>
                                        <p>Write your review for <span>Sendra Lily</span> service</p>
                                    </div>

                                    <form>
                                        <div className="mb-4">
                                            <div className="reviews-star d-flex justify-content-center gap-2">
                                                {[...Array(5)]?.map((_, imgIndex) => (
                                                    <img key={imgIndex} src={ReviewStar} alt="" className="img-fluid" />
                                                ))}
                                            </div>
                                        </div>
                                        <div className="mb-4">
                                            <textarea
                                                type="text"
                                                id="review"
                                                name="review"
                                                className="form-control"
                                                placeholder="Enter your review"
                                                rows={4}
                                            />
                                        </div>
                                        <div>
                                            <button type='submit' className='review_btn'>
                                                Submit
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="right">
                                    <img src={ReviewRight} alt="" className='img-fluid' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* ------ Review End ------ */}

        </>
    )
}

export default Review;