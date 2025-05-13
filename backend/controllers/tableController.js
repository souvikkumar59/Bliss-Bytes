import Table from '../models/Table.js';

export const updateTableStatus = async (req, res) => {
  const { tableNo, status } = req.body;
  try {
    const table = await Table.findOneAndUpdate({ tableNo }, { status }, { new: true });
    res.json(table);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
export const getAllTables = async (req, res) => {
  try {
    const tables = await Table.find(); // Ensure you imported Table model
    res.json(tables);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch tables' });
  }
};
