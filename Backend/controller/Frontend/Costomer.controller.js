import bcrypt from "bcryptjs";
import Constomer from "../../module/Costomer.module.js";
import { validationResult } from "express-validator";
import { Helpers } from "../../Helpers/Helper.js";
import { Templete } from "../../Utils/templete.js";
import { Token } from "../../Utils/jwt.auth.js";



export const SignUp = async (req, res) => {
    try {
        let errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ msg: "Validation Error", errors: errors.array() });
        }
        let { name, email, password, mobile, location, pincode } = req.body;
        const salt = bcrypt.genSaltSync(10);
        password = bcrypt.hashSync(password, salt);
        const helper = new Helpers();
        const otp = helper.generateOtp(4);
        const result = new Constomer({ name, email, password, mobile, location, pincode, otp });
        await result.save();
        let data = {
            otp: result.otp,
            year: new Date().getFullYear(),
            appName: process.env.APP_NAME,
            name: result.name,
            email: result.email,
            subject: "Send OTP Jaldi",
        };
        const templateData = new Templete().getOtpTemplete(data);
        helper.sendMail(data, templateData);

        return res.status(200).json({ msg: "Signup Successful", user: result });
    } catch (error) {
        console.error("Signup Error:", error);
        return res.status(500).json({ msg: "ERROR SIGN-UP", error: error.message });
    }
};



export const verifyOtp = async (req, res) => {
    try {
        let errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        const { email, otp } = req.body;
        let result = await Constomer.findOne({ email });
        if (result) {
            let OTP = result.otp;
            if (otp === OTP) {
                let token = new Token();
                let tokenObj = {
                    id: result._id,
                    name: result.name,
                    email: result.email,
                    mobile: result.mobile,
                }
                let data = token.tokenGanrate(tokenObj);
                res.cookie("costomer", data);
                return res.status(200).json({ msg: "Sign-In Successfully : " });
            }
            return res.status(401).json({ msg: "WRONG OTP" });
        }
        return res.status(401).json({ msg: "Email Not Found" });
    } catch (error) {
        return res.status(500).json({ msg: "ERROR OTP Verify" });
    }
}


export const SignIn = async (req, res) => {
    try {
        let errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        const { email, password } = req.body;
        const result = await Constomer.findOne({ email });
        if (result) {
            let status = bcrypt.compareSync(password, result.password);
            if (status) {
                let token = new Token();
                let tokenObj = {
                    id: result._id,
                    name: result.name,
                    email: result.email,
                    mobile: result.mobile,
                }
                let data = token.tokenGanrate(tokenObj);
                res.cookie("costomer", data);
                return res.status(200).json({ msg: "Sign-In Successfully : " });
            }
            return res.status(401).json({ msg: "Invalid Password" });
        } else {
            return res.status(401).json({ msg: "invalid Email" });
        }
    } catch (error) {
        return res.status(500).json({ msg: "ERROR SIGN-IN ", error });
    }
}


export const ForgatePassword = async (req, res) => {
    try {
        let errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        let { email } = req.body;
        const result = await Constomer.findOne({ email });
        if (!result) {
            return res.status(404).json({ msg: "User not found" });
        }
        const helper = new Helpers();
        const otp = helper.generateOtp(4);
        result.otp = otp;
        await result.save();
        let data = {
            otp: otp,
            year: new Date().getFullYear(),
            appName: process.env.APP_NAME,
            name: result.name,
            email: result.email,
            subject: "Send OTP Jaldi Bhejo Yaar",
        };
        const templatedata = new Templete().forgatePassword(data);
        helper.sendMail(data, templatedata);
        return res.status(200).json({ msg: "OTP sent successfully", user: result });
    } catch (error) {
        console.error("Forgate Password Error:", error);
        return res.status(500).json({ msg: "ERROR Forget Password", error: error.message });
    }//================ Forgot Password ==========================
};



export const ChangePassword = async (req, res) => {
    try {
        let errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        let { email, newpassword, confirm_password } = req.body;
        if (newpassword !== confirm_password) {
            return res.status(400).json({ msg: "Passwords do not match" });
        }
        const result = await Constomer.findOne({ email });
        if (!result) {
            return res.status(404).json({ msg: "Email not found" });
        }
        const salt = bcrypt.genSaltSync(10);
        const hashedPassword = bcrypt.hashSync(newpassword, salt);
        result.password = hashedPassword;
        await result.save();
        return res.status(200).json({ msg: "Password changed successfully", user: result });
    } catch (error) {
        console.error("Change Password Error:", error);
        return res.status(500).json({ msg: "ERROR Change Password", error: error.message });
    }//==================== Change Password ===================================================
};

