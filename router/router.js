import express from 'express'
import controller from '../controller/controller.js'

const router = express.Router()


/* GET Mensaje hora actual */
router.get('/', controller.getHora)

// /* dispondrá de otra ruta get ‘/random’ */
router.get('/random', controller.getRandom)

// /* declarar una ruta get ‘/operaciones’ */
router.get('/operaciones', controller.getQuery)


export default router