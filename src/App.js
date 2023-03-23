import { Container, Typography, ThemeProvider , AppBar , Toolbar, Button} from '@mui/material';
import { createTheme } from '@mui/material/styles'
import  './App.css'

const maxWidth = 200;

const theme = createTheme({
  palette: {
    primary: {
      light: '#ff9760',
      main: '#393f5f',
      dark: '#393f5f',
      contrastText: '#6a7e9a',
    },
    secondary: {
      light: '#e96d5e',
      main: '#ff9760',
      dark: '#6a7e9a',
      contrastText: '#ffe69d',
    },
  },
  typography: {
    fontFamily: "Quicksand",
    fontweightLight: 400,
    fontweightRegular: 400,
    fontweightMedium: 400,
    fontweightBold: 400,
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container fixed>
        <Typography
          color="secondary.light"
          fontWeight={"Medium"}
          sx={{ py: 10, fontSize: "3rem" }}
        >
          This is react
        </Typography>
        <AppBar sx={{ bgcolor: "primary.dark" }} elevation={8}>
          <Toolbar>
            <Typography
              color="secondary.contrastText"
              fontweightLight
              fontSize={"1.3rem"}
            >
              Layout
            </Typography>
            <Button
            variant='contained'
            alignContent='right'
            sx={{bgcolor:"primary.light" ,  display:'flex' , justifyContent:'right' , alignContent:'right'}}
            >
              LogIn
            </Button>
          </Toolbar>
        </AppBar>
      </Container>
    </ThemeProvider>
  );
}

export default App;
