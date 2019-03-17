import React from 'react';
// import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { withStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import Hidden from '@material-ui/core/Hidden';
import LeftNav from './LeftNav';
import { styles } from './NavStyles';


function Nav(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Hidden only={['md', 'lg', 'xl']}>
            <IconButton className={classes.menuButton} color="inherit" aria-label="Open drawer">
              <MenuIcon />
            </IconButton>
          </Hidden>
          <Typography className={classes.logo} variant="h5" color="inherit" noWrap>
            STYLE.inc
          </Typography>
          <Hidden only={['xs', 'sm']}>
            <ul className={classes.navList}>
              <li className={classes.navLi}>
                <Link>
                  <Typography className={classes.navLinkFont} variant="h6" color="inherit" noWrap>
                    Home
                  </Typography>
                </Link>
              </li>
              <li className={classes.navLi}>
                <Link>
                  <Typography className={classes.navLinkFont} variant="h6" color="inherit" noWrap>
                    Jobs
                  </Typography>
                </Link>
              </li>
              <li className={classes.navLi}> 
                <Link>
                  <Typography className={classes.navLinkFont} variant="h6" color="inherit" noWrap>
                    About
                  </Typography>
                </Link>
              </li>
              <li className={classes.navLi}>
                <Link>
                  <Typography className={classes.navLinkFont} variant="h6" color="inherit" noWrap>
                    Departments
                  </Typography>
                </Link>
              </li>
              <li className={classes.navLi}>
                <Link>
                  <Typography className={classes.navLinkFont} variant="h6" color="inherit" noWrap>
                    Contact
                  </Typography>
                </Link>
              </li>
            </ul>
          </Hidden>
          <div className={classes.grow} />
          <Hidden only={['xs']}>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Search for jobs by keyword"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
              />
            </div>
          </Hidden>
        </Toolbar>
      </AppBar>
      <LeftNav />
    </div>
  );
}

Nav.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Nav);