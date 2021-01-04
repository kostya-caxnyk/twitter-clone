import { Snackbar } from '@material-ui/core';
import MuiAlert, { AlertProps } from '@material-ui/lab/Alert';
import React, { useEffect } from 'react';

interface NotificationProps {
  open: boolean;
  message: string | null;
  type: 'error' | 'success' | 'warning';
}

function Alert(props: AlertProps) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const Notification: React.FC<NotificationProps> = React.memo(
  ({ open, message, type }): React.ReactElement | null => {
    const [openNotification, setOpenNotification] = React.useState(false);

    useEffect(() => {
      setOpenNotification(open);
    }, [open]);

    const onClose = () => {
      setOpenNotification(false);
    };

    if (!openNotification) {
      return null;
    }
    return (
      <Snackbar open={openNotification} autoHideDuration={5000} onClose={onClose}>
        <Alert severity={type}>{message}</Alert>
      </Snackbar>
    );
  },
);

export default Notification;
