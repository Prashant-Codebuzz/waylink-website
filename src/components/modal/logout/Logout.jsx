import React from 'react'
import { useNavigate } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';

// Css
import "./Logout.scss";

const Logout = ({ show, handleClose, isLoading, handleLogout }) => {
    return (
        <Modal
            show={show}
            onHide={true}
            centered
            backdrop="static"
            keyboard={false}
            className='logout'
        >
            <Modal.Body>
                <Modal.Title>Logout!</Modal.Title>

                <p>
                    Are you sure you want to <br /> 
                    logout this account ?
                </p>

                <div className='group_btn'>
                    <button type='button' className='close_btn' onClick={handleClose}>
                        No
                    </button>
                    <button
                        type='button'
                        className='logout_btn'
                        disabled={isLoading}
                        onClick={handleLogout}
                    >
                        Yes
                    </button>
                </div>

            </Modal.Body>
        </Modal>
    )
}

export default Logout;