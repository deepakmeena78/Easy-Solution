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
    image: {
        type: String,
        default: null
    },
    otp: {
        type: String,
        required: true
    }
});

const Cunstomer = mongoose.model('Customer', userSchema);
export default Cunstomer;
