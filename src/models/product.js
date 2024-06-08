const knex = require('../config/config');

const create = async (body) => {
    try {
        const inserted = await knex("products").insert(body).returning([
            "product_id",
            "name",
            "description",
            "price",
            "sku",
        ]);
        return inserted[0];
    } catch (error) {
        throw error;
    }
};

const findAll = async () => {
    try {
        return await knex.select("*").from("products");
    } catch (error) {
        throw error;
    }
};

const findOne = async (id) => {
    try {
        return await knex.select("*").from("products").where({ product_id: id }).first();
    } catch (error) {
        throw error;
    }
};

const update = async (id, bodyToUpdate) => {
    try {
        const updated = await knex("products")
            .where({ product_id: id })
            .update(bodyToUpdate)
            .returning([
                "product_id",
                "name",
                "description",
                "price",
                "sku",
            ]);
        return updated[0];
    } catch (error) {
        throw error;
    }
};

const deleteProduct = async (id) => {
    try {
        await knex("products").where({ product_id: id }).del();
    } catch (error) {
        throw error;
    }
};

module.exports = {
    create,
    findAll,
    findOne,
    update,
    delete: deleteProduct
};
