import React from 'react'
import { Link } from 'react-router-dom';

// Css
import "./Footer.scss";

// Image
import Logo from '../../../assets/images/footer/logo.svg';
import LinkedIn from '../../../assets/images/footer/linkedin.svg';
import Instagram from '../../../assets/images/footer/instagram.svg';
import Facebook from '../../../assets/images/footer/facebook.svg';

const AgentFooter = () => {
    return (
        <>

            {/* ------ Footer Start ------ */}
            <footer>
                <div className="container">
                    <div className="top">
                        <div className="row justify-content-lg-between">
                            <div className="col-lg-6">
                                <div className="left">
                                    <Link to="/agent/home">
                                        <img src={Logo} alt="Logo" className="img-fluid" />
                                    </Link>

                                    <div className="info">
                                        <p>
                                            We are trusted immigration consultants who can handle your case and our professional registered agents will assist you with your visa application.
                                        </p>

                                        <div className="social">
                                            <h5 className='title'>Follow Us</h5>

                                            <div className="icon d-flex">
                                                <div>
                                                    <img src={LinkedIn} alt="LinkedIn" draggable={false} />
                                                </div>
                                                <div>
                                                    <img src={Instagram} alt="Instagram" draggable={false} />
                                                </div>
                                                <div>
                                                    <img src={Facebook} alt="Facebook" draggable={false} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-5 col-xl-4">
                                <div className="right">
                                    <h5 className='title'>Quick Links</h5>

                                    <div className="menu">
                                        <div className="item">
                                            <Link to="/agent/home" className="link">Home</Link>
                                        </div>
                                        <div className="item">
                                            <Link to="/agent/visa" className="link">Visa</Link>
                                        </div>
                                        <div className="item">
                                            <Link to="/agent/news" className="link">News</Link>
                                        </div>
                                        <div className="item">
                                            <Link to="/agent/contact-us" className="link">Contact Us</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="second">
                        <div className="row justify-content-lg-between">
                            <div className="col-lg-6">
                                <div className="left">
                                    <p className="mb-0">
                                        Waylink @ 2025. All Rights Reserved
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-5 col-xl-4">
                                <div className="right">
                                    <div className="menu d-flex align-items-center">
                                        <Link to="/agent/privacy-policy">Privacy Policy</Link>
                                        <span>|</span>
                                        <Link to="/agent/terms-conditions">Terms & Conditions</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            {/* ------ Footer End ------ */}

        </>
    )
}

export default AgentFooter