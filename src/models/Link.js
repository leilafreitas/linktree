const Sequelize = require('sequelize');

class Link extends Sequelize.Model {
  static init(sequelize){
    super.init(
      {
        id_page: Sequelize.INTEGER,
        status:Sequelize.INTEGER,
        order:Sequelize.INTEGER,
        title:Sequelize.STRING,
        href:Sequelize.STRING,
        op_bg_color:Sequelize.STRING,
        op_text_color:Sequelize.STRING,
        op_border_type:Sequelize.STRING,
      }, 
      {
        sequelize
      }
    );
    return this
  }
}
module.exports = Link;