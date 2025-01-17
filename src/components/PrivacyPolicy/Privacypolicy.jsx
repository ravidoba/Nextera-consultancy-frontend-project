import TitleBar from '../common/TitleBar/TitleBar';
import './Privacypolicy.scss';

const Privacypolicy = () => {
    return (
        <>
            <TitleBar title={`Privacy Policy`} />
            <div className='privacy'>
                <div className="privacy-container">
                    <div className="privacy-content">
                        <h4>Privacy Policy</h4>

                        <p className="intro-text">
                            We at NextEra Consultancy are committed to protecting the privacy of our visitors. We do not share, sell, rent, lease, or give away the information to any third party(parties).
                            This Privacy Policy is prepared to describe how we use and process your personal information. Please ensure that by visiting and using NextEra Consultancy.co, you are agreeing to
                            and accepting the policies described in this Privacy Policy.
                        </p>

                        <section className="policy-section">
                            <h4>Information We Collect:</h4>

                            <div className="info-block">
                                <h4>(i) Personal Information</h4>
                                <p>
                                    The personal information that we may collect includes your name, contact information, IP addresses, product and service selections, and other information identifying you.
                                    We may also gather and collect personal information from you at different points, including but not limited to the following:
                                </p>
                                <ul>
                                    <li>When you communicate with us as a customer or prospective customer</li>
                                    <li>When you visit our website or use the platform</li>
                                    <li>While registering you as an end-user or creating an account specifically for you</li>
                                    <li>When you use our services or form to get in touch with our agents</li>
                                </ul>
                            </div>

                            <div className="info-block">
                                <h4>(ii) Non-personal Data</h4>
                                <p>
                                    We may also collect or gather non-personal data or information about users whenever they interact with our website. Non-personal data and information include the
                                    type of computer, technical information like the operating system and Internet service providers, and other similar information via Google Analytics.
                                </p>
                            </div>

                            <div className="info-block">
                                <h4>Cookies</h4>
                                <p>
                                    Our website uses cookies to collect and store information about your visit to our website. We use cookies to provide a personalized experience on our website. Here's how we use cookies:
                                </p>
                                <ul>
                                    <li>Session cookies: Session cookies are temporary and only last until you close your browser</li>
                                    <li>Permanent cookies: Permanent cookies are stored on your device for the time specified in the cookie parameters or until you delete them</li>
                                </ul>
                            </div>

                            <div className="info-block">
                                <h4>Security</h4>
                                <p>
                                    We ensure that your shared personal or non-personal information is safe and secure from unauthorized access, use, loss, or destruction. Personal or non-personal
                                    information collected by us is stored on a secure web server managed by NextEra Consultancy. To protect from unauthorized access, we have implemented practical, electronic, and
                                    managerial procedures to safeguard and secure the information.
                                </p>
                            </div>

                            <div className="info-block">
                                <h4>Third-Party Websites</h4>
                                <p>
                                    Regarding the links to other sites, NextEra Consultancy is not responsible for the privacy practices or the content of such websites. This Privacy/Security statement does not apply to
                                    any third-party websites that are linked to this website. Links to third-party terms, brands, and names used on this website are the property of their respective owners.
                                </p>
                            </div>
                            <div className="info-block">
                                <h4>Changes to Privacy Policy</h4>
                                <p>
                                NextEra Consultancy reserves the right to change, edit, or amend this Privacy Policy at any time without any prior notice. When we change, edit, or remove any part of this privacy policy, we will mention the updated date at the bottom of this privacy policy page. We encourage our users to review this page frequently to stay updated with the changes that we perform. The continuing use of our website means that you agree and accept those changes.
                           </p>
                            </div>
                            <div className="info-block">
                                <h4>Data Breach</h4>
                                <p>
                                In case of any data breach of personal information/websites database/third-party data, processors are apparent, we will, within 72 hours, inform all relevant authorities about the same.  </p>
                            </div>
                         
                            <div className="info-block">
                                <h4>Terminationy</h4>
                                <p>
                                NextEra Consultancy reserves the right, in its sole discretion, to restrict or terminate the availability of the Site to any other person, geographic area, or jurisdiction at any time. No notice is required to effect any such restriction or termination. </p>
                            </div>
                            <div className="info-block">
                                <h4>Contact Us</h4>
                                <p>
                                In case you have any query or question regarding our Privacy Policy, you can get in touch with us using the Contact Us form.
                                </p>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Privacypolicy