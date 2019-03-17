import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  root: {
    position: 'absolute',
    top: '25%',
    bottom: '30%',
    left: '25%',
    right: '25%',
    margin: 'auto',
    width: '50%',
    backgroundColor: '#00000073',
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  },
  title: {
    color: '#fff',
    fontSize: 34,
    alignCenter: 'center',
  },
  subtitle: {
    alignCenter: 'center',
    color: '#fff',
    fontSize: 22,
  }
});

function HeaderJobTitle(props) {
  const { classes } = props;

  return (
    <div>
      <Paper className={classes.root} elevation={24}>
        <Typography className={classes.title} variant="h6" component="h3">
          Purchasing Assistant
        </Typography>
        <Typography className={classes.subtitle} variant="subtitle1" component="h2">
          Amsterdam, The Netherlands
        </Typography>
      </Paper>
    </div>
  );
}

HeaderJobTitle.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(HeaderJobTitle);