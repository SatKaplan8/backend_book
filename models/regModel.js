const mongoose = require('mongoose')
const regModel = mongoose.Schema({
    username: { type: String },
    password: { type: String }
}, { timestamps: true }
);

module.exports = mongoose.model("Reg", regModel)