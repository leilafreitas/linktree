const User= require('../models/User');

module.exports={
    async store(req,res){
        const user=await User.create({name:'Leila',email:'leilaf@gmail.com',password:'1234'})
        return res.json(user);
    }
}