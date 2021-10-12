const express = require("express");
const cors = require("cors");
const cookieParser = require('cookie-parser'); 
const logger = require("morgan"); //Morgan is a HTTP request logger middleware for Node. js. It simplifies the process of logging requests to your application. You might think of Morgan as a helper that generates request logs. It saves developers time because they don't have to manually create these logs.
require('dotenv').config(); // stores environmental variables (.env), place .env at root of server folder

const connectDB = require("./configs/database"); //import database
connectDB(); //activate database

const app = express(); // activate express

app.use("/api/user/", require("./routes/user.route"));

app.use(logger("combined")); // login helper
app.use(cookieParser()); // activate cookies
app.use(express.json()); // alows req.body
app.use(cors({ credentials: true, origin: "http://localhost:3000" })); // client to server

app.listen(process.env.PORT, () => 
    console.log(`Listening on port ${process.env.PORT}`)
)