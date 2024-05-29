import Hotel from "../models/hotels.js";
//create
export const createHotel = async(req, res, next) => {
    const newHotel = new Hotel(req.body);
    try{
        const savedHotel = await newHotel.save();
        res.status(200).json(savedHotel);
    }catch (err){
        next(err)
    }
}

//update
export const updateHotel = async(req, res, next) => {
    try{
        const updateHotel = await Hotel.findByIdAndUpdate(req.params.id, {$set: req.body}, {new: true});
        res.status(200).json(updateHotel);
    }catch (err) {
        next(err);
    }
}
//delete
export const deleteHotel = async(req, res, next) => {
    try{
        await Hotel.findByIdAndDelete(req.params.id, {new: true});
        res.status(200).json(Hotel);
    }catch (err){
        next(err);
    }
}
//get
export const getHotels = async(req, res, next) => {
    try{
        const hotel = await Hotel.findById(req.params.id);
        res.status(200).json(hotel);
    }catch (err){
        next(err);
    }
}
//getAll
export const getAllHotels = async(req, res, next) => {
    try{
        const hotels = await Hotel.find();
        res.status(200).json(hotels);
    }catch (err){
        next(err);
    }
}

