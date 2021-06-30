const express = require('express')

const app = express();


const PORT = process.env.PORT || 5000

app.use(express.json({ extended: true }))
app.use("/api", require("./routes/home.routes"));

const cors = require('cors');
const corsOptions ={
    origin:'http://localhost:3000', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}
app.use(cors(corsOptions));


async function startApp() {
    try {
        app.listen(PORT, () => console.log('serv started', PORT))
    }
    catch (e) {
        console.log("START FAILED", e);
    }
}

startApp()