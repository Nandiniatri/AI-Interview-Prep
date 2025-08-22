import './Header.css';
import './RespHeader.css';
import { FaCaretDown } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import Button from '../../../componets/Button';
import { useState } from 'react';

const Header = () => {
    const [showModal , setShowModal] = useState(false);

    const handleSignUpModal = () => {
        alert('Hello Signup');
        setShowModal(true);
    }


    return (
        <>
            <header className="hero-header">
                <div className="nav-container">
                    <div className="logo">InterviewAI</div>
                    <nav className="nav-links">
                        <a href="#">Home</a>
                        <a href="#">Features</a>
                        <a href="#">Pricing</a>
                        <a href="#">Resources</a>
                    </nav>
                    <div className="auth-buttons">
                        <Button className="login-btn">Contact Us</Button>
                        <Button className="signup-btn" onClick={handleSignUpModal}>Sign Up</Button>
                    </div>
                </div>
            </header>

            <div>
                {showModal && <h1>Hello</h1>}
            </div>
        </>
    );
};

export default Header;
