import { FcGoogle } from "react-icons/fc";
import Button from "../../Button";

const InsideSignUp = () => {
    return (
        <>
            <div className="signup-container">
                <form className="signup-form">

                    <div className="signup-header">
                        <h4 className="signup-title">Sign In</h4>
                    </div>


                    <div className="signup-google">
                        <Button className="signup-google-btn">
                            <FcGoogle size={24} />
                            <h6 className="signup-google-text">Login with Google</h6>
                        </Button>
                    </div>


                    <div className="signup-divider">
                        <hr className="divider-line" />
                        <span className="divider-text">OR</span>
                        <hr className="divider-line" />
                    </div>


                    <div className="inside-signup-fields">
                        <div className="inside-name-last">
                            <div className="form-group">
                                <label className="form-label">First Name</label>
                                <input type="text" className="form-input" />
                            </div>

                            <div className="form-group">
                                <label className="form-label">Last Name</label>
                                <input type="text" className="form-input" />
                            </div>
                        </div>

                        <div className="form-group">
                            <label className="form-label">Email</label>
                            <input type="email" className="form-input" />
                        </div>

                        <div className="inside-passwords">
                            <div className="form-group">
                                <label className="form-label">Password</label>
                                <input type="password" className="form-input" />
                            </div>

                            <div className="form-group">
                                <label className="form-label">Confirm Password</label>
                                <input type="password" className="form-input" />
                            </div>
                        </div>

                    </div>


                    <div className="signup-submit">
                        <Button className="signup-submit-btn">SIGN IN</Button>
                    </div>


                    <div className="signup-forgot">
                        <a href="/forgot-password" className="forgot-link">Forgot Password</a>
                    </div>

                </form>
            </div>
        </>
    )
}

export default InsideSignUp;