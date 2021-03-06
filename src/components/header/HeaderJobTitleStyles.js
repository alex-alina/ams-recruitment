export const styles = theme => ({
  root: {
    position: 'absolute',
    top: '25%',
    bottom: '30%',
    left: '25%',
    right: '25%',
    margin: 'auto',
    width: '50%',
    // backgroundColor: '#00000073',
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    [theme.breakpoints.down('sm')]: {
      position: 'absolute',
      top: '25%',
      bottom: '25%',
      left: '5%',
      right: '5%',
      margin: 'auto',
      width: '90%',
    },

    [theme.breakpoints.down('sm')]: {
      position: 'absolute',
      top: '25%',
      bottom: '35%',
      left: '5%',
      right: '5%',
      margin: 'auto',
      width: '85%',
    },
  },

  title: {
    color: '#fff',
    fontSize: 'calc(1.5rem + 1vw)',
    alignCenter: 'center',
    letterSpacing: 1.5,
  },
  
  subtitle: {
    alignCenter: 'center',
    color: '#fff',
    fontSize: 'calc(1rem + 0.5vw)',
    letterSpacing: 1,
  }
});