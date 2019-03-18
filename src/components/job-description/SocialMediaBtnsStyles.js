export const styles = theme => ({
  root: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    flexWrap: 'wrap',
    marginBottom: theme.spacing.unit * 4,
  },
  iconBorder: {
    borderRadius: '50px',
    backgroundColor: '#ccff90',
    paddingLeft: theme.spacing.unit * 1.25,
    paddingRight: theme.spacing.unit * 1.25,
    paddingTop: theme.spacing.unit * 1,
    paddingBottom: theme.spacing.unit * 1,
    marginRight: theme.spacing.unit * 2.5,
    marginBottom: theme.spacing.unit * 3.5,
    marginTop: theme.spacing.unit * -1.5,
    '&:hover': {
      backgroundColor: '#99cc60',
    },
  },
  icon: {
    margin: theme.spacing.unit * 0.25,
  },
});