import { useState } from 'react';
import './TheIntelligentSolu.css';
import StartPracticeModal from '../../secondPageJob/StartPracticesModal';

const TheIntelligentFile = () => {
  const [showModal, setShowModal] = useState(false);
 
  return (
    <div className='main-container-theIntelligent'>
      <div className="upper-Div-text"> 
        <div className='upper-inner-first-div'>
          <h1>The Intelligent Solution for Talent Acquisition</h1>
          <p>
            Interview platform that combines the power of artificial intelligence with
            cutting‑edge technology to revolutionize your hiring process.
          </p>
        </div>
        <div className="upper-inner-second-div">
          <button className="cta-btn" onClick={() => setShowModal(true)}>Get Started Free</button>
          <div className="review-text">
            ⭐⭐⭐⭐⭐ <span>Based on 100+ reviews on</span>
          </div>
        </div>
      </div>

      <div className="lower-Div-images">
        <div className="ai-score">
          <img
            src="https://cdn.prod.website-files.com/62775a91cc3db44c787149de/67183eb61f2946ce0cd8415e_AI-Interview-Practice.webp"
            alt="AI Video Score"
          />
        </div>
        <div className="main-interview">
          <img
            src="https://cdn.dribbble.com/userupload/8367597/file/original-80e26632af0c177fd934874eeeb877b9.png?resize=752x&vertical=center"
            alt="Interview mockup"
          />
        </div>
      </div>

      {showModal && <StartPracticeModal onClose={() => setShowModal(false)} />}

    </div>
  );
};

export default TheIntelligentFile;
