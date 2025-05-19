import { useState } from 'react'
// Css
import './css/App.scss'
import { Route, Routes } from 'react-router-dom'

// Scroll-To-Top
import ScrollToTop from './components/scroll-to-top/ScrollToTop'


// LayOut
import { LandingLayOut, UserLayOut } from './components/layout/Layout'

// Modal -- Role-Selection
import LandingHome from './pages/landing-home/LandingHome'


// Sign-In-Flow
import SignInFlow from './pages/authentication/signin-flow/SignInFlow'
// Sign-Up-Flow
import SignUpFlow from './pages/authentication/signup-flow/SignUpFlow'


// Modal -- Role-Selection
import RoleSelection from './components/modal/role-selection/RoleSelection'



function App() {

    // Role-Selection
    const [showRoleSelection, setShowRoleSelection] = useState(false);

    const handleClose = () => {
        setShowRoleSelection(false);
    }

    const handleRoleSelect = () => {
        setShowRoleSelection(true);
    }


    return (
        <>

            {/* --- Scroll-To-Top --- */}
            <ScrollToTop />

            <Routes>
                <Route element={<LandingLayOut handleRoleSelect={handleRoleSelect} />}>
                    {/* --- Home --- */}
                    <Route path='/' element={<LandingHome handleRoleSelect={handleRoleSelect} />} />
                </Route>



                {/* --- Authentication --- */}
                {/* User */}

                {/* Sign-In-Flow */}
                <Route path='/user/sign-in' element={<SignInFlow role="user" />} />

                {/* Sign-Up-Flow */}
                <Route path='/user/sign-up' element={<SignUpFlow role="user" />} />

                {/* Home */}



                {/* Agent */}
                {/* Sign-In-Flow */}
                <Route path='/agent/sign-in' element={<SignInFlow role="agent" />} />

                {/* Sign-Up-Flow */}
                <Route path='/agent/sign-up' element={<SignUpFlow role="agent" />} />
            </Routes>


            {/* Modal -- Role-Selection */}
            <RoleSelection show={showRoleSelection} handleClose={handleClose} />

        </>
    )
}

export default App;
