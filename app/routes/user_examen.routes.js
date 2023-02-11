const controller = require("../controllers/user_examen.controller");
module.exports = function(app) {


app.post("/createExamenUser",controller.CreateexamenUser);
app.put('/examen/note/:id', controller.updateNote);
app.get("/getExamenUser",controller.getUserExamen);
app.get('/certif/:id', controller.certif);
app.get("/countusersuccess",controller.countusersuccess);
app.get("/countuserfailed",controller.countuserfailed);
app.get("/getnombreusercertif",controller.getnombreusercertif);
app.get('/UserexamenModule/:id', controller.GetUserExamenModule);

app.get("/getExamenUser1",controller.getUserExamen1);
app.get("/getIdExamen/:id",controller.getUserExamenIdExamen);
app.get("/getUserExamenNomExamen/:id",controller.getUserExamenNomExamen);


app.get("/getUserExamenactifM1/:id",controller.getUserExamenactifM1);
app.get("/getUserExamenactifM2/:id",controller.getUserExamenactifM2);
app.get("/getUserExamenactifM3/:id",controller.getUserExamenactifM3);
app.get("/getUserExamenactifM4/:id",controller.getUserExamenactifM4);
app.get("/getUserExamenactifM5/:id",controller.getUserExamenactifM5);

}
