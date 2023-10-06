import mongoose from 'mongoose';
import { app } from './app';

const start = async () => {
  if (!process.env.JWT_KEY) {
    throw new Error('JWT_KEY not found');
  }
  if (!process.env.MONGO_URI) {
    throw new Error('MONGO_URI not found');
  }

  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('Connected To MongoDB');
  } catch (error) {
    console.log(error);
  }

  app.listen(3000, () => {
    console.log('Listening on port 3000!');
  });
};

start();
