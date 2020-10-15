const Sequelize = require('sequelize');
const config=require('../config/database');
const User= require('../src/models/User');
const Page= require('../src/models/Page');
const Link= require('../src/models/Link');
const Click= require('../src/models/Click');
const View= require('../src/models/View');

const models=[User,Page,Link,View,Click];
class Database{
    constructor(){
        this.init();
    }
    init(){
        this.connection = new Sequelize(config);
        models
            .map(model=>model.init(this.connection))
            .map(model=>model.associate && model.associate(this.connection.models))
    }
}
module.exports=new Database;