const Research = require('../models/Research');

const createResearch = async (req, res) => {
    const { title, content, link } = req.body;
    try {
        await Research.insertResearch(title, content, link);
        res.status(201).json({ message: 'Research created successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Error creating research' });
    }
};

const getAllResearches = async (req, res) => {
    try {
        const researches = await Research.findAllResearches();
        res.status(200).json(researches);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching researches' });
    }
};

const getResearchById = async (req, res) => {
    const { id } = req.params;
    try {
        const research = await Research.findResearchById(id);
        if (research) {
            res.status(200).json(research);
        } else {
            res.status(404).json({ error: 'Research not found' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Error fetching research' });
    }
};

const updateResearch = async (req, res) => {
    const { id } = req.params;
    const { title, content, link } = req.body;
    try {
        await Research.updateResearch(id, title, content, link);
        res.status(200).json({ message: 'Research updated successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Error updating research' });
    }
};

const deleteResearch = async (req, res) => {
    const { id } = req.params;
    try {
        await Research.deleteResearch(id);
        res.status(200).json({ message: 'Research deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Error deleting research' });
    }
};

module.exports = {
    createResearch,
    getAllResearches,
    getResearchById,
    updateResearch,
    deleteResearch
};
