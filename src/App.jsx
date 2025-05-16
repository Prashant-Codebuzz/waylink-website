import { useState } from 'react'
// Css
import './css/App.scss'
import { Route, Routes } from 'react-router-dom'
// Scroll-To-Top
import ScrollToTop from './components/scroll-to-top/ScrollToTop'
// LayOut
import LayOut from './components/layout/Layout'
// Home
import Home from './pages/home/Home'
// Sign-In-Flow
import SignInFlow from './pages/authentication/signin-flow/SignInFlow'
// Sign-Up-Flow
import SignUpFlow from './pages/authentication/signup-flow/SignUpFlow'
import RoleSelection from './components/modal/role-selection/RoleSelection'

function App() {

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
                <Route element={<LayOut handleRoleSelect={handleRoleSelect} />}>
                    {/* --- Home --- */}
                    <Route path='/' element={<Home handleRoleSelect={handleRoleSelect} />} />
                </Route>



                {/* --- Authentication --- */}
                {/* User */}

                {/* Sign-In-Flow */}
                <Route path='/user/sign-in' element={<SignInFlow role="user" />} />

                {/* Sign-Up-Flow */}
                <Route path='/user/sign-up' element={<SignUpFlow role="user" />} />


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
