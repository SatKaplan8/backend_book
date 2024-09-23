const Book = require('../models/bookModel')
const asyncHandler = require('express-async-handler')

const getBooks = asyncHandler(async (req, res) => {
    const books = await Book.find()
    res.status(200).json({ message: `Success`, books })
})

const getBooksById = asyncHandler(async (req, res) => {

    const data = await Book.findById(req.params.id);
    if (!data) {
        res.status(404)
        throw new Error('Book Not Found')
    }
    res.status(200).json({ message: `Success`, data })
})

const deleteBook = asyncHandler(async (req, res) => {
    const book = await Book.findById(req.params.id);
    if (!book) {
        res.status(404);
        throw new Error('Book not found');
    }
    await Book.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: `Deleted book with id ${req.params.id}` });
});
const createBook = asyncHandler(async (req, res) => {
    const { bookid, isbn, title, subtitle, number_of_pages, description, classifications, authors, publishers, publish_date, thumbnail_url } = req.body

    if (!isbn) {
        res.status(400)
        throw new Error('Book Isbn is Mandatory');
    }
    const newBook = await Book.create({ bookid, isbn, title, subtitle, number_of_pages, description, classifications, authors, publishers, publish_date, thumbnail_url })
    res.status(201).json({ message: "Create a Book", data: newBook })
})
const updateBook = asyncHandler(async (req, res) => {
    const id = req.params.id;
    const { isbn, title, subtitle, number_of_pages, description, classifications, authors, publishers, publish_date, thumbnail_url } = req.body;
    const book = await Book.findById(id);

    if (!book) {
        res.status(404);
        throw new Error('Book not found');
    }
    const updatedBook = await Book.findByIdAndUpdate(

        id,
        { isbn, title, subtitle, number_of_pages, description, classifications, authors, publishers, publish_date, thumbnail_url },
        { new: true }
    );

    res.status(200).json({ message: `Updated book ${id}`, data: updatedBook });
});

module.exports = { getBooks, getBooksById, createBook, updateBook, deleteBook }