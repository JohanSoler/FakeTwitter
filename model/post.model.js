module.exports = (sequelize, Sequelize) =>{
    const Post = sequelize.define ("Post", {
        idPost: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        message: Sequelize.STRING,
        published_date: Sequelize.DATE,
        idUser : Sequelize.INTEGER
    }, {
        tableName: "posts"
    });
    return Post;
}
