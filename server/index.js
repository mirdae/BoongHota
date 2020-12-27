import express from 'express';
import helmet from 'helmet';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import snackRouter from './snackRouter';

import './db';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(helmet());
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api/snack', snackRouter);

app.listen(PORT, () => {
  console.log(`✅ Listening on port: ${PORT}`);
});
