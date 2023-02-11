module.exports = (sequelize , Sequelize)=>
{
var Chat = sequelize.define('chat', {
        message: {
            type: Sequelize.STRING
        },

        id_user: {
            type: Sequelize.INTEGER
        },
        id_user_to: {
            type: Sequelize.INTEGER
        },

        timestamp: {
            type: Sequelize.DATE
        },


    },

    {
        timestamps: false,
        // I don't want createdAt
        createdAt: false,

        // I want updatedAt to actually be called updateTimestamp
        updatedAt: false,
        tableName: 'chat',
        freezeTableName: true,

    });
    return Chat
}


