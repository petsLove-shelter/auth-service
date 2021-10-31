import express from 'express';
import * as dotenv from 'dotenv';
// morgan sirve para ver las peticiones a la api cuando esta corriendo el servidor en la consola
// import morgan from "morgan";
// sirve para comunicarnos con otros tipos de servidores de desarrollo
import cors from 'cors';
// import path from 'path';
dotenv.config();

// initializations
const app = express();

// middleware
// app.use(morgan("dev"));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// routes
app.get('/', (req, res) => {
  res.send(`Welcome to Petslove 🦄`);
});

// settings
const PORT = process.env.PORT || 3000;
app.set('port', PORT);
console.log('Server on port', app.get('port'));

export default app;
