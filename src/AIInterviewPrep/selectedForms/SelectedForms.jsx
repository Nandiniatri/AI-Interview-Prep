import { useEffect, useState } from "react";

const SelectedForm = () => {
    const [data, setData] = useState([]);

    const fetchData = async () => {
        try {
            const response = await fetch('');
            const result = await response.json();
            console.log(result);
            setData(result);
        } catch (error) {
            console.log('Network Error');
        }
    }

    useEffect(() => {
        fetchData();
    }, [])

    return (
        <>
            <h2>Interview Details</h2>
        </>
    )
}

export default SelectedForm;