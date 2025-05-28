import React, { useState } from 'react'

// Css
import "./Review.scss";

// Image
import ReviewUser from '../../../assets/images/review/review_user.svg';
import ReviewStar from '../../../assets/images/agent-detail/agent_star.svg';
import ReviewRight from '../../../assets/images/review/review_right.svg';

import Rating from 'react-rating';
import { SentReviewRate } from '../../../components/star-rating/StarRating';

// Ui-Package

const initialState = {
    rating: 0,
    comment: ""
}

const Review = () => {

    const [formData, setFormData] = useState(initialState);
    // console.log(formData);

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    }


    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(formData);
    }


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

                                    <form onSubmit={handleSubmit}>
                                        <div className="mb-3">
                                            <div className="reviews-star d-flex justify-content-center gap-2">
                                                {/* {[...Array(5)]?.map((_, imgIndex) => (
                                                    <img key={imgIndex} src={ReviewStar} alt="" className="img-fluid" />
                                                ))} */}
                                            </div>

                                            <div className="reviews-star d-flex justify-content-center gap-2">
                                                <Rating
                                                    initialRating={formData.rating}
                                                    onChange={(value) => {
                                                        setFormData((prev) => ({ ...prev, rating: value }))
                                                    }}
                                                    emptySymbol={<SentReviewRate stroke="#040273" />}
                                                    fullSymbol={<SentReviewRate bgColor="#040273" starColor="#fff" />}
                                                />
                                            </div>
                                        </div>
                                        <div className="mb-4">
                                            <textarea
                                                type="text"
                                                id="comment"
                                                name="comment"
                                                className="form-control"
                                                placeholder="Enter your review"
                                                rows={4}
                                                value={formData.comment}
                                                onChange={handleChange}
                                                required
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