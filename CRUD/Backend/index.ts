import express from "express";
import conectDB from "./Config/db";
import helmet from "helmet";
import cors from 'cors';
import morgan from 'morgan';
import estroutes from './Routes/Estudiante.routes';
import asigroutes from "./Routes/Asignatura.routes";
import matgroutes from "./Routes/Maestro.routes";
import asistenciaroutes from "./Routes/Asistencia.routes";
import calroutes from "./Routes/Calificacion.routes";
const app = express();

app.use(express.json());
app.use(morgan("dev"));
app.use(cors())
app.use(helmet());
conectDB();

app.use('/', estroutes);
app.use("/", asigroutes);
app.use("/", matgroutes);
app.use("/", asistenciaroutes);
app.use("/", calroutes);
app.listen(3000, ()=> console.log('se ha conectado al puerto 3000'));


