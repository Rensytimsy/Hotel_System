import mongoose from "mongoose";


const Users = new mongoose.Schema({
    first_name: {
        type: String,
        required: true,
        unique: true,
    },
    second_name:{
        type: String,
        required: true,
    },
    email_address: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        unique: true,
    }
});

export default mongoose.model("Users", Users);
