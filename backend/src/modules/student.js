const { Student } = require("../models");
const getAllStudents = async (body) => {
  const students = await Student.findAll();
  return students;
};
const createStudent = async (body) => {
  const student = await Student.create(body);
  return student;
};
const getStudentById = async (id) => {
  const student = await Student.findOne({
    where: {
      id: id,
    },
  });
  return student;
};
const updateStudent = async (id, body) => {
  
    const student = await Student.update({
        ...body,
        updated_at: new Date(),
    }, {
        where: {
            id: id,
        },
    });
    return student;
};

const deleteStudent = async (id) => {
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
