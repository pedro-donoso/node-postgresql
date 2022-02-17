// ESTE ARCHIVO SIRVE PARA CONFIGURAR EL SERVIDOR

import express, { json } from 'express';
import morgan from 'morgan';

// IMPORTING ROUTES
import projectRoutes from './routes/projects';

// INITIALIZATION
const app = express();

// MIDLEWARES
app.use(morgan('dev'));
app.use(json());

// ROUTES
app.use('/api/projects', projectRoutes);

export default app;