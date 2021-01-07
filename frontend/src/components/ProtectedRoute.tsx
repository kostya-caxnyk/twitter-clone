import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';
import { selectUserData, selectUserLoadingStatus } from '../store/ducks/user/selectors';
import { LoadingStatus } from '../store/types';

const ProtectedRoute: React.FC<any> = ({ component: Component, ...rest }) => {
  const userLoadingStatus = useSelector(selectUserLoadingStatus);
  const currentUser = useSelector(selectUserData);

  const isUserAuthorized = userLoadingStatus === LoadingStatus.LOADED && !!currentUser;

  if (!isUserAuthorized) {
    return <Redirect to="/auth" />;
  }

  return <Route {...rest} render={(routeProps) => <Component {...routeProps} />} />;
};

export default ProtectedRoute;
