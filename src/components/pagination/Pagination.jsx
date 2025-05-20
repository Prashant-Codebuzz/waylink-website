import React from 'react'
import { Link } from 'react-router-dom';

// Css
import "./Pagination.scss";

// Image


const Pagination = () => {
    return (
        <>

            <div className='pagination'>
                {/* <button type='button' className='pagination_btn'>Prev</button> */}

                <ul className="">
                    <li className="page-item">
                        <Link to="#" className="page-link">Prev</Link>
                    </li>
                    <li className="page-item">
                        <Link to="#" className="page-link active">1</Link>
                    </li>
                    <li className="page-item">
                        <Link to="#" className="page-link">2</Link>
                    </li>
                    <li className="page-item">
                        <Link to="#" className="page-link">3</Link>
                    </li>
                    <li className="page-item">
                        <Link to="#" className="page-link">Next</Link>
                    </li>
                </ul>

                {/* <button type='button' className='pagination_btn'>Next</button> */}
            </div>

        </>
    )
}

export default Pagination;