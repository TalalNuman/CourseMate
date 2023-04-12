module.exports = (sequelize, DataTypes) => {
  const Student = sequelize.define(
    "Students",
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      cell_number: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      age: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      address: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      timestamps: true,
      createdAt: "created_at",
      updatedAt: "updated_at",
    }
  );

  Student.associate = (models) => {
    Student.belongsToMany(models.Course, {
      through: "StudentCourse",
      foreignKey: "studentId",
      otherKey: "courseId",
    });
  };

  return Student;
};
