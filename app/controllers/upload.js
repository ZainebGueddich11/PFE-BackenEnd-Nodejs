const fs = require("fs");
const db = require("../models");
const Cours = db.cours;
const ModuleQHSE = db.moduleQHSE;
var stream = require('stream');
const { moduleQHSE } = require("../models");
const uploadFiles = async (req, res) => {
  try {
    console.log(req.file);

    if (req.file == undefined) {
      return res.send(`You must select a file.`);
    }

    Cours.create({
      type: req.file.mimetype,
      name: req.file.originalname,
      description: req.body.description,
      data: fs.readFileSync(
        __basedir + "/uploads/" + req.file.filename
      ),
    }).then((cours) => {
      fs.writeFileSync(
        __basedir + "/tmp/" + cours.name,
        cours.data
      );return res.send(`File has been uploaded.`);
    });
  } catch (error) {
    console.log(error);
    return res.send(`Error when trying upload images: ${error}`);
  }
};
const listAllFiles = (req, res) => {
	Cours.findAll({attributes: ['id', 'name','description']}).then(cours => {
	  res.json(cours);
	});
};


//Module1
//upload1 
const uploadC1S1 = async (req, res) => {
  try {
    console.log(req.file);

    if (req.file == undefined) {
      return res.send(`You must select a file.`);
    }
    Cours.create({
      type: req.file.mimetype,
      name: req.file.originalname,
      description: req.body.description,
      data: fs.readFileSync(
        __basedir + "/uploads/" + req.file.filename
      ),
      moduleQHSEId: 1,
      numSession: 1
    }).then((cours) => {
      fs.writeFileSync(
        __basedir + "/tmp/" + cours.name,
        cours.data
      );return res.send(`File has been uploaded.`);
    });
  } catch (error) {
    console.log(error);
    return res.send(`Error when trying upload images: ${error}`);
  }
};
//upload2
const uploadC1S2 = async (req, res) => {
  try {
    console.log(req.file);

    if (req.file == undefined) {
      return res.send(`You must select a file.`);
    }
    Cours.create({
      type: req.file.mimetype,
      name: req.file.originalname,
      description: req.body.description,

      data: fs.readFileSync(
        __basedir + "/uploads/" + req.file.filename
      ),
      moduleQHSEId: 1,
      numSession: 2
    }).then((cours) => {
      fs.writeFileSync(
        __basedir + "/tmp/" + cours.name,
        cours.data
      );return res.send(`File has been uploaded.`);
    });
  } catch (error) {
    console.log(error);
    return res.send(`Error when trying upload images: ${error}`);
  }
};
//upload3 
const uploadC1S3 = async (req, res) => {
  try {
    console.log(req.file);

    if (req.file == undefined) {
      return res.send(`You must select a file.`);
    }
    Cours.create({
      type: req.file.mimetype,
      name: req.file.originalname,
      description: req.body.description,

      data: fs.readFileSync(
        __basedir + "/uploads/" + req.file.filename
      ),
      moduleQHSEId: 1,
      numSession: 3
    }).then((cours) => {
      fs.writeFileSync(
        __basedir + "/tmp/" + cours.name,
        cours.data
      );return res.send(`File has been uploaded.`);
    });
  } catch (error) {
    console.log(error);
    return res.send(`Error when trying upload images: ${error}`);
  }
};

//upload4 
const uploadC1S4 = async (req, res) => {
  try {
    console.log(req.file);

    if (req.file == undefined) {
      return res.send(`You must select a file.`);
    }
    Cours.create({
      type: req.file.mimetype,
      name: req.file.originalname,
      description: req.body.description,

      data: fs.readFileSync(
        __basedir + "/uploads/" + req.file.filename
      ),
      moduleQHSEId: 1,
      numSession: 4
    }).then((cours) => {
      fs.writeFileSync(
        __basedir + "/tmp/" + cours.name,
        cours.data
      );return res.send(`File has been uploaded.`);
    });
  } catch (error) {
    console.log(error);
    return res.send(`Error when trying upload images: ${error}`);
  }
};

//upload5
const uploadC1S5 = async (req, res) => {
  try {
    console.log(req.file);

    if (req.file == undefined) {
      return res.send(`You must select a file.`);
    }
    Cours.create({
      type: req.file.mimetype,
      name: req.file.originalname,
      description: req.body.description,

      data: fs.readFileSync(
        __basedir + "/uploads/" + req.file.filename
      ),
      moduleQHSEId: 1,
      numSession: 5
    }).then((cours) => {
      fs.writeFileSync(
        __basedir + "/tmp/" + cours.name,
        cours.data
      );return res.send(`File has been uploaded.`);
    });
  } catch (error) {
    console.log(error);
    return res.send(`Error when trying upload images: ${error}`);
  }
};

//session1
const listerCours1Session1 = (req,res) => {
  
  Cours.findAll({attributes: ['id', 'name','description'], where: { moduleQHSEId : 1, numSession: 1}}
  
  ).then (cours => {res.send(cours)});
}
//session2
const listerCours1Session2 = (req,res) => {
  
  Cours.findAll({attributes: ['id', 'name','description'], where: { moduleQHSEId : 1, numSession: 2}}
  
  ).then (cours => {res.send(cours)});
}
//session3
const listerCours1Session3 = (req,res) => {
  
  Cours.findAll({attributes: ['id', 'name','description'], where: { moduleQHSEId : 1, numSession: 3}}
  
  ).then (cours => {res.send(cours)});
}
//session4
const listerCours1Session4 = (req,res) => {
  
  Cours.findAll({attributes: ['id', 'name','description'], where: { moduleQHSEId : 1, numSession: 4}}
  
  ).then (cours => {res.send(cours)});
}
//session5
const listerCours1Session5 = (req,res) => {
  
  Cours.findAll({attributes: ['id', 'name','description'], where: { moduleQHSEId : 1, numSession: 5}}
  
  ).then (cours => {res.send(cours)});
}


//Module2
//upload1 
const uploadC2S1 = async (req, res) => {
  try {
    console.log(req.file);

    if (req.file == undefined) {
      return res.send("You must select a file.");
    }
    Cours.create({
      type: req.file.mimetype,
      name: req.file.originalname,
      description: req.body.description,

      data: fs.readFileSync(
        __basedir + "/uploads/" + req.file.filename
      ),
      moduleQHSEId: 2,
      numSession: 1
    }).then((cours) => {
      fs.writeFileSync(
        __basedir + "/tmp/" + cours.name,
        cours.data
      );return res.send("File has been uploaded.");
    });
  } catch (error) {
    console.log(error);
    return res.send("Error when trying upload images: ${error}");
  }
};
//upload2
const uploadC2S2 = async (req, res) => {
  try {
    console.log(req.file);

    if (req.file == undefined) {
      return res.send("You must select a file.");
    }
    Cours.create({
      type: req.file.mimetype,
      name: req.file.originalname,
      description: req.body.description,

      data: fs.readFileSync(
        __basedir + "/uploads/" + req.file.filename
      ),
      moduleQHSEId: 2,
      numSession: 2
    }).then((cours) => {
      fs.writeFileSync(
        __basedir + "/tmp/" + cours.name,
        cours.data
      );return res.send("File has been uploaded.");
    });
  } catch (error) {
    console.log(error);
    return res.send("Error when trying upload images: ${error}");
  }
};
//upload3 
const uploadC2S3 = async (req, res) => {
  try {
    console.log(req.file);

    if (req.file == undefined) {
      return res.send("You must select a file.");
    }
    Cours.create({
      type: req.file.mimetype,
      name: req.file.originalname,
      data: fs.readFileSync(
        __basedir + "/uploads/" + req.file.filename
      ),
      moduleQHSEId: 2,
      numSession: 3
    }).then((cours) => {
      fs.writeFileSync(
        __basedir + "/tmp/" + cours.name,
        cours.data
      );return res.send("File has been uploaded.");
    });
  } catch (error) {
    console.log(error);
    return res.send("Error when trying upload images: ${error}");
  }
};

//upload4 
const uploadC2S4 = async (req, res) => {
  try {
    console.log(req.file);

    if (req.file == undefined) {
      return res.send("You must select a file.");
    }
    Cours.create({
      type: req.file.mimetype,
      name: req.file.originalname,
      description: req.body.description,

      data: fs.readFileSync(
        __basedir + "/uploads/" + req.file.filename
      ),
      moduleQHSEId: 2,
      numSession: 4
    }).then((cours) => {
      fs.writeFileSync(
        __basedir + "/tmp/" + cours.name,
        cours.data
      );return res.send("File has been uploaded.");
    });
  } catch (error) {
    console.log(error);
    return res.send("Error when trying upload images: ${error}");
  }
};

//upload5
const uploadC2S5 = async (req, res) => {
  try {
    console.log(req.file);

    if (req.file == undefined) {
      return res.send("You must select a file.");
    }
    Cours.create({
      type: req.file.mimetype,
      name: req.file.originalname,
      description: req.body.description,

      data: fs.readFileSync(
        __basedir + "/uploads/" + req.file.filename
      ),
      moduleQHSEId: 2,
      numSession: 5
    }).then((cours) => {
      fs.writeFileSync(
        __basedir + "/tmp/" + cours.name,
        cours.data
      );return res.send("File has been uploaded.");
    });
  } catch (error) {
    console.log(error);
    return res.send("Error when trying upload images: ${error}");
  }
};

//session1
const listerCours2Session1 = (req,res) => {
  
  Cours.findAll({attributes: ['id', 'name','description'], where: { moduleQHSEId : 2, numSession: 1}}
  
  ).then (cours => {res.send(cours)});
}
//session2
const listerCours2Session2 = (req,res) => {
  
  Cours.findAll({attributes: ['id', 'name','description'], where: { moduleQHSEId : 2, numSession: 2}}
  
  ).then (cours => {res.send(cours)});
}
//session3
const listerCours2Session3 = (req,res) => {
  
  Cours.findAll({attributes: ['id', 'name','description'], where: { moduleQHSEId : 2, numSession: 3}}
  
  ).then (cours => {res.send(cours)});
}
//session4
const listerCours2Session4 = (req,res) => {
  
  Cours.findAll({attributes: ['id', 'name','description'], where: { moduleQHSEId : 2, numSession: 4}}
  
  ).then (cours => {res.send(cours)});
}
//session5
const listerCours2Session5 = (req,res) => {
  
  Cours.findAll({attributes: ['id', 'name','description'], where: { moduleQHSEId : 2, numSession: 5}}
  
  ).then (cours => {res.send(cours)});
}

//Module3
//upload1 
const uploadC3S1 = async (req, res) => {
  try {
    console.log(req.file);

    if (req.file == undefined) {
      return res.send("You must select a file.");
    }
    Cours.create({
      type: req.file.mimetype,
      name: req.file.originalname,
      description: req.body.description,

      data: fs.readFileSync(
        __basedir + "/uploads/" + req.file.filename
      ),
      moduleQHSEId: 3,
      numSession: 1
    }).then((cours) => {
      fs.writeFileSync(
        __basedir + "/tmp/" + cours.name,
        cours.data
      );return res.send("File has been uploaded.");
    });
  } catch (error) {
    console.log(error);
    return res.send("Error when trying upload images: ${error}");
  }
};
//upload2
const uploadC3S2 = async (req, res) => {
  try {
    console.log(req.file);

    if (req.file == undefined) {
      return res.send("You must select a file.");
    }
    Cours.create({
      type: req.file.mimetype,
      name: req.file.originalname,
      description: req.body.description,

      data: fs.readFileSync(
        __basedir + "/uploads/" + req.file.filename
      ),
      moduleQHSEId: 3,
      numSession: 2
    }).then((cours) => {
      fs.writeFileSync(
        __basedir + "/tmp/" + cours.name,
        cours.data
      );return res.send("File has been uploaded.");
    });
  } catch (error) {
    console.log(error);
    return res.send("Error when trying upload images: ${error}");
  }
};
//upload3 
const uploadC3S3 = async (req, res) => {
  try {
    console.log(req.file);

    if (req.file == undefined) {
      return res.send("You must select a file.");
    }
    Cours.create({
      type: req.file.mimetype,
      name: req.file.originalname,
      description: req.body.description,

      data: fs.readFileSync(
        __basedir + "/uploads/" + req.file.filename
      ),
      moduleQHSEId: 3,
      numSession: 3
    }).then((cours) => {
      fs.writeFileSync(
        __basedir + "/tmp/" + cours.name,
        cours.data
      );return res.send("File has been uploaded.");
    });
  } catch (error) {
    console.log(error);
    return res.send("Error when trying upload images: ${error}");
  }
};

//upload4 
const uploadC3S4 = async (req, res) => {
  try {
    console.log(req.file);

    if (req.file == undefined) {
      return res.send("You must select a file.");
    }
    Cours.create({
      type: req.file.mimetype,
      name: req.file.originalname,
      description: req.body.description,

      data: fs.readFileSync(
        __basedir + "/uploads/" + req.file.filename
      ),
      moduleQHSEId: 3,
      numSession: 4
    }).then((cours) => {
      fs.writeFileSync(
        __basedir + "/tmp/" + cours.name,
        cours.data
      );return res.send("File has been uploaded.");
    });
  } catch (error) {
    console.log(error);
    return res.send("Error when trying upload images: ${error}");
  }
};

//upload5
const uploadC3S5 = async (req, res) => {
  try {
    console.log(req.file);

    if (req.file == undefined) {
      return res.send("You must select a file.");
    }
    Cours.create({
      type: req.file.mimetype,
      name: req.file.originalname,
      description: req.body.description,

      data: fs.readFileSync(
        __basedir + "/uploads/" + req.file.filename
      ),
      moduleQHSEId: 3,
      numSession: 5
    }).then((cours) => {
      fs.writeFileSync(
        __basedir + "/tmp/" + cours.name,
        cours.data
      );return res.send("File has been uploaded.");
    });
  } catch (error) {
    console.log(error);
    return res.send("Error when trying upload images: ${error}");
  }
};

//session1
const listerCours3Session1 = (req,res) => {
  
  Cours.findAll({attributes: ['id', 'name','description'], where: { moduleQHSEId : 3, numSession: 1}}
  
  ).then (cours => {res.send(cours)});
}
//session2
const listerCours3Session2 = (req,res) => {
  
  Cours.findAll({attributes: ['id', 'name','description'], where: { moduleQHSEId : 3, numSession: 2}}
  
  ).then (cours => {res.send(cours)});
}
//session3
const listerCours3Session3 = (req,res) => {
  
  Cours.findAll({attributes: ['id', 'name','description'], where: { moduleQHSEId : 3, numSession: 3}}
  
  ).then (cours => {res.send(cours)});
}
//session4
const listerCours3Session4 = (req,res) => {
  
  Cours.findAll({attributes: ['id', 'name','description'], where: { moduleQHSEId : 3, numSession: 4}}
  
  ).then (cours => {res.send(cours)});
}
//session5
const listerCours3Session5 = (req,res) => {
  
  Cours.findAll({attributes: ['id', 'name','description'], where: { moduleQHSEId : 3, numSession: 5}}
  
  ).then (cours => {res.send(cours)});
}

//Module4
//upload1 
const uploadC4S1 = async (req, res) => {
  try {
    console.log(req.file);

    if (req.file == undefined) {
      return res.send("You must select a file.");
    }
    Cours.create({
      type: req.file.mimetype,
      name: req.file.originalname,
      description: req.body.description,

      data: fs.readFileSync(
        __basedir + "/uploads/" + req.file.filename
      ),
      moduleQHSEId: 4,
      numSession: 1
    }).then((cours) => {
      fs.writeFileSync(
        __basedir + "/tmp/" + cours.name,
        cours.data
      );return res.send("File has been uploaded.");
    });
  } catch (error) {
    console.log(error);
    return res.send("Error when trying upload images: ${error}");
  }
};
//upload2
const uploadC4S2 = async (req, res) => {
  try {
    console.log(req.file);

    if (req.file == undefined) {
      return res.send("You must select a file.");
    }
    Cours.create({
      type: req.file.mimetype,
      name: req.file.originalname,
      description: req.body.description,

      data: fs.readFileSync(
        __basedir + "/uploads/" + req.file.filename
      ),
      moduleQHSEId: 4,
      numSession: 2
    }).then((cours) => {
      fs.writeFileSync(
        __basedir + "/tmp/" + cours.name,
        cours.data
      );return res.send("File has been uploaded.");
    });
  } catch (error) {
    console.log(error);
    return res.send("Error when trying upload images: ${error}");
  }
};
//upload3 
const uploadC4S3 = async (req, res) => {
  try {
    console.log(req.file);

    if (req.file == undefined) {
      return res.send("You must select a file.");
    }
    Cours.create({
      type: req.file.mimetype,
      name: req.file.originalname,
      description: req.body.description,

      data: fs.readFileSync(
        __basedir + "/uploads/" + req.file.filename
      ),
      moduleQHSEId: 4,
      numSession: 3
    }).then((cours) => {
      fs.writeFileSync(
        __basedir + "/tmp/" + cours.name,
        cours.data
      );return res.send("File has been uploaded.");
    });
  } catch (error) {
    console.log(error);
    return res.send("Error when trying upload images: ${error}");
  }
};

//upload4 
const uploadC4S4 = async (req, res) => {
  try {
    console.log(req.file);

    if (req.file == undefined) {
      return res.send("You must select a file.");
    }
    Cours.create({
      type: req.file.mimetype,
      name: req.file.originalname,
      description: req.body.description,

      data: fs.readFileSync(
        __basedir + "/uploads/" + req.file.filename
      ),
      moduleQHSEId: 4,
      numSession: 4
    }).then((cours) => {
      fs.writeFileSync(
        __basedir + "/tmp/" + cours.name,
        cours.data
      );return res.send("File has been uploaded.");
    });
  } catch (error) {
    console.log(error);
    return res.send("Error when trying upload images: ${error}");
  }
};

//upload5
const uploadC4S5 = async (req, res) => {
  try {
    console.log(req.file);

    if (req.file == undefined) {
      return res.send("You must select a file.");
    }
    Cours.create({
      type: req.file.mimetype,
      name: req.file.originalname,
      description: req.body.description,

      data: fs.readFileSync(
        __basedir + "/uploads/" + req.file.filename
      ),
      moduleQHSEId: 4,
      numSession: 5
    }).then((cours) => {
      fs.writeFileSync(
        __basedir + "/tmp/" + cours.name,
        cours.data
      );return res.send("File has been uploaded.");
    });
  } catch (error) {
    console.log(error);
    return res.send("Error when trying upload images: ${error}");
  }
};

//session1
const listerCours4Session1 = (req,res) => {
  
  Cours.findAll({attributes: ['id', 'name','description'], where: { moduleQHSEId : 4, numSession: 1}}
  
  ).then (cours => {res.send(cours)});
}
//session2
const listerCours4Session2 = (req,res) => {
  
  Cours.findAll({attributes: ['id', 'name','description'], where: { moduleQHSEId : 4, numSession: 2}}
  
  ).then (cours => {res.send(cours)});
}
//session3
const listerCours4Session3 = (req,res) => {
  
  Cours.findAll({attributes: ['id', 'name','description'], where: { moduleQHSEId : 4, numSession: 3}}
  
  ).then (cours => {res.send(cours)});
}
//session4
const listerCours4Session4 = (req,res) => {
  
  Cours.findAll({attributes: ['id', 'name','description'], where: { moduleQHSEId : 4, numSession: 4}}
  
  ).then (cours => {res.send(cours)});
}
//session5
const listerCours4Session5 = (req,res) => {
  
  Cours.findAll({attributes: ['id', 'name','description'], where: { moduleQHSEId : 4, numSession: 5}}
  
  ).then (cours => {res.send(cours)});
}

//Module5
//upload1 
const uploadC5S1 = async (req, res) => {
  try {
    console.log(req.file);

    if (req.file == undefined) {
      return res.send("You must select a file.");
    }
    Cours.create({
      type: req.file.mimetype,
      name: req.file.originalname,
      description: req.body.description,

      data: fs.readFileSync(
        __basedir + "/uploads/" + req.file.filename
      ),
      moduleQHSEId: 5,
      numSession: 1
    }).then((cours) => {
      fs.writeFileSync(
        __basedir + "/tmp/" + cours.name,
        cours.data
      );return res.send("File has been uploaded.");
    });
  } catch (error) {
    console.log(error);
    return res.send("Error when trying upload images: ${error}");
  }
};
//upload2
const uploadC5S2 = async (req, res) => {
  try {
    console.log(req.file);

    if (req.file == undefined) {
      return res.send("You must select a file.");
    }
    Cours.create({
      type: req.file.mimetype,
      name: req.file.originalname,
      data: fs.readFileSync(
        __basedir + "/uploads/" + req.file.filename
      ),
      moduleQHSEId: 5,
      numSession: 2
    }).then((cours) => {
      fs.writeFileSync(
        __basedir + "/tmp/" + cours.name,
        cours.data
      );return res.send("File has been uploaded.");
    });
  } catch (error) {
    console.log(error);
    return res.send("Error when trying upload images: ${error}");
  }
};
//upload3 
const uploadC5S3 = async (req, res) => {
  try {
    console.log(req.file);

    if (req.file == undefined) {
      return res.send("You must select a file.");
    }
    Cours.create({
      type: req.file.mimetype,
      name: req.file.originalname,
      description: req.body.description,

      data: fs.readFileSync(
        __basedir + "/uploads/" + req.file.filename
      ),
      moduleQHSEId: 5,
      numSession: 3
    }).then((cours) => {
      fs.writeFileSync(
        __basedir + "/tmp/" + cours.name,
        cours.data
      );return res.send("File has been uploaded.");
    });
  } catch (error) {
    console.log(error);
    return res.send("Error when trying upload images: ${error}");
  }
};

//upload4 
const uploadC5S4 = async (req, res) => {
  try {
    console.log(req.file);

    if (req.file == undefined) {
      return res.send("You must select a file.");
    }
    Cours.create({
      type: req.file.mimetype,
      name: req.file.originalname,
      description: req.body.description,

      data: fs.readFileSync(
        __basedir + "/uploads/" + req.file.filename
      ),
      moduleQHSEId: 5,
      numSession: 4
    }).then((cours) => {
      fs.writeFileSync(
        __basedir + "/tmp/" + cours.name,
        cours.data
      );return res.send("File has been uploaded.");
    });
  } catch (error) {
    console.log(error);
    return res.send("Error when trying upload images: ${error}");
  }
};

//upload5
const uploadC5S5 = async (req, res) => {
  try {
    console.log(req.file);

    if (req.file == undefined) {
      return res.send("You must select a file.");
    }
    Cours.create({
      type: req.file.mimetype,
      name: req.file.originalname,
      description: req.body.description,

      data: fs.readFileSync(
        __basedir + "/uploads/" + req.file.filename
      ),
      moduleQHSEId: 5,
      numSession: 5
    }).then((cours) => {
      fs.writeFileSync(
        __basedir + "/tmp/" + cours.name,
        cours.data
      );return res.send("File has been uploaded.");
    });
  } catch (error) {
    console.log(error);
    return res.send("Error when trying upload images: ${error}");
  }
};

//session1
const listerCours5Session1 = (req,res) => {
  
  Cours.findAll({attributes: ['id', 'name','description'], where: { moduleQHSEId : 5, numSession: 1}}
  
  ).then (cours => {res.send(cours)});
}
//session2
const listerCours5Session2 = (req,res) => {
  
  Cours.findAll({attributes: ['id', 'name','description'], where: { moduleQHSEId : 5, numSession: 2}}
  
  ).then (cours => {res.send(cours)});
}
//session3
const listerCours5Session3 = (req,res) => {
  
  Cours.findAll({attributes: ['id', 'name','description'], where: { moduleQHSEId : 5, numSession: 3}}
  
  ).then (cours => {res.send(cours)});
}
//session4
const listerCours5Session4 = (req,res) => {
  
  Cours.findAll({attributes: ['id', 'name','description'], where: { moduleQHSEId : 5, numSession: 4}}
  
  ).then (cours => {res.send(cours)});
}
//session5
const listerCours5Session5 = (req,res) => {
  
  Cours.findAll({attributes: ['id', 'name','description'], where: { moduleQHSEId : 5, numSession: 5}}
  
  ).then (cours => {res.send(cours)});
}

//downloadFile
const downloadFile = (req, res) => {
	Cours.findByPk(req.params.id).then(cours => {
		var fileContents = Buffer.from(cours.data, "base64");
		var readStream = new stream.PassThrough();
		readStream.end(fileContents);
		
		res.set('Content-disposition', 'attachment; filename=' + cours.name);
		res.set('Content-Type', cours.type);

		readStream.pipe(res);
	})
}

const deleteCours = (req, res) =>
{
    const id = req.params.id;
    Cours.destroy({
        where: { id: id }
    })
    .then(cours=>{
        res.status(200).send("cours  "+id+" is deleted");
    }
    ).catch(err =>{
        res.status(500).send({ message: err.message });
    });
};

module.exports = {
  uploadFiles,listAllFiles,downloadFile,
//MODULE1
  uploadC1S1,listerCours1Session1,
  uploadC1S2,listerCours1Session2,
  uploadC1S3,listerCours1Session3,
   uploadC1S4,listerCours1Session4,
   uploadC1S5,listerCours1Session5,
//MODULE2
uploadC2S1,listerCours2Session1,
  uploadC2S2,listerCours2Session2,
  uploadC2S3,listerCours2Session3,
   uploadC2S4,listerCours2Session4,
   uploadC2S5,listerCours2Session5,
   //MODULE3
uploadC3S1,listerCours3Session1,
uploadC3S2,listerCours3Session2,
uploadC3S3,listerCours3Session3,
 uploadC3S4,listerCours3Session4,
 uploadC3S5,listerCours3Session5,
 //MODULE4
uploadC4S1,listerCours4Session1,
uploadC4S2,listerCours4Session2,
uploadC4S3,listerCours4Session3,
 uploadC4S4,listerCours4Session4,
 uploadC4S5,listerCours4Session5,
 //MODULE5
 uploadC5S1,listerCours5Session1,
   uploadC5S2,listerCours5Session2,
   uploadC5S3,listerCours5Session3,
    uploadC5S4,listerCours5Session4,
    uploadC5S5,listerCours5Session5,

    deleteCours,
};