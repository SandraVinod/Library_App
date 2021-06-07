const mongoose=require('mongoose');
mongoose.connect('mongodb+srv://sandra:sandrasandra@ictakfiles.jdgip.mongodb.net/ASSIGMENT?retryWrites=true&w=majority');
const Schema=mongoose.Schema;
const loginSchema=new Schema({
    username:String,
    email:String,
    password:String
    });
var logindata=mongoose.model('loginData',loginSchema);    
module.exports=logindata;  