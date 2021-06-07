const express=require('express');
const booksRouter=  express.Router();
const Bookdata = require('../model/bookdata');
// const Bookdata=require('../model/bookdata');
function router(nav,nav_right){

;
booksRouter.get('/',(req,res)=>{
    
    Bookdata.find().then(function(books){
        res.render('books',{title:'Library',nav,nav_right,books,user:'user'})
    })
    

    });
 
    booksRouter.get('/:id',(req,res)=>{
        const id= req.params.id;
        Bookdata.findOne({_id:id}).then(function(book){
            res.render('book',{title:'Book',book,nav,nav_right})
        })
        });
        return booksRouter;
}

    module.exports=router;