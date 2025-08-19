// import React, { useState } from "react";

import { supabase } from "./supabaseClient";

// const VoiceAssistant = () => {
//   const [listening, setListening] = useState(false);
//   const [message, setMessage] = useState("");
//   const [aiReply, setAiReply] = useState("");
//   const [isSpeaking, setIsSpeaking] = useState(false);

//   // 🎤 Speech to Text
//   const startListening = () => {
//     const recognition = new window.webkitSpeechRecognition();
//     recognition.lang = "en-US";
//     recognition.start();

//     recognition.onresult = (event) => {
//       const transcript = event.results[0][0].transcript;
//       setMessage(transcript);
//       fetchAIResponse(transcript);
//     };

//     recognition.onerror = (err) => {
//       console.error("Speech recognition error:", err);
//     };

//     recognition.onend = () => setListening(false);
//     setListening(true);
//   };

//   // 🤖 Fetch AI Response from OpenAI
//   const fetchAIResponse = async (userText) => {
//     try {
//       const response = await fetch("https://api.openai.com/v1/chat/completions", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`, // ✅ API key from .env
//         },
//         body: JSON.stringify({
//           model: "gpt-4o-mini", // ya "gpt-4o" / "gpt-3.5-turbo"
//           messages: [{ role: "user", content: userText }],
//         }),
//       });

//       const data = await response.json();
//       console.log("AI Response:", data); // 👀 check karo console me

//       if (data?.choices?.length > 0) {
//         const reply = data.choices[0].message.content;
//         setAiReply(reply);
//         speak(reply);
//       } else {
//         setAiReply("⚠️ No response from AI.");
//       }
//     } catch (error) {
//       console.error("AI Error:", error);
//       setAiReply("❌ Error fetching AI response.");
//     }
//   };

//   // 🗣️ Text to Speech
//   const speak = (text) => {
//     const utterance = new SpeechSynthesisUtterance(text);
//     utterance.onstart = () => setIsSpeaking(true);
//     utterance.onend = () => setIsSpeaking(false);
//     window.speechSynthesis.speak(utterance);
//   };

//   return (
//     <div className="flex flex-col items-center p-6">
//       <h1 className="text-2xl font-bold mb-4">🎤 AI Voice Assistant</h1>

//       {/* Avatar */}
//       <img
//         src="https://i.ibb.co/yf3cZ9K/avatar.png"
//         alt="AI Avatar"
//         className={`w-40 h-40 rounded-full transition-transform duration-300 
//           ${isSpeaking ? "scale-110 animate-bounce" : "scale-100"}`}
//       />

//       <button
//         onClick={startListening}
//         className="mt-6 px-6 py-2 bg-blue-500 text-white rounded-lg shadow-md"
//       >
//         {listening ? "Listening..." : "Start Talking"}
//       </button>

//       <p className="mt-4 text-lg">🧑 You: {message}</p>
//       <p className="mt-2 text-green-600">🤖 AI: {aiReply}</p>
//     </div>
//   );
// };

// export default VoiceAssistant;





