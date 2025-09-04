import AvatarTalk from "./avatar/AvatarTalk";
import VideoCall from "./videoCall/videoCall";
import './AvatarPage.css'

const AvatarPage = () => {
    return (
        <div className="avatar-page-main-container">
            <AvatarTalk />
            <VideoCall />
        </div>
    )
}

export default AvatarPage;