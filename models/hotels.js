import mongoose from "mongoose";


const Hotels = new mongoose.Schema({
    hotel_name: {
        type: String,
        require: true
    },
    hotel_rooms: {
        type: Number
    },
    city:{
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    room_price: {
        rooms_present:Number
    },
    cheapest_price: {
        price: Number
    },
    Expensive_price: {
        type: Number
    },
    Hotel_ratings: {
        type: Number,
        max: 5,
        min: 0,
    },
    featured: {
        type: Boolean,
        default: false
    }
});


export default mongoose.model("Hotels", Hotels);