import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import background from '../../assets/images/background.png';
import HeaderJobTitle from './HeaderJobTitle';

const styles = {
  card: {
    position: 'relative',
  },
  media: {
    height: 280,
  },
};

function Header(props) {
  const { classes } = props;
  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={background}
          alt="Purchasing office for chothing retail store"
          title="Fashion Today"
        />
        <HeaderJobTitle />
      </CardActionArea>
    </Card>
  );
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Header);