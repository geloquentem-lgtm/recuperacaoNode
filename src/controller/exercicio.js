import ServiceExercicio from "../service/exercicio.js"

class Controllerexercicio {

    listar(req, res) {
    try {
        const lista = ("a API pode converter: Celsius, Faherenheit e Kelvin")
        res.send(lista)       
    } catch (error) {
         res.send({message: error})       
    }
    }

    Celsiusfahre(req, res) {
    try {
        const Celsius = req.body.Celsius
        const Faherenheit = ServiceExercicio.Celsiusfahre(Celsius)

        res.send(Celsius + " em Faherenheit " + Faherenheit)
    } catch (error) {
        res.send({message: error})
    }
    }

    Faherenheitcel(req, res) {
    try {
        const Faherenheit = req.body.Faherenheit
        const Celsius = (Faherenheit - 32) * 5/9
        res.send( Faherenheit + " em Celsius " + Celsius)
    } catch (error) {
        res.send({message: error})
    }
    }


    CelsiusKelvin(req, res) {
    try {
        const Celsius = req.body.Celsius
        const Kelvin = Celsius + 273.15

        res.send(Celsius + " em Kelvin " + Kelvin)
    } catch (error) {
        res.send({message: error})
    }
}
}

export default new Controllerexercicio()