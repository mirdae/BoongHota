import express from 'express';
import helmet from 'helmet';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import shopRouter from './shopRouter';
import path from 'path';
import cors from 'cors';
import csp from 'helmet-csp';

import './db';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(helmet());
app.use(
  csp({
    directives: {
      defaultSrc: ['*'],
      scriptSrc: ['*'],
      imgSrc: ['*'],
      styleSrc: ['*', "'unsafe-inline'"],
    },
  })
);
app.use(cors());
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, '../../client/build')));

app.use('/api/shop', shopRouter);

app.use((req, res) => {
  console.log(path.join(__dirname, '../../client/build/index.html'));
  res.sendFile(path.join(__dirname, '../../client/build/index.html'));
});

app.listen(PORT, () => {
  console.log(`✅ Listening on port: ${PORT}`);
});
