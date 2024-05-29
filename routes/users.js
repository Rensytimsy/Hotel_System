import express from "express";
import {
    createUsers,
    updateUser,
    deleteUser,
    getUser,
    getAllUsers
} from "../controllers/userController.js";
const routes = express.Router();

//Create Users.
routes.post("/register", createUsers);
//update Users.
routes.put("/:id", updateUser);
//delete Users
routes.delete("/:id", deleteUser);
//get a User
routes.get("/:id", getUser);
//get all users
routes.get("/", getAllUsers);



export default  routes;