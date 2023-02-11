
const controller = require("../controllers/module.controller");
module.exports = function(app) {
    app.post('/addmodule',controller.AddModule);
    //app.get('/getemail',controller.findemail);
   

    };