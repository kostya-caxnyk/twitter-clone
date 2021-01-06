import express from 'express';
import fs from 'fs';

import { uploads } from '../core/cloudinary';
import { errorResponse, successResponse } from './../utils/sendResponse';

const uploader = async (path: string) => await uploads(path, 'Images');
class UploadFilesController {
  async uploadImages(req: express.Request, res: express.Response): Promise<void> {
    try {
      const urls = [];
      const files: any = req.files;
      for (let file of files) {
        const { path } = file;
        const newPath = await uploader(path);
        urls.push(newPath);
        fs.unlinkSync(path);
      }
      res.status(200).json({
        images: urls,
      });
    } catch (errors) {
      errorResponse(res, 500, { errors });
    }
  }
}

export default new UploadFilesController();
