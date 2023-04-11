const {DataTypes} = require('sequelize');
const sequelize = require('../config/sequelize');

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.Student = require('./student')(sequelize, DataTypes);
db.Course = require('./course')(sequelize, DataTypes);
db.StudentCourse = require('./studentCourse')(sequelize,DataTypes);

db.Student.belongsToMany(db.Course, { through: db.StudentCourse });
db.Course.belongsToMany(db.Student, { through: db.StudentCourse });

sequelize.sync({ force: true }).then(() => {
  console.log('Database & tables created!');
});

module.exports = db;