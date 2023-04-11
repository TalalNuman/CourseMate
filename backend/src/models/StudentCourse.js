module.exports = (sequelize, DataTypes) => {
  const StudentCourse = sequelize.define(
    "StudentCourse",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      studentId: {
        type: DataTypes.INTEGER,
        references: {
          model: "students",
          key: "id",
        },
      },
      courseId: {
        type: DataTypes.INTEGER,
        references: {
          model: "courses",
          key: "id",
        },
      },
    },
    {
      tableName: "student_courses",
    }
  );

  return StudentCourse;
};
