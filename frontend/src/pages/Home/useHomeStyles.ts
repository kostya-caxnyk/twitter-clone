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
    borderLeft: 0,
    borderRight: 0,
    borderTop: 0,
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
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
  tweetAvatarWrapper: {
    width: 49,
    marginRight: 10,
  },
  tweetAvatar: {
    height: 49,
    width: 49,
  },
  tweetHeader: {
    fontSize: 15,
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
    padding: 15,
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
  recomItemAddBtn: {
    position: 'absolute',
    right: 10,
    top: 10,
    '& svg': {
      color: theme.palette.primary.main,
    },
  },
  formAddTweet: {
    display: 'flex',
    minHeight: 110,
    padding: '10px 15px',
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
  loading: {
    textAlign: 'center',
    marginTop: 20,
  },
}));
