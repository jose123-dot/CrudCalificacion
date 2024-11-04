import express from "express";
import conectDB from "./Config/db";
import helmet from "helmet";
import cors from 'cors';
import estroutes from './Routes/Estudiante.routes'
const app = express();

app.use(express.json());
app.use(cors())
app.use(helmet());
conectDB();

app.use('/', estroutes);
app.listen(3000, ()=> console.log('se ha conectado al puerto 3000'));


