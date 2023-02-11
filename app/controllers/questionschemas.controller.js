
var express = require('express');

const db = require("../models");
require('../models/index');


var Sequelize = require('sequelize');

    const Op = db.Sequelize.Op;

    const { examen } = require("../models");
    const { questionschemas } = require("../models");


exports.getAnswer = (req,res) =>{
 const id=req.params.id;
    questionschemas.findAll({attributes:['answer'],
      where:{id:id}
      })
      .then(questionschemas=>res.send(questionschemas))
      .catch(err =>{
        res.status(200).send({ message: err.message });
    });
  }

  exports.getQuestionSchemas = (req, res) =>{
    questionschemas.findAll( {include: [{ all: true, nested: true }]}
      ).then(questionschemas=>res.send(questionschemas)
      ).catch(err =>{
        res.status(200).send({ message: err.message });
    });
  };