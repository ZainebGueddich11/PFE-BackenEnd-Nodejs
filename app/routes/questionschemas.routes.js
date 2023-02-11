const controller = require("../controllers/questionschemas.controller");
module.exports = function(app) {
app.get('/getanswer/:id',controller.getAnswer);

app.get('/getQuestionSchemas',controller.getQuestionSchemas);
};
