const knex = require('../config/config.js');

const create = async (body) => {
  try {
    const inserted = await knex("customers").insert(body).returning([
      "customer_id",
      "first_name",
      "last_name",
      "email",
      "phone",
      "street",
      "postal_code",
      "neighborhood",
      "city",
    ]);
    return inserted[0];
  } catch (error) {
    throw error;
  }
};

const findAll = async () => {
  try {
    return await knex.select("*").from("customers");
  } catch (error) {
    throw error;
  }
};

const findOne = async (id) => {
  try {
    return await knex.select("*").from("customers").where({ customer_id: id }).first();
  } catch (error) {
    throw error;
  }
};

const update = async (id, bodyToUpdate) => {
  try {
    const updated = await knex("customers")
      .where({ customer_id: id })
      .update(bodyToUpdate)
      .returning([
        "customer_id",
        "first_name",
        "last_name",
        "email",
        "phone",
        "street",
        "postal_code",
        "neighborhood",
        "city",
      ]);
    return updated[0];
  } catch (error) {
    throw error;
  }
};

const deleteCustomer = async (id) => {
  try {
      await knex("customers").where({ customer_id: id }).del();
  } catch (error) {
      throw error;
  }
};

module.exports = {
  create,
  findAll,
  findOne,
  update,
  delete: deleteCustomer
};
