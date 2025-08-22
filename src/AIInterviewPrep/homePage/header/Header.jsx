import './Header.css';
import './RespHeader.css';
import Button from '../../../componets/Button';
import { useState } from 'react';
import Modal2 from '../../../componets/modal2/Modal2';

const Header = () => {
    const [showModal , setShowModal] = useState(false);

    const handleClosedModal2 = () => {
        setShowModal(false);
    }

    const handleSignUpModal = () => {
        console.log('Modal will be open');
        
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
                <Modal2 isOpen={showModal} onClose={handleClosedModal2}>
                    <h1>Hello Modal 2</h1>
                </Modal2>
            </div>
        </>
    );
};

export default Header;
