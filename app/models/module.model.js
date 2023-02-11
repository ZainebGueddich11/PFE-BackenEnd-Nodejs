module.exports = (sequelize , Sequelize)=>
{
    const ModuleQHSE = sequelize.define("moduleQHSE",{
   name:{
       type: Sequelize.STRING
   },
  
 });
    return ModuleQHSE;
}