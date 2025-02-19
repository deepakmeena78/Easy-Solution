import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true
    },
    mobile: {
        type: String,
        required: true,
        unique: true
    },
    location: {
        type: String,
        required: true
    },
    pincode: {
        type: String,
        required: true
    },
    otp: {
        type: String,
        required: true
    }
});

const Constomer = mongoose.model('Costomer', userSchema);
export default Constomer;
