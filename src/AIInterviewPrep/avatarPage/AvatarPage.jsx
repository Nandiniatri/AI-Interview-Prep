import Header from "../homePage/header/Header";
import AvatarTalk from "./avatar/AvatarTalk";
import './AvatarPage.css';
import VideoCall from "./videoCall/VideoCalls";

const AvatarPage = () => {
    return ( 
        <>
        <Header />
            <div className="avatar-page-main-container">
                <div className="avatar-section">
                    <AvatarTalk />
                </div>
                <div className="video-call-section">
                    <VideoCall />
                </div>
            </div>
        </>
    );
};

export default AvatarPage; 
 