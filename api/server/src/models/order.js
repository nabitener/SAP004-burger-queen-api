'use strict';
module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define('Order', {
    name: DataTypes.STRING,
    table: DataTypes.INTEGER,
    client: DataTypes.STRING
  }, {});
  Order.associate = function(models) {
    Order.hasMany(models.Product_Order)
  };
  return Order;
};