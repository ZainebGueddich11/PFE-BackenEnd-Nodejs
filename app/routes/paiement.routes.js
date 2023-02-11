const controller = require("../controllers/paiement.controller");
module.exports = function(app) {
    app.post('/payme',controller.payme);
   

    };