module.exports = (sequelize , Sequelize)=>
{
    const Badge = sequelize.define("badge",{
   type:{
       type: Sequelize.STRING
   },
   name:{
    type: Sequelize.STRING
   },
   description:{
    type: Sequelize.STRING
   },
    data: {
        type: Sequelize.BLOB('long'),
    },
    dateBadge:{
       type:Sequelize.DATEONLY 
    }
    
    });
    
    return Badge;
    
}