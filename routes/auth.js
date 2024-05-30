import express from "express";
import {
    userRegister,
    userLogin
} from "../controllers/authController.js";
const routes = express.Router();

routes.post("/register", userRegister);
routes.post("/login", userLogin);

export default  routes;