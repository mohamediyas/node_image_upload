const MB = 5;

const FILE_SIZE_LIMIT = MB * 1024 * 1024;

const filesSizeLimiter = (req, res, next) => {
  const files = req.files;

  const fileOverLimit = [];

  Object.keys(files).forEach((key) => {
    if (files[key].size > FILE_SIZE_LIMIT) {
      fileOverLimit.push(files[key].name);
    }
  });
};
