const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    preferredLanguage: {
        type: String,
        enum: ['en', 'hi', 'ta', 'bn', 'mr'],
        default: 'en'
    },
    skillPassport: [{
        skillId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Skill'
        },
        completed: {
            type: Boolean,
            default: false
        },
        completionDate: Date,
        score: Number
    }],
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('User', UserSchema); 