import MenuItem from '../models/MenuItem.js';

export const getMenuItems = async (req, res) => {
  try {
    const menuItems = await MenuItem.find();
    res.json(menuItems);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
   /*export const createMenuItem = async (req, res) => {
  const { name, description, price } = req.body;

  const newMenuItem = new MenuItem({
    name,
    description,
    price,
  });

  try {
    const savedMenuItem = await newMenuItem.save();
    res.status(201).json(savedMenuItem);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}; */