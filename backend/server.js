import express from "express";
import dotenv from "dotenv";

import authRoutes from "../backend/routes/auth.routes.js"

const app = express();

dotenv.config();
const PORT = process.env.PORT || 8000;

app.get("/", (req, res) =>{
    //root route http://localhost:5000/
    res.send("Hello World");
});

app.use("/api/auth", authRoutes);
app.listen(PORT, () => console.log(`server is running on this port ${PORT}`));