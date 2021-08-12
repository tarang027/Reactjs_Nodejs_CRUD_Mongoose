const mongoose = require('mongoose');

let User = new mongoose.Schema({
    UserName: {
        type: String
    },
    Bio: {
        type: String
    },
    DateOfBirth: {
        type: Date
    },
    Hobbies: {
        type: String
    },
    Role: {
        type: String
    },
    ProfilePic: {
        type: String
    },
});

module.exports = mongoose.model('User', User);