import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToSection = () => {

    const location = useLocation();

    useEffect(() => {
        const { hash } = location;

        const scrollToSection = (sectionId) => {
            const section = document.getElementById(sectionId);
            if (section) {
                section.scrollIntoView({ behavior: 'smooth' });
            }
        };

        if (hash) {
            const sectionId = hash.substring(1);
            scrollToSection(sectionId);
        }
    }, [location.hash]);
};

export default ScrollToSection;
