const courseModule = require("../modules/course");

const createCourse = async (req, res) => {
  try {
    const course = await courseModule.createCourse(req.body);
    return res.status(200).send(course);
  } catch (e) {
    return res.status(500).send(e.message);
  }
};

const getCourses = async (req, res) => {
  try {
    const courses = await courseModule.getAllCourses();
    return res.status(200).send(courses);
  } catch (error) {
    return res.status(500).send(e.message);
  }
};
const getCourseById = async (req, res) => {
  try {
    const course = await courseModule.getCourseById(req.params.id);
    if (!course) return res.status(404).send("Course not found");
    return res.status(200).send(course);
  } catch (error) {
    return res.status(500).send(e.message);
  }
};

const updateCourse = async (req, res) => {
  try {
    const course = await courseModule.getCourseById(req.params.id);
    if (!course) return res.status(404).send("Course not found");

    const updatedCourse = await courseModule.updateCourse(req.params.id, req.body);
    return res.status(200).send("Updated successfully");
  } catch (error) {
    return res.status(500).send(e.message);
  }
};

const deleteCourse = async (req, res) => {
  try {
    const course = await courseModule.getCourseById(req.params.id);
    if (!course) return res.status(404).send("Course not found");

    await courseModule.deleteCourse(req.params.id);
    return res.status(200).send("Course deleted");
  } catch (error) {
    return res.status(500).send(e.message);
  }
};

module.exports = {
  getCourses,
  createCourse,
  getCourseById,
  updateCourse,
  deleteCourse,
};
