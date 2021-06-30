const express = require("express");
const router = express.Router();
const wordsController = require("../words.controller")

router.get("/home/:id", wordsController.getOneWord);

router.get("/home", wordsController.getWords);

router.post("/home", wordsController.postWord);

router.delete("/home/:id", wordsController.deleteWord)

module.exports = router;