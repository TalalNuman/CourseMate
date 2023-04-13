const teacherModule = require("../modules/teacher");

const createTeacher = async (req, res) => {
  try {
    const teacher = await teacherModule.createTeacher(req.body);
    return res.status(200).send(teacher);
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const getTeachers = async (req, res) => {
  try {
    const teachers = await teacherModule.getAllTeachers();
    return res.status(200).send(teachers);
  } catch (error) {
    return res.status(500).send(error.message);
  }
};
const getTeacherById = async (req, res) => {
  try {
    const teacher = await teacherModule.getTeacherById(req.params.id);
    if (!teacher) return res.status(404).send("Teacher not found");
    const teacherWithCourses = await teacherModule.getTeacherWithCoursesById(req.params.id);
    return res.status(200).send(teacherWithCourses);
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const updateTeacher = async (req, res) => {
  try {
    const teacher = await teacherModule.getTeacherById(req.params.id);
    if (!teacher) return res.status(404).send("Teacher not found");

    const updatedTeacher = await teacherModule.updateTeacher(
      req.params.id,
      req.body
    );
    return res.status(200).send("Updated");
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const deleteTeacher = async (req, res) => {
  try {
    const teacher = await teacherModule.getTeacherById(req.params.id);
    if (!teacher) return res.status(404).send("Teacher not found");

    await teacherModule.deleteTeacher(teacher);
    return res.status(200).send("Deleted Successfully");
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

module.exports = {
  getTeachers,
  createTeacher,
  getTeacherById,
  updateTeacher,
  deleteTeacher,
};
