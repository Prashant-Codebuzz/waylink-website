import React from 'react';
import { useNavigate } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';

// Css
import "./RoleSelection.scss";

// Image
import ModalCloseBtn from '../../../assets/images/authentication/modal_close_btn.svg';
import AgentImage from '../../../assets/images/authentication/agent_img.svg';
import UserImage from '../../../assets/images/authentication/user_img.svg';


const RoleSelection = ({ show, handleClose }) => {

    const navigate = useNavigate();

    const handleRoleSelect = (role) => {
        localStorage.setItem("role", role === "user" ? "user" : "agent");
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
            {/* <Modal.Header>
                <Modal.Title>Select Entry Role</Modal.Title>
            </Modal.Header> */}
            <Modal.Body>
                <button type="button" className="close_modal" onClick={handleClose}>
                    <img src={ModalCloseBtn} alt="" className='img-fluid' />
                </button>

                <Modal.Title>Select Profile</Modal.Title>

                <p>
                    Please select profile to <br />
                    login your account
                </p>

                <div className='select_profile'>
                    <button type='button' className='profile_btn' onClick={() => handleRoleSelect("user")}>
                        <div className="profile_img">
                            <img src={AgentImage} alt="" className='img-fluid' />
                        </div>

                        <span>Agent</span>
                    </button>
                    <button type='button' className='profile_btn' onClick={() => handleRoleSelect("agent")}>
                        <div className="profile_img">
                            <img src={UserImage} alt="" className='img-fluid' />
                        </div>

                        <span>User</span>
                    </button>
                </div>

            </Modal.Body>
        </Modal>
    )
}

export default RoleSelection;