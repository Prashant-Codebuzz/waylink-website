import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import "./Header.scss";
import Logo from '../../../assets/images/header/logo.png';

const LandingHeader = ({ handleRoleSelect }) => {
    return (
        <>

            {/* ------ Header Start ------ */}
            <header>
                <div className="container">
                    <nav className="navbar navbar-expand-lg">
                        <div className="container-fluid p-0">
                            <div className='navbar-brand me-0'>
                                <Link to="/">
                                    <img src={Logo} alt="" className='img-fluid' />
                                </Link>
                            </div>

                            <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>

                            <div className="offcanvas offcanvas-start" data-bs-scroll="true" tabIndex="-1" id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
                                <div className="offcanvas-header">
                                    <div className='navbar-brand'>
                                        <Link to="/">
                                            <img src={Logo} alt="" className='img-fluid' />
                                        </Link>
                                    </div>
                                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                                </div>
                                <div className="offcanvas-body align-items-center">
                                    <ul className="navbar-nav mb-0 mb-lg-0 ms-auto">
                                        <li className="nav-item mb-2 mb-lg-0" data-bs-dismiss="offcanvas">
                                            <NavLink to="/" className="nav-link">Home</NavLink>
                                        </li>
                                        <li className="nav-item mb-2 mb-lg-0" data-bs-dismiss="offcanvas">
                                            <NavLink to="#visa" className="nav-link">Visa</NavLink>
                                        </li>
                                        <li className="nav-item mb-2 mb-lg-0" data-bs-dismiss="offcanvas">
                                            <NavLink to="#study-abroad" className="nav-link">Study Abroad</NavLink>
                                        </li>
                                        <li className="nav-item mb-0 mb-lg-0" data-bs-dismiss="offcanvas">
                                            <NavLink to="#agent" className="nav-link">Agent</NavLink>
                                        </li>
                                    </ul>

                                    <div className='group-btn'>
                                        <Link
                                            // to="/user/sign-in"
                                            className='main_btn login_btn'
                                            onClick={handleRoleSelect}
                                        >
                                            Login
                                        </Link>

                                        {/* <Link
                                            to="#"
                                            className='main_btn signup_btn ms-lg-3'>
                                            Sign Up
                                        </Link> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>
            </header>
            {/* ------ Header End ------ */}

        </>
    )
}

export default LandingHeader;