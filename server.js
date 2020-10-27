require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const routes =require('./routes');
const mustache =require('mustache-express');
const errorH = require('./src/handles/handle');
const flash = require('express-flash');
const session = require('express-session');
//https://www.luiztools.com.br/post/autenticacao-json-web-token-jwt-em-nodejs/
const jwt=require('jsonwebtoken');
const passport = require('passport');
const LocalStrategy=require('passport-local').Strategy;
//criando o servidor
const server = express();
server.use(express.json());
//Ajuda em termos de cors, podendo facilitar a requisição da api
server.use(cors());
server.use(express.static(__dirname+'/public'));
//Ajuda com a questão de facilidade de acesso a dados (post,gets,puts,...)
server.use(bodyParser.urlencoded({extended:false}));
//User.create({ name: 'Uiali', email: 'leilafreitas1@gmail.com.br', password: '123456' });

require('./database');
server.use(session({
    secret:'123',
    resave:false,
    saveUninitialized:false
}));

server.use(passport.initialize());
server.use(passport.session());
server.use(flash());
server.use((req,res,next)=>{
    res.locals.flashes= req.flash();
    res.locals.user=req.user;
    next();
})
const User= require('./src/models/User');
//passport.use(new LocalStrategy(User.authenticate()));

//passport.serializeUser(User.serializeUser());
//passport.deserializeUser(User.deserializeUser());
server.use('/',routes);
server.engine('mst',mustache(__dirname+'src/views/partials','.mst'));
server.set('view engine','mst');
server.set('views',__dirname + '/src/views');
server.listen(process.env.PORT, ()=>{
    console.log(`SERVIDOR RODANDO NA PORTA DE NUMERO: ${process.env.PORT}`);
})