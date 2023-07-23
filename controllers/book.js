const BookModel = require('../models/book');

exports.create = (req, res, next) => {
    const book = new BookModel({
        title: req.body.title,
        author: req.body.author,
        price : req.body.price,
        released_on : req.body.released_on ? req.body.released_on : "",
        coverImage : ""
    })
    console.log(book)
    book.save()
        .then(() => res.status(201).json({ message: "Book created !" }))
        .catch(error => res.status(400).json({ error }))
}

exports.update = (req, res, next) => {
    
}

exports.delete = (req, res, next) => {
    
}