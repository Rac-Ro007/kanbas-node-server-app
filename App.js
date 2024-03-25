// const express = require('express')
import express from "express";
import Hello from "./Hello.js";
import Lab5 from "./Lab5.js";

const app = express()
Hello(app)
Lab5(app)

app.listen(4000, function () {
    console.log("Express server listening on port 3000");
});