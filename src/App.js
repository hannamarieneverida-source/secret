import { useState } from "react";
import "./App.css";

export default function App() {
  const [show, setShow] = useState(false);

  return (
    <div className="container">
      {!show ? (
        <button className="btn" onClick={() => setShow(true)}>
          Click Me 💖
        </button>
      ) : (
        <h1 className="sorry">
          Sorry hihihihi (´｡•ω•｡`)👉👈
        </h1>
      )}
    </div>
  );
}