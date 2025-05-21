import { useState } from 'react'
// Css
import './css/App.scss'
import { Route, Routes } from 'react-router-dom'

// Scroll-To-Top
import ScrollToTop from './components/scroll-to-top/ScrollToTop'


// LayOut
// Auth
import { AgentAuthLayout, UserAuthLayout } from './components/layout/auth-layout/AuthLayout'
// Default
import { AgentDefaultLayOut, LandingLayOut, UserDefaultLayOut } from './components/layout/default-layout/DefaultLayOut'

// Landing-Home
import LandingHome from './pages/landing-home/LandingHome'

// Modal -- Role-Selection
import RoleSelection from './components/modal/role-selection/RoleSelection'


// Sign-In-Flow
import SignInFlow from './pages/authentication/signin-flow/SignInFlow'
// Sign-Up-Flow
import SignUpFlow from './pages/authentication/signup-flow/SignUpFlow'

// ---- User ----
// Edit-Profile
import EditProfile from './pages/account/edit-profile/EditProfile'
// My-Reviews
import MyReviews from './pages/account/my-reviews/MyReviews'
// My-Bookmarks
import MyBookmarks from './pages/account/my-bookmarks/MyBookmarks'

// Home
import UserHome from './pages/user/home/Home'
// Agent
import Agent from './pages/user/agent/Agent'
// Agent-Detail
import AgentDetail from './pages/user/agent-detail/AgentDetail'
// Review
import Review from './pages/user/review/Review'
// News
import News from './pages/user/news/News'
// News-Detail
import NewsDetail from './pages/user/news-detail/NewsDetail'
// Contact-Us
import ContactUs from './pages/user/contact-us/ContactUs'

// Privacy-Policy
import PrivacyPolicy from './pages/privacy-policy/PrivacyPolicy'
// Terms-Conditions
import TermsConditions from './pages/terms-conditions/TermsConditions'


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
                    <Route path='/user/edit-profile' element={<EditProfile />} />
                    {/* My-Reviews */}
                    <Route path='/user/my-reviews' element={<MyReviews />} />
                    {/* My-Bookmarks */}
                    <Route path='/user/my-bookmarks' element={<MyBookmarks />} />

                    {/* Home */}
                    <Route path='/user/home' element={<UserHome />} />
                    {/* Agent */}
                    <Route path='/user/agent' element={<Agent />} />
                    {/* Agent-Detail */}
                    <Route path='/user/agent-detail/:id' element={<AgentDetail />} />
                    {/* Review */}
                    <Route path='/user/agent/review' element={<Review />} />
                    {/* News */}
                    <Route path='/user/news' element={<News />} />
                    {/* News-Detail */}
                    <Route path='/user/news-detail/:id' element={<NewsDetail />} />
                    {/* Contact-Us */}
                    <Route path='/user/contact-us' element={<ContactUs />} />

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

                <Route element={<AgentDefaultLayOut />}>
                    {/* Home */}
                    <Route path='/agent/home' />
                </Route>
            </Routes>


            {/* Modal -- Role-Selection */}
            <RoleSelection show={showRoleSelection} handleClose={handleClose} />

        </>
    )
}

export default App;
