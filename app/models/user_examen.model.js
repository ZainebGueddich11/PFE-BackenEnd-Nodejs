module.exports = (sequelize , Sequelize)=>{
const user_examen = sequelize.define("user_examen", {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    note:{
        type: Sequelize.INTEGER
    },
    actif:{
      type: Sequelize.BOOLEAN,
      
  },
  success:
  {
    type: Sequelize.BOOLEAN,
  }

   // selfGranted: DataTypes.BOOLEAN
  }//, { timestamps: false }
  );
  return user_examen;
}