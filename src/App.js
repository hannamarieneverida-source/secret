import { useState } from "react";
import "./App.css";

export default function App() {
  const [show, setShow] = useState(false);

  const emojis = ["🎉", "🎊", "✨", "🎈", "💖", "🌟"];

  return (
    <div className="container">
      {!show ? (
        <button className="btn" onClick={() => setShow(true)}>
          🎁 Click Me
        </button>
      ) : (
        <>
          {/* Confetti */}
          <div className="confetti">
            {[...Array(60)].map((_, i) => (
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

          <h1 className="birthday">🎉 Happy Birthday! 🎂</h1>

          <div className="gallery">
            <img src="/image/1.jpg" alt="1" />
            <img src="/image/2.jpg" alt="2" />
            <img src="/image/3.jpg" alt="3" />
            <img src="/image/4.jpg" alt="4" />
            <img src="/image/5.jpg" alt="5" />
            <img src="/image/6.jpg" alt="6" />
          </div>

          <p className="message">
            Happy Birthday! 🎂
            <br />
            Hope today brings you lots of smiles,
            <br />
            laughter, and wonderful memories.
            <br />
            Enjoy your special day! 🎉
          </p>
        </>
      )}
    </div>
  );
}