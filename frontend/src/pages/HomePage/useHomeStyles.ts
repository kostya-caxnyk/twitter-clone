import { makeStyles } from '@material-ui/core';
import grey from '@material-ui/core/colors/grey';

export default makeStyles((theme) => ({
  wrapper: {
    minHeight: '100vh',
  },
  navSideBar: {
    maxWidth: 255,
    position: 'sticky',
    top: 0,
  },
  navList: {
    padding: 0,
    margin: 0,
    listStyle: 'none',
  },
  navListItem: {
    marginBottom: 15,
  },
  navLink: {
    color: 'black',
    textDecoration: 'none',
    display: 'inline-flex',
    alignItems: 'center',
    padding: '10px',
    borderRadius: 25,
    transition: 'background-color 0.1s ease-in-out',
    '&:hover': {
      backgroundColor: theme.palette.secondary.light,
      '& svg': {
        color: theme.palette.primary.main,
      },
      color: theme.palette.primary.main,
    },
  },
  navIcon: {
    color: 'black',
    fontSize: 30,
  },
  navListLabel: {
    fontWeight: 700,
    margin: '0 15px 0 20px',
  },
  navTweetButton: {
    height: 49,
  },
  profileBtn: {
    width: '100%',
    height: 55,
    display: 'flex',
    justifyContent: 'flex-start',
    textTransform: 'none',
    backgroundColor: 'white',
    '&:hover': {
      backgroundColor: 'rgba(122, 204, 254, 0.3)',
    },
  },
  profileBtnInfo: {
    marginLeft: 10,
  },
  profileBtnMoreIcon: {
    marginLeft: 'auto',
  },
  profileBtnMenu: {
    //backgroundColor: 'red',
    '& .MuiMenu-paper': {
      boxShadow: 'rgba(101, 119, 134, 0.2) 0px 0px 15px, rgba(101, 119, 134, 0.15) 0px 0px 3px 1px',
      borderRadius: 16,
      minWidth: 260,
    },
    '& li': {
      padding: '10px 15px',
    },
  },
  logoIcon: {
    fontSize: 36,
  },
  logoBtn: {
    padding: 10,
    margin: '10px 0',
    '& a': {
      height: 36,
    },
  },
  activeLink: {
    '& svg': {
      color: theme.palette.primary.main,
    },
    color: theme.palette.primary.main,
  },
  feedWrapper: {
    minHeight: '100vh',
    borderTop: 0,
    borderBottom: 0,
  },
  feedHeader: {
    display: 'flex',
    alignItems: 'center',
    position: 'sticky',
    top: 0,
    zIndex: 1000,
    backgroundColor: 'white',
    borderLeft: 0,
    borderRight: 0,
    borderTop: 0,
    cursor: 'pointer',
    padding: '0 8px',
  },
  feedHeaderLabel: {
    padding: 15,
    fontWeight: 800,
    color: 'black',
  },
  tweet: {
    minHeight: 88,
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: 'rgba(0,0,0,0.03)',
    },
    padding: '10px 15px 2px',
    borderRight: 0,
    borderLeft: 0,
    display: 'flex',
  },
  tweetMenu: {
    '& ul': {
      borderRadius: 4,
      border: '1px solid rgba(101, 119, 134, 0.2)',
    },
  },
  tweetMenuDelete: {
    color: theme.palette.error.main,
    '& svg': {
      color: theme.palette.error.main,
    },
  },
  tweetAvatarWrapper: {
    width: 49,
    marginRight: 10,
  },
  tweetAvatar: {
    marginTop: 10,
    height: 49,
    width: 49,
  },
  tweetHeader: {
    fontSize: 15,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  tweetHeaderMoreIcon: {
    padding: 5,
    '&:hover': {
      color: theme.palette.primary.main,
    },
  },
  tweetUserName: {
    color: grey[600],
  },
  tweetDate: {
    color: grey[600],
  },
  tweetText: {
    lineHeight: 1.3125,
    color: 'black',
  },
  tweetButtons: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    maxWidth: 430,
    position: 'relative',
    left: -15,
  },
  tweetIcon: {
    '& svg': {
      fontSize: 20,
    },
    '&:hover': {
      color: theme.palette.primary.main,
    },
  },
  tweetImages: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginTop: 10,
    flexWrap: 'wrap',
  },
  tweetImage: {
    width: '40%',
    height: 300,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    borderRadius: 20,
    marginBottom: 10,
  },
  tweetOneImage: {
    width: '95%',
  },
  tweetTwoImage: {
    width: '45%',
    height: 150,
  },
  searchInput: {
    backgroundColor: 'rgb(235, 238, 240)',
    padding: '5px 15px',
    borderRadius: 20,
    marginTop: 10,
    marginBottom: 10,
  },
  recommendations: {
    backgroundColor: 'rgb(247, 249, 250)',
    borderRadius: 15,
    marginBottom: 15,
  },
  recommendationsTitle: {
    fontWeight: 800,
    borderBottom: '1px solid rgb(235, 238, 240)',
    padding: '5px 15px',
  },
  recomItem: {
    backgroundColor: 'rgb(247, 249, 250)',
    borderBottom: '1px solid rgb(235, 238, 240)',
    padding: '5px 10px',
    cursor: 'pointer',
    position: 'relative',
    '&:hover': {
      backgroundColor: 'rgba(0,0,0,0.03)',
    },
  },
  recomItemTitle: {
    fontWeight: 700,
    fontSize: 15,
  },
  recomItemText: {
    color: 'rgb(91, 112, 131)',
    fontSize: 13,
  },
  recomItemActiveBtn: {
    backgroundColor: theme.palette.primary.light,
  },
  recomItemBtnIcon: {
    color: theme.palette.primary.main,
  },
  recomLoadMore: {
    backgroundColor: 'rgb(247, 249, 250)',
    cursor: 'pointer',
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    '&:hover': {
      backgroundColor: 'rgba(0,0,0,0.03)',
    },
  },
  recomLoadMoreText: {
    color: theme.palette.primary.main,
    padding: '10px 15px',
  },
  recomItemAvatar: {
    marginRight: 10,
  },
  recomItemPeople: {
    display: 'flex',
  },
  lowOpacity: {
    opacity: 0.5,
  },
  formAddTweet: {
    display: 'flex',
    padding: '10px 15px',
  },
  formAddTweetErrorWrapper: {
    padding: '10px 15px',
  },
  formAddTweetErrorBlock: {
    padding: '10px 15px',
    borderRadius: 12,
    backgroundColor: theme.palette.error.light,
    fontSize: 15,
  },
  formAddTweetAvatar: {
    width: 49,
    height: 49,
    marginRight: 10,
    marginTop: 5,
  },
  gap: {
    height: 10,
    borderBottom: 0,
    borderLeft: 0,
    borderRight: 0,
    backgroundColor: 'rgb(247, 249, 250)',
  },
  formAddTweetTextArea: {
    fontSize: 20,
    width: '100%',
    padding: '10px 5px',
    outline: 'none',
    border: 'none',
    resize: 'none',
  },
  formAddTweetButtons: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 49,
  },
  formAddTweetButtonsGroup: {
    marginTop: 10,
    display: 'flex',
  },
  formAddTweetIcon: {
    padding: 8,
    '& svg': {
      color: theme.palette.primary.main,
    },
  },
  formAddTweetProgressBar: {
    marginLeft: 'auto',
    marginRight: 15,
    marginTop: 5,
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
  },
  formAddTweetCircle: {
    position: 'absolute',
    top: 0,
    right: 0,
    color: 'rgba(0,0,0, 0.1)',
  },
  redColor: {
    color: 'red',
  },
  formAddTweetLimit: {
    color: 'red',
    marginRight: 5,
  },
  formAddTweetImages: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginTop: 10,
    flexWrap: 'wrap',
  },
  formAddTweetImage: {
    width: '40%',
    height: 'auto',
    position: 'relative',
    '& img': {
      width: '100%',
      height: 'auto',
      borderRadius: 10,
    },
  },
  formAddTweetCancelIcon: {
    position: 'absolute',
    right: 5,
    top: 5,
    color: 'black',
    padding: 0,
    backgroundColor: 'white',
    '&:hover': {
      backgroundColor: 'white',
      color: '#404040',
    },
  },
  loading: {
    marginTop: 20,
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bigTweet: {
    minHeight: 88,
    padding: '10px 15px 2px',
    borderRight: 0,
    borderLeft: 0,
    borderTop: 0,
  },
  bigTweetUserInfo: {
    display: 'flex',
    marginBottom: 10,
    fontSize: 15,
    alignItems: 'center',
  },
  bigTweetText: {
    fontSize: 23,
    marginTop: 15,
    paddingBottom: 10,
    wordBreak: 'break-word',
  },
  bigTweetButtons: {
    maxWidth: '100%',
    justifyContent: 'space-around',
    padding: '5px 0',
  },
  bigTweetIcon: {
    padding: 10,
    '& svg': {
      fontSize: 25,
    },
  },
  profileBackground: {
    height: 200,
    backgroundColor: 'rgb(196, 207, 214)',
  },
  profileBlock: {
    padding: '10px 15px 0px',
    marginbottom: 15,
  },
  profileMeta: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  profileAvatar: {
    marginTop: '-16%',
    width: 140,
    height: 140,
    borderRadius: '50%',
    overflow: 'hidden',
    '& img': {
      width: '100%',
      height: '100%',
    },
  },
  profileInfo: {},
  profileLabel: {
    color: 'rgb(91, 112, 131)',
    fontWeight: 400,
    fontSize: 15,
    lineHeight: 1.35,
    marginRight: 6,
    display: 'flex',
    alignItems: 'center',
  },
  profileAbout: {
    fontWeight: 400,
    fontSize: 15,
    lineHeight: 1.35,
    marginBottom: 10,
  },
  profileDetails: {
    display: 'flex',
    marginBottom: 10,
  },
  profileLink: {
    color: 'rgb(91, 112, 131)',
    fontWeight: 400,
    fontSize: 15,
    lineHeight: 1.35,
    marginRight: 12,
  },
  profileTabs: {
    display: 'flex',
    marginBottom: 10,
    marginTop: 20,
    fontSize: 15,
    borderBottom: '1px solid rgba(0,0,0,0.1)',
  },
  profileTab: {
    padding: 15,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    fontWeight: 700,
    color: 'rgb(91, 112, 131)',
    transition: 'all .2s linear',

    '&:hover': {
      backgroundColor: 'rgba(122, 204, 254, 0.3)',
      color: theme.palette.primary.main,
    },
  },
  profileActiveLink: {
    borderBottom: `2px solid ${theme.palette.primary.main}`,
    '& div': {
      color: theme.palette.primary.main,
    },
  },
}));
