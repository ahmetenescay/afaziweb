const express = require('express');
const router = express.Router();
const { createContact, getAllContacts, getContactById, deleteContact } = require('../controllers/contactController');

router.post('/', createContact);
router.get('/', getAllContacts);
router.get('/:id', getContactById);
router.delete('/:id', deleteContact);

module.exports = router;
