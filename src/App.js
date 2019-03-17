import React, { Component } from 'react';
import './App.css';
import CssBaseline from '@material-ui/core/CssBaseline';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Nav from './components/nav/Nav';
import HeaderContainer from './components/header/HeaderContainer';
// import LeftNav from './components/nav/LeftNav';

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
    // fontSize: 12,
  },
});

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <div className="App">
          <CssBaseline />
          <Nav />
          <HeaderContainer />
          {/* <LeftNav /> */}
        </div>
      </MuiThemeProvider>
    );
  }
}

export default (App);
