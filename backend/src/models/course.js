module.exports = (sequelize, DataTypes) => {
  const Course = sequelize.define(
    "Course",
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      field: {
        type: DataTypes.ENUM("Science", "History", "Arts"),
        allowNull: false,
      },
      credit_hours: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      lab: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
    },
    {
      timestamps: true,
      createdAt: "created_at",
      updatedAt: "updated_at",
    }
  );

  Course.associate = (models) => {
    Course.belongsToMany(models.Student, {
      through: "StudentCourse",
      foreignKey: "courseId",
      otherKey: "studentId",
    });
  };

  return Course;
};
