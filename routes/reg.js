const express = require('express')
const router = express.Router();
const Reg = require('../models/regModel')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');
const asyncHandler = require('express-async-handler')
const reg = asyncHandler(async (req, res) => {
    try {
        const { username, password } = req.body;
      
        const reg = new Reg({ username, password });
        await reg.save();
        res.status(200).json({ message: "User Created Successfully" });
    }
    catch (error) {
        res.status(500).json({ message: "User Registration Failed" })
    }    
})



module.exports = reg