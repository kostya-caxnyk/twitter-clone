import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect } from 'react';

import { FormControl, FormGroup, TextField, Button } from '@material-ui/core';
import DialogBox from '../../../components/ModalBlock';
import useAuthStyles from '../useAuthStyles';
import Notification from '../../../components/Notification';
import { fetchUserData } from '../../../store/ducks/user/actionCreators';
import {
  selectIsUserLoading,
  selectIsUserLoggedIn,
  selectUserDataHasError,
} from '../../../store/ducks/user/selectors';
import { Redirect } from 'react-router-dom';

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
  const { register, handleSubmit, errors } = useForm<LoginFormData>({
    resolver: yupResolver(loginFormSchema),
  });

  const s = useAuthStyles();
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsUserLoading);
  const isLoggedIn = useSelector(selectIsUserLoggedIn);
  const hasError = useSelector(selectUserDataHasError);
  const [backendErrors, setBackendErrors] = React.useState<string | null>(null);

  useEffect(() => {
    if (hasError) {
      setBackendErrors('Неверный E-mail или пароль');
    }
  }, [hasError]);

  const onSumbit = async (data: LoginFormData) => {
    dispatch(fetchUserData(data));
  };

  const handleCloseNotification = React.useCallback((): void => {
    setBackendErrors(null);
  }, []);

  if (isLoggedIn) {
    return <Redirect to="/home" />;
  }
  return (
    <>
      <Notification message={backendErrors} onClose={handleCloseNotification} type="error" />
      <DialogBox title="Войти в аккаунт" visible={open} onClose={onClose} loading={isLoading}>
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
