// import React, { useState } from "react";

// import { supabase } from "./supabaseClient";

// import { supabase } from "./supabaseClient";

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




import { useState } from "react";
import { supabase } from "./supabaseClient";

export default function AIAssistant() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  const askAI = async () => {
    const { data, error } = await supabase.functions.invoke("chat-assistant", {
      body: { query: question },
    });

    if (error) {
      console.error(error);
      setAnswer("Error: " + error.message);
    } else {
      setAnswer(data.response);
    }
  };

  return (
    <div>
      <h2>AI Text Assistant</h2>
      <input
        type="text"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        placeholder="Apna sawal likho..."
      />
      <button onClick={askAI}>Ask</button>
      <p><strong>AI:</strong> {answer}</p>
    </div>
  );
}

