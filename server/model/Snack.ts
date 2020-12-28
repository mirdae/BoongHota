import mongoose from 'mongoose';

const snackSchema = new mongoose.Schema({
  storeName: { type: String, required: true },
  food: { type: String, enum: ['boong', 'ho', 'ta'], required: true },
  locationNum: { type: Array, required: true },
  location: { type: String, required: true },
  time: { type: Array, required: true },
});

const model: any = mongoose.model('Snack', snackSchema);

export default model;
