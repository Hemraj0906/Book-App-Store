const express = require("express")
const app = express()
const cors=require("cors")
require("./conection/conn")
const bookroute = require("./routes/route.js")

app.use(cors())


app.use(express.json())


app.use("/api/v1", bookroute);




app.listen(1000, () => {
    console.log("serever started succsefully ")
})