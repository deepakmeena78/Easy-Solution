import express from "express";
import CostomerRoute from "./routes/Frontend/Costomer.routes.js";
import AdminRoute from "./routes/Backend/admin.routes.js";
import HelpRoute from "./routes/Frontend/Help.routes.js";
import HelpProvider from "./routes/Frontend/HelpProvider.routes.js";
import CategoryRoute from "./routes/Backend/Category.routes.js";
import connectDB from "./db/db.config.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/uploads", express.static("uploads"));
connectDB();


app.use("/admin", AdminRoute);
app.use("/category", CategoryRoute);
app.use("/costomer", CostomerRoute);
app.use("/help", HelpRoute);
app.use("/help-provider", HelpProvider);

app.listen(process.env.PORT || 3200, () => {
    console.log("Server Started");
});
