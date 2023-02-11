const config = require ("../config/db.config.js");
const Sequelize = require("sequelize");
const sequelize = new Sequelize(
    config.DB,
    config.USER,
    config.PASSWORD,
    {
        host: config.HOST,
        dialect: config.dialect,
        operatorsAliases: 0,
        pool: {
            max: config.pool.max,
            min: config.pool.min,
            acquire: config.pool.acquire,
            idle: config.pool.idle
        }
    }
);
const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.user = require("../models/user.model.js")(sequelize, Sequelize);
db.role = require("../models/role.model.js")(sequelize, Sequelize);
db.moduleQHSE = require("../models/module.model.js")(sequelize, Sequelize);
db.cours = require("../models/cours.model.js")(sequelize, Sequelize);
//db.questionschema = require("../models/quiz.model.js")(sequelize, Sequelize);
db.examen = require("../models/examen.js")(sequelize, Sequelize);
db.questionschemas = require("../models/questionschemas.js")(sequelize, Sequelize);
db.user_examen = require("../models/user_examen.model.js")(sequelize, Sequelize);
db.badge = require("../models/badge.model.js")(sequelize, Sequelize);

db.chat= require("../models/chat.js")(sequelize, Sequelize);



db.badge.hasMany(db.user);

db.role.belongsToMany(db.user,
    {
        through: "user_roles",
        foreignKey: "roleId",
        otherKey: "userId"
    });
    db.user.belongsToMany(db.role, {
        through: "user_roles",
        foreignKey: "userId",
        otherKey: "roleId"
      });
      db.ROLES = ["user", "admin", "moderator"];
      
     // db.user.belongsTo(db.module);
      //db.module.hasMany(db.user,{foreignKey: "moduleId"});
      
      db.user.hasMany(db.moduleQHSE);
      db.moduleQHSE.belongsTo(db.user,{foreignKey: "userId"});

     
      db.cours.belongsTo(db.moduleQHSE,{foreignKey: "moduleQHSEId"});
      db.moduleQHSE.hasMany(db.cours);
     
      
      
      db.examen.hasMany(db.moduleQHSE, {
          foreignKey: 'examenId'
      });

      
    db.moduleQHSE.belongsTo(db.examen);

   
    db.examen.hasMany(db.questionschemas, {
        foreignKey: 'id_examen'
    });


    db.examen.belongsToMany(db.user,
        { 
           
            through: "user_examen",
            foreignKey: "examenId",
            otherKey: "userId"
        });
        db.user.belongsToMany(db.examen,
            {
               
            through: "user_examen",
            foreignKey: "userId",
            otherKey: "examenId"
          });
          db.user_examen.belongsTo(db.examen);



      

          
      module.exports = db;
      