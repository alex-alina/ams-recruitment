import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import { loadCSS } from 'fg-loadcss/src/loadCSS';
import classNames from 'classnames';
import Icon from '@material-ui/core/Icon';
import { styles } from './FooterStyles';

class FooterSocialMedia extends PureComponent {
  componentDidMount() {
    loadCSS(
      'https://use.fontawesome.com/releases/v5.4.1/css/all.css',
      document.querySelector('#insertion-point-jss'),
    );
  }

  render() {
    const { classes } = this.props;
    return (
      <div>
        <List component="nav">
          <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
            <ListItem>
              <Avatar>
                <Icon className={classNames(classes.footerIcon, 'fab fa-twitter')} color="primary" />
              </Avatar>
              <ListItemText primary="Twitter" />
            </ListItem>
          </a>
          <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer">
            <ListItem>
              <Avatar>
                <Icon className={classNames(classes.footerIcon, 'fab fa-linkedin-in')} color="primary" />
              </Avatar>
              <ListItemText primary="LinkedIn" />
            </ListItem>
          </a>
          <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer">
            <ListItem>
              <Avatar>
                <Icon className={classNames(classes.footerIcon, 'fab fa-facebook-square')} color="primary" />
              </Avatar>
              <ListItemText primary="Facebook" />
            </ListItem>
          </a>
          <a href="https://gmail.com/" target="_blank" rel="noopener noreferrer">
            <ListItem>
              <Avatar>
                <Icon className={classNames(classes.footerIcon, 'far fa-envelope')} color="primary" />
              </Avatar>
              <ListItemText primary="Newsletter" />
            </ListItem>
          </a>
        </List>
      </div>
    );
  }
};

FooterSocialMedia.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FooterSocialMedia);