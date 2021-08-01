const express = require('express')
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000
app.use(express.json({ extended: true }))
const corsOptions ={
    "origin": "*",
    "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
    "preflightContinue": false,
    "optionsSuccessStatus": 204,
    // "Access-Control-Allow-Origin": "http://localhost:3000"
}
app.use(cors(corsOptions));
app.use("/api", require("./routes/home.routes"));

async function startApp() {
    try { app.listen(PORT, () => console.log('serv started', PORT)) }
    catch (e) { console.log("START FAILED", e) }
}

startApp()