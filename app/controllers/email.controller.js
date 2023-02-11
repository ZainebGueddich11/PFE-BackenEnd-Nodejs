const nodemailer = require("nodemailer");
//const { user } = require("../models");
const db = require("../models");
const User = db.user;
var emails=[];
const transporter = nodemailer.createTransport({
    port: 465,               // true for 465, false for other ports
    host: "smtp.gmail.com",
       auth: {
            user: 'zainebgueddich28@gmail.com',
            pass: 'zainebgueddich28157',
         },
    secure: true,
    });
exports.sendemail= (req,res)=>{

   const {to, subject, text } = req.body;
  
const mailData = {
 
    from: 'zainebgueddich28@gmail.com',  // sender address
      to: to, // list of receivers
      subject: subject,
      text: text,
      html: text,
    };
 
 
     transporter.sendMail(mailData, function (err, info) {
        if(err)
         { console.log(err)
          res.status(500).send({
            message: "Error " 
          });}
        else
          {console.log(info);
         res.status(200).send({
            message: "message envoye" 
          });}
     });
    
 
  

   
  }  