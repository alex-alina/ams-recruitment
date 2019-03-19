export const styles = theme => ({
  root: {
    width: '50%',
    margin: 'auto',
    [theme.breakpoints.down('sm')]: {
      width: '90%',
    },
    [theme.breakpoints.down('md')]: {
      width: '70%',
    },
  },
  formTitle: {
    color: theme.palette.primary.main,
  },

});