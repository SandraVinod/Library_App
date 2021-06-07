const mongoose=require('mongoose');
mongoose.connect('mongodb+srv://sandra:sandrasandra@ictakfiles.jdgip.mongodb.net/ASSIGMENT?retryWrites=true&w=majority');
const Schema=mongoose.Schema;
const AdminSchema=new Schema({
    email:String,
    password:String
    });
var admindata=mongoose.model('AdminData',AdminSchema,'AdminDatas');    
module.exports=admindata; 
//  const mongoose = require('mongoose');
// mongoose.connect('mongodb://locahost/dbName')
// const dataSchema = new mongoose.Schema({});
// const dataModel = mongoose.model('modelName', dataSchema, 'collectionName');
// module.exports = dataModel;