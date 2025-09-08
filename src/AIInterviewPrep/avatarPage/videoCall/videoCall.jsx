import { useEffect, useRef } from 'react';
import './VideoCall.css';

const VideoCall = () => {
    const videoRef = useRef(null);

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

    return (
        <div className="video-Call-main-div">
            <video ref={videoRef} autoPlay playsInline muted className='video-call'/>
        </div>
    )
}

export default VideoCall; 