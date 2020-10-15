require('dotenv').config();

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const routes =require('./routes');
const mustache =require('mustache-express');
const errorH = require('./src/handles/handle');
//criando o servidor
const server = express();
//Ajuda em termos de cors, podendo facilitar a requisição da api
server.use(cors());
server.use(express.static(__dirname+'/public'));
//Ajuda com a questão de facilidade de acesso a dados (post,gets,puts,...)
server.use(bodyParser.urlencoded({extended:false}));
//User.create({ name: 'Uiali', email: 'leilafreitas1@gmail.com.br', password: '123456' });

require('./database');
//const User= require('../src/models/User');
//User.create({name:'lalala',email:'eitaaaaaaa',password:'cu'});
server.use('/',routes);
//server.use(errorH.notaFound);
server.engine('mst',mustache(__dirname+'src/views/partials','.mst'));
server.set('view engine','mst');
server.set('views',__dirname + '/src/views');
server.listen(process.env.PORT, ()=>{
    console.log(`SERVIDOR RODANDO NA PORTA DE NUMERO: ${process.env.PORT}`);
})