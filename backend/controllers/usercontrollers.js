const ErrorHander = require("../utils/errorhandler");
const cathAsyncErrors = require("../middleware/catchAsyncError");
const User = require("../models/userModel");
const sendToken = require("../utils/jwtToken");

// Register a User 
exports.registerUser = cathAsyncErrors(async (req,res,next)=>{
    const {name,email,password} = req.body;
    const user = await User.create({
        name,email,password
    });
    sendToken(user, 201, res);
});

// Login User

exports.loginUser = cathAsyncErrors (async(req,res,next)=>{
    const {email,password} = req.body;
    // checking if user given password and email both
    if(!email || !password){
        return next(new ErrorHander("Please Enter Email and Password",400));
    }
    const user = await User.findOne({ email }).select("+password");
    if(!user){
        return next(new ErrorHander("Invalid Email or Password",401));
    }
    const isPasswordMatched = await user.comparePassword(password);
    if(!isPasswordMatched){
        return next(new ErrorHander("Invalid Email or Password",401));
    }
    sendToken(user, 200, res);
});


// Logout User

exports.logout = cathAsyncErrors(async(req, res, next)=>{
    res.cookie("token", null,{
        expires: new Date(Date.now()),
        httpOnly: true,
    });
    res.status(200).json({
        success: true,
        message: "Logout Successful"
    });
});


// User Profile 
exports.getUserProfile = cathAsyncErrors(async (req, res, next) => {
    const user = await User.findById(req.user.id);

    res.status(200).json({
        success: true,
        user,
    });
});