import { FcGoogle } from "react-icons/fc";
import Button from "../Button";
import './signform.css';
import Header from "../../AIInterviewPrep/homePage/header/Header";
import { Link } from "react-router-dom";
import { useDataContext } from "../../contextApi/DatasContectApi";

const LoginInSignUpForm = () => {
    const { signUp, session } = useDataContext();
    // console.log(signUp)
    // console.log("Current session:", session);



    return (
        <div className="signup-container-main-div">
            <div className="header-class-in-signIn">
                <Header />
            </div>

            <div>
                <div className="signup-container">
                    <form className="signup-form">
                        <div className="signup-header">
                            <h4 className="signup-title">Sign In</h4>
                            <p className="signup-subtitle">Enter your email and password to Sign In.</p>
                        </div>

                        <div className="signup-google">
                            <Button className="signup-google-btn" onClick={signUp}>
                                <FcGoogle size={24} />
                                <h6 className="signup-google-text">Login with Google</h6>
                            </Button>
                        </div>

                        <div className="signup-divider">
                            <hr className="divider-line" />
                            <span className="divider-text">OR</span>
                            <hr className="divider-line" />
                        </div>

                        <div className="signup-fields">
                            <div className="form-group">
                                <label className="form-label">Email</label>
                                <input type="email" className="form-input" />
                            </div>
                            <div className="form-group">
                                <label className="form-label">Password</label>
                                <input type="password" className="form-input" />
                            </div>
                        </div>

                        <div className="signup-submit">
                            <Button className="signup-submit-btn">SIGN IN</Button>
                        </div>

                        <div className="signup-forgot">
                            <a href="/forgot-password" className="forgot-link">Forgot Password</a>
                        </div>

                        <div className="signup-footer">
                            <span>Don't have an account?</span>
                            <Link to="/signup" className="signup-link">Sign up</Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default LoginInSignUpForm;

