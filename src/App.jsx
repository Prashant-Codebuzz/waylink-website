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

function App() {

    return (
        <>

            {/* --- Scroll-To-Top --- */}
            <ScrollToTop />

            <Routes>
                <Route element={<LayOut />}>
                    {/* --- Home --- */}
                    <Route path='/' element={<Home />} />
                </Route>

                {/* --- Authentication --- */}
                {/* Sign-In-Flow */}
                <Route path='/sign-in' element={<SignInFlow />} />

                {/* Sign-Up-Flow */}
                <Route path='/sign-up' element={<SignUpFlow />} />
            </Routes>

        </>
    )
}

export default App;
