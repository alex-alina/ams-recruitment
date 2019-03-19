export const styles = theme => ({
  root: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    flexWrap: 'wrap',
    marginBottom: theme.spacing.unit * 2,
  },
  iconBorder: {
    width: '38px',
    height: '38px',
    borderRadius: '50px',
    backgroundColor: '#ccff90',
    padding: theme.spacing.unit * 0.25,
    marginRight: theme.spacing.unit * 2,
    marginBottom: theme.spacing.unit * 2,
    marginTop: theme.spacing.unit * -1,
    '&:hover': {
      backgroundColor: '#99cc60',
    },
  },
  icon: {
    margin: theme.spacing.unit * 1,
  },
});