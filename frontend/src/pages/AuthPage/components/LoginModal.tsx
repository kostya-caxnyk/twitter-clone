import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { FormControl, FormGroup, TextField, Button } from '@material-ui/core';
import React from 'react';
import DialogBox from '../../../components/ModalBlock';
import useAuthStyles from '../useAuthStyles';
import Notification from '../../../components/Notification';

interface LoginModalProps {
  open: boolean;
  onClose: () => void;
}

export interface LoginFormData {
  email: string;
  password: string;
}

const loginFormSchema = yup.object().shape({
  email: yup.string().email('Неверный email').required('Введите email'),
  password: yup.string().required('Введите пароль').min(6, 'Минимальная длина пароля 6 символов'),
});

const LoginModal: React.FC<LoginModalProps> = ({ open, onClose }) => {
  const s = useAuthStyles();
  const { register, handleSubmit, errors } = useForm<LoginFormData>({
    resolver: yupResolver(loginFormSchema),
  });

  const onSumbit = (data: LoginFormData) => {
    console.log(data, errors);
  };
  console.log(errors);
  return (
    <>
      <Notification open={true} message="eror" />
      <DialogBox title="Войти в аккаунт" visible={open} onClose={onClose}>
        <form onSubmit={handleSubmit(onSumbit)}>
          <FormControl component="fieldset" className={s.formControl} fullWidth>
            <FormGroup row>
              <TextField
                InputLabelProps={{ shrink: true }}
                margin="dense"
                name="email"
                id="email"
                label="Email"
                type="email"
                className={s.inputMarginBottom}
                inputRef={register}
                helperText={errors.email?.message}
                autoFocus
                error={!!errors.email}
                fullWidth
              />
              <TextField
                InputLabelProps={{ shrink: true }}
                margin="dense"
                name="password"
                id="password"
                label="Пароль"
                type="password"
                className={s.inputMarginBottom}
                inputRef={register}
                helperText={errors.password?.message}
                error={!!errors.password}
                fullWidth
              />
              <Button
                variant="contained"
                color="primary"
                type="submit"
                className={s.inputMarginBottom}
                fullWidth>
                Войти
              </Button>
            </FormGroup>
          </FormControl>
        </form>
      </DialogBox>
    </>
  );
};

export default LoginModal;
