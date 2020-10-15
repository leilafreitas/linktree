'use strict';
var DataTypes = require('sequelize/lib/data-types');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('Links', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      id_page: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      status: {
        defaultValue: 0,
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      order:{
        allowNull:false,
        type: DataTypes.INTEGER
      },
      title:{
        allowNull:false,
        type: DataTypes.STRING
      },
      href:{
        allowNull:false,
        type: DataTypes.STRING
      },
      op_bg_color:{
        allowNull:true,
        type: DataTypes.STRING
      },
      op_text_color:{
        allowNull:true,
        type: DataTypes.STRING
      },
      op_border_type:{
        allowNull:true,
        type: DataTypes.STRING
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Links');
  }
};
