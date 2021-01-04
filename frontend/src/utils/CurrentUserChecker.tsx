import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import LoadingCircle from '../components/LoadingCircle';
import { checkCurrentUser } from '../store/ducks/user/actionCreators';
import { selectUserLoadingStatus } from '../store/ducks/user/selectors';
import { LoadingStatus } from '../store/types';

interface CurrentUserCheckerProps {
  children: React.ReactElement;
}

const CurrentUserChecker: React.FC<CurrentUserCheckerProps> = ({ children }) => {
  const dispatch = useDispatch();
  const token = localStorage.getItem('token');
  const userLoadingStatus = useSelector(selectUserLoadingStatus);

  useEffect(() => {
    if (!token) {
      return;
    }

    dispatch(checkCurrentUser());
  }, [token, dispatch]);

  if (!token) {
    return children;
  }

  if (userLoadingStatus === LoadingStatus.NEVER || userLoadingStatus === LoadingStatus.LOADING) {
    return (
      <div style={{ width: '100wh', height: '100vh' }}>
        <LoadingCircle />
      </div>
    );
  }

  return children;
};

export default CurrentUserChecker;
