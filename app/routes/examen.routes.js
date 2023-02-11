const controller = require("../controllers/examen.controller");
module.exports = function(app) {
app.post('/examen/create',controller.creationExamen);

app.get('/examens', controller.GetExamens);
app.get('/examen/find/:id', controller.findExamen);
app.put('/examen/updateNoteExamen/:id',controller.updateNoteExamen);


app.get('/examen/', controller.listExamen);


app.get('/sumNote', controller.sumNote);

app.get('/examenModule/', controller.GetExamenModule);
app.get('/examen/certif/id', controller.listExamencertifId);
app.get('/examen/m/id', controller.listExamen1Id);
app.get('/examen/m2/id', controller.listExamen2Id);
app.get('/examen/m3/id', controller.listExamen3Id);
app.get('/examen/m4/id', controller.listExamen4Id);
app.get('/examen/m5/id', controller.listExamen5Id);

app.get('/examencertif', controller.examencertif);
app.get('/examen/m', controller.listExamen1);
app.get('/listExamen1liste', controller.listExamen1liste);
app.get('/examen/m2', controller.listExamenM2);
app.get('/examen/m3', controller.listExamenM3);
app.get('/examen/m4', controller.listExamenM4);
app.get('/examen/m5', controller.listExamenM5);


app.delete('/:id/deleteExamen',controller.deleteExamen);

};