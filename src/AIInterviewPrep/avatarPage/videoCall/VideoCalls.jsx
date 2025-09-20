import { useEffect, useRef } from 'react';
import './VideoCall.css';
import { useDataContext } from '../../../contextApi/DatasContectApi';
import Button from '../../../componets/Button';

const VideoCall = () => {
    const videoRef = useRef(null);
    const streamRef = useRef(null);
    const { questions, navigate } = useDataContext();

    // const handleVideoCallExit = () => {
    //     if(streamRef.current){
    //         streamRef.current.getTracks().forEach(track => track.stop());
    //         streamRef.current = null;
    //     }
    //     navigate('/');
    // } 

    const handleVideoCallExit = () => {
        if (streamRef.current) {
            streamRef.current.getTracks().forEach(track => track.stop()); // stop all tracks
            if (videoRef.current) {
                videoRef.current.srcObject = null; // ✅ disconnect from video element
            }
            streamRef.current = null; // clear reference
        }
        navigate('/'); // go home
    };


    if (!questions) {
        alert('there is no questions data');
    }

    useEffect(() => {
        navigator.mediaDevices.getUserMedia({ video: true })
            .then(stream => {
                streamRef.current = stream;
                if (videoRef.current) {
                    videoRef.current.srcObject = stream
                }
            })
            .catch(err => {
                console.log('Camera or mic not working', err);
            })

        // return () => {
        //     if (streamRef.current) {
        //         streamRef.current.getTracks().forEach(track => track.stop());
        //         streamRef.current = null;
        //     }
        // }

        return () => {
            if (streamRef.current) {
                streamRef.current.getTracks().forEach(track => track.stop());
                if (videoRef.current) {
                    videoRef.current.srcObject = null; // ✅ cleanup video element
                }
                streamRef.current = null;
            }
        };

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