
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import img1 from "../images/img1.jpg";
import img2 from "../images/img2.jpg";
import img3 from "../images/img3.jpg";
import img4 from "../images/img4.jpg";
import img5 from "../images/img5.jpg";


const Love = () => {

      const navigate = useNavigate();


      useEffect(() => {
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
    
    return (
   <div>
        <div className="valentine-zigzag">

            <div className="row">
                <img src={img1} alt="Love 1" />
                <div className="text">
                <h2>Our First Memory 💖</h2>
                <p>You make my world brighter every single day.</p>
                </div>
            </div>

            <div className="row reverse">
                <img src={img2} alt="Love 2" />
                <div className="text">
                <h2>Sweet Moments 💕</h2>
                <p>Every moment with you feels magical.</p>
                </div>
            </div>

            <div className="row">
                <img src={img3} alt="Love 3" />
                <div className="text">
                <h2>Forever Us 💞</h2>
                <p>I promise to stay beside you always.</p>
                </div>
            </div>

            <div className="row reverse">
                <img src={img4} alt="Love 4" />
                <div className="text">
                <h2>My Heart 💘</h2>
                <p>You are my today and all of my tomorrows.</p>
                </div>
            </div>
             <div className="love-button">
            <button
                className="valentine-btn"
                onClick={() => navigate("/letter")}
                >
                Continue 💘
            </button>
        </div>
        </div>

       

  



   </div>
    );
}

export default Love;
