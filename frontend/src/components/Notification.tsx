import React, { useEffect } from 'react';

import { Snackbar } from '@material-ui/core';
import MuiAlert, { AlertProps } from '@material-ui/lab/Alert';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

interface NotificationProps {
  open: boolean;
  message: string | null;
  type: 'error' | 'success' | 'warning' | 'info';
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
        <Alert
          severity={type}
          action={
            <IconButton color="inherit" style={{ padding: 5 }} onClick={onClose}>
              <CloseIcon />
            </IconButton>
          }>
          {message}
        </Alert>
      </Snackbar>
    );
  },
);

export default Notification;
