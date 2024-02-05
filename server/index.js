import express from "express";
import cors from 'cors'
import bodyParser from "body-parser";

import Connection from "./database/db.js";
import route from "./routes/routes.js";

const app = express()
Connection()

app.use(cors());
app.use(bodyParser.json({ extended : true}))
app.use(bodyParser.urlencoded({ extended : true}))
app.use('/',route)

const PORT = 8000
app.listen(PORT, ()=>{
    console.log(`The Server is running successfully on the ${PORT}`)
})