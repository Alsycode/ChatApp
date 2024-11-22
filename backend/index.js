import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose";
import userRoute from "./routes/user.route.js";
import messageRoute from "./routes/message.route.js";
import cors from "cors"
import cookieParser from "cookie-parser";
import { app, server } from "./socketIO/server.js";
app.use(express.json());
app.use(cors());
app.use(cookieParser())
dotenv.config();
const PORT = process.env.PORT || 3001;
const URI = process.env.MONGODB_URI;

try {
    mongoose.connect(URI);
    console.log("Connected to MongoDB");
} catch (error) {
    console.log(error);
}
app.use("/api/user", userRoute);
app.use("/api/message", messageRoute )

server.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})