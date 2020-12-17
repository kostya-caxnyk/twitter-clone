import React from 'react';

import IconButton from '@material-ui/core/IconButton';
import { ArrowBack } from '@material-ui/icons';
import { useHistory } from 'react-router-dom';

const BackButton: React.FC = (): React.ReactElement => {
  const history = useHistory();
  const onGoBackClick = () => {
    history.goBack();
  };

  return (
    <IconButton style={{ marginRight: 15 }} onClick={onGoBackClick}>
      <ArrowBack color="primary" />
    </IconButton>
  );
};

export default BackButton;
