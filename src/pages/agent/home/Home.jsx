import React, { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

// Css
import "./Home.scss";

// Image
import PlanIcon from '../../../assets/images/home/landing/plan_icon.png';
import BannerInput from '../../../assets/images/home/user/banner-input.svg';
import BannerRight from '../../../assets/images/home/user/banner_right.svg';
import CountryTrack from '../../../assets/images/home/landing/country_track.png';
import RightArrow from '../../../assets/images/right_arrow.svg';
import AgentButton from '../../../assets/images/home/landing/agent_btn.png';
import Date from '../../../assets/images/date.svg';
import TestimonialsLeft from '../../../assets/images/home/landing/testimonials_left.png';
import TestimonialsRight from '../../../assets/images/home/landing/testimonials_right.png';
import TestimonialsStar from '../../../assets/images/home/landing/testimonials_star.png';


// Static-Data
import { AgentData, CountryData, LatestNewsData, ProfileData, TestimonialsData } from '../../../constants/data/Data';

import countries from 'world-countries';

// Ui-Package
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

import { reqToTopReview } from '../../../reduxToolkit/services/agent/default/agentListServices';

import Rating from 'react-rating';
import { TestimonialsRate } from '../../../components/star-rating/StarRating';
import { formatCountryName } from '../../../helper';


const initialState = {
    from: "India",
    to: ""
}

const Home = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    // Testimonials
    const carouselRef = useRef();

    const handlePrev = () => {
        if (carouselRef?.current) {
            carouselRef?.current?.prev();
        }
    };

    const handleNext = () => {
        if (carouselRef?.current) {
            carouselRef?.current?.next();
        }
    };

    const options = {
        loop: false,
        margin: 30,
        nav: false,
        dots: false,
        mouseDrag: false,
        touchDrag: false,
        pullDrag: false,
        autoplay: false,
        autoplayTimeout: 5000,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 1.7
            },
            1199: {
                items: 2
            }
        }
    };


    const [countryVisa, setCountryVisa] = useState(initialState);

    const handleSelectCountryVisa = (type, country) => {

        const updatedCountryVisa = {
            ...countryVisa,
            [type]: country.name.common,
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

            navigate(`/agent/visa/all/${formattedFrom}/${formattedTo}`);
        }
    }

    

    const [newsSaved, setNewsSaved] = useState({});

    const handleNewsBookMark = (index) => {
        setNewsSaved((prev) => ({
            ...prev,
            [index]: !prev[index],
        }));
    };

    

    const [reviewList, setReviewList] = useState([])

    const handleGetTopReview = async () => {
        const res = await dispatch(reqToTopReview());
        setReviewList(res?.payload?.data?.data);
    }

    useEffect(() => {
        handleGetTopReview();
    }, []);

    return (
        <>

            {/* ------ Home-Banner Start ------ */}
            <section className='user_home_banner'>
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
                                            id="country"
                                            name="country"
                                            className="form-control"
                                            placeholder="Canada"
                                        /> */}

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
                                            id="location"
                                            name="location"
                                            className="form-control"
                                            placeholder="I want to travel to"
                                        /> */}

                                        <button
                                            type='button'
                                            className={`dropdown-country ${countryVisa.to === '' ? 'default' : ''}`}
                                            data-bs-toggle="dropdown"
                                            aria-expanded="false"
                                        >
                                            <div className='country_img'>
                                                <img
                                                    src={
                                                        countryVisa?.to
                                                            ? `${import.meta.env.VITE_APP_COUNTRY_URL}/${countries.find((i) => i.name.common === countryVisa.to)?.cca2?.toLowerCase()}.png`
                                                            : BannerInput
                                                    }
                                                    alt=''
                                                    className='img-fluid'
                                                />
                                            </div>
                                            <span>{countryVisa?.to || 'I want to travel to'}</span>
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
            {/* ------ Home-Banner End ------ */}



            {/* ------ Country Start ------ */}
            <section className='country'>
                <div className="country-track d-flex align-items-center">
                    {
                        [...CountryData, ...CountryData]?.map((i, index) => {
                            return (
                                <React.Fragment key={index}>
                                    <img src={CountryTrack} alt="" />
                                    <span>{i}</span>
                                </React.Fragment>
                            )
                        })
                    }
                </div>
            </section>
            {/* ------ Country End ------ */}



            {/* ------ Profile Start ------ */}
            <div className="profile">
                <div className="container">
                    <div className="row g-4 g-xl-5">

                        {
                            ProfileData?.map((i, index) => {
                                return (
                                    <div className="col-12 col-lg-4" key={index}>
                                        <div className="box d-flex align-items-center">
                                            <div className="profile_img">
                                                <img src={i?.image} alt="" className='img-fluid' />
                                            </div>
                                            <div className="info">
                                                <h6>{i?.name}</h6>
                                                <div className="num">{i?.count}</div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }

                    </div>
                </div>
            </div>
            {/* ------ Profile End ------ */}



            {/* ------ Latest-News Start ------ */}
            <section className='latest_news'>
                <div className="container">
                    <div className="top d-flex justify-content-between align-items-center">
                        <h1>
                            Latest News
                        </h1>

                        <Link
                            to="/agent/news"
                            className='see_all d-flex align-items-center'
                        >
                            See All
                            <img src={RightArrow} alt="" className='img-fluid ms-2' />
                        </Link>
                    </div>

                    <div className="second">
                        <div className="row g-4 g-xl-5">

                            {
                                LatestNewsData?.map((i, index) => {
                                    return (
                                        <div className="col-lg-4" key={index}>
                                            <div
                                                className={`box ${newsSaved[index] ? 'saved' : ''}`}
                                            >
                                                <div
                                                    className="bookmark_click"
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        handleNewsBookMark(index);
                                                    }}
                                                />

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
                </div>
            </section>
            {/* ------ Latest-News End ------ */}



            {/* ------ Testimonials Start ------ */}
            <section className="testimonials">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-5">
                            <div className="left">
                                <div className='title d-flex align-items-center'>
                                    <img
                                        src={PlanIcon}
                                        className="img-fluid me-2"
                                        alt=""
                                    />
                                    CLIENT TESTIMONIALS
                                </div>

                                <h1>
                                    What Customers Saying About <br className='d-none d-xl-block' /> Waylink
                                </h1>

                                <p>
                                    Embark on a Global Exploration: Experience Joy in 190+ Countries and Across the World
                                </p>

                                <div className="group_app d-flex gap-4">
                                    <button type='button' onClick={handlePrev}>
                                        <img src={TestimonialsLeft} alt="" draggable={false} className='img-fluid' />
                                    </button>
                                    <button type='button' onClick={handleNext}>
                                        <img src={TestimonialsRight} alt="" draggable={false} className='img-fluid' />
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <div className="right d-flex gap-5">
                                <OwlCarousel key={reviewList?.length} ref={carouselRef} className="owl-theme" {...options} >

                                    {/* {
                                        TestimonialsData?.map((i, index) => {
                                            return (
                                                <div className="box" key={index}>
                                                    <div className="client-img">
                                                        <img src={i?.image} alt="" className='img-fluid' />
                                                    </div>

                                                    <div className="info">
                                                        <div className="name">{i?.name}</div>
                                                        <div className="org">{i?.organization}</div>
                                                    </div>

                                                    <div className="review-img d-flex gap-1">
                                                        {[...Array(5)]?.map((_, imgIndex) => (
                                                            <img key={imgIndex} src={TestimonialsStar} alt="" className="img-fluid" />
                                                        ))}
                                                    </div>

                                                    <p>
                                                        {i?.description}
                                                    </p>
                                                </div>
                                            )
                                        })
                                    } */}

                                    {
                                        reviewList?.map((i, index) => {
                                            return (
                                                <div className="box" key={index}>
                                                    <div className="client-img">
                                                        <img src={i?.profile} alt="" className='img-fluid' />
                                                    </div>

                                                    <div className="info">
                                                        <div className="name">{i?.name}</div>
                                                        {/* <div className="org">{i?.organization}</div> */}
                                                    </div>

                                                    {/* <div className="review-img d-flex gap-1">
                                                        {[...Array(5)]?.map((_, imgIndex) => (
                                                            <img key={imgIndex} src={TestimonialsStar} alt="" className="img-fluid" />
                                                        ))}
                                                    </div> */}

                                                    <div className="review-img d-flex gap-1">
                                                        <Rating
                                                            initialRating={i.rating}
                                                            emptySymbol={<TestimonialsRate color="#fff" stroke="#040273" />}
                                                            fullSymbol={<TestimonialsRate color="#040273" />}
                                                            readonly
                                                        />
                                                    </div>

                                                    <p>
                                                        {i?.review}
                                                    </p>
                                                </div>
                                            )
                                        })
                                    }

                                </OwlCarousel>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* ------ Testimonials End ------ */}

        </>
    )
}

export default Home