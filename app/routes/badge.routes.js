const express = require("express");
const badgeController = require("../controllers/badge.controller");
const upload = require("../middleware/upload");

module.exports = function(app) {
    app.post("/CreateBadge", upload.single("file"), badgeController.CreateBadge);
    app.get("/getBadge",  badgeController.getBadge);
    app.get('/filebadge/:id', badgeController.downloadFile);
    app.delete('/:id/deletebadge',badgeController.deleteBadge);

};

