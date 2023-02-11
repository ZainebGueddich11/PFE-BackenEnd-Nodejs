var express = require('express');
require('../models/index');

const db = require("../models");
    sequelize = db.sequelize,
    Sequelize = db.Sequelize;
    const Op = db.Sequelize.Op;

const user_examen = db.user_examen;
const { examen} = require("../models");
const { questionschemas } = require("../models");
const { moduleQHSE } = require("../models");
const { option } = require("../models");

exports.sumNote=async(req,res)=>{
return  res.status(200).json(await examen.sum('note'));
}


exports.listExamen= async (req, res, next) =>{
    return res.status(200).json(await examen.findAll( {include: questionschemas} ))
};
exports.GetExamenModule = (req,res)=>{
  examen.findAll({include :[{ 
    model :moduleQHSE,
    where: {
      [Op.not]: [
        { name:"Examen de certification"},
      
      ]
    }
    }] }).then(examen=>res.send(examen))
}
exports.listExamen1= async (req, res, next) =>{
  return res.status(200).json(
    await moduleQHSE.findOne({where:{name:"module1"}, include: [{
    model: examen,
    required: true,
      
    //{name:{[Op.like]: '%module1%'}}
 }]  }, ) 
)
};
exports.examencertif= async (req, res, next) =>{
  return res.status(200).json(
    await moduleQHSE.findAll({where:{name:"Examen de certification"},group :["examenId"] ,include: [{
    model: examen,
    required: true,
       }]  }, ) 
)
};

exports.listExamen1liste= async (req, res, next) =>{
  return res.status(200).json(
    await moduleQHSE.findAll( {include: [{
    model: examen,
    required: true,
    include: questionschemas
    
    //{name:{[Op.like]: '%module1%'}}
 }]   ,group: ["name"]}) 
)
};

exports.listExamencertifId=  (req, res, next) =>{
  moduleQHSE.findAll({where:{name:"Examen de certification"}, attributes:["examenId"],include: [{
 model: examen,
 required: true,


}]  }, ).then(examen=>res.send(examen)) 

};
exports.listExamen1Id=  (req, res, next) =>{
     moduleQHSE.findAll({where:{name:"module1"}, attributes:["examenId"],include: [{
    model: examen,
    required: true,
   

 }]  }, ).then(examen=>res.send(examen)) 

};
exports.listExamen2Id=  (req, res, next) =>{
  moduleQHSE.findAll({where:{name:"module2"}, attributes:["examenId"],include: [{
 model: examen,
 required: true,


}]  }, ).then(examen=>res.send(examen)) 

};
exports.listExamen3Id=  (req, res, next) =>{
  moduleQHSE.findAll({where:{name:"module3"}, attributes:["examenId"],include: [{
 model: examen,
 required: true,


}]  }, ).then(examen=>res.send(examen)) 

};
exports.listExamen4Id=  (req, res, next) =>{
  moduleQHSE.findAll({where:{name:"module4"}, attributes:["examenId"],include: [{
 model: examen,
 required: true,


}]  }, ).then(examen=>res.send(examen)) 

};
exports.listExamen5Id=  (req, res, next) =>{
  moduleQHSE.findAll({where:{name:"module5"}, attributes:["examenId"],include: [{
 model: examen,
 required: true,


}]  }, ).then(examen=>res.send(examen)) 

};
exports.listExamenM2= async (req, res, next) =>{
  return res.status(200).json(
    await moduleQHSE.findOne({where:{name:"module2"}, include: [{
    model: examen,
    required: true,
      
    
 }]  }, ) 
)
};


exports.listExamenM3= async (req, res, next) =>{
  return res.status(200).json(
    await moduleQHSE.findOne({where:{name:"module3"}, include: [{
    model: examen,
    required: true,
      
    
 }]  }, ) 
)
};

exports.listExamenM4= async (req, res, next) =>{
  return res.status(200).json(
    await moduleQHSE.findOne({where:{name:"module4"}, include: [{
    model: examen,
    required: true,
      
    
 }]  }, ) 
)
};

exports.listExamenM5= async (req, res, next) =>{
  return res.status(200).json(
    await moduleQHSE.findOne({where:{name:"module5"}, include: [{
    model: examen,
    required: true,
      
    
 }]  }, ) 
)
};
exports.creationExamen = async(req, res) => {

    // First, we start a transaction and save it into a variable
    const t = await sequelize.transaction();


    let exame = { name: req.body.name, note: req.body.note, duration: req.body.duration , dateExamen:req.body.dateExamen};

    let question = req.body.form;
    let module=req.body.form;
  
    try {
      const db_examen = await examen.create(exame, { transaction: t});

      const newArr = question.map(el => ({...el, id_examen: db_examen.dataValues.id }));
      await questionschemas.bulkCreate(newArr, { transaction: t, returning: true ,individualHooks: true});
      
      const newArr2 = module.map(el => ({...el, examenId: db_examen.dataValues.id }));
      await moduleQHSE.bulkCreate(newArr2, { transaction: t, returning: true ,individualHooks: true});
     
       
       await t.commit();
      
    } catch (error) {


        await t.rollback();
        return res.status(500).send(error);
    }

  
    return res.status(200).json({ message: "create examen successfully" });
};





//router.get('/find/:id', 
exports.findExamen = async (req, res)=> {



    return res.status(200).json(await examen.findOne({
        where: {

            id: req.params.id,
        },
        include: questionschemas
      
    }))

};
exports.GetExamens = async (req, res)=> {



  return res.status(200).json(await examen.findAll({
      
      include: questionschemas
    
  }))

};
exports.updateNoteExamen = (req,res)=> {
  const id = req.params.id;
  examen.update(req.body ,{
      
      where: {

          id: id,
      }
     
  }) .then(num => {
      if (num == 1)
      {
        res.send({
          message: "Note was updated successfully."
        });
      }else {
        res.send({
          message: 'Cannot update note with id='+id+'. Maybe note was not found or req.body is empty'
        });
      }
    }).catch(err => {
      res.status(500).send({
        message: "Error updating note with id=" +id 
      });
    });
  
};
exports.deleteExamen = (req, res) =>
{
    const id = req.params.id;
    examen.destroy({
        where: { id: id }
    })
    .then(user=>{
        res.status(200).send("Examen  "+id+" is deleted");
    }
    ).catch(err =>{
        res.status(500).send({ message: err.message });
    });
};