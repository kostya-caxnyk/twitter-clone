import React from 'react';

import { Button, FormControl, FormGroup, makeStyles, Typography } from '@material-ui/core';
import TwitterIcon from '@material-ui/icons/Twitter';
import SearchIcon from '@material-ui/icons/Search';
import PeopleOutlineIcon from '@material-ui/icons/PeopleOutline';
import ChatBubbleIcon from '@material-ui/icons/ChatBubbleOutlineOutlined';

import TextField from '@material-ui/core/TextField';
import DialogBox from '../components/DialogBox/DialogBox';

export const useStylesSignIn = makeStyles((theme) => ({
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
  dialogBoxHeader: {
    display: 'flex',
    justifyContent: 'center',
    position: 'relative',
  },
  headerTwitterIcon: {
    fontSize: 30,
    paddingTop: 15,
    color: theme.palette.primary.main,
  },
  inputMarginBottom: {
    marginBottom: 20,
  },
}));

export const SignIn = () => {
  const s = useStylesSignIn();

  const [visibleModal, setVisibleModal] = React.useState<'signIn' | 'signUp'>();

  const handleClickOpenSignIn = () => {
    setVisibleModal('signIn');
  };

  const handleClickOpenSignUp = () => {
    setVisibleModal('signUp');
  };

  const handleCloseModal = () => {
    setVisibleModal(undefined);
  };

  return (
    <main className={s.wrapper}>
      <div className={s.leftSide}>
        <TwitterIcon className={s.bgcTwitterIcon} />

        <ul className={s.leftSideList}>
          <li className={s.listItem}>
            <Typography variant="h6">
              <SearchIcon className={s.leftSideIcon} />
              Читайте о том, что вам интересно.
            </Typography>
          </li>
          <li className={s.listItem}>
            <Typography variant="h6">
              <PeopleOutlineIcon className={s.leftSideIcon} />
              Узнайте, о чем говорят в мире.
            </Typography>
          </li>
          <li className={s.listItem}>
            <Typography variant="h6">
              <ChatBubbleIcon className={s.leftSideIcon} />
              Присоединяйтесь к общению.
            </Typography>
          </li>
        </ul>
      </div>
      <div className={s.rightSide}>
        <div className={s.loginInner}>
          <TwitterIcon className={s.twitterIcon} />
          <Typography variant="h4" className={s.loginSideTitle}>
            Узнайте, что происходит в мире прямо сейчас
          </Typography>
          <Typography variant="subtitle1" className={s.subtitle}>
            Присоединяйтесь к Твиттеру прямо сейчас!
          </Typography>
          <Button
            variant="contained"
            color="primary"
            style={{ marginBottom: 15 }}
            onClick={handleClickOpenSignUp}
            fullWidth>
            Зарегистрироваться
          </Button>
          <Button variant="outlined" color="primary" onClick={handleClickOpenSignIn} fullWidth>
            Войти
          </Button>
        </div>
        <DialogBox
          classes={s}
          title="Войти в аккаунт"
          visible={visibleModal === 'signIn'}
          onClose={handleCloseModal}>
          <FormControl component="fieldset" fullWidth>
            <FormGroup aria-label="position" row>
              <TextField
                autoFocus
                InputLabelProps={{ shrink: true }}
                margin="dense"
                id="email"
                label="Email"
                type="email"
                className={s.inputMarginBottom}
                fullWidth
              />
              <TextField
                InputLabelProps={{ shrink: true }}
                margin="dense"
                id="password"
                label="Пароль"
                type="password"
                className={s.inputMarginBottom}
                fullWidth
              />
              <Button variant="contained" color="primary" className={s.inputMarginBottom} fullWidth>
                Войти
              </Button>
            </FormGroup>
          </FormControl>
        </DialogBox>
        <DialogBox
          classes={s}
          title="Создайте учетную запись"
          visible={visibleModal === 'signUp'}
          onClose={handleCloseModal}>
          <FormControl component="fieldset" fullWidth>
            <FormGroup aria-label="position" row>
              <TextField
                autoFocus
                InputLabelProps={{ shrink: true }}
                margin="dense"
                id="name"
                label="Имя"
                type="text"
                className={s.inputMarginBottom}
                fullWidth
              />
              <TextField
                InputLabelProps={{ shrink: true }}
                margin="dense"
                id="email"
                label="Email"
                type="email"
                className={s.inputMarginBottom}
                fullWidth
              />
              <TextField
                InputLabelProps={{ shrink: true }}
                margin="dense"
                id="password"
                label="Пароль"
                type="password"
                className={s.inputMarginBottom}
                fullWidth
              />
              <Button variant="contained" color="primary" className={s.inputMarginBottom} fullWidth>
                Далее
              </Button>
            </FormGroup>
          </FormControl>
        </DialogBox>
      </div>
    </main>
  );
};
