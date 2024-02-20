import { Button, Typography, Container, Stack } from "@mui/material";
import { useState } from "react";

function App() {
  const [hasStarted, setHasStarted] = useState(false);

  return (
    <Container maxWidth="sm">
      <Stack spacing={3}>
        <Typography variant="h3">An awesome quiz app</Typography>
        <Button variant="contained" onClick={() => setHasStarted(true)}>
          Start quiz
        </Button>

        <Typography variant="caption">
          Built by Bac, Andrew, Mei and Tin
        </Typography>
      </Stack>
    </Container>
  );
}

export default App;
