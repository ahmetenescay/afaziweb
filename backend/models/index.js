const { createUserTable } = require('./User');
const { createArticleTable } = require('./Article');
const { createCommentTable } = require('./Comment');
const { createAppointmentTable } = require('./Appointment');
const { createContactTable } = require('./Contact');
const { createResearchTable } = require('./Research');

const initializeTables = () => {
    createUserTable();
    createArticleTable();
    createCommentTable();
    createAppointmentTable();
    createContactTable();
    createResearchTable();
};

module.exports = initializeTables;
