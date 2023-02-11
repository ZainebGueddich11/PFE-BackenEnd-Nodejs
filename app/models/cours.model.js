module.exports = (sequelize , Sequelize)=>
{
    const Cours = sequelize.define("cours",{
   type:{
       type: Sequelize.STRING
   },
   name:{
    type: Sequelize.STRING
   },
    data: {
        type: Sequelize.BLOB('long'),
    },
    numSession: {
        type: Sequelize.INTEGER
    },
    description: {
        type: Sequelize.STRING
    },
    });
    
    return Cours;
    
}