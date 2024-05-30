import express from "express";
import {
    updateUser,
    deleteUser,
    getUser,
    getAllUsers
} from "../controllers/userController.js";
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyTokens.js";
const routes = express.Router();


// routes.get("/checkauth", verifyToken, (req, res, next) => {
//     res.send("Hello user you are logged in");
// });

// routes.get("/checkuser/:id", verifyUser, (req, res, next) => {
//     res.send("Hello user you are logged in and you have sudo functionality");
// });

// routes.get("/checkadmin/:id", verifyAdmin, (req, res, next) => {
//     res.send("Hello admin you are logged in and you have sudo functionality");
// });


//update Users.
routes.put("/:id", verifyUser, updateUser);
//delete Users
routes.delete("/:id", verifyUser, deleteUser);
//get a User
routes.get("/:id", verifyUser, getUser);
//get all users
routes.get("/", verifyAdmin, getAllUsers);



export default  routes;