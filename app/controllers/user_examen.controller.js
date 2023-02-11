
const { examen, moduleQHSE} = require("../models");
const { user} = require("../models");
const db = require("../models");
const user_examen = db.user_examen;
const Op = db.Sequelize.Op;
exports.countusersuccess =( req,res)=>{
  user_examen.findAll({where: {  success :true  },attributes: { 
   include: [[Sequelize.fn("COUNT", Sequelize.col("userId")), "userSuccessCount"]] }
}).then(userSuccessCount => res.send(userSuccessCount)
);
}
exports.countuserfailed =( req,res)=>{
  user_examen.findAll({where: {  success :false  },attributes: { 
   include: [[Sequelize.fn("COUNT", Sequelize.col("userId")), "userFailedCount"]] }
}).then(userSuccessCount => res.send(userSuccessCount)
);
}
exports.getnombreusercertif =( req,res)=>{
  user_examen.findAll({
    
    include: { model: examen  , required:true,include:
      [
        {
        model: moduleQHSE
        ,where: { name:"Examen de certification"}
        }
      ]}  
    
    /*,attributes: { 
   include: [[Sequelize.fn("COUNT", Sequelize.col("userId")), "nbUser"]] }*/
}).then(nbUser => res.send(nbUser)
);
}

exports.CreateexamenUser = (req , res) => {
   user_examen.create({
      note:req.body.note,
      examenId:req.body.examenId,
      userId:req.body.userId,
      actif:req.body.actif
    
    }).then(user_examen => res.send(user_examen)
  );
     };
exports.getUserExamen =( req,res)=>{
  user_examen.findAll({include: [{ all: true, nested: true }],attributes:["userId","examenId","id","note"],group: ["id"]}).then(userExamen => res.send(userExamen));
}

exports.getUserExamen1 =( req,res)=>{
  user_examen.findAll({include: [{ all: true, nested: true }]}).then(userExamen => res.send(userExamen));
}

exports.getUserExamenIdExamen=(req,res)=>{
  id=req.params.id;
  user_examen.findAll({where:{ userId:id } ,group: ["examenId"],
  include:
  [
    {model : examen,
  //  where:{examen:{[Op.not]: null}} ,
    include:
    [
      {
      model: moduleQHSE
      ,where: {[Op.not]: [{ name:"Examen de certification"}]}
      }
    ]
    }
  ]}).then(userExamen => res.send(userExamen));
}

exports.getUserExamenNomExamen=async (req,res)=>{
  id=req.params.id;
  return res.status(200).json(
    await user_examen.findAll({where:{ userId:id } ,group: ["examenId"],include: [{
    model: examen}]}
    ));
}
exports.getUserExamenactifM1=async (req,res)=>{
  id=req.params.id;
  return res.status(200).json(
    await user_examen.findAll({where:{ userId:id} ,include: [{
      model: examen,
      required:true,
      include:[
        {
        model : moduleQHSE,
        where:{name:"module1"}
       
    }]  }]
}
    ));
}

exports.getUserExamenactifM2=async (req,res)=>{
  id=req.params.id;
  return res.status(200).json(
    await user_examen.findAll({where:{ userId:id} ,include: [{
      model: examen,
      required:true,
      include:[
        {
        model : moduleQHSE,
        where:{name:"module2"}
       
    }] 
   }]
    }
    ));
}
exports.getUserExamenactifM3=async (req,res)=>{
  id=req.params.id;
  return res.status(200).json(
    await user_examen.findAll({where:{ userId:id} ,include: [{
      model: examen,
      required:true,
      include:[
        {
        model : moduleQHSE,
        where:{name:"module3"}
       
    }]  }]
}
    ));
}
exports.getUserExamenactifM4=async (req,res)=>{
  id=req.params.id;
  return res.status(200).json(
    await user_examen.findAll({where:{ userId:id} ,include: [{
      model: examen,
      required:true,
      include:[
        {
        model : moduleQHSE,
        where:{name:"module4"}
       
    }]  }]
}
    ));
}
exports.getUserExamenactifM5=async (req,res)=>{
  id=req.params.id;
  return res.status(200).json(
    await user_examen.findAll({where:{ userId:id} ,include: [{
      model: examen,
      required:true,
      include:[
        {
        model : moduleQHSE,
        where:{name:"module5"}
       
    }]  }]
}
    ));
}


exports.certif=(req,res)=>{
  user_examen.findAll({where:{userId:req.params.id},include:
  [{
    model :examen,
    required:true,
    include:[
      {
      model : moduleQHSE,
      where:{name:"Examen de certification"}
      }
    ]
  }]
}).then(user_examen=>{res.send(user_examen)});
}

exports.GetUserExamenModule = (req,res)=>{
  user_examen.findAll({where:{userId:req.params.id},include :[{ 
    model :examen,
    required:true,
    include:[
      {
    model :moduleQHSE,
    where: {
      [Op.not]: [
        { name:"Examen de certification"},
      
      ]
    }}
  ]
    }] }).then(examen=>res.send(examen))
}


exports.updateNote = async(req,res)=> {
      const id = req.params.id;
       user_examen.update(req.body ,{
          
          where: {
    
              id: id,
          }
         
      }
      ).then(num => {

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
    /*exports.updateSuccess = async(req,res)=> {
      const id = req.params.id;
       user_examen.update(req.body ,{
          
          where: {
    
              id: id,
          }
         
      }
      ).then(num => {

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
      
    };*/
   