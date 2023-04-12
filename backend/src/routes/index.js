const express = require('express');

const router = express.Router();

const defaultRoutes = [
    {
        path: '/student',
        route: require('../routes/student'),
    },
    {
        path: '/course',
        route: require('../routes/course'),
    },
    // {
    //     path: '/student_course',
    //     route: require('../controllers/studentCourse'),
    // },
];

defaultRoutes.forEach((route) => {
    router.use(route.path, route.route);
});

module.exports = router;