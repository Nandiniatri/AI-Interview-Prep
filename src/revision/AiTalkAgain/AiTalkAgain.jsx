// import React from "react";
// import "./AiTalkAgain.css";

import AvatarModal1 from "./AvatarModal/AvatarModal";
import AvatarLipSync from "./AvatarModal/AvatarModal";
import AvatarViewer from "./AvatarModal/AvatarModal";

// function AiTalkAgain() {
//     return (
//         <div className="Ai-talk-again-app">
//             <div className="video-section">
//                 <div className="video-genrate">

//                 </div>
//             </div>

//             <div className="video-call-btn">
//                 <button className="start-call">Start Call</button>
//                 <button className="end-btn">End Answer</button>
//             </div>

//         </div>
//     );
// }

// export default AiTalkAgain;


const AiTalkAgain = () => {
    return (
        <div>
            {/* // <AvatarViewer /> */}
            <AvatarLipSync />
            {/* // <AvatarModal1 /> */}
        </div>
    )
}

export default AiTalkAgain;