import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Hidden from '@material-ui/core/Hidden';
import { styles } from './LeftNavStyles';


function LeftNav(props) {
  const { classes } = props;
  return (
    <Hidden only={['md', 'lg', 'xl']}>
      <aside className={classes.root}>
        <ul className={classes.leftNavList}>
          <li className="left-nav-link">
            <Link>
              <Typography className={classes.leftNavLink} variant="h6" color="inherit" noWrap>
                Home
              </Typography>
            </Link>
          </li>
          <li className="left-nav-link">
            <Link>
              <Typography className={classes.leftNavLink} variant="h6" color="inherit" noWrap>
                Jobs
              </Typography>
            </Link>
          </li>
          <li className="left-nav-link">
            <Link>
              <Typography className={classes.leftNavLink} variant="h6" color="inherit" noWrap>
                About
              </Typography>
            </Link>
          </li>
          <li className="left-nav-link">
            <Link>
              <Typography className={classes.leftNavLink} variant="h6" color="inherit" noWrap>
                Departments
              </Typography>
            </Link>
          </li>
          <li className="left-nav-link">
            <Link>
              <Typography className={classes.leftNavLink} variant="h6" color="inherit" noWrap>
                Contact
              </Typography>
            </Link>
          </li>
        </ul>
      </aside>
    </Hidden>
  );
}

LeftNav.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LeftNav);