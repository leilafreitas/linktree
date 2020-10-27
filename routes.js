const express=require('express');
const router=express.Router();
const HomeController=require('./src/controllers/homeController');
const AdminController=require('./src/controllers/adminController');
const PageController=require('./src/controllers/pageController');
const AuthMiddleware= require('./src/middewares/Auth');
router.get('/',HomeController.index);
router.get('/admin',AuthMiddleware.isLogged,AdminController.index);
router.get('/admin/login',AdminController.login);
router.post('/admin/login',AdminController.loginAction)
router.get('/admin/signup',AdminController.signup);
router.post('/admin/signup',AdminController.signupAction);

//router.post('/admin',AdminController.newUser);
router.get('/:slug',PageController.index);
module.exports=router;