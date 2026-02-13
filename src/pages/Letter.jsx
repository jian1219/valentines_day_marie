import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import img6 from "../images/img6.jpg";
import loveMusic from "../Music/Music.mp3"

const Letter = () => {
     const navigate = useNavigate();
  const [showHidden, setShowHidden] = useState(false);
  const audioRef = useRef(null);


  useEffect(() => {
    // Hearts animation
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

    return () => clearInterval(interval);
  }, []);

   useEffect(() => {
    if (showHidden && audioRef.current) {
      audioRef.current.play().catch(() => {
        console.log("Autoplay blocked: user interaction may be required");
      });
    } else if (!showHidden && audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
  }, [showHidden]);


  

  const handleClick = () => {
    setShowHidden(!showHidden); // toggle hidden/show
  };

  return (
    <div className="letter">
      {!showHidden && (
        <div className="show1">
          <img className="img6" src={img6} alt="Love Letter" />

          <p className="animated-text">
            Akong Gugma sa imo love is can't be measured because my love is immortal
          </p>
          <p className="animated-text">
            Naa koy message nimo love this is very emotional that my eyes is watering HAHAHA
          </p>

          <button className="valentine-btn" onClick={handleClick}>
            Open 💘
          </button>
        </div>
      )}

      {showHidden && (
        <div className="hidden animated-text">
            <p className="mt-1">HAPPY VALENTINES DAY MY LOVE💖</p>
            <p>I want to say Thank you sa imong gugma na gepakita sa akoa, i know there are many dissapointments nimo sa akoa 
                but still you still love me, Sorry lovelove naa nay mga butang na wala na nako nahatag nimo pero bawi rako sa tanan. AYaw 
                lang pag ka pura sa akoa love I'm trying my best para sa imo and then sa atoa, I dont know what would hapen sa kalibutan pag ikaw ay mawala sa aking piling.
                    I love you so much I want to spend the rest of my life with you lovelove, I LOVE YOU and Thank you my love sana sa kahuman sa kalibutan naa pa ka sa akoa tapad.... 

            </p>
            <p>This is my GIFT lovelove I HOPE YOU LIKE IT</p>
            
          <button className="valentine-btn" onClick={() => navigate("/video")}>
             GIFT💌
          </button>

           {/* Audio element */}
            <audio ref={audioRef} src={loveMusic} loop />
        </div>
      )}
    </div>
  );
};

export default Letter;
