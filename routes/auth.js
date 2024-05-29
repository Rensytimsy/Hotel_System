import express from "express";
import {userRegister} from "../controllers/authController.js";
const routes = express.Router();

routes.get("/register", userRegister);

export default  routes;