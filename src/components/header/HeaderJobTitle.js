import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { styles } from './HeaderJobTitleStyles';

function HeaderJobTitle(props) {
  const { classes } = props;
  return (
    <div>
      <Paper className={classes.root} elevation={24}>
        <Typography className={classes.title}  >
          Purchasing Assistant
        </Typography>
        <Typography className={classes.subtitle} >
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