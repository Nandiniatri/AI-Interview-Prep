// import { useEffect, useState } from 'react';
// import './Revision.css';

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

const Revision = () => {
    return (
        <div>
            <button>Hello Ji</button>
            <img src="" alt="" />
            <ul>
                <li>Hello</li>
                <li>Hello 1</li>
                <li>Hello 2</li>
            </ul>
            <nav>
                <ul>
                    <li>Hello</li>
                </ul>
            </nav>
        </div>
    )
}

export default Revision;