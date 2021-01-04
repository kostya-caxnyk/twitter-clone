import React, { ReactElement } from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';
import { selectUserLoadingStatus } from '../store/ducks/user/selectors';
import { LoadingStatus } from '../store/types';

const ProtectedHomeRoute: React.FC<any> = ({ component: Component, ...rest }): ReactElement => {
  const userLoadingStatus = useSelector(selectUserLoadingStatus);

  if (userLoadingStatus !== LoadingStatus.LOADED) {
    return <Redirect to="/auth" />;
  }

  return <Route {...rest} render={(routeProps) => <Component {...routeProps} />} />;
};

export default ProtectedHomeRoute;
