import User from "../models/User.js";
import bcrypt from "bcryptjs";
import { createError } from "../utils/error.js";
import jwt from "jsonwebtoken"; // authentication using jwt


export const register = async(req,res,next) =>{
    const  salt = bcrypt.genSaltSync(10);
    const  hash = bcrypt.hashSync(req.body.password, salt); // su dung hash de hash password
    try{
        const newUser=new User({ 
            username:req.body.username,
            email:req.body.email,
            password:hash,
        })
        await newUser.save();
        res.status(200).send("User has been created")
    }catch(err){
        next(err);
    }
};
export const login = async(req,res,next) =>{
    try{
        console.log("lpgin")
        const user= await User.findOne({username:req.body.username})
        if(!user) return next(createError(404,"User not found"))
        const isPasswordCorrect= await bcrypt.compare(req.body.password,user.password) // kiem tra password co trung nhau hay khong
        if(!isPasswordCorrect) return next(createError(400,"Wrong password or username"))
        
        //su dung secret key ="buiquanghthanh" :DDDD
        const token = jwt.sign({id: user._id,isAdmin:user.isAdmin},"buiquangthanh")  // tao ra 1 cookie de xac minh nguoi nay co phai admin hay khong , neu dung thi moi duoc phep xoa 
        const {password,isAdmin,...otherDetails} =user._doc //khong cho gui password khi respone 

        res.cookie("access_token",token,{ httpOnly:true  }).status(200).json({...otherDetails})
        // res.status(200).json(user)
        //
    }catch(err){
        next(err);
    }
}
