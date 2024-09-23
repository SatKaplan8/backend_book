const express = require('express')
const { getBooks, getBooksById, createBook, updateBook, deleteBook } = require('../controllers/bookController')
const reg = require('./reg')
const login = require('./login')
const router = express.Router();

router.route('/').get(getBooks).post(createBook)
router.route('/:id').get(getBooksById).delete(deleteBook).put(updateBook)
router.route('/register').post(reg)
router.route('/login').post(login)

module.exports = router