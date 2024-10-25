const Contact = require('../models/Contact');

exports.createContact = (req, res) => {
    const { name, email, phone, message } = req.body;

    try {
        const contact = Contact.insertContact(name, email, phone, message);
        res.status(201).json({ message: 'Contact information saved.', contact });
    } catch (error) {
        res.status(500).json({ message: 'Error saving contact information', error: error.message });
    }
};

exports.getAllContacts = (req, res) => {
    try {
        const contacts = Contact.findAllContacts();
        res.status(200).json(contacts);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving contacts', error: error.message });
    }
};

exports.getContactById = (req, res) => {
    const { id } = req.params;

    try {
        const contact = Contact.findContactById(id);
        if (!contact) {
            return res.status(404).json({ message: 'Contact not found' });
        }
        res.status(200).json(contact);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving contact', error: error.message });
    }
};

exports.deleteContact = (req, res) => {
    const { id } = req.params;

    try {
        const result = Contact.deleteContact(id);
        if (result.changes === 0) {
            return res.status(404).json({ message: 'Contact not found' });
        }
        res.status(200).json({ message: 'Contact deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting contact', error: error.message });
    }
};
