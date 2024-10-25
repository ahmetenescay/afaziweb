const express = require('express');
const { buildRouter } = require('adminjs');
const db = require('../config/db');

const router = express.Router();

const initializeAdminRoutes = async () => {
    const { default: AdminJS } = await import('adminjs');

    const adminJs = new AdminJS({
        databases: [db],
        rootPath: '/admin',
    });

    const adminRouter = buildRouter(adminJs);
    router.use(adminJs.options.rootPath, adminRouter);
};

initializeAdminRoutes();

module.exports = router;
