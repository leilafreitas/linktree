
const { authenticate } = require("passport");
const User= require('../models/User');
const Page=require('../models/Page');
const bcrypt=require('bcrypt');
var jwt = require('jsonwebtoken');

module.exports={
    async index(req,res){
        const user = await User.findOne({where:{email:req.session.login}});
        const pages = await Page.findAll({where:{id_user:user.id}});
        
        return res.render('index');
    },
    login(req,res){
        return res.render('login');
    },
    async loginAction(req,res){

        const user= await User.findOne({where:
            {email:req.body.email}
        });
        if(!user){
            console.log('email nao achado');
            req.flash('error','E-mail ou senha não conferem');
            res.redirect('/admin/login');
            return;

        }
        const match= await bcrypt.compare(req.body.password , user.password);
        if(!match){
            console.log('senhas não conferem');
            req.flash('error','E-mail ou senha não conferem');
            res.redirect('/admin/login');
            return;
        }
        //req.body.id=user.id;
        req.session.login = req.body.email;
        res.redirect('/admin');

    },
    signup(req,res){
        res.render('cad_user');
    },
    async signupAction(req,res){
        let password = await bcrypt.hash(req.body.password,10);
        let name= req.body.name;
        let email= req.body.email;

        const verify= await User.findOne({where:{email}});
        if(verify){
            req.flash('error','E-mail já cadastrado');
            res.redirect('/admin/signup');
            return;
        }
        let user = await User.create({name,email,password});
        //DEPOIS QUERO LOGAR ESSE ABENÇOADO 
        res.redirect('/');
        


    },
    logout(req,res){
        /** */
        req.session.destroy();
        res.redirect('/admin/login');
    },




}