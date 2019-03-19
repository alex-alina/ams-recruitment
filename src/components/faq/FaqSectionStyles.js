export const styles = theme => ({
  root: {
    textAlign: 'left',
    marginBottom: theme.spacing.unit * 2.25,
    width: '50%',
    margin: 'auto',
    [theme.breakpoints.down('sm')]: {
      width: '90%',
    },
    [theme.breakpoints.down('md')]: {
      width: '70%',
    },
  },
  sectionTitle: {
    color:'#007769',
    lineHeight: '2.5rem',
  },
  faqDivider: {
    marginTop: theme.spacing.unit * 0.25,
    marginBottom: theme.spacing.unit * 2.25,
  },
  heading: {
    color:'#007769',
    fontWeight: 500,
  },
});
