import "./ResultPage.css";
import React, { useState } from "react";

export function ResultPage() {
  const [state, setState] = useState(0);
  return (
    <>
      <header>
        <h1>Good Job!</h1>
        <img src="#" alt="happy face" />
      </header>
      <main>
        <div class="output-container">
            <div class="correct-container">
                <h3>correct</h3>
                <div class="correct-box">
                    <h5>8</h5>
                </div>
            </div>
            <div class="incorrect-container">
                <h3>incorrect</h3>
                <div class="incorrect-box">
                    <h5>2</h5>
                </div>
            </div>
        </div>
        <div class="score-container">
            <h3>score</h3>
            <div class="blue-score-box">
                <h1>80%</h1>
            </div>
        </div>
        <button id="done-button">Done</button>
      </main>
    </>
  );
}
