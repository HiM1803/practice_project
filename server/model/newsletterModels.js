const mongoose = require("mongoose");
const newsletterSchema = mongoose.Schema({
    title:{
        type : String , 
        require : [ true , "please add title"],
    },
    author:{
        type : String , 
        require : [ true , "please add author name"],
    },
    date:{
        type : String , 
        require : [ true , "please add date"],
    },
    imageurl:{
        type : Number , 
        require : [ true , "please add image url"],
    },
    description:{
        type : String , 
        require : [ true , "please add description"],
    },
},
{
    timestamps : true ,
});
module.exports = mongoose.model("User" , newsletterSchema);