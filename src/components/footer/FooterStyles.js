export const styles = theme => ({
  root: {
    width: '100%',
    position: 'static',
    backgroundColor: '#004a3f',
    display: 'flex',
    justifyContent: 'space-evenly',
    flexWrap: 'wrap',
    marginTop: theme.spacing.unit * 4,
  },

  footerSection: {
    width: '33%',
    maxWidth: '200px',
    marginTop: theme.spacing.unit * 2.5,
    [theme.breakpoints.down('xs')]: {
      width: '90%',
    },
  },

  sectionTitle: {
    textAlign: 'left',
    color: '#fff',
  },

  sectionDivider: {
    backgroundColor: '#ffffffBF',
  },
  
  listItemTxt: {
    color: theme.palette.common.white,
  },
});
