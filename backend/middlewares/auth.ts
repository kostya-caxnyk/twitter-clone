import express from 'express';

export default (req: express.Request, res: express.Response, next: any) => {
  if (!req.user) {
    return res.status(401).send('You are not authorized!');
  }
  next();
};
