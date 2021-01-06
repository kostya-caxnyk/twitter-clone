import { FormControl, FormGroup, TextField, Button } from '@material-ui/core';
import React from 'react';
import DialogBox from '../../../components/ModalBlock';
import useAuthStyles from '../useAuthStyles';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import Notification from '../../../components/Notification';
import { useDispatch } from 'react-redux';
import { fetchRegisterUser } from '../../../store/ducks/user/actionCreators';

interface RegistrationModalProps {
  open: boolean;
  onClose: () => void;
}

export interface RegisterFormData {
  email: string;
  name: string;
  username: string;
  password2: string;
  password: string;
}

const RegisterFormSchema = yup.object().shape({
  email: yup.string().email('Неверный email').required('Введите email'),
  name: yup
    .string()
    .required('Введите имя')
    .min(2, 'Минимальная длина имени 2 символа')
    .max(20, 'Максимальная длина имени 20 символов'),
  username: yup
    .string()
    .required('Введите никнейм')
    .min(3, 'Минимальная длина никнейма 3 символа')
    .max(14, 'Максимальная длина ника 14 символов'),
  password: yup.string().required('Введите пароль').min(6, 'Минимальная длина пароля 6 символов'),
  password2: yup
    .string()
    .required('Повторите пароль')
    .oneOf([yup.ref('password'), null], 'Пароли не совпадают'),
});

const RegisterModal: React.FC<RegistrationModalProps> = ({ open, onClose }) => {
  const { register, handleSubmit, errors } = useForm<RegisterFormData>({
    resolver: yupResolver(RegisterFormSchema),
  });
  const s = useAuthStyles();
  const dispatch = useDispatch();

  const onSubmit = (data: RegisterFormData) => {
    dispatch(fetchRegisterUser(data));
  };

  return (
    <DialogBox title="Создайте учетную запись" visible={open} onClose={onClose}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl component="fieldset" className={s.formControl} fullWidth>
          <FormGroup row>
            <TextField
              autoFocus
              InputLabelProps={{ shrink: true }}
              margin="dense"
              name="name"
              id="name"
              label="Ваше имя"
              type="text"
              className={s.inputMarginBottom}
              inputRef={register}
              helperText={errors.name?.message}
              error={!!errors.name}
              fullWidth
            />
            <TextField
              InputLabelProps={{ shrink: true }}
              margin="dense"
              name="email"
              id="email"
              label="Email"
              type="email"
              inputRef={register}
              helperText={errors.email?.message}
              error={!!errors.email}
              className={s.inputMarginBottom}
              fullWidth
            />
            <TextField
              InputLabelProps={{ shrink: true }}
              margin="dense"
              name="username"
              id="username"
              label="Никнейм"
              type="text"
              inputRef={register}
              helperText={errors.username?.message}
              error={!!errors.username}
              className={s.inputMarginBottom}
              fullWidth
            />
            <TextField
              InputLabelProps={{ shrink: true }}
              margin="dense"
              name="password"
              id="password"
              label="Пароль"
              type="password"
              inputRef={register}
              helperText={errors.password?.message}
              error={!!errors.password}
              className={s.inputMarginBottom}
              fullWidth
            />
            <TextField
              InputLabelProps={{ shrink: true }}
              margin="dense"
              name="password2"
              id="password2"
              label="Повторите пароль"
              type="password"
              inputRef={register}
              helperText={errors.password2?.message}
              error={!!errors.password2}
              className={s.inputMarginBottom}
              fullWidth
            />
            <Button
              variant="contained"
              color="primary"
              type="submit"
              className={s.inputMarginBottom}
              fullWidth>
              Далее
            </Button>
          </FormGroup>
        </FormControl>
      </form>
    </DialogBox>
  );
};

export default RegisterModal;
