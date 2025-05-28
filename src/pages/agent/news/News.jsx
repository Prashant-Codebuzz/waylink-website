import React, { useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

// Css
import "./News.scss";

// Image
import FilterIcon from '../../../assets/images/filter_icon.svg';
import SearchInput from '../../../assets/images/search-input.svg';
import Date from '../../../assets/images/date.svg';

// Static-Data
import { LatestNewsData } from '../../../constants/data/Data';

// Component-Pagination
import Pagination from '../../../components/pagination/Pagination';


const News = () => {

    const navigate = useNavigate();

    const [pagination, setPagination] = useState({});
    const [currentPage, setCurrentPage] = useState(1);

    return (
        <>

            {/* ------ News Start ------ */}
            <section className='latest_news news'>
                <div className="container">
                    <div className="top">
                        <div className="row justify-content-between align-items-center">
                            <div className="col-lg-6">
                                <h1>
                                    Latest News
                                </h1>
                            </div>
                            <div className="col-lg-6 d-flex align-items-center justify-content-end">
                                <div className="input-group">
                                    <span className='icon'>
                                        <img src={SearchInput} alt="" className='img-fluid' />
                                    </span>

                                    <input
                                        type="text"
                                        id="country"
                                        name="country"
                                        className="form-control"
                                        placeholder="What type of news you looking for ?"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="second">
                        <div className="row g-4 g-xl-5">

                            {
                                [...LatestNewsData, ...LatestNewsData, ...LatestNewsData]?.slice(0, 15)?.map((i, index) => {
                                    return (
                                        <div className="col-lg-4" key={index}>
                                            <div className="box">
                                                <div className="news_image">
                                                    <img src={i?.image} alt="" className='img-fluid object-fit-cover' />
                                                </div>

                                                <div className="info">
                                                    <div className="date d-flex align-items-center">
                                                        <img src={Date} alt="Date" className='img-fluid me-2' />
                                                        {i?.date}
                                                    </div>
                                                    <div className="name">
                                                        {i?.name}
                                                    </div>
                                                    <p>
                                                        {i?.description}
                                                    </p>

                                                    <button
                                                        type='button'
                                                        className='news_btn'
                                                        onClick={() => navigate("/agent/news-detail/1")}
                                                    >
                                                        Read more
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }

                        </div>
                    </div>

                    <Pagination pagination={pagination} onPageChange={setCurrentPage} />

                </div>
            </section>
            {/* ------ News End ------ */}

        </>
    )
}

export default News