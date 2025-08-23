import './Header.css';
import './RespHeader.css';
import Button from '../../../componets/Button';
import { Link } from 'react-router-dom';
import { useDataContext } from '../../../contextApi/DatasContectApi';
import Image from '../../../componets/Image';
import { IoChevronDownSharp } from "react-icons/io5";

const Header = () => {
    const { session, signOut } = useDataContext();
    console.log(session);

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
                        {!session ? (
                            <Button className="signup-btn"><Link to="/login" className='inside-signup-btn'>Sign Up</Link></Button>
                        ) : (
                            <div className='header-auth-div'>
                                <Image src={session?.user?.user_metadata?.avatar_url} className='header-auth-img' />
                                <span onClick={signOut}>
                                    {session?.user?.user_metadata?.name}
                                    <IoChevronDownSharp className='down-icon-header' size={'17px'}/>
                                </span>
                            </div>
                        )}
                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;

