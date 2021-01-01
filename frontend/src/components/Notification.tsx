import { Snackbar } from '@material-ui/core';
import MuiAlert, { AlertProps } from '@material-ui/lab/Alert';
import React from 'react';

interface NotificationProps {
  message: string | null;
  onClose: () => void;
  type: 'error' | 'success' | 'warning';
}

function Alert(props: AlertProps) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const Notification: React.FC<NotificationProps> = React.memo(
  ({ message, onClose, type }): React.ReactElement => {
    return (
      <Snackbar open={!!message} autoHideDuration={6000} onClose={onClose}>
        <Alert severity={type}>{message}</Alert>
      </Snackbar>
    );
  },
);

export default Notification;
