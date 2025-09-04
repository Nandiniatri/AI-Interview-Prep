// import AvatarTalk from "./avatar/AvatarTalk";
// import VideoCall from "./videoCall/videoCall";
// import './AvatarPage.css'

// const AvatarPage = () => {
//     return (
//         <div className="avatar-page-main-container">
//             <div className="avatar-talk-container">
//                 <div className="avatar-wrapper">
//                     <AvatarTalk />
//                 </div>
//             </div>
//             <div className="video-call-container">
//                 <VideoCall />
//             </div>
//         </div>

//     )
// }

// export default AvatarPage;


import AvatarTalk from "./avatar/AvatarTalk";
import VideoCall from "./videoCall/videoCall";
import './AvatarPage.css';

const AvatarPage = () => {
    return (
        <div className="avatar-page-main-container">
            <div className="avatar-section">
                <AvatarTalk />
            </div>
            <div className="video-call-section">
                <VideoCall />
            </div>
        </div>
    );
};

export default AvatarPage;
