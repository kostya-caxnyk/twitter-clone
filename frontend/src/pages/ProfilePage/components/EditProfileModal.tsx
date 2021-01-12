import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { Button, FormControl, FormGroup, IconButton, TextField } from '@material-ui/core';
import ModalBlock from '../../../components/ModalBlock';
import { selectUserData } from '../../../store/ducks/user/selectors';
import useHomeStyles from '../../HomePage/useHomeStyles';
import { fetchEditUserData } from '../../../store/ducks/user/actionCreators';
import AddAPhotoIcon from '@material-ui/icons/AddAPhotoOutlined';
import UploadImage from '../../../components/UploadImage';

interface IFormData {
  name: string;
  about: string;
  location: string;
  website: string;
}

interface EditProfileModalProps {
  onClose: () => void;
  open: boolean;
}

const formSchema = yup.object().shape({
  name: yup.string().min(1, 'Поле имя не может быть пустым').max(50, 'Не больше 50 символов'),
  about: yup.string().max(160, 'Не больше 160 символов'),
  location: yup.string().max(30, 'Не больше 30 символов'),
  website: yup.string().max(100, 'Не больше 100 символов'),
});

interface IFileData {
  file: File;
  url: string;
}

const EditProfileModal: React.FC<EditProfileModalProps> = ({ onClose, open }) => {
  const s = useHomeStyles();
  const dispatch = useDispatch();
  const { register, handleSubmit, errors } = useForm<IFormData>({
    resolver: yupResolver(formSchema),
  });
  const currentUser = useSelector(selectUserData);
  const [newAvatar, setNewAvatar] = useState<IFileData | null>(null);
  const [newBackgroundImg, setNewBackgroundImg] = useState<IFileData | null>(null);

  const onSubmit = (data: IFormData) => {
    dispatch(fetchEditUserData(data, newAvatar?.file, newBackgroundImg?.file));
    onClose();
  };

  const handleSelectAvatar = (url: string, file: File) => {
    setNewAvatar({ url, file });
  };

  const handleSelectBackgroundImg = (url: string, file: File) => {
    setNewBackgroundImg({ url, file });
  };

  if (!currentUser) {
    return null;
  }

  const backgroundImageUrl = newBackgroundImg?.url || currentUser.backgroundImgUrl;

  return (
    <ModalBlock onClose={onClose} visible={open} title="Изменить профиль">
      <div className={s.editModal}>
        <div style={{ position: 'relative' }}>
          {backgroundImageUrl ? (
            <div
              className={s.editModalBackgroundImg}
              style={{ backgroundImage: `url("${backgroundImageUrl}")` }}
            />
          ) : (
            <div className={s.editModalBlock} />
          )}
          <span className={s.editModalAddBtn}>
            <UploadImage onAddFile={handleSelectBackgroundImg} iconEl={<AddAPhotoIcon />} />
          </span>
        </div>

        <div className={s.editModalAvatar}>
          <img alt={currentUser.name} src={newAvatar?.url || currentUser.avatarUrl} />

          <span className={s.editModalAddBtn}>
            <UploadImage onAddFile={handleSelectAvatar} iconEl={<AddAPhotoIcon />} />
          </span>
          <div className={s.editProfileAvatarBg} />
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>
          <FormControl component="fieldset" fullWidth style={{ padding: '0 15px' }}>
            <FormGroup row>
              <TextField
                variant="outlined"
                className={s.editModalInput}
                label="Имя"
                InputLabelProps={{
                  shrink: true,
                }}
                defaultValue={currentUser.name}
                name="name"
                type="text"
                id="name"
                inputRef={register}
                helperText={errors.name?.message}
                error={!!errors.name}
                fullWidth
              />
              <TextField
                variant="outlined"
                className={s.editModalInput}
                label="О себе"
                InputLabelProps={{
                  shrink: true,
                }}
                type="text"
                id="about"
                rows={3}
                defaultValue={currentUser.about}
                name="about"
                inputRef={register}
                helperText={errors.about?.message}
                error={!!errors.about}
                multiline
                fullWidth
              />
              <TextField
                variant="outlined"
                className={s.editModalInput}
                label="Местоположение"
                InputLabelProps={{
                  shrink: true,
                }}
                defaultValue={currentUser.location}
                name="location"
                type="text"
                id="location"
                inputRef={register}
                helperText={errors.location?.message}
                error={!!errors.location}
                fullWidth
              />
              <TextField
                variant="outlined"
                className={s.editModalInput}
                label="Веб-сайт"
                InputLabelProps={{
                  shrink: true,
                }}
                defaultValue={currentUser.website}
                name="website"
                type="text"
                id="website"
                inputRef={register}
                helperText={errors.website?.message}
                error={!!errors.website}
                fullWidth
              />
              <div className={s.editProfileBtn}>
                <Button variant="contained" color="primary" type="submit">
                  Сохранить
                </Button>
              </div>
            </FormGroup>
          </FormControl>
        </form>
      </div>
    </ModalBlock>
  );
};

export default EditProfileModal;
