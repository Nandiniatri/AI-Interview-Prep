import { useEffect, useState } from 'react';
import './Features.css';

const Features = () => {
    const [cardData, setCardData] = useState([]);
    const [activeCardId, setActiveCardId] = useState(null);

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

    const handleCardClick = (id) => {
        setActiveCardId((prev) => (prev === id ? null : id));
    };

    return (
        <div className="features-main-div">
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
                {cardData.map((item) => (
                    <div
                        key={item.id}
                        className="feature-card"
                        onClick={() => handleCardClick(item.id)}
                        style={{
                            backgroundImage:
                                activeCardId === item.id ? item.backgroundColor : 'none',
                            backgroundColor: activeCardId === item.id ? 'transparent' : '#fff',
                            color: activeCardId === item.id ? '#fff' : '#000',
                        }}
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
