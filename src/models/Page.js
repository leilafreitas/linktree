
const Sequelize = require('sequelize');

class Page extends Sequelize.Model {
  static init(sequelize){
    super.init(
      {
        
        id_user: Sequelize.INTEGER,
        slug:Sequelize.STRING,
        op_font_color:Sequelize.STRING,
        op_bg_type:Sequelize.STRING,
        op_bg_value:Sequelize.STRING,
        op_prifile_image:Sequelize.STRING,
        op_title:Sequelize.STRING,
        op_fb_pixel:Sequelize.STRING,
      }, 
      {
        sequelize
      }
    );
    return this
  }
}
module.exports = Page;
