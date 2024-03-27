// const express = require('express')
import express from "express";
import Hello from "./Hello.js";
import Lab5 from "./Lab5.js";
import cors from "cors";
import CourseRoutes from "./Kanbas/courses/routes.js";
import ModuleRoutes from "./Kanbas/modules/routes.js";

const app = express()
app.use(cors());
CourseRoutes(app);
ModuleRoutes(app);
app.use(express.json());
Hello(app)
Lab5(app)

app.listen(4000, function () {
    console.log("Express server listening on port 3000");
});