import { useState } from "react";
import { Fragment } from "react";
import "./QuizPage.css";

const Answers = [
  {
    label: "10",
    value: "a1",
  },
  {
    label: "5",
    value: "a2",
  },
  {
    label: "x is greater",
    value: "a3",
  },
  {
    label: "y is greater",
    value: "a4",
  },
];

export const QuizPage = () => {
  const [selected, setSelected] = useState(0);

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
          {Answers.map((answer) => {
            return (
              <button
                key={answer.value}
                name={answer.value}
                className={selected === answer.value ? "button-selected" : ""}
                onClick={() => setSelected(answer.value)}
              >
                {answer.label}
              </button>
            );
          })}
        </div>
      </main>
    </Fragment>
  );
};

const Questions = [
  {
    question: "What is React primarily used for?",
    options: [
      {
        value: "1",
        label: "Building mobile apps",
      },
      {
        value: "2",
        label: "Server-side processing",
      },
      {
        value: "3",
        label: "Building user interfaces",
      },
      {
        value: "4",
        label: "Data analysis",
      },
    ],
    answer: "3",
  },
  {
    question: "Which feature of React allows it to efficiently update the UI?",
    options: [
      {
        value: "1",
        label: "Real DOM",
      },
      {
        value: "2",
        label: "Virtual DOM",
      },
      {
        value: "3",
        label: "Shadow DOM",
      },
      {
        value: "4",
        label: "Document Fragment",
      },
    ],
    answer: "2",
  },
];
