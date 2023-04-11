module.exports = (sequelize, DataTypes) => {
  const Student = sequelize.define("Student", {
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
  });

  Student.associate = (models) => {
    Student.belongsToMany(models.Course, {
      through: 'StudentCourse',
      foreignKey: 'studentId',
      otherKey: 'courseId'
    });
  };

  return Student;
};
