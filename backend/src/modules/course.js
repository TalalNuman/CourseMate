const { Course } = require("../models");
const getAllCourses = async (body) => {
  const courses = await Course.findAll();
  return courses;
};
const createCourse = async (body) => {
  const course = await Course.create(body);
  return course;
};
const getCourseById = async (id) => {
  const course = await Course.findOne({
    where: {
      id: id,
    },
  });
  return course;
};
const updateCourse = async (id, body) => {
  
    const course = await Course.update({
        ...body,
        updated_at: new Date(),
    }, {
        where: {
            id: id,
        },
    });
    return course;
};

const deleteCourse = async (id) => {
  const course = await Course.destroy({
    where: {
      id: id,
    },
  });
  return course;
};

module.exports = {
  getAllCourses,
  createCourse,
  getCourseById,
  updateCourse,
  deleteCourse,
};
