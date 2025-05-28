// Testimonials
export const TestimonialsRate = ({ color = "#fff", stroke = "none" }) => {
    return (
        <svg
            width="16"
            height="15"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M7.62087 0.468281C7.48291 0.182109 7.19135 0 6.87117 0C6.55098 0 6.26203 0.182109 6.12146 0.468281L4.44764 3.91015L0.709525 4.46168C0.397147 4.50851 0.136833 4.72704 0.0405165 5.02622C-0.0557998 5.3254 0.0222944 5.6558 0.246165 5.87693L2.95864 8.55914L2.31827 12.3496C2.26621 12.6618 2.39636 12.9792 2.65407 13.1639C2.91178 13.3486 3.2528 13.372 3.53394 13.2237L6.87377 11.4417L10.2136 13.2237C10.4947 13.372 10.8358 13.3512 11.0935 13.1639C11.3512 12.9766 11.4813 12.6618 11.4293 12.3496L10.7863 8.55914L13.4988 5.87693C13.7226 5.6558 13.8033 5.3254 13.7044 5.02622C13.6055 4.72704 13.3478 4.50851 13.0354 4.46168L9.2947 3.91015L7.62087 0.468281Z"
                // fill="#040273"
                fill={color}
                stroke={stroke}
                strokeWidth="1"
            />
        </svg>
    )
}



// Agent   (?)
export const AgentRate = ({ color = "#fff" }) => {
    return (
        <div>
            <svg
                width="22"
                height="21"
                viewBox="0 0 22 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path d="M11.0001 16.2708L5.34243 19.2454L6.42318 12.9452L1.83984 8.48376L8.16484 7.56709L10.9937 1.83517L13.8225 7.56709L20.1475 8.48376L15.5642 12.9452L16.6449 19.2454L11.0001 16.2708Z"
                    fill={color}
                    stroke="#FFB444"
                    stroke-width="1.74393"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
            </svg>
        </div>
    )
}



// Agent-Detail 
export const AgentDetailRate = ({ color = "#fff" }) => {
    return (
        <div>
            <svg
                width="26"
                height="25"
                viewBox="0 0 26 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path d="M12.6122 19.6851L5.43651 23.4578L6.80723 15.4671L0.994141 9.80863L9.01621 8.64601L12.604 1.37616L16.1919 8.64601L24.214 9.80863L18.4009 15.4671L19.7716 23.4578L12.6122 19.6851Z"
                    fill={color}
                    stroke="#FFB444"
                    stroke-width="1.74393"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
            </svg>
        </div>
    )
}



// Agent-Detail || My-Review
export const ReviewsRate = ({ bgColor = "#fff", stroke = "none", starColor = "#040273" }) => {
    return (
        <svg
            width="30"
            height="30"
            viewBox="0 0 30 29"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path d="M29.2456 0H0.396484V28.8491H29.2456V0Z"
                fill={bgColor}
                stroke={stroke}
                strokeWidth="1"
            />

            <path
                d="M15.0972 18.5748L19.4846 17.4629L21.3178 23.1125L15.0972 18.5748ZM25.1944 11.2724H17.4712L15.0972 4L12.7231 11.2724H5L11.2506 15.78L8.87659 23.0524L15.1272 18.5447L18.9738 15.78L25.1944 11.2724Z"
                fill={starColor}
            />
        </svg>
    )
}



// Review
export const SentReviewRate = ({ bgColor = "#fff", stroke = "none", starColor = "#040273" }) => {
    return (
        <svg
            width="30"
            height="30"
            viewBox="0 0 30 29"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path d="M29.2456 0H0.396484V28.8491H29.2456V0Z"
                fill={bgColor}
                stroke={stroke}
                strokeWidth="1"
            />

            <path
                d="M15.0972 18.5748L19.4846 17.4629L21.3178 23.1125L15.0972 18.5748ZM25.1944 11.2724H17.4712L15.0972 4L12.7231 11.2724H5L11.2506 15.78L8.87659 23.0524L15.1272 18.5447L18.9738 15.78L25.1944 11.2724Z"
                fill={starColor}
            />
        </svg>
    )
}