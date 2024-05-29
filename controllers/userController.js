import Users from "../models/users.js";
// import createError from "../utils/error.js"

//Create User
export const createUsers = async(req, res, next) => {
   try{
    const newUser = new Users({
        first_name: req.body.first_name,
        second_name: req.body.second_name,
        email_address: req.body.email_address,
        password: req.body.password
    })

    await newUser.save();
    res.status(200).send("User created");
   }catch (err){
    next(err);
   }
}
//Update User
export const updateUser = async(req, res, next) => {
    try{
        //Updating a user one will be using a specific id
        const updatedUser = await Users.findByIdAndUpdate(req.params.id, {$set : req.body},{new: true});
        res.status(200).json(updatedUser);
    }catch (err){
        next(err);
    }
}
//Delete user
export const deleteUser = async(req, res, next) => {
    try{
        //we get the user by id and delete 
    const deletedUser = await Users.findByIdAndDelete(req.params.id, {new: true});
    res.status(200).json(deletedUser);
    }catch (err){
        next(err);
    }
}

//get user
export const getUser = async(req, res, next) => {
    //Gets a user by the id passed on the request parameter
    try{
    const getSingleUser = await Users.findById(req.params.body);
    res.status(200).json(getSingleUser);
    }catch (err){
        next(err);
    }
}

//get all users
export const getAllUsers = async(req, res, next) => {
    try{
        const getAllTheUsers = await Users.find();
        res.status(200).json(getAllTheUsers);
    }catch (err){
        next(err);
    }
}