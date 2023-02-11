const multer = require("multer");

const imageFilter = (req, file, cb) => {
 // if (file.mimetype.startsWith("cours")) {
    cb(null, true);
 // } else {
   // cb("Please upload only images.", false);
  //}
};

var storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, __basedir + "/uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}--${file.originalname}`);
  },
});

var uploadFile = multer({ storage: storage, fileFilter: imageFilter });
module.exports = uploadFile;