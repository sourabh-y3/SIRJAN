const express = require('express');
const router = express.Router();
const Skill = require('../models/Skill');
const auth = require('../middleware/auth');

// Get all skills
router.get('/', async (req, res) => {
    try {
        const { language, category, difficulty } = req.query;
        let query = {};

        if (language) query.language = language;
        if (category) query.category = category;
        if (difficulty) query.difficulty = difficulty;

        const skills = await Skill.find(query);
        res.json(skills);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

// Get single skill
router.get('/:id', async (req, res) => {
    try {
        const skill = await Skill.findById(req.params.id);
        if (!skill) {
            return res.status(404).json({ message: 'Skill not found' });
        }
        res.json(skill);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

// Create skill (admin only)
router.post('/', auth, async (req, res) => {
    try {
        const newSkill = new Skill(req.body);
        const skill = await newSkill.save();
        res.json(skill);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

// Update skill (admin only)
router.put('/:id', auth, async (req, res) => {
    try {
        const skill = await Skill.findByIdAndUpdate(
            req.params.id,
            { $set: req.body },
            { new: true }
        );
        if (!skill) {
            return res.status(404).json({ message: 'Skill not found' });
        }
        res.json(skill);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

// Get future skills data
router.get('/future/trends', async (req, res) => {
    try {
        const skills = await Skill.find({}, 'title futureSkills');
        res.json(skills);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

module.exports = router; 