import { useEffect } from "react";
import { useNavigate } from "react-router-dom";


const Home = () => {

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
    <div className="valentine-container">
        <h1 className="valentine-text">Happy Valentine's Day</h1>
         <h1 className="valentine-text">BABY Marie💖</h1>

        <button
          className="valentine-btn"
          onClick={() => navigate("/love")}
        >
          Open My Heart 💘
        </button>
    </div>
  );
};

export default Home;
