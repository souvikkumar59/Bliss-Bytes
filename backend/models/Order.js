import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema({
  tableNo: { type: Number, required: true },
  items: [{
    itemId: { type: mongoose.Schema.Types.ObjectId, ref: 'MenuItem' },
    name: String,
    quantity: { type: Number, default: 1 },
  }],
  status: { type: String, default: 'pending' },
}, { timestamps: true }); // Adds createdAt and updatedAt

const Order = mongoose.model('Order', orderSchema);
export default Order;
