import "./SuperChargeSection.css";

const SuperchargeSection = () => {
    return (
        <section className="supercharge-section">
            <div className="supercharge-container">

                <div className="supercharge-content">
                    <h2>Supercharge Your Hiring Process with InterviewAI</h2>
                    <p>
                        Ready to revolutionize your talent acquisition and make smarter hiring decisions? Take
                        the first step towards a more efficient and effective hiring process by requesting a
                        demo of InterviewAI today.
                    </p>

                    <div className="email-form">
                        <input type="email" placeholder="Enter your email" />
                        <button type="submit">Submit</button>
                    </div>
                </div>

                <div className="supercharge-image">
                    <img
                        src="https://cdn.dribbble.com/userupload/8367597/file/original-80e26632af0c177fd934874eeeb877b9.png?resize=752x&vertical=center"
                        alt="Interview Illustration"
                    />
                </div>
            </div>
        </section>
    );
};

export default SuperchargeSection;
