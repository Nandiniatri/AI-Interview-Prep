import { useEffect, useState } from "react";
import { FaToggleOff, FaToggleOn } from "react-icons/fa";
import "./PlansForHiring.css";
import Image from "../../../componets/Image";

const PlansForHiring = () => {
    const [plansCard, setPlansCard] = useState([]);
    const [isMonthly, setIsMonthly] = useState(true); 

    const fetchHiringPlan = async () => {
        try {
            const response = await fetch("/data/hiringPlanData.json");
            const result = await response.json();
            setPlansCard(result);
        } catch (error) {
            console.log("Network Issue");
        }
    };

    useEffect(() => {
        fetchHiringPlan();
    }, []);

    return (
        <div className="plans-wrapper">
            <div className="plans-header">
                <h1>Choose the Perfect Plan for Your Hiring Needs</h1>
                <p>
                    Our Basic Plan is ideal for startups and small businesses looking to
                    optimize their hiring process.
                </p>

                <div className="toggle-wrapper">
                    <span>Monthly</span>
                    <span className="toggle-icon" onClick={() => setIsMonthly(!isMonthly)}>
                        {isMonthly ? <FaToggleOn color="#7c3aed" size={24} /> : <FaToggleOff color="#999" size={24} />}
                    </span>
                    <span>
                        Yearly <span style={{ color: "purple" }}>-20% OFF</span>
                    </span>
                </div>
            </div>

            <div className="plans-cards">
                {plansCard.map((item) => (
                    <div className="plan-card" key={item.id}>
                        <div className="image-wrapper">
                            <h2 className="image-heading">{item.title}</h2>
                            <Image src="https://cdn.dribbble.com/userupload/20163147/file/original-a6e2470b5d34d3994b93470f4ddd671f.jpg?resize=752x564&vertical=center" className="plancard-image" preview={false} />
                        </div>
                        <p className="price">
                            <span className="plans-price-span2">{item.price}</span>/
                            <span className="plans-priceType-span2">{item.priceType}</span>
                        </p>
                        <p className="target">{item.target}</p>

                        <ul className="features">
                            {item.features.map((feature, i) => (
                                <li key={i}>✔ {feature}</li>
                            ))}
                        </ul>

                        <button className="plan-btn">{item.buttonText}</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PlansForHiring;
