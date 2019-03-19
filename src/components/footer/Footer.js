import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import { Link } from 'react-router-dom';
import { loadCSS } from 'fg-loadcss/src/loadCSS';
import { styles } from './FooterStyles';
import FooterSocialMedia from './FooterSocialMedia';

class Footer extends PureComponent {
  componentDidMount() {
    loadCSS(
      'https://use.fontawesome.com/releases/v5.4.1/css/all.css',
      document.querySelector('#insertion-point-jss'),
    );
  }
  renderLink = itemProps => <Link to={this.props.to} {...itemProps} />;

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <div className={classes.footerSection}>
          <Typography className={classes.sectionTitle} variant="h6">STYLE.inc</Typography>
          <Divider className={classes.sectionDivider} />
          <List component="nav">
            {['Home', 'Jobs', 'About', 'Departments'].map((text) => (
              <ListItem button component={Link} to="/">
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
        </div>
        <div className={classes.footerSection}>
          <Typography className={classes.sectionTitle} variant="h6">Information</Typography>
          <Divider className={classes.sectionDivider} />
          <List component="nav">
            {['Application process', 'Privacy policy', 'Contact', 'Open positions'].map((text) => (
              <ListItem button component={Link} to="/">
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
        </div>
        <div className={classes.footerSection}>
          <Typography className={classes.sectionTitle} variant="h6">Follow us</Typography>
          <Divider className={classes.sectionDivider} />
          <FooterSocialMedia />
        </div>
      </div>
    );
  }
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Footer);