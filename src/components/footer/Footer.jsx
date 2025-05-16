import React from 'react'
import "./Footer.scss";
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <>

            {/* ------ Footer Start ------ */}
            <footer>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="left">
                                <p className="mb-0">
                                    Waylink @ 2025. All Rights Reserved
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-6 d-flex justify-content-lg-end">
                            <div className="right">
                                <div className="menu d-flex align-items-center">
                                    <Link to="/">Privacy Policy</Link>
                                    <span>|</span>
                                    <Link to="/">Terms & Conditions</Link>
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

export default Footer;