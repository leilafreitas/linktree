'use strict';
var DataTypes = require('sequelize/lib/data-types');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('Pages', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      id_user: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      slug: {
        allowNull: false,
        type: DataTypes.STRING,
        unique: true,
      },
      op_font_color: {
        defaultValue:'#000000',
        allowNull: false,
        type: DataTypes.STRING,
        
      },
      op_bg_type: {
        defaultValue:'color',
        allowNull: false,
        type: DataTypes.STRING,
      },
      op_bg_value: {
        defaultValue:'#FFFFF',
        allowNull: false,
        type: DataTypes.STRING,
      },
      op_prifile_image: {
        defaultValue:'default.png',
        allowNull: false,
        type: DataTypes.STRING,
      },
      op_title: {
        allowNull: true,
        type: DataTypes.STRING,
      },
      op_fb_pixel: {
        allowNull: true,
        type: DataTypes.STRING,
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
    return queryInterface.dropTable('Pages');
  }
};
