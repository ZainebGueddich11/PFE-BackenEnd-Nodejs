const controller = require("../controllers/email.controller");
module.exports = function(app) {
app.post('/sendemail',controller.sendemail);
//app.get('/getemail',controller.email);

};