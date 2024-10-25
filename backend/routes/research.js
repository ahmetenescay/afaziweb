const express = require('express');
const router = express.Router();
const { createResearch, getAllResearches, getResearchById, updateResearch, deleteResearch } = require('../controllers/researchController');
const protect = require('../middleware/authMiddleware');


router.post('/', protect, createResearch);
router.get('/', getAllResearches);
router.get('/:id', getResearchById);
router.put('/:id', protect, updateResearch);
router.delete('/:id', protect, deleteResearch);

module.exports = router;
