const express = require("express");
const router = express.Router();
const asynchandler = require("express-async-handler");
const jwtAuthMiddleware  = require("../middlewares/jwtmiddlewares").validateJwtToken;
const {
    registerUser,
    loginUser
}=require("../controllers/userControllers");
const userModel = require("../model/userModel");
router.post("/register" , registerUser);
router.post("/login",loginUser);
router.post("/login",jwtAuthMiddleware,loginUser);


router.get("/details",jwtAuthMiddleware,myDetails);
module.exports=router;