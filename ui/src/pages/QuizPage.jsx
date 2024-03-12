// Ticket: Create a placeholder component for the quiz page. When the state has the value of "started", the component would be rendered.

import { Typography } from "@mui/material";
import { useState } from "react";

function QuizPage() {
  // appState can be "started" | "finished"
  const [appState, setAppState] = useState();

  if (appState === "started") {
    return <Typography variant="h1">Placeholder Component</Typography>;
  }
}
export default QuizPage;
