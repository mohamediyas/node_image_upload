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
    }

    next();
  };
};

module.exports = fileExtLimiter;
