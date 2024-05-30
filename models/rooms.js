import mongoose from "mongoose";

const Rooms = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    description: {
        type: String,
        required: true
    },
    max_people: {
        type: String,
        required: true
    },
    category: {
        first_class: {
            type: Boolean,
            default: true
        },
        not_classy: {
            type: Boolean,
            default: false
        }
    },
    room_images: {
        type: String,
        pictures: [String]
    },
    room_number: [{ number: Number, unavailableDates:[{type : {Date}}] }],
},
    { timestamps: true}
);

export default mongoose.model("Rooms", Rooms);
