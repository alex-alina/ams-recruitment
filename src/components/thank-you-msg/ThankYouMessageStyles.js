export const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 8,
    marginBottom: theme.spacing.unit * 8,
    paddingTop: theme.spacing.unit * 8,
    paddingBottom: theme.spacing.unit * 5,
    paddingLeft: theme.spacing.unit * 2,
    paddingRight: theme.spacing.unit * 2,
    backgroundColor: '#ccff90',
    borderRadius: '4px',
  },

  thankYouMsg: {
    color: '#007769',
    fontSize: 'calc(1rem + 1vw)',
    alignCenter: 'center',
    letterSpacing: 1.5,
    lineHeight: '3rem',
    marginBottom: theme.spacing.unit * 4,
    [theme.breakpoints.down('sm')]: {
      fontSize: 'calc(0.75rem + 0.5vw)',
      marginBottom: theme.spacing.unit * 2,
      lineHeight: '2rem',
    },
  },

  companySignature: {
    alignCenter: 'center',
    color: '#007769',
    fontSize: 'calc(1rem + 0.5vw)',
    letterSpacing: 1,
    fontStyle: 'italic',
    lineHeight: '6rem',
    [theme.breakpoints.down('sm')]: {
      fontSize: 'calc(0.75rem + 0.5vw)',
      lineHeight: '3rem',
    },
    
    icon: {
      marginTop: theme.spacing.unit * 6,
    }
  }
});