import { useEffect, useRef } from "react";
import loveVideo from "../video/video1.mp4";


const Video = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    // Raining hearts
    const interval = setInterval(() => {
      const heart = document.createElement("div");
      heart.className = "heart";
      heart.innerHTML = "❤";

      heart.style.left = Math.random() * 100 + "vw";
      heart.style.fontSize = Math.random() * 20 + 15 + "px";
      heart.style.animationDuration = Math.random() * 3 + 3 + "s";

      document.body.appendChild(heart);

      setTimeout(() => {
        heart.remove();
      }, 6000);
    }, 300);

    // Autoplay video programmatically
    if (videoRef.current) {
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch((err) => console.log("Autoplay blocked", err));
      }
    }

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="video">
      <h2 className="video-title">🎁 MY GIFT FOR YOU 💖</h2>
      <video
        ref={videoRef}
        src={loveVideo}
        controls
        autoPlay
        loop
        muted
        playsInline
        className="love-video"
      />
    </div>
  );
};

export default Video;
