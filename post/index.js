// create server

import express from "express"
import cors from "cors"
import dotenv from "dotenv"

// setup express app
const app = express()
app.use(express.json())
app.use(express.urlencoded({extended: false }))
app.use(cors())
const PORT = process.env.PORT || 4001

app.get("/", (req,res) => {
    return res.json({message: "Welcome to the post service"})
}
)


// server listen
app.listen(PORT, (req,res) => {
    console.log(`Server started on port ${PORT}`)
})
