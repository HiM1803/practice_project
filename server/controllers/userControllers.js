const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const User = require("../model/userModel"); // Corrected variable name to 'User'
require("dotenv").config();
const JWT_SECRET = "xyz123abc";
const registerUser = asyncHandler(async (req, res) => {
    const { firstName, lastName, age, gender, bloodGroup, email, phoneNumber, password } = req.body;

    // Validate all required fields
    if (!firstName || !lastName || !age || !gender || !bloodGroup || !email || !phoneNumber || !password) {
        res.status(400);
        throw new Error("Please fill all fields");
    }

    // Check if the user already exists
    const userExists = await User.findOne({ email });
    if (userExists) {
        return res.status(400).json({ message: "User already exists" });
    }

    // Hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create a new user
    const newUser = await User.create({
        firstName,
        lastName,
        age,
        gender,
        bloodGroup,
        email,
        phoneNumber,
        password: hashedPassword,
    });

    res.status(201).json({ message: "User registered successfully", user: newUser });

   
    
});

const loginUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        res.status(400);
        throw new Error("Please provide email and password");
    }
    const user = await User.findOne({ email });
    const token = jwt.sign({id:user._id},JWT_SECRET,{expiresIn:"1h"});
    if (user && (await bcrypt.compare(password, user.password))) {
        res.status(200).json({
            message: "User logged in successfully",token
           
            // user: {
            //     id: user._id,
            //     firstName: user.firstName,
            //     lastName: user.lastName,
            //     email: user.email,
            // },
        });
    } else {
        res.status(401);
        throw new Error("Invalid email or password");
    }
});

const userProfile=asyncHandler(async(req,res)=>{
    // const {email}=req.body

    const id=req.user.id

    const user=await User.findById(id)
    // console.log(user.age)
    res.send({user})
})

const updateuserprofile = async (req,res)=>{
    const {firstName,email,phoneNumber,age} = req.body;

    const user = User.findOne({email});
    const updatedUser = await user.findOneAndUpdate(
        {email},
        {firstName,phoneNumber,age},
        {new:true},
    );
    res.json({user:updatedUser});
    console.log("updated");
}

module.exports = { registerUser, loginUser,userProfile,updateuserprofile };