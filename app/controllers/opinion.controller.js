const { opinion } = require("../models");
const { user } = require("../models");


exports.CreateOpinion = (req , res) => {
    opinion.create({
      question1:req.body.question1,
      question2:req.body.question2,
      question3:req.body.question3,
       userId:req.body.userId,
     }).then(opinion => res.send(opinion)
   );
      };
      exports.getOpinion = (req , res) => {
        opinion.findAll({
          where:{question1:"satisfait"}, 
          include: [{
            model: user,
            required: true,
          }]  

         }).then(opinion => res.send(opinion)
       ); 
          };