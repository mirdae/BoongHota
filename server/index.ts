import express from 'express';
import helmet from 'helmet';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import shopRouter from './shopRouter';
import path from 'path';
import cors from 'cors';

import './db';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(helmet());
app.use(cors());
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, '../client/build')));

app.use('/api/shop', shopRouter);

app.listen(PORT, () => {
  console.log(`✅ Listening on port: ${PORT}`);
});
