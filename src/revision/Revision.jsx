// import { useEffect, useState } from 'react';
import './Revision.css';

// const Revision = () => {
//     const [data , setData] = useState([]);

//     const fetchData = async() => {
//         try {
//             const response = await fetch('https://dummyjson.com/products');
//             const result = await response.json();
//             console.log(result);
//             setData(result);
//         } catch (error) {
//             console.log('Network error');
//         }
//     }

//     useEffect(() => {
//         fetchData();
//     },[])

//     return (
//         <div className='revision-main-div'>
//             <p>Hello</p>
//             <button>Hello Baccho</button>
//             <p>jab two or more transation wait krte hai to indefinify for each other to realse a lock so this is deadlock</p>
//             <ul>
//                 <li>Prevention</li>
//                 <li>Avoidance</li>
//                 <li>Detection</li>
//                 <li>Restore</li>
//             </ul>

//             <h1>Check Point</h1>
//             <p>it is a machism of DB . Which they save the current state Date in DB.
//                 In check point is a restore point that ensure , where the system where crash so they automatically return to the last safe current. It is known as check point.
//             </p>
//             <ul>
//                 <li>Manully</li>
//                 <li>Auto-mated</li>
//                 <li>Time-based</li>
//                 <li>Transaction-based</li>
//             </ul>

//             <button>Hello</button>

//             <button>Hello Baccho</button>
//             <button>hello</button>
//             <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda, tenetur aperiam! Id mollitia voluptatibus necessitatibus, sed aspernatur dicta dignissimos maxime assumenda iste similique optio impedit culpa enim architecto velit laborum voluptas consequuntur nisi ipsa. Nemo dolore delectus fuga ipsum necessitatibus, illo, earum corporis, veritatis nam ex quisquam quas! Laborum sequi quia, libero nisi illum laudantium ratione, magni deserunt asperiores cum quaerat iste error. Ipsa dolores harum inventore, fuga corrupti placeat culpa, quis amet dolore ad quia quas, beatae officia assumenda delectus sequi aperiam sunt cupiditate omnis facilis reiciendis temporibus dolor vel error? Mollitia fugit aliquam veritatis? Aliquid cumque nostrum facere.</p>
//             <h1>Hello Baccho</h1>
//             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro deserunt est, debitis inventore accusamus molestias explicabo maxime similique veniam nostrum, placeat exercitationem itaque aliquid vitae? Suscipit voluptate vitae ea doloremque.</p>
//             <i>kjndkjnknsakjnk</i>
//             <button>Hello</button>
//             <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint doloribus suscipit vitae tempora quis eveniet unde dicta nihil consequatur eius. Atque dolor aperiam laboriosam in quaerat inventore nulla ipsum deserunt.</p>
//         </div>
//     ) 
// }

// export default Revision;





// Login.tsx


// import React, { useEffect, useRef } from "react";
// import { Helmet } from "react-helmet";
// import { Link, useNavigate } from "react-router-dom";
// import LoginForm from "@/components/auth/LoginForm";
// import { useAuth } from "@/context/auth";
// import { Skeleton } from "@/components/ui/skeleton";

// const Login = () => {
//     const { isAuthenticated, isLoading } = useAuth();
//     const navigate = useNavigate();
//     const renderTimeRef = useRef(performance.now());

//     // Log rendering performance
//     useEffect(() => {
//         const renderTime = performance.now() - renderTimeRef.current;
//         console.log(`Login page render time: ${Math.round(renderTime)}ms - Auth state:, { isAuthenticated, isLoading }`);

//         // Mark the LCP element for performance monitoring
//         if (document.querySelector('.logo-text')) {
//             (window as any).lcpElementMarked = true;
//             console.log('LCP element marked: Logo text');
//         }
//     }, [isAuthenticated, isLoading]);

//     // Redirect authenticated users to dashboard
//     useEffect(() => {
//         if (isAuthenticated && !isLoading) {
//             console.log("Login page - Already authenticated, redirecting to dashboard");
//             navigate("/dashboard", { replace: true });
//         }
//     }, [isAuthenticated, isLoading, navigate]);

//     // Show loading indicator if the auth state is still loading
//     if (isLoading) {
//         return (
//             <div className="min-h-screen flex flex-col items-center justify-center" >
//                 <div className="w-full max-w-md" >
//                     <Skeleton className="h-8 w-32 mb-6" />
//                     <Skeleton className="h-6 w-48 mb-2" />
//                     <Skeleton className="h-4 w-64 mb-8" />
//                     <Skeleton className="h-[300px] w-full rounded-xl mb-8" />
//                 </div>
//             </div>
//         );
//     }

//     // If user is authenticated, the useEffect will handle redirection
//     // This prevents the component from rendering anything while waiting for navigation
//     // if (isAuthenticated) {
//     //   return null;
//     // }

//     return (
//         <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-background to-background/80 px-4" >
//             <Helmet>
//                 <title>Log In - AI Agent Writer </title>
//                 < meta name="description" content="Log in to your AI Agent Writer account to create SEO-optimized blogs using AI technology." />
//                 <link rel="preload" as="image" href="/og-image.png" />
//             </Helmet>

//             < div className="w-full max-w-md mb-8" >
//                 <Link to="/" className="inline-block mb-6" >
//                     <h1 className="logo-text text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-400" style={{ width: 'auto', height: 'auto' }}>
//                         AI Agent Writer
//                     </h1>
//                 </Link>
//                 < h2 className="text-2xl font-bold mb-2" > Welcome back </h2>
//                 < p className="text-foreground/70 mb-8" > Log in to continue creating SEO - optimized blogs.</p>

//                 < LoginForm />

//                 <p className="text-center mt-8 text-foreground/70" >
//                     Don't have an account?{" "}
//                     < Link to="/signup" className="text-primary font-medium hover:underline" >
//                         Start your free trial
//                     </Link>
//                 </p>
//             </div>
//         </div>
//     );
// };

// export default Login;






















// import { useEffect, useState } from "react";
// import * as pdfjsLib from "pdfjs-dist/build/pdf";
// import pdfjsWorker from "pdfjs-dist/build/pdf.worker?url";

// pdfjsLib.GlobalWorkerOptions.workerSrc = pdfjsWorker;

// function ReadResume() {
//     const [text, setText] = useState("");
//     const [skills, setSkills] = useState("");
//     const [dataSkills, setDataSkills] = useState([]);

//     const fetchData = async () => {
//         const response = await fetch('/public/data/skillsData/skillsData.json');
//         const result = await response.json();
//         // console.log(result);
//         setDataSkills(result);
//     }

//     useEffect(() => {
//         fetchData();
//     }, [])

//     const handleFileChange = async (e) => {
//         const file = e.target.files[0];
//         if (!file) return;

//         const reader = new FileReader();
//         reader.onload = async () => {
//             const typedarray = new Uint8Array(reader.result);
//             const pdf = await pdfjsLib.getDocument({ data: typedarray }).promise;


//             let fullText = "";
//             for (let i = 1; i <= pdf.numPages; i++) {
//                 const page = await pdf.getPage(i);
//                 const textContent = await page.getTextContent();
//                 fullText += textContent.items.map((s) => s.str).join(" ") + "\n";
//             }

//             setText(fullText);

//             // 🛠 Skills extract karo
//             const skillRegex = /(skills|technical skills|key skills)[:\-]?\s*(.+)/i;
//             const lines = fullText.split("\n");
//             let foundSkills = "";

//             // for (let line of lines) {
//             //     const match = line.match(skillRegex);
//             //     if (match) {
//             //         foundSkills = match[2];
//             //         break;
//             //     }
//             // }

//             lines.forEach(line => {
//                 const match = line.match(skillRegex);
//                 if (match && !foundSkills) {
//                     foundSkills = match[2];
//                 }
//             });

//             setSkills(foundSkills || "No skills found");
//         };
//         reader.readAsArrayBuffer(file);
//     };


//     // console.log(dataSkills?.skills?.[0]?.category);
//     // const 

//     const skillsItemData = dataSkills?.skills?.map((s) => {
//         console.log(s.skillsItems);
//         return (
//             <div>
//                  <p><b>{s.category}</b></p>
//                 <ul>
//                     <li>
//                         {s.skillsItems?.map((item) => {
//                             return(
//                                 <p>{item}</p>
//                             )
//                         })}
//                     </li>
//                 </ul>
//             </div>
//         )
//     })


//     return (
//         <div style={{ padding: "20px" }}>
//             <h2>📄 Upload Resume</h2>
//             <input type="file" accept="application/pdf" onChange={handleFileChange} />

//             <h3>Extracted Text:</h3>
//             <pre>{text}</pre>

//             <h3>🎯 Extracted Skills:</h3>
//             <p>{skills}</p>

//             <button>Click here for fetch the Data</button>

//             <p>{skillsItemData}</p>
//         </div>
//     );
// }

// export default ReadResume;
























// import { useEffect, useState } from "react";
// import * as pdfjsLib from "pdfjs-dist/build/pdf";
// import pdfjsWorker from "pdfjs-dist/build/pdf.worker?url";

// pdfjsLib.GlobalWorkerOptions.workerSrc = pdfjsWorker;

// function ReadResume() {
//     const [text, setText] = useState("");
//     const [skills, setSkills] = useState("");
//     const [dataSkills, setDataSkills] = useState([]);

//     const fetchData = async () => {
//         const response = await fetch('/public/data/skillsData/skillsData.json');
//         const result = await response.json();
//         setDataSkills(result);
//     };

//     useEffect(() => {
//         fetchData();
//     }, []);

//     const handleFileChange = async (e) => {
//         const file = e.target.files[0];
//         if (!file) return;

//         const reader = new FileReader();
//         reader.onload = async () => {
//             const typedarray = new Uint8Array(reader.result);
//             const pdf = await pdfjsLib.getDocument({ data: typedarray }).promise;

//             let fullText = "";
//             for (let i = 1; i <= pdf.numPages; i++) {
//                 const page = await pdf.getPage(i);
//                 const textContent = await page.getTextContent();
//                 fullText += textContent.items.map((s) => s.str).join(" ") + "\n";
//             }

//             setText(fullText);

//             // 🛠 Skills extract karo
//             const skillRegex = /(skills|technical skills|key skills)[:\-]?\s*(.+)/i;
//             const lines = fullText.split("\n");
//             let foundSkills = "";

//             lines.forEach(line => {
//                 const match = line.match(skillRegex);
//                 if (match && !foundSkills) {
//                     foundSkills = match[2];
//                 }
//             });

//             setSkills(foundSkills || "No skills found");
//         };
//         reader.readAsArrayBuffer(file);
//     };

//     // ✅ Resume skills ko array me convert karo
//     const resumeSkills = skills
//         ?.split(/,|\s+/)
//         .map(s => s.trim().toLowerCase())
//         .filter(Boolean);

//     // ✅ Data JSON ke saath match karo
//     const matchedSkills = dataSkills?.skills?.map((s) => {
//         const matchedItems = s.skillsItems?.filter(item =>
//             resumeSkills.includes(item.toLowerCase())
//         );

//         return matchedItems?.length > 0
//             ? { category: s.category, skills: matchedItems }
//             : null;
//     }).filter(Boolean);

//     // ✅ UI me render
//     const skillsItemData = matchedSkills?.map((s, idx) => (
//         <div key={idx} style={{ marginBottom: "10px" }}>
//             <p><b>{s.category}</b></p>
//             <ul>
//                 {s.skills.map((item, i) => (
//                     <li key={i}>{item}</li>
//                 ))}
//             </ul>
//         </div>
//     ));

//     return (
//         <div style={{ padding: "20px" }}>
//             <h2>📄 Upload Resume</h2>
//             <input type="file" accept="application/pdf" onChange={handleFileChange} />

//             <h3>Extracted Text:</h3>
//             <pre>{text}</pre>

//             <h3>🎯 Extracted Skills:</h3>
//             <p>{skills}</p>

//             <h3>✅ Matched Skills:</h3>
//             {skillsItemData?.length > 0 ? skillsItemData : <p>No matching skills found</p>}
//         </div>
//     );
// }

// export default ReadResume;























import { useEffect, useState } from "react";
import * as pdfjsLib from "pdfjs-dist/build/pdf";
import pdfjsWorker from "pdfjs-dist/build/pdf.worker?url";

pdfjsLib.GlobalWorkerOptions.workerSrc = pdfjsWorker;

function ReadResume() {
    const [text, setText] = useState("");
    const [dataSkills, setDataSkills] = useState([]);

    const fetchData = async () => {
        const response = await fetch('/public/data/skillsData/skillsData.json');
        const result = await response.json();
        setDataSkills(result);
    };

    useEffect(() => {
        fetchData();
    }, []);

    const handleFileChange = async (e) => {
        const file = e.target.files[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onload = async () => {
            const typedarray = new Uint8Array(reader.result);
            const pdf = await pdfjsLib.getDocument({ data: typedarray }).promise;

            let fullText = "";
            for (let i = 1; i <= pdf.numPages; i++) {
                const page = await pdf.getPage(i);
                const textContent = await page.getTextContent();
                fullText += textContent.items.map((s) => s.str).join(" ") + " ";
            }

            setText(fullText); // pura text store karo
        };
        reader.readAsArrayBuffer(file);
    };

    // ✅ Helper function → normalize skills
    const normalize = (str) =>
        str.replace(/[^a-z0-9]/gi, "").toLowerCase();

    // ✅ Match skills across full text
    const matchedSkills = dataSkills?.skills?.map((s) => {
        const matchedItems = s.skillsItems?.filter(item => {
            const regex = new RegExp("\\b" + item.replace(/[^a-z0-9]/gi, ".?") + "\\b", "i");
            return regex.test(text);
        });

        return matchedItems?.length > 0
            ? { category: s.category, skills: matchedItems }
            : null;
    }).filter(Boolean);

    // ✅ UI me render
    const skillsItemData = matchedSkills?.map((s, idx) => (
        <div key={idx} style={{ marginBottom: "10px" }}>
            <p><b>{s.category}</b></p>
            <ul>
                {s.skills.map((item, i) => (
                    <li key={i}>{item}</li>
                ))}
            </ul>
        </div>
    ));

    return (
        <div style={{ padding: "20px" }}>
            <h2>📄 Upload Resume</h2>
            <input type="file" accept="application/pdf" onChange={handleFileChange} />

            <h3>Extracted Text:</h3>
            <p className="pre-class">{text}</p>

            <h3>✅ Matched Skills:</h3>
            {skillsItemData?.length > 0 ? skillsItemData : <p>No matching skills found</p>}

            
        </div>
    );
}

export default ReadResume;

























// import { useGLTF } from "@react-three/drei";
// import { Canvas, useFrame } from "@react-three/fiber";
// import { OrbitControls } from "@react-three/drei";
// import "./AvatarModal.css";
// import { useEffect, useRef } from "react";

// const AvatarModel = ({ url }) => {
//     const { scene } = useGLTF(url);
//     const meshRef = useRef();

//     console.log(meshRef);
//     console.log(scene);

//     useFrame(({ clock }) => {
//         if (meshRef.current) {
//             meshRef.current.traverse((child) => {
//                 if (child.morphTargetInfluences) {
//                     const time = clock.getElapsedTime();
//                     const mouthValue = (Math.sin(time * 10) + 1) / 2;
//                     child.morphTargetInfluences[0] = mouthValue;
//                 }
//             });
//         }
//     });

//     console.log(meshRef.current);

//     useEffect(() => {
//         if (meshRef.current) {
//             console.log("Avatar Loaded:", meshRef.current);
//             meshRef.current.traverse((child) => {
//                 if (child.morphTargetDictionary) {
//                     console.log("Morph Targets:", child.morphTargetDictionary);
//                 }
//             });
//         }
//     }, [scene]);

//     return (
//         // <primitive object={scene} scale={3} position={[0, -4, 0]} />
//         <primitive ref={meshRef} object={scene} scale={3.4} position={[0, -4, 0]} />
//     )
// }


// const AvatarViewer = () => {

//     const handleSpeak = () => {
//         const text = "Hello, Nandini Atri. How are you?";
//         const utterance = new SpeechSynthesisUtterance(text);
//         console.log(utterance);

//         const voices = window.speechSynthesis.getVoices();
//         console.log(voices.length);

//         if (voices.length > 0) {
//             console.log(utterance.voice = voices[0]);
//             utterance.voice = voices[0]
//         };

//         window.speechSynthesis.speak(utterance);
//     };

//     return (
//         <div>
//             <Canvas camera={{ position: [0, 0, 5], fov: 50 }} className="canvas-avatar">
//                 <ambientLight intensity={1} />
//                 <directionalLight position={[5, 5, 5]} />
//                 <AvatarModel url='/data/Avatar1/68b573a33033dedc62d80935.glb' />
//                 <OrbitControls />
//             </Canvas>
//             <button
//                 onClick={handleSpeak}
//                 style={{
//                     position: "absolute",
//                     top: "20px",
//                     left: "20px",
//                     padding: "10px 20px",
//                     fontSize: "16px",
//                     borderRadius: "8px",
//                     cursor: "pointer",
//                     background: "#333",
//                     color: "#fff"
//                 }}
//             >
//                 Speak Text
//             </button>
//         </div>
//     )
// }

// export default AvatarViewer;















// import { useGLTF } from "@react-three/drei";
// import { Canvas } from "@react-three/fiber";
// import { OrbitControls } from "@react-three/drei";
// import "./AvatarModal.css";
// import { useEffect, useRef } from "react";

// const AvatarModel = ({ url, meshRef }) => {
//     const { scene } = useGLTF(url);

//     // useEffect(() => {
//     //     if (meshRef.current) {
//     //         console.log("Avatar Loaded:", meshRef.current);
//     //         meshRef.current.traverse((child) => {
//     //             if (child.morphTargetDictionary) {
//     //                 console.log("Morph Targets:", child.morphTargetDictionary);
//     //             }
//     //         });
//     //     }
//     // }, [scene, meshRef]);

//     return (
//         <primitive
//             ref={meshRef}
//             object={scene}
//             scale={4}
//             position={[0, -5.6, 0]}
//         />
//     );
// };

// const AvatarViewer = () => {
//     const meshRef = useRef();

//     const handleSpeak = () => {
//         const text = "Hello, Nandini Atri. How are you?";
//         const utterance = new SpeechSynthesisUtterance(text);
//         window.speechSynthesis.speak(utterance);

//         const duration = text.split(" ").length * 0.4 * 1000;
//         const start = Date.now();

//         const interval = setInterval(() => {
//             const elapsed = Date.now() - start;
//             if (elapsed > duration) {
//                 clearInterval(interval);
//                 if (meshRef.current) {
//                     meshRef.current.traverse((child) => {
//                         if (child.morphTargetInfluences) {
//                             child.morphTargetInfluences[0] = 0; // mouth close
//                         }
//                     });
//                 }
//                 return;
//             }

//             //isme closed and open lips animation isse ho raha hai.
//             if (meshRef.current) {
//                 meshRef.current.traverse((child) => {
//                     if (child.morphTargetInfluences) {
//                         child.morphTargetInfluences[0] = Math.random();
//                     }
//                 });
//             }
//         }, 100);
//     };

//     return (
//         <div>
//             <Canvas camera={{ position: [0, 0, 5], fov: 50 }} className="canvas-avatar">
//                 <ambientLight intensity={1} />
//                 <directionalLight position={[5, 5, 5]} />
//                 <AvatarModel url="/data/Avatar1/68b573a33033dedc62d80935.glb" meshRef={meshRef} />
//                 <OrbitControls />
//             </Canvas>

//             <button
//                 onClick={handleSpeak}
//                 style={{
//                     position: "absolute",
//                     top: "20px",
//                     left: "20px",
//                     padding: "10px 20px",
//                     fontSize: "16px",
//                     borderRadius: "8px",
//                     cursor: "pointer",
//                     background: "#333",
//                     color: "#fff",
//                 }}
//             >
//                 Speak Text
//             </button>
//         </div>
//     );
// };

// export default AvatarViewer;











// import { useGLTF } from "@react-three/drei";
// import { Canvas } from "@react-three/fiber";
// import { OrbitControls } from "@react-three/drei";
// import { useRef, useState } from "react";
// import "./AvatarModal.css";

// const AvatarModel = ({ url, meshRef }) => {
//     const { scene } = useGLTF(url);

//     return (
//         <primitive
//             ref={meshRef}
//             object={scene}
//             scale={4}
//             position={[0, -5.6, 0]}
//         />
//     );
// };

// const AvatarViewer = () => {
//     const meshRef = useRef();
//     const [currentQuestion, setCurrentQuestion] = useState(0);
//     const [answer , setAnswer] = useState([]);
//     const [listening , setListening] = useState(false);
//     const debug = true;

//     const questions = [
//         { id: 1, que: "Hello Nandini, How are you?" },
//         { id: 2, que: "That's good to know." },
//         { id: 3, que: "So, let's start the interview." },
//         { id: 4, que: "Ok, let's continue." },
//     ];

//     const handleSpeak = () => {
//         if (currentQuestion >= questions.length) {
//             console.log("All questions completed!");
//             return;
//         }

//         const text = questions[currentQuestion].que;
//         const utterance = new SpeechSynthesisUtterance(text);
//         window.speechSynthesis.speak(utterance);

//         // debug morph targets
//         if (debug && meshRef.current) {
//             meshRef.current.traverse((child) => {
//                 if (child.morphTargetDictionary) {
//                     console.log("Morph Targets:", child.morphTargetDictionary);
//                 }
//             });
//         }

//         // lipsync approx duration
//         const duration = text.split(" ").length * 0.5 * 1000;
//         const start = Date.now();

//         const interval = setInterval(() => {
//             const elapsed = Date.now() - start;
//             console.log(elapsed);


//             if (elapsed > duration) {
//                 clearInterval(interval);
//                 if (meshRef.current) {
//                     meshRef.current.traverse((child) => {
//                         if (child.morphTargetInfluences) {
//                             child.morphTargetInfluences[0] = 0; 
//                         }
//                     });
//                 }
//                 return;
//             }

//             // Random lips movement
//             if (meshRef.current) {
//                 meshRef.current.traverse((child) => {
//                     if (child.morphTargetInfluences) {
//                         child.morphTargetInfluences[0] = Math.random();
//                     }
//                 });
//             }
//         }, 100);

//         // ✅ jab bolna khatam ho jaye to agla question ready ho
//         utterance.onend = () => {
//             setCurrentQuestion((prev) => prev + 1);
//         };
//     };

//     return (
//         <div>
//             <Canvas camera={{ position: [0, 0, 5], fov: 50 }} className="canvas-avatar">
//                 <ambientLight intensity={1} />
//                 <directionalLight position={[5, 5, 5]} />
//                 <AvatarModel url="/data/Avatar1/68b573a33033dedc62d80935.glb" meshRef={meshRef} />
//                 <OrbitControls />
//             </Canvas>

//             <button
//                 onClick={handleSpeak}
//                 style={{
//                     position: "absolute",
//                     top: "20px",
//                     left: "20px",
//                     padding: "10px 20px",
//                     fontSize: "16px",
//                     borderRadius: "8px",
//                     cursor: "pointer",
//                     background: "#333",
//                     color: "#fff",
//                 }}
//             >
//                 Speak Next
//             </button>
//         </div>
//     );
// };

// export default AvatarViewer;


