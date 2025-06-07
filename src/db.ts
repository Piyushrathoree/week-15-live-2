import mongoose, { Schema, model } from 'mongoose';

const mongoUrl: string = 'mongodb://mongo_DB:27017/myDatabase'; // the name mongodb can only be use when the mongo is running into another container and by replacing localhost with mongo, we are telling the app to connect to the mongo container

// Connect to MongoDB
mongoose.connect(mongoUrl)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// Define a User schema
interface IUser {
  name: string;
  age: number;
  email: string;
}

const UserSchema: Schema = new Schema<IUser>({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  email: { type: String, required: true }
});

// Create a User model
export const User = model<IUser>('User', UserSchema);