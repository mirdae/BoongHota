import mongoose from 'mongoose';

const shopSchema = new mongoose.Schema({
  name: { type: String, required: true },
  type: { type: String, enum: ['boong', 'ho', 'ta'], required: true },
  geoLocation: { type: Array, required: true },
  address: { type: String, required: true },
  openTime: { type: String, required: true },
  closeTime: { type: String, required: true }
});

const model: any = mongoose.model('Shop', shopSchema);

export default model;
