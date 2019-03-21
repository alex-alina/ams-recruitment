import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import  { theme } from './AppStyles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { MuiThemeProvider } from '@material-ui/core/styles';
import NavContainer from './components/nav/NavContainer';
import HeaderContainer from './components/header/HeaderContainer';
import JobDescriptionContainer from './components/job-description/JobDescriptionContainer';
import FaqSection from './components/faq/FaqSection';
import Footer from './components/footer/Footer';
import FormContainer from './components/form/FormContainer';

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
            <Route exact path='/application-form' component={FormContainer} />
          </main>
          <FaqSection />
          <Footer />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default (App);
