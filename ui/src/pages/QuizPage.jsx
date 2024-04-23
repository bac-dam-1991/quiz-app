import { Typography } from "@mui/material";
import {Fragment} from "react";

export const QuizPage = () => {
  return 

  <Fragment>

  <img></img>
  
  <main>
    <h1>Question 1 of 10</h1>
    <p>What will be the value of "result" after executing the following code?</p>
    <ul>
      <li>let x = 10;</li>
      <li>let y = 5;</li>
      <li>let result = x &gt; y ? "x is greater" : "y is greater";</li>
    </ul>
  </main>

  <div class="answers">
    <button name="a1">
      <p>10</p>
    </button>

    <button name="a2">
      <p>5</p>
    </button>

    <button name="a3">
      <p>"x is greater"</p>
    </button>

    <button name="a4">
      <p>"y is greater"</p>
    </button>

  </div>
  
  </Fragment>
  ;
};
