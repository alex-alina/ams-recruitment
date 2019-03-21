export const styles = theme => ({
  root: {
    textAlign: 'left',
    width: '50%',
    margin: 'auto',
    [theme.breakpoints.down('sm')]: {
      width: '90%',
    },
    [theme.breakpoints.down('md')]: {
      width: '70%',
    },
  },
  
  input: {
    display: 'none',
  },

  jobTitleHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: theme.spacing.unit * 3,
  },

  jobTitle: {
    fontWeight: '400',
    fontSize: 'calc(1.5rem + 0.5vw)',
    marginTop: 30,
    color: '#007769',
  },

  positionTopBtn: {
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
    paddingTop: theme.spacing.unit * 4,
    paddingBottom: theme.spacing.unit * 1,
  },
  
  sectionTitle: {
    color:'#007769',
    lineHeight: '2.5rem',
  },

  sectionList: {
    marginLeft: '40px',
  },

  sections: {
    marginTop: 18, 
  },

  listItem: {
    listStyleType: 'disc',
  },

  positionBtn: {
    width: '200px',
    margin: 'auto',
    paddingTop: theme.spacing.unit * 4,
  },

  button: {
    width: '200px',
  },
  
  bottomDivider: {
    marginTop: theme.spacing.unit * 1,
  },
});