import mongoose from 'mongoose';

const snackSchema = new mongoose.Schema({
  storeName: { type: String, required: true },
  foodtype: { type: String, enum: ['boong', 'ho', 'ta'], required: true },
  longitude: { type: String, required: true },
  latitude: { type: String, required: true },
  address: { type: String, required: true },
  time: { type: Array, required: true }
});

const model = mongoose.model('Snack', snackSchema);

export default model;
