import express from "express";
import { SignUp, verifyOtp, SignIn, ForgatePassword, ChangePassword } from "../../controller/Frontend/Costomer.controller.js"
const route = express.Router();
import { body } from "express-validator";

route.post(
    "/sign-up",                                                                            //  Sign-Up
    body("name", "Name is required.").notEmpty(),
    body("email", "Invalid email address.").isEmail(),
    body("email", "Email is Required").notEmpty(),
    body("password", "Password Is Required").isLength({ min: 6, max: 8 }),
    body("location", "Location is required.").notEmpty(),
    body("pincode", "Pincode must be 6 digits.").notEmpty().isLength({ min: 6, max: 6 }),
    SignUp
);


route.post("/verify",                                                                        // OTP Verify
    body("email", "Invalid email address.").isEmail(),
    body("email", "Email is Required").notEmpty(),
    body("otp", "OTP Is Required").notEmpty(),
    verifyOtp);
    
    
    
route.post("/sign-in",
    body("email", "Invalid email address.").isEmail(),                                        // Sign-in
    body("email", "email is address.").notEmpty(),
    body("password", "Password Is Required").notEmpty(),
    SignIn);
    


    route.post("/forgate-password",
    body("email", "Invalid email address.").isEmail(),                                        // Forgate Password
    body("email", "Email Is Required.").notEmpty(),
    ForgatePassword);



route.post("/change-password",                                                               // Password Change
    body("email", "Invalid email address.").isEmail(),
    body("email", "Email is Required").notEmpty(),
    body("newpassword", "Password Is Required"),
    body("confirm_password", "Password Is Required"),
    ChangePassword);

    export default route;