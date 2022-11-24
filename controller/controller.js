import { application } from 'express'
import api from '../api/api.js'

class Controller {

    /* Responda en la ruta raíz un mensaje de acuerdo a la hora actual: si dicha hora se
    encuentra entre las 6 y las 12hs será 'Buenos dias!', entre las 13 y las 19hs 'Buenas tardes!'
    y de 20 a 5hs 'Buenas noches!'. */

    static getHora = (req, res) => {

        let mensaje
        if (api.obtenerHora() >= 6 || api.obtenerHora() >= 12) {
            mensaje = 'Buenos dias!'
        }
        if (api.obtenerHora() >= 13 || api.obtenerHora() <= 19) {
            mensaje = 'Buenas tardes!'
        }
        if (api.obtenerHora() >= 20 || api.obtenerHora() <= 5) {
            mensaje = 'Buenas noches!'
        }
        res.send(mensaje)
    }

    /* reciba por query-params dos
    números y la operación a realizar entre ellos.
        /operaciones?num1=5νm2=6&operacion=suma
     */

    static getQuery = ((req, res) => {
        try {
            const query = {
                num1: {},
                num2: {},
                operacion: {}
            }
            if (api.validarQuery(req.query.num1, req.query.operacion)) {

                const stringConNum = req.query.num1

                const arrayNum = stringConNum.split('νm2=', 2)

                const num1 = parseInt(arrayNum[0])
                const num2 = parseInt(arrayNum[1])
                const operacion = req.query.operacion

                switch (operacion) {
                    case 'suma':
                        query.num1 = num1
                        query.num2 = num2
                        query.operacion = num1 + num2
                        break;
                    case 'resta':
                        query.num1 = num1
                        query.num2 = num2
                        query.operacion = num1 - num2
                        break;
                    case 'multiplicacion':
                        query.num1 = num1
                        query.num2 = num2
                        query.operacion = num1 * num2
                        break;
                    case 'division':
                        query.num1 = num1
                        query.num2 = num2
                        query.operacion = num1 / num2
                }
               
                res.send(query)
            }
        } catch (err) {

            const error = {
                num1: { valor: 'x', tipo: 'y' },
                num2: { valor: 'x', tipo: 'y' },
                operacion: { valor: 'x', tipo: 'y' }

            }

            res.send(error)
            console.log(`error en query-params ${err.message}`)

        }


    })


    /* iniciará un cálculo de 10000
    números aleatorios en el rango del 1 al 20. Luego de dicho proceso, el servidor retornará un
    objeto cuyas claves sean los números salidos y el valor asociado a cada clave será la
    cantidad de veces que salió dicho número. */

    static getRandom = (req, res) => {
        const objRandom = {
            1: 0,
            2: 0,
            3: 0,
            4: 0,
            5: 0,
            6: 0,
            7: 0,
            8: 0,
            9: 0,
            10: 0,
            11: 0,
            12: 0,
            13: 0,
            14: 0,
            15: 0,
            16: 0,
            17: 0,
            18: 0,
            19: 0,
            20: 0
        }


        for (let i = 0; i < 10000; i++) {
            let value = api.random()

            if (objRandom['i'] == value) {
                objRandom.value = ++value
            }
        }
        console.log(objRandom[3])
        console.log(objRandom[1].value)
        res.send(objRandom)
    }
}


export default Controller