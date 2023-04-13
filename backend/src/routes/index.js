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
    {
        path: '/enrolled',
        route: require('../routes/studentCourse'),
    },
];

defaultRoutes.forEach((route) => {
    router.use(route.path, route.route);
});

module.exports = router;