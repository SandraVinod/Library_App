const mongoose=require('mongoose');
mongoose.connect('mongodb+srv://sandra:sandrasandra@ictakfiles.jdgip.mongodb.net/ASSIGMENT?retryWrites=true&w=majority');
const Schema=mongoose.Schema;
const AuthorSchema=new Schema({
    title:String,
    tag:String,
    txt:String,
    img:String
})
var Authorsdata=mongoose.model('authorsdata',AuthorSchema);
module.exports=Authorsdata;