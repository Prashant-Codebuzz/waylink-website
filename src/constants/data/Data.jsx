// ------------ Landing-Home ------------  
import Agent from '../../assets/images/home/landing/agent.png';
import Australia from '../../assets/images/home/landing/country/australia.png';
import Belgium from '../../assets/images/home/landing/country/belgium.png';
import Canada from '../../assets/images/home/landing/country/canada.png';
import Denmark from '../../assets/images/home/landing/country/denmark.png';
import France from '../../assets/images/home/landing/country/france.png';
import Germany from '../../assets/images/home/landing/country/germany.png';
import Greece from '../../assets/images/home/landing/country/greece.png';
import Hungary from '../../assets/images/home/landing/country/hungary.png';
import Iceland from '../../assets/images/home/landing/country/iceland.png';
import Ireland from '../../assets/images/home/landing/country/ireland.png';
import Italy from '../../assets/images/home/landing/country/italy.png';
import Luxembourg from '../../assets/images/home/landing/country/luxembourg.png';
import TestimonialsClient from '../../assets/images/home/landing/testimonials_client.png';
import TestimonialsStar from '../../assets/images/home/landing/testimonials_star.png';

// ------------ User-Home ------------  
import NewsImage from '../../assets/images/home/user/news_img.svg';

// ------------ User-Agent-Detail ------------  
import AgentReview from '../../assets/images/agent-detail/agent_review.svg';
import AgentStar from '../../assets/images/agent-detail/agent_star.svg';

// ------------ User-Visa ------------
import Austria from '../../assets/images/visa/austria.svg';
import Aruba from '../../assets/images/visa/aruba.svg';

// ------------ Agent-Home ------------
import RunningProfile from '../../assets/images/home/agent/running_profile.svg';
import PendingProfile from '../../assets/images/home/agent/pending_profile.svg';
import CompletedProfile from '../../assets/images/home/agent/completed_profile.svg';



// ------------ Landing-Home ------------  
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
            { image: Canada, name: "Canada" },
            { image: Belgium, name: "Belgium" },
            { image: Denmark, name: "Denmark" },
            { image: Australia, name: "Australia" },
            { image: France, name: "France" },
            { image: Germany, name: "Germany" },
            { image: Greece, name: "Greece" },
            { image: Hungary, name: "Hungary" },
            { image: Iceland, name: "Iceland" },
            { image: Ireland, name: "Ireland" },
            { image: Italy, name: "Italy" },
            { image: Luxembourg, name: "Luxembourg" },
        ]
    },
    {
        key: "north-america",
        title: "North America",
        countries: [
            { image: Canada, name: "Canada" },
        ]
    },
    {
        key: "asea",
        title: "Asea",
        countries: [
            { image: Canada, name: "Canada" },
        ]
    },
    {
        key: "latin-america",
        title: "Latin America",
        countries: [
            { image: Canada, name: "Canada" },
        ]
    },
    {
        key: "oceania",
        title: "Oceania",
        countries: [
            { image: Canada, name: "Canada" },
        ]
    },
    {
        key: "africa",
        title: "Africa",
        countries: [
            { image: Canada, name: "Canada" },
        ]
    },
    {
        key: "antarctica",
        title: "Antarctica",
        countries: [
            { image: Canada, name: "Canada" },
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
    { image: Agent, name: "Gretchen Cunningham", experience: 5 },
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



// ------------ User-Home ------------  
// ------ Latest-News ------  
export const LatestNewsData = [
    { image: NewsImage, name: "Your Comprehensive Guide to Successfully Pursuing", description: "The Law Society of British Columbia has announced a new campaign providing mental wellness resources...", date: "22 December 2023" },
    { image: NewsImage, name: "Your Comprehensive Guide to Successfully Pursuing", description: "The Law Society of British Columbia has announced a new campaign providing mental wellness resources...", date: "22 December 2023" },
    { image: NewsImage, name: "Your Comprehensive Guide to Successfully Pursuing", description: "The Law Society of British Columbia has announced a new campaign providing mental wellness resources...", date: "22 December 2023" },
    { image: NewsImage, name: "Your Comprehensive Guide to Successfully Pursuing", description: "The Law Society of British Columbia has announced a new campaign providing mental wellness resources...", date: "22 December 2023" },
    { image: NewsImage, name: "Your Comprehensive Guide to Successfully Pursuing", description: "The Law Society of British Columbia has announced a new campaign providing mental wellness resources...", date: "22 December 2023" },
    { image: NewsImage, name: "Your Comprehensive Guide to Successfully Pursuing", description: "The Law Society of British Columbia has announced a new campaign providing mental wellness resources...", date: "22 December 2023" }
]



// ------------ User-Agent-Detail ------------  
// ------ Reviews ------  
export const AgentReviewsData = [
    {
        review: AgentStar,
        description: "Impressive functionality and excellent support!",
        image: AgentReview,
        name: "James Wilson",
        role: "Software Developer"
    },
    {
        review: AgentStar,
        description: "Impressive functionality and excellent support!",
        image: AgentReview,
        name: "James Wilson",
        role: "Software Developer"
    },
    {
        review: AgentStar,
        description: "Impressive functionality and excellent support!",
        image: AgentReview,
        name: "James Wilson",
        role: "Software Developer"
    }
]



// ------------ User-Visa ------------  
// ------ Visas ------  
export const VisaData = [
    {
        key: "requirements",
        title: "Requirements",
        visa: [
            {
                country: Austria,
                name: "Austria",
                date: "Mar 12, 2024",
                type: "Schengen Visa type C",
                from: "Permanent Residence",
                to: "Citizenship",
                duration: "3 months",
                cost: "80",
                complexity: "Low"
            },
            {
                country: Aruba,
                name: "Aruba",
                date: "Mar 12, 2024",
                type: "Schengen Visa type C",
                from: "Permanent Residence",
                to: "Citizenship",
                duration: "3 months",
                cost: "80",
                complexity: "Low"
            }
        ]
    },
    {
        key: "cost-of-living",
        title: "Cost of Living",
        visa: [
            {
                country: Austria,
                name: "Austria",
                date: "Mar 12, 2024",
                type: "Schengen Visa type C",
                from: "Permanent Residence",
                to: "Citizenship",
                duration: "3 months",
                cost: "80",
                complexity: "Low"
            },
            {
                country: Aruba,
                name: "Aruba",
                date: "Mar 12, 2024",
                type: "Schengen Visa type C",
                from: "Permanent Residence",
                to: "Citizenship",
                duration: "3 months",
                cost: "80",
                complexity: "Low"
            }
        ]
    },
    {
        key: "expats",
        title: "Expats",
        visa: [
            {
                country: Austria,
                name: "Austria",
                date: "Mar 12, 2024",
                type: "Schengen Visa type C",
                from: "Permanent Residence",
                to: "Citizenship",
                duration: "3 months",
                cost: "80",
                complexity: "Low"
            },
            {
                country: Aruba,
                name: "Aruba",
                date: "Mar 12, 2024",
                type: "Schengen Visa type C",
                from: "Permanent Residence",
                to: "Citizenship",
                duration: "3 months",
                cost: "80",
                complexity: "Low"
            }
        ]
    },
    {
        key: "talent-immigration",
        title: "Talent Immigration",
        visa: [
            {
                country: Austria,
                name: "Austria",
                date: "Mar 12, 2024",
                type: "Schengen Visa type C",
                from: "Permanent Residence",
                to: "Citizenship",
                duration: "3 months",
                cost: "80",
                complexity: "Low"
            },
            {
                country: Aruba,
                name: "Aruba",
                date: "Mar 12, 2024",
                type: "Schengen Visa type C",
                from: "Permanent Residence",
                to: "Citizenship",
                duration: "3 months",
                cost: "80",
                complexity: "Low"
            }
        ]
    },
    {
        key: "investor-visas",
        title: "Investor Visas",
        visa: [
            {
                country: Austria,
                name: "Austria",
                date: "Mar 12, 2024",
                type: "Schengen Visa type C",
                from: "Permanent Residence",
                to: "Citizenship",
                duration: "3 months",
                cost: "80",
                complexity: "Low"
            },
            {
                country: Aruba,
                name: "Aruba",
                date: "Mar 12, 2024",
                type: "Schengen Visa type C",
                from: "Permanent Residence",
                to: "Citizenship",
                duration: "3 months",
                cost: "80",
                complexity: "Low"
            }
        ]
    },
    {
        key: "retirement-visas",
        title: "Retirement Visas",
        visa: [
            {
                country: Austria,
                name: "Austria",
                date: "Mar 12, 2024",
                type: "Schengen Visa type C",
                from: "Permanent Residence",
                to: "Citizenship",
                duration: "3 months",
                cost: "80",
                complexity: "Low"
            }
        ]
    },
    {
        key: "student-visas",
        title: "Student Visas",
        visa: [
            {
                country: Aruba,
                name: "Aruba",
                date: "Mar 12, 2024",
                type: "Schengen Visa type C",
                from: "Permanent Residence",
                to: "Citizenship",
                duration: "3 months",
                cost: "80",
                complexity: "Low"
            }
        ]
    },
]



// ------------ Agent-Home ------------  
// ------ Profile ------  
export const ProfileData = [
    {
        image: RunningProfile,
        name: "Running Profiles",
        count: 15,
        apiCount: "running-profiles"
    },
    {
        image: PendingProfile,
        name: "Pending Profiles",
        count: 45,
        apiCount: "pending-profiles"
    },
    {
        image: CompletedProfile,
        name: "Completed Profiles",
        count: 15,
        apiCount: "completed-profiles"
    }
];  