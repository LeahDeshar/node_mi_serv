import express from "express"
import cors from "cors"

// setup express app
const app = express()
app.use(express.json())
app.use(express.urlencoded({extended: false }))
app.use(cors())
const PORT = process.env.PORT || 3000

app.get("/", (req,res) => {
    return res.json({message: "Welcome to the auth service"})
})


// * Routes
import Routes from "./routes/index.js";
app.use(Routes);


app.listen(PORT, (req,res) => {
    console.log(`Server started on port ${PORT}`)
})


