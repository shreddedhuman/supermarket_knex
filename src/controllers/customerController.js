const Customer = require('../models/customer');

const createCustomer = async (req, res) => {
  try {
    const customer = await Customer.create(req.body);
    res.status(201).json(customer);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getAllCustomers = async (req, res) => {
  try {
    const customers = await Customer.findAll();
    res.json(customers);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getCustomerById = async (req, res) => {
  const id = req.params.id;
  try {
    const customer = await Customer.findOne(id);
    if (!customer) {
      return res.status(404).json({ message: 'Customer not found' });
    }
    res.json(customer);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateCustomer = async (req, res) => {
  const id = req.params.id;
  try {
    const customer = await Customer.findOne(id);
    if (!customer) {
      return res.status(404).json({ message: 'Customer not found' });
    }
    const updatedCustomer = await Customer.update(id, req.body);
    res.json(updatedCustomer);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteCustomer = async (req, res) => {
  const id = req.params.id;
  try {
    const customer = await Customer.findOne(id);
    if (!customer) {
      return res.status(404).json({ message: 'Customer not found' });
    }
    await Customer.delete(id);
    res.json({ message: 'Customer deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}
module.exports = {
  createCustomer,
  getAllCustomers,
  getCustomerById,
  updateCustomer,
  deleteCustomer
};
