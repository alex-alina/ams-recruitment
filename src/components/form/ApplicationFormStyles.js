export const styles = theme => ({
  root: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  formTitle: {
    color: theme.palette.primary.main,
    fontSize: 'calc(1.25rem + 0.5vw)',
    marginTop: theme.spacing.unit * 4,
    marginBottom: theme.spacing.unit * 4,
  },
  form: {
    width: '100%',
    isplay: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  informationCategory: {
    display: 'flex',
    justifyContent: 'space-evenly',
    [theme.breakpoints.down('md')]: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
    },
  },
  categoryTitle: {
    width: '20%',
    display: 'flex',
    justifyContent: 'flex-start',
    [theme.breakpoints.down('md')]: {
      width: '100%',
    },
  },
  categoryTitleTxt: {
    color: theme.palette.primary.main,
    fontSize: 'calc(0.5rem + 0.5vw)',
    [theme.breakpoints.down('md')]: {
      fontSize: 'calc(0.5rem + 1vw)',
      marginBottom: theme.spacing.unit * 0.5,
    },
    marginTop: '6px',
    marginLeft: '12px',
  },
  formSubsection: {
    width: '60%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    [theme.breakpoints.down('md')]: {
      width: '100%',
    },
  },
  // homeId: {
  //   width: '100%',
  //   display: 'flex',
  //   justifyContent: 'space-between',
  // },
  positionSubmitBtn: {
    width: '300px',
    margin: 'auto',
    paddingTop: theme.spacing.unit * 5,
    paddingBottom: theme.spacing.unit * 4,
    display: 'flex',
    justifyContent: 'center',
  },
});

