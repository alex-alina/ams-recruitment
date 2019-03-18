import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Hidden from '@material-ui/core/Hidden';
import { Divider } from '@material-ui/core';
import { styles } from './LeftNavStyles';

function LeftNav(props) {
  const { classes } = props;
  return (
    <Hidden only={['md', 'lg', 'xl']}>
      <aside className={classes.root}>
        <ul className={classes.leftNavList}>
          {['Home', 'Jobs', 'About', 'Departments', 'Contact'].map((text) => (
            <li key={text} className={classes.navLi}>
              <Link>
                <Typography className={classes.leftNavLink} variant="h6" color="inherit" noWrap>{text}</Typography>
                <Divider className={classes.divider} light />
              </Link>
            </li>
          ))}
        </ul>
      </aside>
    </Hidden>
  );
}

LeftNav.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles, { theme: true })(LeftNav);