const { Student, Course, StudentCourse, sequelize } = require("../models");

const createStudent = async (body) => {
  const student = await Student.create(body);
  return student;
};
const getAllStudents = async () => {
  const students = await Student.findAll({
    attributes: {
      include: [
        [
          sequelize.literal(
            `(SELECT COUNT(DISTINCT student_id, course_id) FROM StudentCourses WHERE student_id = id)`
          ),
          "course_count",
        ],
      ],
    },
    include: [{ model: Course, attributes: [] }],
  });

  return students;
};
const getStudentById = async (id) => {
  const student = await Student.findOne({
    where: {
      id: id,
    },
    include: {
      model: Course,
      through: {
        model: StudentCourse,
        attributes: [],
      },
      attributes: ["id", "name"], // add additional course attributes as needed
    },
  });
  return student;
};
const updateStudent = async (id, body) => {
  const student = await Student.update(
    {
      ...body,
      updated_at: new Date(),
    },
    {
      where: {
        id: id,
      },
    }
  );
  return student;
};

const deleteStudent = async () => {
  const student = await Student.destroy({
    where: {
      id: id,
    },
  });

  return student;
};

module.exports = {
  getAllStudents,
  createStudent,
  getStudentById,
  updateStudent,
  deleteStudent,
};
