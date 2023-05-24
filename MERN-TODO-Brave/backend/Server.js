// source video : https://www.youtube.com/watch?v=PvMDWbAPPK4

import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import routes from './TodoRoute.js';
import cors from "cors";


dotenv.config();
const app = express(); 

app.use(express.json())
app.use(cors())
app.use(routes)


mongoose
    .connect(process.env.MONGODB_URL)
    .then(() => console.log(`Connected to MongoDB ......${process.env.MONGODB_URL} `))
    .catch((err) => console.log(err))
 



const PORT = process.env.PORT || 8000
app.listen(process.env.PORT, () => { console.log(`Server is running on port -.env file  : ${process.env.PORT}`); })

