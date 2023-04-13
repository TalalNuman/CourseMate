const studentModule = require("../modules/student");

const createStudent = async (req, res) => {
  try {
    const student = await studentModule.createStudent(req.body);
    return res.status(200).send(student);
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const getStudents = async (req, res) => {
  try {
    const students = await studentModule.getAllStudents();
    return res.status(200).send(students);
  } catch (error) {
    return res.status(500).send(error.message);
  }
};
const getStudentById = async (req, res) => {
  try {
    const student = await studentModule.getStudentById(req.params.id);
    if (!student) return res.status(404).send("Student not found");
    return res.status(200).send(student);
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const updateStudent = async (req, res) => {
  try {
    const student = await studentModule.getStudentById(req.params.id);
    if (!student) return res.status(404).send("Student not found");

    const updatedStudent = await studentModule.updateStudent(
      req.params.id,
      req.body
    );
    return res.status(200).send("Updated");
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const deleteStudent = async (req, res) => {
  try {
    const student = await studentModule.getStudentById(req.params.id);
    if (!student) return res.status(404).send("Student not found");

    await studentModule.deleteStudent(req.params.id);
    return res.status(200).send("Deleted Successfully");
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

module.exports = {
  getStudents,
  createStudent,
  getStudentById,
  updateStudent,
  deleteStudent,
};
