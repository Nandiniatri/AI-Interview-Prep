import { useEffect, useState } from 'react';
import './Features.css';

const Features = () => {
    const [cardData, setCardData] = useState([]);

    const fetchFeaturesData = async () => {
        try {
            const response = await fetch('/public/data/featuresData.json');
            const result = await response.json();
            setCardData(result);
        } catch (error) {
            console.log('Network Problem');
        }
    }

    useEffect(() => {
        fetchFeaturesData();
    }, [])

    return (
        <div className='features-main-div'>
            <div className='features-div-first'>
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
            </div>

            <div className='features-div-second'>
                {cardData.map((item) => {
                    return (
                        <div>
                            
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Features;



