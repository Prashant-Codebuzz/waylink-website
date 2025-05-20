import React, { useEffect, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

// Css
import "./LandingHome.scss";

// Image
import PlanIcon from '../../assets/images/home/landing/plan_icon.png';
import BannerRight from '../../assets/images/home/landing/banner_right.png';
import CountryTrack from '../../assets/images/home/landing/country_track.png';
import WhoWaylinkLeft from '../../assets/images/home/landing/who_waylink_left.png';
import HowHelpIcon1 from '../../assets/images/home/landing/how_help_icon1.png';
import HowHelpIcon2 from '../../assets/images/home/landing/how_help_icon2.png';
import HowHelpIcon3 from '../../assets/images/home/landing/how_help_icon3.png';
import HowHelpIcon4 from '../../assets/images/home/landing/how_help_icon4.png';
import HowHelpIcon5 from '../../assets/images/home/landing/how_help_icon5.png';
import TrueIcon from '../../assets/images/home/landing/true_icon.png';
import OurConsultancyLeft from '../../assets/images/home/landing/our_consultancy_left.png';
import AgentButton from '../../assets/images/home/landing/agent_btn.png';
import WhyWaylinkRight from '../../assets/images/home/landing/why_waylink_right.png';
import WhyWaylinkLeft1 from '../../assets/images/home/landing/why_waylink_left1.png';
import WhyWaylinkLeft2 from '../../assets/images/home/landing/why_waylink_left2.png';
import DownloadAppLogo from '../../assets/images/home/landing/download_app_logo.png';
import DownloadAppIphone from '../../assets/images/home/landing/download_app_iphone.png';
import DownloadAppAndroid from '../../assets/images/home/landing/download_app_android.png';
import DownloadAppRight from '../../assets/images/home/landing/download_app_right.png';
import TestimonialsLeft from '../../assets/images/home/landing/testimonials_left.png';
import TestimonialsRight from '../../assets/images/home/landing/testimonials_right.png';

// import Australia from '../../assets/images/home/landing/country/australia.png';
// import Belgium from '../../assets/images/home/landing/country/belgium.png';
// import Canada from '../../assets/images/home/landing/country/canada.png';
// import Denmark from '../../assets/images/home/landing/country/denmark.png';
// import France from '../../assets/images/home/landing/country/france.png';
// import Germany from '../../assets/images/home/landing/country/germany.png';
// import Greece from '../../assets/images/home/landing/country/greece.png';
// import Hungary from '../../assets/images/home/landing/country/hungary.png';
// import Iceland from '../../assets/images/home/landing/country/iceland.png';
// import Ireland from '../../assets/images/home/landing/country/ireland.png';
// import Italy from '../../assets/images/home/landing/country/italy.png';
// import Luxembourg from '../../assets/images/home/landing/country/luxembourg.png';

// Custom-Hooks
import useScrollToSection from '../../hooks/useScrollToSection';

// Static-Data
import { AgentData, ConsultancyTabsData, CountryChoiceData, CountryData, TestimonialsData } from '../../constants/data/Data';

// Ui-Package
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { useDispatch } from 'react-redux';
import { reqToTopAgent } from '../../reduxToolkit/services/landing-home/agent/agentServices';

const LandingHome = ({ handleRoleSelect }) => {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [activeTab, setActiveTab] = useState('apply-visa-online');

    // Country
    const [activeCountry, setActiveCountry] = useState('europe');
    const [agentList, setAgentList] = useState([])

    const handleGetTopAgentList = async () => {
        const res = await dispatch(reqToTopAgent());
        setAgentList(res?.payload?.data?.data);
    }

    useEffect(() => {
        handleGetTopAgentList()
    }, [])

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


    // Scroll-To-Section
    useScrollToSection();


    return (
        <>

            {/* ------ Home-Banner Start ------ */}
            <section className='home_banner'>
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
                                    Our simple approach to
                                    immigration process
                                </h1>

                                <p>
                                    We are trusted immigration consultants who can handle your case and our
                                    professional registered agents will assist you with your visa application.
                                </p>

                                <button
                                    type="button"
                                    className='main_btn discover_btn'
                                    // onClick={() => navigate("/user/sign-in")}
                                    onClick={handleRoleSelect}
                                >
                                    Discover Solutions
                                </button>
                            </div>
                        </div>
                        <div className="col-lg-6 d-flex justify-content-end">
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



            {/* ------ Who-WayLink Start ------ */}
            <section className='who_waylink'>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-5 col-xl-5">
                            <div className="left">
                                <img src={WhoWaylinkLeft} alt="" className='img-fluid object-fit-cover' />
                            </div>
                        </div>
                        <div className="col-lg-7 col-xl-7">
                            <div className="right ms-lg-5">
                                <div className='title d-flex align-items-center'>
                                    <img
                                        src={PlanIcon}
                                        className="img-fluid me-2"
                                        alt=""
                                    />
                                    WHO ARE WAYLINK
                                </div>

                                <h1>
                                    Not just traditional visa &
                                    immigration firm
                                </h1>

                                <p>
                                    The Most Trusted Immigration and Visa Consultant. There are locations in the United states of America as well as internationally. The organization was established in 2000 on the basis of a small idea conceived.
                                </p>

                                <p className='d-flex align-items-center'>
                                    <img src={TrueIcon} alt="" className='img-fluid me-2' />
                                    We offer flexible hours to fit your busy schedule.
                                </p>
                                <p className='d-flex align-items-center'>
                                    <img src={TrueIcon} alt="" className='img-fluid me-2' />
                                    Team is committed making you feel comfort.
                                </p>

                                <button
                                    type="button"
                                    className='main_btn learn_btn'
                                    // onClick={() => navigate("/sign-in")}
                                    onClick={handleRoleSelect}
                                >
                                    Learn More
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* ------ Who-WayLink End ------ */}



            {/* ------ How-Help-Client Start ------ */}
            <section id='visa' className="how_help">
                <div className="container">
                    <div className="top">
                        <div className='title d-flex align-items-center'>
                            <img
                                src={PlanIcon}
                                className="img-fluid me-2"
                                alt=""
                            />
                            HOW WE HELP CLIENT
                        </div>

                        <h1>
                            Visa types and <br />
                            eligibility assessment
                        </h1>
                    </div>

                    <div className="second">
                        <div className="row g-5">
                            <div className="col-lg-4">
                                <div className="box">
                                    <div className="icon">
                                        <img src={HowHelpIcon1} alt="" className='img-fluid' />
                                    </div>

                                    <h5>Tourist Visa</h5>

                                    <p>
                                        Visit new places to discover with a Tourist Visa. We deliver your documents ...
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="box">
                                    <div className="icon">
                                        <img src={HowHelpIcon2} alt="" className='img-fluid' />
                                    </div>

                                    <h5>Commercial Visa</h5>

                                    <p>
                                        Developing your trade, setting up new sales channels Your visa is ready...
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-4">
                            </div>
                            <div className="col-lg-4">
                                <div className="box">
                                    <div className="icon">
                                        <img src={HowHelpIcon3} alt="" className='img-fluid' />
                                    </div>

                                    <h5>Student Visa</h5>

                                    <p>
                                        Embarking on a journey of higher education in a foreign country opens doors to...
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="box">
                                    <div className="icon">
                                        <img src={HowHelpIcon4} alt="" className='img-fluid' />
                                    </div>

                                    <h5>Residence Visa</h5>

                                    <p>
                                        Expert Guidance for a Seamless Immigration Journey Expert Guidance...
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="box">
                                    <div className="icon">
                                        <img src={HowHelpIcon5} alt="" className='img-fluid' />
                                    </div>

                                    <h5>More Visa</h5>

                                    <p>
                                        Get your Visa now for new business and earning opportunities. We deliver your...
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* ------ How-Help-Client End ------ */}



            {/* ------ Country-Choice Start ------ */}
            <section id='study-abroad' className="country_choice">
                <div className="container">
                    <div className="title">
                        <h1>
                            Make your choice for the <br />
                            preferred nation
                        </h1>
                    </div>

                    <div className="all-country">
                        <div className="group_btn d-flex justify-content-between align-items-center flex-wrap">
                            {/* <button type='button' className={`country_btn ${activeCountry === 'europe' ? 'active' : ''}`} onClick={() => setActiveCountry('europe')}>Europe</button>
                            <span></span>
                            <button type='button' className={`country_btn ${activeCountry === 'north-america' ? 'active' : ''}`} onClick={() => setActiveCountry('north-america')}>North America</button>
                            <span></span>
                            <button type='button' className={`country_btn ${activeCountry === 'asea' ? 'active' : ''}`} onClick={() => setActiveCountry('asea')}>Asea</button>
                            <span></span>
                            <button type='button' className={`country_btn ${activeCountry === 'latin-america' ? 'active' : ''}`} onClick={() => setActiveCountry('latin-america')}>Latin America</button>
                            <span></span>
                            <button type='button' className={`country_btn ${activeCountry === 'oceania' ? 'active' : ''}`} onClick={() => setActiveCountry('oceania')}>Oceania</button>
                            <span></span>
                            <button type='button' className={`country_btn ${activeCountry === 'africa' ? 'active' : ''}`} onClick={() => setActiveCountry('africa')}>Africa</button>
                            <span></span>
                            <button type='button' className={`country_btn ${activeCountry === 'antarctica' ? 'active' : ''}`} onClick={() => setActiveCountry('antarctica')}>Antarctica</button> */}

                            {CountryChoiceData?.map((i, index) => {
                                return (
                                    <React.Fragment key={index}>
                                        <button
                                            type='button'
                                            className={`country_btn ${activeCountry === i?.key ? 'active' : ''}`}
                                            onClick={() => setActiveCountry(i?.key)}
                                        >
                                            {i?.title}
                                        </button>
                                        {index !== CountryChoiceData.length - 1 && <span></span>}
                                    </React.Fragment>
                                )
                            })}
                        </div>

                        <div className="countrys">
                            <div className="row g-4">
                                {/* <div className="col-lg-4 col-xl-3">
                                    <div className="box d-flex align-items-center">
                                        <div className="country_img me-3">
                                            <img src={Canada} alt="" className='img-fluid object-fit-cover' />
                                        </div>
                                        <div className="name">
                                            Canada
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-xl-3">
                                    <div className="box d-flex align-items-center">
                                        <div className="country_img me-3">
                                            <img src={Belgium} alt="" className='img-fluid object-fit-cover' />
                                        </div>
                                        <div className="name">
                                            Belgium
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-xl-3">
                                    <div className="box d-flex align-items-center">
                                        <div className="country_img me-3">
                                            <img src={Denmark} alt="" className='img-fluid object-fit-cover' />
                                        </div>
                                        <div className="name">
                                            Denmark
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-xl-3">
                                    <div className="box d-flex align-items-center">
                                        <div className="country_img me-3">
                                            <img src={Australia} alt="" className='img-fluid object-fit-cover' />
                                        </div>
                                        <div className="name">
                                            Australia
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-xl-3">
                                    <div className="box d-flex align-items-center">
                                        <div className="country_img me-3">
                                            <img src={France} alt="" className='img-fluid object-fit-cover' />
                                        </div>
                                        <div className="name">
                                            France
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-xl-3">
                                    <div className="box d-flex align-items-center">
                                        <div className="country_img me-3">
                                            <img src={Germany} alt="" className='img-fluid object-fit-cover' />
                                        </div>
                                        <div className="name">
                                            Germany
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-xl-3">
                                    <div className="box d-flex align-items-center">
                                        <div className="country_img me-3">
                                            <img src={Greece} alt="" className='img-fluid object-fit-cover' />
                                        </div>
                                        <div className="name">
                                            Greece
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-xl-3">
                                    <div className="box d-flex align-items-center">
                                        <div className="country_img me-3">
                                            <img src={Hungary} alt="" className='img-fluid object-fit-cover' />
                                        </div>
                                        <div className="name">
                                            Hungary
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-xl-3">
                                    <div className="box d-flex align-items-center">
                                        <div className="country_img me-3">
                                            <img src={Iceland} alt="" className='img-fluid object-fit-cover' />
                                        </div>
                                        <div className="name">
                                            Iceland
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-xl-3">
                                    <div className="box d-flex align-items-center">
                                        <div className="country_img me-3">
                                            <img src={Ireland} alt="" className='img-fluid object-fit-cover' />
                                        </div>
                                        <div className="name">
                                            Ireland
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-xl-3">
                                    <div className="box d-flex align-items-center">
                                        <div className="country_img me-3">
                                            <img src={Italy} alt="" className='img-fluid object-fit-cover' />
                                        </div>
                                        <div className="name">
                                            Italy
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-xl-3">
                                    <div className="box d-flex align-items-center">
                                        <div className="country_img me-3">
                                            <img src={Luxembourg} alt="" className='img-fluid object-fit-cover' />
                                        </div>
                                        <div className="name">
                                            Luxembourg
                                        </div>
                                    </div>
                                </div> */}

                                {CountryChoiceData
                                    ?.find((i) => i?.key === activeCountry)
                                    ?.countries?.map((i, index) => {
                                        return (
                                            <div className="col-lg-4 col-xl-3" key={index}>
                                                <div className="box d-flex align-items-center">
                                                    <div className="country_img me-3">
                                                        <img src={i?.image} alt="" className='img-fluid object-fit-cover' />
                                                    </div>
                                                    <div className="name">
                                                        {i?.name}
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })}

                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* ------ Country-Choice End ------ */}



            {/* ------ Our-Consultancy Start ------ */}
            <section className='our_consultancy'>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-5 col-xxl-6">
                            <div className="left">
                                <img src={OurConsultancyLeft} alt="" className='img-fluid object-fit-cover' />
                            </div>
                        </div>
                        <div className="col-lg-7 col-xxl-6">
                            <div className="right">
                                <div className='title d-flex align-items-center'>
                                    <img
                                        src={PlanIcon}
                                        className="img-fluid me-2"
                                        alt=""
                                    />
                                    OUR CONSULTANCY
                                </div>

                                <h1>
                                    Unparalleled consultancy
                                    from experienced Agents
                                </h1>

                                <p>
                                    We provide a skilled staff to help you get the most out of your immigration. Our qualified and dependable Immigration Consultants can assist you in obtaining a favorable result in your case.
                                </p>

                                <div className='consultancy-tabs'>
                                    <div className="group_button d-flex justify-content-between">
                                        {/* <button type='button' className={`consultancy_btn ${activeTab === 'apply-visa-online' ? 'active' : ''}`} onClick={() => setActiveTab('apply-visa-online')}>Apply Visa Online</button>
                                        <button type='button' className={`consultancy_btn ${activeTab === 'immigration-resources' ? 'active' : ''}`} onClick={() => setActiveTab('immigration-resources')}>Immigration Resources</button>
                                        <button type='button' className={`consultancy_btn ${activeTab === 'important-information' ? 'active' : ''}`} onClick={() => setActiveTab('important-information')}>Important Information</button> */}

                                        {
                                            ConsultancyTabsData?.map((i, index) => {
                                                return (
                                                    <button
                                                        key={index}
                                                        type='button'
                                                        className={`consultancy_btn ${activeTab === i?.key ? 'active' : ''}`}
                                                        onClick={() => setActiveTab(i?.key)}
                                                    >
                                                        {i?.title}
                                                    </button>

                                                )
                                            })
                                        }
                                    </div>
                                    <div className="content">
                                        {/* {
                                            activeTab === 'apply-visa-online' && (
                                                <>
                                                    <p className='d-flex align-items-center'>
                                                        <img src={TrueIcon} alt="" className='img-fluid me-2' />
                                                        Monitor your progress.
                                                    </p>
                                                    <p className='d-flex align-items-center'>
                                                        <img src={TrueIcon} alt="" className='img-fluid me-2' />
                                                        User-friendly experience start.
                                                    </p>
                                                    <p className='d-flex align-items-center'>
                                                        <img src={TrueIcon} alt="" className='img-fluid me-2' />
                                                        Personal information is protected.
                                                    </p>
                                                </>
                                            )
                                        }

                                        {
                                            activeTab === 'immigration-resources' && (
                                                <>
                                                    <p className='d-flex align-items-center'>
                                                        <img src={TrueIcon} alt="" className='img-fluid me-2' />
                                                        Monitor your progress.
                                                    </p>
                                                    <p className='d-flex align-items-center'>
                                                        <img src={TrueIcon} alt="" className='img-fluid me-2' />
                                                        User-friendly experience start.
                                                    </p>
                                                    <p className='d-flex align-items-center'>
                                                        <img src={TrueIcon} alt="" className='img-fluid me-2' />
                                                        Personal information is protected.
                                                    </p>
                                                </>
                                            )
                                        }

                                        {
                                            activeTab === 'important-information' && (
                                                <>
                                                    <p className='d-flex align-items-center'>
                                                        <img src={TrueIcon} alt="" className='img-fluid me-2' />
                                                        Monitor your progress.
                                                    </p>
                                                    <p className='d-flex align-items-center'>
                                                        <img src={TrueIcon} alt="" className='img-fluid me-2' />
                                                        User-friendly experience start.
                                                    </p>
                                                    <p className='d-flex align-items-center'>
                                                        <img src={TrueIcon} alt="" className='img-fluid me-2' />
                                                        Personal information is protected.
                                                    </p>
                                                </>
                                            )
                                        } */}


                                        {
                                            ConsultancyTabsData
                                                ?.find((i) => (i?.key === activeTab))
                                                ?.content?.map((i, index) => {
                                                    return (
                                                        <p className='d-flex align-items-center' key={index}>
                                                            <img src={TrueIcon} alt="" className='img-fluid me-2' />
                                                            {i}
                                                        </p>
                                                    )
                                                })
                                        }
                                    </div>
                                </div>


                                <button
                                    type="button"
                                    className='main_btn learn_btn'
                                    // onClick={() => navigate("/user/sign-in")}
                                    onClick={handleRoleSelect}
                                >
                                    Start Your Journey
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* ------ Our-Consultancy End ------ */}



            {/* ------ Agent Start ------ */}
            <section id='agent' className='agent'>
                <div className="container">
                    <div className="top">
                        <h1>
                            Our trusted immigration  <br />
                            support agent
                        </h1>

                        <p>
                            At the heart of our commitment to providing exceptional immigration solutions stands.
                        </p>
                    </div>

                    <div className="second">
                        <div className="row g-5">

                            {
                                agentList?.slice(0, 4).map((i, index) => {
                                    return (
                                        <div className="col-lg-4 col-xl-3" key={index}>
                                            <div className="box text-center">
                                                <div className="dot"></div>
                                                <div className="agent_img">
                                                    <img src={i.profile} alt="" className='img-fluid object-fit-cover' />
                                                </div>

                                                <div className="info">
                                                    <div className="name">{i.name}</div>
                                                    <div className='expe'>Exp: {i?.experience?.length} Years</div>
                                                </div>

                                                <button type='button' className='agent_btn'>
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
            {/* ------ Agent End ------ */}



            {/* ------ Why-WayLink Start ------ */}
            <section className="why_waylink">
                <div className="container">
                    <div className="row align-items-lg-center">
                        <div className="col-lg-6">
                            <div className="left">
                                <div className='title d-flex align-items-center'>
                                    <img
                                        src={PlanIcon}
                                        className="img-fluid me-2"
                                        alt=""
                                    />
                                    WHY CHOOSE WAYLINK
                                </div>

                                <h1>
                                    Countless benefits &
                                    easy processing
                                </h1>

                                <p>
                                    You choose Waylink because immigration rules and dynamic,
                                    Complicated to apply, and its difficult to deal with the
                                    migration department and you need to increase.
                                </p>

                                <div className="content">
                                    <div className='d-flex'>
                                        <div className='me-3'>
                                            <img src={WhyWaylinkLeft1} alt="" className='img-fluid' />
                                        </div>
                                        <div>
                                            <div className="que">Legal Immigration Success</div>
                                            <p>
                                                Since 2000 waylink legal immigration <br />
                                                success rate is 99 percent. So you don't <br />
                                                have no need to worry.
                                            </p>
                                        </div>
                                    </div>
                                    <div className='d-flex'>
                                        <div className='me-3'>
                                            <img src={WhyWaylinkLeft2} alt="" className='img-fluid' />
                                        </div>
                                        <div>
                                            <div className="que">Required Documents Support</div>
                                            <p>
                                                Sometimes it is difficult for the student <br />
                                                or people which document is required.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="right">
                                <img src={WhyWaylinkRight} alt="" className='img-fluid object-fit-cover' />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* ------ Why-WayLink End ------ */}



            {/* ------ Download-App Start ------ */}
            <section className="download_app">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-xl-7">
                            <div className="left">
                                <div className="logo">
                                    <img src={DownloadAppLogo} alt="" className='img-fluid' />
                                </div>

                                <h5>
                                    Move Abroad Made Easy – Download the Emigration App Now!
                                </h5>

                                <p>
                                    Planning to live, work, or study overseas? Our app is your trusted guide for a smooth emigration journey. Get visa info, document checklists, country guides, and expert support all in one place. Track progress, avoid delays, and stay informed.
                                </p>

                                <div className="group_app d-flex gap-4">
                                    <Link>
                                        <img src={DownloadAppIphone} alt="" draggable={false} className='img-fluid' />
                                    </Link>
                                    <Link>
                                        <img src={DownloadAppAndroid} alt="" draggable={false} className='img-fluid' />
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-xl-5">
                            <div className="right">
                                <img src={DownloadAppRight} alt="" className='img-fluid' />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* ------ Download-App End ------ */}



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
                                <OwlCarousel ref={carouselRef} className="owl-theme" {...options} >
                                    {/* <div className="box">
                                        <div className="client-img">
                                            <img src={TestimonialsClient} alt="" className='img-fluid' />
                                        </div>

                                        <div className="info">
                                            <div className="name">Brooklyn Simmons</div>
                                            <div className="org">CEO at D.B.A Pvt. Ltd</div>
                                        </div>

                                        <div className="review d-flex gap-1">
                                            {[...Array(5)]?.map((_, i) => (
                                                <img key={i} src={TestimonialsStar} alt="" className="img-fluid" />
                                            ))}
                                        </div>

                                        <p>
                                            Their team's expertise and commitment to quality helped us improve efficiency across the board.
                                        </p>
                                    </div> */}

                                    {
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

                                                    <div className="review d-flex gap-1">
                                                        {[...Array(5)]?.map((_, imgIndex) => (
                                                            <img key={imgIndex} src={i?.review} alt="" className="img-fluid" />
                                                        ))}
                                                    </div>

                                                    <p>
                                                        {i?.description}
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

export default LandingHome;