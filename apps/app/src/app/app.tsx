import styled from '@emotion/styled';
import { Button, Paper, Select, TextField } from '@mui/material';

const StyledApp = styled.div`
  // Your style here
`;

export function App() {
  return (
    <StyledApp>
      <Paper>
        <TextField />
        <Select />
        <Button />
      </Paper>
    </StyledApp>
  );
}

export default App;
