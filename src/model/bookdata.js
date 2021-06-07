const mongoose=require('mongoose');
mongoose.connect('mongodb+srv://sandra:sandrasandra@ictakfiles.jdgip.mongodb.net/ASSIGMENT?retryWrites=true&w=majority');
const Schema=mongoose.Schema;
const BookSchema= new Schema(
    {
        title:String,
        author:String,
        genre:String,
        img:String

    }
)
var Bookdata=mongoose.model('bookdata',BookSchema);
module.exports=Bookdata;