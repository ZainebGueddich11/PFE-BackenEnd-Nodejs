const { chat }= require('../models');
var Sequelize = require('sequelize');
const db = require("../models");

var jwt = require('jsonwebtoken');

const Op = db.Sequelize.Op;

module.exports = function(data) {



    return chat.create(data).then(data => { return data }).catch(err => { return err })




}