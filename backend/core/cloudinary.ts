import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
});

export const uploads = (file: any, folder: string) => {
  return new Promise((resolve, reject) => {
    cloudinary.uploader.upload(
      file,
      {
        resource_type: 'auto',
        folder,
      },
      (error: any, result: any) => {
        if (error || !result) {
          reject();
        }
        resolve({
          id: result.public_id,
          url: result.url,
        });
      },
    );
  });
};
