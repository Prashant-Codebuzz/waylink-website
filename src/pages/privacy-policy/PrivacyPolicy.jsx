import React from 'react'

// Css
import "./PrivacyPolicy.scss";

const PrivacyPolicy = () => {
    return (
        <>

            {/* ------ Privacy-Policy Start ------ */}
            <div className="privacy_policy">
                <div className="container">
                    <div className="top">
                        <h1>Privacy Policy</h1>
                    </div>

                    <div className="second">
                        <div className='content'>
                            <h5>1. Introduction</h5>

                            <p>
                                Waylink (“we,” “our,” or “us”) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website [insert website URL], use our services, or communicate with us.
                            </p>

                            <p>
                                By using our services, you agree to the terms of this Privacy Policy.
                            </p>
                        </div>

                        <div className='content'>
                            <h5>2. Information We Collect</h5>

                            <div className='sub'>
                                <h6>A. Personal Information</h6>
                                <p>We may collect personal information including but not limited to:</p>

                                <ul>
                                    <li><p>Full name</p></li>
                                    <li><p>Contact details (email address, phone number, mailing address)</p></li>
                                    <li><p>Date of birth</p></li>
                                    <li><p>Immigration status</p></li>
                                    <li><p>Passport or identification number</p></li>
                                    <li><p>Employment and education history</p></li>
                                    <li><p>Supporting documents for visa or immigration applications</p></li>
                                </ul>
                            </div>


                            <div className='sub'>
                                <h6>B. Non-Personal Information</h6>
                                <p>We may also collect non-personal data such as:</p>

                                <ul>
                                    <li><p>IP address</p></li>
                                    <li><p>Browser type and version</p></li>
                                    <li><p>Pages you visit and time spent on them</p></li>
                                    <li><p>Referring website addresses</p></li>
                                </ul>
                            </div>
                        </div>

                        <div className='content'>
                            <h5>3. How We Use Your Information</h5>

                            <div className='sub'>
                                <p>We use your information to:</p>

                                <ul>
                                    <li><p>Provide immigration advice and services</p></li>
                                    <li><p>Submit applications and forms on your behalf</p></li>
                                    <li><p>Respond to inquiries and provide customer support</p></li>
                                    <li><p>Improve our website and user experience</p></li>
                                    <li><p>Comply with legal obligations</p></li>
                                </ul>
                            </div>
                        </div>

                        <div className='content'>
                            <h5>4. Sharing Your Information</h5>

                            <div className='sub mb-0'>
                                <p>We may share your information with:</p>

                                <ul>
                                    <li><p>Government agencies (e.g., USCIS, IRCC, Home Office) for processing your applications</p></li>
                                    <li><p>Third-party service providers who assist with data processing and service delivery</p></li>
                                    <li><p>Legal authorities when required by law or to protect our legal rights</p></li>
                                </ul>
                                
                                <p>We do not sell your personal information to third parties.</p>
                            </div>
                        </div>

                        <div className='content'>
                            <h5>5. Data Security</h5>

                            <p>
                                We implement appropriate security measures to protect your personal information, including encryption, firewalls, and secure access protocols. However, no method of transmission over the Internet is 100% secure.
                            </p>
                        </div>

                        <div className='content'>
                            <h5>6. Your Rights</h5>

                            <div className='sub'>
                                <p>Depending on your location, you may have the following rights:</p>

                                <ul>
                                    <li><p>Access to the personal data we hold about you</p></li>
                                    <li><p>Request correction or deletion of your data</p></li>
                                    <li><p>Withdraw consent for processing</p></li>
                                    <li><p>Lodge a complaint with a data protection authority</p></li>
                                </ul>

                                <p>To exercise your rights, please contact us</p>
                            </div>
                        </div>

                        <div className='content'>
                            <h5>7. Cookies and Tracking Technologies</h5>

                            <p>
                                We use cookies and similar tracking technologies to improve your browsing experience. You can modify your cookie preferences through your browser settings.
                            </p>
                        </div>

                        <div className='content'>
                            <h5>8. Third-Party Links</h5>

                            <p>
                                Our website may contain links to external websites. We are not responsible for the privacy practices of these websites.
                            </p>
                        </div>

                        <div className='content'>
                            <h5>9. Children’s Privacy</h5>

                            <p>
                                Our services are not intended for individuals under the age of 18. We do not knowingly collect personal information from children.
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
            {/* ------ Privacy-Policy End ------ */}

        </>
    )
}

export default PrivacyPolicy;