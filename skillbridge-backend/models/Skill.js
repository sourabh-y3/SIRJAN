const mongoose = require('mongoose');

const SkillSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    difficulty: {
        type: String,
        enum: ['beginner', 'intermediate', 'advanced'],
        default: 'beginner'
    },
    language: {
        type: String,
        enum: ['en', 'hi', 'ta', 'bn', 'mr'],
        required: true
    },
    audioLessons: [{
        title: String,
        audioUrl: String,
        transcript: String,
        duration: Number
    }],
    arContent: {
        type: String,
        default: null
    },
    futureSkills: {
        demand: {
            type: Number,
            min: 0,
            max: 100
        },
        growth: {
            type: Number,
            min: -100,
            max: 100
        }
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Skill', SkillSchema); 