import express from 'express';
import morgan from 'morgan';
import dotenv from 'dotenv';
import passport from 'passport';
import cookieParser from 'cookie-parser';
import cors from 'cors';

import router from './routes';
import { sequelize } from './models';
import passportConfig from './passport';

const app = express();

dotenv.config();
passportConfig(passport);
sequelize.sync({ force: false });

const { PORT } = process.env || 3000;
const { HOST } = process.env || '0.0.0.0';

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(passport.initialize());

app.use(router);

app.listen(PORT, HOST, () => {
  console.log(`Listening on: http://${HOST}:${PORT}/`)
})
