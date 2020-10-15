const Sequelize = require('sequelize');

class Click extends Sequelize.Model {
  static init(sequelize){
    super.init(
      {
        id_link: Sequelize.INTEGER,
        click_date:Sequelize.DATE,
        total:Sequelize.INTEGER,
      }, 
      {
        sequelize
      }
    );
    return this
  }
}
module.exports = Click;