export function ResultPage() {
  return (
    <>
      <h1>Good Job!</h1>
      <header>
        <img src="" alt="" />
      </header>
      <main>
        <div className="correct"></div>
        <h3>correct</h3>
        <div className="correct-box"></div>
        <div className="incorrect">
          <h3>incorrect</h3>
          <div className="incorrect-box"></div>
        </div>
        <div className="score">
          <h3>score</h3>
          <h1>80%</h1>
          {/* this would return 80%? use static placeholder for now? */}
        </div>

        <button id="done-button">Done</button>
      </main>
    </>
  );
}
