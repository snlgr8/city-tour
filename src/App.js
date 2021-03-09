import './App.css';
import Header from './header/header.component';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  typography: {
    fontFamily: ['Akaya Telivigala', 'cursive'].join(','),
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className='App'>
        <Header title='City Tours'></Header>
      </div>
    </ThemeProvider>
  );
}

export default App;
