const Product = require('../models/product');

const createProduct = async (req, res) => {
    try {
        const product = await Product.create(req.body);
        res.status(201).json(product);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getAllProducts = async (req, res) => {
    try {
        const products = await Product.findAll();
        res.json(products);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};  

const getProductById = async (req, res) => {
    const id = req.params.id;
    try {
        const product = await Product.findOne(id);
        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }
        res.json(product);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const updateProduct = async (req, res) => {
    const id = req.params.id;
    try {
        const product = await Product.findOne(id);
        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }
        const updatedProduct = await Product.update(id, req.body);
        res.json(updatedProduct);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};  

const deleteProduct = async (req, res) => {
    const id = req.params.id;
    try {
        const product = await Product.findOne(id);
        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }
        await Product.delete(id);
        res.json({ message: 'Product deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}   

module.exports = {
    createProduct,
    getAllProducts,
    getProductById,
    updateProduct,
    deleteProduct
}   