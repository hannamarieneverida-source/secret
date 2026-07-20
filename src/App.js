import { useState } from "react";
import "./App.css";

export default function App() {
  const [step, setStep] = useState(0);

  const emojis = ["🎉", "🎊", "✨", "🎈", "💖"];

  return (
    <div className="container">

      {step === 0 && (
        <>

          <button className="btn" onClick={() => setStep(1)}>
            🎁 Click Me
          </button>
        </>
      )}


      {step === 1 && (
        <>
          <h2 className="intro">
            One more click... 😊
          </h2>

          <button className="btn" onClick={() => setStep(2)}>
            💖 Continue
          </button>
        </>
      )}


      {step === 2 && (
        <>
          <h2 className="intro">
            Are you ready? 🎂
          </h2>

          <button className="btn" onClick={() => setStep(3)}>
            🎉 Open Surprise
          </button>
        </>
      )}


      {step === 3 && (
        <>

          <div className="confetti">
            {[...Array(50)].map((_, i) => (
              <span
                key={i}
                style={{
                  left: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 3}s`,
                  animationDuration: `${3 + Math.random() * 3}s`,
                }}
              >
                {emojis[Math.floor(Math.random() * emojis.length)]}
              </span>
            ))}
          </div>


          <h1 className="birthday">
            🎉 Happy Birthday! 🎂
          </h1>


          <div className="gallery">
            <img src="/image/1.jpg" alt="1"/>
            <img src="/image/2.jpg" alt="2"/>
            <img src="/image/3.jpg" alt="3"/>
            <img src="/image/4.jpg" alt="4"/>
            <img src="/image/5.jpg" alt="5"/>
            <img src="/image/6.jpg" alt="6"/>
          </div>


          

        </>
      )}

    </div>
  );
}