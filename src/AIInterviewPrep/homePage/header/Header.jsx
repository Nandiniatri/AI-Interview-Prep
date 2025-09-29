import './Header.css';
import './RespHeader.css';
import Button from '../../../componets/Button';
import { Link, useLocation } from 'react-router-dom';
import { useDataContext } from '../../../contextApi/DatasContectApi';
import Image from '../../../componets/Image';
import { IoChevronDownSharp } from "react-icons/io5";
import { useState } from 'react';
import Modal2 from '../../../componets/modal2/Modal2';
import { FiMenu, FiX } from "react-icons/fi";

const Header = () => {
    const { session, signOut } = useDataContext();
    const location = useLocation();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    const toogleMenu = () =>{
        
    }

    const handleModal2 = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal2 = () => {
        setIsModalOpen(false);
    };

    const handleLogout = () => {
        signOut();
        handleCloseModal2();
    };


    const hideFullHeaderPages = ["/avatarModal", "/codingPage", "/analysisPage"];

    const isHomePage = !hideFullHeaderPages.includes(location.pathname);

    return (
        <header className="hero-header">
            <div className="nav-container">
                <div className="logo">InterviewAI</div>

                {isHomePage && (
                    <>
                        <nav className="nav-links">
                            <a href="#">Home</a>
                            <a href="#">Features</a>
                            <a href="#">Pricing</a>
                            <a href="#">Resources</a>
                        </nav>
                        <div className="auth-buttons">
                            <Button className="login-btn">Contact Us</Button>
                            {!session ? (
                                <Button className="signup-btn">
                                    <Link to="/login" className='inside-signup-btn'>
                                        Sign Up
                                    </Link>
                                </Button>
                            ) : (
                                <div className='header-auth-div'>
                                    <Image
                                        src={session?.user?.user_metadata?.avatar_url}
                                        className='header-auth-img'
                                    />
                                    <span onClick={handleModal2}>
                                        {session?.user?.user_metadata?.name}
                                        <IoChevronDownSharp className='down-icon-header' size={'17px'} />
                                    </span>
                                </div>
                            )}
                        </div>

                        <Modal2 isOpen={isModalOpen} onClose={handleCloseModal2}>
                            <h4 onClick={handleLogout} style={{ cursor: "pointer" }}>
                                Logout
                            </h4>
                        </Modal2>
                    </>
                )}
            </div>

            <div className="menu-toggle" onClick={toogleMenu}>
                <FiMenu />
            </div>
        </header>
    );
};

export default Header;
