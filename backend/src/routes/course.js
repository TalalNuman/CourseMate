const express = require('express');
const router = express.Router();
const { courseController } = require('../controllers');

router.get('/',  courseController.getCourses);
router.post('/',  courseController.createCourse);

router.get('/:id',  courseController.getCourseById);
router.put('/:id',  courseController.updateCourse);
router.delete('/:id',  courseController.deleteCourse);

module.exports = router;