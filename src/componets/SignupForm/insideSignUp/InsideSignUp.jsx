import { FcGoogle } from "react-icons/fc";
import Button from "../../Button";
import './InsideSignUp.css';
import Header from "../../../AIInterviewPrep/homePage/header/Header";
import { useDataContext } from "../../../contextApi/DatasContectApi";
import { useState } from "react";

const InsideSignUp = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLogin, setIsLogin] = useState(false);
    const { signOut, signUp, session } = useDataContext();


    const handleSubmit = async (e) => {
        e.preventDefault();
        if (isLogin) {
            const { error } = await loginWithEmail(email, password);
            if (!error) alert("Login Successful ✅");
        } else {
            const { error } = await signUpWithEmail(email, password);
            if (!error) alert("Signup Successful ✅, Check your email!");
        }
    };

    return (
        <div className="signup-container-main-div">
            <div className="header-class-in-signIn">
                <Header />
            </div>

            <div>
                <div className="signup-container">
                    <h2>{isLogin ? "Login" : "Sign Up"}</h2>

                    <form className="signup-form" onSubmit={handleSubmit}>

                        {/* Header */}
                        <div className="signup-header">
                            <h4 className="signup-title">Sign Up</h4>
                        </div>

                        {/* Google Button */}
                        <div className="signup-google">
                            <Button className="signup-google-btn" onClick={signUp}>
                                <FcGoogle size={24} />
                                <h6 className="signup-google-text">Login with Google</h6>
                            </Button>
                        </div>

                        {/* Divider */}
                        <div className="signup-divider">
                            <hr className="divider-line" />
                            <span className="divider-text">OR</span>
                            <hr className="divider-line" />
                        </div>

                        {/* Input Fields */}
                        <div className="inside-signup-fields">

                            <div className="inside-name-last">
                                <div className="form-group">
                                    <label className="form-label">First Name</label>
                                    <input type="text" className="form-input-firstname" />
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
                                    <input type="password" className="form-input-firstname" />
                                </div>

                                <div className="form-group">
                                    <label className="form-label">Confirm Password</label>
                                    <input type="password" className="form-input-firstname" />
                                </div>
                            </div>

                        </div>

                        {/* Submit */}
                        <div className="signup-submit">
                            <Button className="signup-submit-btn">SIGN UP</Button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default InsideSignUp;
