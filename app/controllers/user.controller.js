const { user } = require("../models");
//const { user_roles } = require("/..models");
const { role } = require("../models");
const db = require("../models");
const multer = require("multer");
var bcrypt = require("bcryptjs");
var Sequelize = require('sequelize');
exports.Upload = (req, res) =>
{
  if (req.fileTypeValidationError)
  {
    let resp = {
      status: "fail",
      statusMessage: req.fileTypeValidationError,
      data: []
    }
    res.send(resp);
    return false;
  }
};

const Op = db.Sequelize.Op;
exports.allAccess = (req, res) => {
    res.status(200).send("Public Content.");
  };
  
  exports.userBoard = (req, res) => {
    res.status(200).send("User Content.");
  };
  
  exports.adminBoard = (req, res) => {
    res.status(200).send("Admin Content.");
  };
  
  exports.moderatorBoard = (req, res) => {
    res.status(200).send("Moderator Content.");
  };

  exports.moderators = (req, res) =>{
  
   
      user.findAll(// {include: [{ all: true, nested: true }]}
        {include: [{
          model: role,
          required: true,
          where: {id: 2}
       }]} 
  
     ).then(Moderators => res.send(Moderators));
  };
  exports.countusers = (req, res) =>{
  user.findAll({
    attributes: { 
        include: [[Sequelize.fn("COUNT", Sequelize.col("users.id")), "userCount"]] 
    },
    include: [{
        model: role, attributes: ['id'], where: {id: 1}
    }]
});}
  exports.users = (req, res) =>{
    
    user.findAll(// {include: [{ all: true, nested: true }]}
      {include: [{
        model: role,
        required: true,
        where: {id: 1}
     }]} 
   
     ).then(users => res.send(users));
  };
  exports.admin =  (req, res) =>{
    
    user.findAll(// {include: [{ all: true, nested: true }]}
      {include: [{
        model: role,
        required: true,
        where: {id: 3}
     }]} 
   
     ).then(users => res.send(users));
  };
  
 
  exports.AddModerator = (req, res) => {
    // Save moderator to Database
    user.create({
      username: req.body.username,
      nomModule: req.body.nomModule,
      email: req.body.email,
      password: bcrypt.hashSync(req.body.password, 8),
      pays: req.body.pays,
      ville: req.body.ville
    })
      .then(user => {
       
          // user role = 2
          user.setRoles([2]).then(() => {
            res.send({ message: "moderator was registered successfully!" });
          });
        })
      
      .catch(err => {
        res.status(500).send({ message: err.message });
      });
  };
  exports.updateModerator =  (req, res)=>{
    const id = req.params.id;
    user.update(req.body, {
      where: { id: id  }
    })
    .then(num => {
      if (num == 1)
      {
        res.send({
          message: "User was updated successfully."
        });
      }else {
        res.send({
          message: 'Cannot update user with id='+id+'. Maybe user was not found or req.body is empty'
        });
      }
    }).catch(err => {
      res.status(500).send({
        message: "Error updating user with id=" +id 
      });
    });
  };

    exports.deleteModerator = (req, res) =>
{
    const id = req.params.id;
    user.destroy({
        where: { id: id }
    })
    .then(user=>{
        res.status(200).send("Moderator  "+id+" is deleted");
    }
    ).catch(err =>{
        res.status(500).send({ message: err.message });
    });
};
  exports.update = (req, res)=>{
    const id = req.params.id;
    user.update(req.body, {
      where: { id: id  }
    })
    .then(num => {
      if (num == 1)
      {
        res.send({
          message: "User was updated successfully."
        });
      }else {
        res.send({
          message: 'Cannot update user with id='+id+'. Maybe user was not found or req.body is empty'
        });
      }
    }).catch(err => {
      res.status(500).send({
        message: "Error updating user with id=" +id 
      });
    });
  };
  exports.getUsername=(req,res)=>{
    user.findAll({attributes:["username"]}).then(username=>res.send(username));
  }