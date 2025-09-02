import { useEffect, useState } from "react";

const VoiceListener = () => {
    const [isListening, setIsListening] = useState(false);
    const [transcript, setTranscript] = useState("");

    useEffect(() => {
        // Browser support check
        const SpeechRecognition =
            window.SpeechRecognition || window.webkitSpeechRecognition;

        if (!SpeechRecognition) {
            alert("Speech Recognition not supported in this browser!");
            return;
        }

        const recognition = new SpeechRecognition();
        recognition.continuous = true;   // continuously sunta rahega
        recognition.interimResults = true; // live results dega
        recognition.lang = "en-US";      // language set karo (Hindi bhi set kar sakte ho: hi-IN)

        recognition.onresult = (event) => {
            let current = event.resultIndex;
            let transcriptResult = event.results[current][0].transcript;
            setTranscript(transcriptResult);
        };

        if (isListening) {
            recognition.start();
        } else {
            recognition.stop();
        }

        return () => {
            recognition.stop();
        };
    }, [isListening]);

    console.log(transcript);
    

    return (
        <div>
            <button onClick={() => setIsListening(true)}>🎤 Start Listening</button>
            <button onClick={() => setIsListening(false)}>🛑 Stop Listening</button>
            <p><b>Your Voice:</b> {transcript}</p>
        </div>
    );
};

export default VoiceListener;
