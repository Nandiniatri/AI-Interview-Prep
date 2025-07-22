import './Header.css';
import { FaCaretDown } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import Button from '../../../componets/Button';

const Header = () => {
    return (
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
                    <div><CiSearch className='ciSearch' /></div>
                    <Button className="login-btn">Log in</Button>
                    <Button className="signup-btn">Sign Up</Button>
                </div>
            </div>
        </header>
    );
};

export default Header;
