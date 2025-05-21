import React from 'react'

// Css
import "./TermsConditions.scss";

const TermsConditions = () => {
    return (
        <>

            {/* ------ Terms-Conditions Start ------ */}
            <div className="terms_conditions">
                <div className="container">
                    <div className="top">
                        <h1>Terms & Conditions</h1>
                    </div>

                    <div className="second">
                        <div className='content'>
                            <p>
                                Welcome to Waylink ("we," "us," or "our"). By accessing or using our website and the services provided herein, you agree to comply with and be bound by these Terms and Conditions.
                            </p>

                            <p>
                                If you do not agree with these Terms, please do not use our website.
                            </p>
                        </div>

                        <div className='content'>
                            <h5>1. Use of Our Website</h5>

                            <p>You must be at least 18 years old to use our services.</p>

                            <p>You agree to use our website and services only for lawful purposes.</p>

                            <p>You must not misuse the website or its content in any way, including attempting unauthorized access, transmitting malware, or engaging in fraudulent activity.</p>
                        </div>

                        <div className='content'>
                            <h5>2. Immigration Services Disclaimer</h5>

                            <p>We are [state whether you are a licensed immigration consultant/law firm or provide informational support only].</p>

                            <p>While we aim to provide accurate and up-to-date information, immigration laws and regulations may change. We do not guarantee approval of any immigration application.</p>

                            <p>Any advice or information provided does not constitute legal advice unless explicitly stated.</p>
                        </div>

                        <div className='content'>
                            <h5>3. User Responsibilities</h5>

                            <p>You agree to provide accurate, complete, and current information when using our services.</p>

                            <p>You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.</p>

                            <p>You must not impersonate another individual or provide false information.</p>
                        </div>

                        <div className='content'>
                            <h5>4. Fees and Payment</h5>

                            <p>
                                Service fees, if applicable, will be clearly stated before you engage our services.
                            </p>

                            <p>Payment terms will be outlined during the service engagement process. All payments are due as agreed upon and are non-refundable unless otherwise stated.</p>
                        </div>

                        <div className='content'>
                            <h5>5. Intellectual Property</h5>

                            <p>All content on this website (text, graphics, logos, images, forms, etc.) is the property of [Your Company Name] and is protected by intellectual property laws.</p>

                            <p>You may not copy, reproduce, distribute, or create derivative works from our content without express written permission.</p>
                        </div>

                        <div className='content'>
                            <h5>6. Limitation of Liability</h5>

                            <div className='sub'>
                                <p>We are not liable for any loss or damage resulting from:</p>

                                <ul>
                                    <li><p>Errors or omissions in the content</p></li>
                                    <li><p>Delays in processing applications due to government action or inaction</p></li>
                                    <li><p>Unauthorized access to or use of your personal information</p></li>
                                </ul>

                                <p>To the fullest extent permitted by law, our liability is limited to the amount paid by you (if any) for our services.</p>
                            </div>
                        </div>

                        <div className='content'>
                            <h5>7. Third-Party Links</h5>

                            <p>
                                Our website may contain links to third-party websites. These are provided for your convenience only. We do not endorse or control these websites and are not responsible for their content or privacy practices.
                            </p>
                        </div>

                        <div className='content'>
                            <h5>8. Termination</h5>

                            <p>
                                We reserve the right to terminate or suspend your access to our website and services, without notice, for conduct that we believe violates these Terms or is harmful to other users or us.
                            </p>
                        </div>

                        <div className='content'>
                            <h5>9. Governing Law</h5>

                            <p>
                                These Terms are governed by the laws of [Insert Jurisdiction, e.g., the State of California, Canada, the United Kingdom], without regard to its conflict of laws rules.
                            </p>
                        </div>

                        <div className='content'>
                            <h5>10. Contact Us</h5>

                            <p>
                                If you have any questions or concerns about this Privacy Policy or your data, please contact us.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            {/* ------ Terms-Conditions End ------ */}

        </>
    )
}

export default TermsConditions;