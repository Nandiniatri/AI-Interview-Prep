import './Revision.css';

const Revision = () => {
    return (
        <div className='revision-main-div'>
            <p>Hello</p>
            <button>Hello Baccho</button>
            <p>jab two or more transation wait krte hai to indefinify for each other to realse a lock so this is deadlock</p>
            <ul>
                <li>Prevention</li>
                <li>Avoidance</li>
                <li>Detection</li>
                <li>Restore</li>
            </ul>

            <h1>Check Point</h1>
            <p>it is a machism of DB . Which they save the current state Date in DB.
                In check point is a restore point that ensure , where the system where crash so they automatically return to the last safe current. It is known as check point. 
            </p>
            <ul>
                <li>Manully</li>
                <li>Auto-mated</li>
                <li>Time-based</li>
                <li>Transaction-based</li>
            </ul>

            <button>Hello</button>

            <button>Hello Baccho</button>
            <button>hello</button>
        </div>
    )
}

export default Revision;