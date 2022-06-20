const express = require("express");
const fileUpload = require("express-fileupload");
const path = require("path");

const filePayloadExist = require("./middleware/filesPayloadExists");
const fileExtLimiter = require("./middleware/fileExtLimiter");
const fileSizeLimiter = require("./middleware/filesSizeLimit");

const PORT = process.env.PORT || 8080;

const app = express();

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.post("/upload", fileUpload({ createParentPath: true }), (req, res) => {
  const files = req.files;

  console.log(files);

  return res.json({
    status: "logged",
    message: "logged",
  });
});

app.listen(PORT, () => console.log("Server listening on port " + PORT));
