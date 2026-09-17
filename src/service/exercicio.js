class ServiceExercicio {


    listar(lista) {
        if (isNaN(lista)) {
            throw new Error("algo deu merda no código")
        }
        return (lista)
    }
    Celsiusfahre(Celsius) {
        if (isNaN(Celsius)) {
            throw new Error("favor informar somente números")
        }
        return (Celsius *9/5) + 32
    }

    Faherenheitcel(Faherenheit) {
        if (isNaN(Faherenheit)) {
            throw new Error("favor informar somente números")
        }        
        return (Faherenheit - 32) * 5/9
    }

    CelsiusKelvin(Celsius) {
        if (isNaN(Celsius)) {
            throw new Error("favor informar somente números")
        }        
        return Celsius + 273.15
    }
    
}

export default new ServiceExercicio()