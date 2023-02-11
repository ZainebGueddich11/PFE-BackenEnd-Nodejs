
   

module.exports = (sequelize , Sequelize)=>
{const examen = sequelize.define('examen', {
        id: {
            primaryKey: true,
            autoIncrement: true,
            type: Sequelize.INTEGER
        },
        name: Sequelize.STRING,
        note: Sequelize.STRING,
        duration:Sequelize.INTEGER,
        dateExamen:Sequelize.DATEONLY

    },

    {
        timestamps: false,
        // I don't want createdAt
        createdAt: false,

        // I want updatedAt to actually be called updateTimestamp
        updatedAt: false,
        tableName: 'examen',
        freezeTableName: true,

    });
    return examen
}
