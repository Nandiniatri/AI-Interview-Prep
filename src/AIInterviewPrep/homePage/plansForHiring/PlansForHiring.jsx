import { useEffect, useState } from "react";
import { FaToggleOff, FaToggleOn } from "react-icons/fa";

const PlansForHiring = () => {
    const [plansCard , setPlansCard] = useState([]);

    const fetchHiringPlan = async() => {
        try {
            const response = await fetch('/data/hiringPlanData.json');
            const result = await response.json();
            setPlansCard(result);
        } catch (error) {
            console.log('Network Issue');
        }
    }

    useEffect(() => {
        fetchHiringPlan();
    }, [])

    return (
        <>
            <div>
                <h1>Choose the Perfect Plan for your Hiring Needs</h1>
                <p>Our Basic Plan is ideal for startups and small businesses looking to optimize their hiring process.</p>
                <p><FaToggleOff /></p>
                <p>Yearly <span style={{ color: 'purple' }}>-20% OFF</span></p>
            </div>

            <div>
                {plansCard.map((item) => {
                    return (
                        <div>
                            
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default PlansForHiring;