import { useEffect, useRef } from 'react';
import './VideoCall.css';
import { useDataContext } from '../../../contextApi/DatasContectApi';
import Button from '../../../componets/Button';

const VideoCall = () => {
    const videoRef = useRef(null);
    const { questions, navigate } = useDataContext();

    const handleVideoCallExit = () => {
        navigate('/');
    } 

    if (!questions) {
        alert('there is no questions data');
    }

    useEffect(() => { 
        navigator.mediaDevices.getUserMedia({ video: true })
            .then(stream => {
                if (videoRef.current) {
                    videoRef.current.srcObject = stream
                }
            })
            .catch(err => {
                console.log('Camera or mic not working', err);
            })

    }, [])


    if (!questions || questions.length === 0) {
        return <h4>No questions found</h4>;
    }

    const { title, subTitle } = questions[0];

    return (
        <div className='video-call-main-container'>
            <div className="video-Call-main-div">
                <div className='video-Call-title-div'>
                    <h3>{title}</h3>
                    <span>{subTitle}</span>
                </div>

                <div>
                    <video ref={videoRef} autoPlay playsInline muted className='video-call' />
                </div>
            </div>

            <div className='exit-div'>
                <Button className='video-call-exit-btn' onClick={handleVideoCallExit}>Exit Interview</Button>
            </div>
        </div>
    )
}

export default VideoCall;  