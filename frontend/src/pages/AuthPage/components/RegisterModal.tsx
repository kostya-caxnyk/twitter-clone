import { FormControl, FormGroup, TextField, Button } from '@material-ui/core';
import React from 'react';
import DialogBox from '../../../components/ModalBlock';
import useAuthStyles from '../useAuthStyles';

interface RegistrationModalProps {
  open: boolean;
  onClose: () => void;
}

const RegisterModal: React.FC<RegistrationModalProps> = ({ open, onClose }) => {
  const s = useAuthStyles();

  return (
    <DialogBox title="Создайте учетную запись" visible={open} onClose={onClose}>
      <FormControl component="fieldset" className={s.formControl} fullWidth>
        <FormGroup row>
          <TextField
            autoFocus
            InputLabelProps={{ shrink: true }}
            margin="dense"
            id="name"
            label="Имя"
            type="text"
            className={s.inputMarginBottom}
            fullWidth
          />
          <TextField
            InputLabelProps={{ shrink: true }}
            margin="dense"
            id="email"
            label="Email"
            type="email"
            className={s.inputMarginBottom}
            fullWidth
          />
          <TextField
            InputLabelProps={{ shrink: true }}
            margin="dense"
            id="password"
            label="Пароль"
            type="password"
            className={s.inputMarginBottom}
            fullWidth
          />
          <Button variant="contained" color="primary" className={s.inputMarginBottom} fullWidth>
            Далее
          </Button>
        </FormGroup>
      </FormControl>
    </DialogBox>
  );
};

export default RegisterModal;
