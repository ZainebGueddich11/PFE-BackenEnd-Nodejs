


module.exports = (sequelize , Sequelize)=>{const questionschemas = sequelize.define('questionschemas', {
        id: {
            primaryKey: true,
            autoIncrement: true,
            type: Sequelize.INTEGER
        },
        question: Sequelize.STRING,
        option1: Sequelize.STRING,
        option2: Sequelize.STRING,
        option3: Sequelize.STRING,
        answer: Sequelize.INTEGER,
        noteQuestion: Sequelize.INTEGER,
    },
    {
        timestamps: false,
        // I don't want createdAt
        createdAt: false,

        // I want updatedAt to actually be called updateTimestamp
        updatedAt: false,
        tableName: 'questionschemas',
        freezeTableName: true,

    });
    return questionschemas ;
}
