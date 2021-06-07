const express=require('express');
const multer=require('multer');
const adminRouter=express.Router();
const path=require('path');
const Bookdata = require('../model/bookdata');
const Authorsdata=require('../model/authorsdata');
const nav=[{link:'/admin/home',name:'Home'},
{link:'/admin/books',name:'Books'},
{link:'/admin/authors',name:'Authors'},
{link:'/admin/addbooks',name:'Add Books'},
{link:'/admin/addauthors',name:"Add Authors"}
]
var storage=multer.diskStorage({
    destination:function(req,file,cb){
      cb(null,'./public/images/authors')
    },
    filename:function(req,file,cb){
      cb(null,file.originalname)
    }
})

var storage1=multer.diskStorage(
    {
        destination:function(req,file,cb){
         cb(null,'./public/images/')
        },
        filename:function(req,file,cb){
            cb(null,file.originalname)
        }
    }
    
)

function router(nav_right){
    
    adminRouter.get('/',(req,res)=>{
    res.render('home',{title:"Admin Login",heading:'Welcome to Library App Admin Page!',
    nav,nav_right,img1:'image3.jpg'})
    })
    adminRouter.get('/home',(req,res)=>{
        res.redirect('/admin');
    })
    adminRouter.get('/addBooks',(req,res)=>{
        res.render('addbooks',{title:'Add Books',nav,nav_right})
     });
    adminRouter.post('/addbooks', function(req, res){
    
    var upload=multer({storage: storage1}).single('img');
    upload(req,res,(err)=>{
        
            if(err){
              console.log(err);
             }
             else{
                 
                 console.log('File Uploaded!');
                 var item={
                     title:req.body.title,
                     author:req.body.author,
                     genre:req.body.genre,
                     img:req.file.filename
                 }
                 console.log(item);
                 var book=Bookdata(item);
            book.save();
            res.redirect('/admin/books');
             }
         } )
             
      });
      
      adminRouter.get('/addauthors',(req,res)=>{
        res.render('addauthors',{title:'Add Authors',nav,nav_right})
        }); 
       
   adminRouter.get('/update/:id',(req,res)=>{
      var id=req.params.id;
      Bookdata.findOne({_id:id}).then(function(book){
          res.render('editbook',{title:'Edit Book',nav,nav_right,book})
      })

   })
   adminRouter.post('/edit/:id',(req,res)=>{
       var id=req.params.id;
      
       var upload=multer({storage: storage1}).single('img');
       upload(req,res,(err)=>{
       if(err){
           console.log(err);
           
       }
       else{
           if(req.file){
               var item={
                title:req.body.title,
                author:req.body.author,
                genre:req.body.genre,
                img:req.file.filename
                   
                 }
           }
           else {
               var item={
                title:req.body.title,
                author:req.body.author,
                genre:req.body.genre
                             
               }
           }
   
   Bookdata.updateOne({_id:id},{$set:item},function(err,result){
     if(err){
         console.log("Couldn't Update!")
          }
          else{
            res.redirect('/admin/books')
          }
        })
    }
 
})
       })
    
adminRouter.get('/delete/:id',(req,res)=>{
  var id=req.params.id;
  Bookdata.deleteOne(
      {_id:id}).then(function(book){
          res.redirect('/admin/books')
      })
   })
   adminRouter.get('/authors/update/:id',(req,res)=>{
       var id=req.params.id;
       Authorsdata.findOne({_id:id}).then(function(author){
           res.render('editauthor',{title:'Edit Author',nav,nav_right,author})
       })
   })
   adminRouter.post('/authors/edit/:id',(req,res)=>{
       var id=req.params.id;
       
    var upload=multer({storage: storage}).single('img');
    upload(req,res,(err)=>{
    if(err){
        console.log(err);
        
    }
    else{
        if(req.file){
            var item={
                                 title:req.body.title,
                                 tag:req.body.tag,
                                 txt:req.body.txt,
                                 img:req.file.filename
                             }
        }
        else {
            var item={
                title:req.body.title,
                tag:req.body.tag,
                txt:req.body.txt,
                
            }
        }
        Authorsdata.updateOne({_id:id},{$set:item},function(err,result){
            if(err){
                 console.log(err);
             }
              else{
                  res.redirect('/admin/authors')
              }
  

 })
    }
})
      
      
})
  
   
  adminRouter.get('/books',(req,res)=>{
        Bookdata.find().then(function(books){
        res.render('books',{title:'Library',nav,nav_right,books,user:'admin'})
    })
    

    });
 
    adminRouter.get('/books/:id',(req,res)=>{
        const id= req.params.id;
        Bookdata.findOne({_id:id}).then(function(book){
            // res.redirect('/books/book._id')
            res.render('book',{book,nav,nav_right,title:'Book'})
        })
        
        });
        
        adminRouter.post('/addauthors',(req,res)=>{
                
            var upload=multer({storage: storage}).single('img');
            upload(req,res,(err)=>{
            if(err){
                console.log(err);
                
            }
            else{
                var item={
                    title:req.body.title,
                    tag:req.body.tag,
                    txt:req.body.txt,
                    img:req.file.filename
                }
                var authors=Authorsdata(item);
                authors.save();
                res.redirect('/admin/authors')  
            }
            })
            
        }) ;
        adminRouter.get('/authors/delete/:id',(req,res)=>{
         var id=req.params.id;
         Authorsdata.deleteOne({_id:id}).then(function(authors){
             res.redirect('/admin/authors')
         })
        })
        adminRouter.get('/authors',(req,res)=>{
          Authorsdata.find().then(function(authors){
            res.render('authors',{title:'Authors',nav,nav_right,authors,user:'admin'})  
          })
        })
        adminRouter.get('/authors/:id',(req,res)=>{
            var id=req.params.id;
            Authorsdata.findOne({_id:id}).then(function(author){
                res.render('author',{title:'Author',nav,nav_right,author})
            })
        })

return adminRouter;
}
module.exports=router;
