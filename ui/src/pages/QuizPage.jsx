import { useState } from "react";
import { Fragment } from "react";
import "./QuizPage.css";

export const QuizPage = () => {

  const [selected, setSelected] = useState(0);
  
  const selectAnswer = (answer) => {
    setSelected(answer);
    console.log(answer);
  }

  return (
    <Fragment>
      <img alt=""></img>

      <main>
        <h1>Question 1 of 10</h1>
        <p className="question">
          What will be the value of "result" after executing the following code?
        </p>
        <ul>
          <li>let x = 10;</li>
          <li>let y = 5;</li>
          <li>let result = x &gt; y ? "x is greater" : "y is greater";</li>
        </ul>

        <div className="answers">
          <button name="a1" className={selected === "a1" ? "button-selected" : ""} onClick={() => selectAnswer("a1")}>
            <p>10</p>
          </button>

          <button name="a2" className={selected === "a2" ? "button-selected" : ""} onClick={() => selectAnswer("a2")}>
            <p>5</p>
          </button>

          <button name="a3" className={selected === "a3" ? "button-selected" : ""} onClick={() => selectAnswer("a3")}>
            <p>"x is greater"</p>
          </button>

          <button name="a4" className={selected === "a4" ? "button-selected" : ""} onClick={() => selectAnswer("a4")}>
            <p>"y is greater"</p>
          </button>
        </div>
      </main>
    </Fragment>
  );
};
