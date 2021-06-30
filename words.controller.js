const db = require("./db")

class WordsController {
    async postWord(req, res) {
        const {original, translate} = req.body
        const newWord = await db.query("INSERT INTO words (original, translate) values ($1, $2) RETURNING *", [original, translate])
        res.json(newWord.rows[0])
    }
    async getOneWord(req, res) {
        const id = req.params.id
        const word = await db.query("SELECT * FROM words where id = $1", [id])
        res.json(word.rows[0])
    }
    async getWords(req, res) {
        const {ids} = req.query
        const idsArr = ids.split(",")
        console.log("REQUEST WORDS", idsArr);
        const word = await db.query("SELECT * FROM words WHERE id = ANY($1::int[])",[idsArr])
        res.json(word.rows)
        console.log("get words BACK", res.json(word.rows));
    }
    async deleteWord(req, res) {
        const id = req.params.id
        const word = await db.query("DELETE FROM words where id = $1", [id])
        res.json(word.rows[0])
    }
}

module.exports = new WordsController()