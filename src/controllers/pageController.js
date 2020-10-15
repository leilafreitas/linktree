const Page= require('../models/Page');
const Link=require('../models/Link');
const View=require('../models/View');
const Click=require('../models/View');
//Preciso Implementar Função pra Click
module.exports={
    async index(req,res){
        let posts= await Page.findAll({where:{
            slug:req.params.slug
        }});
        let response={};
        let view =await View.findOrCreate({
            where:{id_page:posts[0].dataValues.id},
            defaults:{
                id_page: posts[0].dataValues.id,
                view_date:require('moment')().format('YYYY-MM-DD HH:mm:ss'),
                total:0,
            }
        });
        View.update(
            {
                total:  view[0].dataValues.total + 1
            },
            { 
                where:{id_page: posts[0].dataValues.id}
            }
        )
        .then(count => {
            console.log('Rows updated ' + count);
        });
        if(posts.length > 0){
            let bg='';
            switch(posts[0].dataValues.op_bg_type){
                case 'image':
                    bg = `/media/upload/${posts[0].dataValues.op_bg_value}`;
                    break;
                case 'color':
                    let colors= posts[0].dataValues.op_bg_value.split(',');
                    bg = (colors.length>1)?`linear-gradient(90deg,${colors[0]},${colors[1]})`:`linear-gradient(90deg,${colors[0]},${color[0]})`;
                    break;
            }
            let links=await Link.findAll({where:{
                id_page:posts[0].dataValues.id,
                status:1
            }});

            let link_array= links.map((item)=> item.dataValues);
 
            response.font_color=posts[0].dataValues.op_font_color;
            response.profile_image=posts[0].dataValues.op_prifile_image;
            response.title=posts[0].dataValues.op_title;
            response.fb_pixel=posts[0].dataValues.op_fb_pixel;
            response.bg=bg;
            response.links=link_array; 
            console.log(response);
            return res.render('page',response);  
        }else{
            return res.render('not_found'); 
        }
    },
}