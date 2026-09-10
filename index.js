import express from "express"

const app = express()
app.use(express.json())

app.get("/api/listar", (req, res) => {
    const Celsius = req.params.Celsius
    const Faherenheit = req.params.Faherenheit
    const Kelvin = req.params.Kelvin
    res.send("a API pode converter: " + Celsius + Faherenheit + Kelvin)
})

app.post("/Api/Celsiusfahre", (req, res) => {
    const Celsius = req.body.Celsius
    const Faherenheit = (Celsius *9/5) + 32

    res.send(Celsius + " em Faherenheit " + Faherenheit)
})

app.post("/Api/Faherenheitcel", (req, res) => {
    const Faherenheit = req.body.Faherenheit
    const Celsius = (Faherenheit - 32) * 5/9
    res.send( Faherenheit + " em Celsius " + Celsius)
})

app.post("/Api/CelsiusKelvin", (req, res) => {
    const Celsius = req.body.Celsius
    const Kelvin = Celsius + 273.15

    res.send(Celsius + " em Kelvin " + Kelvin)
})

    app.listen (3000, () => {
        console.log ("Server esta no 3000")
    })