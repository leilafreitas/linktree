const Sequelize = require('sequelize');

class View extends Sequelize.Model {
  static init(sequelize){
    super.init(
      {
        id_page: Sequelize.INTEGER,
        view_date:Sequelize.DATE,
        total:Sequelize.INTEGER,
        
      }, 
      {
        sequelize
      }
    );
    return this
  }
}
module.exports = View;