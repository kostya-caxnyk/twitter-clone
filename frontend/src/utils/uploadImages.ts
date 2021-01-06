import axios from 'axios';
import { ImageData } from '../store/types';

const uploadImages = async (files: File[]): Promise<ImageData[]> => {
  if (!files.length) {
    return [];
  }
  const form = new FormData();
  files.forEach((file) => {
    form.append('images', file);
  });
  const { data } = await axios.post<{ images: ImageData[] }>('/images', form, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  return data.images;
};

export default uploadImages;
