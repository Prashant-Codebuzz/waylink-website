import { useState } from 'react'
// Css
import './css/App.scss'
import { Navigate, Route, Routes } from 'react-router-dom'

// Scroll-To-Top
import ScrollToTop from './components/scroll-to-top/ScrollToTop'


// LayOut
// Auth
import { AgentAuthLayout, UserAuthLayout } from './components/layout/auth-layout/AuthLayout'
// Default
import { AgentDefaultLayOut, LandingLayOut, UserDefaultLayOut } from './components/layout/default-layout/DefaultLayOut'

// Landing-Home
import LandingHome from './pages/landing-home/LandingHome'

// Modal -- Login-Option
import LoginOption from './components/modal/login-option/LoginOption'


// Sign-In-Flow
import SignInFlow from './pages/authentication/signin-flow/SignInFlow'
// Sign-Up-Flow
import SignUpFlow from './pages/authentication/signup-flow/SignUpFlow'


// ---- Account ----
// Edit-Profile
import EditProfile from './pages/account/edit-profile/EditProfile'
// My-Reviews
import MyReviews from './pages/account/my-reviews/MyReviews'
// My-Bookmarks
import MyBookmarks from './pages/account/my-bookmarks/MyBookmarks'

// Edit-Service
import EditService from './pages/account/edit-service/EditService'

// Privacy-Policy
import PrivacyPolicy from './pages/privacy-policy/PrivacyPolicy'
// Terms-Conditions
import TermsConditions from './pages/terms-conditions/TermsConditions'

// ---- User ----
// Home
import UserHome from './pages/user/home/Home'
// Visa
import UserVisa from './pages/user/visa/Visa'
// Agent
import Agent from './pages/user/agent/Agent'
// Agent-Detail
import AgentDetail from './pages/user/agent-detail/AgentDetail'
// Review
import Review from './pages/user/review/Review'
// News
import UserNews from './pages/user/news/News'
// News-Detail
import UserNewsDetail from './pages/user/news-detail/NewsDetail'
// Contact-Us
import UserContactUs from './pages/user/contact-us/ContactUs'


// ---- Agent ----
// Home
import AgentHome from './pages/agent/home/Home'
// Visa
import AgentVisa from './pages/agent/visa/Visa'
// News
import AgentNews from './pages/agent/news/News'
// News-Detail
import AgentNewsDetail from './pages/agent/news-detail/NewsDetail'
// Contact-Us
import AgentContactUs from './pages/agent/contact-us/ContactUs'
import ChatBot from './pages/ChatBot/ChatBot'



function App() {

    // Role-Selection
    const [showRoleSelection, setShowRoleSelection] = useState(false);

    const handleClose = () => {
        setShowRoleSelection(false);
    }

    const handleRoleSelect = () => {
        setShowRoleSelection(true);
    }


    // const user = useSelector((state) => state.userAuth);
    // console.log(user);

    return (

        <>

            {/* Scroll-To-Top */}
            <ScrollToTop />

            <Routes>
                {/* ---- Landing ---- */}

                {/* -- LayOut -- */}
                <Route element={<LandingLayOut handleRoleSelect={handleRoleSelect} />}>
                    {/* Home */}
                    <Route path='/' element={<LandingHome handleRoleSelect={handleRoleSelect} />} />

                    {/* Privacy-Policy */}
                    <Route path='/privacy-policy' element={<PrivacyPolicy />} />
                    {/* Terms-Conditions */}
                    <Route path='/terms-conditions' element={<TermsConditions />} />
                </Route>


                {/* ------------------------------------------------------------------------- */}


                {/* ---- User ---- */}

                {/* -- Authentication -- */}
                <Route element={<UserAuthLayout />}>
                    {/* Sign-In-Flow */}
                    <Route path='/user/sign-in' element={<SignInFlow role="user" />} />

                    {/* Sign-Up-Flow */}
                    <Route path='/user/sign-up' element={<SignUpFlow role="user" />} />
                </Route>


                {/* -- LayOut -- */}
                <Route element={<UserDefaultLayOut />}>
                    {/* Edit-Profile */}
                    <Route path='/user/edit-profile' element={<EditProfile role="user" />} />
                    {/* My-Reviews */}
                    <Route path='/user/my-reviews' element={<MyReviews role="user" />} />
                    {/* My-Bookmarks */}
                    <Route path='/user/my-bookmarks' element={<MyBookmarks role="user" />} />

                    {/* Home */}
                    <Route path='/user/home' element={<UserHome />} />
                    {/* Visa */}
                    <Route path="/user/visa" element={<Navigate to="/user/visa/all/India/Anyware" replace />} />
                    <Route path='/user/visa/:category/:from/:to' element={<UserVisa />} />
                    {/* Agent */}
                    <Route path='/user/agent' element={<Agent />} />
                    {/* Agent-Detail */}
                    <Route path='/user/agent-detail/:id' element={<AgentDetail />} />
                    {/* Review */}
                    <Route path='/user/agent/review' element={<Review />} />
                    {/* News */}
                    <Route path='/user/news' element={<UserNews />} />
                    {/* News-Detail */}
                    <Route path='/user/news-detail/:id' element={<UserNewsDetail />} />
                    {/* Contact-Us */}
                    <Route path='/user/contact-us' element={<UserContactUs />} />

                    {/* Privacy-Policy */}
                    <Route path='/user/privacy-policy' element={<PrivacyPolicy />} />
                    {/* Terms-Conditions */}
                    <Route path='/user/terms-conditions' element={<TermsConditions />} />
                </Route>


                {/* ------------------------------------------------------------------------- */}


                {/* ---- Agent ---- */}

                {/* -- Authentication -- */}
                <Route element={<AgentAuthLayout />}>
                    {/* Sign-In-Flow */}
                    <Route path='/agent/sign-in' element={<SignInFlow role="agent" />} />

                    {/* Sign-Up-Flow */}
                    <Route path='/agent/sign-up' element={<SignUpFlow role="agent" />} />
                </Route>


                {/* -- LayOut -- */}
                <Route element={<AgentDefaultLayOut />}>
                    {/* Edit-Profile */}
                    <Route path='/agent/edit-profile' element={<EditProfile role="agent" />} />
                    {/* Edit-Service */}
                    <Route path='/agent/edit-service' element={<EditService />} />
                    {/* My-Reviews */}
                    <Route path='/agent/my-reviews' element={<MyReviews role="agent" />} />
                    {/* My-Bookmarks */}
                    <Route path='/agent/my-bookmarks' element={<MyBookmarks role="agent" />} />

                    {/* Home */}
                    <Route path='/agent/home' element={<AgentHome />} />
                    {/* Visa */}
                    <Route path='/agent/visa' element={<AgentVisa />} />
                    {/* News */}
                    <Route path='/agent/news' element={<AgentNews />} />
                    {/* News-Detail */}
                    <Route path='/agent/news-detail/:id' element={<AgentNewsDetail />} />
                    {/* Contact-Us */}
                    <Route path='/agent/contact-us' element={<AgentContactUs />} />

                    {/* Privacy-Policy */}
                    <Route path='/agent/privacy-policy' element={<PrivacyPolicy />} />
                    {/* Terms-Conditions */}
                    <Route path='/agent/terms-conditions' element={<TermsConditions />} />
                </Route>
            </Routes>
            <ChatBot />
            {/* Modal -- Role-Selection */}
            <LoginOption show={showRoleSelection} handleClose={handleClose} />

        </>
    )
}

export default App;
