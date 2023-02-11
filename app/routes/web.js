const express = require("express");
const router = express.Router();
const homeController = require("../controllers/home");
const uploadController = require("../controllers/upload");
const upload = require("../middleware/upload");

let routes = (app) => {
  router.get("/", homeController.getHome);

  router.post("/upload", upload.single("file"), uploadController.uploadFiles);
  router.get('/api/file/all', uploadController.listAllFiles);

  //Module1
  router.get('/api/file/cours1s1', uploadController.listerCours1Session1);
  router.get('/api/file/cours1s2', uploadController.listerCours1Session2);
  router.get('/api/file/cours1s3', uploadController.listerCours1Session3);
  router.get('/api/file/cours1s4', uploadController.listerCours1Session4);
  router.get('/api/file/cours1s5', uploadController.listerCours1Session5);

  router.post("/uploadcours1s1", upload.single("file"), uploadController.uploadC1S1);
  router.post("/uploadcours1s2", upload.single("file"), uploadController.uploadC1S2);
  router.post("/uploadcours1s3", upload.single("file"), uploadController.uploadC1S3);
  router.post("/uploadcours1s4", upload.single("file"), uploadController.uploadC1S4);
  router.post("/uploadcours1s5", upload.single("file"), uploadController.uploadC1S5);

  //Module2
  router.get('/api/file/cours2s1', uploadController.listerCours2Session1);
  router.get('/api/file/cours2s2', uploadController.listerCours2Session2);
  router.get('/api/file/cours2s3', uploadController.listerCours2Session3);
  router.get('/api/file/cours2s4', uploadController.listerCours2Session4);
  router.get('/api/file/cours2s5', uploadController.listerCours2Session5);

  router.post("/uploadcours2s1", upload.single("file"), uploadController.uploadC2S1);
  router.post("/uploadcours2s2", upload.single("file"), uploadController.uploadC2S2);
  router.post("/uploadcours2s3", upload.single("file"), uploadController.uploadC2S3);
  router.post("/uploadcours2s4", upload.single("file"), uploadController.uploadC2S4);
  router.post("/uploadcours2s5", upload.single("file"), uploadController.uploadC2S5);

    //Module3
    router.get('/api/file/cours3s1', uploadController.listerCours3Session1);
    router.get('/api/file/cours3s2', uploadController.listerCours3Session2);
    router.get('/api/file/cours3s3', uploadController.listerCours3Session3);
    router.get('/api/file/cours3s4', uploadController.listerCours3Session4);
    router.get('/api/file/cours3s5', uploadController.listerCours3Session5);
  
    router.post("/uploadcours3s1", upload.single("file"), uploadController.uploadC3S1);
    router.post("/uploadcours3s2", upload.single("file"), uploadController.uploadC3S2);
    router.post("/uploadcours3s3", upload.single("file"), uploadController.uploadC3S3);
    router.post("/uploadcours3s4", upload.single("file"), uploadController.uploadC3S4);
    router.post("/uploadcours3s5", upload.single("file"), uploadController.uploadC3S5);

    //Module4
    router.get('/api/file/cours4s1', uploadController.listerCours4Session1);
    router.get('/api/file/cours4s2', uploadController.listerCours4Session2);
    router.get('/api/file/cours4s3', uploadController.listerCours4Session3);
    router.get('/api/file/cours4s4', uploadController.listerCours4Session4);
    router.get('/api/file/cours4s5', uploadController.listerCours4Session5);
  
    router.post("/uploadcours4s1", upload.single("file"), uploadController.uploadC4S1);
    router.post("/uploadcours4s2", upload.single("file"), uploadController.uploadC4S2);
    router.post("/uploadcours4s3", upload.single("file"), uploadController.uploadC4S3);
    router.post("/uploadcours4s4", upload.single("file"), uploadController.uploadC4S4);
    router.post("/uploadcours4s5", upload.single("file"), uploadController.uploadC4S5);

   //Module5
   router.get('/api/file/cours5s1', uploadController.listerCours5Session1);
   router.get('/api/file/cours5s2', uploadController.listerCours5Session2);
   router.get('/api/file/cours5s3', uploadController.listerCours5Session3);
   router.get('/api/file/cours5s4', uploadController.listerCours5Session4);
   router.get('/api/file/cours5s5', uploadController.listerCours5Session5);
 
   router.post("/uploadcours5s1", upload.single("file"), uploadController.uploadC5S1);
   router.post("/uploadcours5s2", upload.single("file"), uploadController.uploadC5S2);
   router.post("/uploadcours5s3", upload.single("file"), uploadController.uploadC5S3);
   router.post("/uploadcours5s4", upload.single("file"), uploadController.uploadC5S4);
   router.post("/uploadcours5s5", upload.single("file"), uploadController.uploadC5S5);


//delete cours 
router.delete('/:id/deletecours',uploadController.deleteCours);


//download file
  router.get('/api/file/:id', uploadController.downloadFile);

  return app.use("/", router);

};

module.exports = routes;