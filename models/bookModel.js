const mongoose = require('mongoose')

const bookModel = mongoose.Schema({
    bookid: { type: String },  // Unique identifier for the book
    isbn: { type: String, required: [true, "ISBN is Required"] },          // ISBN number of the book
    title: { type: String },         // Title of the book
    subtitle: { type: String },      // Subtitle of the book (optional)
    number_of_pages: { type: Number }, // Total number of pages in the book
    description: { type: String },   // Description or synopsis of the book
    classifications: { type: [String] },  // Array of genres/classifications (e.g., Fiction, Non-fiction, etc.)
    authors: { type: [String] },     // Array of authors of the book
    publishers: { type: [String] },  // Array of publishers of the book
    publish_date: { type: Date },    // Date the book was published
    thumbnail_url: { type: String }  // URL for the book's thumbnail image
}, { timestamps: true }
);
module.exports = mongoose.model("Book", bookModel)

