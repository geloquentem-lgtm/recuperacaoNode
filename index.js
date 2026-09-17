import express from "express"
import router from "./src/router/exercicio.js"

const app = express()
app.use(express.json())

app.use (router)

app.listen (3000, () => {
        console.log ("Server esta no 3000")
    })