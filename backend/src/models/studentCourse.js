module.exports = (sequelize, DataTypes) => {
  const StudentCourse = sequelize.define(
    "StudentCourses",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      student_id: {
        type: DataTypes.INTEGER,
        references: {
          model: "Students",
          key: "id",
        },
      },
      course_id: {
        type: DataTypes.INTEGER,
        references: {
          model: "Courses",
          key: "id",
        },
      },
    },
    {
      timestamps: true,
      createdAt: "created_at",
      updatedAt: "updated_at",
    }
  );

  return StudentCourse;
};
