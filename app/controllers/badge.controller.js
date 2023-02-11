const fs = require("fs");
const db = require("../models");
const  Badge = db.badge;
var stream = require('stream');

exports.CreateBadge = async (req, res) => {
    try {
      console.log(req.file);
  
      if (req.file == undefined) {
        return res.send(`You must select a file.`);
      }
  
      Badge.create({
        type: req.file.mimetype,
        name: req.file.originalname,
        description: req.body.description,
        data: fs.readFileSync(
          __basedir + "/uploads/" + req.file.filename
        ),
      }).then((badges) => {
        fs.writeFileSync(
          __basedir + "/tmp/" + badges.name,
         badges.data
        );return res.send(`File has been uploaded.`);
      });
    } catch (error) {
      console.log(error);
      return res.send(`Error when trying upload images: ${error}`);
    }
  };
exports.getBadge = (req,res) => {
  
    Badge.findAll({include: [{ all: true, nested: true }]}
    
    ).then (badge => {res.send(badge)});
  }


  //downloadFile
exports.downloadFile = (req, res) => {
	Badge.findByPk(req.params.id).then(badge => {
		var fileContents = Buffer.from(badge.data, "base64");
		var readStream = new stream.PassThrough();
		readStream.end(fileContents);
		
		res.set('Content-disposition', 'attachment; filename=' + badge.name);
		res.set('Content-Type', badge.type);

		readStream.pipe(res);
	})
  
}
exports.deleteBadge = (req, res) =>
  {
      const id = req.params.id;
      Badge.destroy({
          where: { id: id }
      })
      .then(cours=>{
          res.status(200).send("badge "+id+" is deleted");
      }
      ).catch(err =>{
          res.status(500).send({ message: err.message });
      });
    }