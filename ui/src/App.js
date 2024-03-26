import { Button, Typography, Container, Stack } from "@mui/material";
import { useState } from "react";
import { QuizPage } from "./pages/QuizPage";

function App() {
  // appState can be "started" | "finished"
  const [appState, setAppState] = useState();

  return (
    <Container maxWidth="sm">
      <Stack spacing={3}>
        <Typography variant="h3">An awesome quiz app</Typography>
        {appState === "started" ? (
          <QuizPage />
        ) : (
          <Button variant="contained" onClick={() => setAppState("started")}>
            Start quiz
          </Button>
        )}

        <Typography variant="caption">
          Built by Bac, Andrew, Mei and Tin
        </Typography>
      </Stack>
    </Container>
  );
}

export default App;
