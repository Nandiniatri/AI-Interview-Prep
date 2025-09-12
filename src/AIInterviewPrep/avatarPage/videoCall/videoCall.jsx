import { useEffect, useRef } from 'react';
import './VideoCall.css';
import { useDataContext } from '../../../contextApi/DatasContectApi';

const VideoCall = () => {
    const videoRef = useRef(null);
    const { questions } = useDataContext();

    console.log(questions);
    

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

    return (
        <>
            <div className="video-Call-main-div">
                <video ref={videoRef} autoPlay playsInline muted className='video-call' />
                <h4>Title : {questions.title}</h4>
                <h4>SubTitle : {questions.subTitle}</h4>
            </div>
        </>
    )
}

export default VideoCall;  