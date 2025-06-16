// server.js
console.log("Server file is running...");

import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import connectDB from './config/mongodb.js';
import connectCloudinary from './config/cloudinary.js';

// app configure
const app = express();
const port = 4000;
connectDB()
connectCloudinary()

// middlewares
app.use(express.json());
app.use(cors());

// api endpoints
app.use('/api/admin',adminRouter)

app.get('/', (req, res) => {
  res.send('API WORKING GREAT');
});

// start server
app.listen(port, () => {
  console.log('🚀 Server Started at http://localhost:' + port);
});
