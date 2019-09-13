"use strict"
let mongoose = require('mongoose')

let booksSchema = mongoose.Schema({
    title:String,
    description:String,
    images:String,
    price:Number
}) 

let Books = mongoose.model('Books',booksSchema);

module.export = Books;