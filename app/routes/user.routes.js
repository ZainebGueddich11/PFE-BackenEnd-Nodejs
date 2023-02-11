const express = require("express");
const { authJwt } = require("../middleware");
const controller = require("../controllers/user.controller");
const {User} = require("../models/user.model");
const router = express.Router();
const multer = require("multer");
module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.get("/api/test/all", controller.allAccess);

  app.get(
    "/api/test/user",
    [authJwt.verifyToken],
    controller.userBoard
  );

  app.get(
    "/api/test/mod",
    [authJwt.verifyToken, authJwt.isModerator],
    controller.moderatorBoard );

    app.get(
      "/api/test/admin",
      [authJwt.verifyToken, authJwt.isAdmin],
      controller.adminBoard
    );
    app.put(
      "/:id",
      controller.update
    );
    app.get('/api/getUser',  controller.users
    );
    app.get('/api/getAdmin',  controller.admin
    );
    app.get('/api/getmoderator',  controller.moderators
    );
    const storage = multer.diskStorage({
      destination: (req, file, callback)=> {
        callback(null, "./uploads")
      },
      filename: (req, file, callback)=> {
        console.log(file.originalname);
        
      // let filename=  file.originalname.toLowerCase().split('').join('-');
       // filename = filename.replace(/(\.[\w\d_-]+)$/i, '_' +Date.now()+'_$1');
        callback(null, file.originalname);
      },
    })
    var upload = multer({ storage: storage,
      fileFilter: (req, file, callback)=>{
        if(file.mimetype == 'image/png' ||file.mimetype == 'image/jpg' || file.mimetype == 'image/jpeg' ){
          callback(null, true);
        }else{
          req.fileTypeValidationError= 'only .png , .jpg and .jpeg format allowed '
          return callback(null, false, req.fileTypeValidationError);
        }
      }});
      app.get('/countuser',controller.countusers);
     app.post('/user/upload',upload.single('photo'),controller.Upload);
     app.post('/addmoderator',controller.AddModerator);
     app.put('/:id/updatemoderator',controller.updateModerator);
     app.delete('/:id/deletemoderator',controller.deleteModerator);
     app.get('/users/username',controller.getUsername);

  };