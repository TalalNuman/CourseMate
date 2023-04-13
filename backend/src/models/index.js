const Sequelize = require("sequelize");
const sequelize = require("../config/sequelize");

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.Student = require("./student")(sequelize, Sequelize.DataTypes);
db.Course = require("./course")(sequelize, Sequelize.DataTypes);
db.StudentCourse = require("./studentCourse")(sequelize, Sequelize.DataTypes);
db.Teacher = require("./teacher")(sequelize, Sequelize.DataTypes);
db.TeacherCourse = require("./teacherCourse")(sequelize, Sequelize.DataTypes);

db.Teacher.belongsToMany(db.Course, {
  through: db.TeacherCourse,
  foreignKey: "teacher_id",
});
db.Course.belongsToMany(db.Teacher, {
  through: db.TeacherCourse,
  foreignKey: "course_id",
});

db.TeacherCourse.belongsTo(db.Teacher, { foreignKey: "teacher_id" });
db.TeacherCourse.belongsTo(db.Course, { foreignKey: "course_id" });

db.Student.belongsToMany(db.Course, {
  through: db.StudentCourse,
  foreignKey: "student_id",
});
db.Course.belongsToMany(db.Student, {
  through: db.StudentCourse,
  foreignKey: "course_id",
});

db.StudentCourse.belongsTo(db.Student, { foreignKey: "student_id" });
db.StudentCourse.belongsTo(db.Course, { foreignKey: "course_id" });
// sequelize.sync({ force: true }).then(() => {
//   console.log("Database & tables created!");
// });

module.exports = db;
