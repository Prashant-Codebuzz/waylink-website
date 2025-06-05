import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';

// Css
import "./MyReviews.scss";

// Image
import AgentStar from '../../../assets/images/agent-detail/agent_star.svg';

// Static-Data
import { AgentReviewsData } from '../../../constants/data/Data';

// Component-Pagination
import Pagination from '../../../components/pagination/Pagination';

import { reqToGetMyReviews } from '../../../reduxToolkit/services/user/account/accountServices';
import { reqToGetMyAgentReviews } from '../../../reduxToolkit/services/agent/account/accountServices';

import Rating from 'react-rating';
import { ReviewsRate } from '../../../components/star-rating/StarRating';

const MyReviews = ({ role }) => {

    const IsRoleUser = role === "user";

    const dispatch = useDispatch();
    const [myReviews, setMyReviews] = useState([])
    const [pagination, setPagination] = useState({});
    const [currentPage, setCurrentPage] = useState(1);

    const handleGetMyReview = async (page = 1) => {
        if (IsRoleUser) {
            const res = await dispatch(reqToGetMyReviews({
                page,
                limit: 9
            }));
            setMyReviews(res?.payload?.data?.data || []);
            setPagination(res?.payload?.data?.pagination || {});
        } else {
            const res = await dispatch(reqToGetMyAgentReviews({
                page,
                limit: 9
            }));
            setMyReviews(res?.payload?.data?.data || []);
            setPagination(res?.payload?.data?.pagination || {});
        }
    };

    useEffect(() => {
        handleGetMyReview(currentPage);
    }, [currentPage]);



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
                                myReviews?.map((i, index) => {
                                    return (
                                        <div className="col-lg-4" key={index}>
                                            <div className="box">
                                                {/* <div className="review_img d-flex gap-2">
                                                    {[...Array(5)]?.map((_, imgIndex) => (
                                                        <img key={imgIndex} src={AgentStar} alt="" className="img-fluid" />
                                                    ))}
                                                </div> */}

                                                <div className="review_img d-flex gap-2">
                                                    <Rating
                                                        initialRating={i.rating}
                                                        emptySymbol={<ReviewsRate stroke="#040273" />}
                                                        fullSymbol={<ReviewsRate bgColor="#040273" starColor="#fff" />}
                                                        readonly
                                                    />
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
                                        </div>
                                    )
                                })
                            }

                        </div>
                    </div>

                    <Pagination pagination={pagination} onPageChange={handleGetMyReview} />

                </div>
            </div >
            {/* ------ My-Reviews End ------ */}

        </>
    )
}

export default MyReviews;