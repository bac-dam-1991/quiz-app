import { useState } from "react";
import { Fragment } from "react";
import "./QuizPage.css";

export const QuizPage = () => {
  const [selected, setSelected] = useState(0);
  const [questionNumber, setQuestionNumber] = useState(0);
  const { question, answer, options } = Questions[questionNumber];

  return (
    <Fragment>
      <img alt=""></img>

      <main>
        <h1>
          Question {questionNumber + 1} of {Questions.length}
        </h1>
        <p className="question">{question}</p>

        <div className="answers">
          {options.map(({ value, label }) => {
            let className = "";
            const isMatching = selected === value;
            const isCorrect = selected === answer;

            if (isMatching) {
              if (isCorrect) {
                className = "correct-answer";
              } else {
                className = "wrong-answer";
              }
            }

            return (
              <button
                key={value}
                name={value}
                className={className}
                onClick={() => setSelected(value)}
              >
                {label}
              </button>
            );
          })}
        </div>

        <button onClick={() => setQuestionNumber(questionNumber + 1)}>
          Next Question
        </button>
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
