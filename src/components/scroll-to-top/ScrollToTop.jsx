import { useEffect } from 'react'
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {

    const { pathname } = useLocation();

    // useEffect(() => {
    //     window.scrollTo(0, 0);
    // }, [pathname]);

    const root= document.getElementById('root');
    
    if (root) {
        root.scrollTo({ top: 0, behavior: 'smooth' })
    } else {
        // Fallback to window scroll
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    return null;
}

export default ScrollToTop;