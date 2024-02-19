const Book = require("../models/books")

exports.getBook=async (req,res) =>{
    try{
        const books=Book.find();
        return res.status(200).json({message:"All Books found", books:books})

    }
    catch(error){
        res.status(500).json({message:"Internal Server Error "})
    }
}


exports.createBook=async (req,res) =>{
    try{
        const book= req.body;
        let existingBook= await Book.findOne({name:book.name});
        if(existingBook ) res.status(400).json({message:"Book Already Exist"})
        const newBook= await Book.create(book);
        return res.status(201).json({message:"Book Added Succesfully", book:newBook })
    }
    catch(error){
        res.status(500).json({message:"Internal Server Error"});
    }
}


exports.deleteBook = async (req,res) =>{
    try{
        const {id}= req.body;
        let deleteBook =Book.findByIdAndDelete(id);
        if(!deleteBook) return res.status(400).json({message:"No Book found with that id "});
        return res.status(201).json({message:"Book deleted succesfully"})
    }
    catch(error){
        return  res.status(500).json({message:"Internal Server Error"})}
}