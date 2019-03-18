import React, { Component } from 'react';
import './App.css';
import CssBaseline from '@material-ui/core/CssBaseline';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import NavContainer from './components/nav/NavContainer';
import HeaderContainer from './components/header/HeaderContainer';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#007769',
    },
    secondary: {
      main: '#ccff90',
    },
  },
  typography: {
    fontFamily: [
      'Roboto',
      'sans-serif',
    ],
    useNextVariants: true,
  },
  overrides: {
    MuiDivider: {
      light: {
        backgroundColor: '#ffffff8C',
      }
    },
  }
});

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <div className="App">
          <CssBaseline />
          <NavContainer />
          <HeaderContainer />
          <main>
            
          </main>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default (App);