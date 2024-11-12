const express = require("express");
const router = express.Router();
const {jwtAuthMiddleware}  = require("../middlewares/jwtmiddlewares");
const {
    registerUser,
    loginUser
}=require("../controllers/userControllers");
router.post("/register" , registerUser);
router.post("/login",loginUser);
router.post("/login",jwtAuthMiddleware,loginUser);
module.exports=router;