// import React, { useState } from "react";

import { useEffect, useState } from "react";
import { supabase } from "./supabaseClient";

const VoiceAssistant = () => {
  const [listening, setListening] = useState(false);
  const [message, setMessage] = useState("");
  const [aiReply, setAiReply] = useState("");
  const [isSpeaking, setIsSpeaking] = useState(false);

  // 🎤 Speech to Text
  const startListening = () => {
    const recognition = new window.webkitSpeechRecognition();
    recognition.lang = "en-US";
    recognition.start();

    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      setMessage(transcript);
      fetchAIResponse(transcript);
    };

    recognition.onerror = (err) => {
      console.error("Speech recognition error:", err);
    };

    recognition.onend = () => setListening(false);
    setListening(true);
  };

  // 🤖 Fetch AI Response from OpenAI
  const fetchAIResponse = async (userText) => {
    try {
      const response = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`, // ✅ API key from .env
        },
        body: JSON.stringify({
          model: "gpt-4o-mini", // ya "gpt-4o" / "gpt-3.5-turbo"
          messages: [{ role: "user", content: userText }],
        }),
      });

      const data = await response.json();
      console.log("AI Response:", data); // 👀 check karo console me

      if (data?.choices?.length > 0) {
        const reply = data.choices[0].message.content;
        setAiReply(reply);
        speak(reply);
      } else {
        setAiReply("⚠️ No response from AI.");
      }
    } catch (error) {
      console.error("AI Error:", error);
      setAiReply("❌ Error fetching AI response.");
    }
  };

  // 🗣️ Text to Speech
  const speak = (text) => {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.onstart = () => setIsSpeaking(true);
    utterance.onend = () => setIsSpeaking(false);
    window.speechSynthesis.speak(utterance);
  };

  return (
    <div className="flex flex-col items-center p-6">
      <h1 className="text-2xl font-bold mb-4">🎤 AI Voice Assistant</h1>

      {/* Avatar */}
      <img
        src="https://i.ibb.co/yf3cZ9K/avatar.png"
        alt="AI Avatar"
        className={`w-40 h-40 rounded-full transition-transform duration-300 
          ${isSpeaking ? "scale-110 animate-bounce" : "scale-100"}`}
      />

      <button
        onClick={startListening}
        className="mt-6 px-6 py-2 bg-blue-500 text-white rounded-lg shadow-md"
      >
        {listening ? "Listening..." : "Start Talking"}
      </button>

      <p className="mt-4 text-lg">🧑 You: {message}</p>
      <p className="mt-2 text-green-600">🤖 AI: {aiReply}</p>
    </div>
  );
};

export default VoiceAssistant;








// import React, { useState } from "react";
// import SpeechRecognition, { useSpeechRecognition } from "react-speech-recognition";
// import { useSpeechSynthesis } from "react-speech-kit";
// import OpenAI from "openai";

// const openai = new OpenAI({
//   apiKey: "YOUR_OPENAI_API_KEY", // <- apna key lagana
//   dangerouslyAllowBrowser: true,
// });

// export default function AIChat() {
//   const [messages, setMessages] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const { speak } = useSpeechSynthesis();

//   // speech recognition
//   const {
//     transcript,
//     listening,
//     resetTranscript,
//     browserSupportsSpeechRecognition,
//   } = useSpeechRecognition();

//   if (!browserSupportsSpeechRecognition) {
//     return <p>Browser does not support speech recognition.</p>;
//   }

//   // Send message to OpenAI
//   const sendMessage = async (text) => {
//     if (!text) return;
//     setLoading(true);

//     const newMessages = [...messages, { role: "user", content: text }];
//     setMessages(newMessages);

//     try {
//       const response = await openai.chat.completions.create({
//         model: "gpt-4o-mini",
//         messages: newMessages,
//       });

//       const aiReply = response.choices[0].message.content;
//       setMessages([...newMessages, { role: "assistant", content: aiReply }]);

//       // bolkar sunao
//       speak({ text: aiReply });
//     } catch (err) {
//       console.error(err);
//     }

//     setLoading(false);
//     resetTranscript();
//   };

//   return (
//     <div style={{ padding: 20 }}>
//       <h2>🎤 AI Voice Assistant</h2>
//       <button onClick={SpeechRecognition.startListening}>
//         🎙 Start Listening
//       </button>
//       <button onClick={SpeechRecognition.stopListening}>⏹ Stop</button>
//       <p><b>Listening:</b> {listening ? "Yes" : "No"}</p>
//       <p><b>You said:</b> {transcript}</p>
//       <button onClick={() => sendMessage(transcript)}>Send to AI</button>

//       {loading && <p>⏳ Thinking...</p>}

//       <div style={{ marginTop: 20 }}>
//         {messages.map((msg, i) => (
//           <p key={i}>
//             <b>{msg.role}:</b> {msg.content}
//           </p>
//         ))}
//       </div>
//     </div>
//   );
// }





// import { useState } from "react";
// import { supabase } from "./supabaseClient";

// export default function VoiceAssistant() {
//   const [text, setText] = useState("");
//   const [response, setResponse] = useState("");
//   const [loading, setLoading] = useState(false);

//   const askAI = async () => {
//     setLoading(true);

//     // Supabase Edge Function call (OpenAI ke liye)
//     const { data, error } = await supabase.functions.invoke("voice-assistant", {
//       body: { question: text },
//     });

//     if (error) {
//       console.error(error);
//       setResponse("⚠️ Error: " + error.message);
//     } else {
//       setResponse(data.answer);
//       speakText(data.answer);
//     }

//     setLoading(false);
//   };

//   // Browser Speech API for voice output
//   const speakText = (msg) => {
//     const speech = new SpeechSynthesisUtterance(msg);
//     speech.lang = "en-US"; // Hindi ke liye use "hi-IN"
//     window.speechSynthesis.speak(speech);
//   };

//   return (
//     <div className="p-5 max-w-md mx-auto text-center">
//       <h2 className="text-xl font-bold mb-3">🎤 AI Voice Assistant</h2>

//       <input
//         className="border p-2 w-full mb-3"
//         placeholder="Ask me anything..."
//         value={text}
//         onChange={(e) => setText(e.target.value)}
//       />

//       <button
//         className="bg-blue-500 text-white px-4 py-2 rounded"
//         onClick={askAI}
//         disabled={loading}
//       >
//         {loading ? "Thinking..." : "Ask AI"}
//       </button>

//       {response && (
//         <p className="mt-4 p-3 border rounded bg-gray-50">{response}</p>
//       )}
//     </div>
//   );
// }


















// const AIAssistant = () => {
//   const [response, setResponse] = useState([]);

//   const handleResp = async () => {
//     const { data: inserted, error: insertError } = await supabase
//       .from('users')
//       .insert([{ name: 'Nandini', age: 25 }]);

//     if (insertError) {
//       console.log('Insert Error:', insertError);
//       return;
//     }

//     console.log('Inserted:', inserted);

//     const { data, error } = await supabase.from('users').select('*');

//     if (error) {
//       console.log('Fetch Error:', error);
//     } else {
//       console.log('Response:', data);
//       setResponse(data);
//     }
//   };


//   return (
//     <>
//       <button onClick={handleResp}>Click Here For Response</button>
//       <pre>{JSON.stringify(response, null, 2)}</pre>
//     </>
//   )
// }

// export default AIAssistant;




// import React, { useState, useEffect } from 'react';
// import { createClient } from '@supabase/supabase-js';

// // Supabase setup
// const supabase = createClient(
//   'https://YOUR_PROJECT.supabase.co',  // replace with your Supabase project URL
//   'YOUR_ANON_KEY'                     // replace with your anon key
// );

// const AIAssistant = () => {
//   const [response, setResponse] = useState([]);  // AI responses
//   const [userInput, setUserInput] = useState([]); // User input
//   const [users, setUsers] = useState([]);        // Supabase table data

//   // Fetch users from Supabase on component mount
//   useEffect(() => {
//     const fetchUsers = async () => {
//       const { data, error } = await supabase.from('users').select('*');
//       if (error) {
//         console.log('Fetch Error:', error);
//       } else {
//         console.log('Users:', data);
//         setUsers(data);
//       }
//     };
//     fetchUsers();
//   }, []);

//   // Handle user question and fetch AI response
//   const handleAsk = async () => {
//     if (!userInput) return;

//     try {
//       const res = await fetch('https://YOUR_SUPABASE/functions/v1/chat-assistant', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ prompt: userInput }),
//       });

//       const data = await res.json();
//       console.log('AI Response:', data.response);

//       setResponse([...response, { question: userInput, answer: data.response }]);
//       setUserInput(''); // clear input
//     } catch (err) {
//       console.log('AI Fetch Error:', err);
//     }
//   };

//   return (
//     <div style={{ padding: '20px', fontFamily: 'Arial' }}>
//       <h2>AI Assistant</h2>

//       {/* User input */}
//       <input
//         type="text"
//         value={userInput}
//         onChange={(e) => setUserInput(e.target.value)}
//         placeholder="Type your question..."
//         style={{ width: '300px', padding: '8px' }}
//       />
//       <button onClick={handleAsk} style={{ padding: '8px 12px', marginLeft: '8px' }}>
//         Ask AI
//       </button>

//       {/* Display AI conversation */}
//       <div style={{ marginTop: '20px' }}>
//         {response.map((item, index) => (
//           <div key={index} style={{ marginBottom: '15px' }}>
//             <b>Q:</b> {item.question} <br />
//             <b>A:</b> {item.answer}
//           </div>
//         ))}
//       </div>

//       {/* Optional: display Supabase users */}
//       <div style={{ marginTop: '30px' }}>
//         <h3>Users Table Data:</h3>
//         <pre>{JSON.stringify(users, null, 2)}</pre>
//       </div>
//     </div>
//   );
// };

// export default AIAssistant;
