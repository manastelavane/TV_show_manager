import express from 'express';
import { Application} from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/db';
import { errorHandler, notFound } from './middlewares/errorMiddleware';
import cookieParser from 'cookie-parser'

// Routes
import userRoutes from './routes/userRoutes';
import tvshowRoutes from './routes/tvshowRoutes';
import path from 'path';

const app: Application = express();

dotenv.config();

connectDB();

app.use(cors());
app.use(express.json());
app.use(cookieParser())



// User Route
app.use("/api/users", userRoutes);

// Tvshow Route
app.use("/api/tvshow", tvshowRoutes);

// app.use(express.static(path.join(__dirname,"../frontend/build")));
// app.get("*",(req,res)=>{
//     res.sendFile(path.resolve(__dirname,"../frontend/build/index.html"))
// })

app.use(errorHandler);
app.use(notFound);

const PORT = process.env.PORT || 5000;

app.listen(PORT, (): void => console.log(`Server is running on PORT ${PORT}`));
