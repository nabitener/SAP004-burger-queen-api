'use strict';
module.exports = (sequelize, DataTypes) => {
  const Product_Order = sequelize.define('Product_Order', {
    total: DataTypes.DECIMAL(10,2),
    add_egg: DataTypes.BOOLEAN,
    add_cheese: DataTypes.BOOLEAN,
    obs: DataTypes.STRING
  }, {});
  Product_Order.associate = function(models) {
    Product_Order.belongsTo(models.Product)
    Product_Order.belongsTo(models.Order)
  };
  return Product_Order;
};