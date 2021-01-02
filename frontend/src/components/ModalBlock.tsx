import React from 'react';
import classnames from 'classnames';

import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import TwitterIcon from '@material-ui/icons/Twitter';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  dialogBoxHeader: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    height: 50,
  },
  headerTwitterIcon: {
    fontSize: 30,
    color: theme.palette.primary.main,
  },
  dialogBoxCloseBtn: {
    padding: 8,
    color: theme.palette.primary.main,
    position: 'absolute',
    top: 7,
    left: 10,
  },
  dialogContent: {
    padding: 0,
    paddingTop: 15,
    borderTop: '1px solid rgb(204, 214, 221)',
  },
  dialogTitle: {
    border: 'none',
    margin: 0,
  },
  loading: {
    opacity: 0.7,
    pointerEvents: 'none',
  },
}));

interface DialogBoxProps {
  children: React.ReactNode;
  title?: string;
  visible?: boolean;
  onClose: () => void;
  loading?: boolean;
}

const DialogBox: React.FC<DialogBoxProps> = ({
  children,
  title,
  visible = false,
  onClose,
  loading = false,
}) => {
  const s = useStyles();

  return (
    <Dialog open={visible} onClose={onClose} className={classnames({ [s.loading]: loading })}>
      <div className={s.dialogBoxHeader}>
        <IconButton className={s.dialogBoxCloseBtn} onClick={onClose}>
          <CloseIcon />
        </IconButton>
        <TwitterIcon className={s.headerTwitterIcon} />
      </div>
      {title && <DialogTitle className={s.dialogTitle}>{title}</DialogTitle>}
      <DialogContent className={s.dialogContent}>{children}</DialogContent>
    </Dialog>
  );
};

export default DialogBox;
