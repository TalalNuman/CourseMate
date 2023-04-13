module.exports = (sequelize, DataTypes) => {
    const TeacherCourse = sequelize.define(
      "TeacherCourses",
      {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        teacher_id: {
          type: DataTypes.INTEGER,
          references: {
            model: "Teachers",
            key: "id",
          },
          allowNull: false,
        },
        course_id: {
          type: DataTypes.INTEGER,
          references: {
            model: "Courses",
            key: "id",
          },
          allowNull: false,
        },
      },
      {
        timestamps: true,
        createdAt: "created_at",
        updatedAt: "updated_at",
      }
    );
  
    return TeacherCourse;
  };
  