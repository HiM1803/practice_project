const asyncHandler = require("express-async-handler");
const newsletter = require("../model/newsletterModels");

const getnewsletter = asyncHandler(async(req,res)=>{
    try{
        const data = await newsletter.find({});
        res.send()
    }catch(err){
        return res.status(404).json({err:err.message})
    }
})

const createnewsletter = asyncHandler(async(req,res)=>{

})

module.exports = {getnewsletter,createnewsletter};