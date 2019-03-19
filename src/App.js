import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import CssBaseline from '@material-ui/core/CssBaseline';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import NavContainer from './components/nav/NavContainer';
import HeaderContainer from './components/header/HeaderContainer';
import JobDescriptionContainer from './components/job-description/JobDescriptionContainer';
import FaqSection from './components/faq/FaqSection';
import Footer from './components/footer/Footer';

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
    MuiListItemText: {
      primary: {
        color: '#fff',
      }
    },
    MuiListItem: {
      button: {
        paddingTop: '10px',
        paddingBottom: '10px',
      },
      root: {
        paddingTop: '6px',
        paddingBottom: '6px',
      },
    },
    MuiAvatar: {
      root:{
        width: '34px',
        height: '34px',
        backgroundColor: '#fff',
      },
      img: {
        
      },
      colorDefault: {
        backgroundColor:'#fff',
        '&:hover': {
          backgroundColor: '#99cc60',
        },
      }
    },
    MuiIcon: {
      root: {
        fontSize: '20px',
        width: '20px',
      }
    }
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
            <Route exact path='/' component={JobDescriptionContainer} />
          </main>
          <FaqSection />
          <Footer />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default (App);
