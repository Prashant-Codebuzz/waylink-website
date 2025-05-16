import React from 'react';
// import { Modal } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';

// Css
import "./RoleSelection.scss";
import { useNavigate } from 'react-router-dom';

const RoleSelection = ({ show, handleClose }) => {

    const navigate = useNavigate();

    const handleRoleSelect = (role) => {
        navigate(role === "user" ? "/user/sign-in" : "/agent/sign-in");
        
        handleClose();
    }

    return (
        <Modal
            show={show}
            onHide={true}
            centered
            backdrop="static"
            keyboard={false}
        >
            <Modal.Header>
                <Modal.Title>Select Entry Role</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className='group_btn'>
                    <button type='button' className='btn role_btn mb-3' onClick={() => handleRoleSelect("user")}>User</button>
                    <button type='button' className='btn role_btn' onClick={() => handleRoleSelect("agent")}>Agent</button>
                </div>

            </Modal.Body>
        </Modal>
    )
}

export default RoleSelection;