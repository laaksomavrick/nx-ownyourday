import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import router from './router';
import config from './config';
import { errorHandlingMiddleware } from './middleware';

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.use('/api', router);

app.use(errorHandlingMiddleware);

const port = config.get('port');
app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`);
});
