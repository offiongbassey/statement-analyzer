import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { responseHandler } from './helpers/responseHandler';

dotenv.config();

const app = express();

app.use(express.json())

app.use(cors());

app.get('/', (req, res) => {
    responseHandler(res, 200, true, "Backend Successfully Connected");
});

app.use('*', (req, res) => {
    responseHandler(res, 404, false, "Invalid Route");
});

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
    console.log(`Server is running on ${ PORT }`);
});