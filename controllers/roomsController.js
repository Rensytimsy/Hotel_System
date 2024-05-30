import Rooms from "../models/rooms.js";
// import {createError} from "../utils/error.js";
import Hotel from "../models/hotels.js"

export const createRoom = async(req, res, next) => {
    const hotelId = req.params.hotelId;
    const newRoom = new Rooms(req.body);
    try{
        const savedRooms = await newRoom.save();
        try{
            await Hotel.findByIdAndUpdate(hotelId, {
                $push: {rooms: savedRooms._id},
            })
        }catch (err){
            next(err)
        }
        res.status(200).json(savedRooms);
    }catch (err){
        next(err);
    }
}


//update
export const updateRoom = async(req, res, next) => {
    try{
        const updateRoom = await Rooms.findByIdAndUpdate(req.params.id, {$set: req.body}, {new: true});
        res.status(200).json(updateRoom);
    }catch (err) {
        next(err);
    }
}
//delete
export const deleteRoom = async(req, res, next) => {
    try{
        await Rooms.findByIdAndDelete(req.params.id, {new: true});
        try{
            await Hotel.findByIdAndUpdate(hotelId, {
                $pull: {rooms: req.params.id},
            })
        }catch (err){
            next(err);
        }
        res.status(200).json(Rooms);
    }catch (err){
        next(err);
    }
}
//get
export const getRoom = async(req, res, next) => {
    try{
        const room = await Rooms.findById(req.params.id);
        res.status(200).json(room);
    }catch (err){
        next(err);
    }
}
//getAll
export const getAllRoom = async(req, res, next) => {
    try{
        const room = await Rooms.find();
        res.status(200).json(room);
    }catch (err){
        next(err);
    }
}