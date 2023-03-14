import { Button, Container,Paper,Typography, containerClasses } from '@mui/material'

function App() {
  return (
    <Container 
    sx={{ height:"100vh"  , textAlign:'center' , py:20 , color:'purple'}} >
      <Typography 
      variant='h2'
      fontFamily={'monospace'}>
        Portfolio V.1
      </Typography>
      <Button variant='normal'
      sx={{my:10 , px:10 , fontSize:20 , color:'navy' }}>
        GitHub
      </Button>
      <Paper  elevation={8} 
      sx = {{py:5 , my:3 , fontFamily:'monospace' , fontSize:'20'}}
      >this is portfolio v.1</Paper>
    </Container>

  );
}

export default App;
