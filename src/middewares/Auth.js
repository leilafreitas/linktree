module.exports.isLogged= (req,res,next) =>{
    if(!req.session.login) {
        res.redirect("/admin/login");
        return; // the buck stops here... we do not call next(), because
                // we don't want to proceed; instead we want to show a login page
      }
    
      //  the user is logged in, so call next()
      next();
    
}