import './Footer.css';
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";


const Footer = () => {
    return (
        <div className="footer-main-container">
            <div className="footer-top">
                <h1 className="footer-heading">Technology to revolutionize <br /> your hiring process</h1>
                <div className="footer-logo">InterviewAI</div>
            </div>

            <div className="footer-nav">
                <ul>
                    <li>Home</li>
                    <li>Features</li>
                    <li>Pricing</li>
                    <li>Resources</li>
                </ul>

                <div className="footer-socials">
                    <p><FaInstagram /></p>
                    <p><FaFacebook /></p>
                    <p><FaTwitter /></p>
                    <p><FaWhatsapp /></p>
                </div>
            </div>

            <div className="footer-legal">
                <p>InterviewAI is a registered company in Indonesia. Company Number 123456. ©2025 InterviewAI LTD. All rights reserved.</p>
                <p className="footer-links">Privacy | Cookies | Terms & Conditions</p>
            </div>
        </div>
    );
};

export default Footer;

