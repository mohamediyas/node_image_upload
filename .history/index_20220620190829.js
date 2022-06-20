const express = require("express");
const fileUpload = require("express-fileupload");
const path = require("path");

const PORT = process.env.PORT || 8080;

const app = express();

app.listen(PORT, () => console.log("Server listening on port " + PORT));
