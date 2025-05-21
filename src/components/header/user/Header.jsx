import React from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import "./Header.scss";
import Logo from '../../../assets/images/header/logo.png';

const UserHeader = () => {

    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("user-token");
        localStorage.removeItem("role");

        navigate("/");
    }

    return (
        <>

            {/* ------ Header Start ------ */}
            <header className='user'>
                <div className="container">
                    <nav className="navbar navbar-expand-lg">
                        <div className="container-fluid p-0">
                            <div className='navbar-brand me-0'>
                                <Link to="/user/home">
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
                                            <NavLink to="/user/home" className="nav-link">Home</NavLink>
                                        </li>
                                        <li className="nav-item mb-2 mb-lg-0" data-bs-dismiss="offcanvas">
                                            <NavLink to="/user/visa" className="nav-link">Visa</NavLink>
                                        </li>
                                        <li className="nav-item mb-2 mb-lg-0" data-bs-dismiss="offcanvas">
                                            <NavLink to="/user/agent" className="nav-link">Agent</NavLink>
                                        </li>
                                        <li className="nav-item mb-0 mb-lg-0" data-bs-dismiss="offcanvas">
                                            <NavLink to="/user/news" className="nav-link">News</NavLink>
                                        </li>
                                        <li className="nav-item mb-0 mb-lg-0" data-bs-dismiss="offcanvas">
                                            <NavLink to="/user/contact-us" className="nav-link">Contact Us</NavLink>
                                        </li>
                                    </ul>

                                    <div className='group-btn'>
                                        <Link
                                            // to="/user/sign-in"
                                            className='main_btn login_btn'
                                            data-bs-toggle="dropdown"
                                            aria-expanded="false"
                                        >
                                            Account
                                        </Link>

                                        <ul className="dropdown-menu">
                                            <li><Link to="/user/edit-profile" className="dropdown-item">Edit Profile</Link></li>
                                            <li><Link className="dropdown-item">Chat History</Link></li>
                                            <li><Link to="/user/my-reviews" className="dropdown-item">My Reviews</Link></li>
                                            <li><Link to="/user/my-bookmarks" className="dropdown-item">My Bookmarks</Link></li>
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

export default UserHeader