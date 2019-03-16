import React, { Component } from 'react';
import './App.css';
import CssBaseline from '@material-ui/core/CssBaseline';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

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
}
);

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <div className="App">
          <CssBaseline />
          <h1>Hello</h1>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default (App);
