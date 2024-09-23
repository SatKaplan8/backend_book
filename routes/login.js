const express = require('express')
const router = express.Router();
const Reg = require('../models/regModel')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');
const asyncHandler = require('express-async-handler')
const dotenv = require('dotenv').config();

const login = asyncHandler(async (req, res) => {
    try {
        const { username, password } = req.body
        const user = await Reg.findOne({ username })
        if (!user) {
            return res.status(401).json({ error: "Authentication Failed" })
        }
        const passMatch = password == user.password
        if (!passMatch) {
            return res.status(401).json({ error: 'Authentication Failed1' })
        }
        const token = jwt.sign({ username: user.username }, process.env.JWT_SECRET)
        res.status(200).json({ token })
    }
    catch (error) {
        res.status(500).json({ error: 'Login failed' });
    }

})
module.exports = login