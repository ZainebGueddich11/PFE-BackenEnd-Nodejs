const { moduleQHSE } = require("../models");
const db = require("../models");

var Sequelize = require('sequelize');

exports.AddModule = (req, res) => {
    // Save module to Database
    moduleQHSE.create({
      name: req.body.name,
     
    })
      .then(moduleQHSE => {res.send({
        message: "module was created successfully."
      });   
      
        })
      
      .catch(err => {
        res.status(500).send({ message: err.message });
      });
  };
 

