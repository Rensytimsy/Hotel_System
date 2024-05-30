import express from "express";
import createError from "../utils/error.js";
import {
    createHotel,
    updateHotel,
    deleteHotel,
    getHotels,
    getAllHotels
} from "../controllers/hotelController.js"; 
import { verifyAdmin } from "../utils/verifyTokens.js";
// import updateHotel from "../controllers/hotelController.js"

const routes = express.Router();

//Create
routes.post("/", verifyAdmin, createHotel);
//Update
routes.put("/:id", verifyAdmin, updateHotel);
//Delete
routes.delete("/:id", verifyAdmin, deleteHotel);
//Get
routes.get("/:id", getHotels);
//Get all
routes.get("/", getAllHotels);


export default routes;

