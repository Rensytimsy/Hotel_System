import User from "../models/users.js";
import bcrypt from "bcryptjs";
import createError  from "../utils/error.js";
import jwt from "jsonwebtoken";

//The code below handles user Registration
export const userRegister = async(req, res, next) => {
    try{
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt);

        const user = new User({
            first_name: req.body.first_name,
            second_name: req.body.second_name,
            email_address: req.body.email_address,
            password: hash
        });


        await user.save();
        res.status(200).json(`user ${user.first_name} has been created`);
    }catch (err){
        // next(err);
        //Below we can replace the code with just next(createError(404, "This route not working"));
        const error = new Error();
        error.message = "This route not working";
        error.status = 404;
        res.status(error.status).json({
            success: false,
            message: error.message,
            status: error.status,
            stack: error.stack
        });
    }
};

//The code below handles user login
export const userLogin = async(req, res, next) => {
    try{
        //This is for checking the usernames if they match names present in the database 
        const user = await User.findOne({first_name: req.body.first_name, second_name: req.body.second_name});
        if (!user) return next(createError(404, "The user is not present, try different names"));
        //the line of code below takes two parameters 
          /*
            1.The password to check
            2.The passwords to be compared with
          */
        const correctPassword = await bcrypt.compare(req.body.password, user.password);
        if (!correctPassword) return next(createError("The password is wrong try a different password"));

        const token = jwt.sign({id: user._id, isAdmin: user.isAdmin}, process.env.JWT_KEY);

        const {password ,...otherDetails} = user._doc;
        //Below we are using cookie to avoid exposing users data
        res
        .cookie("access_token", token, {
            httpOnly: true,
        }).status(200).json({...otherDetails});
    }catch (err){
        next(createError(404, "Somethig went wrong during login"));
    }
}


