import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  wrapper: {
    display: 'flex',
    height: '100vh',
    color: theme.palette.primary.contrastText,
  },
  leftSide: {
    backgroundColor: theme.palette.primary.light,
    width: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    position: 'relative',
    padding: 20,
  },
  leftSideList: {
    position: 'relative',
    width: 380,
    listStyle: 'none',
    margin: 0,
    padding: 0,
    '& h6': {
      fontWeight: 700,
      fontSize: 20,
      display: 'flex',
      alignItems: 'center',
    },
  },
  listItem: {
    marginBottom: 40,
  },
  leftSideIcon: {
    fontSize: 27,
    marginRight: 14,
  },
  rightSide: {
    backgroundColor: theme.palette.secondary.dark,
    width: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  loginInner: {
    width: 380,
  },
  twitterIcon: {
    fontSize: 50,
  },
  loginSideTitle: {
    fontWeight: 700,
    fontSize: 30,
    marginBottom: 45,
    marginTop: 20,
  },
  subtitle: {
    fontWeight: 700,
    marginBottom: 10,
  },
  bgcTwitterIcon: {
    position: 'absolute',
    height: '170vh',
    width: '160vh',
    top: '-35vh',
    right: '-50vh',
    color: theme.palette.primary.main,
  },
  inputMarginBottom: {
    marginBottom: 20,
  },
  formControl: {
    padding: '5px 24px',
  },
}));
