import { useEffect, useState } from 'react';
import './Features.css';

const Features = () => {
    const [cardData, setCardData] = useState([]);

    const fetchFeaturesData = async () => {
        try {
            const response = await fetch('/data/featuresData.json');
            const result = await response.json();
            setCardData(result);
        } catch (error) {
            console.log('Network Problem', error);
        }
    };

    useEffect(() => {
        fetchFeaturesData();
    }, []);

    return (
        <div className="features-main-div">
            {/* heading */}
            <div className="features-top">
                <h2>
                    Powerful Features of <span>InterviewAI</span>
                </h2>
                <p>
                    InterviewAI is packed with a comprehensive set of powerful features
                    designed to optimize and streamline your hiring process.
                    Our platform empowers you to make data‑driven decisions.
                </p>
            </div>

            <div className="features-cards">
                {cardData.map((item, index) => (
                    <div
                        className='feature-card'
                        key={item.id}
                    >
                        <div className="card-image">
                            <img src={item.image} alt={item.title} />
                        </div>
                        <h3>{item.title}</h3>
                        <p>{item.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Features;
