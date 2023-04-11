"use strict";
const express = require("express");
const cors = require("cors");
const catRoute = require("./routes/catRoute");
const userRoute = require("./routes/userRoute");
const app = express();
const port = 3000;

// Log middleware
app.use((req, res, next) => {
    console.log(Date.now() + ": request: " + req.method + "" + req.path);
    next();
});

// serve example-ui
app.use(express.static("example-ui"));
// serve uploaded image files
app.use('/uploads', express.static("uploads"));

// Add cors headers
app.use(cors());

// middleware for parsing request body
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use("/cat", catRoute);
app.use("/user", userRoute);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));