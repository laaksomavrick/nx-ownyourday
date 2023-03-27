import express from 'express';
import bodyParser from "body-parser";
import cors from 'cors';
import config from "./config";
import router from "./router";

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

// app.use

app.use('/api', router);

const port = config.get('port')
const server = app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`);
});
server.on('error', console.error);
