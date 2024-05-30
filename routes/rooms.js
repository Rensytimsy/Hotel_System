import express from "express";
import { verifyAdmin } from "../utils/verifyTokens.js";
const routes = express.Router();

import {
    createRoom,
    updateRoom,
    deleteRoom,
    getRoom,
    getAllRoom
} from "../controllers/roomsController.js"


routes.post("/:hotelId", verifyAdmin, createRoom);
//Update
routes.put("/:id", verifyAdmin, updateRoom);
//Delete
routes.delete("/:id", verifyAdmin, deleteRoom);
//Get
routes.get("/:id", getRoom);
//Get all
routes.get("/", getAllRoom);

export default  routes;