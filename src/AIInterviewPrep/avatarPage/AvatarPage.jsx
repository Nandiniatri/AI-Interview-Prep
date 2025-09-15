import AvatarTalk from "./avatar/AvatarTalk";
import './AvatarPage.css';
import VideoCall from "./videoCall/VideoCall";

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
