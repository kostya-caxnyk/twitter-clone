import express from 'express';

enum Status {
  SUCCESS = 'success',
  ERROR = 'error',
}

export const errorResponse = (res: express.Response, code: number, errors: object = {}) => {
  res.status(code).json({
    status: Status.ERROR,
    ...errors,
  });
};

export const successResponse = (res: express.Response, code: number, data: object = {}) => {
  res.status(code).json({
    status: Status.SUCCESS,
    ...data,
  });
};
