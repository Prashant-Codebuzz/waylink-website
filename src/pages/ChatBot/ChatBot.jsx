import React from 'react'
import AgentIcon from "../../assets/images/intelligent-agent.png"
import "./ChatBot.scss"

const ChatBot = () => {

    const handleChatToggler = () => {
        document.body.classList.toggle("show-chatbot");
    }

    const handleChatRemove = () => {
        document.body.classList.remove("show-chatbot");
    }

    return (
        <>
            <button className="chatbot-toggler" onClick={handleChatToggler}>
                <span className="material-symbols-outlined">
                    <img src={AgentIcon} alt="chat-icon" className='img-fluid' />
                </span>
                <span className="material-symbols-outlined">&times;</span>
            </button>
            <div className="chatbot">
                <header>
                    <h2 className='text-para-heading-7'>Chat with us</h2>
                    <span className="close-btn material-symbols-outlined" onClick={handleChatRemove}><i className="fa-solid fa-xmark text-para-heading-12" /></span>
                </header>
                <ul className="chatbox">
                    <li className="chat incoming">
                        <p className='text-para-heading-12'>Hi there <br />How can i help you today ?</p>
                    </li>
                    <li className="chat outgoing">
                        <p className='text-para-heading-12'>Hi there <br />How can i help you today ?</p>
                    </li>
                </ul>
                <div className="chat-input">
                    <textarea className='text-para-heading-12' placeholder="Enter a message..." required />
                    <span id="send-btn">
                        📤
                    </span>
                </div>
            </div>
        </>
    )
}

export default ChatBot