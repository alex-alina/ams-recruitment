import React from 'react';
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
import { styles } from './NavStyles';

function Nav(props) {
  const { classes } = props;
  const handleOnClick = props.onClick;

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Hidden only={['md', 'lg', 'xl']}>
            <IconButton onClick={handleOnClick} className={classes.menuButton} color="inherit" aria-label="Open drawer">
              <MenuIcon />
            </IconButton>
          </Hidden>
          <Typography className={classes.logo} variant="h5" color="inherit" noWrap>
            STYLE.inc
          </Typography>
          <Hidden only={['xs', 'sm']}>
            <ul className={classes.navList}>
              {['Home', 'Jobs', 'About', 'Departments', 'Contact'].map((text) => (
                <li key={text} className={classes.navLi}>
                  <Link>
                    <Typography className={classes.navLinkFont} variant="h6" color="inherit" noWrap>{text}</Typography>
                  </Link>
                </li>
              ))}
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
    </div>
  );
}

Nav.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Nav);