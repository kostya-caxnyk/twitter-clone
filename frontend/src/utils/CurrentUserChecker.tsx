import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import LoadingCircle from '../components/LoadingCircle';
import { checkCurrentUser, setUserLoadingStatus } from '../store/ducks/user/actionCreators';
import {
  selectIsNeverLoading,
  selectIsUserLoading,
  selectIsUserLoggedIn,
} from '../store/ducks/user/selectors';
import { LoadingStatus } from '../store/types';

interface CurrentUserCheckerProps {
  children: React.ReactElement;
}

const CurrentUserChecker: React.FC<CurrentUserCheckerProps> = ({ children }) => {
  const dispatch = useDispatch();
  const token = localStorage.getItem('token');

  useEffect(() => {
    if (!token) {
      //dispatch(setUserLoadingStatus(LoadingStatus.ERROR));
      return;
    }

    dispatch(checkCurrentUser());
  }, [token, dispatch]);

  return children;
};

export default CurrentUserChecker;
