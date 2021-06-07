const express=require('express');
const app= new express();
const port=process.env.PORT || 8002;
const alert=require('alert');
const path=require('path');



const nav_right=[
    {link:'/signup',name:'Sign Up'},
    {link:'/login',name:'Login'}
]
const nav=[{link:'/home',name:'Home'},
{link:'/books',name:'Books'},
{link:'/authors',name:'Authors'}

]

app.use(express.urlencoded({extended : true}));
app.use(express.static('./public'));
app.set('view engine','ejs');
app.set('views','./src/views');
const logindata=require('./src/model/logindata');
const admindata=require('./src/model/admindata');


const booksRouter=require('./src/routes/booksRoutes')(nav,nav_right);
app.use('/books',booksRouter);
const authorsRouter=require('./src/routes/authorRoutes')(nav,nav_right);
app.use('/authors',authorsRouter);
const adminRouter=require('./src/routes/adminRoutes')(nav_right);
app.use('/admin',adminRouter);

app.get('/',(req,res)=>{
res.render('index',{title:'Library',nav,nav_right,heading:'Welcome to Library App!',img1:'image1.jpg'})
});
app.get('/home',(req,res)=>{
    res.render('home',{title:'Library',nav,nav_right,heading:'Welcome to Library App!',img1:'image3.jpg',})
})
// app.get('/home',(req,res)=>{
//     res.render('home',{title:'Library',nav,nav_right,heading:'Welcome to Library App!',
//     img1:'image1.jpg',})
// })



 

app.get('/login',(req,res)=>{
    res.render('login',{title:'Login',nav_right,alert:""})
})
app.post('/login',(req,res)=>{
       admindata.findOne({$and:[{email:req.body.email},{password:req.body.pwd}]}).then(admin=>{
           if(admin){
               res.redirect('/admin')
           }
           
       })
       
        logindata.findOne({$and:[{email:req.body.email},{password:req.body.pwd}]}).then(user=>{
        if(user){
             res.redirect('/home')
            
                  }
            else{
                    res.render('login',{title:'Login',nav_right,alert:'Username or Password incorrect!'})
              }
       
   })
    
})
app.get('/signup',(req,res)=>{
    
    res.render('signup',{title:'Signup',nav_right})
})
app.post('/signup',(req,res)=>{
    var item={
        username:req.body.uname,
        email:req.body.email,
        password:req.body.pwd
        }
        console.log(item);
    var login=logindata(item);
    login.save();
    res.redirect('/login')

})
 


app.listen(port,()=>{console.log('Server Ready at:'+port)}); 