

module.exports = (sequelize , Sequelize)=>
{
    const User = sequelize.define("users",{
   username:{
       type: Sequelize.STRING
   },
   email: {
    type: Sequelize.STRING  
   },
   password: {
    type: Sequelize.STRING
   },
   ville:{
    type: Sequelize.STRING
    },
    pays:{
        type: Sequelize.STRING
    },
   
    });
    
    return User;
    
}