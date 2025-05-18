import express from 'express';
import CallingRoutes from './routes/CallingRoute';
const app = express();
app.use(express.json()); 


app.use('/calling', CallingRoutes);


export default app;
