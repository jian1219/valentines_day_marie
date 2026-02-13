import { useEffect } from "react";

const Love = () => {


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
        <div className="love">
            love
        </div>
    );
}

export default Love;
