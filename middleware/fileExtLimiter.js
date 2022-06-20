const path = require("path");

const fileExtLimiter = (allowExitArray) => {
  return (req, res, next) => {
    const files = req.files;

    const fileExtension = [];

    Object.keys(files).forEach((key) => {
      fileExtension.push(path.extname(files[key].name));
    });

    const allowed = fileExtension.every((ext) => allowExitArray.includes(ext));

    if (!allowed) {
      return res
        .status(400)
        .json({ status: "error", message: "Please enter valid field" });
    }

    next();
  };
};

module.exports = fileExtLimiter;
