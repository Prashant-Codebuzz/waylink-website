import React from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom';

// Css
import "./Header.scss";

// Image
import Logo from '../../../assets/images/header/logo.png';

const AgentHeader = ({ handleLogout }) => {

    // const navigate = useNavigate();

    // const handleLogout = () => {
    //     localStorage.removeItem("agent-token");
    //     localStorage.removeItem("role");

    //     navigate("/");
    // }
    
    return (
        <>

            {/* ------ Header Start ------ */}
            <header className='user'>
                <div className="container">
                    <nav className="navbar navbar-expand-lg">
                        <div className="container-fluid p-0">
                            <div className='navbar-brand me-0'>
                                <Link to="/agent/home">
                                    <img src={Logo} alt="" className='img-fluid' />
                                </Link>
                            </div>

                            <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>

                            <div className="offcanvas offcanvas-start" data-bs-scroll="true" tabIndex="-1" id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
                                <div className="offcanvas-header">
                                    <div className='navbar-brand'>
                                        <Link to="/agent/home">
                                            <img src={Logo} alt="" className='img-fluid' />
                                        </Link>
                                    </div>
                                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                                </div>
                                <div className="offcanvas-body align-items-center">
                                    <ul className="navbar-nav mb-0 mb-lg-0 ms-auto">
                                        <li className="nav-item mb-2 mb-lg-0" data-bs-dismiss="offcanvas">
                                            <NavLink to="/agent/home" className="nav-link">Home</NavLink>
                                        </li>
                                        <li className="nav-item mb-2 mb-lg-0" data-bs-dismiss="offcanvas">
                                            <NavLink to="/agent/visa" className="nav-link">Visa</NavLink>
                                        </li>
                                        <li className="nav-item mb-0 mb-lg-0" data-bs-dismiss="offcanvas">
                                            <NavLink to="/agent/news" className="nav-link">News</NavLink>
                                        </li>
                                        <li className="nav-item mb-0 mb-lg-0" data-bs-dismiss="offcanvas">
                                            <NavLink to="/agent/contact-us" className="nav-link">Contact Us</NavLink>
                                        </li>
                                    </ul>

                                    <div className='group-btn'>
                                        <Link
                                            // to="/agent/sign-in"
                                            className='main_btn login_btn'
                                            data-bs-toggle="dropdown"
                                            aria-expanded="false"
                                        >
                                            Account
                                        </Link>

                                        <ul className="dropdown-menu">
                                            <li><Link to="/agent/edit-profile" className="dropdown-item">Edit Profile</Link></li>
                                            <li><Link to="/agent/edit-service" className="dropdown-item">Edit Service</Link></li>
                                            <li><Link className="dropdown-item">Chat History</Link></li>
                                            <li><Link to="/agent/my-reviews" className="dropdown-item">My Reviews</Link></li>
                                            <li><Link to="/agent/my-bookmarks" className="dropdown-item">My Bookmarks</Link></li>
                                            <li>
                                                <button
                                                    type='button'
                                                    className='logout_btn'
                                                    onClick={handleLogout}
                                                >
                                                    Logout
                                                </button>
                                            </li>
                                        </ul>
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

export default AgentHeader;