import express from "express"


// setup express app
const app = express()
const PORT = process.env.PORT || 3000

app.get("/", (req,res) => {
    return res.json({message: "Welcome to the auth service"})
})

app.listen(PORT, (req,res) => {
    console.log(`Server started on port ${PORT}`)
})


