import React from 'react';

import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import TwitterIcon from '@material-ui/icons/Twitter';
import { useStylesSignIn } from '../pages/SignIn';

interface DialogBoxProps {
  children: React.ReactNode;
  title: string;
  classes: ReturnType<typeof useStylesSignIn>;
  visible?: boolean;
  onClose: () => void;
}

const DialogBox: React.FC<DialogBoxProps> = ({
  children,
  title,
  classes: s,
  visible = false,
  onClose,
}) => {
  return (
    <Dialog open={visible} onClose={onClose} aria-labelledby="form-dialog-title">
      <div className={s.dialogBoxHeader}>
        <TwitterIcon className={s.headerTwitterIcon} />
      </div>
      <DialogTitle id="form-dialog-title">{title}</DialogTitle>
      <DialogContent>{children}</DialogContent>
    </Dialog>
  );
};

export default DialogBox;
