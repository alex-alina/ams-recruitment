import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { loadCSS } from 'fg-loadcss/src/loadCSS';
import Icon from '@material-ui/core/Icon';
import classNames from 'classnames';
import { styles } from './ThankYouMessageStyles';

class ThankYouMessage extends PureComponent {
  componentDidMount() {
    loadCSS(
      'https://use.fontawesome.com/releases/v5.1.0/css/all.css',
      document.querySelector('#insertion-point-jss'),
    );
  }

  render() {
    const { classes } = this.props;
    return (
      <div>
        <div className={classes.root} >
          <Typography variant="h6" className={classes.thankYouMsg}  >
            Your application has been sent.<br></br> Thank you for your interest!
          </Typography>
          <Icon className={classNames(classes.icon, 'fas fa-check')} color="primary" />
          <Typography variant="body1" className={classes.companySignature} >
            Style.inc Team
          </Typography>
        </div>
      </div>
    );
  }
}

ThankYouMessage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ThankYouMessage);