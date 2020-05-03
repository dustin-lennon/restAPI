import dotenv from 'dotenv-flow';
dotenv.config();

import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

const app = express();

// Import routes
import postsRoute from './routes/posts.js';

// Middleware
app.use(cors());
app.use(express.json());
app.use('/posts', postsRoute);

// API Routes
app.get('/', function (req, res) {
  res.send('hello world')
});

// Connect to database
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true }, () => {
  console.log('connected to db');
});

app.listen(8443, () => console.log('Example app listening on port 8443!'))