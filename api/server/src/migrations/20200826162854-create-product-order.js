'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Product_Orders', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      total: {
        type: Sequelize.DECIMAL(10,2)
      },
      add_egg: {
        type: Sequelize.BOOLEAN
      },
      add_cheese: {
        type: Sequelize.BOOLEAN
      },
      obs: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      productId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {model:'Products', key:'id'}
      },
      orderId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {model:'Orders', key:'id'}
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Product_Orders');
  }
};