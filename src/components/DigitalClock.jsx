import { useEffect, useState } from 'react'
import './css/DigitalClock.css'
import { useNavigate } from 'react-router-dom';
function DigitalClock() {
    const navigate = useNavigate()
    const [time,setTime]=useState(new Date())
    const formattedTime = time.toLocaleTimeString(); // Format: 05:30:55 PM
    const formattedDate = time.toLocaleDateString("en-US", { 
        weekday: "long", year: "numeric", month: "long", day: "numeric" 
    });
    useEffect(()=>{
        let interval =setInterval(()=>{
            
            setTime(new Date())
        },1000);
        return ()=>clearInterval(interval)
    },[])

    
    return (
        <>
             
            <div className="main">
            <div className="back-btn-div">
            <button onClick={() => navigate("/services")}>Back</button>
          </div>
                <div className='container'>
                    <div>
                        <h1>Digital Clock</h1>
                    </div>
                    <div>
                        <h2>{formattedTime }</h2>
                    </div>
                    <div>
                        <h3>{formattedDate}</h3>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DigitalClock
