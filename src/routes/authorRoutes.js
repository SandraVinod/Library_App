const express=require('express');
const authorsRouter=express.Router();
const Authorsdata=require('../model/authorsdata');
function router(nav,nav_right){
   
    
    authorsRouter.get('/',(req,res)=>{
        Authorsdata.find().then(function(authors){
            res.render('authors',{title:'Authors',nav,nav_right,authors,user:'user'})
        })
        
    });
    authorsRouter.get('/:id',(req,res)=>{
        const id=req.params.id;
        Authorsdata.findOne({_id:id}).then(function(author){
            res.render('author',{title:'Author',nav,nav_right,author})
        })
        
    })
    return authorsRouter;
}
module.exports=router;