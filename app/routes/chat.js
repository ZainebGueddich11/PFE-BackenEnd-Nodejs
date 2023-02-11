var express = require('express');
var router = express.Router();
const { chat }= require('../models');
var Sequelize = require('sequelize');
const db = require("../models");

var jwt = require('jsonwebtoken');

const Op = db.Sequelize.Op;

 
var middleware = require('../middleware/auth')




router.get('/get/:id', middleware, function(req, res) {
    var condition = {
        [Op.or]: [{
                id_user_to: req.body.user.id,
                id_user: req.params.id
            },
            {
                id_user: req.body.user.id,
                id_user_to: req.params.id
            },

        ]
    }
    chat.findAll({ where: condition }).then(data => {

        return res.status(200).send(data)
    }).catch(err => {

        return res.status(500).send(err)
    })






})

module.exports = router