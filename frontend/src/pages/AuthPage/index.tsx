import React, { useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { Button, Typography } from '@material-ui/core';
import TwitterIcon from '@material-ui/icons/Twitter';
import SearchIcon from '@material-ui/icons/Search';
import PeopleOutlineIcon from '@material-ui/icons/PeopleOutline';
import ChatBubbleIcon from '@material-ui/icons/ChatBubbleOutlineOutlined';

import LoginModal from './components/LoginModal';
import useAuthStyles from './useAuthStyles';
import RegisterModal from './components/RegisterModal';
import { selectIsUserLoggedIn, selectUserDataHasError } from '../../store/ducks/user/selectors';
import Notification from '../../components/Notification';

export const SignIn = () => {
  const s = useAuthStyles();
  const isLoggedIn = useSelector(selectIsUserLoggedIn);
  const hasError = useSelector(selectUserDataHasError);

  const [visibleModal, setVisibleModal] = React.useState<'signIn' | 'signUp'>();
  const [backendErrors, setBackendErrors] = React.useState<string | null>(null);

  useEffect(() => {
    if (hasError) {
      setBackendErrors('Произошла ошибка');
    }
  }, [hasError]);

  const handleClickOpenSignIn = () => {
    setVisibleModal('signIn');
  };

  const handleClickOpenSignUp = () => {
    setVisibleModal('signUp');
  };

  const handleCloseModal = () => {
    setVisibleModal(undefined);
  };

  const handleCloseNotification = React.useCallback((): void => {
    setBackendErrors(null);
  }, []);

  if (isLoggedIn) {
    return <Redirect to="/home" />;
  }

  return (
    <main className={s.wrapper}>
      <Notification message={backendErrors} onClose={handleCloseNotification} type="error" />
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
        <LoginModal open={visibleModal === 'signIn'} onClose={handleCloseModal} />
        <RegisterModal open={visibleModal === 'signUp'} onClose={handleCloseModal} />
      </div>
    </main>
  );
};
