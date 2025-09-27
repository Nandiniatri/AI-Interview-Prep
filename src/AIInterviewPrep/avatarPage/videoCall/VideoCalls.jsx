// import { useEffect, useRef, useState } from 'react';
// import './VideoCall.css';
// import { useDataContext } from '../../../contextApi/DatasContectApi';
// import Button from '../../../componets/Button';

// const VideoCall = () => {
//     const videoRef = useRef(null);
//     const streamRef = useRef(null);
//     const { questions, navigate } = useDataContext();
//     const [recordingHandle , setRecordingHandle] = useState()


//     const handleVideoCallExit = () => {
//         if (streamRef.current) {
//             streamRef.current.getTracks().forEach(track => track.stop());
//             if (videoRef.current) {
//                 videoRef.current.srcObject = null; 
//             }
//             streamRef.current = null;
//         }
//         navigate('/'); 
//     };


//     if (!questions) {
//         alert('there is no questions data');
//     }

//     useEffect(() => {
//         navigator.mediaDevices.getUserMedia({ video: true })
//             .then(stream => {
//                 streamRef.current = stream;
//                 if (videoRef.current) {
//                     videoRef.current.srcObject = stream
//                 }
//             })
//             .catch(err => {
//                 console.log('Camera or mic not working', err);
//             })

//         return () => {
//             if (streamRef.current) {
//                 streamRef.current.getTracks().forEach(track => track.stop());
//                 if (videoRef.current) {
//                     videoRef.current.srcObject = null; 
//                 }
//                 streamRef.current = null;
//             }
//         };

//     }, [])


//     if (!questions || questions.length === 0) {
//         return <h4>No questions found</h4>;
//     }

//     const { title, subTitle } = questions[0];

//     return (
//         <div className='video-call-main-container'>
//             <div className="video-Call-main-div">
//                 <div className='video-Call-title-div'>
//                     <h3>{title}</h3>
//                     <span>{subTitle}</span>
//                 </div>

//                 <div>
//                     <video ref={videoRef} autoPlay playsInline muted className='video-call' />
//                 </div>
//             </div>

//             <div className='exit-div'>
//                 <Button className='video-call-exit-btn' onClick={handleVideoCallExit}>Exit Interview</Button>
//             </div>
//         </div>
//     )
// }

// export default VideoCall;   









// import { useEffect, useRef } from 'react';
// import './VideoCall.css';
// import { useDataContext } from '../../../contextApi/DatasContectApi';
// import Button from '../../../componets/Button';

// const VideoCall = () => {
//     const videoRef = useRef(null);
//     const streamRef = useRef(null);
//     const recorderRef = useRef(null);

//     const { questions, navigate, setRecordedVideo } = useDataContext();

//     const handleVideoCallExit = () => {
//         if (recorderRef.current) {
//             recorderRef.current.stop(); 
//         }
//         if (streamRef.current) {
//             streamRef.current.getTracks().forEach(track => track.stop());
//             if (videoRef.current) videoRef.current.srcObject = null;
//             streamRef.current = null;
//         }
//         navigate('/');
//     };

//     useEffect(() => {
//         navigator.mediaDevices.getUserMedia({ video: true, audio: true })
//             .then(stream => {
//                 streamRef.current = stream;
//                 if (videoRef.current) {
//                     videoRef.current.srcObject = stream;
//                 }

//                 let chunks = [];
//                 const recorder = new MediaRecorder(stream);

//                 recorder.ondataavailable = (e) => {
//                     if (e.data.size > 0) {
//                         chunks.push(e.data);
//                     }
//                 };

//                 recorder.onstop = () => {
//                     const blob = new Blob(chunks, { type: "video/webm" });
//                     const url = URL.createObjectURL(blob);
//                     setRecordedVideo(url); 
//                 };

//                 recorder.start();
//                 recorderRef.current = recorder;
//             })
//             .catch(err => {
//                 console.log('Camera or mic not working', err);
//             });

//         return () => {
//             if (recorderRef.current) recorderRef.current.stop();
//             if (streamRef.current) {
//                 streamRef.current.getTracks().forEach(track => track.stop());
//                 if (videoRef.current) videoRef.current.srcObject = null;
//                 streamRef.current = null;
//             }
//         };
//     }, [setRecordedVideo]);

//     if (!questions || questions.length === 0) {
//         return <h4>No questions found</h4>;
//     }

//     const { title, subTitle } = questions[0];

//     return (
//         <div className='video-call-main-container'>
//             <div className="video-Call-main-div">
//                 <div className='video-Call-title-div'>
//                     <h3>{title}</h3>
//                     <span>{subTitle}</span>
//                 </div>

//                 <div>
//                     <video
//                         ref={videoRef}
//                         autoPlay
//                         playsInline
//                         muted
//                         className='video-call'
//                     />
//                 </div>
//             </div>

//             <div className='exit-div'>
//                 <Button className='video-call-exit-btn' onClick={handleVideoCallExit}>
//                     Exit Interview
//                 </Button>
//             </div>
//         </div>
//     );
// };

// export default VideoCall;















// // components/videoCall/VideoCall.jsx
// import { useEffect, useRef } from 'react';
// import './VideoCall.css';
// import { useDataContext } from '../../../contextApi/DatasContectApi';
// import Button from '../../../componets/Button';
// import supa

// const VideoCall = () => {
//     const videoRef = useRef(null);
//     const streamRef = useRef(null);
//     const recorderRef = useRef(null);

//     const { questions, navigate, setRecordedVideo } = useDataContext();

//     const handleVideoCallExit = () => {
//         if (recorderRef.current) recorderRef.current.stop(); 
//         if (streamRef.current) {
//             streamRef.current.getTracks().forEach(track => track.stop());
//             if (videoRef.current) videoRef.current.srcObject = null;
//             streamRef.current = null;
//         }
//         navigate('/');
//     };

//     useEffect(() => {
//         navigator.mediaDevices.getUserMedia({ video: true, audio: true })
//             .then(stream => {
//                 streamRef.current = stream;
//                 if (videoRef.current) videoRef.current.srcObject = stream;

//                 let chunks = [];
//                 const recorder = new MediaRecorder(stream);

//                 recorder.ondataavailable = (e) => {
//                     if (e.data.size > 0) chunks.push(e.data);
//                 };

//                 recorder.onstop = async () => {
//                     const blob = new Blob(chunks, { type: 'video/webm' });
//                     chunks = [];

//                     // Upload to Supabase
//                     const fileName = `question-${questions[0]?.id || '0'}-${Date.now()}.webm`;
//                     const { data, error } = await supabase.storage
//                         .from('recordings') // bucket name
//                         .upload(fileName, blob);

//                     if (error) {
//                         console.error('Upload failed:', error);
//                         return;
//                     }

//                     const { data: urlData } = supabase.storage
//                         .from('recordings')
//                         .getPublicUrl(fileName);

//                     // Save URL in context for AnalysisPage
//                     setRecordedVideo(urlData.publicUrl);
//                 };

//                 recorder.start();
//                 recorderRef.current = recorder;
//             })
//             .catch(err => console.log('Camera or mic not working', err));

//         return () => {
//             if (recorderRef.current) recorderRef.current.stop();
//             if (streamRef.current) {
//                 streamRef.current.getTracks().forEach(track => track.stop());
//                 if (videoRef.current) videoRef.current.srcObject = null;
//                 streamRef.current = null;
//             }
//         };
//     }, [questions, setRecordedVideo]);

//     if (!questions || questions.length === 0) {
//         return <h4>No questions found</h4>;
//     }

//     const { title, subTitle } = questions[0];

//     return (
//         <div className='video-call-main-container'>
//             <div className="video-Call-main-div">
//                 <div className='video-Call-title-div'>
//                     <h3>{title}</h3>
//                     <span>{subTitle}</span>
//                 </div>

//                 <div>
//                     <video
//                         ref={videoRef}
//                         autoPlay
//                         playsInline
//                         muted
//                         className='video-call'
//                     />
//                 </div>
//             </div>

//             <div className='exit-div'>
//                 <Button className='video-call-exit-btn' onClick={handleVideoCallExit}>
//                     Exit Interview
//                 </Button>
//             </div>
//         </div>
//     );
// };

// export default VideoCall;






import { useEffect, useRef } from 'react';
import './VideoCall.css';
import { useDataContext } from '../../../contextApi/DatasContectApi';
import Button from '../../../componets/Button';
import { supabase } from '../../../../supabaseClient';

const VideoCall = () => {
    const videoRef = useRef(null);
    const streamRef = useRef(null);
    const recorderRef = useRef(null);

    // Promise / resolver to wait until onstop/upload finished
    const finishResolveRef = useRef(null);
    const finishPromiseRef = useRef(null);

    const { questions, navigate, setRecordedVideo } = useDataContext();

    // Wait helper: wait up to `timeoutMs` if upload never resolves
    const waitForFinish = (timeoutMs = 10000) => {
        if (!finishPromiseRef.current) return Promise.resolve();
        return Promise.race([
            finishPromiseRef.current,
            new Promise((res) => setTimeout(res, timeoutMs))
        ]);
    };

    const handleVideoCallExit = async () => {
        try {
            if (recorderRef.current) {
                // stop recorder (will trigger onstop and upload)
                recorderRef.current.stop();
            }

            // wait for upload to finish (or timeout)
            await waitForFinish(15000); // wait up to 15s

            // stop tracks and cleanup
            if (streamRef.current) {
                streamRef.current.getTracks().forEach((track) => track.stop());
                if (videoRef.current) videoRef.current.srcObject = null;
                streamRef.current = null;
            }
        } catch (err) {
            console.error('Error while exiting video call:', err);
        } finally {
            // navigate away after cleanup
            navigate('/');
        }
    };

    useEffect(() => {
        let chunks = [];

        navigator.mediaDevices.getUserMedia({ video: true, audio: true })
            .then((stream) => {
                streamRef.current = stream;
                if (videoRef.current) videoRef.current.srcObject = stream;

                const recorder = new MediaRecorder(stream);

                // prepare a promise that will be resolved when upload finishes
                finishPromiseRef.current = new Promise((resolve) => {
                    finishResolveRef.current = resolve;
                });

                recorder.ondataavailable = (e) => {
                    if (e.data && e.data.size > 0) chunks.push(e.data);
                };

                recorder.onstop = async () => {
                    try {
                        if (chunks.length === 0) {
                            console.warn('No chunks recorded');
                            return;
                        }

                        const blob = new Blob(chunks, { type: 'video/webm' });
                        chunks = [];

                        const questionId = questions?.[0]?.id ?? '0';
                        const fileName = `question-${questionId}-${Date.now()}.webm`;

                        // Upload to Supabase
                        const { error: uploadError } = await supabase.storage
                            .from('recordings')
                            .upload(fileName, blob, {
                                contentType: 'video/webm',
                                // upsert: false  // default false; set true only if you want overwrite and policies for SELECT/UPDATE
                            });

                        if (uploadError) {
                            console.error('Upload failed:', uploadError);
                            alert('Upload failed: ' + (uploadError.message || uploadError));
                            return;
                        }

                        // Get public URL and set in context
                        const { data: urlData } = supabase.storage
                            .from('recordings')
                            .getPublicUrl(fileName);

                        console.log('Uploaded public URL:', urlData?.publicUrl);
                        if (urlData?.publicUrl) {
                            setRecordedVideo(urlData.publicUrl);
                        } else {
                            console.warn('Public URL not returned, check bucket access or use createSignedUrl.');
                        }
                    } catch (err) {
                        console.error('Error during onstop/upload:', err);
                    } finally {
                        // resolve waiting promise so handleVideoCallExit can continue
                        if (finishResolveRef.current) {
                            finishResolveRef.current();
                            finishResolveRef.current = null;
                            finishPromiseRef.current = null;
                        }
                    }
                };

                recorder.start();
                recorderRef.current = recorder;
            })
            .catch((err) => {
                console.error('Camera or mic not working', err);
            });

        return () => {
            // component unmount cleanup
            try {
                if (recorderRef.current) {
                    recorderRef.current.stop();
                    recorderRef.current = null;
                }
                if (streamRef.current) {
                    streamRef.current.getTracks().forEach((track) => track.stop());
                    if (videoRef.current) videoRef.current.srcObject = null;
                    streamRef.current = null;
                }
            } catch (err) {
                console.error('Cleanup error:', err);
            }
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [questions, setRecordedVideo]);

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
                    <video
                        ref={videoRef}
                        autoPlay
                        playsInline
                        muted
                        className='video-call'
                    />
                </div>
            </div>

            <div className='exit-div'>
                <Button className='video-call-exit-btn' onClick={handleVideoCallExit}>
                    Exit Interview
                </Button>
            </div>
        </div>
    );
};

export default VideoCall;
