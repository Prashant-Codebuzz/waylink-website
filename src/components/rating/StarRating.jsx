import React, { useState } from 'react';

const StarRating = ({
    totalStars = 5,
    rating = 0,
    onRatingChange = () => { },
    editable = true,
}) => {

    console.log(rating);

    const [hoveredRating, setHoveredRating] = useState(null);
    const displayRating = hoveredRating ?? rating;

    const handleMouseEnter = (index) => {
        if (editable) {
            setHoveredRating(index + 1);
        }
    };

    const handleClick = (index) => {
        if (editable) {
            onRatingChange(index + 1);
        }
    };

    const handleMouseLeave = () => setHoveredRating(null);

    const StarIcon = ({ color = '#040273' }) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="26.6" height="25.8" viewBox="0 0 21 20" fill="none">
            <path
                d="M10.4996 15.0012L14.91 13.8835L16.7527 19.5627L10.4996 15.0012ZM20.6496 7.66058H12.8861L10.4996 0.350159L8.11315 7.66058H0.349609L6.63294 12.1918L4.24648 19.5022L10.5298 14.971L14.3965 12.1918L20.6496 7.66058Z"
                fill={color}
            />
        </svg>
    );

    return (
        <div className="d-flex gap-1" onMouseLeave={handleMouseLeave}>
            {Array.from({ length: totalStars }).map((_, index) => {
                const isActive = index < displayRating;
                const bgClass = isActive ? '#040273' : 'white';
                const iconColor = isActive ? 'white' : '#040273';

                return (
                    <div
                        key={index}
                        onMouseEnter={() => handleMouseEnter(index)}
                        onClick={() => handleClick(index)}
                        className={`d-flex align-items-center justify-content-center `}
                        style={{
                            width: '38px',
                            height: '38px',
                            cursor: editable ? 'pointer' : 'default',
                            border: '1px solid #0402731A',
                            backgroundColor: bgClass
                        }}
                    >
                        <StarIcon color={iconColor} />
                    </div>
                );
            })}
        </div>
    );
};

export default StarRating;
