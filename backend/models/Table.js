import mongoose from 'mongoose';

const tableSchema = new mongoose.Schema({
  tableNo: { type: Number, required: true, unique: true },
  status: { type: String, enum: ['empty', 'occupied'], default: 'empty' },
});

const Table = mongoose.model('Table', tableSchema);
export default Table;
