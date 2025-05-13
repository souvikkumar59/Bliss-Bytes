import Order from '../models/Order.js';

export const placeOrder = async (req, res) => {
  const { tableNo, items } = req.body;
  try {
    const newOrder = new Order({
      tableNo,
      items,
      status: 'pending',
    });
    const savedOrder = await newOrder.save();
    res.status(201).json(savedOrder);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateOrderStatus = async (req, res) => {
  const { orderId, status } = req.body;
  try {
    const order = await Order.findByIdAndUpdate(orderId, { status }, { new: true });
    res.json(order);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getAllOrders = async (req, res) => {
  try {
    const { status } = req.query;
    const filter = status ? { status } : {};
    const orders = await Order.find(filter);
    res.json(orders);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch orders' });
  }
};
