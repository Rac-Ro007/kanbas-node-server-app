// const express = require('express')
import express from "express";
import Hello from "./Hello.js";
import Lab5 from "./Lab5.js";
import cors from "cors";
import "dotenv/config";
import CourseRoutes from "./Kanbas/courses/routes.js";
import ModuleRoutes from "./Kanbas/modules/routes.js";
import AssignmentRoutes from "./Kanbas/assignments/routes.js";
import SecurityController from "./SecurityController.js";
import UserRoutes from "./Kanbas/Users/routes.js";
import mongoose from "mongoose";
import session from "express-session";

mongoose.connect("mongodb+srv://Cluster24305:T05NZXFHZmRH@cluster24305.15bekze.mongodb.net/kanbas");

const app = express()
// app.use(cors())
app.use(
    cors({
      credentials: true,
      origin: process.env.FRONTEND_URL
    })
);  
const sessionOptions = {
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
};
if (process.env.NODE_ENV !== "development") {
    sessionOptions.proxy = true;
    sessionOptions.cookie = {
        sameSite: "none",
        secure: true,
        domain: process.env.BACKEND_URL,
    };
}
app.use(session(sessionOptions));  
app.use(express.json());
CourseRoutes(app);
ModuleRoutes(app);
AssignmentRoutes(app);
UserRoutes(app);
SecurityController(app);
Hello(app)
Lab5(app)

app.listen(process.env.PORT || 4000, function () {
    console.log("Express server listening on port 4000");
});