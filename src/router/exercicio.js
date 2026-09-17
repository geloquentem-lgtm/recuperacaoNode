import express from "express"
import Controllerexercicio from "../controller/exercicio.js"

const router = express.Router()

router.get("/api/listar", Controllerexercicio.listar) 
router.post("/api/Celsiusfahre", Controllerexercicio.Celsiusfahre)
router.post("/Api/Faherenheitcel", Controllerexercicio.Faherenheitcel)
router.post("/Api/CelsiusKelvin", Controllerexercicio.CelsiusKelvin)

export default router