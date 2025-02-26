import mongoose from "mongoose";
import path from "path";
import HelpModule from "../../module/Help.module.js";
import fs from "fs";
import { fileURLToPath } from "url";  // Import fileURLToPath
import { validationResult } from "express-validator";

// Manually define __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


export const CreateHelp = async (req, res) => {                               // Create Help 
    try {
        let errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { title, description, help_seeker, category, location, pincode, status, help_date } = req.body;
        const gallery = req.files.map(file => file.path);

        const result = await HelpModule.create({ title, description, help_seeker, category, location, pincode, gallery, status, help_date });

        if (result) {
            return res.status(200).json({ msg: "Help Created Successfully", result });
        }
        return res.status(400).json({ msg: "Invalid Data. Help creation failed." });
    } catch (error) {
        console.error("CREATE HELP ERROR:", error);
        return res.status(500).json({ msg: "Internal Server Error" });
    }// ====================== Help Create ==============================
};


export const FindHelp = async (req, res) => {                                    // Help Find BY Id 
    try {
        let errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        const { id } = req.body;
        const user = await HelpModule.findById(id);
        if (user) {
            return res.status(201).json({ msg: "You Can Change Help ", user })
        }
        return res.status(401).json({ msg: "Id Help Not Exist " });
    } catch (error) {
        return res.status(500).json({ msg: "ERROR FIND HELP", error });
    }//==================== Find Help =================================
}



export const UpdateHelp = async (req, res) => {
    try {
        let errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const id = req.params.id;
        let { title, description, category, location, pincode, help_date, oldImages } = req.body;

        if (typeof oldImages === "string") {
            oldImages = JSON.parse(oldImages);
        }
        oldImages = oldImages || ["uploads/gallery-1740484334621.jpg"];
        const newImages = req.files.map(file => `uploads/${file.filename}`);

        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ error: "Invalid ID" });
        }

        let helpItem = await HelpModule.findById(id);
        if (!helpItem) {
            return res.status(404).json({ error: "Data not found" });
        }

        let imagesToDelete = helpItem.gallery.filter(img => !oldImages.includes(img));

        imagesToDelete.forEach(img => {
            const filePath = path.resolve(__dirname, "..", img);
            console.log("Attempting to delete:", filePath);

            if (fs.existsSync(filePath)) {
                try {
                    fs.unlinkSync(filePath);
                    console.log("Deleted:", filePath);
                } catch (err) {
                    console.error("Error deleting file:", filePath, err);
                }
            } else {
                console.log("File not found, skipping:", filePath);
            }
        });

        helpItem.set({
            title,
            description,
            category,
            location,
            pincode,
            help_date,
            gallery: [...oldImages, ...newImages]
        });

        await helpItem.save();
        return res.status(200).json({ msg: "Updated Successfully", helpItem });

    } catch (error) {
        console.error("ERROR:", error);
        return res.status(500).json({ msg: "ERROR Updating Help", error });
    }
};





export const GetHelps = async (req, res) => {
    try {
        let result = await HelpModule.find({});
        if (!result) {
            return res.status(404).json({ Err: "Data Is Not available" });
        }
        return res.status(201).json({ msg: "Data Get Successfully : ", result });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ msg: "Error Get Data ", error });
    }
}


export const GetHelpByID = async (req, res) => {
    try {
        const id = req.params.id;
        let result = await HelpModule.findById(id);
        if (!result) {
            return res.status(404).json({ Err: "Data Is Not available" });
        }
        return res.status(201).json({ msg: "Data Get Successfully : ", result });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ msg: "Error Get Data ", error });
    }
}