const express = require("express");
const router =express.Router();
const {getBook, createBook, deleteBook} =require("../controllers/books")

router.get("./books", getBook);
router.post("./create/book", createBook);
router.delete("./delete/book", deleteBook);

module.exports=router;