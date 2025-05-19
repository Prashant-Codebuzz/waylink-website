import Agent from '../../assets/images/home/agent.png';
import Australia from '../../assets/images/home/country/australia.png';
import Belgium from '../../assets/images/home/country/belgium.png';
import Canada from '../../assets/images/home/country/canada.png';
import Denmark from '../../assets/images/home/country/denmark.png';
import France from '../../assets/images/home/country/france.png';
import Germany from '../../assets/images/home/country/germany.png';
import Greece from '../../assets/images/home/country/greece.png';
import Hungary from '../../assets/images/home/country/hungary.png';
import Iceland from '../../assets/images/home/country/iceland.png';
import Ireland from '../../assets/images/home/country/ireland.png';
import Italy from '../../assets/images/home/country/italy.png';
import Luxembourg from '../../assets/images/home/country/luxembourg.png';
import TestimonialsClient from '../../assets/images/home/testimonials_client.png';
import TestimonialsStar from '../../assets/images/home/testimonials_star.png';

// ------ Country ------  
export const CountryData = [
    "Canada", "Belgium", "France", "Iceland", "Denmark", "Germany", "Australia", "Canada", "Belgium", "France"
]


// ------ Country-Choice ------  
export const CountryChoiceData = [
    {
        key: "europe",
        title: "Europe",
        countries: [
            { image: Canada, name: "Canada"},
            { image: Belgium, name: "Belgium"},
            { image: Denmark, name: "Denmark"},
            { image: Australia, name: "Australia"},
            { image: France, name: "France"},
            { image: Germany, name: "Germany"},
            { image: Greece, name: "Greece"},
            { image: Hungary, name: "Hungary"},
            { image: Iceland, name: "Iceland"},
            { image: Ireland, name: "Ireland"},
            { image: Italy, name: "Italy"},
            { image: Luxembourg, name: "Luxembourg"},
        ]
    },
    {
        key: "north-america",
        title: "North America",
        countries: [
            { image: Canada, name: "Canada"},
        ]
    },
    {
        key: "asea",
        title: "Asea",
        countries: [
            { image: Canada, name: "Canada"},
        ]
    },
    {
        key: "latin-america",
        title: "Latin America",
        countries: [
            { image: Canada, name: "Canada"},
        ]
    },
    {
        key: "oceania",
        title: "Oceania",
        countries: [
            { image: Canada, name: "Canada"},
        ]
    },
    {
        key: "africa",
        title: "Africa",
        countries: [
            { image: Canada, name: "Canada"},
        ]
    },
    {
        key: "antarctica",
        title: "Antarctica",
        countries: [
            { image: Canada, name: "Canada"},
        ]
    }
]


// ------ Our-Consultancy ------  
export const ConsultancyTabsData = [
    {
        key: "apply-visa-online",
        title: "Apply Visa Online",
        content: [
            'Monitor your progress.',
            'User-friendly experience start.',
            'Personal information is protected.'
        ]
    },
    {
        key: "immigration-resources",
        title: "Immigration Resources",
        content: [
            'Monitor your progress.',
            'User-friendly experience start.',
            'Personal information is protected.'
        ]
    },
    {
        key: "important-information",
        title: "Important Information",
        content: [
            'Monitor your progress.',
            'User-friendly experience start.',
            'Personal information is protected.'
        ]
    }
]


// ------ Agent ------  
export const AgentData = [
    { image: Agent, name: "Sendra Lily", experience: 5 },
    { image: Agent, name: "Sendra Lily", experience: 5 },
    { image: Agent, name: "Sendra Lily", experience: 5 },
    { image: Agent, name: "Sendra Lily", experience: 5 },
]


// ------ Testimonials ------  
export const TestimonialsData = [
    {
        image: TestimonialsClient,
        name: "Brooklyn Simmons",
        organization: "CEO at D.B.A Pvt. Ltd",
        review: TestimonialsStar,
        description: "Their team's expertise and commitment to quality helped us improve efficiency across the board."
    },
    {
        image: TestimonialsClient,
        name: "Brooklyn Simmons",
        organization: "CEO at D.B.A Pvt. Ltd",
        review: TestimonialsStar,
        description: "Their team's expertise and commitment to quality helped us improve efficiency across the board."
    },
    {
        image: TestimonialsClient,
        name: "Brooklyn Simmons",
        organization: "CEO at D.B.A Pvt. Ltd",
        review: TestimonialsStar,
        description: "Their team's expertise and commitment to quality helped us improve efficiency across the board."
    }
]