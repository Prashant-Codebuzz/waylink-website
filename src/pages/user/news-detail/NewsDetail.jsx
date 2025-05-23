import React, { useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';

// Css
import "./NewsDetail.scss";

// Image
import NewsDetailLeft from '../../../assets/images/news-detail/news_detail_left.svg';
import NewsDate from '../../../assets/images/news-detail/news_date.svg';
import NewsSave from '../../../assets/images/news-detail/news_save.svg';
import NewsSent from '../../../assets/images/news-detail/news_sent.svg';


const NewsDetail = () => {
    return (
        <>

            {/* ------ News-Detail Start ------ */}
            <div className="news_detail">
                <div className="container">
                    <div className="top">
                        <div className="row align-items-center">
                            <div className="col-lg-6">
                                <div className="left">
                                    <img src={NewsDetailLeft} alt="" className='img-fluid' />
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="right">
                                    <div className="date">
                                        <img src={NewsDate} alt="" className='img-fluid me-2' />
                                        22 December 2023
                                    </div>

                                    <h1>
                                        Your Comprehensive Guide to
                                        Successfully Pursuing
                                    </h1>

                                    <div className="sent">
                                        <div>
                                            <img src={NewsSave} alt="" className='img-fluid' />
                                        </div>
                                         <div>
                                            <img src={NewsSent} alt="" className='img-fluid' />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="second">
                        <p>
                            In order to obtain a Russian visa it is recommended to apply through the official Russian Visa Centers established to enhance the quality of service, as well as to facilitate visa procedure (located in New Delhi, Chennai, Kolkata and Mumbai).
                        </p>

                        <p>
                            Russian Visa Centers are designated by the Russian Consular Institutions and are fully capable of accepting and processing dcuments required for a Russian visa forwarding them to the Russian Consular Offices from any individuals, organizations or companies (including travel agencies).
                            The final decision to issue or refuse a Russian visa lies with the respective Russian Consular Institutions.
                        </p>

                        <p>
                            According to the Article 5.3 of the Agreement between the Government of the Russian Federation and the Government of the Republic of India on simplification of requirements for mutual travels of certain categories of citizens of the two countries states that the period for taking a decision on a visa application may be extended for up to 30 days, notably when further scrutiny of the application is needed. Thus, the passport may be held for the mentioned period.
                        </p>

                        <p>
                            Russian Visa Centers in India collect service fee.
                        </p>

                        <p>
                            The service fee is separate from the consular fee payable to the Russian Consular Institutions.
                        </p>

                        <p>
                            Companies and organizations, including travel agencies and any other entities applying for visas on behalf of customers or employees, regardless of the purpose of visit to Russia, must apply through the Visa Centers only.
                        </p>

                        <p>
                            Certain categories of applicants including diplomats and officials can apply directly to the Russian Consular Institutions.
                        </p>

                        <p>
                            In order to prevent cases of fraud with the pre-registration system, the consular institution accepts documents only of those, whose personal data were entered into the system during the registration of the application. In case of discrepancy of the information specified in the system with the data of the applicant, whose documents are submitted to the consular institution, they are not accepted for consideration. Only one set of submitted documents can be processed during a one reserved time slot.
                        </p>
                    </div>
                </div>
            </div>
            {/* ------ News-Detail End ------ */}

        </>
    )
}

export default NewsDetail;