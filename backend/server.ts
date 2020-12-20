import express from 'express';

const app = express();

const PORT = 8888;

app.listen(PORT, () => {
  console.log('server is running on port ' + PORT);
});
