import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { loadCSS } from 'fg-loadcss/src/loadCSS';
import { withStyles } from '@material-ui/core/styles';
import Icon from '@material-ui/core/Icon';
import { styles } from './SocialMediaBtnsStyles';

class SocialMediaBtns extends React.Component {
  componentDidMount() {
    loadCSS(
      'https://use.fontawesome.com/releases/v5.4.1/css/all.css',
      document.querySelector('#insertion-point-jss'),
    );
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <div className={classes.iconBorder}>
          <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer">
            <Icon className={classNames(classes.icon, 'fab fa-linkedin-in')} color="primary" />
          </a>
        </div>
        <div className={classes.iconBorder}>
          <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer">
            <Icon className={classNames(classes.icon, 'fab fa-facebook-square')} color="primary" />
          </a>
        </div>
        <div className={classes.iconBorder}>
          <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
            <Icon className={classNames(classes.icon, 'fab fa-twitter')} color="primary" />
          </a>
        </div>
        <div className={classes.iconBorder}>
          <a href="https://gmail.com/" target="_blank" rel="noopener noreferrer">
            <Icon className={classNames(classes.icon, 'far fa-envelope')} color="primary" />
          </a>
        </div>
        <div className={classes.iconBorder}>
          <Icon className={classNames(classes.icon, 'fas fa-print')} color="primary" />
        </div>
      </div>
    );
  }
}

SocialMediaBtns.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SocialMediaBtns);
