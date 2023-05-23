import express from 'express';
import path from 'path';
import cors from 'cors';

const port = process.env.PORT ? process.env.PORT : 3000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(express.static(path.join(__dirname, '../dist')));

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist/index.html'), (err) => {
    if (err) {
      res.status(500).send(err);
    }
  });
});

app.listen(port, () => {
  console.log(`Securely Running at ${port}`);
});
